var serverprofileManage = {
    /**
     * 获取OS部署模板列表
     * @param {*} param 
     * @param {*} callback 
     */
    getList: function (param, callback) {
        var endpoint = "/rich/DeployModels?";
        endpoint += "$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize;
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },


    /**
     * 删除部署模板
     * @param {*} param 
     * @param {*} callback 
     */
    deleteConfig: function (param, callback) {
        var endpoint = "/rich/DeployModels/" + param.id;
        var data = {
            "ips": [param.ip],
            "httpMethod": "DELETE",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 根据条件搜索OS部署模板列表
     * @param {*} param 
     * @param {*} callback 
     */
    getModelsList: function (param, callback) {
        var endpoint = "/rich/DeployModels/Actions/DeployModel.Query";
        endpoint += "?$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize;
        var data = {
            "ips": [param.ip],
            "httpMethod": "POST",
            "endpoint": endpoint,
            "data": param.data
        }
        ajax(data, callback);
    },

    /**
     * 搜索OS部署详情
     * @param {*} param 
     * @param {*} callback 
     */
    getModelsQuery: function (param, callback) {
        var endpoint = "/rich/DeployModels/" + param.id;
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 根据os镜像类型查询OS镜像的枚举值
     */
    getImageQuery: function (param, callback) {
        var endpoint = "/rich/DeployService/Actions/QueryOption.OsInfo";
        var data = {
            "ips": [param.ip],
            "httpMethod": "POST",
            "endpoint": endpoint,
            "data": param.data
        }
        ajax(data, callback);
    },

    /**
     * 查询OS镜像列表
     */
    getImageList: function (param, callback) {
        var endpoint = "/rich/Images?";
        endpoint += "$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize;
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 查询OS镜像列表
     */
    getImageQueryList: function (param, callback) {
        var endpoint = "/rich/Images/Actions/Image.Query";
        endpoint += "?$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize;
        var data = {
            "ips": [param.ip],
            "httpMethod": "POST",
            "endpoint": endpoint,
            "data": param.data
        }
        ajax(data, callback);
    },

    /**
     * 提交部署
     */
    submitDeploy: function (param, callback) {
        var endpoint = "/rich/DeployModels";
        var data = {
            "ips": [param.ip],
            "httpMethod": "POST",
            "endpoint": endpoint,
            "data": param.data
        }
        ajax(data, callback);
    },

    /**
     * 修改部署
     */
    editDeploy: function (param, callback) {
        var endpoint = "/rich/DeployModels/" + param.id;
        var data = {
            "ips": [param.ip],
            "httpMethod": "PATCH",
            "endpoint": endpoint,
            "data": param.data
        }
        ajax(data, callback);
    },


    /**
     * 获取设备列表
     */
    getNodes: function (param, callback) {
        var endpoint = "/rich/DeployModels/Actions/DeployModel.Deploy";
        // var endpoint = "/rich/Nodes/Actions/Nodes.OSQuery";
        var data = {
            "ips": [param.ip],
            "httpMethod": "POST",
            "endpoint": endpoint,
            "data": param.data
        }
        ajax(data, callback);
    },

    /**
     * 查询指定部署适合的服务器列表
     */
    releaseDeploy: function (param, callback) {
        var endpoint = "/rich/DeployModels/" + param.id + "/Devices?";
        endpoint += "$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize + "&$filter=ServerState eq OnLine";
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },


    /**
     * 使用部署模板部署OS
     */
    deployOs: function (param, callback) {
        var endpoint = "/rich/DeployModels/Actions/DeployModel.Deploy";
        var data = {
            "ips": [param.ip],
            "httpMethod": "POST",
            "endpoint": endpoint,
            "data": param.data
        }
        ajax(data, callback);
    },


}