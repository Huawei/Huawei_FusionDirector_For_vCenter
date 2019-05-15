Vue.component('switchTable', {
    template: '<el-table ref="switchtable" v-bind:data="data" style="width:100%;" header-row-class-name="my_table_header" :default-sort = "{prop:'+"'Index'"+'}" @expand-change="toggleRow" @select="select" @select-all="selectAll" :row-class-name="getClassName" >'
            +'<el-table-column type="selection" width="55" v-if="isCheck"></el-table-column>'
            +'<el-table-column type="expand">'
            +    '<template slot-scope="props">'
            +       '<el-table :data="props.row.Firmwares" ref="Firmwares" style="width: 100%;" row-class-name="row-expand-cover" :show-header="false">'
            +           '<el-table-column :label="i18ns.deviceVersionStatus.deviceVersionStatus_slotNum"> </el-table-column>'
            +           '<el-table-column :label="i18ns.deviceVersionStatus.deviceVersionStatus_deviceType"> </el-table-column>'
            +           '<el-table-column prop="FirmwareType" :label="i18ns.deviceVersionStatus.deviceVersionStatus_firmwareType"> </el-table-column>'
            +           '<el-table-column prop="CurrentVersion" :label="i18ns.deviceVersionStatus.deviceVersionStatus_currentVersion" :show-overflow-tooltip="true"> </el-table-column>'
            +           '<el-table-column prop="TargetVersion" :label="i18ns.deviceVersionStatus.deviceVersionStatus_targetVersion" :show-overflow-tooltip="true"> </el-table-column>'
            +       '</el-table>'
            +  ' </template>'
            +'</el-table-column>'
            +'<el-table-column prop="Index" :label="i18ns.deviceVersionStatus.deviceVersionStatus_slotNum">'
            +'<template slot-scope="scope">  {{scope.row.Index==1||scope.row.Index==4 ?scope.row.Index+"E" : scope.row.Index+"X"}} </template>'
            +'</el-table-column>'
            +'<el-table-column prop="Name" :label="i18ns.deviceVersionStatus.deviceVersionStatus_deviceType"> </el-table-column>'
            +'<el-table-column prop="FirmwareType" :label="i18ns.deviceVersionStatus.deviceVersionStatus_firmwareType">'
            + '<template slot-scope="scope">  {{scope.row.Firmwares&&scope.row.Firmwares.length<=1?scope.row.Firmwares[0].FirmwareType:""}} </template>'
            +'</el-table-column>'
            +'<el-table-column prop="CurrentVersion" :label="i18ns.deviceVersionStatus.deviceVersionStatus_currentVersion" :show-overflow-tooltip="true">'
            +    '<template slot-scope="scope"> {{scope.row.Firmwares&&scope.row.Firmwares.length<=1?scope.row.Firmwares[0].CurrentVersion:""}} </template>'
            +'</el-table-column>'
            +'<el-table-column prop="TargetVersion" :label="i18ns.deviceVersionStatus.deviceVersionStatus_targetVersion">'
            +    '<template slot-scope="scope"> {{scope.row.Firmwares&&scope.row.Firmwares.length<=1?scope.row.Firmwares[0].TargetVersion:""}} </template>'
            +'</el-table-column>'
            +'</el-table>',
    data: function () {
        return {
            i18ns: [],
            data:[]
        }
    },
    props: {
        FDIp: String,
        switchData:Array,
        isCheck:{
            type:Boolean,
            default:true
        }
    },
    created: function () {
        this.i18ns = getIn18();
        this.data =  JSON.parse(JSON.stringify(this.switchData))
    },
    updated:function(){
        var _this = this;
        this.$nextTick(function () {
            _this.data.forEach(function(row){
                if(row.Selected==true){
                    _this.$refs.switchtable.toggleRowSelection(row,true);
                }else{
                    _this.$refs.switchtable.toggleRowSelection(row,false);
                }
            })
        })
    },
    methods: {
        handleClick:function(){
            var _this =this
            this.$nextTick(function () {
                _this.$refs['switchtable'].doLayout();
            })
        },
        hideFirmwares:function(){
            var _this =this
            this.data.forEach(function(row) {
                _this.$refs.switchtable.toggleRowExpansion(row,false)
            })
        },
        selectAll:function(val){
            var data = this.data;
            if(val.length>0){
                for (var i = 0; i < data.length; i++) {
                    data[i].Selected=true;
                }
            }else{
                for (var i = 0; i <data.length; i++) {
                    data[i].Selected=false;
                }
            }
            this.$emit('taskselectionchange',val)
        },
        select:function(selection, row){
            var _this = this;
            selection.forEach(function(item){
                if(item.Index==row.Index){
                    var data = [], group = [];
                    if(row.Firmwares){
                        for (var k = 0; k < row.Firmwares.length; k++) {
                            if(row.Firmwares[k].RelatedDevices&&row.Firmwares[k].RelatedDevices.length>0){
                                group = _.uniq(_.concat(group,row.Firmwares[k].RelatedDevices))
                            }
                        }
                    }
                    data =  _this.data;
                    data.forEach(function(dataItem) {
                        if(dataItem.Index==row.Index){
                            dataItem.Selected=true;
                        }
                        if(group.indexOf(dataItem.Index)>-1&&dataItem.Selected==false){
                            (function(arg){
                                Vue.nextTick(function () {
                                    _this.$refs.switchtable.toggleRowSelection(arg,true);
                                })
                            })(dataItem);
                            dataItem.Selected=true;
                        }
                    });
                }else{
                    var data = [], group = [];
                    if(row.Firmwares){
                        for (var k = 0; k < row.Firmwares.length; k++) {
                            if(row.Firmwares[k].RelatedDevices&&row.Firmwares[k].RelatedDevices.length>0){
                                group = _.uniq(_.concat(group,row.Firmwares[k].RelatedDevices))
                            }
                        }
                    }
                    data =  _this.data;
                    data.forEach(function(dataItem) {
                        if(dataItem.Index==row.Index){
                            dataItem.Selected=false;
                        }
                        if(group.indexOf(dataItem.Index)>-1&&dataItem.Selected==true){
                            (function(arg){
                                Vue.nextTick(function () {
                                    _this.$refs.switchtable.toggleRowSelection(arg,false);
                                })
                            })(dataItem);
                            dataItem.Selected=false;
                        }
                    });
                }
            });
            this.$emit('taskselectionchange',selection)
        },
        /**
         * 隐藏展开图标
         */
        getClassName: function (row, expandedRows) {
            var res = [];
            if (row.row.Firmwares && row.row.Firmwares.length == 1) {
                res.push('row-expand-cover')
            } else {
                res.push('hide-padding')
            }
            return res.join(' ')
        },
        /**
         * 展开行
         */
        toggleRow:function(row, expandedRows){
            if(!row.Firmwares||row.Firmwares.length<=1){
                this.$refs.switchtable.toggleRowExpansion(row,false)
            }
            if(expandedRows.length>0){
                var _this =this
                this.$nextTick(function () {
                    if(_this.$refs['Firmwares']){
                        _this.$refs['Firmwares'].doLayout()
                    }
                })
            }
        }

    }

})