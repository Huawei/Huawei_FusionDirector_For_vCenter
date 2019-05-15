Vue.component('partial', {
    template: '<div>' +
        '<div class="itemUpgrade" v-for="(item,index) in batchDevice" :key="index">' +
        '<p><span>NO.{{index+1}}</span>' +
        '<span class="optionIcon" v-if="(index+1)==batchDevice.length&&item.list.length>1" @click="addDeviceSwitch(item.list,index)">' +
        ' <i class="el-icon-circle-plus-outline"></i></span>' +
        '<span class="optionIcon" v-if="(index+1)<batchDevice.length" @click="editDeviceSwitch(item,index)"> <i class="el-icon-edit"></i></span>' +
        '<span class="optionIcon" v-if="(index+1)<batchDevice.length" @click="delDeviceSwitch(item.list,index)"><i class="el-icon-delete"></i></span>' +
        '</p>' +
        '<p><span>{{i18ns.upgradePlan.upgradePlan_deviceCounts}}：<span style="cursor: pointer;color: #409eff;" @click="showDetil(item.list,index)">{{item.list.length}}' + '</span></span></p>' +
        '<p>' +
        '<span v-if="(index+1)<batchDevice.length">{{i18ns.upgradePlan.upgradePlan_timeDelay}}：<span>{{item.timeDelay}} h</span></span>' +
        '</p>' +
        '<div v-show="batchDevice.length>1&&index!=batchDevice.length-1" class="rightImg">' +
        '<img src="../../images/arrow_left.png" alt="">' +
        '</div>' +
        '</div>' +
        '<!-- 分批升级的详情 -->' +
        '<el-dialog :close-on-click-modal="false"  :title="batchDescTit" :visible.sync="batchDescDialog" width="80%">' +
        '<el-table :data="batchItem" border style="width: 100%; margin-top: 10px;" header-row-class-name="my_table_header">' +
        '<el-table-column prop="" :label="i18ns.upgradePlan.upgradePlan_name">' +
        '<template slot-scope="scope"> {{scope.row.Name?scope.row.Name:"--"}} </template>' +
        '</el-table-column>' +
        '<el-table-column prop="BMCIP" :label="i18ns.upgradePlan.upgradePlan_BMCEMIP">'+
            '<template slot-scope="scope">{{scope.row.BMCIP||scope.row.HostName}}</template>'+
        '</el-table-column>' +
        '<el-table-column prop="SerialNumber" :label="i18ns.upgradePlan.upgradePlan_serialNumber"></el-table-column>' +
        '<el-table-column prop="ProductType" :label="i18ns.upgradePlan.upgradePlan_productType"></el-table-column>' +
        '<el-table-column prop="Groups" :label="i18ns.upgradePlan.upgradePlan_group">' +
        '<template slot-scope="scope"> <span>{{getGroupTxt(scope.row.Groups)}}</span></template>' +
        '</el-table-column>' +
        '<el-table-column prop="AssetTag" :label="i18ns.upgradePlan.upgradePlan_assetLabel">' +
        '<template slot-scope="scope"><span>{{scope.row.AssetTag?scope.row.AssetTag:"--"}}</span></template>' +
        '</el-table-column>' +
        '</el-table>' +
        '<p style="text-align:right;padding:0 20px;" v-if="batchItem.length>0">{{i18ns.common.common_totalNumber}}{{batchItem.length}}</p>' +
        '</el-dialog>' +
        '<el-dialog :close-on-click-modal="false" :title="i18ns.upgradePlan.upgradePlan_editDelayTime" :visible.sync="editDelayTimeDialog" width="60%">' +
        '<p><span>{{i18ns.upgradePlan.upgradePlan_delayTime}}：</span><inputnum ref="inputnum" :num="delayTime" @changenum="setnum"></inputnum></p>' +
        '<div slot="footer" class="dialog-footer"><el-button @click="editDelayTimeDialog=false">{{i18ns.common.no}}</el-button><el-button @click="ensureSetTime" :element-loading-text="i18ns.common.loading" type="primary">{{i18ns.common.yes}}</el-button></div>' +
        '</el-dialog>' +
        '</div>',
    data: function () {
        return {
            i18ns: [],
            batchDescTit: '',
            batchDescDialog: false,
            batchItem: [],
            editDelayTimeDialog: false,
            delayTime: null,
            editIndex: null
        }
    },
    props: {
        FDIp: String,
        batchDevice: Array
    },
    created: function () {
        this.i18ns = getIn18();
        console.log(this.batchDevice)
    },
    methods: {
        //分批
        addDeviceSwitch: function (item, index) {
            var batchObj = {
                list: item,
                teamName: "NO." + (Number(index) + 1)
            }
            this.$emit('adddevice', batchObj)
        },
        //详情
        showDetil: function (item, index) {
            this.batchDescTit = "NO." + (Number(index) + 1) + " " + this.i18ns.upgradePlan.upgradePlan_deviceTableList;
            this.batchItem = item;
            this.batchDescDialog = true;
        },
        //删除
        delDeviceSwitch: function (item, index) {
            this.batchDevice.splice(index, 1);
            this.batchDevice[this.batchDevice.length - 1].list = this.batchDevice[this.batchDevice.length - 1].list.concat(item)
        },
        //编辑延迟时间
        editDeviceSwitch: function (item, index) {
            this.delayTime = item.timeDelay;
            this.editIndex = index;
            this.editDelayTimeDialog = true;
            var _this = this
            Vue.nextTick(function () {
                _this.$refs.inputnum.resetnum(item.timeDelay.toFixed(1).toString())
            })
        },
        /**
         * 确认设置延迟时间
         */
        ensureSetTime: function () {
            this.batchDevice[this.editIndex].timeDelay = this.delayTime;
            this.editDelayTimeDialog = false;
        },
        /**
         * 设备中所属组
         */
        getGroupTxt: function (group) {
            if (group) {
                if (typeof group == 'string') {
                    return group
                } else if (Array.isArray(group)) {
                    return group.join(',')
                } else {
                    return this.i18ns.upgradePlan.upgradePlan_nullGroup
                }
            } else {
                return this.i18ns.upgradePlan.upgradePlan_nullGroup
            }
        },
        /**
         * 改变时间
         */
        changeTime: function (val) {
            var num = val.toFixed(1)
            this.delayTime = num;
        },
        setnum: function (val) {
            this.delayTime = val;
        }

    }

})