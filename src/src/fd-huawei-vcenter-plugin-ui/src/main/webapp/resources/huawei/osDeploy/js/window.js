Vue.component('Windows', {
    template: '<div><div class="dashBorder"></div><span class="infoTitle">{{i18ns.OSDeploy.deploy_installInfo}}</span><el-row><el-form label-position="left" :model="deployForm" :rules="rules" ref="deployForm" label-width="250px" ><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.deploy_installCDKey" >' +
        '<el-popover :content="i18ns.OSDeploy.OSDeploy_wrongCDKey" placement="right" trigger="manual" v-model="isCdkey"><el-row slot="reference">' +
        '<el-col :span="4"><el-popover :content="tipCdkeyDesc" placement="right" trigger="manual" v-model="tipCdkey1"><el-input slot="reference" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="key1" @keyup.native="setCDKey" :maxlength="5"></el-input></el-popover></el-col>' +
        '<el-col :span="1" style="text-align:center;">—</el-col>' +
        '<el-col :span="4"><el-popover :content="tipCdkeyDesc" placement="right" trigger="manual" v-model="tipCdkey2"><el-input slot="reference" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="key2" @keyup.native="setCDKey" :maxlength="5"></el-input></el-popover></el-col>' +
        '<el-col :span="1" style="text-align:center;">—</el-col>' +
        '<el-col :span="4"><el-popover :content="tipCdkeyDesc" placement="right" trigger="manual" v-model="tipCdkey3"><el-input slot="reference" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="key3" @keyup.native="setCDKey" :maxlength="5"></el-input></el-popover></el-col>' +
        '<el-col :span="1" style="text-align:center;">—</el-col>' +
        '<el-col :span="4"><el-popover :content="tipCdkeyDesc" placement="right" trigger="manual" v-model="tipCdkey4"><el-input slot="reference" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="key4" @keyup.native="setCDKey" :maxlength="5"></el-input></el-popover></el-col>' +
        '<el-col :span="1" style="text-align:center;">—</el-col>' +
        '<el-col :span="4"><el-popover :content="tipCdkeyDesc" placement="right" trigger="manual" v-model="tipCdkey5"><el-input slot="reference" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="key5" @keyup.native="setCDKey" :maxlength="5"></el-input></el-popover></el-col>' +
        '</el-row></el-popover></el-form-item></el-col><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.deploy_cpFirstNameWin" >' +
        '<el-row>' +
        '<el-col :span="12">' +
        '<el-popover :content="i18ns.OSDeploy.OSDeploy_errorCPname" placement="right" trigger="manual" v-model="hostName">' +
        '<el-input slot="reference" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="deployForm.PreHostName" :maxlength="5" @change="ValidationHostName" ></el-input>' +
        '</el-popover></el-col><el-col :span="12"><el-tooltip effect="dark" :content="hostDesc" placement="right" style="padding-left:20px;"><i class="el-icon-info" style="color:#409EFF;"></i></el-tooltip></el-col></el-row><span style="color:#999999;">{{i18ns.OSDeploy.deploy_example}}<span v-if="deployForm.PreHostName.length>0">{{deployForm.PreHostName}}</span><span v-else>22930</span>10HB000002</span></el-form-item></el-col><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.OSDeploy_adminPasswordColon" prop="RootPwd"><el-input type="password" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="deployForm.RootPwd" ref="pwd"></el-input></el-form-item></el-col><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.deploy_passwordConfirmedAgain" prop="againPwd"><el-input type="password" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="deployForm.againPwd" ></el-input></el-form-item></el-col><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.deploy_installPlacePartition" prop="AutoPart"><el-radio-group v-model="deployForm.AutoPart" @change="changeAutoPart"><el-radio :label="false" >{{i18ns.OSDeploy.deploy_autoPartition}}</el-radio><el-radio :label="true" >{{i18ns.OSDeploy.deploy_definedPartition}}</el-radio></el-radio-group><el-row v-if="!deployForm.AutoPart"><span style="color:#999999;">{{i18ns.OSDeploy.deploy_autoPartDes}}</span></el-row><el-row v-else><el-col :span="10"><el-input :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="deployForm.Partition[0].Size" ></el-input></el-col><el-col :span="2" style="padding-left:10px;">GB</el-col><el-col :span="12"><el-tooltip effect="dark" :content="i18ns.OSDeploy.deploy_entryDiskSizeInput" placement="right" style="padding-left:20px;"><i class="el-icon-info" style="color:#409EFF;"></i></el-tooltip></el-col></el-row></el-form-item></el-col><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.deploy_OSLanguage" prop="OsLanguage"><el-select v-model="deployForm.OsLanguage" ><el-option v-for="item in Language" :key="item" :label="item" :value="item"></el-option></el-select></el-form-item></el-col><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.deploy_keyBoard" prop="KeyBoard"><el-select v-model="deployForm.KeyBoard" ><el-option v-for="item in Keyboard" :key="item" :label="item" :value="item"></el-option></el-select></el-form-item></el-col><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.deploy_timeZone" prop="Timezone"><el-select v-model="deployForm.Timezone" ><el-option v-for="item in Timezone" :key="item" :label="item" :value="item"></el-option></el-select></el-form-item></el-col></el-form></el-row></div></div>',
    data: function () {
        return {
            i18ns: [],
            deployForm: {
                Cdkey: '',
                RootPwd: '',
                PreHostName: '',
                AutoPart: false,
                OsLanguage: '',
                Timezone: '',
                KeyBoard: '',
                Partition: [{
                    Filesystem: "NTFS",
                    Name: "C",
                    Size: "max"
                }],
                againPwd: ''
            },
            key1: '',
            key2: '',
            key3: '',
            key4: '',
            key5: '',
            // againPwd:'',
            rules: {
                RootPwd: [{
                    required: true,
                    validator: function (rule, value, callback) {
                        if (value) {
                            var reg1 = /[A-Z]/g;
                            var reg2 = /[a-z]/g;
                            var reg3 = /[0-9]/g;
                            var reg4 = /^[0-9a-zA-Z-_/.!@#$%^&*()]+$/;
                            if (value.length >= 6 && reg4.test(value)) {
                                return callback();
                            } else {
                                return callback(new Error(app.i18ns.OSDeploy.OSDeploy_errorPasswordLength));
                            }
                        } else {
                            return callback(new Error(app.i18ns.FDConfig.pwdNull));
                        }
                    },
                    trigger: 'change'
                }],
                againPwd: {
                    required: true,
                    validator: function (rule, value, callback) {
                        if (value) {
                            if (value != app.$refs['deployModelInfo'].deployForm.RootPwd) {
                                return callback(new Error(app.i18ns.OSDeploy.OSDeploy_differentPasswordError));
                            } else
                                return callback();
                        } else {
                            return callback(new Error(app.i18ns.FDConfig.pwdNull));
                        }
                    },
                    trigger: 'change'
                },
            },
            Language: [], //语言
            Keyboard: [], //键盘选项
            Timezone: [], //时区
            hostName: false,
            tipCdkey1: false,
            tipCdkey2: false,
            tipCdkey3: false,
            tipCdkey4: false,
            tipCdkey5: false,
            tipCdkeyDesc: '',
            isCdkey: false,
            hostDesc: app.i18ns.OSDeploy.deploy_cpFirstNameWinExplain //主机名称前缀的提示信息
        }
    },
    props: {
        FDIp: String,
        form: Object,
    },
    created: function () {
        this.i18ns = getIn18();
    },
    mounted: function () {
        var app = this;
        Vue.nextTick(function () {
            app.selectImage()
        })
    },
    methods: {
        /**
         * 获取RedHat 的时区，语言，键盘数据
         */
        selectImage: function () {
            var param = {
                ip: this.FDIp,
                data: {
                    OsType: "Windows"
                }
            };
            var app = this;
            serverprofileManage.getImageQuery(param, function (ret) {
                if (ret.code == '0') {
                    app.Language = ret.data[0].data.Result.Attribute.Language;
                    app.Keyboard = ret.data[0].data.Result.Attribute.Keyboard;
                    app.Timezone = ret.data[0].data.Result.Attribute.Timezone;
                    app.deployForm.OsLanguage = ret.data[0].data.Result.Attribute.Language[0];
                    app.deployForm.Timezone = ret.data[0].data.Result.Attribute.Timezone[0];
                    app.deployForm.KeyBoard = ret.data[0].data.Result.Attribute.Keyboard[0];
                    if (app.form) {
                        app.deployForm = {
                            Cdkey: app.form.Cdkey,
                            RootPwd: '',
                            PreHostName: app.form.PreHostName,
                            AutoPart: app.form.AutoPart,
                            OsLanguage: app.form.OsLanguage,
                            Timezone: app.form.Timezone,
                            KeyBoard: app.form.KeyBoard,
                            Partition: app.form.Partition,
                            againPwd: ''
                        }
                        app.key1 = app.form.Cdkey.split('-')[0];
                        app.key2 = app.form.Cdkey.split('-')[1]
                        app.key3 = app.form.Cdkey.split('-')[2]
                        app.key4 = app.form.Cdkey.split('-')[3]
                        app.key5 = app.form.Cdkey.split('-')[4]
                    }
                } else {
                    if (ret.ip != app.FDIp) {
                        return false
                    }
                    var msg = getErrorMsg(ret);
                    alertMsg(msg);
                }
            })
        },
        /**
         * 改变CDKey的值
         */
        setCDKey: function () {
            var nameRe = /^[a-zA-Z0-9]*$/;
            if (this.key1.length >= 1) {
                if (!nameRe.test($.trim(this.key1))) {
                    this.tipCdkey1 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorCDKey;
                } else if (this.key1.length == 5 && nameRe.test($.trim(this.key1))) {
                    this.tipCdkey1 = false;
                    this.deployForm.Cdkey = this.key1 + "-" + this.key2 + "-" + this.key3 + "-" + this.key4 + "-" + this.key5;
                } else if (this.key1.length < 5) {
                    this.tipCdkey1 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorLength;
                }
            } else {
                this.tipCdkey1 = false;
            }
            if (this.key2.length >= 1) {
                this.tipCdkey2 = true;
                this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorLength;
                if (!nameRe.test($.trim(this.key2))) {
                    this.tipCdkey2 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorCDKey;
                } else if (this.key2.length == 5 && nameRe.test($.trim(this.key2))) {
                    this.tipCdkey2 = false;
                    this.deployForm.Cdkey = this.key1 + "-" + this.key2 + "-" + this.key3 + "-" + this.key4 + "-" + this.key5
                } else if (this.key2.length < 5) {
                    this.tipCdkey2 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorLength;
                }
            } else {
                this.tipCdkey2 = false;
            }
            if (this.key3.length >= 1) {
                if (!nameRe.test($.trim(this.key3))) {
                    this.tipCdkey3 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorCDKey;
                } else if (this.key3.length == 5 && nameRe.test($.trim(this.key3))) {
                    this.tipCdkey3 = false;
                    this.deployForm.Cdkey = this.key1 + "-" + this.key2 + "-" + this.key3 + "-" + this.key4 + "-" + this.key5
                } else if (this.key3.length < 5) {
                    this.tipCdkey3 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorLength;
                }
            } else {
                this.tipCdkey3 = false;
            }
            if (this.key4.length >= 1) {
                this.tipCdkey4 = true;
                this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorLength;
                if (!nameRe.test($.trim(this.key4))) {
                    this.tipCdkey4 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorCDKey;
                } else if (this.key4.length == 5 && nameRe.test($.trim(this.key4))) {
                    this.tipCdkey4 = false;
                    this.deployForm.Cdkey = this.key1 + "-" + this.key2 + "-" + this.key3 + "-" + this.key4 + "-" + this.key5
                } else if (this.key4.length < 5) {
                    this.tipCdkey4 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorLength;
                }
            } else {
                this.tipCdkey4 = false;
            }
            if (this.key5.length >= 1) {
                this.tipCdkey5 = true;
                this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorLength;
                if (!nameRe.test($.trim(this.key5))) {
                    this.tipCdkey5 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorCDKey;
                } else if (this.key5.length == 5 && nameRe.test($.trim(this.key5))) {
                    this.tipCdkey5 = false;
                    this.deployForm.Cdkey = this.key1 + "-" + this.key2 + "-" + this.key3 + "-" + this.key4 + "-" + this.key5
                } else if (this.key5.length < 5) {
                    this.tipCdkey5 = true;
                    this.tipCdkeyDesc = app.i18ns.OSDeploy.OSDeploy_errorLength;
                }
            } else {
                this.tipCdkey5 = false;
            }
            if (this.key1.length == 5 && this.key2.length == 5 && this.key3.length == 5 && this.key4.length == 5 && this.key5.length == 5 && nameRe.test($.trim(this.key1)) && nameRe.test($.trim(this.key2)) && nameRe.test($.trim(this.key3)) && nameRe.test($.trim(this.key4)) && nameRe.test($.trim(this.key5))) {
                this.isCdkey = false
                return true
            } else {
                this.isCdkey = true
                return false
            }

        },
        /**
         * 切换 安装位置分区方式
         */
        changeAutoPart: function (val) {
            if (val) {
                this.deployForm.Partition[0].Size = ""
            } else {
                this.deployForm.Partition[0].Size = "max"
            }
        },
        /**
         * 校验主机名
         */
        ValidationHostName: function (val) {
            var cpNameRe = /^[a-zA-Z0-9_-]*$/;
            if (val.length >= 1) {
                this.hostDesc = app.i18ns.OSDeploy.deploy_cpFNWinExplain;
            } else {
                this.hostDesc = app.i18ns.OSDeploy.deploy_cpFirstNameWinExplain;
            }
            if (val.length >= 1 && !cpNameRe.test($.trim(val))) {
                this.hostName = true;

            } else {
                this.hostName = false;

            }
        }


    }
})