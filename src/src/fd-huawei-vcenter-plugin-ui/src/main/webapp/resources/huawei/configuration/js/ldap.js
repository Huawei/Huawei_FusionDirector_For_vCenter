Vue.component('item-ldap', {
    template: '#ldap',
    props: {
        form_data: Object,
        login_rule: Array,
        ldap_service_enabled: Boolean
    },
    data: function () {
        return {
            i18ns: [],
            LdapServiceEnabled: '', //LDAP功能使能
            UnChangeLdapServerAddress: true,
            isShowLdapServerAddressTip: false,
            LdapServerAddressTips: '',
            LdapServerAddressType: 0,
            domain: '',
            dir: '',
            isShowLdapPortTip: false,
            isShowDomainTip: false,
            isShowDirTip: false,
            DomainTips: '',
            DirTips: '',
            UnChangeLdapPort: true,
            UnChangeDomain: true,
            UnChangeDir: true,
            UnChangeLoginRule: true,
            LoginRule: [{
                EndTime: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                IP: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                Mac: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                RuleEnabled: false,
                StartTime: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                }
            }, {
                EndTime: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                IP: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                Mac: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                RuleEnabled: false,
                StartTime: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                }
            }, {
                EndTime: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                IP: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                Mac: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                RuleEnabled: false,
                StartTime: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                }
            }],
            UnChangeLdapGroups: true,
            LdapGroups: [],
            GroupLoginRuleOptions: []
        }
    },
    created: function () {
        this.i18ns = getIn18();
        this.DomainTips = this.i18ns.config.configurationModule_submitErrorDomainName;
        this.DirTips = this.i18ns.config.configurationModule_userSearchFileTip;
        this.setData();
    },
    methods: {
        initLDAP: function () {
            this.LdapServiceEnabled = ''; //LDAP功能使能
            this.UnChangeLdapServerAddress = true;
            this.isShowLdapServerAddressTip = false;
            this.LdapServerAddressTips = '';
            this.LdapServerAddressType = 0;
            this.domain = '';
            this.dir = '';
            this.isShowLdapPortTip = false;
            this.isShowDomainTip = false;
            this.isShowDirTip = false;
            this.DomainTips = '';
            this.DirTips = '';
            this.UnChangeLdapPort = true;
            this.UnChangeDomain = true;
            this.UnChangeDir = true;
            this.UnChangeLoginRule = true;
            this.LoginRule = [{
                EndTime: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                IP: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                Mac: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                RuleEnabled: false,
                StartTime: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                }
            }, {
                EndTime: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                IP: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                Mac: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                RuleEnabled: false,
                StartTime: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                }
            }, {
                EndTime: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                IP: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                Mac: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                RuleEnabled: false,
                StartTime: {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                }
            }];
            this.UnChangeLdapGroups = true;
            this.LdapGroups = [];
            this.GroupLoginRuleOptions = []
            var that = this;
            Vue.nextTick(function () {
                that.setData();
            });
        },
        setData: function () {
            if (this.ldap_service_enabled !== undefined) {
                this.LdapServiceEnabled = this.ldap_service_enabled;
            }
            if (this.form_data.LdapServerAddress !== undefined) {
                this.UnChangeLdapServerAddress = false;
                var val = this.form_data.LdapServerAddress;
                if (/^(22[0-3]|2[0-1]\d|1[0-1][0-9]|12[012345689]|1[3-9]\d|[1-9]\d|[1-9])\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|[0-9])$/
                    .test(val)) {
                    this.LdapServerAddressType = 0;
                } else if (/^\s*((([0-9A-Fa-f]{1,4}:){7}(([0-9A-Fa-f]{1,4})|:))|(([0-9A-Fa-f]{1,4}:){6}(:|((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})|(:[0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){4}(:[0-9A-Fa-f]{1,4}){0,1}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){3}(:[0-9A-Fa-f]{1,4}){0,2}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){2}(:[0-9A-Fa-f]{1,4}){0,3}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:)(:[0-9A-Fa-f]{1,4}){0,4}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(:(:[0-9A-Fa-f]{1,4}){0,5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})))(%.+)?\s*$/
                    .test(val)) {
                    this.LdapServerAddressType = 1;
                } else {
                    this.LdapServerAddressType = 2;
                }
            } else {
                this.UnChangeLdapServerAddress = true;
            }
            if (this.form_data.LdapPort !== undefined) {
                this.UnChangeLdapPort = false;
            }
            if (this.form_data.UserDomain !== undefined) {
                this.UnChangeDomain = false;
                var userDomain = this.splitUserDomain(this.form_data.UserDomain, "domain", "dir");
                this.domain = userDomain.domain;
                if (userDomain.dirChange === false) {
                    this.dir = userDomain.dir;
                    this.UnChangeDir = false;
                }
            }
            if (this.login_rule.length > 0) {
                this.UnChangeLoginRule = false;
                for (var i = 0; i < this.login_rule.length; i++) {
                    var item = this.login_rule[i];
                    this.LoginRule[i].EndTime.value = item.EndTime;
                    this.LoginRule[i].IP.value = item.IP;
                    this.LoginRule[i].Mac.value = item.Mac;
                    this.LoginRule[i].StartTime.value = item.StartTime;
                    this.LoginRule[i].RuleEnabled = item.RuleEnabled;
                }

            } else {
                this.UnChangeLoginRule = true;
            }

            if (this.form_data.LdapGroups !== undefined && this.form_data.LdapGroups.length > 0) {
                this.UnChangeLdapGroups = false;
                for (var i = 0; i < this.form_data.LdapGroups.length; i++) {
                    var item = this.form_data.LdapGroups[i];
                    var groupUserDomain = this.splitDomainName(item.GroupDomain, "groupName", "searchFileName");
                    this.LdapGroups.push({
                        "GroupDomain": "",
                        "GroupName": {
                            value: groupUserDomain.groupName,
                            isShowTip: false,
                            Tips: ''
                        },
                        "SearchFileName": {
                            value: groupUserDomain.searchFileName,
                            isShowTip: false,
                            Tips: ''
                        },
                        "GroupRole": {
                            value: item.GroupRole,
                            isShowTip: false,
                            Tips: ''
                        },
                        "GroupLoginRule": item.GroupLoginRule,
                        "GroupLoginInterface": item.GroupLoginInterface
                    })
                }
            } else {
                this.UnChangeLdapGroups = true;
                this.addOneLdapGroup();
            }
        },

        /**
         * 域控制器地址得到焦点事件
         */
        LdapServerAddressFocus: function () {
            var val = this.form_data.LdapServerAddress;
            if (this.LdapServerAddressType == 0) {
                if (
                    /^(22[0-3]|2[0-1]\d|1[0-1][0-9]|12[012345689]|1[3-9]\d|[1-9]\d|[1-9])\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|[0-9])$/
                    .test(val)) {
                    this.isShowLdapServerAddressTip = false;
                } else {
                    this.isShowLdapServerAddressTip = true;
                    this.LdapServerAddressTips = this.i18ns.config.IPv4Tips;
                }
            } else if (this.LdapServerAddressType == 1) {
                if (
                    /^\s*((([0-9A-Fa-f]{1,4}:){7}(([0-9A-Fa-f]{1,4})|:))|(([0-9A-Fa-f]{1,4}:){6}(:|((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})|(:[0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){4}(:[0-9A-Fa-f]{1,4}){0,1}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){3}(:[0-9A-Fa-f]{1,4}){0,2}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){2}(:[0-9A-Fa-f]{1,4}){0,3}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:)(:[0-9A-Fa-f]{1,4}){0,4}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(:(:[0-9A-Fa-f]{1,4}){0,5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})))(%.+)?\s*$/
                    .test(val)) {
                    this.isShowLdapServerAddressTip = false;
                } else {
                    this.isShowLdapServerAddressTip = true;
                    this.LdapServerAddressTips = this.i18ns.config.IPv6Tips;
                }
            } else {
                if (/^(([a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?)+|\.[a-zA-Z])*$/.test(val)) {
                    this.isShowLdapServerAddressTip = false;
                } else {
                    this.isShowLdapServerAddressTip = true;
                    this.LdapServerAddressTips = this.i18ns.config.DomainTips;
                }
            }
        },

        /**
         * 域控制器地址类型改变事件
         */
        LdapServerAddressTypeChange: function () {
            if (this.LdapServerAddressType == 0) {
                this.LdapServerAddressTips = this.i18ns.config.IPv4Tips;
            } else if (this.LdapServerAddressType == 1) {
                this.LdapServerAddressTips = this.i18ns.config.IPv6Tips;
            } else {
                this.LdapServerAddressTips = this.i18ns.config.DomainTips;
            }
        },

        /**
         * 验证域控制器地址
         */
        validateLdapServerAddress: function () {
            var val = this.form_data.LdapServerAddress;
            if (val) {
                if (this.LdapServerAddressType == 0) {
                    if (
                        /^(22[0-3]|2[0-1]\d|1[0-1][0-9]|12[012345689]|1[3-9]\d|[1-9]\d|[1-9])\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|[0-9])$/
                        .test(val)) {
                        this.isShowLdapServerAddressTip = false;
                        return true;
                    } else {
                        this.isShowLdapServerAddressTip = true;
                        this.LdapServerAddressTips = this.i18ns.config.IPv4Tips;
                        this.$refs['LdapServerAddress'].focus();
                        return false;
                    }
                } else if (this.LdapServerAddressType == 1) {
                    if (
                        /^\s*((([0-9A-Fa-f]{1,4}:){7}(([0-9A-Fa-f]{1,4})|:))|(([0-9A-Fa-f]{1,4}:){6}(:|((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})|(:[0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){4}(:[0-9A-Fa-f]{1,4}){0,1}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){3}(:[0-9A-Fa-f]{1,4}){0,2}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){2}(:[0-9A-Fa-f]{1,4}){0,3}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:)(:[0-9A-Fa-f]{1,4}){0,4}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(:(:[0-9A-Fa-f]{1,4}){0,5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})))(%.+)?\s*$/
                        .test(val)) {
                        this.isShowLdapServerAddressTip = false;
                        return true;
                    } else {
                        this.isShowLdapServerAddressTip = true;
                        this.LdapServerAddressTips = this.i18ns.config.IPv6Tips;
                        this.$refs['LdapServerAddress'].focus();
                        return false;
                    }
                } else {
                    if (/^(([a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?)+|\.[a-zA-Z])*$/.test(val)) {
                        this.isShowLdapServerAddressTip = false;
                        return true;
                    } else {
                        this.isShowLdapServerAddressTip = true;
                        this.LdapServerAddressTips = this.i18ns.config.DomainTips;
                        this.$refs['LdapServerAddress'].focus();
                        return false;
                    }
                }
            }
            this.isShowLdapServerAddressTip = false;
            return true;
        },

        /**
         * 域控制器端口号得到焦点事件
         */
        LdapPortFocus: function () {
            var val = this.form_data.LdapPort;
            if (val) {
                if (val < 1 || val > 65535) {
                    this.isShowLdapPortTip = true;
                } else {
                    this.isShowLdapPortTip = false;
                }
            }
        },

        /**
         * 验证域控制器端口号
         */
        validateLdapPort: function () {
            var val = this.form_data.LdapPort;
            if (val) {
                if (!/^[0-9]{1,5}$/.test(val)) {
                    this.isShowLdapPortTip = true;
                    setTimeout(function () {
                        app.ruleForm.BMC.LDAP.LdapPort = undefined;
                    }, 0);
                    this.$refs['LdapPort'].focus();
                    return false;
                } else {
                    if (val < 1 || val > 65535) {
                        this.isShowLdapPortTip = true;
                        setTimeout(function () {
                            app.ruleForm.BMC.LDAP.LdapPort = undefined;
                        }, 0);
                        this.$refs['LdapPort'].focus();
                        return false;
                    } else {
                        this.isShowLdapPortTip = false;
                        return true;
                    }

                }
            }
            app.ruleForm.BMC.LDAP.LdapPort = undefined;
            return true;
        },

        /**
         * 域名得到焦点事件
         */
        DomainFocus: function () {
            var val = this.domain;
            if (val) {
                if (/^(([a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?)+|\.[a-zA-Z])*$/.test(val)) {
                    this.isShowDomainTip = false;
                } else {
                    this.isShowDomainTip = true;
                    this.DomainTips = this.i18ns.config.configurationModule_submitErrorDomainName;
                }
                var userDomain = this.getUserDomain(val, this.UnChangeDomain, this.dir, this.UnChangeDir);
                if (userDomain.length > 255) {
                    this.isShowDomainTip = true;
                    this.DomainTips = this.i18ns.config.configurationModule_userDomainNameLength
                }
            }
        },

        /**
         * 验证域名
         */
        validateDomain: function () {
            var val = this.domain;
            if (val) {
                if (/^(([a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?)+|\.[a-zA-Z])*$/.test(val)) {
                    this.isShowDomainTip = false;
                    var userDomain = this.getUserDomain(val, this.UnChangeDomain, this.dir, this.UnChangeDir);
                    if (userDomain.length > 255) {
                        this.isShowDomainTip = true;
                        this.DomainTips = this.i18ns.config.configurationModule_userDomainNameLength;
                        this.$refs['domain'].focus();
                        return false;
                    }
                } else {
                    this.isShowDomainTip = true;
                    this.DomainTips = this.i18ns.config.configurationModule_submitErrorDomainName;
                    this.$refs['domain'].focus();
                    return false;
                }
            }
            return true;
        },

        /**
         * 用户搜索文件夹得到焦点事件
         */
        DirFocus: function () {
            this.isShowDirTip = true;
            var val = this.dir;
            if (val) {
                var userDomain = this.getUserDomain(this.domain, this.UnChangeDomain, val, this.UnChangeDir);
                if (userDomain.length > 255) {
                    this.isShowDirTip = true;
                    this.DirTips = this.i18ns.config.configurationModule_userDomainNameLength
                    this.$refs['dir'].focus();
                    return false;
                }
            } else {
                this.DirTips = this.i18ns.config.configurationModule_userSearchFileTip
            }
            /* var val = this.dir;
            if (val) {
                if (/^[0-9a-zA-Z~!@#$%^&*()_+`\-\s={}:'<>?,.\/]*$/.test(val)) {
                    this.isShowDirTip = false;
                    return true;
                } else {
                    this.isShowDirTip = true;
                    this.$refs['dir'].focus();
                    return false;
                }
            } */
        },

        /**
         * 验证用户搜索文件夹
         */
        validateDir: function () {
            this.isShowDirTip = true;
            var val = this.dir;
            if (val) {
                if (/^[0-9a-zA-Z~!@#$%^&*()_+`\-\s={}:'<>?,.\/]*$/.test(val)) {
                    var userDomain = this.getUserDomain(this.domain, this.UnChangeDomain, val, this.UnChangeDir);
                    if (userDomain.length > 255) {
                        this.isShowDirTip = true;
                        this.DirTips = this.i18ns.config.configurationModule_userDomainNameLength;
                        this.$refs['dir'].focus();
                        return false;
                    }
                    this.DirTips = this.i18ns.config.configurationModule_userSearchFileTip
                    return true;
                } else {
                    this.DirTips = this.i18ns.config.configurationModule_userSearchFileTip
                    this.$refs['dir'].focus();
                    return false;
                }
            }
            return true;
        },

        /**
         * 开始事件得到焦点事件
         */
        StartTimeFocus: function (index) {
            this.validateStartTime(index);
        },

        /**
         * 验证开始时间
         */
        validateStartTime: function (index) {
            var row = this.LoginRule[index];
            var val = this.LoginRule[index].StartTime.value;
            if (val) {
                if (!
                    /^(((((19|20)\d{2})-(0(1|[3-9])|1[012])-(0[1-9]|[12]\d|30))|(((19|20)\d{2})-(0[13578]|1[02])-31)|(((19|20)\d{2})-02-(0[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-02-29))(\s([01][0-9]|2[0-3]):[0-5][0-9])?|(([01][0-9]|2[0-3]):[0-5][0-9]))$/
                    .test(val)) {
                    this.LoginRule[index].StartTime.isShowTip = true;
                    this.LoginRule[index].StartTime.Tips = this.i18ns.config.configurationModule_LDATRuleTime;
                    var ref = "StartTime" + index;
                    this.$refs[ref].focus();
                    return false;
                }
                var year = val.split("-")[0];
                if (year) {
                    if (parseInt(year) > 2050) {
                        this.LoginRule[index].StartTime.isShowTip = true;
                        this.LoginRule[index].StartTime.Tips = this.i18ns.config.configurationModule_LDATRuleYear;
                        var ref = "StartTime" + index;
                        this.$refs[ref].focus();
                        return false;
                    }
                }
            }
            var endTime = this.LoginRule[index].EndTime.value;
            val = val.trim();
            if (val && endTime) {
                if (val.length == endTime.length) {
                    if (val >= endTime) {
                        this.LoginRule[index].StartTime.isShowTip = true;
                        this.LoginRule[index].StartTime.Tips = this.i18ns.config.configurationModule_submitErrorLoginRuleStartTime;
                        var ref = "StartTime" + index;
                        this.$refs[ref].focus();
                        return false;
                    }
                } else {
                    this.LoginRule[index].StartTime.isShowTip = true;
                    this.LoginRule[index].StartTime.Tips = this.i18ns.config.configurationModule_submitErrorLoginTimeTypeSame;
                    var ref = "StartTime" + index;
                    this.$refs[ref].focus();
                    return false;
                }
            } else if (val == "" && endTime) {
                this.LoginRule[index].StartTime.isShowTip = true;
                this.LoginRule[index].StartTime.Tips = this.i18ns.config.configurationModule_submitErrorLoginRuleTimeNull;
                var ref = "StartTime" + index;
                this.$refs[ref].focus();
                return false;
            } else {
                this.LoginRule[index].StartTime.isShowTip = false;
                return true;
            }
            this.LoginRule[index].StartTime.isShowTip = false;
            return true;
        },

        /**
         * 结束事件得到焦点事件
         */
        EndTimeFocus: function (index) {
            this.validateEndTime(index);
        },

        /**
         * 验证结束时间
         */
        validateEndTime: function (index) {
            var row = this.LoginRule[index];
            var val = this.LoginRule[index].EndTime.value;
            if (val) {
                if (!
                    /^(((((19|20)\d{2})-(0(1|[3-9])|1[012])-(0[1-9]|[12]\d|30))|(((19|20)\d{2})-(0[13578]|1[02])-31)|(((19|20)\d{2})-02-(0[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-02-29))(\s([01][0-9]|2[0-3]):[0-5][0-9])?|(([01][0-9]|2[0-3]):[0-5][0-9]))$/
                    .test(val)) {
                    this.LoginRule[index].EndTime.isShowTip = true;
                    this.LoginRule[index].EndTime.Tips = this.i18ns.config.configurationModule_LDATRuleTime;
                    var ref = "EndTime" + index;
                    this.$refs[ref].focus();
                    return false;
                }
                var year = val.split("-")[0];
                if (year) {
                    if (parseInt(year) > 2050) {
                        this.LoginRule[index].EndTime.isShowTip = true;
                        this.LoginRule[index].EndTime.Tips = this.i18ns.config.configurationModule_LDATRuleYear;
                        var ref = "EndTime" + index;
                        this.$refs[ref].focus();
                        return false;
                    }
                }
            }
            var startTime = this.LoginRule[index].StartTime.value;
            val = val.trim();
            if (val && startTime) {
                if (val.length == startTime.length) {
                    if (val <= startTime) {
                        this.LoginRule[index].EndTime.isShowTip = true;
                        this.LoginRule[index].EndTime.Tips = this.i18ns.config.configurationModule_submitErrorLoginRuleEndTime;
                        var ref = "EndTime" + index;
                        this.$refs[ref].focus();
                        return false;
                    }
                } else {
                    this.LoginRule[index].EndTime.isShowTip = true;
                    this.LoginRule[index].EndTime.Tips = this.i18ns.config.configurationModule_submitErrorLoginTimeTypeSame;
                    var ref = "EndTime" + index;
                    this.$refs[ref].focus();
                    return false;
                }
            } else if (val == "" && startTime) {
                this.LoginRule[index].EndTime.isShowTip = true;
                this.LoginRule[index].EndTime.Tips = this.i18ns.config.configurationModule_submitErrorLoginRuleTimeNull;
                var ref = "EndTime" + index;
                this.$refs[ref].focus();
                return false;
            } else {
                this.LoginRule[index].EndTime.isShowTip = false;
                return true;
            }
            this.LoginRule[index].EndTime.isShowTip = false;
            return true;
        },

        /**
         * IP得到焦点事件
         */
        IPFocus: function (index) {
            this.validateIP(index);
        },
        /**
         * 验证IP
         */
        validateIP: function (index) {
            var row = this.LoginRule[index];
            var val = this.LoginRule[index].IP.value;
            if (val) {
                if (!
                    /^((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))(\/([1-9]|[1-2][0-9]|3[0-2]))?$/
                    .test(val)) {
                    this.LoginRule[index].IP.isShowTip = true;
                    this.LoginRule[index].IP.Tips = this.i18ns.config.configurationModule_submitErrorIP;
                    var ref = "IP" + index;
                    this.$refs[ref].focus();
                    return false;
                }
            }
            this.LoginRule[index].IP.isShowTip = false;
            return true;
        },

        /**
         * Mac得到焦点事件
         */
        MacFocus: function (index) {
            this.validateMac(index);
        },

        /**
         * 验证Mac
         */
        validateMac: function (index) {
            var row = this.LoginRule[index];
            var val = this.LoginRule[index].Mac.value;
            if (val) {
                if (!
                    /^[0-9a-fA-F]{2}(((:[0-9a-fA-F]{2}){2})|((:[0-9a-fA-F]{2}){5}))$/
                    .test(val)) {
                    this.LoginRule[index].Mac.isShowTip = true;
                    this.LoginRule[index].Mac.Tips = this.i18ns.config.configurationModule_submitErrorMAC;
                    var ref = "Mac" + index;
                    this.$refs[ref].focus();
                    return false;
                }
            }
            this.LoginRule[index].Mac.isShowTip = false;
            return true;
        },

        getUserDomain: function (userDomainName, userDomainNameChange, userSearchFile,
            userSearchFileChange) {
            if (!userDomainNameChange && userDomainName) {
                var newUserDomainName = "";
                var newUserDomainNameArr = userDomainName.split(".");
                _.each(newUserDomainNameArr, function (dc, n) {
                    newUserDomainName += "DC=" + dc;
                    if (n != newUserDomainNameArr.length - 1) {
                        newUserDomainName += ",";
                    }
                });
                if (!userSearchFileChange && userSearchFile) {
                    return userSearchFile + "," + newUserDomainName;
                } else {
                    return newUserDomainName
                }
            } else {
                if (!userSearchFileChange && userSearchFile) {
                    return userSearchFile + ",DC="
                } else {
                    return "DC="
                }
            }
        },
        //获得用户组中的选择的数据
        getLdapGroupsData: function (groups, userDomain, userDomainChange) {
            var newGroups = [];
            var getUserDomain = this.getUserDomain;
            _.each(groups, function (group) {
                var newGroup = {};
                var domainFileName = group.SearchFileName ? "CN=" + group.GroupName + "," +
                    group.SearchFileName : "CN=" + group.GroupName;
                newGroup.GroupDomain = userDomain && !userDomainChange ?
                    getUserDomain(userDomain, userDomainChange, domainFileName, false) :
                    getUserDomain("", userDomainChange, domainFileName, false);
                newGroup.GroupRole = group.GroupRole;
                newGroup.GroupLoginRule = group.GroupLoginRule;
                newGroup.GroupLoginInterface = group.GroupLoginInterface;
                newGroups.push(newGroup);
            });
            return newGroups;
        },
        //用户组登录规则下拉框展开是绑定数据
        GroupLoginRuleVisibleChange: function (val) {
            if (val) {
                this.GroupLoginRuleOptions = [];
                if (!this.UnChangeLoginRule) {
                    for (var i = 0; i < this.LoginRule.length; i++) {
                        if (this.LoginRule[i].RuleEnabled) {
                            var lang = localStorage.getItem('lang')
                            this.GroupLoginRuleOptions.push({
                                label: lang == 'zhCN' ? '规则' + (i + 1) + '' : 'Rule ' + (i + 1) + '',
                                value: 'Rule' + (i + 1)
                            });
                        }
                    }

                }
            }
        },
        //添加一组ldap用户组
        addOneLdapGroup: function () {
            if (this.LdapGroups.length >= 5) {
                return false;
            }
            this.LdapGroups.push({
                "GroupDomain": "",
                "GroupName": {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                "SearchFileName": {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                "GroupRole": {
                    value: '',
                    isShowTip: false,
                    Tips: ''
                },
                "GroupLoginRule": [],
                "GroupLoginInterface": []
            })
        },

        //删除一组ldap用户组
        deleteOneLdapGroup: function (index) {
            if (this.LdapGroups.length == 1) {
                return false;
            }
            this.LdapGroups.splice(index, 1);
        },

        //LDAP组得到焦点事件
        GroupNameFocus: function (index) {
            this.validateGroupName(index)
        },

        //验证LDAP组
        validateGroupName: function (index) {
            var row = this.LdapGroups[index];
            var val = this.LdapGroups[index].GroupName.value;
            if (!val) {
                this.LdapGroups[index].GroupName.Tips = this.i18ns.config.LDAPGroupNameEmptyTips;
                this.LdapGroups[index].GroupName.isShowTip = true;
                var ref = "GroupName" + index;
                this.$refs[ref].focus();
                return false;
            } else {
                this.LdapGroups[index].GroupName.isShowTip = false;
                var domainFileName = this.LdapGroups[index].SearchFileName.value ?
                    "CN=" + this.LdapGroups[index].GroupName.value + "," + this.LdapGroups[index].SearchFileName.value : "CN=" + this.LdapGroups[index].GroupName.value;
                var groupName = this.domain &&
                    !this.UnChangeDomain ?
                    this.getUserDomain(
                        this.domain,
                        this.UnChangeDomain,
                        domainFileName,
                        false
                    ) : this.getUserDomain("", this.UnChangeDomain, domainFileName, false);
                if (groupName.length > 255) {
                    this.LdapGroups[index].GroupName.Tips = this.i18ns.config.configurationModule_groupNameLength;
                    this.LdapGroups[index].GroupName.isShowTip = true;
                    var ref = "GroupName" + index;
                    this.$refs[ref].focus();
                    return false;
                } else {
                    this.LdapGroups[index].GroupName.isShowTip = false;
                    return true;
                }
            }
        },

        //LDAP组应用文件夹得到焦点事件
        SearchFileNameFocus: function (index) {
            var val = this.LdapGroups[index].SearchFileName.value;
            this.LdapGroups[index].SearchFileName.Tips = this.i18ns.config.configurationModule_searchFileNameTip;
            this.LdapGroups[index].SearchFileName.isShowTip = true;
            if (val) {
                var domainFileName = this.LdapGroups[index].SearchFileName.value ?
                    "CN=" + this.LdapGroups[index].GroupName.value + "," + this.LdapGroups[index].SearchFileName.value : "CN=" + this.LdapGroups[index].GroupName.value;
                var groupName = this.domain &&
                    !this.UnChangeDomain ?
                    this.getUserDomain(
                        this.domain,
                        this.UnChangeDomain,
                        domainFileName,
                        false
                    ) : this.getUserDomain("", this.UnChangeDomain, domainFileName, false);
                if (groupName.length > 255) {
                    this.LdapGroups[index].SearchFileName.Tips = this.i18ns.config.configurationModule_groupNameLength;
                    this.LdapGroups[index].SearchFileName.isShowTip = true;
                } else {
                    this.LdapGroups[index].SearchFileName.isShowTip = true;
                    this.LdapGroups[index].SearchFileName.Tips = this.i18ns.config.configurationModule_searchFileNameTip;
                }
            }
        },

        //验证LDAP组应用文件夹
        validateSearchFileName: function (index) {
            var val = this.LdapGroups[index].SearchFileName.value;
            if (val) {
                var domainFileName = this.LdapGroups[index].SearchFileName.value ?
                    "CN=" + this.LdapGroups[index].GroupName.value + "," + this.LdapGroups[index].SearchFileName.value : "CN=" + this.LdapGroups[index].GroupName.value;
                var groupName = this.domain &&
                    !this.UnChangeDomain ?
                    this.getUserDomain(
                        this.domain,
                        this.UnChangeDomain,
                        domainFileName,
                        false
                    ) : this.getUserDomain("", this.UnChangeDomain, domainFileName, false);
                if (groupName.length > 255) {
                    this.LdapGroups[index].SearchFileName.Tips = this.i18ns.config.configurationModule_groupNameLength;
                    this.LdapGroups[index].SearchFileName.isShowTip = true;
                    var ref = "SearchFileName" + index;
                    this.$refs[ref].focus();
                    return false;
                } else {
                    this.LdapGroups[index].SearchFileName.isShowTip = false;
                    return true;
                }
            } else {
                this.LdapGroups[index].SearchFileName.isShowTip = false;
                return true;
            }
        },

        //验证用户组角色
        validateGroupRole: function (index) {
            var val = this.LdapGroups[index].GroupRole.value;
            if (val) {
                this.LdapGroups[index].GroupRole.isShowTip = false;
                return true;
            } else {
                this.LdapGroups[index].GroupRole.isShowTip = true;
                var ref = "GroupRole" + index;
                this.$refs[ref].focus();
                return false;
            }
        },

        //用户组登录规则使能改变事件
        RuleEnabledChange: function (index) {
            var ruleEnabled = this.LoginRule[index].RuleEnabled;
            if (!ruleEnabled && this.LdapGroups.length > 0) {
                var rlue = 'Rule' + (index + 1);
                var indexArray = [];
                for (var i = 0; i < this.LdapGroups.length; i++) {
                    var droupLoginRule = this.LdapGroups[i].GroupLoginRule;
                    var j = droupLoginRule.findIndex(function (x) {
                        return x == rlue
                    })
                    if (j > -1) {
                        indexArray.push({
                            rowIndex: i,
                            arrIndex: j
                        })
                    }
                }
                var that = this;
                if (indexArray.length > 0) {
                    this.$confirm(app.i18ns.config.configurationModule_loginRuleConfirmMessage, app.i18ns.common.prompt, {
                        confirmButtonText: app.i18ns.common.confirm,
                        cancelButtonText: app.i18ns.common.cancel,
                        closeOnClickModal: false,
                        type: 'warning'
                    }).then(function () {
                        for (var i = 0; i < indexArray.length; i++) {
                            that.LdapGroups[indexArray[i].rowIndex].GroupLoginRule.splice(indexArray[i].arrIndex, 1);
                        }
                    }).catch(function () {
                        that.LoginRule[index].RuleEnabled = true;
                    });
                }
            }
        },

        //用户组登录规则改变事件
        UnChangeLoginRuleChange: function (val) {
            if (val) {
                for (var i = 0; i < this.LdapGroups.length; i++) {
                    this.LdapGroups[i].GroupLoginRule = [];
                }
            }
        },

        //拆分UserDomain
        splitUserDomain: function (domain, name, file) {
            var newDomin = {};
            newDomin[name] = "";
            newDomin[file] = "";
            newDomin[name + "Change"] = true;
            newDomin[file + "Change"] = true;
            var nameArr = [];
            var fileArr = [];
            if (domain) {
                var domainArr = domain.split(",");
                _.each(domainArr, function (string) {
                    if (string.indexOf("DC") != -1) {
                        newDomin[name + "Change"] = false;
                        string.split("=")[1] ? nameArr.push(string.split("=")[1]) : "";
                    } else {
                        newDomin[file + "Change"] = false;
                        fileArr.push(string);
                    }
                });
                newDomin[name] = nameArr.join(".");
                newDomin[file] = fileArr.join();
                return newDomin;
            }
            return newDomin;
        },
        //拆分DomainName 用户组名
        splitDomainName: function (domain, name, file) {
            var newDomin = {};
            newDomin[name] = "";
            newDomin[file] = "";
            var nameArr = [];
            var fileArr = [];
            if (domain) {
                var domainArr = domain.split(",");
                _.each(domainArr, function (string) {
                    if (string.indexOf("CN") != -1) {
                        nameArr.push(string.split("=")[1]);
                    } else if (string.indexOf("DC") == -1) {
                        fileArr.push(string);
                    }
                });
                newDomin[name] = nameArr.join(".");
                newDomin[file] = fileArr.join();
                return newDomin;
            }
            return domain;
        },

        //构建LDAP对象
        buildLDAP: function () {
            var bmc = {};
            var ldap = {};
            if (this.LdapServiceEnabled !== '') {
                _.assign(bmc, {
                    LdapServiceEnabled: this.LdapServiceEnabled
                });
            }
            if (!this.UnChangeLdapServerAddress) {
                if (!this.validateLdapServerAddress()) {
                    return {
                        result: false,
                        bmc: {}
                    }
                }
                _.assign(ldap, {
                    LdapServerAddress: this.form_data.LdapServerAddress
                });
            }
            if (!this.UnChangeLdapPort && this.form_data.LdapPort) {
                if (!this.validateLdapPort()) {
                    return {
                        result: false,
                        bmc: {}
                    }
                }
                _.assign(ldap, {
                    LdapPort: parseInt(this.form_data.LdapPort)
                });
            }
            if (!this.UnChangeDomain && this.domain) {
                if (!this.validateDomain()) {
                    return {
                        result: false,
                        bmc: {}
                    }
                }
                var userDomain = this.getUserDomain(this.domain, this.UnChangeDomain, this.dir, this.UnChangeDir);
                _.assign(ldap, {
                    UserDomain: userDomain
                });
            }
            if (!this.UnChangeLdapGroups && this.LdapGroups.length > 0) {
                var LdapGroups = [];
                for (var i = 0; i < this.LdapGroups.length; i++) {
                    var item = this.LdapGroups[i];
                    if (!this.validateGroupName(i)) {
                        return {
                            result: false,
                            bmc: {}
                        }
                    }
                    if (!this.validateSearchFileName(i)) {
                        return {
                            result: false,
                            bmc: {}
                        }
                    }
                    if (!this.validateGroupRole(i)) {
                        return {
                            result: false,
                            bmc: {}
                        }
                    }
                    var domainFileName = item.SearchFileName.value ?
                        "CN=" + item.GroupName.value + "," + item.SearchFileName.value : "CN=" + item.GroupName.value;
                    var groupName = this.domain &&
                        !this.UnChangeDomain ?
                        this.getUserDomain(
                            this.domain,
                            this.UnChangeDomain,
                            domainFileName,
                            false
                        ) : this.getUserDomain("", this.UnChangeDomain, domainFileName, false);
                    LdapGroups.push({
                        GroupDomain: groupName,
                        GroupRole: item.GroupRole.value,
                        GroupLoginRule: item.GroupLoginRule,
                        GroupLoginInterface: item.GroupLoginInterface
                    })
                }
                if (LdapGroups.length > 0) {
                    _.assign(ldap, {
                        LdapGroups: LdapGroups
                    });
                }
            }
            if (!this.UnChangeLoginRule) {
                var LoginRule = [];
                for (var i = 0; i < this.LoginRule.length; i++) {
                    var item = this.LoginRule[i];
                    if (!this.validateStartTime(i)) {
                        return {
                            result: false,
                            bmc: {}
                        }
                    }
                    if (!this.validateEndTime(i)) {
                        return {
                            result: false,
                            bmc: {}
                        }
                    }
                    if (!this.validateIP(i)) {
                        return {
                            result: false,
                            bmc: {}
                        }
                    }
                    if (!this.validateMac(i)) {
                        return {
                            result: false,
                            bmc: {}
                        }
                    }
                    var loginRule = {
                        StartTime: item.StartTime.value,
                        EndTime: item.EndTime.value,
                        IP: item.IP.value,
                        Mac: item.Mac.value,
                        RuleEnabled: item.RuleEnabled,
                    }
                    LoginRule.push(loginRule);
                    if (LoginRule.length > 0) {
                        _.assign(bmc, {
                            LoginRule: LoginRule
                        });
                    }
                }
            }
            if (_.keys(ldap).length > 0) {
                _.assign(bmc, {
                    LDAP: ldap
                })
            }
            return {
                result: true,
                bmc: bmc
            }

        }

    }
})