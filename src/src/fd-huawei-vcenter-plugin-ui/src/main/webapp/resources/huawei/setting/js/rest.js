var settingManage = {
    /**
     * 获取ips
     */
    getIps: function (callback) {
        var url = com_huawei_fdvcenterpluginui.webContextPath + "/rest/services/settings/ips?s=" + Math.random();
        $.get(url, function (response) {
            callback(response);
        }, "json");
    },
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
    saveSetting: function (param, callback) {
        var url = com_huawei_fdvcenterpluginui.webContextPath + "/rest/services/settings";
        $.ajax({
            type: 'PUT',
            contentType: 'application/json;charset=utf-8',
            url: url,
            data: JSON.stringify(param),
            dataType: "json",
            success: function (response) {
                var ret = {
                    code: response.code,
                    data: response.data,
                    msg: response.description
                }
                callback(ret);
            }
        });
    }
}