Vue.component('item-lom', {
    template: '#lom',
    props: {
        configuration: Object,
        bios: Object,
        advanced: Object
    },
    data: function () {
        return {
            i18ns: [],
            dataList: [],
            tabActive: 'port1'
        }
    },
    created: function () {
        this.i18ns = getIn18();
        this.initData();
    },
    methods: {
        initData: function () {
            this.dataList=[];
            var slotName = this.i18ns.config.configurationModule_LOMCard + '1';
            var item = {
                isUnChange: true,
                slot: slotName,
                PortsConfig: [{
                        "PortId": 1,
                        "PFsInfo": [{
                            "PFId": 0,
                            "Protocol": "ETHERNET",
                            "MACEffective": false
                        }]
                    },
                    {
                        "PortId": 2,
                        "PFsInfo": [{
                            "PFId": 1,
                            "Protocol": "ETHERNET",
                            "MACEffective": false
                        }]
                    }
                ]
            }
            if (this.configuration && _.keys(this.configuration).length > 0) {
                item.PortsConfig = this.configuration.PortsConfig;
                item.isUnChange = false
            }
            this.dataList.push(item);
        },
        configLOM: function (row) {
            this.$refs.table.toggleRowExpansion(row)
        },
        buildLOM: function () {
            if (this.dataList[0].isUnChange || (this.bios.PCIePortDisable3 != 'Enabled' && this.bios.PCIePortDisable3 != 'Auto') || this.bios.BootType != 'UEFIBoot' || this.advanced.ClearUniqueKey === true) {
                return {};
            }
            return {
                Configuration: {
                    PortsConfig: this.dataList[0].PortsConfig
                }
            };
        }

    }
});