var serverprofileManage = {

    /**
     * 获取父任务列表。
     * request: /rich/Tasks
     * method: GET
     * @param skip - 指定分页结果的偏移量。
     * @param top - 指定每页的最大显示数量。
     * @param expand - 控制返回体中的任务是否展示详细信息。如果expand为.则展示任务详细信息。
     * @param filter - 指定任务过滤条件。
     * eg.
     */
    getMasterTaskList: function (param, callback) {
        var endpoint = '/rich/Tasks';
        if (param.pageNo) {
            endpoint += "?$expand=" + param.expand + "&$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize;
        }
        var data = {
            "ips": [param.ip],
            "httpMethod": 'GET',
            "endpoint": endpoint,
        }
        ajax(data, callback);
    },

    /**
     * 获取父任务详细信息。
     * request: /rich/Tasks/{id}
     * method: GET
     * @param id - 父任务ID.
     * eg.
     */
    getMasterTaskInfo: function (param, callback) {
        var endpoint = '/rich/Tasks/' + param.id;;
        var data = {
            "ips": [param.ip],
            "httpMethod": 'GET',
            "endpoint": endpoint,
        }
        ajax(data, callback);
    },
    /**
     * 删除父任务。
     * request: /rich/Tasks/{id}
     * method: DELETE
     * @param id - 父任务ID。
     */
    deleteMasterTask: function (param, callback) {
        var endpoint = '/rich/Tasks/' + param.id;
        var data = {
            "ips": [param.ip],
            "httpMethod": 'DELETE',
            "endpoint": endpoint,
        }
        ajax(data, callback);
    },
    /**
     * 获取子任务列表。
     * request: /rich/Tasks/{id}/SubTasks
     * method: GET
     * @param id - 父任务ID。
     * @param skip - 指定分页结果的偏移量。
     * @param top - 指定每页的最大显示数量。
     * @param expand - 控制返回体中的任务是否展示详细信息。如果expand为.则展示任务详细信息。
     * @param filter - 指定任务过滤条件。
     * eg.
     */
    getSubTaskCollection: function (param, callback) {
        var endpoint = '/rich/Tasks/{id}/SubTasks';
        endpoint = endpoint.replace('{id}', param.id)
        endpoint += "?$expand=" + param.expand //+ "&$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize;
        var data = {
            "ips": [param.ip],
            "httpMethod": 'GET',
            "endpoint": endpoint,
        }
        ajax(data, callback);
    }

}