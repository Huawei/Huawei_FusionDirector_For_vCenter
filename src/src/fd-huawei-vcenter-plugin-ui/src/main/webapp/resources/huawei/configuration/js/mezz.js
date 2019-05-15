Vue.component('item-mezz', {
    template: '#mezz',
    props: {
        mezzs: Array,
        bios: Object,
        advanced: Object
    },
    data: function () {
        return {
            i18ns: [],
            dataList: [],
            portConfig: {},
            mz22Dialog: {
                visible: false,
                active: '0'
            },
            mezz52singleChannelDialog: {
                visible: false,
                active: '0'
            },
            mezz52multiChannelDialog: {
                visible: false,
                active: '0',
                pfsInfoActive: '0'
            },
            mezzIndex: 0,

        }
    },
    computed: {
        _dataList: function () {
            var array = [];
            for (var i = 0; i < this.dataList.length; i++) {
                if (this.dataList[i].isUnChange == false) {
                    array.push(this.dataList[i]);
                }
            }
            return array;
        }
    },
    created: function () {
        this.i18ns = getIn18();
        this.dataList = this.mezzs;
        this.initMEZZ();
    },
    methods: {
        initMEZZ: function () {
            this.dataList = this.mezzs;
        },
        showConfig: function (index, row) {
            this.getInitPortConfig(index, row);
            switch (row.cartType) {
                case "MZ220":
                case "MZ221":
                    this.mz22Dialog.visible = true;
                    break;
                case "MZ520":
                case "MZ522":
                    if (row.multiChannel) {
                        this.mezz52multiChannelDialog.visible = true;
                        break;
                    } else {
                        this.mezz52singleChannelDialog.visible = true;
                        break;
                    }
                default:
                    break;
            }
        },
        mz22Save: function (manual) {
            var portConfig = this.dataList[this.mezzIndex].portConfig;
            var PortsConfig = [];
            var reg = /^[0-9A-F]{16}$/;
            for (var i = 0; i < portConfig.length; i++) {
                var port = portConfig[i];
                var PortsConfigItem = {
                    PortId: port.PortId,
                    PFsInfo: [{
                        "PFId": i,
                        "Protocol": "FC"
                    }],
                    SANBootEnabled: port.SANBootEnabled
                };
                var FCoEBootToTargets = [];
                for (var j = 0; j < port.FCoEBootToTargets.data.length; j++) {
                    var row = port.FCoEBootToTargets.data[j];
                    FCoEBootToTargets.push({
                        "TargetId": row.TargetId,
                        "FCoEWWPN": row.FCoEWWPN,
                        "BootLun": row.BootLun !== '' ? parseInt(row.BootLun) : null
                    });
                    if ((port.SANBootEnabled !== undefined) && row.FCoEWWPN && !reg.test(row.FCoEWWPN)) {
                        bl = false;
                        var tips = app.i18ns.config.configurationModule_FCoEWWPNCheck.format(port.name)
                        app.$alert(tips, app.i18ns.prompt, {
                            confirmButtonText: app.i18ns.confirm,
                        });
                        return;
                    }
                    if ((port.SANBootEnabled !== undefined) && row.BootLun && !(row.BootLun >= 0 && row.BootLun <= 255 && row.BootLun == parseInt(row.BootLun))) {
                        bl = false;
                        var tips = app.i18ns.config.configurationModule_BootLunCheck.format(port.name)
                        app.$alert(tips, app.i18ns.prompt, {
                            confirmButtonText: app.i18ns.confirm,
                        });
                        return;
                    }
                }
                if (port.SANBootEnabled) {
                    PortsConfigItem.FCoEBootToTargets = FCoEBootToTargets;
                }
                PortsConfig.push(PortsConfigItem);
            }
            this.dataList[this.mezzIndex].isEdited = manual;
            this.dataList[this.mezzIndex].Configuration = {
                PortsConfig: PortsConfig
            };
            this.mz22Dialog.visible = false;
        },
        mezz52singleChanneSave: function (manual) {
            var portConfig = this.dataList[this.mezzIndex].portConfig;
            var PortsConfig = [];
            var reg = /^[0-9A-F]{16}$/;
            for (var i = 0; i < portConfig.length; i++) {
                var port = portConfig[i];
                var PortsConfigItem = {
                    PortId: port.PortId,
                    MultifunctionMode: port.MultifunctionMode,
                    SRIOVEnabled: port.SRIOVEnabled,
                    BootProtocol: port.BootProtocol
                };
                switch (port.BootProtocol) {
                    case "PXE":
                        PortsConfigItem.PFsInfo = [{
                            "PFId": port.PortId % 2 == 1 ? 0 : 1,
                            "Protocol": "ETHERNET"
                        }];
                        if (port.VlanId !== undefined && port.VlanId !== null && port.VlanId !== '') {
                            PortsConfigItem.VlanId = port.VlanId;
                        }
                        break;
                    case "FCoE":
                        PortsConfigItem.PFsInfo = [{
                            "PFId": port.PortId % 2 == 1 ? 0 : 1,
                            "Protocol": "FCoE"
                        }];
                        PortsConfigItem.BootToTarget = port.BootToTarget;
                        var FCoEBootToTargets = [];
                        for (var j = 0; j < port.FCoEBootToTargets.data.length; j++) {
                            var row = port.FCoEBootToTargets.data[j];
                            FCoEBootToTargets.push({
                                "TargetId": row.TargetId,
                                "FCoEWWPN": row.FCoEWWPN,
                                "TargetEnabled": row.TargetEnabled,
                                "BootLun": row.BootLun !== '' ? parseInt(row.BootLun) : null
                            });
                            if ((port.BootToTarget !== undefined) && row.FCoEWWPN && !reg.test(row.FCoEWWPN)) {
                                bl = false;
                                var tips = app.i18ns.config.configurationModule_FCoEWWPNCheck.format(port.name)
                                app.$alert(tips, app.i18ns.prompt, {
                                    confirmButtonText: app.i18ns.confirm,
                                });
                                return;
                            }
                            if ((port.BootToTarget !== undefined) && row.BootLun && !(row.BootLun >= 0 && row.BootLun <= 255 && row.BootLun == parseInt(row.BootLun))) {
                                bl = false;
                                var tips = app.i18ns.config.configurationModule_BootLunCheck.format(port.name)
                                app.$alert(tips, app.i18ns.prompt, {
                                    confirmButtonText: app.i18ns.confirm,
                                });
                                return;
                            }

                        }
                        if (port.BootToTarget) {
                            PortsConfigItem.FCoEBootToTargets = [];
                            for (var k = 0; k < FCoEBootToTargets.length; k++) {
                                var FCoEBootToTarget = FCoEBootToTargets[k];
                                if (FCoEBootToTarget.TargetEnabled !== true) {
                                    PortsConfigItem.FCoEBootToTargets.push(_.omit(FCoEBootToTarget, ['FCoEWWPN', 'BootLun']));
                                } else {
                                    PortsConfigItem.FCoEBootToTargets.push(FCoEBootToTarget);
                                }
                            }
                        }
                        break;
                    case "NONE":
                        PortsConfigItem.PFsInfo = [{
                            "PFId": port.PortId % 2 == 1 ? 0 : 1,
                            "Protocol": "ETHERNET"
                        }];
                        break;
                    case "iSCSI":
                        PortsConfigItem.PFsInfo = [{
                            "PFId": port.PortId % 2 == 1 ? 0 : 1,
                            "Protocol": "iSCSI"
                        }];
                        break;
                    default:
                        break;
                }
                PortsConfig.push(PortsConfigItem);
            }
            this.dataList[this.mezzIndex].isEdited = manual;
            this.dataList[this.mezzIndex].Configuration = {
                PortsConfig: PortsConfig
            };
            this.mezz52singleChannelDialog.visible = false;
        },
        mezz52multiChanneSave: function (manual) {
            var portConfig = this.dataList[this.mezzIndex].portConfig;
            var PortsConfig = [];
            var reg = /^[0-9A-F]{16}$/;
            for (var i = 0; i < portConfig.length; i++) {
                var port = portConfig[i];
                var PortsConfigItem = {
                    PortId: port.PortId,
                    MultifunctionMode: port.MultifunctionMode,
                    BootProtocol: port.BootProtocol,
                    PFsInfo: []
                };
                var totalMinBandwidth = 0;
                for (var j = 0; j < port.PFsInfo.length; j++) {
                    var row = port.PFsInfo[j]
                    totalMinBandwidth += row.MinBandwidth;
                    PortsConfigItem.PFsInfo.push({
                        "PFId": row.PFId,
                        "Protocol": row.Protocol,
                        "MinBandwidth": row.MinBandwidth,
                        "MaxBandwidth": row.MaxBandwidth
                    });
                }
                if (totalMinBandwidth != 100) {
                    var tips = app.i18ns.config.configurationModule_MinBandwidthCheck.format(port.name)
                    app.$alert(tips, app.i18ns.prompt, {
                        confirmButtonText: app.i18ns.confirm,
                    });
                    return;
                }
                switch (port.BootProtocol) {
                    case "PXE":
                        if (port.VlanId !== undefined && port.VlanId !== null && port.VlanId !== '') {
                            PortsConfigItem.VlanId = port.VlanId;
                        }
                        break;
                    case "FCoE":
                        PortsConfigItem.BootToTarget = port.BootToTarget;
                        var FCoEBootToTargets = [];
                        for (var j = 0; j < port.FCoEBootToTargets.data.length; j++) {
                            var row = port.FCoEBootToTargets.data[j];
                            FCoEBootToTargets.push({
                                "TargetId": row.TargetId,
                                "FCoEWWPN": row.FCoEWWPN,
                                "TargetEnabled": row.TargetEnabled,
                                "BootLun": row.BootLun !== '' ? parseInt(row.BootLun) : null
                            });
                            if ((port.BootToTarget !== undefined) && row.FCoEWWPN && !reg.test(row.FCoEWWPN)) {
                                bl = false;
                                var tips = app.i18ns.config.configurationModule_FCoEWWPNCheck.format(port.name)
                                app.$alert(tips, app.i18ns.prompt, {
                                    confirmButtonText: app.i18ns.confirm,
                                });
                                return;
                            }
                            if ((port.BootToTarget !== undefined) && row.BootLun && !(row.BootLun >= 0 && row.BootLun <= 255 && row.BootLun == parseInt(row.BootLun))) {
                                bl = false;
                                var tips = app.i18ns.config.configurationModule_BootLunCheck.format(port.name)
                                app.$alert(tips, app.i18ns.prompt, {
                                    confirmButtonText: app.i18ns.confirm,
                                });
                                return;
                            }
                        }
                        if (port.BootToTarget) {
                            PortsConfigItem.FCoEBootToTargets = [];
                            for (var k = 0; k < FCoEBootToTargets.length; k++) {
                                var FCoEBootToTarget = FCoEBootToTargets[k];
                                if (FCoEBootToTarget.TargetEnabled !== true) {
                                    PortsConfigItem.FCoEBootToTargets.push(_.omit(FCoEBootToTarget, ['FCoEWWPN', 'BootLun']));
                                } else {
                                    PortsConfigItem.FCoEBootToTargets.push(FCoEBootToTarget);
                                }
                            }
                        }
                        break;
                    case "NONE":
                        break;
                    case "iSCSI":
                        break;
                    default:
                        break;
                }
                PortsConfig.push(PortsConfigItem);
            }
            this.dataList[this.mezzIndex].Configuration = {
                PortsConfig: PortsConfig
            };
            this.dataList[this.mezzIndex].isEdited = manual;
            this.mezz52multiChannelDialog.visible = false;
        },
        getMEZZCartPortConfig: function (cartType, multiChannel, portConfigPromise) {
            var portsConfig = [];
            var newPortConfigPromise = [];
            if (portConfigPromise && portConfigPromise.length > 0) {
                newPortConfigPromise = JSON.parse(JSON.stringify(portConfigPromise));
                var that = this;
                _.each(newPortConfigPromise, function (data, n) {
                    data.active = n === 0;
                    data.name = "port" + data.PortId;
                    if (!data.MultifunctionMode) {
                        data.MultifunctionMode = "SF"
                    }
                    switch (cartType) {
                        case "MZ220":
                        case "MZ221":
                            data.BootProtocolOptions = [];
                            data.BootProtocol = "FCoE";
                            if (!data.FCoEBootToTargets) {
                                data.FCoEBootToTargets = [];
                                var k = 0;
                                while (k < 8) {
                                    data.FCoEBootToTargets.push({
                                        "TargetId": k + 1, //(1-8),
                                        "FCoEWWPN": "",
                                        "BootLun": 0 //(0-255)
                                    });
                                    k++;
                                }
                            }
                            break;
                        case "MZ520":
                        case "MZ522":
                            data.BootProtocolOptions = that.getOptions("PXE/FCoE/iSCSI/NONE");
                            if (!data.FCoEBootToTargets) {
                                data.FCoEBootToTargets = [];
                                var k = 0;
                                while (k < 8) {
                                    data.FCoEBootToTargets.push({
                                        "TargetId": k + 1, //(1-8),
                                        "FCoEWWPN": "",
                                        "TargetEnabled": false,
                                        "BootLun": 0 //(0-255)
                                    });
                                    k++;
                                }
                            }
                            break;
                        case "MZ710":
                            data.MultifunctionMode = "NPAR";
                            data.PFsInfo[0].ProtocolOptions = thatgetOptions("ETHERNET");
                        default:
                    }
                    /* if (data.PFsInfo) {
                        data.PFsInfo[0].active = true;
                    } */
                    if (data.FCoEBootToTargets) {
                        data.FCoEBootToTargets = {
                            data: data.FCoEBootToTargets
                        };
                    }
                });
                portsConfig = newPortConfigPromise;
            } else {
                var portNum = 0;
                switch (cartType) {
                    case "MZ520":
                        portNum = 2;
                        break;
                    case "MZ522":
                        portNum = 4;
                        break;
                    default:
                        portNum = 2;
                }
                var i = 0;
                while (i < portNum) {
                    switch (cartType) {
                        case "MZ520":
                        case "MZ522":
                            var port = {
                                "active": i === 0,
                                "name": "port" + (i + 1),
                                "PortId": i + 1,
                                "SRIOVEnabled": false,
                                "MultifunctionMode": multiChannel ? "NPAR" : "SF",
                                "BootProtocolOptions": this.getOptions("PXE/FCoE/iSCSI/NONE"),
                                "BootProtocol": "PXE",
                                "BootToTarget": false,
                                "VlanId": undefined //(0-4094 0表示禁用520/522),
                            };
                            port.FCoEBootToTargets = {
                                data: []
                            };
                            var k = 0;
                            while (k < 8) {
                                port.FCoEBootToTargets.data.push({
                                    "TargetId": k + 1, //(1-8),
                                    "FCoEWWPN": "",
                                    "TargetEnabled": false,
                                    "BootLun": 0 //(0-255)
                                });
                                k++;
                            }
                            break;
                        case "MZ220":
                        case "MZ221":
                            var port = {
                                "active": i === 0,
                                "name": "port" + (i + 1),
                                "PortId": i + 1,
                                "MultifunctionMode": "SF",
                                "BootProtocolOptions": [],
                                "BootProtocol": "FCoE",
                                "SANBootEnabled": false
                            };
                            port.FCoEBootToTargets = {
                                data: []
                            };
                            var k = 0;
                            while (k < 8) {
                                port.FCoEBootToTargets.data.push({
                                    "TargetId": k + 1, //(1-8),
                                    "FCoEWWPN": "",
                                    "TargetEnabled": false,
                                    "BootLun": 0 //(0-255)
                                });
                                k++;
                            }
                            break;
                        case "MZ710":
                            var port = {
                                "active": i === 0,
                                "name": "port" + (i + 1),
                                "PortId": i + 1,
                                "MultifunctionMode": "NPAR"
                            };
                            port.PFsInfo = [];
                            var j = i % 2;
                            while (j < 2) {
                                port.PFsInfo.push({
                                    "active": j < 2,
                                    "PFId": j,
                                    "ProtocolOptions": this.getOptions("ETHERNET"),
                                    "Protocol": "ETHERNET"
                                });
                                j += 2;
                            }
                            break;
                        default:
                    }
                    if (multiChannel) {
                        port.PFsInfo = [];
                        var j = i % 2;
                        while (j < 8) {
                            port.PFsInfo.push({
                                "active": j < 2,
                                "PFId": j,
                                "ProtocolOptions": j < 2 ? this.getOptions("ETHERNET/FCoE/iSCSI") : this.getOptions("ETHERNET"),
                                "Protocol": "ETHERNET",
                                "MinBandwidth": 25,
                                "MaxBandwidth": 100
                            });
                            j += 2;
                        }
                    }
                    portsConfig.push(port);
                    i++;
                }
            }
            return portsConfig;
        },
        getOptions: function (optionString) {
            var options = [];
            var optionArr = optionString.split('/');
            _.each(optionArr, function (option) {
                options.push({
                    id: option,
                    label: option
                })
            });
            return options;
        },
        //获取网卡多通道是否的显示
        getMultiChannelShow: function (cartType) {
            switch (cartType) {
                case "MZ520":
                    return true;
                    break;
                case "MZ522":
                    return true;
                    break;
                case "MZ220":
                    return false;
                    break;
                case "MZ221":
                    return false;
                    break;
                default:
                    return false;
            }
        },
        samePortSRIOVEnabled: function (PortId, SRIOVEnabled) {
            var id = PortId % 2 == 1 ? PortId + 1 : PortId - 1;
            _.filter(this.dataList[this.mezzIndex].portConfig, {
                PortId: id
            })[0].SRIOVEnabled = SRIOVEnabled;
        },
        PFProtocolChange: function (portConfigIndex, pfsInfoIndex, id, value) {
            var PFsInfo = this.dataList[this.mezzIndex].portConfig[portConfigIndex].PFsInfo;
            var iSCSINum = _.filter(PFsInfo, {
                Protocol: "iSCSI"
            }).length;
            var FCoENum = _.filter(PFsInfo, {
                Protocol: "FCoE"
            }).length;
            var that = this;
            switch (value) {
                case "ETHERNET":
                    if (id == 0 || id == 1) {
                        _.each(PFsInfo, function (data, index) {
                            if (index != 0) {
                                data.Protocol = "ETHERNET";
                                data.ProtocolOptions = that.getOptions("ETHERNET");
                            }
                        })
                    } else {
                        _.each(PFsInfo, function (data, index) {
                            if (index != 0) {
                                if (PFsInfo[0].Protocol == "ETHERNET") {
                                    data.ProtocolOptions = that.getOptions("ETHERNET");
                                } else {
                                    if (iSCSINum >= 2 && PFsInfo[index].Protocol !== "iSCSI") {
                                        data.ProtocolOptions = that.getOptions("ETHERNET");
                                    } else if (FCoENum >= 1 && iSCSINum >= 1 && PFsInfo[index].Protocol !== "iSCSI") {
                                        data.ProtocolOptions = that.getOptions("ETHERNET");
                                    } else {
                                        data.ProtocolOptions = that.getOptions("ETHERNET/iSCSI");
                                    }
                                }
                            }
                        })
                    }
                    break;
                case "iSCSI":
                    var len = PFsInfo[0].Protocol == "FCoE" ? 1 : 2;
                    if (iSCSINum >= len) {
                        _.each(PFsInfo, function (data, index) {
                            if ((data.Protocol != "iSCSI" && data.Protocol != "FCoE") || PFsInfo[0].Protocol == "ETHERNET") {
                                data.ProtocolOptions = that.getOptions("ETHERNET")
                            } else {
                                if (index != 0) {
                                    data.ProtocolOptions = that.getOptions("ETHERNET/iSCSI");
                                }
                            }
                        });
                    } else {
                        _.each(PFsInfo, function (data, index) {
                            if (index != 0) {
                                if (PFsInfo[0].Protocol == "ETHERNET") {
                                    data.ProtocolOptions = that.getOptions("ETHERNET");
                                } else {
                                    data.ProtocolOptions = that.getOptions("ETHERNET/iSCSI");
                                }
                            }
                        })
                    }
                    break;
                case "FCoE":
                    _.each(PFsInfo, function (data) {
                        if (iSCSINum >= 1) {
                            if (data.Protocol != "iSCSI" && data.Protocol != "FCoE") {
                                data.ProtocolOptions = that.getOptions("ETHERNET")
                            } else if (data.Protocol == "iSCSI") {
                                data.ProtocolOptions = that.getOptions("ETHERNET/iSCSI")
                            }
                        } else {
                            if (data.Protocol != "FCoE") {
                                data.ProtocolOptions = that.getOptions("ETHERNET/iSCSI")
                            }
                        }
                    });
            }
        },
        BootProtocolChange: function (portConfigIndex, name, value) {
            var portData = this.dataList[this.mezzIndex];
            if (portData.multiChannel) {
                if (value == "FCoE" || value == "iSCSI") {
                    this.dataList[this.mezzIndex].portConfig[portConfigIndex].PFsInfo[0].Protocol = value;
                    this.dataList[this.mezzIndex].portConfig[portConfigIndex].PFsInfo[0].ProtocolOptions = this.getOptions(value);
                    this.PFProtocolChange(portConfigIndex, 0, 0, value);
                } else {
                    this.dataList[this.mezzIndex].portConfig[portConfigIndex].PFsInfo[0].ProtocolOptions = this.getOptions("ETHERNET/FCoE/iSCSI");
                }
            }
        },
        //获取PortConfig初始值
        getInitPortConfig: function (index, row, isRest) {
            this.mezzIndex = index;
            var portConfig = [];
            if (isRest === true) { //重新赋值
                if (row.multiChannel == row.defaultMultiChannel || row.defaultMultiChannel === undefined) {
                    portConfig = this.getMEZZCartPortConfig(row.cartType, row.multiChannel, row.portConfigs);
                    this.dataList[index].portConfig = portConfig;
                }
            } else {
                if (this.dataList[index].portConfig.length > 0) {
                    portConfig = this.dataList[index].portConfig;
                    if (row.multiChannel) {
                        if (row.defaultMultiChannel === undefined || row.defaultMultiChannel === row.multiChannel) {
                            if (portConfig[0].PFsInfo === undefined || portConfig[0].PFsInfo.length == 0) {
                                portConfig = this.getMEZZCartPortConfig(row.cartType, row.multiChannel, row.portConfigs);
                                this.dataList[index].portConfig = portConfig;
                            }
                        } else {
                            if (portConfig[0].PFsInfo === undefined || portConfig[0].PFsInfo.length == 0 || portConfig[0].PFsInfo.MinBandwidth === undefined) {
                                portConfig = this.getMEZZCartPortConfig(row.cartType, row.multiChannel);
                                this.dataList[index].portConfig = portConfig;
                            }
                        }
                    } else {
                        if (row.defaultMultiChannel === undefined || row.defaultMultiChannel === row.multiChannel) {
                            if (row.defaultMultiChannel === undefined) {
                                if (portConfig[0].PFsInfo !== undefined) {
                                    portConfig = this.getMEZZCartPortConfig(row.cartType, row.multiChannel, row.portConfigs);
                                    this.dataList[index].portConfig = portConfig;
                                }
                            }
                        } else {
                            if (portConfig[0].PFsInfo === undefined || portConfig[0].PFsInfo.length == 0 || portConfig[0].PFsInfo.MinBandwidth !== undefined) {
                                portConfig = this.getMEZZCartPortConfig(row.cartType, row.multiChannel);
                                this.dataList[index].portConfig = portConfig;
                            }
                        }
                    }
                } else {
                    portConfig = this.getMEZZCartPortConfig(row.cartType, row.multiChannel, row.portConfigs);
                    this.dataList[index].portConfig = portConfig;
                }
            }
        },

        cartTypeChange: function (index, row) {
            this.getInitPortConfig(index, row, true);
            this.mezzIndex = index;
            var portConfig = [];
            if (row.multiChannel != row.defaultMultiChannel) {
                //重新赋值
                portConfig = this.getMEZZCartPortConfig(row.cartType, row.multiChannel, undefined);

            } else {
                portConfig = this.getMEZZCartPortConfig(row.cartType, row.multiChannel, row.portConfigs);
            }
            this.dataList[index].portConfig = portConfig;
        },
        buildMEZZ: function () {
            var mezz = {};
            if (this.bios.BootType != 'UEFIBoot') {
                return mezz;
            }
            var data = _.filter(this.dataList, function (item) {
                return item.isUnChange === false;
            })
            var that = this;
            _.each(data, function (row, index) {
                if (row.isEdited === true) {
                    mezz[row.cartPosition] = {
                        "Configuration": row.Configuration
                    }
                } else {
                    switch (row.cartType) {
                        case "MZ220":
                        case "MZ221":
                            that.getInitPortConfig(index, row, true);
                            that.mz22Save(false);
                            mezz[row.cartPosition] = {
                                "Configuration": that.dataList[index].Configuration
                            }
                            break;
                        case "MZ520":
                        case "MZ522":
                            if (row.multiChannel) {
                                that.getInitPortConfig(index, row, true);
                                that.mezz52multiChanneSave(false);
                                mezz[row.cartPosition] = {
                                    "Configuration": that.dataList[index].Configuration
                                }
                                break;
                            } else {
                                that.getInitPortConfig(index, row, true);
                                that.mezz52singleChanneSave(false);
                                mezz[row.cartPosition] = {
                                    "Configuration": that.dataList[index].Configuration
                                }
                                break;
                            }
                        default:
                            break;
                    }
                }
            });
            return mezz;
        }
    }
});