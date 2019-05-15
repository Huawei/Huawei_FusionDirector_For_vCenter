Vue.component('item-bios', {
    template: '#bios',
    props: {
        bios_info: Object,
        biso_items: Object
    },
    data: function () {
        return {
            i18ns: []
        }
    },
    computed: {
        biosItems: function () {
            var array = [];
            for (var i = 0; i < this.bios_info.ConfigList.Menus.length; i++) {
                var menu = this.bios_info.ConfigList.Menus[i];
                var attributes = _.filter(this.bios_info.ConfigList.Attributes, function (x) {
                    return x.MenuPath == menu.MenuPath;
                })
                var that = this;
                menu.children = [];
                for (var key in this.biso_items) {
                    if (_.some(attributes, function (x) {
                            return x.AttributeName == key
                        })) {
                        var child = _.find(attributes, function (x) {
                            return x.MenuPath == menu.MenuPath && x.AttributeName == key;
                        })

                        if (child) {
                            child.AttributeValue = that.biso_items[key];
                            if (child.Value != null) {
                                var v = _.find(child.Value, function (x) {
                                    return x.ValueName == child.AttributeValue;
                                })
                                if (v) {
                                    child.AttributeValueDisplayName = v.DisplayName;
                                }
                            }
                            menu.children.push(child);
                        }
                    }
                }
                if (menu.children.length > 0) {
                    menu.children = _.orderBy(menu.children, 'DisplayOrder');
                    array.push(menu);
                }
            }
            return array;
        }
    },
    created: function () {
        this.i18ns = getIn18();
    },
    mounted: function () {},
    methods: {}
});