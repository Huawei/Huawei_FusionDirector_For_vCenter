Vue.component('CentOS', {
    template: '<div><div class="dashBorder"></div><span class="infoTitle">{{i18ns.OSDeploy.deploy_installInfo}}</span><el-row><el-form label-position="left" :model="deployForm" :rules="rules" ref="deployForm" label-width="250px"><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.deploy_cpFirstNameLinux"><el-input :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="HostName" disabled></el-input></el-form-item></el-col><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.OSDeploy_rootPasswordColon" prop="RootPwd"><el-input type="password" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="deployForm.RootPwd"></el-input></el-form-item></el-col><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.deploy_passwordConfirmedAgain" prop="againPwd"><el-input type="password" :placeholder="i18ns.OSDeploy.pleaseEnter" v-model="deployForm.againPwd"></el-input></el-form-item></el-col><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.deploy_installPlacePartition" prop="AutoPart"><el-radio-group v-model="deployForm.AutoPart"><el-radio :label="true">{{i18ns.OSDeploy.deploy_autoPartition}}</el-radio><el-radio :label="false" disabled>{{i18ns.OSDeploy.deploy_definedPartition}}</el-radio></el-radio-group></el-form-item></el-col><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.deploy_OSLanguage" prop="OsLanguage"><el-select v-model="deployForm.OsLanguage"><el-option v-for="item in Language" :key="item" :label="item" :value="item"></el-option></el-select></el-form-item></el-col><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.deploy_keyBoard" prop="KeyBoard"><el-select v-model="deployForm.KeyBoard"><el-option v-for="item in Keyboard" :key="item":label="item" :value="item"></el-option></el-select></el-form-item></el-col><el-col :span="13"><el-form-item :label="i18ns.OSDeploy.deploy_timeZone" prop="Timezone"><el-select v-model="deployForm.Timezone"><el-option v-for="item in Timezone" :key="item" :label="item" :value="item"></el-option></el-select></el-form-item></el-col></el-form></el-row></div></div>',
    data: function () {
        return {
            i18ns: [],
            deployForm: {
                RootPwd: '',
                AutoPart: true,
                OsLanguage: '',
                Timezone: '',
                KeyBoard: '',
                Partition: [],
                againPwd: ''
            },
            HostName: 'localhost',
            rules: {
                RootPwd: [{
                    required: true,
                    validator: function (rule, value, callback) {
                        console.log(value.indexOf(" "))
                        if (value) {
                            // var reg1 = /[A-Z]/g;
                            // var reg2 = /[a-z]/g;
                            // var reg3 = /[0-9]/g;
                            // var reg4 = /[\ \`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\\\|\[\{\}\]\;\:\'\"\,\<\.\>\/\?]+/;
                            var reg4 = /^[0-9a-zA-Z-_/.!@#$%^&*()]+$/;
                            if (value.length < 6 || value.indexOf(" ") != -1 || value.indexOf("#") != -1 || value.indexOf("$") != -1 || !(reg4.test(value))) {
                                return callback(new Error(app.i18ns.OSDeploy.OSDeploy_errorPasswordLength));
                            } else {
                                return callback();
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
        }
    },
    props: {
        FDIp: String,
        form: Object
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
                    OsType: "CentOS"
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


    }
})