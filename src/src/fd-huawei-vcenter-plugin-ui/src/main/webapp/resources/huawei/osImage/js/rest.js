var osImageManage = {

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
     * 删除指定OS镜像
     */
    deleteImage: function (param, callback) {
        var endpoint = "/rich/Images/" + param.id;
        var data = {
            "ips": [param.ip],
            "httpMethod": "DELETE",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 按条件查询OS镜像列表
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
     * 获取OS镜像创建时的枚举值
     */
    getImageEnums: function (param, callback) {
        var endpoint = "/rich/DeployService/Actions/QueryOption.Enums";
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 根据镜像类型 查询镜像版本号
     */
    getSubType: function (param, callback) {
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
     * 创建OS镜像
     */
    createImage: function (param, callback) {
        var endpoint = "/rich/Images";
        var data = {
            "ips": [param.ip],
            "httpMethod": "POST",
            "endpoint": endpoint,
            "data": param.data
        }
        ajax(data, callback);
    },

    /**
     * 查询指定OS镜像的详情
     */
    getImageInfo: function (param, callback) {
        var endpoint = "/rich/Images/" + param.id;
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 修改指定OS镜像的详情
     */
    editImageInfo: function (param, callback) {
        var endpoint = "/rich/Images/" + param.id;
        var data = {
            "ips": [param.ip],
            "httpMethod": "PATCH",
            "endpoint": endpoint,
            "data": param.data
        }
        ajax(data, callback);
    },

    /**
     * 任务查询
     * @param {*} param 
     * @param {*} callback 
     */
    tasks: function (param, callback) {
        var endpoint = "/rich/Tasks/" + param.taskId;
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

}