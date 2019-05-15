var serverprofileManage = {
    /**
     * 获取serverprofile列表
     * @param {*} param 
     * @param {*} callback 
     */
    getList: function (param, callback) {
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": "/rich/ServerProfiles?$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 查询serverprofile详细信息.
     * @param {*} param 
     * @param {*} callback 
     */
    getOneServerProfiles: function (param, callback) {
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": "/rich/ServerProfiles/" + param.id,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取设备模型列表.
     * @param {*} param 
     * @param {*} callback 
     */
    getServerHardwareModels: function (param, callback) {
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": "/rich/ServerHardwareModels",
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取设备模型.
     * @param {*} param 
     * @param {*} callback 
     */
    getServerHardwareModel: function (param, callback) {
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": "/rich/ServerHardwareModels/" + param.id,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 查询指定ServerHardwareModel或者ServerProfile适用的服务器列表 获取设备列表（用来获取指定配置模板已绑定的设备列表和可绑定的设备列表）
     * @param {*} param 
     * @param {*} callback 
     */
    getNodeProfileQuery: function (param, callback) {
        var endpoint = "/rich/ServerProfiles/Actions/Device.Query";
        if (param.pageNo !== undefined && param.pageNo !== null) {
            endpoint += "?$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize;
        }
        var data = {
            "ips": [param.ip],
            "httpMethod": "POST",
            "endpoint": endpoint,
            "data": {
                "HardwareModelID": param.hardwareModelId,
                "ServerProfileID": param.serverProfileId
            }
        }
        ajax(data, callback);
    },

    /**
     * 删除配置
     * @param {*} param 
     * @param {*} callback 
     */
    deleteConfig: function (param, callback) {
        if (param.profilesIDs.length > 1) {
            var data = {
                "ips": [param.ip],
                "httpMethod": "POST",
                "endpoint": "/rich/ServerProfiles/Actions/ServerProfile.BatchDelete",
                "data": {
                    "ServerProfileIDs": param.profilesIDs
                }
            }
            ajax(data, callback);
        } else {
            var data = {
                "ips": [param.ip],
                "httpMethod": "DELETE",
                "endpoint": "/rich/ServerProfiles/" + param.profilesIDs[0],
                "data": ""
            }
            ajax(data, callback);

        }
    },

    /**
     * 绑定设备
     * @param {*} param 
     * @param {*} callback 
     */
    binding: function (param, callback) {
        var data = {
            "ips": [param.ip],
            "httpMethod": "POST",
            "endpoint": "/rich/Nodes/Actions/Profile.Binding",
            "data": {
                "Devices": param.devices,
                "ProfileID": param.profileId
            }
        }
        ajax(data, callback);
    },

    /**
     * 解绑定设备
     * @param {*} param 
     * @param {*} callback 
     */
    unbinding: function (param, callback) {
        var data = {
            "ips": [param.ip],
            "httpMethod": "POST",
            "endpoint": "/rich/Nodes/Actions/Profile.Unbinding",
            "data": {
                "Devices": param.devices
            }
        }
        ajax(data, callback);
    },

    /**
     * 下发serverprofile.
     * @param {*} param 
     * @param {*} callback 
     */
    applyProfile: function (param, callback) {
        var data = {
            "ips": [param.ip],
            "httpMethod": "POST",
            "endpoint": "/rich/ServerProfiles/Actions/ServerProfile.Deploy",
            "data": {
                "Collections": param.Collections
            }
        }
        ajax(data, callback);
    },

    /**
     * 创建serverprofile.
     * @param {*} param 
     * @param {*} callback 
     */
    createServerProfiles: function (param, callback) {
        var data = {
            "ips": [param.ip],
            "httpMethod": "POST",
            "endpoint": "/rich/ServerProfiles",
            "data": param.data
        }
        ajax(data, callback);
    },

    /**
     * 修改serverprofile.
     * @param {*} param 
     * @param {*} callback 
     */
    modifyServerProfiles: function (param, callback) {
        var data = {
            "ips": [param.ip],
            "httpMethod": "PATCH",
            "endpoint": "/rich/ServerProfiles/" + param.id,
            "data": param.data
        }
        ajax(data, callback);
    },

}