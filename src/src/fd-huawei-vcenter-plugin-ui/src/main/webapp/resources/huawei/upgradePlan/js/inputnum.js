Vue.component('inputnum', {
    template: '<div class="inputNum">' +
        '<span class="reduce" @click="reduce">-</span>' +
        '<input class="input" type="text" v-model="inputNum" @change="changeNoNum" @keyup="keyChange" @blur="blurNum" placeholder="0-24">' +
        '<input id="hiddenText" type="text" style="display:none" />' +
        '<span class="add" @click="addNum">+</span>' +
        '</div>',
    data: function () {
        return {
            i18ns: [],
            inputNum: ""
        }
    },
    props: {
        FDIp: String,
        num: null
    },
    created: function () {
        this.i18ns = getIn18();
        this.inputNum = parseFloat(this.num).toFixed(1);
    },
    watch: {
        inputNum: function (val, oldval) {
            console.log(val, '1')
            if (val) {
                var obj = val;
                //先把非数字的都替换掉，除了数字和.
                obj = obj.replace(/[^\d.]/g, "");
                //必须保证第一个为数字而不是.
                obj = obj.replace(/^\./g, "");
                //保证只有出现一个.而没有多个.
                obj = obj.replace(/\.{2,}/g, ".");
                //保证.只出现一次，而不能出现两次以上
                obj = obj.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
                if (obj) {
                    var time = parseFloat(obj);
                    if (time > 24) {
                        obj = 24;
                        this.inputNum = parseFloat(obj).toFixed(1)
                    }
                } else {
                    this.inputNum = parseFloat(0).toFixed(1)
                }
                this.$emit('changenum', parseFloat(val))
            } else {
                this.inputNum = ''
            }
        },
    },
    methods: {
        resetnum: function (num) {
            this.inputNum = num
        },
        reduce: function () {
            var time = parseFloat(this.inputNum);
            if (time <= 1 && time >= 0) {
                this.inputNum = 0;
            } else if (time <= 24 && time > 1) {
                this.inputNum--
            }
            this.inputNum = parseFloat(this.inputNum).toFixed(1)
        },
        addNum: function () {
            var time = parseFloat(this.inputNum);
            if (time >= 0 && time < 23) {
                this.inputNum++;
            } else if (time >= 23 && time <= 24) {
                this.inputNum = 24
            }
            this.inputNum = parseFloat(this.inputNum).toFixed(1)
        },
        changeNoNum: function () {
            // var obj = this.inputNum;
            // //先把非数字的都替换掉，除了数字和.
            // obj = obj.replace(/[^\d.]/g, "");
            // //必须保证第一个为数字而不是.
            // obj = obj.replace(/^\./g, "");
            // //保证只有出现一个.而没有多个.
            // obj = obj.replace(/\.{2,}/g, ".");
            // //保证.只出现一次，而不能出现两次以上
            // obj = obj.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
            // if (obj) {
            //     console.log(obj, '4')
            //     var time = parseFloat(obj);
            //     if (time > 24) {
            //         obj = 24;
            //         this.inputNum = parseFloat(obj).toFixed(1)
            //     }
            // } else {
            //     this.inputNum = parseFloat(0).toFixed(1)
            // }
        },
        keyChange: function () {
            var obj = this.inputNum;
            if (isNaN(obj)) {
                this.inputNum = ""
            }
        },
        blurNum: function () {
            var obj = this.inputNum;
            this.inputNum = parseFloat(obj).toFixed(1)
        }

    }

})