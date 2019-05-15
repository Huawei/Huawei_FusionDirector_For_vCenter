Vue.component('list-order-bios', {
    template: ' <div> <template v-for="(item, index) in list_data"> <el-row> <el-col v-bind:span="24" class="list-order"><span class="title">{{index}}:&nbsp&nbsp{{item.label}}</span><span> <img src="../../images/down.png" v-show="index!=(list_data.length-1)" v-on:click="down(item, index)" /></span><span> <img src="../../images/up.png" v-show="index>0" v-on:click="up(item, index)" /></span> </el-col> </el-row> </template></div>',
    props: {
        list_data: Array
    },
    methods: {
        down: function (item, index) {
            this.list_data.splice(index, 1);
            this.list_data.splice(index + 1, 0, item);
        },
        up: function (item, index) {
            this.list_data.splice(index, 1);
            this.list_data.splice(index - 1, 0, item);
        }
    }
});

