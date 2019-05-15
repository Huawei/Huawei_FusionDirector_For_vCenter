Vue.component('item-dns', {
    template: "#dns",
    props: {
        form_data: Object
    },
    data: function () {
        return {
            i18ns: [],
            PreferredIP: '',
            AlternativeIP: '',
            PreferredIPType: 0,
            AlternativeType: 0,
            isShowPreferredIpTip: false,
            isShowAlternativeIpTip: false,
            PreferredIpTips: '',
            AlternativeIpTips: '',
        }
    },
    created: function () {
        this.i18ns = getIn18();
        this.setData();
        this.PreferredIpTips = this.i18ns.config.IPv4Tips;
        this.AlternativeIpTips = this.i18ns.config.IPv4Tips;
    },
    methods: {
        initDNS: function () {
            this.PreferredIP = '';
            this.AlternativeIP = '';
            this.PreferredIPType = 0;
            this.AlternativeType = 0;
            this.isShowPreferredIpTip = false;
            this.isShowAlternativeIpTip = false;
            this.PreferredIpTips = '';
            this.AlternativeIpTips = '';
            this.PreferredIpTips = this.i18ns.config.IPv4Tips;
            this.AlternativeIpTips = this.i18ns.config.IPv4Tips;
            var that = this;
            Vue.nextTick(function () {
                that.form_data.DNSAddressOrigin = '';
            })
        },
        setData: function () {
            if (this.form_data.DNSAddressOrigin !== undefined) {
                if (this.form_data.NameServers !== undefined) {
                    this.PreferredIP = this.form_data.NameServers[0];
                    if (this.PreferredIP && this.PreferredIP.indexOf(':') > -1) {
                        this.PreferredIPType = 1;
                    }
                    this.AlternativeIP = this.form_data.NameServers[1];
                    if (this.AlternativeIP && this.AlternativeIP.indexOf(':') > -1) {
                        this.AlternativeType = 1;
                    }
                }
            } else {
                this.form_data.DNSAddressOrigin = '';
            }
        },

        /**
         * 首选DNS服务器地址得到焦点事件
         */
        PreferredIPFocus: function () {
            var val = this.PreferredIP;
            if (this.PreferredIPType == 0) {
                if (
                    /^(22[0-3]|2[0-1]\d|1[0-1][0-9]|12[012345689]|1[3-9]\d|[1-9]\d|[1-9])\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|[0-9])$/
                    .test(val)) {
                    this.isShowPreferredIpTip = false;
                } else {
                    this.isShowPreferredIpTip = true;
                    this.PreferredIpTips = this.i18ns.config.IPv4Tips;
                }
            } else {
                if (
                    /^\s*((([0-9A-Fa-f]{1,4}:){7}(([0-9A-Fa-f]{1,4})|:))|(([0-9A-Fa-f]{1,4}:){6}(:|((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})|(:[0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){4}(:[0-9A-Fa-f]{1,4}){0,1}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){3}(:[0-9A-Fa-f]{1,4}){0,2}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){2}(:[0-9A-Fa-f]{1,4}){0,3}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:)(:[0-9A-Fa-f]{1,4}){0,4}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(:(:[0-9A-Fa-f]{1,4}){0,5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})))(%.+)?\s*$/
                    .test(val)) {
                    this.isShowPreferredIpTip = false;
                } else {
                    this.isShowPreferredIpTip = true;
                    this.PreferredIpTips = this.i18ns.config.IPv6Tips;
                }
            }

        },

        /**
         * 验证首选DNS服务器地址
         */
        validatePreferredIP: function () {
            var val = this.PreferredIP;
            if (val) {
                if (this.PreferredIPType == 0) {
                    if (
                        /^(22[0-3]|2[0-1]\d|1[0-1][0-9]|12[012345689]|1[3-9]\d|[1-9]\d|[1-9])\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|[0-9])$/
                        .test(val)) {
                        this.isShowPreferredIpTip = false;
                        return true;
                    } else {
                        this.isShowPreferredIpTip = true;
                        this.PreferredIpTips = this.i18ns.config.IPv4Tips;
                        this.$refs['PreferredIP'].focus();
                        return false;
                    }
                } else {
                    if (
                        /^\s*((([0-9A-Fa-f]{1,4}:){7}(([0-9A-Fa-f]{1,4})|:))|(([0-9A-Fa-f]{1,4}:){6}(:|((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})|(:[0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){4}(:[0-9A-Fa-f]{1,4}){0,1}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){3}(:[0-9A-Fa-f]{1,4}){0,2}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){2}(:[0-9A-Fa-f]{1,4}){0,3}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:)(:[0-9A-Fa-f]{1,4}){0,4}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(:(:[0-9A-Fa-f]{1,4}){0,5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})))(%.+)?\s*$/
                        .test(val)) {
                        this.isShowPreferredIpTip = false;
                        return true;
                    } else {
                        this.isShowPreferredIpTip = true;
                        this.$refs['PreferredIP'].focus();
                        this.PreferredIpTips = this.i18ns.config.IPv6Tips;
                        return false;
                    }
                }
            }
            this.isShowPreferredIpTip = false;
            return true;
        },

        /**
         * 备选DNS服务器地址得到焦点事件
         */
        AlternativeIPFocus: function () {
            var val = this.AlternativeIP;
            if (this.AlternativeType == 0) {
                if (
                    /^(22[0-3]|2[0-1]\d|1[0-1][0-9]|12[012345689]|1[3-9]\d|[1-9]\d|[1-9])\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|[0-9])$/
                    .test(val)) {
                    this.isShowAlternativeIpTip = false;
                } else {
                    this.isShowAlternativeIpTip = true;
                    this.AlternativeIpTips = this.i18ns.config.IPv4Tips;
                }
            } else {
                if (
                    /^\s*((([0-9A-Fa-f]{1,4}:){7}(([0-9A-Fa-f]{1,4})|:))|(([0-9A-Fa-f]{1,4}:){6}(:|((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})|(:[0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){4}(:[0-9A-Fa-f]{1,4}){0,1}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){3}(:[0-9A-Fa-f]{1,4}){0,2}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){2}(:[0-9A-Fa-f]{1,4}){0,3}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:)(:[0-9A-Fa-f]{1,4}){0,4}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(:(:[0-9A-Fa-f]{1,4}){0,5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})))(%.+)?\s*$/
                    .test(val)) {
                    this.isShowAlternativeIpTip = false;
                } else {
                    this.isShowAlternativeIpTip = true;
                    this.AlternativeIpTips = this.i18ns.config.IPv6Tips;
                }
            }

        },

        /**
         * 验证备选DNS服务器地址
         */
        validateAlternativeIP: function () {
            var val = this.AlternativeIP;
            if (val) {
                if (this.AlternativeType == 0) {
                    if (
                        /^(22[0-3]|2[0-1]\d|1[0-1][0-9]|12[012345689]|1[3-9]\d|[1-9]\d|[1-9])\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|[0-9])$/
                        .test(val)) {
                        this.isShowAlternativeIpTip = false;
                        return true;
                    } else {
                        this.isShowAlternativeIpTip = true;
                        this.AlternativeIpTips = this.i18ns.config.IPv4Tips;
                        this.$refs['AlternativeIP'].focus();
                        return false;
                    }
                } else {
                    if (
                        /^\s*((([0-9A-Fa-f]{1,4}:){7}(([0-9A-Fa-f]{1,4})|:))|(([0-9A-Fa-f]{1,4}:){6}(:|((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})|(:[0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){4}(:[0-9A-Fa-f]{1,4}){0,1}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){3}(:[0-9A-Fa-f]{1,4}){0,2}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){2}(:[0-9A-Fa-f]{1,4}){0,3}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:)(:[0-9A-Fa-f]{1,4}){0,4}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(:(:[0-9A-Fa-f]{1,4}){0,5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})))(%.+)?\s*$/
                        .test(val)) {
                        this.isShowAlternativeIpTip = false;
                        return true;
                    } else {
                        this.isShowAlternativeIpTip = true;
                        this.AlternativeIpTips = this.i18ns.config.IPv6Tips;
                        this.$refs['AlternativeIP'].focus();
                        return false;
                    }
                }
            }
            this.isShowAlternativeIpTip = false;
            return true;
        },

        /**
         * 构建DNS参数
         */
        buildDNS: function () {
            var dns = {};
            if (this.form_data.DNSAddressOrigin) {
                dns = {
                    DNSAddressOrigin: this.form_data.DNSAddressOrigin
                };
                if (this.form_data.DNSAddressOrigin == 'Static') {
                    if (!this.validatePreferredIP()) {
                        return {
                            result: false,
                            dns: dns
                        }
                    }
                    if (!this.validateAlternativeIP()) {
                        return {
                            result: false,
                            dns: dns
                        }
                    }
                    _.assign(dns, {
                        NameServers: [this.PreferredIP, this.AlternativeIP]
                    })
                }
            }
            return {
                result: true,
                dns: dns
            }
        }

    }
})