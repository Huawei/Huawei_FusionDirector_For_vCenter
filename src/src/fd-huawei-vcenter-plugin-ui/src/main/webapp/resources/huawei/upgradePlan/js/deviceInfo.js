Vue.component('deviceInfo', {
    template: '<div class="detailDevice">' +
        '<el-dialog :close-on-click-modal="false" :title="deviceItemTit" :visible.sync="deviceInfoLog" width="80%">' +
        '<el-table ref="deviceInfo" :data="deviceInfo" style="width: 100%;" header-row-class-name="my_table_header" :row-class-name="getClassName">' +
        '<el-table-column type="expand">' +
        '<template slot-scope="props">' +
        '<el-table :data="props.row.Modules" style="width: 100%;" :show-header="false">' +
        '<el-table-column prop="ModuleName" :label="i18ns.deviceVersionStatus.deviceVersionStatus_firmwareType"></el-table-column>' +
        '<el-table-column prop="Status" :label="i18ns.deviceVersionStatus.deviceVersionStatus_status"><template slot-scope="scope">{{getStatusName(scope.row.Status)}}</template></el-table-column>' +
        '<el-table-column prop="DeviceName" :show-overflow-tooltip="true" :label="i18ns.deviceVersionStatus.deviceVersionStatus_name"></el-table-column>' +
        '<el-table-column prop="Module" :show-overflow-tooltip="true" :label="i18ns.deviceVersionStatus.deviceVersionStatus_model"></el-table-column>' +
        '<el-table-column prop="Slot" :label="i18ns.deviceVersionStatus.deviceVersionStatus_slot"></el-table-column>' +
        '<el-table-column prop="CurrentVersion" :show-overflow-tooltip="true" :label="i18ns.deviceVersionStatus.deviceVersionStatus_currentVersion"></el-table-column>' +
        '<el-table-column prop="TargetVersion" :label="i18ns.deviceVersionStatus.deviceVersionStatus_targetVersion"></el-table-column>' +
        '<el-table-column prop="CurrentDriverVersion" :label="i18ns.deviceVersionStatus.deviceVersionStatus_currentDriverVersion"></el-table-column>' +
        '<el-table-column prop="TargetDriverVersion" :label="i18ns.deviceVersionStatus.deviceVersionStatus_targetDriverVersion"></el-table-column>' +
        '</el-table>' +
        '</template>' +
        '</el-table-column>' +
        '<el-table-column prop="ModuleName" :label="i18ns.deviceVersionStatus.deviceVersionStatus_firmwareType"></el-table-column>' +
        '<el-table-column prop="Status" :label="i18ns.deviceVersionStatus.deviceVersionStatus_status"><template slot-scope="scope">{{getStatusName(scope.row.Status)}}</template></el-table-column>' +
        '<el-table-column :label="i18ns.deviceVersionStatus.deviceVersionStatus_name"><template slot-scope="scope">{{scope.row.Modules && scope.row.Modules.length<=1?scope.row.Modules[0].DeviceName:""}}</template></el-table-column>' +
        ' <el-table-column :label="i18ns.deviceVersionStatus.deviceVersionStatus_model"><template slot-scope="scope">{{scope.row.Modules && scope.row.Modules.length<=1?scope.row.Modules[0].Module:""}}</template></el-table-column>' +
        ' <el-table-column :label="i18ns.deviceVersionStatus.deviceVersionStatus_slot"><template slot-scope="scope">{{scope.row.Modules && scope.row.Modules.length<=1?scope.row.Modules[0].Slot:""}}</template></el-table-column>' +
        '<el-table-column :show-overflow-tooltip="true" :label="i18ns.deviceVersionStatus.deviceVersionStatus_currentVersion"><template slot-scope="scope">{{scope.row.Modules && scope.row.Modules.length<=1?scope.row.Modules[0].CurrentVersion:""}}</template></el-table-column>' +
        '<el-table-column :label="i18ns.deviceVersionStatus.deviceVersionStatus_targetVersion"><template slot-scope="scope">{{scope.row.Modules && scope.row.Modules.length<=1?scope.row.Modules[0].TargetVersion:""}}</template></el-table-column>' +
        '<el-table-column :label="i18ns.deviceVersionStatus.deviceVersionStatus_currentDriverVersion"><template slot-scope="scope">{{scope.row.Modules && scope.row.Modules.length<=1?scope.row.Modules[0].CurrentDriverVersion:""}}</template></el-table-column>' +
        '<el-table-column :label="i18ns.deviceVersionStatus.deviceVersionStatus_targetDriverVersion"><template slot-scope="scope">{{scope.row.Modules && scope.row.Modules.length<=1?scope.row.Modules[0].TargetDriverVersion:""}}</template></el-table-column>' +
        '</el-table>' +
        '<div slot="footer" class="dialog-footer"><el-button @click="deviceInfoLog = false">{{i18ns.common.close}}</el-button></div>' +
        '</el-dialog>' +
        '</div>',
    data: function () {
        return {
            i18ns: [],
            deviceInfoLog: false,
        }
    },
    props: {
        FDIp: String,
        deviceInfo: Array,
        deviceItemTit: String
    },
    created: function () {
        this.i18ns = getIn18();
    },
    methods: {
        show: function () {
            this.deviceInfoLog = true;
        },
        /**
         * 国际化状态
         */
        getStatusName: function (status) {
            switch (status) {
                case 'ToBeUpgraded':
                    return this.i18ns.deviceVersionStatus.deviceVersionStatus_toBeUpgraded;
                case 'ToTakeEffect':
                    return this.i18ns.deviceVersionStatus.deviceVersionStatus_toTakeEffect;
                case 'TakingEffect':
                    return this.i18ns.deviceVersionStatus.deviceVersionStatus_takingEffect;
                case 'Effective':
                    return this.i18ns.deviceVersionStatus.deviceVersionStatus_effectived;
                case 'Upgrading':
                    return this.i18ns.deviceVersionStatus.deviceVersionStatus_Upgrading;
                case '':
                    return ' ';
                case undefined:
                    return ' ';
                default:
                    return '';
            }
        },
        /**
         * 隐藏展开图标
         */
        getClassName: function (row, expandedRows) {
            var res = [];
            if (row.row.Modules && row.row.Modules.length == 1) {
                res.push('row-expand-cover')
            } else {
                res.push('hide-padding')
            }
            return res.join(' ')
        },

    }

})