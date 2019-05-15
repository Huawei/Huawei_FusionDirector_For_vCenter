  /* eslint-disable */
  /*==========================================================
   *                    升级相关接口
   ==========================================================*/
  var upgradePackageManage = {
      /**
       * 创建升级计划
       * request: /rich/UpgradeService/UpgradePlan   
       * 
       * method: POST
       * @param body - 请求体
       */
      createUpgradePlan: function (param, callback) {
          var endpoint = '/rich/UpgradeService/UpgradePlan';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 获取所有的升级计划
       * request: /rich/UpgradeService/UpgradePlan
       * method: GET
       * @param skip - 分页参数：页数
       * @param top - 分页参数：每页的数据量
       * eg.
       */
      getUpgradePlans: function (param, callback) {
          var endpoint = '/rich/UpgradeService/UpgradePlan?';
          endpoint += "$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize;
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 获取单个升级计划
       * request: /rich/UpgradeService/UpgradePlan/{id}
       * method: GET
       * @param id - 升级计划的ID
       * eg.
       */
      getUpgradePlanById: function (param, callback) {
          var endpoint = '/rich/UpgradeService/UpgradePlan/{id}';
          endpoint = endpoint.replace('{id}', param.id)
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 删除单个升级计划
       * request: /rich/UpgradeService/UpgradePlan/{id}
       * method: DELETE
       * @param id - 升级计划的ID
       */
      deleteUpgradePlanById: function (param, callback) {
          var endpoint = '/rich/UpgradeService/UpgradePlan/{id}';
          endpoint = endpoint.replace('{id}', param.id)
          var data = {
              "ips": [param.ip],
              "httpMethod": 'DELETE',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 修改升级计划
       * request: /rich/UpgradeService/UpgradePlan/{id}
       * method: PATCH
       * @param body - 请求体
       * @param id - 升级计划的ID
       */
      updateUpgradePlanById: function (param, callback) {
          var endpoint = '/rich/UpgradeService/UpgradePlan/{id}';
          endpoint = endpoint.replace('{id}', param.id)
          var data = {
              "ips": [param.ip],
              "httpMethod": 'PATCH',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },


      /**
       * 获取全部基线
       * method: GET
       * eg.
       */
      getAllBaselineList: function (param, callback) {
          var endpoint = '/rich/UpgradeService/BaseLine';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 获取全部升级包列表
       * method: GET
       * eg.
       */
      getAllPackageList: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Repository';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 检测计划名称是否重复
       */
      checkPlanName: function (param, callback) {
          var endpoint = '/rich/UpgradeService/UpgradePlan/CheckName';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**   
       * 获取设备列表
       */
      getAllDeviceList: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Actions/UpgradeService.UpgradeableDeviceInfo';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 组 列表
       * /rich/NodeGroups?Type=UserSpecification
       */
      getAllGRoupList: function (param, callback) {
          var endpoint = '/rich/NodeGroups?';
          endpoint += "Type=UserSpecification";
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 停用 启用
       * /rich/UpgradeService/UpgradePlan/
       */
      unEnable: function (param, callback) {
          var endpoint = '/rich/UpgradeService/UpgradePlan/{id}/Actions/UpgradePlan.Enable';
          endpoint = endpoint.replace('{id}', param.id)
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 检查组是否可以用
       * 
       */
      checkGeoup: function (param, callback) {
          var endpoint = '/rich/UpgradeService/UpgradePlan/Actions/UpgradePlan.CheckGroup';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 组 的设备
       * 
       */
      groupDevice: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Actions/UpgradeService.UpgradeableDeviceInfo';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 获取单个设备组的详情
       */
      getGroupItemDetail: function (param, callback) {
          var endpoint = '/rich/Nodes?';
          endpoint += "Group=" + param.name + "&$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize;
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 机框设备列表
       * /rich/UpgradeService/Actions/UpgradeService.UpgradeableEnclosureInfo
       */
      getEnclosureInfo: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Actions/UpgradeService.UpgradeableEnclosureInfo';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 设备的产品类型
       * /rich/UpgradeService/ProductType
       */
      getProduct: function (param, callback) {
          var endpoint = '/rich/UpgradeService/ProductType';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 获取设备的固件等信息
       * /rich/UpgradeService/Actions/UpgradeService.DeviceFirmwareInfo
       */
      getDetailsInfo: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Actions/UpgradeService.DeviceFirmwareInfo';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      }



  }