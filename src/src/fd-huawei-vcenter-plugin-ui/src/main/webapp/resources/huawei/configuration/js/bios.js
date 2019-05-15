Vue.component('item-bios', {
    template: '#bios',
    props: {
        form_data: Object,
        bios_info: Object,
        boot_orders: Object,
        show_all_bios: Boolean,
    },
    data: function () {
        return {
            i18ns: [],
            drivesList: [],
            isShowPreferredNtpServerTip: false,
            isShowAlternateNtpServerTip: false
        }
    },
    computed: {
        showAll: function () {
            if (this.bios_info && this.bios_info.ConfigList) {
                return this.bios_info.ConfigList.Attributes.length > 4;

            } else {
                return false;
            }
        }
    },
    created: function () {
        //国际化信息
        this.i18ns = getIn18();
    },
    mounted: function () {},
    methods: {
        buildBIOS: function () {
            var BIOSSettings = {};
            BIOSSettings = this.form_data;
            if (this.boot_orders.isSetting) {
                this.form_data.BootTypeOrder0 = this.boot_orders.bootOrder[0].value;
                this.form_data.BootTypeOrder1 = this.boot_orders.bootOrder[1].value;
                this.form_data.BootTypeOrder2 = this.boot_orders.bootOrder[2].value;
                this.form_data.BootTypeOrder3 = this.boot_orders.bootOrder[3].value;
            } else {
                _.unset(BIOSSettings, 'BootTypeOrder0');
                _.unset(BIOSSettings, 'BootTypeOrder1');
                _.unset(BIOSSettings, 'BootTypeOrder2');
                _.unset(BIOSSettings, 'BootTypeOrder3');
            }
            for (var item in BIOSSettings) {
                if (!BIOSSettings[item]) {
                    _.unset(BIOSSettings, item);
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
        }
    }
});