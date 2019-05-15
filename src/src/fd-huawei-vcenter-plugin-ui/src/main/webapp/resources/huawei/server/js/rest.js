var serverManage = {
    /**
     * 获取服务器类型
     * @param {*} param 
     * @param {*} callback 
     */
    getServerModelList: function (param, callback) {
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": "/rich/NodeGroups?Type=" + param.type,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取服务器列表
     * @param {*} param 
     * @param {*} callback 
     */
    getServerList: function (param, callback) {
        var endpoint = "/rich/Nodes?";
        if (param.groupId) {
            endpoint += "GroupID=" + param.groupId + "&";
        }
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
     * 获取机框列表
     * @param {*} param 
     * @param {*} callback 
     */
    getEnclosureList: function (param, callback) {
        var endpoint = "/rich/Enclosures?$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize;
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取服务器基本信息
     * @param {*} param 
     * @param {*} callback 
     */
    getBasicInfo: function (param, callback) {
        var endpoint = "/rich/Nodes/" + param.deviceId;
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取机框基本信息
     * @param {*} param 
     * @param {*} callback 
     */
    getEnclosureBasicInfo: function (param, callback) {
        var endpoint = "/rich/Enclosures/" + param.deviceId;
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取CPU集合
     * @param {*} param 
     * @param {*} callback 
     */
    getCupList: function (param, callback) {
        var endpoint = "/rich/Nodes/" + param.deviceId + "/Processor";
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取内存集合
     * @param {*} param 
     * @param {*} callback 
     */
    getMemoryList: function (param, callback) {
        var endpoint = "/rich/Nodes/" + param.deviceId + "/Memory";
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取电源集合
     * @param {*} param 
     * @param {*} callback 
     */
    getPowerList: function (param, callback) {
        var endpoint = "/rich/Nodes/" + param.deviceId + "/Power";
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取风扇集合
     * @param {*} param 
     * @param {*} callback 
     */
    getFanList: function (param, callback) {
        var endpoint = "/rich/Nodes/" + param.deviceId + "/Thermal";
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取硬盘集合
     * @param {*} param 
     * @param {*} callback 
     */
    getDriveList: function (param, callback) {
        var endpoint = "/rich/Nodes/" + param.deviceId + "/Storage/Drive";
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取指定硬盘信息
     * @param {*} param 
     * @param {*} callback 
     */
    getOneDrive: function (param, callback) {
        var endpoint = "/rich/Nodes/" + param.deviceId + "/Storage/Drive/" + param.driveId;
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取网卡集合
     * @param {*} param 
     * @param {*} callback 
     */
    getNetworkAdapterList: function (param, callback) {
        var endpoint = "/rich/Nodes/" + param.deviceId + "/NetworkAdapter";
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取PCIE集合
     * @param {*} param 
     * @param {*} callback 
     */
    getPCIeList: function (param, callback) {
        var endpoint = "/rich/Nodes/" + param.deviceId + "/PCIe";
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取RAID集合
     * @param {*} param 
     * @param {*} callback 
     */
    getRaidList: function (param, callback) {
        var endpoint = "/rich/Nodes/" + param.deviceId + "/Storage/RaidCard";
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取指定RAID信息
     * @param {*} param 
     * @param {*} callback 
     */
    getOneRaid: function (param, callback) {
        var endpoint = "/rich/Nodes/" + param.deviceId + "/Storage/RaidCard/" + param.raidId;
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取指定交换板信息
     * @param {*} param 
     * @param {*} callback 
     */
    getOneSwitch: function (param, callback) {
        var endpoint = "/rich/SwitchNodes/" + param.deviceId;
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取指定交换板信息
     * @param {*} param 
     * @param {*} callback 
     */
    getOneSwitchBoards: function (param, callback) {
        var endpoint = "/rich/SwitchNodes/" + param.deviceId / Board;
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },

    /**
     * 获取设备目录
     * @param {*} param 
     * @param {*} callback 
     */
    getCatalogue: function (param, callback) {
        var endpoint = "/rich/Nodes/" + param.deviceId + "/Catalogue";
        var data = {
            "ips": [param.ip],
            "httpMethod": "GET",
            "endpoint": endpoint,
            "data": null
        }
        ajax(data, callback);
    },
    /**
     * 上下电操作
     * @param {*} param 
     * @param {*} callback 
     */
    computerReset: function (param, callback) {
        var endpoint = "/rich/Nodes/Actions/ComputerSystem.Reset";
        var data = {
            "ips": [param.ip],
            "httpMethod": "POST",
            "endpoint": endpoint,
            "data": param.data //{"ResetType":"ForceOff","DeviceIDs":["588a9e2a-002d-480b-8902-70354141faa3"]}
        }
        ajax(data, callback);
    },
    /**
     * 上下电任务查询
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