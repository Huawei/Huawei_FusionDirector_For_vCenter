var testDatas = [];

var FDManage = {
    //获取fd配置列表
    getList: function (param, callback) {
        var keyword = param.param.hostIP;
        var listData = [];
        var fdListUrl = com_huawei_fdvcenterpluginui.webContextPath + "/rest/services/fd?ip=" + keyword + "&pageNo=" + param.param.pageNo + "&pageSize=" + param.param.pageSize + "&s=" + Math.random();
        //通过API获取数据
        $.get(fdListUrl, function (response) {
            console.log(response);
            if (typeof callback === "function") {
                var dataCode = response.code;
                listData = response.data;
                var totalNum = 0;
                if (listData instanceof Array) {
                    dataCode = listData.length == 0 ? "0" : response.code;
                    if (dataCode === "0") {
                        totalNum = response.totalNum;
                    }
                }
                var ret = {
                    code: dataCode,
                    msg: response.description,
                    data: response.data,
                    totalNum: totalNum
                }
                callback(ret);
            }
        }, "json");
    },
    ///编辑fd配置
    edit: function (param, callback) {
        var fdSaveUrl = com_huawei_fdvcenterpluginui.webContextPath + "/rest/services/fd?s=" + Math.random();
        $.ajax({
            type: 'POST',
            contentType: 'application/json;charset=utf-8',
            url: fdSaveUrl,
            data: JSON.stringify(param),
            dataType: "json",
            success: function (response) {
                if (typeof callback === "function") {
                    var ret = {
                        code: response.code,
                        msg: response.description
                    }
                    callback(ret);
                }
            }
        });
    },
    //删除fd配置（单个或者批量）
    "delete": function (param, callback) {
        //删除代码逻辑 根据param.hostIp
        var fdDeleteUrl = com_huawei_fdvcenterpluginui.webContextPath + "/rest/services/fd/" + param.ids;
        $.ajax({
            type: 'delete',
            contentType: 'application/json;charset=utf-8',
            url: fdDeleteUrl,
            dataType: "json",
            success: function (response) {
                if (typeof callback === "function") {
                    var ret = {
                        code: response.code,
                        msg: response.description
                    }
                    callback(ret);
                }
            }
        });

    },
    //测试fd配置
    test: function (param, callback) {
        var postData = {
            condition: {
                hostIp: param.hostIp,
                port:param.port,
                loginAccount: param.loginAccount,
                loginPwd: param.loginPwd
            }
        }

        var fdTestUrl = com_huawei_fdvcenterpluginui.webContextPath + "/rest/services/fd/test?s=" + Math.random();
        $.ajax({
            type: 'PUT',
            contentType: 'application/json;charset=utf-8',
            url: fdTestUrl,
            data: JSON.stringify(postData.condition),
            dataType: "json",
            success: function (response) {
                if (typeof callback === "function") {
                    var ret = {
                        code: response.code,
                        msg: response.description
                    }
                    callback(ret);
                }
            }
        });
    },
    //保存fd配置
    add: function (param, callback) {
        var fdSaveUrl = com_huawei_fdvcenterpluginui.webContextPath + "/rest/services/fd?s=" + Math.random();
        $.ajax({
            type: 'POST',
            contentType: 'application/json;charset=utf-8',
            url: fdSaveUrl,
            data: JSON.stringify(param),
            dataType: "json",
            success: function (response) {
                if (typeof callback === "function") {
                    var ret = {
                        code: response.code,
                        msg: response.description
                    }
                    callback(ret);
                }
            }
        });
    },
    /**
     * 获取设置信息
     * @param {*} callback 
     */
    getSetting: function (callback) {
        var url = com_huawei_fdvcenterpluginui.webContextPath + "/rest/services/settings?s=" + Math.random();
        $.get(url, function (response) {
            var ret = {
                code: response.code,
                data: response.data,
                msg: response.description
            }
            callback(ret);
        }, "json");
    },

    /**
     * 获取默认告警服务账号
     * @param {*} callback 
     */
    getDefaultAlarmUserName: function (callback) {
        var url = com_huawei_fdvcenterpluginui.webContextPath + "/rest/services/fd/alarm/username?s=" + Math.random();
        $.get(url, function (response) {
            var ret = {
                code: response.code,
                data: response.data,
                msg: response.description
            }
            callback(ret);
        }, "json");
    },
    getVersion: function (callback) {
        var url = com_huawei_fdvcenterpluginui.webContextPath + "/rest/services/fd/version?s=" + Math.random();
        $.get(url, function (response) {
            var ret = {
                code: response.code,
                data: response.data,
                msg: response.description,
                supportHA: response.supportHA
            }
            callback(ret);
        }, "json");
    },
    /**
     * 获取FD版本信息
     * @param {*} param 
     * @param {*} callback 
     */
    getFDVersion: function (param, callback) {
        var endpoint = "/rich/Appliance/Version";
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },
}