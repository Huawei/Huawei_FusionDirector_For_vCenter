  /* eslint-disable */
  /*==========================================================
   *                    升级相关接口
   ==========================================================*/
  var upgradePackageManage = {
      /**
       * 获取固件升级微服务信息
       * request: /rich/UpgradeService
       * method: GET
       * eg.
       */
      getUpgradeService: function (param, callback) {
          var endpoint = '/rich/UpgradeService';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 检查仓库包名和已用总容量
       * request: /rich/UpgradeService/Repository/Check
       * method: POST
       * @param body - 请求体
       */
      checkRepository: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Repository/Check';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 查询升级包仓库
       * request: /rich/UpgradeService/Repository
       * method: GET
       * @param skip - 分页参数：页数
       * @param top - 分页参数：每页的数据量
       * eg.
       */
      getRepositoryList: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Repository';
          if (param.pageNo !== undefined && param.pageNo !== null) {
              endpoint += "?$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize;
          }
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 查询指定升级包信息
       * request: /rich/UpgradeService/Repository/{id}
       * method: GET
       * @param id - 仓库包ID
       * eg.
       */
      getRepositoryById: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Repository/{id}';
          endpoint = endpoint.replace('{id}', id)
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 删除指定升级包
       * request: /rich/UpgradeService/Repository/{id}
       * method: DELETE
       * @param id - 仓库包ID
       */
      deleteRepositoryById: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Repository/{id}';
          endpoint = endpoint.replace('{id}', param.id)
          var data = {
              "ips": [param.ip],
              "httpMethod": 'DELETE',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 上传文件接口
       * request: /rich/UpgradeService/Action/ImportFile
       * method: POST
       * @param body - 请求体
       */
      importFile: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Action/ImportFile';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 查询指定产品的小包信息
       * request: /rich/UpgradeService/Package
       * method: GET
       * @param productType - 产品类型
       * eg.
       */
      getPackagesByProductType: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Package';
          endpoint = endpoint.replace('{ProductType}', productType)
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * "创建组合包"
       * request: /rich/UpgradeService/Bundle
       * method: POST
       * @param body - 请求体
       */
      createBundle: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Bundle';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 修改组合包
       * request: /rich/UpgradeService/Bundle/{id}
       * method: PATCH
       * @param body - 请求体
       * @param id - 组合包的ID
       */
      updateBundleById: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Bundle/{id}';
          endpoint = endpoint.replace('{id}', id)
          var data = {
              "ips": [param.ip],
              "httpMethod": 'PATCH',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 删除组合包
       * request: /rich/UpgradeService/Bundle/{id}
       * method: DELETE
       * @param id - 组合包的ID
       */
      deleteBundleById: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Bundle/{id}';
          endpoint = endpoint.replace('{id}', id)
          var data = {
              "ips": [param.ip],
              "httpMethod": 'DELETE',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 导出板级大包到指定目录
       * request: /rich/UpgradeService/Bundle/{id}/Download
       * method: GET
       * @param id - 组合包的ID
       * eg.
       */
      downloadBundleById: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Bundle/{id}/Download';
          endpoint = endpoint.replace('{id}', id)
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },

      /**
       * 获取当前支持升级的产品类型
       * request: /rich/UpgradeService/ProductType
       * method: GET
       * eg.
       */
      getSupportProductType: function (param, callback) {
          var endpoint = '/rich/UpgradeService/ProductType';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 获取指定产品下可选固件/软件类型和版本
       * request: /rich/UpgradeService/Module
       * method: GET
       * @param productType - 产品类型
       * eg.
       */
      getSupportModule: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Module?$filter=ProductType eq ' + param.productType;
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 选择可升级机架设备
       * request: /rich/UpgradeService/RackDevices
       * method: POST
       * @param body - 请求体
       */
      getSupportRackDevices: function (param, callback) {
          var endpoint = '/rich/UpgradeService/RackDevices';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 确认包的升级信息，给用户返回相关提示信息
       * request: /rich/UpgradeService/Package/Confirm
       * method: POST
       * @param body - 请求体
       */
      confirmPackage: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Package/Confirm';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 确认大包的升级信息，给用户返回相关提示信息
       * request: /rich/UpgradeService/Bundle/Confirm
       * method: POST
       * @param body - 请求体
       */
      confirmBundle: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Bundle/Confirm';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 下发大包升级
       * request: /rich/UpgradeService/Bundle/Actions/UpdateService.SimpleUpdate
       * method: POST
       * @param body - 请求体
       */
      sendBundleSimpleUpdate: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Bundle/Actions/UpdateService.SimpleUpdate';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 下发小包升级
       * request: /rich/UpgradeService/Package/Actions/UpdateService.SimpleUpdate
       * method: POST
       * @param body - 请求体
       */
      sendPackageSimpleUpdate: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Package/Actions/UpdateService.SimpleUpdate';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 查询固件是否可以生效,返回未生效的设备信息
       * request: /rich/UpgradeService/FirmwareInventories/Action/FirmwareInventory.QueryDevicesFWInfo
       * method: POST
       * @param body - 请求体
       */
      FirmwareInventoriesActionFirmwareInventoryQueryDevicesFwInfo: function (param, callback) {
          var endpoint = '/rich/UpgradeService/FirmwareInventories/Action/FirmwareInventory.QueryDevicesFWInfo';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 选择可升级机框设备
       * request: /rich/UpgradeService/EnclosureDevices
       * method: POST
       * @param body - 请求体
       */
      getSupportEnclosureDevices: function (param, callback) {
          var endpoint = '/rich/UpgradeService/EnclosureDevices';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 确认机框的升级包信息
       * request: /rich/UpgradeService/EnclosurePackage/Confirm
       * method: POST
       * @param body - 请求体
       */
      confirmEnclosurePackage: function (param, callback) {
          var endpoint = '/rich/UpgradeService/EnclosurePackage/Confirm';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 下发机框升级的命令
       * request: /rich/UpgradeService/Enclosure /Actions/UpdateService.SimpleUpdate
       * method: POST
       * @param body - 请求体
       */
      sendEnclosurePackageSimpleUpdate: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Enclosure /Actions/UpdateService.SimpleUpdate';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 根据产品类型查询设备
       * request: /rich/UpgradeService/Devices
       * method: GET
       * @param productType - 产品类型
       * eg.
       */
      getDevicesByProductType: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Devices';
          endpoint = endpoint.replace('{ProductType}', param.productType)
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 创建升级计划
       * request: /rich/UpgradeService/UpgradePlan
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
          endpoint = endpoint.replace('{id}', id)
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
          endpoint = endpoint.replace('{id}', id)
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
          endpoint = endpoint.replace('{id}', id)
          var data = {
              "ips": [param.ip],
              "httpMethod": 'PATCH',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 检查升级计划名称是否重名
       * request: /rich/UpgradeService/UpgradePlan/CheckName
       * method: POST
       * @param body - 请求体
       * @param top - $top 查询结果显示的条数
       * @param skip - $skip 查询结果开始显示位置
       * @param id - 查询信息的ID
       */
      checkUpgradePlanName: function (param, callback) {
          var endpoint = '/rich/UpgradeService/UpgradePlan/CheckName';
          endpoint = endpoint.replace('{$top}', top)
          endpoint = endpoint.replace('{$skip}', skip)
          endpoint = endpoint.replace('{ID}', id)
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },

      /**
       * 获取基线列表
       * method: GET
       * @param skip - 分页参数：页数
       * @param top - 分页参数：每页的数据量
       * eg.
       */
      getBaselineList: function (param, callback) {
          var endpoint = '/rich/UpgradeService/BaseLine?';
          endpoint += "$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize;
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 自建基线
       * method: POST
       * eg.
       */
      creatBaseline: function (param, callback) {
          var endpoint = '/rich/UpgradeService/BaseLine';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              data: param.data
          }
          ajax(data, callback);
      },
      /**
       * 自建基线 修改
       * method: PATCH
       * eg.
       */
      updateBaseline: function (param, callback) {
          var endpoint = '/rich/UpgradeService/BaseLine/{id}';
          endpoint = endpoint.replace('{id}', param.id)
          var data = {
              "ips": [param.ip],
              "httpMethod": 'PATCH',
              "endpoint": endpoint,
              data: param.data
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
          var endpoint = '/rich/UpgradeService/Repository?';
          if (param.pageNo !== undefined && param.pageNo !== null) {
              endpoint += "?$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize;
          }
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },

      /**
       * 查询产品的版本
       * request: /rich/UpgradeService/Package
       * method: GET
       * @param productType - 产品类型
       * eg.
       */
      getProductTypeVis: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Repository?';
          endpoint += "$filter=ProductType eq '" + param.ProductType + "'";
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /***
       * 删除基线
       * rich/UpgradeService/BaseLine/
       * 
       */
      deleteBaseline: function (param, callback) {
          var endpoint = '/rich/UpgradeService/BaseLine/{id}';
          endpoint = endpoint.replace('{id}', param.id)
          var data = {
              "ips": [param.ip],
              "httpMethod": 'DELETE',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 上传升级包
       * request: /rich/UpgradeService/Action/ImportFile
       * method: POST
       * @param body - 请求体
       */
      importPackageFile: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Action/ImportFile';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'POST',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },
      /**
       * 获取升级包列表
       * method: GET
       * eg.
       */
      getPackageList: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Repository?';
          endpoint += "$skip=" + (param.pageNo - 1) * param.pageSize + "&$top=" + param.pageSize;
          var data = {
              "ips": [param.ip],
              "httpMethod": 'GET',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 删除升级包
       * method: DELETE
       * eg.
       */
      deletePackageList: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Repository/{id}';
          endpoint = endpoint.replace('{id}', param.id)
          var data = {
              "ips": [param.ip],
              "httpMethod": 'DELETE',
              "endpoint": endpoint,
          }
          ajax(data, callback);
      },
      /**
       * 修改在线地址
       * eg ./rich/UpgradeService/Network
       */
      addOnlineUrl: function (param, callback) {
          var endpoint = '/rich/UpgradeService/Network';
          var data = {
              "ips": [param.ip],
              "httpMethod": 'PATCH',
              "endpoint": endpoint,
              "data": param.data
          }
          ajax(data, callback);
      },

      /**
       * 获取升级包导入详情
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
       * 获取在线地址
       * request /rich/UpgradeService/Network
       * method: GET
       */
      getOnlineUrl:function(param, callback) {
        var endpoint = '/rich/UpgradeService/Network';
        var data = {
            "ips": [param.ip],
            "httpMethod": 'GET',
            "endpoint": endpoint,
        }
        ajax(data, callback);
      },


  }