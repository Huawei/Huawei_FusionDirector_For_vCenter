Vue.component('item-raid', {
    template: '#raid',
    props: {
        form_data: Object,
        raid_info: Object,
        show_all_raid: Boolean,
    },
    data: function () {
        return {
            i18ns: [],
            raidGList: [],
            raidItemIndex: 0,
            drivesList: []
        }
    },
    computed: {
        RAIDControllerIDS: function () {
            if (this.raid_info.ConfigList) {
                var obj = _.find(this.raid_info.ConfigList.Attributes, function (item) {
                    return item.AttributeName == 'RAIDControllerID';
                });
                return obj;
            } else {
                return [];
            }
        },
        VolumeRaidLevels: function () {
            if (this.raid_info.ConfigList) {
                var obj = _.find(this.raid_info.ConfigList.Attributes, function (item) {
                    return item.AttributeName == 'VolumeRaidLevel';
                });
                return obj;
            } else {
                return [];
            }
        },
    },
    created: function () {
        //国际化信息
        this.i18ns = getIn18();
        var that = this;
        this.$nextTick(function () {
            that.initRAID();
        })
    },
    methods: {
        initRAID: function () {
            this.bindDrivesList();
            this.setData();
        },
        setData: function () {
            if (_.keys(this.form_data.RAIDSettings).length > 0) {
                var data = this.form_data.RAIDSettings.RAIDController;
                for (var i = 0; i < data.length; i++) {
                    var RAIDControllerSetting = data[i].RAIDControllerSettings;
                    for (var j = 0; j < RAIDControllerSetting.length; j++) {
                        const item = RAIDControllerSetting[j];
                        var DrivesRange = {};
                        var SpanNumberRange = {};
                        var SpanNumber = undefined;
                        var VolumeRaidLevel = _.find(this.VolumeRaidLevels.Value, function (x) {
                            return x.ValueName == item.VolumeRaidLevel;
                        });
                        switch (item.VolumeRaidLevel) {
                            case 'RAID0':
                                DrivesRange = {
                                    max: VolumeRaidLevel.DisksNumRange.MaxDisks,
                                    min: VolumeRaidLevel.DisksNumRange.MinDisks,
                                    a: 0, //几的倍数
                                    b: 0 //倍数大于多少
                                }
                                SpanNumberRange = {
                                    max: 1,
                                    min: 1
                                }
                                break;
                            case 'RAID1':
                                DrivesRange = {
                                    max: VolumeRaidLevel.DisksNumRange.MaxDisks,
                                    min: VolumeRaidLevel.DisksNumRange.MinDisks,
                                    a: 0, //几的倍数
                                    b: 0 //倍数大于多少
                                }
                                SpanNumberRange = {
                                    max: 1,
                                    min: 1
                                }
                                break;
                            case 'RAID5':
                                DrivesRange = {
                                    max: VolumeRaidLevel.DisksNumRange.MaxDisks,
                                    min: VolumeRaidLevel.DisksNumRange.MinDisks,
                                    a: 0, //几的倍数
                                    b: 0 //倍数大于多少
                                }
                                SpanNumberRange = {
                                    max: 1,
                                    min: 1
                                }
                                break;
                            case 'RAID6':
                                DrivesRange = {
                                    max: VolumeRaidLevel.DisksNumRange.MaxDisks,
                                    min: VolumeRaidLevel.DisksNumRange.MinDisks,
                                    a: 0, //几的倍数
                                    b: 0 //倍数大于多少
                                }
                                SpanNumberRange = {
                                    max: 1,
                                    min: 1
                                }
                                break;
                            case 'RAID10':
                                DrivesRange = {
                                    max: VolumeRaidLevel.DisksNumRange.MaxDisks,
                                    min: VolumeRaidLevel.DisksNumRange.MinDisks,
                                    a: 2, //几的倍数
                                    b: 2 //倍数大于多少
                                }
                                SpanNumberRange = {
                                    max: 2,
                                    min: 2
                                }
                                SpanNumber = 2
                                break;
                            case 'RAID50':
                                DrivesRange = {
                                    max: VolumeRaidLevel.DisksNumRange.MaxDisks,
                                    min: VolumeRaidLevel.DisksNumRange.MinDisks,
                                    a: item.Drives.length / item.SpanNumber, //几的倍数
                                    b: 2 //倍数大于多少
                                }
                                SpanNumberRange = {
                                    max: 32,
                                    min: 3
                                }
                                SpanNumber = item.Drives.length / item.SpanNumber
                                break;
                            case 'RAID60':
                                DrivesRange = {
                                    max: VolumeRaidLevel.DisksNumRange.MaxDisks,
                                    min: VolumeRaidLevel.DisksNumRange.MinDisks,
                                    a: item.Drives.length / item.SpanNumber, //几的倍数
                                    b: 2 //倍数大于多少
                                }
                                SpanNumberRange = {
                                    max: 32,
                                    min: 3
                                }
                                SpanNumber = item.Drives.length / item.SpanNumber
                                break;
                            case 'RAID1E':
                                DrivesRange = {
                                    max: VolumeRaidLevel.DisksNumRange.MaxDisks,
                                    min: VolumeRaidLevel.DisksNumRange.MinDisks,
                                    a: 0, //几的倍数
                                    b: 0 //倍数大于多少
                                }
                                SpanNumberRange = {
                                    max: 1,
                                    min: 1
                                }
                                break;
                            default:
                                break;
                        }

                        this.raidGList.push({
                            "VolumeName": item.VolumeName,
                            "VolumeNameTips": {
                                "isShowTip": false,
                                "TipTxt": this.i18ns.config.configurationModule_submitErrorRaidNameLabel
                            },
                            "RAIDControllerID": data[i].RAIDControllerID,
                            "RAIDControllerIDTips": {
                                "isShowTip": false,
                                "TipTxt": this.i18ns.common.pleaseSelect
                            },
                            "VolumeRaidLevel": item.VolumeRaidLevel,
                            "VolumeRaidLevelTips": {
                                "isShowTip": false,
                                "TipTxt": this.i18ns.common.pleaseSelect
                            },
                            "Drives": item.Drives,
                            "DrivesDisabled": false,
                            "DrivesRange": DrivesRange,
                            "isShowTip": false,
                            "TipTxt": this.i18ns.common.pleaseSelect,
                            "BootEnable": item.BootEnable,
                            "SpanNumber": SpanNumber,
                            "SpanNumberRange": SpanNumberRange,
                            "IsSupportSpan": VolumeRaidLevel.IsSupportSpan,
                            "DisksNumRange": {
                                "MaxDisks": 32,
                                "MinDisks": 1
                            }
                        })
                    }
                }
            } else {
                this.raidGList = [];
            }
        },

        /**
         * 绑定物理盘下拉框数据
         */
        bindDrivesList: function () {
            if (this.raid_info.ConfigList) {
                var arr = [];
                var obj = _.find(this.raid_info.ConfigList.Attributes, function (item) {
                    return item.AttributeName == 'Drives';
                });
                for (var i = 0; i < obj.Value.length; i++) {
                    var item = obj.Value[i];
                    arr.push(_.assign({
                        disabled: false
                    }, item))
                };
                this.drivesList = arr;
            }
        },

        /**
         * 添加raid组
         */
        addRaidGroup: function () {
            this.raidGList.push({
                "VolumeName": "",
                "VolumeNameTips": {
                    "isShowTip": false,
                    "TipTxt": this.i18ns.config.configurationModule_submitErrorRaidNameLabel
                },
                "RAIDControllerID": '',
                "RAIDControllerIDTips": {
                    "isShowTip": false,
                    "TipTxt": this.i18ns.common.pleaseSelect
                },
                "VolumeRaidLevel": "",
                "VolumeRaidLevelTips": {
                    "isShowTip": false,
                    "TipTxt": this.i18ns.common.pleaseSelect
                },
                "Drives": [],
                "DrivesDisabled": true,
                "DrivesRange": {
                    max: 32,
                    min: 1,
                    a: 1, //几的倍数
                    b: 1 //倍数大于多少
                },
                "isShowTip": false,
                "TipTxt": this.i18ns.common.pleaseSelect,
                "BootEnable": false,
                "SpanNumber": undefined,
                "SpanNumberRange": {
                    max: 32,
                    min: 1
                },
                "IsSupportSpan": false,
                "DisksNumRange": {
                    "MaxDisks": 32,
                    "MinDisks": 1
                }
            })
        },

        /**
         * 验证名称
         *  @param {number} 所在行索引  
         */
        validateVolumeName: function (index) {
            var val = this.raidGList[index].VolumeName;
            if (val) {
                if (getBytes(val) <= 15 && /^[0-9a-zA-Z_\u4e00-\u9fa5\-\s]+$/.test(val)) {
                    this.raidGList[index].VolumeNameTips.isShowTip = false;
                    return true;
                } else {
                    this.raidGList[index].VolumeNameTips.isShowTip = true;
                    this.raidGList[index].VolumeNameTips.TipTxt = this.i18ns.config.configurationModule_submitErrorRaidNamePatternLabel;
                    var ref = 'volumeName' + index;
                    //this.$refs[ref].focus();
                    return false;
                }
            } else {
                this.raidGList[index].VolumeNameTips.isShowTip = true;
                this.raidGList[index].VolumeNameTips.TipTxt = this.i18ns.config.configurationModule_submitErrorRaidNameLabel;
                var ref = 'volumeName' + index;
                //this.$refs[ref].focus();
                return false;
            }
        },
        /**
         * 验证名称
         *  @param {number} 所在行索引  
         */
        validateVolumeName1: function (index) {
            var val = this.raidGList[index].VolumeName;
            if (val) {
                if (getBytes(val) <= 15 && /^[0-9a-zA-Z_\u4e00-\u9fa5\-\s]+$/.test(val)) {
                    this.raidGList[index].VolumeNameTips.isShowTip = false;
                    return true;
                } else {
                    this.raidGList[index].VolumeNameTips.isShowTip = true;
                    this.raidGList[index].VolumeNameTips.TipTxt = this.i18ns.config.configurationModule_submitErrorRaidNamePatternLabel;
                    var ref = 'volumeName' + index;
                    this.$refs[ref].focus();
                    return false;
                }
            } else {
                this.raidGList[index].VolumeNameTips.isShowTip = true;
                this.raidGList[index].VolumeNameTips.TipTxt = this.i18ns.config.configurationModule_submitErrorRaidNameLabel;
                var ref = 'volumeName' + index;
                this.$refs[ref].focus();
                return false;
            }
        },

        /**
         * 验证名称
         *  @param {number} 所在行索引  
         */
        validateVolumeName2: function (index) {
            var val = this.raidGList[index].VolumeName;
            if (val) {
                if (getBytes(val) <= 15 && /^[0-9a-zA-Z_\u4e00-\u9fa5\-\s]+$/.test(val)) {
                    this.raidGList[index].VolumeNameTips.isShowTip = false;
                    return true;
                } else {
                    this.raidGList[index].VolumeNameTips.isShowTip = true;
                    this.raidGList[index].VolumeNameTips.TipTxt = this.i18ns.config.configurationModule_submitErrorRaidNamePatternLabel;
                    var ref = 'volumeName' + index;
                    //this.$refs[ref].focus();
                    return false;
                }
            }
        },

        /**
         * raid级别下拉框改变事件
         *  @param {val} 当前下拉框选中的值  
         *  @param {number} 所在行索引  
         */
        volumeRaidLevelChange: function (val, index) {

            var item = _.find(this.VolumeRaidLevels.Value, function (x) {
                return x.ValueName == val;
            })
            this.raidGList[index].DrivesDisabled = false;
            this.raidGList[index].IsSupportSpan = item.IsSupportSpan;
            this.raidGList[index].DisksNumRange = item.DisksNumRange;
            switch (val) {
                case 'RAID0':
                    this.raidGList[index].SpanNumber = undefined;
                    this.raidGList[index].SpanNumberRange = {
                        max: 1,
                        min: 1
                    };
                    this.raidGList[index].DrivesRange = {
                        max: item.DisksNumRange.MaxDisks,
                        min: item.DisksNumRange.MinDisks,
                        a: 0, //几的倍数
                        b: 0 //倍数大于多少
                    }
                    break;
                case 'RAID1':
                    this.raidGList[index].SpanNumber = undefined;
                    this.raidGList[index].SpanNumberRange = {
                        max: 1,
                        min: 1
                    };
                    this.raidGList[index].DrivesRange = {
                        max: item.DisksNumRange.MaxDisks,
                        min: item.DisksNumRange.MinDisks,
                        a: 0, //几的倍数
                        b: 0 //倍数大于多少
                    }
                    break;
                case 'RAID5':
                    this.raidGList[index].SpanNumber = undefined;
                    this.raidGList[index].SpanNumberRange = {
                        max: 1,
                        min: 1
                    };
                    this.raidGList[index].DrivesRange = {
                        max: item.DisksNumRange.MaxDisks,
                        min: item.DisksNumRange.MinDisks,
                        a: 0, //几的倍数
                        b: 0 //倍数大于多少
                    }
                    break;
                case 'RAID6':
                    this.raidGList[index].SpanNumber = undefined;
                    this.raidGList[index].SpanNumberRange = {
                        max: 1,
                        min: 1
                    };
                    this.raidGList[index].DrivesRange = {
                        max: item.DisksNumRange.MaxDisks,
                        min: item.DisksNumRange.MinDisks,
                        a: 0, //几的倍数
                        b: 0 //倍数大于多少
                    }
                    break;
                case 'RAID10':
                    this.raidGList[index].SpanNumber = 2;
                    this.raidGList[index].SpanNumberRange = {
                        max: 2,
                        min: 2
                    };
                    this.raidGList[index].DrivesRange = {
                        max: item.DisksNumRange.MaxDisks,
                        min: item.DisksNumRange.MinDisks,
                        a: 2, //几的倍数
                        b: 2 //倍数大于多少
                    }
                    break;
                case 'RAID50':
                    this.raidGList[index].SpanNumber = 3;
                    this.raidGList[index].SpanNumberRange = {
                        max: 32,
                        min: 3
                    };
                    this.raidGList[index].DrivesRange = {
                        max: item.DisksNumRange.MaxDisks,
                        min: item.DisksNumRange.MinDisks,
                        a: 3, //几的倍数
                        b: 2 //倍数大于多少
                    }
                    break;
                case 'RAID60':
                    this.raidGList[index].SpanNumber = 3;
                    this.raidGList[index].SpanNumberRange = {
                        max: 32,
                        min: 3
                    };
                    this.raidGList[index].DrivesRange = {
                        max: item.DisksNumRange.MaxDisks,
                        min: item.DisksNumRange.MinDisks,
                        a: 3, //几的倍数
                        b: 2 //倍数大于多少
                    }
                    break;
                case 'RAID1E':
                    this.raidGList[index].SpanNumber = 1;
                    this.raidGList[index].SpanNumberRange = {
                        max: 1,
                        min: 1
                    };
                    this.raidGList[index].DrivesRange = {
                        max: item.DisksNumRange.MaxDisks,
                        min: item.DisksNumRange.MinDisks,
                        a: 0, //几的倍数
                        b: 0 //倍数大于多少
                    }
                    break;
                default:
                    break;
            }
            console.log(this.raidGList[index]);
        },

        //Span成员盘数改变事件
        SpanNumberChange: function (index) {
            var VolumeRaidLevel = this.raidGList[index].VolumeRaidLevel;
            var SpanNumber = this.raidGList[index].SpanNumber;
            if (VolumeRaidLevel == 'RAID50' || VolumeRaidLevel == 'RAID60') {
                this.raidGList[index].DrivesRange = {
                    max: 240,
                    min: 6,
                    a: SpanNumber, //几的倍数
                    b: 2 //倍数大于多少
                }
            }
        },

        /**
         * 物理盘下拉框改变事件
         *  @param {val} 当前下拉框选中的值  
         *  @param {number} 所在行索引  
         */
        drivesChange: function (val, index) {
            this.validateDrives(index);
        },

        /**
         * 验证物理盘
         *  @param {index} 所在行索引  
         */
        validateDrives: function (index) {
            var range = this.raidGList[index].DrivesRange;
            var val = this.raidGList[index].Drives;
            if (val.length > 0) {
                var length = val.length;
                if (range.a > 0) {
                    if (!(length % range.a == 0 && length / range.a >= range.b)) {
                        this.raidGList[index].isShowTip = true;
                        this.raidGList[index].TipTxt = this.i18ns.config.configurationModule_diskNumberNotMultiple
                            .format(range.a, range.b);
                        var ref = 'drives' + index;
                        this.$refs[ref].focus();
                        return false;
                    } else {
                        if (length > range.max) {
                            this.raidGList[index].isShowTip = true;
                            this.raidGList[index].TipTxt = this.i18ns.config.configurationModule_diskNumberOverstep
                                .format(range.max);
                            var ref = 'drives' + index;
                            this.$refs[ref].focus();
                            return false;
                        } else {
                            this.raidGList[index].isShowTip = false;
                            return true;
                        }
                    }
                } else {
                    if (length > range.max) {
                        this.raidGList[index].isShowTip = true;
                        this.raidGList[index].TipTxt = this.i18ns.config.configurationModule_diskNumberOverstep
                            .format(range.max);
                        var ref = 'drives' + index;
                        this.$refs[ref].focus();
                        return false;
                    } else if (length < range.min) {
                        this.raidGList[index].isShowTip = true;
                        this.raidGList[index].TipTxt = this.i18ns.config.configurationModule_diskNumberNotEnough
                            .format(range.min);
                        var ref = 'drives' + index;
                        this.$refs[ref].focus();
                        return false;
                    } else {
                        if (this.raidGList[index].VolumeRaidLevel == 'RAID1E' && val.length % 2 === 0) {
                            this.raidGList[index].isShowTip = true;
                            this.raidGList[index].TipTxt = this.i18ns.config.configurationModule_diskNumberRaidIE;
                            var ref = 'drives' + index;
                            this.$refs[ref].focus();
                            return false;
                        }
                        this.raidGList[index].isShowTip = false;
                        return true;
                    }
                }
            } else {
                this.raidGList[index].isShowTip = true;
                this.raidGList[index].TipTxt = this.i18ns.common.pleaseSelect;
                var ref = 'drives' + index;
                this.$refs[ref].focus();
                return false;
            }
        },

        /**
         * 物理盘下拉框得到焦点
         * @param {number} 所在行索引  
         */
        drivesFocus: function (index) {
            this.raidItemIndex = index;
            this.validateDrives(index);
        },

        /**
         * 物理盘下拉框失去焦点
         * @param {number} 所在行索引  
         */
        drivesBlur: function (index) {
            this.raidGList[index].isShowTip = false;
        },

        /**
         * 物理盘下拉框展开或者隐藏
         * @param {bool} bl  true展开 false隐藏 
         */
        visibleChange: function (bl) {
            if (bl) {
                var array = []; //已被选的物理盘（自身除外）
                for (var i = 0; i < this.raidGList.length; i++) {
                    if (i != this.raidItemIndex) {
                        array = _.concat(array, this.raidGList[i].Drives);
                    }
                }
                if (array.length > 0) {
                    for (var i = 0; i < this.drivesList.length; i++) {
                        this.drivesList[i].disabled = false;
                        for (var j = 0; j < array.length; j++) {
                            if (this.drivesList[i].ValueName == array[j]) {
                                this.drivesList[i].disabled = true;
                            }
                        }
                    }
                }
            }
        },

        deleteRaidGroup: function (index) {
            this.raidGList.splice(index, 1);
        },

        BootEnableChange: function (val, index) {
            if (val) {
                for (let i = 0; i < this.raidGList.length; i++) {
                    if (index != i) {
                        this.raidGList[i].BootEnable = false;
                    }

                }
            }
        },


        /**
         * 构建RAIDSettings对象
         */
        buildRAIDSettings: function () {
            if (this.raidGList.length == 0) {
                this.form_data.RAIDSettings = {};
                return {
                    result: true,
                    RAIDSettings: {}
                };
            }
            var RAIDSettings = {};
            var RAIDControllers = [];
            for (var i = 0; i < this.raidGList.length; i++) {
                if (!this.validateVolumeName1(i)) {
                    return {
                        result: false,
                        RAIDSettings: {}
                    };
                }
                var item = this.raidGList[i]
                if (!item.RAIDControllerID) {
                    this.$refs['raidControllerID' + i].focus();
                    return {
                        result: false,
                        RAIDSettings: {}
                    };
                }
                if (!item.VolumeRaidLevel) {
                    this.$refs['volumeRaidLevel' + i].focus();
                    return {
                        result: false,
                        RAIDSettings: {}
                    };
                }
                if (!this.validateDrives(i)) {
                    return {
                        result: false,
                        RAIDSettings: {}
                    };
                }
                if (i == 0) {
                    RAIDControllers.push({
                        "RAIDControllerID": item.RAIDControllerID,
                        RAIDControllerSettings: [{
                            "VolumeName": item.VolumeName,
                            "VolumeRaidLevel": item.VolumeRaidLevel,
                            "Drives": item.Drives,
                            "BootEnable": item.BootEnable,
                            "SpanNumber": item.SpanNumber ? item.Drives.length / item.SpanNumber : 1
                        }]
                    })
                } else {
                    var index = RAIDControllers.findIndex(function (x) {
                        return x.RAIDControllerID == item.RAIDControllerID;
                    })
                    if (index > -1) {
                        RAIDControllers[index].RAIDControllerSettings.push({
                            "VolumeName": item.VolumeName,
                            "VolumeRaidLevel": item.VolumeRaidLevel,
                            "Drives": item.Drives,
                            "BootEnable": item.BootEnable,
                            "SpanNumber": item.SpanNumber ? item.Drives.length / item.SpanNumber : 1
                        })
                    } else {
                        RAIDControllers.push({
                            "RAIDControllerID": item.RAIDControllerID,
                            RAIDControllerSettings: [{
                                "VolumeName": item.VolumeName,
                                "VolumeRaidLevel": item.VolumeRaidLevel,
                                "Drives": item.Drives,
                                "BootEnable": item.BootEnable,
                                "SpanNumber": item.SpanNumber ? item.Drives.length / item.SpanNumber : 1
                            }]
                        })
                    }
                }
            }
            RAIDSettings = {
                RAIDControllerCount: RAIDControllers.length,
                RAIDController: RAIDControllers
            };
            this.form_data.RAIDSettings = RAIDSettings;
            return {
                result: true,
                RAIDSettings: RAIDSettings
            };
        }
    }
});