Vue.component('item-bios', {
    template: '#bios',
    props: {
        bios_info: Object
    },
    data: function () {
        return {
            i18ns: [],
            drivesList: [],
            bootOrders: [],
            isSettingBootSequence: false,
            biosItemValues: {},
            disableds: {}
        }
    },
    computed: {
        biosItems: function () {
            var array = [];
            for (var i = 0; i < this.bios_info.ConfigList.Menus.length; i++) {
                var menu = this.bios_info.ConfigList.Menus[i];
                var child = _.filter(this.bios_info.ConfigList.Attributes, function (item) {
                    return item.MenuPath == menu.MenuPath;
                })
                if (child && child.length > 0) {
                    _.orderBy(child, 'DisplayOrder')
                }
                for (var j = 0; j < child.length; j++) {
                    var item = child[j];
                    child[j]["disabled"] = false;
                    if (this.bios_info.ConfigList.Dependencies.length > 0) {
                        var dependency = _.filter(this.bios_info.ConfigList.Dependencies, function (x) {
                            return x.Dependency.MapToAttribute == item.AttributeName && (
                                x.Dependency.MapToProperty == 'Hidden' ||
                                x.Dependency.MapToProperty == 'GrayOut' ||
                                x.Dependency.MapToProperty == 'ReadOnly') && x.Dependency.MapToValue == true;
                        });
                        if (dependency.length == 0) {
                            continue;
                        }
                        var tips = [];
                        for (var k = 0; k < dependency.length; k++) {
                            var mapFrom = dependency[k].Dependency.MapFrom;
                            for (var t = 0; t < mapFrom.length; t++) {
                                var displayName = this.getBiosItemDisplayName(mapFrom[t].MapFromAttribute);
                                if (displayName !== undefined) { //为undefined时表明改设备模型下的bios配置项目没有该依赖项，虽然没有改依赖项FD依然会返回。。。。。
                                    var _index = _.findIndex(tips, function (x) {
                                        return x == displayName;
                                    })
                                    if (_index == -1) {
                                        tips.push(displayName);
                                    }
                                }
                            }
                        }
                        child[j]["disabled"] = true;
                        child[j]["dependencyTip"] = this.i18ns.config.simpleStart;
                        for (var k = 0; k < tips.length; k++) {
                            if (k != tips.length - 1) {
                                var tip = this.i18ns.config[tips[k]] + this.i18ns.config.simpleAND;
                                child[j]["dependencyTip"] += tip;
                            } else {
                                child[j]["dependencyTip"] += this.i18ns.config[tips[k]];
                            }
                        }
                        /* var mapFrom = dependency[0].Dependency.MapFrom;
                        child[j]["disabled"] = true;
                        child[j]["dependencyTip"] = this.i18ns.config.simpleStart;
                        for (var t = 0; t < mapFrom.length; t++) {
                            if (t != mapFrom.length - 1) {
                                var displayName = this.getBiosItemDisplayName(mapFrom[t].MapFromAttribute);
                                var tips = this.i18ns.config[displayName] + this.i18ns.config.simpleAND;
                                child[j]["dependencyTip"] += tips;
                            } else {
                                var displayName = this.getBiosItemDisplayName(mapFrom[t].MapFromAttribute);
                                var tips = this.i18ns.config[displayName];
                                child[j]["dependencyTip"] += tips;
                            }
                        } */
                    }

                }
                _.assign(this.bios_info.ConfigList.Menus[i], {
                    children: child
                })


                array.push(menu);
            }
            return array;
        },
        configListAttributes: function () {
            return this.bios_info.ConfigList.Attributes;
        }
    },
    watch: {
        /*  biosItemValues: {
             handler: function (newVal, oldVal) {
                 console.log(newVal,
                     'newVal');
             },
             immediate: true,
             deep: true
         } */
    },
    created: function () {
        this.i18ns = getIn18();
        this.initBIOS();
    },
    mounted: function () {},
    methods: {
        initBIOS: function () {
            this.biosItemValues = {};
            var that = this;
            Vue.nextTick(function () {
                for (var i = 0; i < that.bios_info.ConfigList.Attributes.length; i++) {
                    var item = that.bios_info.ConfigList.Attributes[i];
                    that.$set(that.biosItemValues, item.AttributeName, 'Unchanged');
                    if (item.AttributeName == 'OSWDTTimeout') {
                        that.$set(that.biosItemValues, item.AttributeName, 2);
                    }
                }
                for (var i = 0; i < that.biosItems.length; i++) {
                    var menu = that.biosItems[i];
                    for (var j = 0; j < menu.children.length; j++) {
                        that.$set(that.disableds, menu.children[j].AttributeName, menu.children[j].disabled);
                    }
                }
                that.bootOrders = that.getBootOrder();
            })

        },
        setBiosItemValue: function (data) {
            var that = this;
            Vue.nextTick(function () {
                for (var item in data) {
                    that.biosItemValues[item] = data[item];
                    that.biosItemChange(data[item], item)
                }
                if (data.BootTypeOrder0) {
                    var bootOrder = that.getBootOrder();
                    var arry = [];
                    var b0 = _.find(bootOrder, function (x) {
                        return x.value == data.BootTypeOrder0;
                    });
                    arry.push(b0);
                    var b1 = _.find(bootOrder, function (x) {
                        return x.value == data.BootTypeOrder1;
                    });
                    arry.push(b1);
                    var b2 = _.find(bootOrder, function (x) {
                        return x.value == data.BootTypeOrder2;
                    });
                    arry.push(b2);
                    var b3 = _.find(bootOrder, function (x) {
                        return x.value == data.BootTypeOrder3;
                    });
                    arry.push(b3);
                    that.bootOrders = arry;
                    that.isSettingBootSequence = true;
                };
            })
        },
        /**
         * 根据属性名获取展示名
         * @param {*} attributeName 属性名
         */
        getBiosItemDisplayName: function (attributeName) {
            var item = _.find(this.bios_info.ConfigList.Attributes, function (item) {
                return item.AttributeName == attributeName;
            });
            if (item) {
                return item.DisplayName
            } else {
                return undefined;
            }
        },
        /**
         * bios属性发生改变事件
         * @param {*} attributeValue 属性的值
         * @param {*} attributeName  属性名称
         */
        biosItemChange: function (attributeValue, attributeName) {
            console.log(attributeName, attributeValue);
            this.setDisabled(attributeName);
            this.setValue(attributeName);
        },

        /**
         * 设置依赖项禁用状态
         * @param {*} attributeName 被依赖项的属性名
         */
        setDisabled: function (attributeName) {
            var dependencies_or = _.filter(this.bios_info.ConfigList.Dependencies, function (x) {
                return x.DependencyFor == attributeName &&
                    (x.Dependency.MapToProperty == "Hidden" || x.Dependency.MapToProperty == "GrayOut" || x.Dependency.MapToProperty == "ReadOnly") && _.some(x.Dependency.MapFrom, function (y) {
                        return y.MapTerms == 'OR' && y.MapFromCondition == 'EQU' && y.MapFromProperty == 'CurrentValue'
                    });
            });
            for (var i = 0; i < dependencies_or.length; i++) {
                var dependency = dependencies_or[i];
                for (var j = 0; j < dependency.Dependency.MapFrom.length; j++) {
                    var mapFrom = dependency.Dependency.MapFrom[j];
                    if (mapFrom.MapTerms == 'OR') {
                        if (this.biosItemValues[mapFrom.MapFromAttribute] == mapFrom.MapFromValue) {
                            this.disableds[dependency.Dependency.MapToAttribute] = dependency.Dependency.MapToValue;
                        }
                    }
                }
            }
            var dependencies_and = _.filter(this.bios_info.ConfigList.Dependencies, function (x) {
                return x.DependencyFor == attributeName &&
                    (x.Dependency.MapToProperty == "Hidden" || x.Dependency.MapToProperty == "GrayOut" || x.Dependency.MapToProperty == "ReadOnly") && _.some(x.Dependency.MapFrom, function (y) {
                        return y.MapTerms == 'AND' && y.MapFromCondition == 'EQU' && y.MapFromProperty == 'CurrentValue'
                    });
            });
            for (var i = 0; i < dependencies_and.length; i++) {
                var dependency = dependencies_and[i];
                for (var j = 0; j < dependency.Dependency.MapFrom.length; j++) {
                    var mapFrom = dependency.Dependency.MapFrom[j];
                    if (dependency.Dependency.MapToValue === true && (this.biosItemValues[mapFrom.MapFromAttribute] == mapFrom.MapFromValue || this.biosItemValues[mapFrom.MapFromAttribute] == 'Unchanged')) {
                        this.disableds[dependency.Dependency.MapToAttribute] = true;
                    } else {
                        this.disableds[dependency.Dependency.MapToAttribute] = this.getDisabled(dependency.Dependency.MapToAttribute);
                    }
                }
            }

        },

        /**
         * 设置依赖项的值
         * @param {*} attributeName  被依赖项的属性名
         */
        setValue: function (attributeName) {
            var that = this;
            var dependencies_and = _.filter(this.bios_info.ConfigList.Dependencies, function (x) {
                return x.DependencyFor == attributeName &&
                    x.Dependency.MapToProperty == "CurrentValue" && _.some(x.Dependency.MapFrom, function (y) {
                        return y.MapTerms == 'AND' && y.MapFromCondition == 'EQU' && y.MapFromProperty == 'CurrentValue' && that.biosItemValues[y.MapFromAttribute] == y.MapFromValue
                    });
            });
            for (var i = 0; i < dependencies_and.length; i++) {
                var dependency = dependencies_and[i];
                if (this.isCanSetValue(dependencies_and[i].Dependency.MapFrom, 'and') && this.biosItemValues[dependency.Dependency.MapToAttribute] !== undefined) {
                    this.biosItemValues[dependency.Dependency.MapToAttribute] = dependency.Dependency.MapToValue;
                    this.biosItemChange(dependency.Dependency.MapToValue, dependency.Dependency.MapToAttribute)

                }
            }
            var dependencies_or = _.filter(this.bios_info.ConfigList.Dependencies, function (x) {
                return x.DependencyFor == attributeName &&
                    x.Dependency.MapToProperty == "CurrentValue" && _.some(x.Dependency.MapFrom, function (y) {
                        return y.MapTerms == 'OR' && y.MapFromCondition == 'EQU' && y.MapFromProperty == 'CurrentValue' && that.biosItemValues[y.MapFromAttribute] == y.MapFromValue
                    });
            });
            for (var i = 0; i < dependencies_or.length; i++) {
                var dependency = dependencies_or[i];
                if (this.isCanSetValue(dependencies_or[i].Dependency.MapFrom, 'or') && this.biosItemValues[dependency.Dependency.MapToAttribute] !== undefined) {
                    this.biosItemValues[dependency.Dependency.MapToAttribute] = dependency.Dependency.MapToValue;
                    this.biosItemChange(dependency.Dependency.MapToValue, dependency.Dependency.MapToAttribute)
                }
            }
        },
        /**
         * 根据依赖条件判断是否更对应bios项的值
         * @param {*} mapFroms 依赖属性
         * @param {*} type and 或 or
         */
        isCanSetValue: function (mapFroms, type) {
            var bl = true;
            if (type == 'and') { //要满足被依赖项现在的值与依赖属性中的值全部相等
                for (var i = 0; i < mapFroms.length; i++) {
                    if (this.biosItemValues[mapFroms[i].MapFromAttribute] != mapFroms[i].MapFromValue) {
                        bl = false;
                        return bl;
                    }
                }
            } else { //要满足被依赖项现在的值与依赖属性中的值有一项相等即可
                for (var i = 0; i < mapFroms.length; i++) {
                    if (this.biosItemValues[mapFroms[i].MapFromAttribute] == mapFroms[i].MapFromValue) {
                        bl = true;
                        return bl;
                    }
                }
            }
            return bl;
        },

        /**
         * 获取属性禁用状态
         * @param {*} attributeName  属性名
         */
        getDisabled: function (attributeName) {
            //注释掉or的情况
            /*  var dependencies_or = _.filter(this.bios_info.ConfigList.Dependencies, function (x) {
                 return x.Dependency.MapToAttribute == attributeName &&
                     (x.Dependency.MapToProperty == "Hidden" || x.Dependency.MapToProperty == "GrayOut" || x.Dependency.MapToProperty == "ReadOnly") && _.some(x.Dependency.MapFrom, function (y) {
                         return y.MapTerms == 'OR' && y.MapFromCondition == 'EQU' && y.MapFromProperty == 'CurrentValue'
                     });
             });
             for (var i = 0; i < dependencies_or.length; i++) {
                 var dependency = dependencies_or[i];
                 for (var j = 0; j < dependency.Dependency.MapFrom.length; j++) {
                     var mapFrom = dependency.Dependency.MapFrom[j];
                     if (mapFrom.MapTerms == 'OR') {
                         if (this.biosItemValues[mapFrom.MapFromAttribute] == mapFrom.MapFromValue) {
                             return dependency.Dependency.MapToValue;
                         }
                     }
                 }
             } */
            var dependencies_and = _.filter(this.bios_info.ConfigList.Dependencies, function (x) {
                return x.Dependency.MapToAttribute == attributeName &&
                    (x.Dependency.MapToProperty == "Hidden" || x.Dependency.MapToProperty == "GrayOut" || x.Dependency.MapToProperty == "ReadOnly") && _.some(x.Dependency.MapFrom, function (y) {
                        return y.MapTerms == 'AND' && y.MapFromCondition == 'EQU' && y.MapFromProperty == 'CurrentValue'
                    });
            });
            var mapFroms = [];
            for (var i = 0; i < dependencies_and.length; i++) {
                var dependency = dependencies_and[i];
                for (var j = 0; j < dependency.Dependency.MapFrom.length; j++) {
                    var mapFrom = dependency.Dependency.MapFrom[j];
                    if (dependency.Dependency.MapToValue === true && (this.biosItemValues[mapFrom.MapFromAttribute] == mapFrom.MapFromValue || this.biosItemValues[mapFrom.MapFromAttribute] == 'Unchanged')) {
                        return true;
                    }
                    if (mapFrom.MapTerms == 'AND' && dependency.Dependency.MapToValue === false) {
                        mapFroms.push(mapFrom);
                    }
                }
            }
            mapFroms = _.sortedUniq(mapFroms) //里面全是false
            for (var j = 0; j < mapFroms.length; j++) {
                if (this.biosItemValues[mapFroms[j].MapFromAttribute] != mapFroms[j].MapFromValue) {
                    return true; //有一个不满足条件就是返回true
                }
            }
            return false;
        },

        /**
         * 构建bios对象
         */
        buildBIOS: function () {
            var BIOSSettings = {};
            var bootSequenceIndex = _.findIndex(this.biosItems, function (item) {
                return item.MenuName == 'BootSequence';
            })
            if (bootSequenceIndex > -1) {
                if (this.isSettingBootSequence) {
                    this.biosItemValues['BootTypeOrder0'] = this.bootOrders[0].value;
                    this.biosItemValues['BootTypeOrder1'] = this.bootOrders[1].value;
                    this.biosItemValues['BootTypeOrder2'] = this.bootOrders[2].value;
                    this.biosItemValues['BootTypeOrder3'] = this.bootOrders[3].value;
                } else {
                    this.biosItemValues['BootTypeOrder0'] = 'Unchanged';
                    this.biosItemValues['BootTypeOrder1'] = 'Unchanged';
                    this.biosItemValues['BootTypeOrder2'] = 'Unchanged';
                    this.biosItemValues['BootTypeOrder3'] = 'Unchanged';
                }
            }
            for (var item in this.biosItemValues) {
                if (this.biosItemValues[item] != 'Unchanged' && !this.disableds[item]) {
                    BIOSSettings[item] = this.biosItemValues[item];
                }
            }
            if (!BIOSSettings.OSWDTEnable) {
                _.unset(BIOSSettings, 'OSWDTTimeout');
            }
            return BIOSSettings;
        },


        getBootOrderTxt: function (bootOrder) {
            var item = _.find(this.boot_orders.bootOrder, function (x) {
                return x.value == bootOrder
            })
            if (item) {
                return item.label;
            }
        },
        /**
         * bios启动顺序数组
         */
        getBootOrder: function () {
            var lang = localStorage.getItem('lang');
            if (lang == 'zhCN') {
                return [{
                    value: 'HardDiskDrive',
                    label: '硬盘启动设备'
                }, {
                    value: 'DVDROMDrive',
                    label: "光盘启动设备"
                }, {
                    value: 'PXE',
                    label: "PXE启动设备"
                }, {
                    value: 'Others',
                    label: "其他启动设备"
                }];
            } else {
                return [{
                    value: 'HardDiskDrive',
                    label: 'Hard Disk Drive'
                }, {
                    value: 'DVDROMDrive',
                    label: "DVD-ROM Drive"
                }, {
                    value: 'PXE',
                    label: "PXE"
                }, {
                    value: 'Others',
                    label: "Others"
                }];
            }

        },

    }
});