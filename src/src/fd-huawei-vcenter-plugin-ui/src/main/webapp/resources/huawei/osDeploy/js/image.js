Vue.component('imageOS', {
    template: '<div><el-dialog :close-on-click-modal="false" :close-on-press-escape="false" :title="i18ns.OSDeploy.deploy_selectImage" :visible.sync="tipsDialogisible" width="80%"><el-row class="osDialogselect"><el-input v-model.trim="keyword" clearable><el-select v-model="types" slot="prepend"><el-option v-for="item in ModelTypes" :key="item.value" :label="item.label" :value="item.value"></el-option></el-select><el-button slot="append" icon="el-icon-search" @click="searchOs"></el-button></el-input></el-row><el-table :data="imageList" v-loading="tableLoading" border style="width: 100%; margin-top: 10px;" header-row-class-name="my_table_header" highlight-current-row @row-click = "showRow" @current-change="handleradioChange"><el-table-column label="" width="70" center><template slot-scope="scope"><el-radio class="radio" v-model="radio"  :label="scope.row.UUID"  @change.native="getCurrentRow(scope.$index)">&nbsp;</el-radio></template></el-table-column><el-table-column prop="Name" :label="i18ns.imageManage.imageManage_fileName" ></el-table-column><el-table-column prop="OsType" :label="i18ns.imageManage.imageManage_imageType"></el-table-column><el-table-column prop="OsVersion" :label="i18ns.imageManage.imageManage_imageVersion"></el-table-column><el-table-column prop="Status" :label="i18ns.imageManage.imageManage_imageFilleType" ><template slot-scope="scope">{{getFileTypeTxt(scope.row.FileType)}}</template></el-table-column><el-table-column prop="Description" :label="i18ns.imageManage.imageManage_imageFileDescription" ></el-table-column></el-table><el-row class="pagination-row"><el-col v-bind:span="24" style="text-align:left;"><el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" v-bind:current-page="currentPage" v-bind:page-sizes="pageSizes" v-bind:page-size="pageSize" layout="total, sizes, prev, pager, next, jumper,slot" v-bind:total="total"><el-button style="border: 1px solid #c4c4c4;margin-left: 10px;">{{i18ns.common.confirm}}</el-button></el-pagination></el-col></el-row><div slot="footer" class="dialog-footer"><el-button @click="tipsDialogisible=false">{{i18ns.common.cancel}}</el-button><el-button @click="ensureOS" v-loading.fullscreen.lock="fullscreenLoading" :disabled="imageList.length<=0" :element-loading-text="i18ns.common.loading" type="primary">{{i18ns.common.confirm}}</el-button></div></el-dialog></div>',
    data: function () {
        return {
            i18ns: [],
            tipsDialogisible: false,
            imageList: [],
            Loading: false,
            fullscreenLoading: false,
            tableLoading: false,
            currentPage: 1,
            pageSizes: [5, 10, 15, 20, 25, 30],
            pageSize: 5,
            total: 0,
            osImage: {},
            radio: '',
            ModelTypes: [],
            types: 'Name',
            keyword: '',
            search: {
                Name: '',
                OsType: '',
                FileType: ''
            },
            isFirstSearch: true
        }
    },
    props: {
        FDIp: String
    },
    created: function () {
        this.i18ns = getIn18();
        this.getServerType()
    },
    methods: {

        getFileTypeTxt: function (data) {
            if (data == 'Standard') {
                return this.i18ns.OSDeploy.deploy_standard
            } else if (data == 'Clone') {
                return this.i18ns.OSDeploy.deploy_clone
            } else {
                return "--";
            }
        },

        /**
         * 打开选择镜像
         */
        show: function () {
            this.tipsDialogisible = true;
            this.search.Name = "";
            this.search.FileType = "";
            this.search.OsType = "";
            this.keyword = "";
            this.currentPage = 1;
            this.pageSize = 5;
            this.radio = '';
            this.osImage = ''
            this.getLsit();
        },
        /**
         * 获取RedHat 的时区，语言，键盘数据
         */
        getListData: function () {
            var param = {
                ip: this.FDIp,
                "pageNo": this.currentPage,
                "pageSize": this.pageSize
            };
            var app = this;
            this.tableLoading = true;
            serverprofileManage.getImageList(param, function (ret) {
                app.tableLoading = false;
                if (ret.code == '0') {
                    app.imageList = ret.data[0].data.Members.filter(function (x) {
                        return x.OsType == 'VMware'
                    });
                    app.total = ret.data[0].data.ImageCount;
                } else {
                    // var msg = getErrorMsg(ret);
                    // alertMsg(msg);
                }
            })
        },
        /**
         * 选择os镜像
         */
        handleradioChange: function (val) {
            if (val) {
                this.osImage = val;
            }
        },
        showRow: function (row) {
            this.radio = row.UUID;
        },
        getCurrentRow: function (row) {},
        /**
         * 确定选择镜像
         */
        ensureOS: function () {
            this.tipsDialogisible = false;
            this.$emit('checkimage', this.osImage)
        },

        /**
         * 设置当前显示数据的总数
         * 
         * @param {any} val 
         */
        handleSizeChange: function (val) {
            this.pageSize = val;
            this.getLsit();
        },
        /**
         * 切换当前显示页
         * 
         * @param {any} val 
         */
        handleCurrentChange: function (val) {
            this.currentPage = val;
            this.getLsit();
        },
        /**
         * 搜索模板类型
         */
        getServerType: function () {
            var lang = localStorage.getItem('lang');
            var options = [];
            if (lang == 'zhCN') {
                options = [{
                    value: 'Name',
                    label: '镜像名称'
                }]
            } else {
                options = [{
                    value: 'Name',
                    label: this.i18ns.imageManage.imageManage_fileName
                }]
            }
            this.ModelTypes = options;
        },
        /**
         * 根据条件搜索查询镜像
         */
        searchOs: function () {
            this.isFirstSearch = true;
            this.getLsit();
        },

        getLsit: function () {
            if (this.isFirstSearch) {
                this.currentPage = 1;
            }
            this.isFirstSearch = false;
            var param = {
                ip: this.FDIp,
                "pageNo": this.currentPage,
                "pageSize": this.pageSize,
                data: {
                    Name: this.keyword,
                    OsType: "VMware",
                    FileType: ""
                }
            };
            var app = this;
            this.tableLoading = true;
            serverprofileManage.getImageQueryList(param, function (ret) {
                app.tableLoading = false;
                if (ret.code == '0') {
                    app.imageList = ret.data[0].data.Members;
                    app.total = ret.data[0].data.ImageCount;
                } else {
                    app.search[app.types] = ""
                    var msg = getErrorMsg(ret);
                    alertMsg(msg);
                }
            })
        }
    }
})