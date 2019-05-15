Vue.component('item-ntp', {
    template: '#ntp',
    props: {
        form_data: Object
    },
    data: function () {
        return {
            i18ns: [],
            FDAsNTPServer: '',
            NTPSecretKeyText: '',
            UnChangeNTPSecretKeyText: true,
            PreferredNtpServerType: 'ipv4',
            UnChangePreferredNtpServer: true,
            AlternateNtpServerType: 'ipv4',
            UnChangeAlternateNtpServer: true,
            isShowPreferredNtpServerTip: false,
            isShowAlternateNtpServerTip: false,
            UnChangeMinPollingInterval: true,
            UnChangeMaxPollingInterval: true,

        }
    },
    created: function () {
        this.i18ns = getIn18();
        this.setData();
    },
    methods: {
        initNTP: function () {
            this.FDAsNTPServer = '';
            this.NTPSecretKeyText = '';
            this.UnChangeNTPSecretKeyText = true;
            this.PreferredNtpServerType = 'ipv4';
            this.UnChangePreferredNtpServer = true;
            this.AlternateNtpServerType = 'ipv4';
            this.UnChangeAlternateNtpServer = true;
            this.isShowPreferredNtpServerTip = false;
            this.isShowAlternateNtpServerTip = false;
            this.UnChangeMinPollingInterval = true;
            this.UnChangeMaxPollingInterval = true;
            var that = this;
            Vue.nextTick(function () {
                that.form_data.MinPollingInterval = 3;
                that.form_data.MaxPollingInterval = 17;
            })
        },
        setData: function () {
            if (this.form_data.FDAsNTPServer !== undefined) {
                this.FDAsNTPServer = this.form_data.FDAsNTPServer;
            }
            if (this.form_data.NTPSecretKeyText !== undefined) {
                this.NTPSecretKeyText = this.form_data.NTPSecretKeyText;
                this.UnChangeNTPSecretKeyText = false;
            }
            if (this.form_data.MinPollingInterval !== undefined) {
                this.UnChangeMinPollingInterval = false;
            } else {
                this.UnChangeMinPollingInterval = true;
                this.form_data.MinPollingInterval = 3;
            }
            if (this.form_data.MaxPollingInterval !== undefined) {
                this.UnChangeMaxPollingInterval = false;
            } else {
                this.UnChangeMaxPollingInterval = true;
                this.form_data.MaxPollingInterval = 17;
            }
            if (this.form_data.PreferredNtpServer !== undefined) {
                this.UnChangePreferredNtpServer = false;
            } else {
                this.UnChangePreferredNtpServer = true;
            }
            if (this.form_data.AlternateNtpServer !== undefined) {
                this.UnChangeAlternateNtpServer = false;
            } else {
                this.UnChangeAlternateNtpServer = true;
            }
        },
        /**
         * NTP Sever为FusionDirector Change事件
         */
        FDAsNTPServerChange: function (val) {
            if (val === true) {
                this.UnChangePreferredNtpServer = true;
                this.UnChangeAlternateNtpServer = true;
                this.PreferredNtpServerType = 'ipv4';
                this.AlternateNtpServerType = 'ipv4';
                this.form_data.PreferredNtpServer = '';
                this.form_data.AlternateNtpServer = '';
                this.form_data.NtpAddressOrigin = '';
            }
        },

        /**
         * NTP模式 Change事件
         */
        NtpAddressOriginChange: function (val) {
            if (val != 'Static') {
                this.UnChangePreferredNtpServer = true;
                this.UnChangeAlternateNtpServer = true;
                this.PreferredNtpServerType = 'ipv4';
                this.AlternateNtpServerType = 'ipv4';
                this.form_data.PreferredNtpServer = '';
                this.form_data.AlternateNtpServer = '';
            }
        },

        /**
         * 验证首选NTP服务器地址
         */
        validatePreferredNtpServer: function () {
            var val = this.form_data.PreferredNtpServer;
            if (val) {
                if (/^((25[0-5]|2[0-4]\d|[0-1]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[0-1]?\d\d?)$/.test(
                        val) ||
                    /^\s*((([0-9A-Fa-f]{1,4}:){7}(([0-9A-Fa-f]{1,4})|:))|(([0-9A-Fa-f]{1,4}:){6}(:|((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})|(:[0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){4}(:[0-9A-Fa-f]{1,4}){0,1}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){3}(:[0-9A-Fa-f]{1,4}){0,2}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){2}(:[0-9A-Fa-f]{1,4}){0,3}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:)(:[0-9A-Fa-f]{1,4}){0,4}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(:(:[0-9A-Fa-f]{1,4}){0,5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})))(%.+)?\s*$/
                    .test(val) ||
                    /^(([a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?)+|\.[a-zA-Z])*$/.test(val)) {
                    this.isShowPreferredNtpServerTip = false;
                    return true;
                } else {
                    this.isShowPreferredNtpServerTip = true;
                    this.$refs['PreferredNtpServer'].focus();
                    return false;
                }
            }
            this.isShowPreferredNtpServerTip = false;
            return true;

        },
        /**
         * 验证备选NTP服务器地址
         */
        validateAlternateNtpServer: function () {
            var val = this.form_data.AlternateNtpServer;
            if (val) {
                if (/^((25[0-5]|2[0-4]\d|[0-1]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[0-1]?\d\d?)$/.test(
                        val) ||
                    /^\s*((([0-9A-Fa-f]{1,4}:){7}(([0-9A-Fa-f]{1,4})|:))|(([0-9A-Fa-f]{1,4}:){6}(:|((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})|(:[0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){4}(:[0-9A-Fa-f]{1,4}){0,1}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){3}(:[0-9A-Fa-f]{1,4}){0,2}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:){2}(:[0-9A-Fa-f]{1,4}){0,3}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(([0-9A-Fa-f]{1,4}:)(:[0-9A-Fa-f]{1,4}){0,4}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(:(:[0-9A-Fa-f]{1,4}){0,5}((:((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})?)|((:[0-9A-Fa-f]{1,4}){1,2})))|(((25[0-5]|2[0-4]\d|[01]?\d{1,2})(\.(25[0-5]|2[0-4]\d|[01]?\d{1,2})){3})))(%.+)?\s*$/
                    .test(val) ||
                    /^(([a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?)+|\.[a-zA-Z])*$/.test(val)) {
                    this.isShowAlternateNtpServerTip = false;
                    return true;
                } else {
                    this.isShowAlternateNtpServerTip = true;
                    this.$refs['AlternateNtpServer'].focus();
                    return false;
                }
            }
            this.isShowAlternateNtpServerTip = false;
            return true;
        },

        /**
         * 构建BMC中NTP对象
         */
        buildNTP: function () {
            var bmc = {};
            var ntp = {};
            if (this.FDAsNTPServer !== '') {
                _.assign(bmc, {
                    FDAsNTPServer: this.FDAsNTPServer
                })
            }
            if (!this.UnChangeNTPSecretKeyText && this.NTPSecretKeyText) {
                _.assign(bmc, {
                    NTPSecretKeyText: this.NTPSecretKeyText
                })
            }
            if (this.form_data.ServiceEnabled !== '') {
                _.assign(ntp, {
                    ServiceEnabled: this.form_data.ServiceEnabled
                })
            }
            if (this.form_data.NtpAddressOrigin !== '') {
                _.assign(ntp, {
                    NtpAddressOrigin: this.form_data.NtpAddressOrigin
                })
                if (this.form_data.NtpAddressOrigin == 'Static') {
                    if (!this.UnChangePreferredNtpServer) {
                        if (!this.validatePreferredNtpServer()) {
                            return {
                                result: false,
                                bmc: {}
                            }
                        }
                        _.assign(ntp, {
                            PreferredNtpServer: this.form_data.PreferredNtpServer
                        })
                    }
                    if (!this.UnChangeAlternateNtpServer) {
                        if (!this.validateAlternateNtpServer()) {
                            return {
                                result: false,
                                bmc: {}
                            }
                        }
                        _.assign(ntp, {
                            AlternateNtpServer: this.form_data.AlternateNtpServer
                        })
                    }
                }
            }
            if (this.form_data.ServerAuthenticationEnabled !== '') {
                _.assign(ntp, {
                    ServerAuthenticationEnabled: this.form_data.ServerAuthenticationEnabled
                })
            }
            if (!this.UnChangeMinPollingInterval) {
                _.assign(ntp, {
                    MinPollingInterval: this.form_data.MinPollingInterval
                })
            }
            if (!this.UnChangeMaxPollingInterval) {
                _.assign(ntp, {
                    MaxPollingInterval: this.form_data.MaxPollingInterval
                })
            }
            if (_.keys(ntp).length > 0) {
                _.assign(bmc, {
                    NTP: ntp
                })
            }
            return {
                result: true,
                bmc: bmc
            }
        }
    }
});