  /* eslint-disable */
  /*==========================================================
   *                    升级相关接口
   ==========================================================*/
  var upgradePackageManage = {
      /**
       * 获取服务器列表
       * method: GET
       * eg.
       */
      getScopesList: function (param, callback) {
          var endpoint = '/rich/UpgradeService/DeviceVersion/RackDevices';
          endpoint +="?$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize +"&$orderby="+ param.orderby;
          if (param.filter != '' && param.filter != undefined) {
            endpoint +="&$filter=" + param.filter;
          }
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 生效
       */
      ActiveFireware: function (param, callback) {
          var endpoint = '/rich/UpgradeService/DeviceVersion/Actions/UpgradeService.ActiveFireware';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 获取生效任务详情
       * request: /rich/Tasks/{id}
       * method: GET
       * @param id - 父任务ID.
       * eg.
       */
      getMasterTaskInfo: function (param, callback) {
          var endpoint = '/rich/Tasks/' + param.id;
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 获取
       */
      getEnclosureDevices:function(param, callback){
        var endpoint = '/rich/UpgradeService/DeviceVersion/EnclosureDevices';
        var data = {
            "ips": [param.ip],
            "httpMethod": 'GET',
            "endpoint": endpoint,
        }
        ajax(data, callback);
      }


  }