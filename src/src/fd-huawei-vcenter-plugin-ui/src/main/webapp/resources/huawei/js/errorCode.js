var errorCode_zh_CN = {
    "0": "成功",
    /***************************自定义 开始********************************/
    "-80002": '请先上传证书',
    "-80003": '请先上传根证书',
    "-80004": '请先上传中间证书',
    "-90008": '证书错误 ',
    "-80001": '网络错误',
    "1204": "FusionDirector连接失败，请重试。",
    "-331": "FusionDirector连接失败，请重试。",
    "201": "查询或删除失败，待操作对象不存在",
    "1001": "FusionDirector License 已过期！",
    "1002": "FusionDirector license不具有调用openapi的功能",
    "1024": "FusionDirector 认证失败",
    "149201": "License数量不足。",
    "-331001": "FusionDirector License 已过期！",
    "-331002": "FusionDirector license不具有调用openapi的功能",
    "-331024": "FusionDirector 认证失败",
    "-33149201": "License数量不足。",
    "-99999": "操作失败：未知错误。",
    "-90001": "系统内部错误，请先初始化", //系统内部错误 9xxxx
    "-90002": "请先配置FusionDirector",
    "-90003": "登录状态失效请重新登录vCenter",
    "-90004": "当前没有失败任务可被清除",
    "-90005": "FusionDirector用户名或者密码错误",
    "-90009": "请求不支持",
    "-90010": "用户名或者密码或者端口错误",
    "-90011": "告警服务账号重复",
    "-80009": "连接当前FusionDirector失败:访问FusionDirector服务器时发生错误。", //网络错误  8xxxx
    "-80010": "连接当前FusionDirector失败:连接到FusionDirector服务器时发生错误, 由于目标机积极拒绝。",
    "-80011": "没有找到对应的FusionDirector",
    "-81001": "连接到FusionDirector服务器时网络连接失败",
    "-70001": "操作失败:数据库读取失败。", //数据库没有找到对应的数据。[{0}]  //数据库错误 7xxxx
    "-50400": "连接当前FusionDirector失败:BadRequest 指示服务器未能识别请求。",
    "-50401": "连接当前FusionDirector失败:Unauthorized 指示请求的资源要求身份验证。WWW-Authenticate 头包含如何执行身份验证的详细信息。",
    "-50402": "连接当前FusionDirector失败:保留 PaymentRequired 以供将来使用。",
    "-50403": "连接当前FusionDirector失败:Forbidden 指示服务器拒绝满足请求。",
    "-50404": "连接当前FusionDirector失败:NotFound 指示请求的资源不在服务器上。",
    "-50405": "连接当前FusionDirector失败:MethodNotAllowed 指示请求的资源上不允许请求方法（POST 或 GET）。",
    "-50406": "连接当前FusionDirector失败:NotAcceptable 指示客户端已用 Accept 头指示将不接受资源的任何可用表示形式。",
    "-50407": "连接当前FusionDirector失败:ProxyAuthenticationRequired 指示请求的代理要求身份验证。Proxy-authenticate 头包含如何执行身份验证的详细信息。",
    "-50408": "连接当前FusionDirector失败:RequestTimeout 指示客户端没有在服务器期望请求的时间内发送请求。",
    "-50409": "连接当前FusionDirector失败:Conflict 指示由于服务器上的冲突而未能执行请求。",
    "-50410": "连接当前FusionDirector失败:Gone 指示请求的资源不再可用。",
    "-50411": "连接当前FusionDirector失败:LengthRequired 指示缺少必需的 Content-length 头。",
    "-50412": "连接当前FusionDirector失败:PreconditionFailed 指示为此请求设置的条件失败，且无法执行此请求。条件是用条件请求标头（如 If-Match、If-None-Match 或 If-Unmodified-Since）设置的。",
    "-50413": "连接当前FusionDirector失败:RequestEntityTooLarge 指示请求太大，服务器无法处理。",
    "-50414": "连接当前FusionDirector失败:RequestUriTooLong 指示 URI 太长。",
    "-50415": "连接当前FusionDirector失败:UnsupportedMediaType 指示请求是不支持的类型。",
    "-50416": "连接当前FusionDirector失败:RequestedRangeNotSatisfiable 指示无法返回从资源请求的数据范围，因为范围的开头在资源的开头之前，或因为范围的结尾在资源的结尾之后。",
    "-50417": "连接当前FusionDirector失败:ExpectationFailed 指示服务器未能符合 Expect 头中给定的预期值。",
    "-50500": "连接当前FusionDirector失败:InternalServerError 指示服务器上发生了一般错误。",
    "-50501": "连接当前FusionDirector失败:NotImplemented 指示服务器不支持请求的函数。",
    "-50502": "连接当前FusionDirector失败:BadGateway 指示中间代理服务器从另一代理或原始服务器接收到错误响应。",
    "-50503": "连接当前FusionDirector失败:ServiceUnavailable 指示服务器暂时不可用，通常是由于过多加载或维护。",
    "-50504": "连接当前FusionDirector失败:GatewayTimeout 指示中间代理服务器在等待来自另一个代理或原始服务器的响应时已超时。",
    "-50505": "连接当前FusionDirector失败:HttpVersionNotSupported 指示服务器不支持请求的 HTTP 版本。",
    "-40404": "路径错误，未找到指定文件",
    /***************************自定义 End**********************************/
    "os.10001": '创建OS镜像失败',
    "os.10002": '修改OS镜像失败',
    "os.10003": '删除OS镜像失败',
    "os.10004": '获取OS镜像失败',
    "os.10005": '获取OS镜像类型失败',
    "os.10006": '获取OS镜像枚举失败',
    "os.10007": '获取OS镜像详细信息失败',

    "os.20001": '创建OS部署模板失败',
    "os.20002": '修改OS部署模板失败',
    "os.20003": '删除OS部署模板失败',
    "os.20004": 'OS部署失败',
    /***************************FD Start**********************************/
    'UnkownMessageId': '未知错误，请联系华为管理员',

    'Base.1.0.Success': 'Successfully Completed Request',
    'Base.1.0.GeneralError': 'A general error has occurred. See ExtendedInfo for more information.',
    'Base.1.0.Created': 'The resource has been created successfully',
    'Base.1.0.PropertyDuplicate': 'The property %1 was duplicated in the request.',
    'Base.1.0.PropertyUnknown': 'The property %1 is not in the list of valid properties for the resource.',
    'Base.1.0.PropertyValueTypeError': 'The value %1 for the property %2 is of a different type than the property can accept.',
    'Base.1.0.PropertyValueFormatError': 'The value %1 for the property %2 is of a different format than the property can accept.',
    'Base.1.0.PropertyValueNotInList': 'The value %1 for the property %2 is not in the list of acceptable values.',
    'Base.1.0.PropertyNotWritable': 'The property %1 is a read only property and cannot be assigned a value.',
    'Base.1.0.PropertyMissing': 'The property %1 is a required property and must be included in the request.',
    'Base.1.0.MalformedJSON': 'The request body submitted was malformed JSON and could not be parsed by the receiving service.',
    'Base.1.0.ActionNotSupported': 'The action %1 is not supported by the resource.',
    'Base.1.0.ActionParameterMissing': 'The action %1 requires the parameter %2 to be present in the request body.',
    'Base.1.0.ActionParameterDuplicate': 'The action %1 was submitted with more than one value for the parameter %2.',
    'Base.1.0.ActionParameterUnknown': 'The action %1 was submitted with with the invalid parameter %2.',
    'Base.1.0.ActionParameterValueTypeError': 'The value %1 for the parameter %2 in the action %3 is of a different type than the parameter can accept.',
    'Base.1.0.ActionParameterValueFormatError': 'The value %1 for the parameter %2 in the action %3 is of a different format than the parameter can accept.',
    'Base.1.0.ActionParameterNotSupported': 'The parameter %1 for the action %2 is not supported on the target resource.',
    'Base.1.0.QueryParameterValueTypeError': 'The value %1 for the query parameter %2 is of a different type than the parameter can accept.',
    'Base.1.0.QueryParameterValueFormatError': 'The value %1 for the parameter %2 is of a different format than the parameter can accept.',
    'Base.1.0.QueryParameterOutOfRange': 'The value %1 for the query parameter %2 is out of range %3.',
    'Base.1.0.QueryNotSupportedOnResource': 'Querying is not supported on the requested resource.',
    'Base.1.0.QueryNotSupported': 'Querying is not supported by the implementation.',
    'Base.1.0.SessionLimitExceeded': 'The session establishment failed due to the number of simultaneous sessions exceeding the limit of the implementation.',
    'Base.1.0.EventSubscriptionLimitExceeded': 'The event subscription failed due to the number of simultaneous subscriptions exceeding the limit of the implementation.',
    'Base.1.0.ResourceCannotBeDeleted': 'The delete request failed because the resource requested cannot be deleted.',
    'Base.1.0.ResourceInUse': 'The change to the requested resource failed because the resource is in use or in transition.',
    'Base.1.0.ResourceAlreadyExists': 'The requested resource already exists.',
    'Base.1.0.CreateFailedMissingReqProperties': 'The create operation failed because the required property %1 was missing from the request.',
    'Base.1.0.CreateLimitReachedForResource': 'The create operation failed because the resource has reached the limit of possible resources.',
    'Base.1.0.ServiceShuttingDown': 'The operation failed because the service is shutting down and can no longer take incoming requests.',
    'Base.1.0.ServiceInUnknownState': 'The operation failed because the service is in an unknown state and can no longer take incoming requests.',
    'Base.1.0.NoValidSession': 'There is no valid session established with the implementation.',
    'Base.1.0.InsufficientPrivilege': 'There are insufficient privileges for the account or credentials associated with the current session to perform the requested operation.',
    'Base.1.0.AccountModified': 'The account was successfully modifed.',
    'Base.1.0.AccountNotModified': 'The account modification request failed.',
    'Base.1.0.AccountRemoved': 'The account was successfully removed.',
    'Base.1.0.AccountForSessionNoLongerExists': 'The account for the current session has been removed, thus the current session has been removed as well.',
    'Base.1.0.InvalidObject': 'The object at %1 is invalid.',
    'Base.1.0.InternalError': 'The request failed due to an internal service error.  The service is still operational.',
    'Base.1.0.UnrecognizedRequestBody': 'The service detected a malformed request body that it was unable to interpret.',
    'Base.1.0.ResourceMissingAtURI': 'The resource at the URI %1 was not found.',
    'Base.1.0.ResourceAtUriInUnknownFormat': 'The resource at %1 is in a format not recognized by the service.',
    'Base.1.0.ResourceAtUriUnauthorized': 'While accessing the resource at %1, the service received an authorization error %2.',
    'Base.1.0.CouldNotEstablishConnection': 'The service failed to establish a connection with the URI %1.',
    'Base.1.0.SourceDoesNotSupportProtocol': 'The other end of the connection at %1 does not support the specified protocol %2.',
    'Base.1.0.AccessDenied': 'While attempting to establish a connection to %1, the service was denied access.',
    'Base.1.0.ServiceTemporarilyUnavailable': 'The service is temporarily unavailable.  Retry in %1 seconds.',
    'Base.1.0.InvalidIndex': 'The Index %1 is not a valid offset into the array.',
    'Base.1.0.PropertyValueModified': 'The property %1 was assigned the value %2 due to modification by the service.',

    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict1': 'network can not connect more than one logic switch (%1 and %2)',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict1_CAN_FORCE': 'network can not connect more than one logic switch (%1 and %2)',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict2': 'Stack port %1 is in slot %2, not in %3',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict2_CAN_FORCE': 'Stack port %1 is in slot %2, not in %3',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict3': 'Stack port %1 is in plane %2, not in %3',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict3_CAN_FORCE': 'Stack port %1 is in plane %2, not in %3',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict4': "Port %1 don't has the ability %2",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict4_CAN_FORCE': "Port %1 don't has the ability %2",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict5': 'Trunk can only config in stacking mode',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict5_CAN_FORCE': 'Trunk can only config in stacking mode',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict6': "The object's key %1 is duplicate",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict6_CAN_FORCE': "The object's key %1 is duplicate",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict7': 'Resource has reach the max %1',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict7_CAN_FORCE': 'Resource has reach the max %1',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict8': 'Object %1 is used by %2',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict8_CAN_FORCE': 'Object %1 is used by %2',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict9': "Port type %1 can't connect to network type %2",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict9_CAN_FORCE': "Port type %1 can't connect to network type %2",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict10': "When monitor link enable, server port %1 can't connect to two uplinks",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict10_CAN_FORCE': "When monitor link enable, server port %1 can't connect to two uplinks",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict11': "Uplink's smartlink is enalbed, not suport sannetwork",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict11_CAN_FORCE': "Uplink's smartlink is enalbed, not suport sannetwork",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict12': "Port in tunnelling network can't connect to other network",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict12_CAN_FORCE': "Port in tunnelling network can't connect to other network",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict13': "Port can't has more than one san network",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict13_CAN_FORCE': "Port can't has more than one san network",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict14': 'Networks connect to port, have same %1',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict14_CAN_FORCE': 'Networks connect to port, have same %1',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict15': "One eth network can't with two uplinks",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict15_CAN_FORCE': "One eth network can't with two uplinks",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict16': "San network can't connect to fc and foce both",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict16_CAN_FORCE': "San network can't connect to fc and foce both",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict17': 'Default vlan can only set in mapping eth network',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict17_CAN_FORCE': 'Default vlan can only set in mapping eth network',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict18': 'Port can only has one default vlan',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict18_CAN_FORCE': 'Port can only has one default vlan',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict19': 'ServerVlanID  could not be empty',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict19_CAN_FORCE': 'ServerVlanID  could not be empty',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict20': 'When FCoE is Enabled, DownlinkFCoEVlanID could not be empty',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict20_CAN_FORCE': 'When FCoE is Enabled, DownlinkFCoEVlanID could not be empty',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict21': 'FSBEnable could not be empty if connect type is ToSanSwitch',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict21_CAN_FORCE': 'FSBEnable could not be empty if connect type is ToSanSwitch',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict22': "UplinkFCoEVlanID and FCoEVlan can't be same",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict22_CAN_FORCE': "UplinkFCoEVlanID and FCoEVlan can't be same",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict23': "UplinkFCoEVlanID can't be empty, if enable FCoE and disable FSB",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict23_CAN_FORCE': "UplinkFCoEVlanID can't be empty, if enable FCoE and disable FSB",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict24': 'UserZoneEnable could not be empty if connect type is ToStorage',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict24_CAN_FORCE': 'UserZoneEnable could not be empty if connect type is ToStorage',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict25': 'DCBEnable wants a value if enable FCoE',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict25_CAN_FORCE': 'DCBEnable wants a value if enable FCoE',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict26': 'DCB should be configured if enable DCB',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict26_CAN_FORCE': 'DCB should be configured if enable DCB',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict27': 'Require a ets profile if enable DCB',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict27_CAN_FORCE': 'Require a ets profile if enable DCB',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict28': 'DcbxVersion wants a value if enbale Dcbx',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict28_CAN_FORCE': 'DcbxVersion wants a value if enbale Dcbx',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict29': 'Zones should be configured if enable Zone',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict29_CAN_FORCE': 'Zones should be configured if enable Zone',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict30': 'Network %1 not connect to uplink %2',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict30_CAN_FORCE': 'Network %1 not connect to uplink %2',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict31': 'Network %1 not connect to server port %2',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict31_CAN_FORCE': 'Network %1 not connect to server port %2',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict32': 'Port %1 is used by trunk',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict32_CAN_FORCE': 'Port %1 is used by trunk',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict33': 'Port %1 is used as stack port',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict33_CAN_FORCE': 'Port %1 is used as stack port',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict34': 'Port %1 is used as dad port',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict34_CAN_FORCE': 'Port %1 is used as dad port',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict35': 'Port %1 is used by Uplinks',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict35_CAN_FORCE': 'Port %1 is used by Uplinks',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict36': 'logic switch %1 is used by Uplinks',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict36_CAN_FORCE': 'logic switch %1 is used by Uplinks',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict37': "Uplink's logical switch %1 can't be change",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict37_CAN_FORCE': "Uplink's logical switch %1 can't be change",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict38': 'Uplink %1 used in zone',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict38_CAN_FORCE': 'Uplink %1 used in zone',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict39': 'Uplink %1 is used in connections',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict39_CAN_FORCE': 'Uplink %1 is used in connections',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict40': 'Posts %1 in more than one uplinks',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict40_CAN_FORCE': 'Posts %1 in more than one uplinks',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict41': 'Port %1 type %2 not match uplink type %3',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict41_CAN_FORCE': 'Port %1 type %2 not match uplink type %3',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict42': 'Ports in uplink are not in same logic switch',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict42_CAN_FORCE': 'Ports in uplink are not in same logic switch',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict43': "Port %1 isn't plate port, can't be a Uplink member",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict43_CAN_FORCE': "Port %1 isn't plate port, can't be a Uplink member",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict44': "Port %1 is stack port can't be a uplink member",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict44_CAN_FORCE': "Port %1 is stack port can't be a uplink member",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict45': "Port %1 is dad port can't be a uplink member",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict45_CAN_FORCE': "Port %1 is dad port can't be a uplink member",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict46': "Member %1 can't be same",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict46_CAN_FORCE': "Member %1 can't be same",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict47': "Eth uplink %1 member's speed must be same",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict47_CAN_FORCE': "Eth uplink %1 member's speed must be same",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict48': "Master member can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict48_CAN_FORCE': "Master member can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict49': 'Smartlink disable has no salve port',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict49_CAN_FORCE': 'Smartlink disable has no salve port',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict50': 'Smartlink disable has no salve port',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict50_CAN_FORCE': 'Smartlink disable has no salve port',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict51': "Uplink's type can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict51_CAN_FORCE': "Uplink's type can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict52': "Uplink FC type can't enalbe trunk or monitor link",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict52_CAN_FORCE': "Uplink FC type can't enalbe trunk or monitor link",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict53': 'FC mode has no slave members',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict53_CAN_FORCE': 'FC mode has no slave members',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict54': 'Uplink enable foce can not enalbe smart link',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict54_CAN_FORCE': 'Uplink enable foce can not enalbe smart link',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict55': 'Monitor link can not enable in stack mode',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict55_CAN_FORCE': 'Monitor link can not enable in stack mode',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict56': 'More than one eth port in group, must enable trunk',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict56_CAN_FORCE': 'More than one eth port in group, must enable trunk',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict57': "Serverport's vlan reach the max",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict57_CAN_FORCE': "Serverport's vlan reach the max",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict58': 'Port %1 speed %2 not same with other',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict58_CAN_FORCE': 'Port %1 speed %2 not same with other',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict59': 'PriorityGroup 15 DrrWeight must be empty',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict59_CAN_FORCE': 'PriorityGroup 15 DrrWeight must be empty',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict60': "Uplink FC type can't enalbe smartlink",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict60_CAN_FORCE': "Uplink FC type can't enalbe smartlink",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict61': "FC plane's network can't enable FCoE",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict61_CAN_FORCE': "FC plane's network can't enable FCoE",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict62': 'Uplink fcoe vlan must be same with down link fcoe vlan',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict62_CAN_FORCE': 'Uplink fcoe vlan must be same with down link fcoe vlan',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict63': 'The FcInstanceNum reach the max',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict63_CAN_FORCE': 'The FcInstanceNum reach the max',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict64': 'valn %1 is aleardy used in the logicswitch %2',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict64_CAN_FORCE': 'valn %1 is aleardy used in the logicswitch %2',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict65': "Can't has same map vlan %1 in one uplink",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict65_CAN_FORCE': "Can't has same map vlan %1 in one uplink",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict66': "FCoE disable, can't has vlan",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict66_CAN_FORCE': "FCoE disable, can't has vlan",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict67': "Tunneling network can't has mapping vlan",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict67_CAN_FORCE': "Tunneling network can't has mapping vlan",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict68': 'This plane must set foceenable',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict68_CAN_FORCE': 'This plane must set foceenable',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict69': "RestoreEnable enable, time can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict69_CAN_FORCE': "RestoreEnable enable, time can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict70': "FlushSendEnable enable, CtrlVlanID can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict70_CAN_FORCE': "FlushSendEnable enable, CtrlVlanID can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict71': "MonitorLinkEnable enable, RecoverTime can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict71_CAN_FORCE': "MonitorLinkEnable enable, RecoverTime can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict72': "CtrlVlanID %1 must be a network's ServerVlanID, and connected to this uplink",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict72_CAN_FORCE': "CtrlVlanID %1 must be a network's ServerVlanID, and connected to this uplink",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict73': "Zone's %1 member not unique",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict73_CAN_FORCE': "Zone's %1 member not unique",
    'NetworkService_1.0_ERR_CodeErr1': "Can't get hardware product %1 board %2 imformation",
    'NetworkService_1.0_ERR_CodeErr2': 'The Switch PlaneType(%1) is unkwon',
    'NetworkService_1.0_ERR_CodeErr3': 'The Switch PlaneID(%1) is unkwon',
    'NetworkService_1.0_ERR_CodeErr4': 'The object %1 is not found',
    'NetworkService_1.0_ERR_CodeErr5': "The switchprofile is releated, can't be delete",
    'NetworkService_1.0_ERR_CodeErr6': '服务器网口关联的交换板可能不存在',
    'NetworkService_1.0_ERR_CodeErrInteral': 'Server interal error',
    'NetworkService_1.0_ERR_CodeErrInput': 'Input error',
    "Base.1.0.Success": {
        "Message": "已成功完成请求。",
        "NumberOfArgs": 0,
        "Resolution": "无。"
    },
    "Base.1.0.GeneralError": {
        "Message": "发生了一般错误。有关详细信息，请参阅扩展信息。",
        "NumberOfArgs": 0,
        "Resolution": "有关详细信息，请参阅扩展信息。"
    },
    "Base.1.0.Created": {
        "Message": "资源已成功创建。",
        "NumberOfArgs": 0,
        "Resolution": "无。"
    },
    "Base.1.0.PropertyDuplicate": {
        "Message": "属性%1在请求中重复。",
        "NumberOfArgs": 1,
        "Resolution": "从请求正文中删除重复的属性，并在操作失败时重新提交请求。"
    },
    "Base.1.0.PropertyUnknown": {
        "Message": "属性%1不在资源的有效属性列表中。",
        "NumberOfArgs": 1,
        "Resolution": "从请求正文中删除未知属性，并在操作失败时重新提交请求。"
    },
    "Base.1.0.PropertyValueTypeError": {
        "Message": "属性%2的值%1的类型与属性可以接受的类型不同。",
        "NumberOfArgs": 2,
        "Resolution": "更正请求正文中属性的值，并在操作失败时重新提交请求。"
    },
    "Base.1.0.PropertyValueFormatError": {
        "Message": "属性%2的值%1的格式与属性可以接受的格式不同。",
        "NumberOfArgs": 2,
        "Resolution": "更正请求正文中属性的值，并在操作失败时重新提交请求。"
    },
    "Base.1.0.PropertyValueNotInList": {
        "Message": "属性%2的值%1不在可接受值列表中。",
        "NumberOfArgs": 2,
        "Resolution": "从枚举列表中选择一个实现可以支持的值，并在操作失败时重新提交请求。"
    },
    "Base.1.0.PropertyNotWritable": {
        "Message": "属性%1是只读属性，不能为其赋值。",
        "NumberOfArgs": 1,
        "Resolution": "从请求正文中删除该属性，并在操作失败时重新提交请求。"
    },
    "Base.1.0.PropertyMissing": {
        "Message": "属性%1是必需的属性，必须包含在请求中。",
        "NumberOfArgs": 1,
        "Resolution": "确保属性位于请求正文中，并且具有有效值，并在操作失败时重新提交请求。"
    },
    "Base.1.0.MalformedJSON": {
        "Message": "提交的请求正文是格式错误的JSON，接收服务无法对其进行分析。",
        "NumberOfArgs": 0,
        "Resolution": "确保请求正文有效，并重新提交请求。"
    },
    "Base.1.0.ActionNotSupported": {
        "Message": "资源不支持操作%1。",
        "NumberOfArgs": 1,
        "Resolution": "无法将提供的操作重新提交到实现。也许该操作无效，错误的资源是目标，或者实现文档可能会有所帮助。"
    },
    "Base.1.0.ActionParameterMissing": {
        "Message": "操作%1要求参数%2存在于请求正文中。",
        "NumberOfArgs": 2,
        "Resolution": "在重新提交请求时，在请求正文中提供具有所需参数的操作。"
    },
    "Base.1.0.ActionParameterDuplicate": {
        "Message": "提交的操作%1具有参数%2的多个值。",
        "NumberOfArgs": 2,
        "Resolution": "如果操作失败，则在请求正文中只保留参数的一个实例的操作。"
    },
    "Base.1.0.ActionParameterUnknown": {
        "Message": "操作%1是使用无效参数%2提交的。",
        "NumberOfArgs": 2,
        "Resolution": "更正无效参数，并在操作失败时重新提交请求。"
    },
    "Base.1.0.ActionParameterValueTypeError": {
        "Message": "操作%3中参数%2的值%1的类型与参数可以接受的类型不同。",
        "NumberOfArgs": 3,
        "Resolution": "更正请求正文中参数的值，并在操作失败时重新提交请求。"
    },
    "Base.1.0.ActionParameterValueFormatError": {
        "Message": "操作%3中参数%2的值%1的格式与参数可以接受的格式不同。",
        "NumberOfArgs": 3,
        "Resolution": "更正请求正文中参数的值，并在操作失败时重新提交请求。"
    },
    "Base.1.0.ActionParameterNotSupported": {
        "Message": "目标资源上不支持操作%2的参数%1。",
        "NumberOfArgs": 2,
        "Resolution": "删除提供的参数，并在操作失败时重新提交请求。"
    },
    "Base.1.0.QueryParameterValueTypeError": {
        "Message": "查询参数%2的值%1的类型与参数可以接受的类型不同。",
        "NumberOfArgs": 2,
        "Resolution": "更正请求中查询参数的值，并在操作失败时重新提交请求。"
    },
    "Base.1.0.QueryParameterValueFormatError": {
        "Message": "参数%2的值%1的格式与参数可以接受的格式不同。",
        "NumberOfArgs": 2,
        "Resolution": "更正请求中查询参数的值，并在操作失败时重新提交请求。"
    },
    "Base.1.0.QueryParameterOutOfRange": {
        "Message": "查询参数%2的值%1超出了范围%3。",
        "NumberOfArgs": 3,
        "Resolution": "将查询参数的值减少到范围内的值，例如集合中资源数量范围内的开始值或计数值，或在有效页面范围内的页面。"
    },
    "Base.1.0.QueryNotSupportedOnResource": {
        "Message": "在请求的资源上不支持查询。",
        "NumberOfArgs": 0,
        "Resolution": "删除查询参数，并在操作失败时重新提交请求。"
    },
    "Base.1.0.QueryNotSupported": {
        "Message": "实现不支持查询。",
        "NumberOfArgs": 0,
        "Resolution": "删除查询参数，并在操作失败时重新提交请求。"
    },
    "Base.1.0.SessionLimitExceeded": {
        "Message": "由于同时举行的会话次数超过了执行的限制，会话设置失败。",
        "NumberOfArgs": 0,
        "Resolution": "在尝试建立会话之前减少其他会话的数量，或增加同时会话的限制 (如果支持)。"
    },
    "Base.1.0.EventSubscriptionLimitExceeded": {
        "Message": "由于同时订阅的数量超过了实现的限制，事件订阅失败。",
        "NumberOfArgs": 0,
        "Resolution": "在尝试建立事件订阅之前，请减少其他订阅的数量，或增加同时订阅的限制 (如果支持)。"
    },
    "Base.1.0.ResourceCannotBeDeleted": {
        "Message": "删除请求失败，因为无法删除请求的资源。",
        "NumberOfArgs": 0,
        "Resolution": "不要尝试删除不可删除的资源。"
    },
    "Base.1.0.ResourceInUse": {
        "Message": "对请求的资源所做的更改失败，因为该资源正在使用或正在转换中。",
        "NumberOfArgs": 0,
        "Resolution": "请稍后重试。"
    },
    "Base.1.0.ResourceAlreadyExists": {
        "Message": "请求的资源已存在。",
        "NumberOfArgs": 0,
        "Resolution": "不要重复创建操作，因为资源已经创建。"
    },
    "Base.1.0.CreateFailedMissingReqProperties": {
        "Message": "创建操作失败，因为请求中缺少所需的属性%1。",
        "NumberOfArgs": 1,
        "Resolution": "更正正文以包括具有有效值的所需属性，并在操作失败时重新提交请求。"
    },
    "Base.1.0.CreateLimitReachedForResource": {
        "Message": "创建操作失败，因为资源已达到可能的资源的限制。",
        "NumberOfArgs": 0,
        "Resolution": "如果操作失败，请删除资源并重新提交请求，或者不重新提交请求。"
    },
    "Base.1.0.ServiceShuttingDown": {
        "Message": "操作失败，因为服务正在关闭，无法再接收传入的请求。",
        "NumberOfArgs": 0,
        "Resolution": "当服务可用时，如果操作失败，请重新提交请求。"
    },
    "Base.1.0.ServiceInUnknownState": {
        "Message": "操作失败，因为服务处于未知状态，无法再接收传入请求。",
        "NumberOfArgs": 0,
        "Resolution": "重新启动服务，并在操作失败时重新提交请求。"
    },
    "Base.1.0.NoValidSession": {
        "Message": "没有为实现建立有效的会话。",
        "NumberOfArgs": 0,
        "Resolution": "在尝试任何操作之前建立为会话。"
    },
    "Base.1.0.InsufficientPrivilege": {
        "Message": "与当前会话关联的帐户或凭据没有足够的权限来执行请求的操作。",
        "NumberOfArgs": 0,
        "Resolution": "放弃操作或更改关联的访问权限，并在操作失败时重新提交请求。"
    },
    "Base.1.0.AccountModified": {
        "Message": "该帐户已成功修改。",
        "NumberOfArgs": 0,
        "Resolution": "不需要任何解决方法。"
    },
    "Base.1.0.AccountNotModified": {
        "Message": "帐户修改请求失败。",
        "NumberOfArgs": 0,
        "Resolution": "由于权限问题或请求正文的问题，修改可能失败。"
    },
    "Base.1.0.AccountRemoved": {
        "Message": "该帐户已成功删除。",
        "NumberOfArgs": 0,
        "Resolution": "不需要任何解决方法。"
    },
    "Base.1.0.AccountForSessionNoLongerExists": {
        "Message": "当前会话的帐户已被删除，因此当前会话也已被删除。",
        "NumberOfArgs": 0,
        "Resolution": "尝试连接有效的帐户。"
    },
    "Base.1.0.InvalidObject": {
        "Message": "%1处的对象无效。",
        "NumberOfArgs": 1,
        "Resolution": "对象格式不正确或URI不正确。更正条件，并在请求失败时重新提交。"
    },
    "Base.1.0.InternalError": {
        "Message": "由于内部服务错误，请求失败。该服务仍在运行。",
        "NumberOfArgs": 0,
        "Resolution": "重新提交请求。如果问题仍然存在，请考虑重置服务。"
    },
    "Base.1.0.UnrecognizedRequestBody": {
        "Message": "该服务检测到一个格式错误的请求正文，无法解释该请求正文。",
        "NumberOfArgs": 0,
        "Resolution": "更正请求正文，并在请求失败时重新提交。"
    },
    "Base.1.0.ResourceMissingAtURI": {
        "Message": "找不到URI %1中的资源。",
        "NumberOfArgs": 1,
        "Resolution": "将有效资源放置在该URI或更正URI并重新提交请求。"
    },
    "Base.1.0.ResourceAtUriInUnknownFormat": {
        "Message": "%1的资源的格式是服务无法识别的。",
        "NumberOfArgs": 1,
        "Resolution": "将服务在URI中识别的图像或资源或文件放置在一起。"
    },
    "Base.1.0.ResourceAtUriUnauthorized": {
        "Message": "当访问%1的资源时，服务收到授权错误%2。 ",
        "NumberOfArgs": 2,
        "Resolution": "确保为服务提供适当的访问权限，以便它访问URI。"
    },
    "Base.1.0.CouldNotEstablishConnection": {
        "Message": "服务未能与URI建立连接%1",
        "NumberOfArgs": 1,
        "Resolution": "确保URI包含有效且可访问的节点名称、协议信息和其他URI组件。"
    },
    "Base.1.0.SourceDoesNotSupportProtocol": {
        "Message": "%1的连接的另一端不支持指定的协议%2。",
        "NumberOfArgs": 2,
        "Resolution": "更改协议或URI。 "
    },
    "Base.1.0.AccessDenied": {
        "Message": "连接到%1，服务被拒绝访问。",
        "NumberOfArgs": 1,
        "Resolution": "尝试确保URI正确，并且服务具有适当的凭据。"
    },
    "Base.1.0.ServiceTemporarilyUnavailable": {
        "Message": "服务暂时不可用。以%1秒为单位重试。",
        "NumberOfArgs": 1,
        "Resolution": "等待指定的重试持续时间，然后重试该操作。"
    },
    "Base.1.0.InvalidIndex": {
        "Message": "索引%1不是数组中的有效偏移量。",
        "NumberOfArgs": 1,
        "Resolution": "验证提供的索引值是否在数组的范围内。"
    },
    "Base.1.0.PropertyValueModified": {
        "Message": "由于服务进行了修改，为属性%1分配了值%2。",
        "NumberOfArgs": 2,
        "Resolution": "不需要任何解决方法。"
    },
    //业务错误
    "FusionDirector.1.0.AuthenticationFailure": {
        "Message": "用户名或密码错误。",
        "NumberOfArgs": 0,
        "Resolution": "请提供有效凭证后重试。"
    },
    "FusionDirector.1.0.MethodNotAllowed": {
        "Message": "资源不允许使用HTTP方法。",
        "NumberOfArgs": 0,
        "Resolution": "停止使用此HTTP方法。"
    },
    "FusionDirector.1.0.NotAcceptable": {
        "Message": "不支持在 “Accept Head” 中指定的值。",
        "NumberOfArgs": 0,
        "Resolution": "指定支持的值。"
    },
    "FusionDirector.1.0.PreconditionFailed": {
        "Message": "指定“If-Match” 或 “If-Not-Modified” 失败。",
        "NumberOfArgs": 0,
        "Resolution": "请输入有效的“If-Match”或“If-Not-Modified”值。"
    },
    "FusionDirector.1.0.VersionFailed": {
        "Message": "不支持指定的Director API版本。",
        "NumberOfArgs": 0,
        "Resolution": "指定有效的“DirectorVersion”值。"
    },
    "FusionDirector.1.0.UnsupportedMediaType": {
        "Message": "不支持在“Content-Type”中指定的值。",
        "NumberOfArgs": 0,
        "Resolution": "指定支持的值。"
    },
    "FusionDirector.1.0.PreconditionRequired": {
        "Message": "此操作需要指定 “If-Match”或 “If-Not-Modified” 。",
        "NumberOfArgs": 0,
        "Resolution": "请输入“If-Match”或“If-Not-Modified”，然后重试。"
    },
    "FusionDirector.1.0.Timeout": {
        "Message": "操作超时。",
        "NumberOfArgs": 0,
        "Resolution": "请确认服务是否正常，然后重试。"
    },
    "FusionDirector.1.0.DBOperationFailed": {
        "Message": "数据库操作失败。",
        "NumberOfArgs": 0,
        "Resolution": "请重试。如果错误仍然存在，联系支持。"
    },
    "FusionDirector.1.0.ResponseOversize": {
        "Message": "响应正文过大。",
        "NumberOfArgs": 0,
        "Resolution": "尽量使用四个参数来减少响应体。"
    },
    "FusionDirector.1.0.NotEnoughLicense": {
        "Message": "服务器容量超限。",
        "NumberOfArgs": 0,
        "Resolution": "请扩容许可证服务器容量。"
    },
    "FusionDirector.1.0.LicenseExpired": {
        "Message": "许可证过期。",
        "NumberOfArgs": 0,
        "Resolution": "请添加更有效的License后重试。"
    },
    "FusionDirector.1.0.ArrayPropertyExcessLimit": {
        "Message": "属性%1 的数组大小超过%2 。",
        "NumberOfArgs": 2,
        "Resolution": "请减小数组大小，然后重试。"
    },
    "FusionDirector.1.0.TooManyError": {
        "Message": "发生了太多错误。",
        "NumberOfArgs": 0,
        "Resolution": "修复错误后重试。"
    },
    "FusionDirector.1.0.FileNameError": {
        "Message": "文件名不合法。",
        "NumberOfArgs": 0,
        "Resolution": "修改文件名后重试。"
    },
    "FusionDirector.1.0.FileTypeError": {
        "Message": "文件类型不合法。",
        "NumberOfArgs": 0,
        "Resolution": "使用正确的文件类型后重试。"
    },
    "FusionDirector.1.0.FileSizeError": {
        "Message": "文件大小不合法。",
        "NumberOfArgs": 0,
        "Resolution": "确保文件大小正确后重试。"
    },
    "FusionDirector.1.0.CertDecipherFailed": {
        "Message": "证书解密失败",
        "NumberOfArgs": 0,
        "Resolution": "请确保证书密码正确后重试。"
    },
    "FusionDirector.1.0.CertFormatError": {
        "Message": "证书格式错误",
        "NumberOfArgs": 0,
        "Resolution": "请确保证书为X509格式后重试。"
    },
    "FusionDirector.1.0.CertParseFailed": {
        "Message": "证书解析错误",
        "NumberOfArgs": 0,
        "Resolution": "请确保证书有效后重试。"
    },
    "FusionDirector.1.0.CertHasBeenExpired": {
        "Message": "证书已经过期",
        "NumberOfArgs": 0,
        "Resolution": "请确保证书在有效期内后重试。"
    },
    "FusionDirector.1.0.CertNearlyExpired": {
        "Message": "证书即将过期",
        "NumberOfArgs": 0,
        "Resolution": "请确保证书有效期大于30天后重试。"
    },
    "FusionDirector.1.0.CertIsNotCA": {
        "Message": "非根证书",
        "NumberOfArgs": 0,
        "Resolution": "请确保导入的为根证书后重试。"
    },
    "FusionDirector.1.0.CertKeyUsageError": {
        "Message": "证书的秘钥用途使用错误。",
        "NumberOfArgs": 0,
        "Resolution": "请确保证书的秘钥用途中包含签名项后重试。"
    },
    "FusionDirector.1.0.CertSignAlgoNotMatch": {
        "Message": "证书签名算法不匹配",
        "NumberOfArgs": 0,
        "Resolution": "请确保证书的签名算法为SHA256WithRSA后重试。"
    },
    "FusionDirector.1.0.CertPublicKeyFailed": {
        "Message": "解析证书公钥错误",
        "NumberOfArgs": 0,
        "Resolution": "请确保证书的公钥有效后重试。"
    },
    "FusionDirector.1.0.CertNotMatchPriKey": {
        "Message": "证书和私钥不匹配",
        "NumberOfArgs": 0,
        "Resolution": "请确保证书和私钥匹配后重试。"
    },
    "FusionDirector.1.0.CertOperaeteObjectFailed": {
        "Message": "生效证书失败",
        "NumberOfArgs": 1,
        "Resolution": "请确保所生效证书对应的组件正常后重试。"
    },
    "FusionDirector.1.0.EnclosureNotFloatIP": {
        "Message": "该IP不是浮动IP。",
        "NumberOfArgs": 0,
        "Resolution": "请使用浮动IP重试。"
    },
    "FusionDirector.1.0.EnclosureAlreadyClaim": {
        "Message": "该机框已被其他系统纳管。",
        "NumberOfArgs": 0,
        "Resolution": "停止添加该框或从其他系统中移除该框。"
    },
    "FusionDirector.1.0.IDPoolSectionConflict": {
        "Message": "地址段冲突。",
        "NumberOfArgs": 0,
        "Resolution": "修正地址段的范围，然后重试。"
    },
    "FusionDirector.1.0.IDPoolSectionLimit": {
        "Message": "地址段的数量超过了%1的限制. ",
        "NumberOfArgs": 1,
        "Resolution": "请减少地址段数目后重试。"
    },
    "FusionDirector.1.0.IDPoolIDLimit": {
        "Message": "该地址段中的地址资源数目超过了%1的限制. ",
        "NumberOfArgs": 1,
        "Resolution": "请减少地址段中地址资源数目，然后重试。"
    },
    "FusionDirector.1.0.IDPoolRangeStartError": {
        "Message": "终止地址应该大于或者等于起始地址。",
        "NumberOfArgs": 0,
        "Resolution": "修正地址段的范围，然后重试。"
    },
    "FusionDirector.1.0.IDPoolMultiBroadCastMACInSection": {
        "Message": "地址段中存在多播地址。",
        "NumberOfArgs": 0,
        "Resolution": "修正IP地址，然后重试。"
    },
    "FusionDirector.1.0.IDPoolNotEnoughID": {
        "Message": "地址池中没有足够的地址资源。",
        "NumberOfArgs": 0,
        "Resolution": "停止从地址池中分配地址资源，请添加更多的地址资源到地址池中。"
    },
    "FusionDirector.1.0.IDPoolKeyNotInPool.": {
        "Message": "该键不在地址池中。",
        "NumberOfArgs": 0,
        "Resolution": "请提供有效的键，然后重试。"
    },
    "FusionDirector.1.0.IDPoolKeyFreed": {
        "Message": "该键已经被释放。",
        "NumberOfArgs": 0,
        "Resolution": "请停止释放该键。"
    },
    "FusionDirector.1.0.IDPoolKeyAllocated": {
        "Message": "该键已被分配。",
        "NumberOfArgs": 0,
        "Resolution": "请使用不同的键，然后重试。"
    },
    "FusionDirector.1.0.IDPoolIDConflict": {
        "Message": "Pool ID和User ID冲突。",
        "NumberOfArgs": 0,
        "Resolution": "请输入正确的Pool ID或User ID后重试。"
    },
    "FusionDirector.1.0.IDPoolMethodNotSupported": {
        "Message": "该地址池不支持该操作。",
        "NumberOfArgs": 0,
        "Resolution": "停止该操作。"
    },
    "FusionDirector.1.0.IDPoolMultipleOtherUserID": {
        "Message": "User ID重复。",
        "NumberOfArgs": 0,
        "Resolution": "请重新选择User ID后重试。"
    },
    "FusionDirector.1.0.IDPoolKeyNotMatchIPv4": {
        "Message": "键与IPv4地址不匹配。",
        "NumberOfArgs": 0,
        "Resolution": "请提供有效的键，然后重试。"
    },
    "FusionDirector.1.0.IPCountExcessSubnet": {
        "Message": "IPv4地址数目超过子网数目。",
        "NumberOfArgs": 0,
        "Resolution": "请减少IPv4数目后重试。"
    },
    "FusionDirector.1.0.GatewayIncludedInSection": {
        "Message": "该网关已包含在地址段中。",
        "NumberOfArgs": 0,
        "Resolution": "请提供有效的地址段或网关，然后重试。"
    },
    "FusionDirector.1.0.NetmaskIncludedInSection": {
        "Message": "该掩码已包含在地址段中。",
        "NumberOfArgs": 0,
        "Resolution": "请提供有效的地址段或掩码，然后重试。"
    },
    "FusionDirector.1.0.IDPoolStartAndEndNotInSameNet": {
        "Message": "起始IPv4地址和终止IPv4地址不在同一网段。",
        "NumberOfArgs": 0,
        "Resolution": "请提供有效的起始和终止IPv4或子网，然后重试。"
    },
    "FusionDirector.1.0.IDPoolStartAndGatewayNotInSameNet": {
        "Message": "起始IP和网关不在同一个子网。",
        "NumberOfArgs": 0,
        "Resolution": "请提供有效的起始IPv4地址和网关或子网，然后重试。"
    },
    "FusionDirector.1.0.IDPoolEndAndGatewayNotInSameNet": {
        "Message": "终止IP和网关不在同一个子网。",
        "NumberOfArgs": 0,
        "Resolution": "请提供有效的终止IPv4地址和网关或子网，然后重试。"
    },
    "FusionDirector.1.0.LicenseUnsupported": {
        "Message": "不支持的License。",
        "NumberOfArgs": 0,
        "Resolution": "请提供合法的License，然后重试。"
    },
    "FusionDirector.1.0.RepeatTrapServersMemberID": {
        "Message": "Trap服务器重复。",
        "NumberOfArgs": 0,
        "Resolution": "请删除重复的Trap服务器，然后重试。"
    },
    "FusionDirector.1.0.SFTPPathError": {
        "Message": "SFTP路径错误。",
        "NumberOfArgs": 0,
        "Resolution": "请修改路径后重试。"
    },
    "FusionDirector.1.0.SFTPFolderCreateError": {
        "Message": "SFTP文件夹创建失败。",
        "NumberOfArgs": 0,
        "Resolution": "请重试。如果错误仍然存在，联系支持。"
    },
    "FusionDirector.1.0.SFTPFolderPermissionError": {
        "Message": "SFTP文件夹权限错误。",
        "NumberOfArgs": 0,
        "Resolution": "请重试。如果错误仍然存在，联系支持。"
    },
    "FusionDirector.1.0.SFTPFolderRemoveError": {
        "Message": "删除SFTP文件夹失败。",
        "NumberOfArgs": 0,
        "Resolution": "请重试。如果错误仍然存在，联系支持。"
    },
    "FusionDirector.1.0.PlanningDataSNAndMacEmpty": {
        "Message": "SN和MAC都为空。",
        "NumberOfArgs": 1,
        "Resolution": "请提供SN或MAC后重试。"
    },
    "FusionDirector.1.0.PlanningDataPropertyExistInNetwork": {
        "Message": "属性%2的值%1在网络中已经存在。",
        "NumberOfArgs": 3,
        "Resolution": "请删除属性后重试。"
    },
    "FusionDirector.1.0.PlanningDataPropertyExistInDB": {
        "Message": "属性%2的值%1在数据库已经存在。",
        "NumberOfArgs": 3,
        "Resolution": "请删除属性后重试。"
    },
    "FusionDirector.1.0.PlanningDataImportTableCountOutRange": {
        "Message": "表格的行数超过了限制%1。",
        "NumberOfArgs": 1,
        "Resolution": "请减少表格行数，然后重试。"
    },
    "FusionDirector.1.0.PlanningDataImportCountOutRange": {
        "Message": "配置规划系统容量不足",
        "NumberOfArgs": 1,
        "Resolution": "请删除系统中不再使用的数据。"
    },
    "FusionDirector.1.0.PlanningDataPropertyValueFormatError": {
        "Message": "属性%2的值%1格式错误，在第%3行显示错误",
        "NumberOfArgs": 3,
        "Resolution": "请修改正确后重试"
    },
    "FusionDirector.1.0.PlanningDataPropertyDuplicate": {
        "Message": "属性%2的值%1重复，在第%3行和%4行显示错误",
        "NumberOfArgs": 3,
        "Resolution": "请删除重复的值后重试"
    },
    "FusionDirector.1.0.PlanningDataPropertyValueLengthError": {
        "Message": "属性%2的值%1长度不再合理范围内，在第%3行显示错误",
        "NumberOfArgs": 3,
        "Resolution": ""
    },
    "FusionDirector.1.0.PlanningDataIPAndGatewayNotSameNet": {
        "Message": "IPV4地址和网关不再同一个网段，%1是错误行",
        "NumberOfArgs": 3,
        "Resolution": ""
    },
    "FusionDirector.1.0.PlanningDataVersionNotMatch": {
        "Message": "版本号不匹配",
        "NumberOfArgs": 0,
        "Resolution": "请修改正确后重试"
    },
    "FusionDirector.1.0.PlanningDataIPAssigning": {
        "Message": "操作的资源中有ip正在分配中",
        "NumberOfArgs": 0,
        "Resolution": "请分配状态不是分配中后再重试"
    },
    "FusionDirector.1.0.PlanningDataImportCountNotMatch": {
        "Message": "导入的数量和Count的值不匹配",
        "NumberOfArgs": 0,
        "Resolution": "请修改正确后重试"
    },
    "FusionDirector.1.0.EventSmtpDisableErr": {
        "Message": "SMTP服务未启用。",
        "NumberOfArgs": 0,
        "Resolution": "请开启服务后重试。"
    },
    "FusionDirector.1.0.EventSenderMailAddrErr": {
        "Message": "邮件地址不合法。",
        "NumberOfArgs": 0,
        "Resolution": "请修改邮箱地址后重试。"
    },
    "FusionDirector.1.0.EventMailCertErr": {
        "Message": "邮件证书错误。",
        "NumberOfArgs": 0,
        "Resolution": "请修改邮件证书后重试。"
    },
    "FusionDirector.1.0.EventMailAuthErr": {
        "Message": "邮件认证错误。",
        "NumberOfArgs": 0,
        "Resolution": "请修改邮件认证后重试。"
    },
    "FusionDirector.1.0.EventMailServerAddrErr": {
        "Message": "无法连接到邮件服务器。",
        "NumberOfArgs": 0,
        "Resolution": "请确认网络是否正常，然后重试。"
    },
    "FusionDirector.1.0.AppConfigInvalidDomainName": {
        "Message": "域名不合法。",
        "NumberOfArgs": 0,
        "Resolution": "请修改域名后重试。"
    },
    "FusionDirector.1.0.AppConfigNoEnableDNSServers": {
        "Message": "DNS服务器未开启。",
        "NumberOfArgs": 0,
        "Resolution": "请开启DNS服务器后重试。"
    },
    "FusionDirector.1.0.AppConfigInavlidIpv4DNSServer": {
        "Message": "无效的IPv4 DNS服务器。",
        "NumberOfArgs": 0,
        "Resolution": "请修改IPv4 DNS服务器后重试。"
    },
    "FusionDirector.1.0.AppConfigInavlidIpv6DNSServer": {
        "Message": "无效的IPv6 DNS服务器。",
        "NumberOfArgs": 0,
        "Resolution": "请修改IPv6 DNS服务器后重试。"
    },
    "FusionDirector.1.0.AppConfigDNSServerNotExist": {
        "Message": "DNS服务器不存在。",
        "NumberOfArgs": 0,
        "Resolution": "请提供有效的DNS服务器后重试。"
    },
    "FusionDirector.1.0.AppConfigDNSServerAuthenticationErr": {
        "Message": "DNS服务器认证错误。",
        "NumberOfArgs": 0,
        "Resolution": "请修改邮件认证后重试。"
    },
    "FusionDirector.1.0.AppConfigDNSServerKeyErr": {
        "Message": "DNS服务器密钥错误。",
        "NumberOfArgs": 0,
        "Resolution": "请提供有效密钥后重试。"
    },
    "FusionDirector.1.0.AppConfigPartSuccess": {
        "Message": "部分操作失败。",
        "NumberOfArgs": 0,
        "Resolution": "请重试。如果错误仍然存在，联系支持。"
    },
    "FusionDirector.1.0.AppConfigDeleteDNSServerFailed": {
        "Message": "删除DNS服务器失败。",
        "NumberOfArgs": 0,
        "Resolution": "请重试。如果错误仍然存在，联系支持。"
    },
    "FusionDirector.1.0.IAMPasswordExpired": {
        "Message": "密码过期。",
        "NumberOfArgs": 0,
        "Resolution": "请更新密码。"
    },
    "FusionDirector.1.0.IAMNameNotSatisfyComplexity": {
        "Message": "用户名不符合复杂度要求。",
        "NumberOfArgs": 0,
        "Resolution": "请修改用户名后重试。"
    },
    "FusionDirector.1.0.IAMPasswordNotSatisfyComplexity": {
        "Message": "密码不符合复杂度要求。",
        "NumberOfArgs": 0,
        "Resolution": "请修改密码后重试。"
    },
    "FusionDirector.1.0.IAMPasswordModifyNotSatisfyDuration": {
        "Message": "不能在%1的时间间隔内修改密码。",
        "NumberOfArgs": 1,
        "Resolution": "停止该操作。"
    },
    "FusionDirector.1.0.IAMUserLocked": {
        "Message": "用户已被锁定。",
        "NumberOfArgs": 0,
        "Resolution": "请解锁用户后重试。"
    },
    "FusionDirector.1.0.IAMUserInterfaceNotMatch": {
        "Message": "该用户不能在该接口中使用。",
        "NumberOfArgs": 0,
        "Resolution": "停止该操作。"
    },
    "FusionDirector.1.0.BaselineMismatch": {
        "Message": "基线不匹配。",
        "NumberOfArgs": 0,
        "Resolution": "请输入合法的值，然后重试。"
    },
    "FusionDirector.1.0.BaselineServerNotExist": {
        "Message": "没有服务器。",
        "NumberOfArgs": 0,
        "Resolution": "停止该操作。"
    },
    "FusionDirector.1.0.BaselineFormatError": {
        "Message": "基线格式错误。",
        "NumberOfArgs": 0,
        "Resolution": "请提供有效的基线值，然后重试。"
    },
    "FusionDirector.1.0.SSDPSNRepeat": {
        "Message": "索引%3的属性%2的值%1与索引%4重复。",
        "NumberOfArgs": 4,
        "Resolution": "请修改正确后重试。"
    },
    "FusionDirector.1.0.SSDPIPRepeat": {
        "Message": "索引%3的属性%2的值%1与索引%4重复。",
        "NumberOfArgs": 4,
        "Resolution": "请修改正确后重试。"
    },
    "FusionDirector.1.0.SSDPSNExistedInPool": {
        "Message": "属性%2的值%1在索引%3的ipv4pool数据库中已经存在。",
        "NumberOfArgs": 3,
        "Resolution": "请删除重复项后重试。"
    },
    "FusionDirector.1.0..SSDPIPExistedInPool": {
        "Message": "属性%2的值%1在索引%3的ipv4pool数据库中已经存在。",
        "NumberOfArgs": 3,
        "Resolution": "请删除重复项后重试。"
    },
    "FusionDirector.1.0.SSDPSNExistedInDB": {
        "Message": "属性%2的值%1在索引%3的数据库中已经存在。",
        "NumberOfArgs": 3,
        "Resolution": "请删除重复项后重试。"
    },
    "FusionDirector.1.0.SSDPIPExistedInDB": {
        "Message": "属性%2的值%1在索引%3的数据库中已经存在。",
        "NumberOfArgs": 3,
        "Resolution": "请删除重复项后重试。"
    },
    "FusionDirector.1.0.SSDPSNExistedInNetwork": {
        "Message": "属性%2的值%1在索引%3的网络中已经存在。",
        "NumberOfArgs": 3,
        "Resolution": "请删除重复项后重试。"
    },
    "FusionDirector.1.0.SSDPIPExistedInNetwork": {
        "Message": "属性%2的值%1在索引%3的网络中已经存在。",
        "NumberOfArgs": 3,
        "Resolution": "请删除重复项后重试。"
    },
    "FusionDirector.1.0.SSDPIPv4AddressAndGatewayNotSameNetwork": {
        "Message": "属性%2的值%1和属性%4的值%3在索引%5上不在同一个网段。",
        "NumberOfArgs": 5,
        "Resolution": "请修改正确后重试。"
    },
    "FusionDirector.1.0.ClusterFloatingIPMismatchStaticIPNetwork": {
        "Message": "浮动IP %1与静态网络%2不匹配。",
        "NumberOfArgs": 2,
        "Resolution": "请确保浮动IP和静态ip网络匹配，并重新提交请求。"
    },
    "FusionDirector.1.0.ClusterIPConflict": {
        "Message": "IP %1已被其他设备使用。",
        "NumberOfArgs": 1,
        "Resolution": "请确保IP未被使用，重新提交请求。"
    },
    "FusionDirector.1.0.ClusterStaticIPNotConfig": {
        "Message": "没有配置%1上的静态IP，不能配置浮动IP。",
        "NumberOfArgs": 1,
        "Resolution": "请确保静态IP已经配置，并重新提交请求。"
    },
    "FusionDirector.1.0.ClusterNetworkDomainsMismatch": {
        "Message": "网络域%1不匹配集群网络域%2。",
        "NumberOfArgs": 2,
        "Resolution": "请检查网络域是否匹配，并重新提交请求。"
    },
    "FusionDirector.1.0.ClusterNTPServerEmpty": {
        "Message": "启用NTP服务器时，NTP服务器不能为空。",
        "NumberOfArgs": 0,
        "Resolution": "请确保NTP服务器有效，并重新提交请求。"
    },
    "FusionDirector.1.0.ClusterNTPServerMustBeExternal": {
        "Message": "NTP服务器%1必须是外部IP，不能是当前集群中的IP。",
        "NumberOfArgs": 1,
        "Resolution": "请确保NTP服务器有效，并重新提交请求。"
    },
    "FusionDirector.1.0.ClusterNTPServerUnreachable": {
        "Message": "NTP服务器%1不可达。",
        "NumberOfArgs": 1,
        "Resolution": "请确保NTP服务器有效，并重新提交请求。"
    },
    "FusionDirector.1.0.ClusterMaxNodeNumReached": {
        "Message": "已达到最大节点数%1。",
        "NumberOfArgs": 1,
        "Resolution": "不要重复创建操作，已经达到最大节点数。"
    },
    "FusionDirector.1.0.ClusterRemoteNetworkDomainsMismatch": {
        "Message": "远程集群网络域%1不匹配节点网络域%2。",
        "NumberOfArgs": 2,
        "Resolution": "请检查网络域是否匹配，并重新提交请求。"
    },
    "FusionDirector.1.0.ClusterActionUnsupportedInCluster": {
        "Message": "在集群中不支持操作%1。",
        "NumberOfArgs": 1,
        "Resolution": "不要重复该操作，集群中不支持该操作。"
    },
    "FusionDirector.1.0.PortalCaptchaFailed": {
        "Message": "验证码校验失败",
        "NumberOfArgs": 1,
        "Resolution": "刷新验证码，并重新提交。"
    },
    "FusionDirector.1.0.DevDiscoveryIPNotSameNetError": {
        "Message": "请求中的起始ip和结束ip不在同一个网络中",
        "NumberOfArgs": 0,
        "Resolution": "请修改正确后重试。"
    },
    "FusionDirector.1.0.DevDiscoverIPRangeError": {
        "Message": "请求中的起始ip和结束ip的范围错误",
        "NumberOfArgs": 0,
        "Resolution": "请修改正确后重试。起始ip必须小于等于结束ip"
    },
    "FusionDirector.1.0.DevDiscoverIPRangeHasMultiIP": {
        "Message": "请求中的起始ip和结束ip包含多播地址",
        "NumberOfArgs": 0,
        "Resolution": "请修改正确后重试。"
    },
    "FusionDirector.1.0.DevDiscoverUserNameOrPasswordEmptyError": {
        "Message": "不允许用户名和密码只有一个为空",
        "NumberOfArgs": 0,
        "Resolution": "请修改正确后重试。"
    },
    "FusionDirector.1.0.DevDiscoverRangeHaveIntersection": {
        "Message": "请求中的IP区间之间存在交集",
        "NumberOfArgs": 0,
        "Resolution": "请修改正确后重试。"
    },
    "FusionDirector.1.0.IPConfigDHCPNoRecord": {
        "Message": "请求的IP不存在",
        "NumberOfArgs": 0,
        "Resolution": "请修改正确后重试。"
    },
    "FusionDirector.1.0.ServerProfileParaMissing": {
        "Message": "请求体缺少属性%1。",
        "NumberOfArgs": 1,
        "Resolution": "如果请求失败，修改请求体并重试。"
    },
    "FusionDirector.1.0.ServerProfileParaError": {
        "Message": "请求体中属性%1错误。",
        "NumberOfArgs": 1,
        "Resolution": "如果请求失败，修改请求体并重试。"
    },
    "FusionDirector.1.0.ServerProfileParaInUse": {
        "Message": "属性%1：%2正在使用。",
        "NumberOfArgs": 2,
        "Resolution": "修改请求体中的属性值。"
    },
    "FusionDirector.1.0.ServerProfileRaidControlErr": {
        "Message": "raid控制器错误，错误类型是 %1。",
        "NumberOfArgs": 1,
        "Resolution": "修改请求体里的raid控制器。"
    },
    "FusionDirector.1.0.ServerProfileModelMissing": {
        "Message": "对应的服务器配置模板不存在。",
        "NumberOfArgs": 0,
        "Resolution": "如果请求失败，修改请求体并重试。"
    },
    "FusionDirector.1.0.ServerProfileModelConfigNotSupport": {
        "Message": "对应的服务器配置模板不支持配置%1。",
        "NumberOfArgs": 1,
        "Resolution": "如果请求失败，修改请求体并重试。"
    },
    "FusionDirector.1.0.ServerProfileRaidVolumnErr": {
        "Message": "配置raid的逻辑卷：%1 的属性%2：%3错误。",
        "NumberOfArgs": 3,
        "Resolution": "如果请求失败，修改请求体并重试。"
    },
    "FusionDirector.1.0.ServerProfileMezzParaErrOne": {
        "Message": "配置mezz卡属性%1：%2错误。",
        "NumberOfArgs": 2,
        "Resolution": "如果请求失败，修改请求体并重试。"
    },
    "FusionDirector.1.0.ServerProfileMezzParaErrTwo": {
        "Message": "配置mezz卡%1：%2的属性%3：%4错误。",
        "NumberOfArgs": 4,
        "Resolution": "如果请求失败，修改请求体并重试。"
    },
    "FusionDirector.1.0.ServerProfileMezzParaErrThree": {
        "Message": "配置mezz卡%1：%2，%3：%4的属性%5：%6错误。",
        "NumberOfArgs": 6,
        "Resolution": "如果请求失败，修改请求体并重试。"
    },
    "FusionDirector.1.0.ServerProfileMezzParaLess": {
        "Message": "配置mezz卡缺少属性%1。",
        "NumberOfArgs": 1,
        "Resolution": "如果请求失败，添加缺少的属性。"
    },
    "FusionDirector.1.0.ServerProfileMezzParaExcess": {
        "Message": "配置mezz卡多余属性%1。",
        "NumberOfArgs": 1,
        "Resolution": "如果请求失败，删除多余的属性。"
    },
    "FusionDirector.1.0.ServerProfileBmcConfigIPErr": {
        "Message": "%1的%2 IP错误。",
        "NumberOfArgs": 2,
        "Resolution": "如果请求失败，修改请求体并重试。"
    },
    "FusionDirector.1.0.ServerProfileLdapSetRuleErr": {
        "Message": "规则 %1 没有打开，不能在LDAP中设置这个规则。",
        "NumberOfArgs": 1,
        "Resolution": "如果请求失败，打开对应的规则并重试。"
    },
    "FusionDirector.1.0.ServerProfileLdapTimeRuleErr": {
        "Message": "登录规则中的时间格式错误。",
        "NumberOfArgs": 0,
        "Resolution": "如果请求失败，修改登录规则中的时间格式。"
    },
    "FusionDirector.1.0.FileNotExist": {
        "Message": "文件不存在。",
        "NumberOfArgs": 0,
        "Resolution": "确保文件存在后重试。"
    },
    "FusionDirector.1.0.FileDuplicated": {
        "Message": "文件已存在或重名。",
        "NumberOfArgs": 0,
        "Resolution": "请确保文件的唯一性后重试。"
    },
    "FusionDirector.1.0.FileContentError": {
        "Message": "文件内容不合法。",
        "NumberOfArgs": 0,
        "Resolution": "确保文件内容正确后重试。"
    },
    "FusionDirector.1.0.DiskSpaceShortage": {
        "Message": "磁盘空间不足",
        "NumberOfArgs": 0,
        "Resolution": "腾出更多磁盘空间后重试"
    },
    "FusionDirector.1.0.UpgradeDeviceNotUpgradeable": {
        "Message": "设备和固件包版本一致",
        "NumberOfArgs": 0,
        "Resolution": "请使用更新的版本并重试。"
    },
    "FusionDirector.1.0.UpgradeAlreadyHasPlan": {
        "Message": "设备%1已经和升级计划绑定",
        "NumberOfArgs": 1,
        "Resolution": "取消原升级计划后并重试。"
    },
    "FusionDirector.1.0.EnclosureTempProfileNotSupport": {
        "Message": "不允许绑定临时机框配置文件或已绑定的机框配置文件。",
        "NumberOfArgs": 0,
        "Resolution": "请选择其他机框配置文件后重试。"
    },
    "FusionDirector.1.0.MetricServerStateError": {
        "Message": "服务器当前状态无法获取统计信息",
        "NumberOfArgs": 0,
        "Resolution": "请确保服务器的状态正确然后重试。"
    },
    "FusionDirector.1.0.ClusterAlreadyInUpgrading": {
        "Message": "系统正在升级中",
        "NumberOfArgs": 0,
        "Resolution": "请等待系统当前升级完成，在重试。"
    },
    "FusionDirector.1.0.ClusterVersionInconsistent": {
        "Message": "集群内节点版本不一致",
        "NumberOfArgs": 0,
        "Resolution": "各节点版本不一致，不能进行升级操作。"
    },
    "FusionDirector.1.0.ClusterInitUnfinished": {
        "Message": "系统初始化未完成",
        "NumberOfArgs": 0,
        "Resolution": "请稍后重试。"
    },
    "FusionDirector.1.0.ClusterActivatedInvalid": {
        "Message": "不能进行生效操作",
        "NumberOfArgs": 0,
        "Resolution": "请先进行升级操作，然后在进行生效操作。"
    },
    "FusionDirector.1.0.ClusterAlreadyInBackuping": {
        "Message": "系统正在备份中。",
        "NumberOfArgs": 0,
        "Resolution": "等待当前备份任务完成后，再重试。"
    },
    "FusionDirector.1.0.ClusterAlreadyInRestoring": {
        "Message": "系统正在恢复中。",
        "NumberOfArgs": 0,
        "Resolution": "等待当前恢复操作完成，再进行恢复操作。"
    },
    "FusionDirector.1.0.ClusterPackageCheckFailed": {
        "Message": "压缩包校验失败。",
        "NumberOfArgs": 0,
        "Resolution": "请检查备份包的格式和完整性。"
    },
    "FusionDirector.1.0.AppConfigProxyNoResponse": {
        "Message": "代理服务器无响应。",
        "NumberOfArgs": 0,
        "Resolution": "请检查代理设置或代理服务器。"
    },
    "FusionDirector.1.0.IAMPasscodeValidationError": {
        "Message": "验证码校验失败",
        "NumberOfArgs": 0,
        "Resolution": "重新输入校验码，如果问题依然存在可以考虑重新生成校验码。"
    },
    "FusionDirector.1.0.EnclosureNotAllowedOnStandbyMM": {
        "Message": "处于Standby状态的MM节点不支持该操作。",
        "NumberOfArgs": 0,
        "Resolution": "停止该操作，或在处于active的MM节点进行该操作。"
    },
    "FusionDirector.1.0.BaselineServerBusy": {
        "Message": "服务器%1正在核查或者确认结果中，无法创建任务",
        "NumberOfArgs": 1,
        "Resolution": "请等待设备的任务完成后再进行重试。"
    },
    "FusionDirector.1.0.DeployServiceNullID": {
        "Message": "参数ID输入为空",
        "NumberOfArgs": 0,
        "Resolution": "请输入参数ID，然后重试"
    },
    "FusionDirector.1.0.DeployServiceVersionNotMatch": {
        "Message": "操作系统版本与操作系统类型不匹配",
        "NumberOfArgs": 0,
        "Resolution": "请选择正确的操作系统版本，然后重试"
    },
    "FusionDirector.1.0.DeployServiceNullRequest": {
        "Message": "请求body体为空",
        "NumberOfArgs": 0,
        "Resolution": "请输入请求消息，然后重试"
    },
    "FusionDirector.1.0.DeployServiceModelBinded": {
        "Message": "镜像已经绑定部署模板",
        "NumberOfArgs": 0,
        "Resolution": "请先删除绑定的部署模板，然后重试"
    },
    "FusionDirector.1.0.DeployServiceFileTypeChanged": {
        "Message": "禁止修改镜像类型",
        "NumberOfArgs": 0,
        "Resolution": "请勿修改镜像类型"
    },
    "FusionDirector.1.0.DeployServiceSyncDataNotFound": {
        "Message": "未设置配置还原项",
        "NumberOfArgs": 0,
        "Resolution": "请设置配置还原项，然后重试"
    },
    "FusionDirector.1.0.DeployServicePwdFormatError": {
        "Message": "密码格式不符合要求",
        "NumberOfArgs": 0,
        "Resolution": "请按照格式要求输入密码，然后重试"
    },
    "FusionDirector.1.0.DeployServiceNullPwd": {
        "Message": "传入密码为空",
        "NumberOfArgs": 0,
        "Resolution": "请输入密码，然后重试"
    },
    "FusionDirector.1.0.DeployServiceNullKeyBoard": {
        "Message": "未配置系统键盘类型",
        "NumberOfArgs": 0,
        "Resolution": "请配置系统键盘类型，然后重试"
    },
    "FusionDirector.1.0.DeployServiceKeyBoardNotMatch": {
        "Message": "键盘类型与操作系统类型不匹配",
        "NumberOfArgs": 0,
        "Resolution": "请配置正确的系统键盘类型，然后重试"
    },
    "FusionDirector.1.0.DeployServiceNullLanguage": {
        "Message": "未配置系统语言",
        "NumberOfArgs": 0,
        "Resolution": "请配置系统语言，然后重试"
    },
    "FusionDirector.1.0.DeployServiceLanguageNotMatch": {
        "Message": "系统语言与操作系统类型不匹配",
        "NumberOfArgs": 0,
        "Resolution": "请配置正确的系统语言，然后重试"
    },
    "FusionDirector.1.0.DeployServiceNullTimeZone": {
        "Message": "未配置系统时区",
        "NumberOfArgs": 0,
        "Resolution": "请配置系统时区，然后重试"
    },
    "FusionDirector.1.0.DeployServiceTimeZoneNotMatch": {
        "Message": "系统时区与操作系统类型不匹配",
        "NumberOfArgs": 0,
        "Resolution": "请配置正确的系统时区，然后重试"
    },
    "FusionDirector.1.0.DeployServiceNullCDKey": {
        "Message": "未输入Windows系统的安装秘钥",
        "NumberOfArgs": 0,
        "Resolution": "请输入Windows系统安装密钥，然后重试"
    },
    "FusionDirector.1.0.DeployServiceCDKeyFormatError": {
        "Message": "Windows系统的安装秘钥格式非法",
        "NumberOfArgs": 0,
        "Resolution": "请按照格式要求输入Windows系统安装密钥，然后重试"
    },
    "FusionDirector.1.0.DeployServiceNullPreHostName": {
        "Message": "未配置主机名前缀",
        "NumberOfArgs": 0,
        "Resolution": "请配置主机名前缀，然后重试"
    },
    "FusionDirector.1.0.DeployServiceNullPartitionPara": {
        "Message": "未配置系统分区",
        "NumberOfArgs": 0,
        "Resolution": "请配置系统分区，然后重试"
    },
    "FusionDirector.1.0.DeployServicePartitionParaFormatError": {
        "Message": "系统分区配置参数格式错误",
        "NumberOfArgs": 0,
        "Resolution": "请按照格式要求配置系统分区，然后重试"
    },
    "FusionDirector.1.0.ClusterNotInBackuping": {
        "Message": "系统未有正进行的备份操作。",
        "NumberOfArgs": 0,
        "Resolution": "请确保有正在进行的备份操作时，再进行备份取消操作。"
    },
    "FusionDirector.1.0.ClusterUnfinishedTasksExist": {
        "Message": "系统有未完成的任务，不能进行此操作。",
        "NumberOfArgs": 0,
        "Resolution": "等待系统未完成的任务结束后，再进行此操作。"
    },
    "FusionDirector.1.0.ClusterNodeStateInvalid": {
        "Message": "当前节点状态不能进行此操作。",
        "NumberOfArgs": 0,
        "Resolution": "请检查节点的状态，再重试。"
    },
    "FusionDirector.1.0.EventMailUnableToRelayErr": {
        "Message": "邮件未发送成功，请输入正确的邮箱地址。",
        "NumberOfArgs": 0,
        "Resolution": "请输入正确的邮箱地址。"
    },
    "FusionDirector.1.0.ClusterFloatingIPNotConfig": {
        "Message": "执行该操作前需要先配置集群的浮动IP。",
        "NumberOfArgs": 0,
        "Resolution": "请配置浮动IP后重试。"
    },
    "FusionDirector.1.0.SwitchProfileError1": {
        "Message": "一个网络只能在一个逻辑交换机上使用",
        "NumberOfArgs": 0,
        "Resolution": "请确保一个网络只在一个逻辑交换机上使用"
    },
    "FusionDirector.1.0.SwitchProfileError2": {
        "Message": "堆叠成员(%1)端口不正确",
        "NumberOfArgs": 1,
        "Resolution": "请检查配置并重试"
    },
    "FusionDirector.1.0.SwitchProfileError3": {
        "Message": "资源(%1)不存在",
        "NumberOfArgs": 1,
        "Resolution": "请检查资源是否正确"
    },
    "FusionDirector.1.0.SwitchProfileError4": {
        "Message": "端口(%1)不支持(%2)能力",
        "NumberOfArgs": 2,
        "Resolution": "更换其他端口并重试"
    },
    "FusionDirector.1.0.SwitchProfileError5": {
        "Message": "SwitchProfile已经被使用，不允许删除",
        "NumberOfArgs": 0,
        "Resolution": "请勿删除已被使用的SwitchProfile"
    },
    "FusionDirector.1.0.SwitchProfileError6": {
        "Message": "资源(%1)已存在",
        "NumberOfArgs": 1,
        "Resolution": "资源不能相同"
    },
    "FusionDirector.1.0.SwitchProfileError7": {
        "Message": "服务器网口没有对应的交换内部端口",
        "NumberOfArgs": 0,
        "Resolution": "请确保对应槽位的交换板在位"
    },
    "FusionDirector.1.0.SwitchProfileError8": {
        "Message": "资源(%1)已被使用",
        "NumberOfArgs": 1,
        "Resolution": "请先释放它"
    },
    "FusionDirector.1.0.SwitchProfileError9": {
        "Message": "端口类型与网络类型不兼容",
        "NumberOfArgs": 0,
        "Resolution": "请确保端口类型和网络类型兼容"
    },
    "FusionDirector.1.0.SwitchProfileError10": {
        "Message": "当上行端口组使能MonitorLink功能，服务器网口不允许关联多个上行端口组",
        "NumberOfArgs": 0,
        "Resolution": "服务器网口只关联一个上行端口组，或者上行端口组禁用MonitorLink功能"
    },
    "FusionDirector.1.0.SwitchProfileError11": {
        "Message": "上行端口组已使能SmartLink功能，不允许关联存储网络",
        "NumberOfArgs": 0,
        "Resolution": "上行端口组禁用SmartLink功能"
    },
    "FusionDirector.1.0.SwitchProfileError12": {
        "Message": "端口不能同时关联使能隧道功能的网络和其他任何网络",
        "NumberOfArgs": 0,
        "Resolution": "请先删除已关联的网络"
    },
    "FusionDirector.1.0.SwitchProfileError13": {
        "Message": "一个端口只允许关联一个存储网络",
        "NumberOfArgs": 0,
        "Resolution": "请勿在一个端口上关联多个存储网络"
    },
    "FusionDirector.1.0.SwitchProfileError14": {
        "Message": "上行端口组(%1)已经关联存储网络，其成员端口不允许使能流控功能",
        "NumberOfArgs": 1,
        "Resolution": "请关闭流控功能"
    },
    "FusionDirector.1.0.SwitchProfileError15": {
        "Message": "一个以太网络不允许同时关联多个上行端口组",
        "NumberOfArgs": 0,
        "Resolution": "请勿将一个以太网络关联到多个上行端口组"
    },
    "FusionDirector.1.0.SwitchProfileError16": {
        "Message": "上行端口组(%1)配置的Flush报文Vlan ID必须是它关联的网络的Vlan ID",
        "NumberOfArgs": 1,
        "Resolution": "请选择一个上行端口组已关联网络的Vlan ID作为Flush报文Vlan ID"
    },
    "FusionDirector.1.0.SwitchProfileError17": {
        "Message": "该网络不支持设置为默认vlan",
        "NumberOfArgs": 0,
        "Resolution": "请勿将该网络设置为默认vlan"
    },
    "FusionDirector.1.0.SwitchProfileError18": {
        "Message": "一个端口只允许设置一个默认vlan",
        "NumberOfArgs": 0,
        "Resolution": "请勿在一个端口上设置多个默认vlan"
    },
    "FusionDirector.1.0.SwitchProfileError19": {
        "Message": "vlan ID不能为空",
        "NumberOfArgs": 0,
        "Resolution": "请填入正确的vlan ID"
    },
    "FusionDirector.1.0.SwitchProfileError20": {
        "Message": "下行口FCoE vlan ID不能为空",
        "NumberOfArgs": 0,
        "Resolution": "请填入正确的vlan ID"
    },
    "FusionDirector.1.0.SwitchProfileError21": {
        "Message": "连接存储阵列的网络不允许使能FSB功能",
        "NumberOfArgs": 0,
        "Resolution": "连接存储阵列的网络，请勿使能FSB功能"
    },
    "FusionDirector.1.0.SwitchProfileError22": {
        "Message": "上、下行口FCoE vlan ID不一致",
        "NumberOfArgs": 0,
        "Resolution": "请确保上、下行口FCoE vlan ID一致"
    },
    "FusionDirector.1.0.SwitchProfileError23": {
        "Message": "上行口FCoE vlan ID不能为空",
        "NumberOfArgs": 0,
        "Resolution": "请填入正确的vlan ID"
    },
    "FusionDirector.1.0.SwitchProfileError24": {
        "Message": "UserZoneEnable字段不能为空",
        "NumberOfArgs": 0,
        "Resolution": "请填入正确的值"
    },
    "FusionDirector.1.0.SwitchProfileError25": {
        "Message": "DCBEnable字段不能为空",
        "NumberOfArgs": 0,
        "Resolution": "请填入正确的值"
    },
    "FusionDirector.1.0.SwitchProfileError26": {
        "Message": "DcbxEnable字段不能为空",
        "NumberOfArgs": 0,
        "Resolution": "请填入正确的值"
    },
    "FusionDirector.1.0.SwitchProfileError27": {
        "Message": "该网络使能了DCB功能，必须设置一个ETS模板",
        "NumberOfArgs": 0,
        "Resolution": "请设置一个ETS模板"
    },
    "FusionDirector.1.0.SwitchProfileError28": {
        "Message": "DCBX版本不能为空",
        "NumberOfArgs": 0,
        "Resolution": "请填入正确的DCBX版本"
    },
    "FusionDirector.1.0.SwitchProfileError29": {
        "Message": "没有创建zone",
        "NumberOfArgs": 0,
        "Resolution": "请创建zone"
    },
    "FusionDirector.1.0.SwitchProfileError30": {
        "Message": "该上行端口组(%1)与当前网络未关联，不允许设置为zone成员",
        "NumberOfArgs": 1,
        "Resolution": "请先将该上行端口组与当前网络关联"
    },
    "FusionDirector.1.0.SwitchProfileError31": {
        "Message": "该服务器网口(%1)与当前网络未关联，不允许设置为zone成员",
        "NumberOfArgs": 1,
        "Resolution": "请先将该服务器网口与当前网络关联"
    },
    "FusionDirector.1.0.SwitchProfileError32": {
        "Message": "该交换内部端口(%1)已配置成链路聚合端口",
        "NumberOfArgs": 1,
        "Resolution": "请先删除链路聚合端口配置"
    },
    "FusionDirector.1.0.SwitchProfileError33": {
        "Message": "该交换内部端口(%1)已配置成堆叠端口",
        "NumberOfArgs": 1,
        "Resolution": "请先删除堆叠端口配置"
    },
    "FusionDirector.1.0.SwitchProfileError34": {
        "Message": "该交换内部端口端口(%1)已配置成双主检测端口",
        "NumberOfArgs": 1,
        "Resolution": "请先删除双主检测端口配置"
    },
    "FusionDirector.1.0.SwitchProfileError35": {
        "Message": "该端口已加入其他上行端口组",
        "NumberOfArgs": 0,
        "Resolution": "请先从上行端口组中删除"
    },
    "FusionDirector.1.0.SwitchProfileError36": {
        "Message": "该逻辑交换机已创建上行端口组",
        "NumberOfArgs": 0,
        "Resolution": "请先删除上行端口组"
    },
    "FusionDirector.1.0.SwitchProfileError37": {
        "Message": "不允许变更该上行端口组所属的逻辑交换机",
        "NumberOfArgs": 0,
        "Resolution": "请勿变更上行端口组所属的逻辑交换机"
    },
    "FusionDirector.1.0.SwitchProfileError38": {
        "Message": "该上行端口组(%1)已加入网络(%2)的自定义zone",
        "NumberOfArgs": 2,
        "Resolution": "请先从zone中删除"
    },
    "FusionDirector.1.0.SwitchProfileError39": {
        "Message": "上行端口组已关联网络(%1)",
        "NumberOfArgs": 2,
        "Resolution": "请先取消关联"
    },
    "FusionDirector.1.0.SwitchProfileError40": {
        "Message": "网卡(%1)已使能多通道，对应的交换内部端口不允许创建链路聚合组",
        "NumberOfArgs": 1,
        "Resolution": "请删除对应的链路聚合组"
    },
    "FusionDirector.1.0.SwitchProfileError41": {
        "Message": "端口类型与上行端口组类型不匹配",
        "NumberOfArgs": 0,
        "Resolution": "请选择类型匹配的端口"
    },
    "FusionDirector.1.0.SwitchProfileError42": {
        "Message": "同一个上行端口组的成员端口不属于同一个逻辑交换机",
        "NumberOfArgs": 0,
        "Resolution": "请确保同一个上行端口组的所有成员端口均属于同一个逻辑交换机"
    },
    "FusionDirector.1.0.SwitchProfileError43": {
        "Message": "只有面板端口才允许加入上行端口组",
        "NumberOfArgs": 0,
        "Resolution": "请选择面板端口加入上行端口组"
    },
    "FusionDirector.1.0.SwitchProfileError44": {
        "Message": "端口(%1)已配置成堆叠端口，不允许加入上行端口组",
        "NumberOfArgs": 1,
        "Resolution": "请先删除堆叠端口配置"
    },
    "FusionDirector.1.0.SwitchProfileError45": {
        "Message": "端口(%1)已配置成双主检测端口，不允许加入上行端口组",
        "NumberOfArgs": 1,
        "Resolution": "请先删除双主检测端口配置"
    },
    "FusionDirector.1.0.SwitchProfileError46": {
        "Message": "端口不允许重复加入上行端口组",
        "NumberOfArgs": 0,
        "Resolution": "请勿将端口重复加入上行端口组"
    },
    "FusionDirector.1.0.SwitchProfileError47": {
        "Message": "速率必须一致端口，不允许加入同一个上行端口组",
        "NumberOfArgs": 0,
        "Resolution": "请勿将速率不一致的端口加入到同一个上行端口组"
    },
    "FusionDirector.1.0.SwitchProfileError48": {
        "Message": "没有主成员端口",
        "NumberOfArgs": 0,
        "Resolution": "请添加主成员端口"
    },
    "FusionDirector.1.0.SwitchProfileError49": {
        "Message": "SmartLink功能未使能，不允许添加从成员端口",
        "NumberOfArgs": 0,
        "Resolution": "请使能SmartLink功能"
    },
    "FusionDirector.1.0.SwitchProfileError50": {
        "Message": "SmartLink功能已使能，但是没有从成员端口",
        "NumberOfArgs": 0,
        "Resolution": "请添加从成员端口"
    },
    "FusionDirector.1.0.SwitchProfileError51": {
        "Message": "上行端口组的类型不能为空",
        "NumberOfArgs": 0,
        "Resolution": "请确保上行端口组的类型不能为空"
    },
    "FusionDirector.1.0.SwitchProfileError52": {
        "Message": "上行端口组为FC类型，不允许使能MonitorLink和链路聚合功能",
        "NumberOfArgs": 0,
        "Resolution": "请关闭MonitorLink和链路聚合功能"
    },
    "FusionDirector.1.0.SwitchProfileError53": {
        "Message": "上行端口组为FC类型，不允许添加从成员端口",
        "NumberOfArgs": 0,
        "Resolution": "请删除从成员端口"
    },
    "FusionDirector.1.0.SwitchProfileError54": {
        "Message": "上行端口组为FCoE类型，不允许使能SmartLink功能",
        "NumberOfArgs": 0,
        "Resolution": "请关闭SmartLink功能"
    },
    "FusionDirector.1.0.SwitchProfileError55": {
        "Message": "堆叠逻辑交换机不允许使能MonitorLink功能",
        "NumberOfArgs": 0,
        "Resolution": "请关闭MonitorLink功能"
    },
    "FusionDirector.1.0.SwitchProfileError56": {
        "Message": "上行端口组有多个成员端口，必须使能链路聚合功能",
        "NumberOfArgs": 0,
        "Resolution": "请使能链路聚合功能"
    },
    "FusionDirector.1.0.SwitchProfileError57": {
        "Message": "服务器网口关联的网络数量已达到最大值",
        "NumberOfArgs": 0,
        "Resolution": "请勿再关联其他网络"
    },
    "FusionDirector.1.0.SwitchProfileError58": {
        "Message": "同一逻辑交换机中，所有堆叠端口的速率必须一致",
        "NumberOfArgs": 0,
        "Resolution": "请确保同一逻辑交换机中所有堆叠端口的速率一致"
    },
    "FusionDirector.1.0.SwitchProfileError59": {
        "Message": "优先级组15不支持DRR模式，不支持配置DRR调度权重值",
        "NumberOfArgs": 0,
        "Resolution": "请勿给优先级组15配置DRR调度权重值"
    },
    "FusionDirector.1.0.SwitchProfileError60": {
        "Message": "上行端口组为FC类型，不允许使能SmartLink功能",
        "NumberOfArgs": 0,
        "Resolution": "请关闭SmartLink功能"
    },
    "FusionDirector.1.0.SwitchProfileError61": {
        "Message": "FC类型的逻辑交换机只允许使用FC类型的网络",
        "NumberOfArgs": 0,
        "Resolution": "请使用FC类型的网络"
    },
    "FusionDirector.1.0.SwitchProfileError62": {
        "Message": "上行口的FCoE VLAN不能与下行口的FCoE VLAN相同",
        "NumberOfArgs": 0,
        "Resolution": "请使用不同的FCoE VLAN"
    },
    "FusionDirector.1.0.SwitchProfileError63": {
        "Message": "当前逻辑交换机使用的存储类型网络数量已达到最大值",
        "NumberOfArgs": 0,
        "Resolution": "请勿再关联其他存储类型网络"
    },
    "FusionDirector.1.0.SwitchProfileError64": {
        "Message": "逻辑交换机(%1)上已经使用包含VLAN(%2)的网络，不允许再使用包含该VLAN的网络",
        "NumberOfArgs": 2,
        "Resolution": "请勿再使用包含该VLAN的网络"
    },
    "FusionDirector.1.0.SwitchProfileError65": {
        "Message": "网卡(%1)不支持同时使用隧道模式和非隧道模式的网络",
        "NumberOfArgs": 1,
        "Resolution": "请勿在同一个网卡上同时使用隧道模式和非隧道模式的网络"
    },
    "FusionDirector.1.0.SwitchProfileError66": {
        "Message": "网络未使能FCoE功能，不允许配置FCoE VLAN",
        "NumberOfArgs": 0,
        "Resolution": "请勿配置FCoE VLAN"
    },
    "FusionDirector.1.0.SwitchProfileError67": {
        "Message": "隧道模式的网络不允许配置MAP VLAN",
        "NumberOfArgs": 0,
        "Resolution": "请勿配置MAP VLAN"
    },
    "FusionDirector.1.0.SwitchProfileError68": {
        "Message": "以太和FCoE类型的逻辑交换机不允许使用FC类型的网络",
        "NumberOfArgs": 0,
        "Resolution": "请勿使用FC类型的网络"
    },
    "FusionDirector.1.0.SwitchProfileError69": {
        "Message": "已使能SmartLink的回切功能，必须设置SmartLink的回切时间",
        "NumberOfArgs": 0,
        "Resolution": "请设置SmartLink的回切时间"
    },
    "FusionDirector.1.0.SwitchProfileError70": {
        "Message": "已使能SmartLink的Flush报文发送功能，必须设置Flush报文的Vlan ID",
        "NumberOfArgs": 0,
        "Resolution": "请设置Flush报文的Vlan ID"
    },
    "FusionDirector.1.0.SwitchProfileError71": {
        "Message": "已使能MonitorLink功能，必须设置MonitorLink的回切时间",
        "NumberOfArgs": 0,
        "Resolution": "请设置MonitorLink的回切时间"
    },
    "FusionDirector.1.0.SwitchProfileError72": {
        "Message": "网卡(%1)已使能FCoE功能，不允许使用隧道模式的网络",
        "NumberOfArgs": 1,
        "Resolution": "请勿在使能FCoE功能的网卡上使用隧道模式的网络"
    },
    "FusionDirector.1.0.SwitchProfileError73": {
        "Message": "ZONE成员不允许重复",
        "NumberOfArgs": 0,
        "Resolution": "请确保ZONE成员唯一"
    },
    "FusionDirector.1.0.SwitchProfileError74": {
        "Message": "同一个物理端口下的服务器网口，不能关联相同VLAN ID的隧道类型网络",
        "NumberOfArgs": 0,
        "Resolution": "请勿关联相同VLAN ID的隧道类型网络"
    },
    "FusionDirector.1.0.SwitchProfileError75": {
        "Message": "连接到同一个内部链路聚合组的服务器网口，必须使用相同的默认VLAN ID",
        "NumberOfArgs": 0,
        "Resolution": "请确保默认VLAN ID相同"
    },
    "FusionDirector.1.0.SwitchProfileError76": {
        "Message": "网络使能了DCB功能，必须设置PFC模式",
        "NumberOfArgs": 0,
        "Resolution": "请设置PFC模式"
    },
    "FusionDirector.1.0.SwitchProfileError77": {
        "Message": "PFC模式为自动，必须使能DCBX功能",
        "NumberOfArgs": 0,
        "Resolution": "请使能DCBX功能"
    },
    "FusionDirector.1.0.SwitchProfileError78": {
        "Message": "SmartLink功能已使能，必须设置倒换延时时间",
        "NumberOfArgs": 0,
        "Resolution": "请设置倒换延时时间"
    },
    "FusionDirector.1.0.SwitchProfileError79": {
        "Message": "zone名字不能为空",
        "NumberOfArgs": 0,
        "Resolution": "请设置zone名字"
    },
    "FusionDirector.1.0.SwitchProfileError80": {
        "Message": "不允许使用相同的映射VLAN ID(%1)",
        "NumberOfArgs": 1,
        "Resolution": "请确保同一个端口下不允许使用相同的映射VLAN ID"
    },
    "FusionDirector.1.0.SwitchProfileError81": {
        "Message": "连到同一个内部EthTrunk的网络不允许同时设置成默认VLAN和非默认VLAN",
        "NumberOfArgs": 0,
        "Resolution": "请勿将同一个网络同时设置成默认VLAN和非默认VLAN"
    },
    "FusionDirector.1.0.SwitchProfileError82": {
        "Message": "该服务器网口已使能FCoE功能，不支持使用VLAN 1",
        "NumberOfArgs": 0,
        "Resolution": "请勿使用VLAN 1"
    },
    "FusionDirector.1.0.SwitchProfileError83": {
        "Message": "灵活插卡型号发生变化，导致网络配置冲突，请先删除灵活插卡上的uplink配置。以下槽位的灵活插卡发生变化：%1",
        "NumberOfArgs": 1,
        "Resolution": "请先删除灵活插卡上的uplink配置"
    },
    "FusionDirector.1.0.SwitchProfileError84": {
        "Message": "交换板型号发生变化，导致网络配置冲突，请确认是否需要强制删除冲突的配置。以下槽位的交换板发生变化：%1",
        "NumberOfArgs": 1,
        "Resolution": "请确认是否需要强制删除冲突的配置"
    },
    "FusionDirector.1.0.SwitchProfileError85": {
        "Message": "服务器网口发生变化，导致网络配置冲突，请确认是否需要强制删除冲突的配置。以下服务器网口发生变化：%1",
        "NumberOfArgs": 1,
        "Resolution": "请确认是否需要强制删除冲突的配置"
    },
    "FusionDirector.1.0.SwitchProfileError86": {
        "Message": "网络已被使用，请确认是否需要强制删除",
        "NumberOfArgs": 0,
        "Resolution": "请确认是否需要强制删除"
    },
    "FusionDirector.1.0.SwitchProfileError87": {
        "Message": "上行端口组已关联网络，请确认是否需要强制删除",
        "NumberOfArgs": 0,
        "Resolution": "请确认是否需要强制删除"
    },
    "FusionDirector.1.0.SwitchProfileError88": {
        "Message": "交换内部端口(%1)已连接FCoE网口，不允许使能流量控制功能",
        "NumberOfArgs": 1,
        "Resolution": "请关闭流量控制功能"
    },
    "FusionDirector.1.0.SwitchProfileError89": {
        "Message": "网络总数不允许超过%1",
        "NumberOfArgs": 1,
        "Resolution": "请确保网络数量不超过最大值"
    },
    "FusionDirector.1.0.SwitchProfileError90": {
        "Message": "每个逻辑交换机允许使用的网络数量不允许超过%1",
        "NumberOfArgs": 1,
        "Resolution": "请确保每个逻辑交换机使用的网络数量不超过最大值"
    },
    "FusionDirector.1.0.NetworkLoginLockedErr": {
        "Message": "设备已被锁定",
        "NumberOfArgs": 0,
        "Resolution": "请等待6分钟后再重试"
    },
    "FusionDirector.1.0.SSDPFDNotExistedInNetwork": {
        "Message": "FD(SN:%1)节点在网络中不存在。",
        "NumberOfArgs": 1,
        "Resolution": "请修改正确后重试。"
    },
    "FusionDirector.1.0.SSDPFDNodeIDAndSNNotMatch": {
        "Message": "NodeID:%1号和SN:%2号不匹配。",
        "NumberOfArgs": 2,
        "Resolution": "请修改正确后重试。"
    },
    "FusionDirector.1.0.SwitchProfileError91": {
        "Message": "正在运行报文跟踪，不能应用配置文件",
        "NumberOfArgs": 0,
        "Resolution": "请先停止报文跟踪"
    },
    "FusionDirector.1.0.SwitchProfileError92": {
        "Message": "目标槽位(%1)与源槽位的网卡不一致",
        "NumberOfArgs": 1,
        "Resolution": "请确保目标槽位与源槽位的网卡一致"
    },
    "FusionDirector.1.0.SwitchProfileError93": {
        "Message": "目标槽位(%1)与源槽位的内部端口链路聚合配置不一致",
        "NumberOfArgs": 1,
        "Resolution": "请确保目标槽位与源槽位的内部端口链路聚合配置一致"
    },
    "FusionDirector.1.0.SwitchProfileError94": {
        "Message": "网络不能同时关联FCoE和FC类型的上行端口组",
        "NumberOfArgs": 0,
        "Resolution": "请勿将一个网络同时关联FCoE和FC类型的上行端口组"
    },
    "FusionDirector.1.0.SwitchProfileError95": {
        "Message": "逻辑交换机上已存在网络连接配置，导致无法修改堆叠组合关系，请确认是否需要强制删除这些配置",
        "NumberOfArgs": 0,
        "Resolution": "请确认是否需要强制删除"
    },
    "FusionDirector.1.0.SwitchMonitorError1": {
        "Message": "正在应用配置文件，不能运行报文跟踪",
        "NumberOfArgs": 0,
        "Resolution": "请等待配置完成"
    },
    "FusionDirector.1.0.UpgradeBaselineNameDuplicate": {
        "Message": "基线名重复",
        "NumberOfArgs": 1,
        "Resolution": "请修改基线名后重试"
    },
    "FusionDirector.1.0.VMMgmtVcenterConnectError": {
        "Message": "连接vCenter失败",
        "NumberOfArgs": 0,
        "Resolution": "请排查连接问题"
    },
    "FusionDirector.1.0.VMMgmtVcenterCertError": {
        "Message": "vCenter证书没有导入，或者导入的证书错误",
        "NumberOfArgs": 0,
        "Resolution": "请导入正确的vCenter证书"
    },
    "FusionDirector.1.0.OperationNotSupportedOnState": {
        "Message": "对象当前的状态不支持该操作",
        "NumberOfArgs": 0,
        "Resolution": "请等待对象处于合适的状态后再尝试此操作"
    },
    "FusionDirector.1.0.ServerProfileFileErr": {
        "Message": "导入文件中的%1错误，文件导入失败",
        "NumberOfArgs": 1,
        "Resolution": "修改导入文件，重新导入"
    },
    "FusionDirector.1.0.SwitchProfileError96": {
        "Message": "网络%1的自定义zone没有成员端口",
        "NumberOfArgs": 1,
        "Resolution": "请先添加成员端口或者删除自定义zone"
    },
    "FusionDirector.1.0.SwitchProfileError97": {
        "Message": "资源%1已经被%2使用",
        "NumberOfArgs": 2,
        "Resolution": "请先释放它"
    },
    "FusionDirector.1.0.SwitchProfileError98": {
        "Message": "机框配置文件与交换设备不一致，不一致槽位列表：%1",
        "NumberOfArgs": 1,
        "Resolution": "请确配置文件与交换设备一致，并重新提交请求"
    },
    "FusionDirector.1.0.IAMTestLDAPConnectionFailed": {
        "Message": "测试连通性失败。",
        "NumberOfArgs": 0,
        "Resolution": "请确保域控制器信息配置正确，然后重试。"
    }
    /***************************FD end**********************************/


}

var errorCode_en = {
    "0": "Successful",
    /***************************自定义 Strat********************************/
    "-80002": 'Please upload the Fusion Derictor Service Certificate first. ',
    "-80003": 'Please upload the Fusion Derictor Service root certificate first.',
    "-80004": 'Please upload the Fusion Derictor Service intermediate certificate first.',
    "-90008": 'Certificate error. ',
    "-80001": 'network error',
    "1204": "FusionDirector connection failed. please try again.",
    "-331": "FusionDirector connection failed. please try again.",
    "201": "query or delete failed, the object to be operated does not exist",
    "1001": "FusionDirector license has expired!",
    "1002": "FusionDirector license does not have the function to call openapi",
    "1024": "FusionDirector authentication failed",
    "-331001": "FusionDirector license has expired!",
    "-331002": "FusionDirector license does not have the function to call openapi",
    "-331024": "FusionDirector authentication failed",
    "-33149201": "License number is insufficient.",

    "149201": "License number is insufficient.",
    "-99999": "Operation Failed:Unknown error.",
    "-90001": "System internal error, please initialize",
    "-90002": "Please configure FusionDirector first",
    "-90003": "Login status effectiveness, Please login vCenter again",
    "-90004": "Now there are no failed tasks that can be cleared",
    "-90005": "The user name of FusionDirector does not match the password or the account does not exist.",
    "-90009": "Request not supported",
    "-90010": "Error in username or password or port",
    "-90011": "Alarm service username already exists",
    "-80009": "Failed to connect current FusionDirector:A error occurred when connecting to the FusionDirector server.",
    "-80010": "Failed to connect current FusionDirector:An error occurred when connecting to the FusionDirector server. No connection could be made because the target machine actively refused.",
    "-80011": "Sytem can not find this FusionDirector",
    "-81001": "Failed to connect to the FusionDirector server through a network",
    "-70001": "Operation failed:Failed to read the database.",
    //http
    "-50400": "Failed to connect current FusionDirector:BadRequest indicates that the request could not be understood by the server. BadRequest is sent when no other error is applicable, or if the exact error is unknown or does not have its own error code.",
    "-50401": "Failed to connect current FusionDirector:Unauthorized indicates that the requested resource requires authentication. The WWW-Authenticate header contains the details of how to perform the authentication.",
    "-50402": "Failed to connect current FusionDirector:PaymentRequired is reserved for future use.",
    "-50403": "Failed to connect current FusionDirector:Forbidden indicates that the server refuses to fulfill the request.",
    "-50404": "Failed to connect current FusionDirector:NotFound indicates that the requested resource does not exist on the server.",
    "-50405": "Failed to connect current FusionDirector:MethodNotAllowed indicates that the request method (POST or GET) is not allowed on the requested resource.",
    "-50406": "Failed to connect current FusionDirector:NotAcceptable indicates that the client has indicated with Accept headers that it will not accept any of the available representations of the resource.",
    "-50407": "Failed to connect current FusionDirector:ProxyAuthenticationRequired indicates that the requested proxy requires authentication. The Proxy-authenticate header contains the details of how to perform the authentication.",
    "-50408": "Failed to connect current FusionDirector:RequestTimeout indicates that the client did not send a request within the time the server was expecting the request.",
    "-50409": "Failed to connect current FusionDirector:Conflict indicates that the request could not be carried out because of a conflict on the server.",
    "-50410": "Failed to connect current FusionDirector:Gone indicates that the requested resource is no longer available.",
    "-50411": "Failed to connect current FusionDirector:LengthRequired indicates that the required Content-length header is missing.",
    "-50412": "Failed to connect current FusionDirector:PreconditionFailed indicates that a condition set for this request failed, and the request cannot be carried out. Conditions are set with conditional request headers like If-Match, If-None-Match, or If-Unmodified-Since.",
    "-50413": "Failed to connect current FusionDirector:RequestEntityTooLarge indicates that the request is too large for the server to process.",
    "-50414": "Failed to connect current FusionDirector:RequestUriTooLong indicates that the URI is too long.",
    "-50415": "Failed to connect current FusionDirector:UnsupportedMediaType indicates that the request is an unsupported type.",
    "-50416": "Failed to connect current FusionDirector:RequestedRangeNotSatisfiable indicates that the range of data requested from the resource cannot be returned, either because the beginning of the range is before the beginning of the resource, or the end of the range is after the end of the resource.",
    "-50417": "Failed to connect current FusionDirector:ExpectationFailed indicates that an expectation given in an Expect header could not be met by the server.",
    "-50500": "Failed to connect current FusionDirector:InternalServerError indicates that a generic error has occurred on the server.",
    "-50501": "Failed to connect current FusionDirector:NotImplemented indicates that the server does not support the requested function.",
    "-50502": "Failed to connect current FusionDirector:BadGateway indicates that an intermediate proxy server received a bad response from another proxy or the origin server.",
    "-50503": "Failed to connect current FusionDirector:ServiceUnavailable indicates that the server is temporarily unavailable, usually due to high load or maintenance.",
    "-50504": "Failed to connect current FusionDirector:GatewayTimeout indicates that an intermediate proxy server timed out while waiting for a response from another proxy or the origin server.",
    "-50505": "Failed to connect current FusionDirector:HttpVersionNotSupported indicates that the requested HTTP version is not supported by the server.",
    "-40404": "Path is wrong, the specified file was not found",
    /***************************自定义 End**********************************/
    "os.10001": 'Failed to create OS image',
    "os.10002": 'Failed to modify OS image',
    "os.10003": 'Failed to delete OS image',
    "os.10004": 'Failed to get OS imageailed to obtain OS image',
    "os.10005": 'Failed to get OS image type',
    "os.10006": 'Get OS image enumeration failed',
    "os.10007": 'Failed to get OS image details',

    "os.20001": 'Failed to create OS deployment template',
    "os.20002": 'The OS deployment template failed to be modified.',
    "os.20003": 'Failed to delete OS deployment template',
    "os.20004": 'OS deployment failed',
    /***************************自定义 End**********************************/
    'UnkownMessageId': 'Unkown error. Please contact technical support.',

    'Base.1.0.Success': 'Successfully Completed Request',
    'Base.1.0.GeneralError': 'A general error has occurred. See ExtendedInfo for more information.',
    'Base.1.0.Created': 'The resource has been created successfully',
    'Base.1.0.PropertyDuplicate': 'The property %1 was duplicated in the request.',
    'Base.1.0.PropertyUnknown': 'The property %1 is not in the list of valid properties for the resource.',
    'Base.1.0.PropertyValueTypeError': 'The value %1 for the property %2 is of a different type than the property can accept.',
    'Base.1.0.PropertyValueFormatError': 'The value %1 for the property %2 is of a different format than the property can accept.',
    'Base.1.0.PropertyValueNotInList': 'The value %1 for the property %2 is not in the list of acceptable values.',
    'Base.1.0.PropertyNotWritable': 'The property %1 is a read only property and cannot be assigned a value.',
    'Base.1.0.PropertyMissing': 'The property %1 is a required property and must be included in the request.',
    'Base.1.0.MalformedJSON': 'The request body submitted was malformed JSON and could not be parsed by the receiving service.',
    'Base.1.0.ActionNotSupported': 'The action %1 is not supported by the resource.',
    'Base.1.0.ActionParameterMissing': 'The action %1 requires the parameter %2 to be present in the request body.',
    'Base.1.0.ActionParameterDuplicate': 'The action %1 was submitted with more than one value for the parameter %2.',
    'Base.1.0.ActionParameterUnknown': 'The action %1 was submitted with with the invalid parameter %2.',
    'Base.1.0.ActionParameterValueTypeError': 'The value %1 for the parameter %2 in the action %3 is of a different type than the parameter can accept.',
    'Base.1.0.ActionParameterValueFormatError': 'The value %1 for the parameter %2 in the action %3 is of a different format than the parameter can accept.',
    'Base.1.0.ActionParameterNotSupported': 'The parameter %1 for the action %2 is not supported on the target resource.',
    'Base.1.0.QueryParameterValueTypeError': 'The value %1 for the query parameter %2 is of a different type than the parameter can accept.',
    'Base.1.0.QueryParameterValueFormatError': 'The value %1 for the parameter %2 is of a different format than the parameter can accept.',
    'Base.1.0.QueryParameterOutOfRange': 'The value %1 for the query parameter %2 is out of range %3.',
    'Base.1.0.QueryNotSupportedOnResource': 'Querying is not supported on the requested resource.',
    'Base.1.0.QueryNotSupported': 'Querying is not supported by the implementation.',
    'Base.1.0.SessionLimitExceeded': 'The session establishment failed due to the number of simultaneous sessions exceeding the limit of the implementation.',
    'Base.1.0.EventSubscriptionLimitExceeded': 'The event subscription failed due to the number of simultaneous subscriptions exceeding the limit of the implementation.',
    'Base.1.0.ResourceCannotBeDeleted': 'The delete request failed because the resource requested cannot be deleted.',
    'Base.1.0.ResourceInUse': 'The change to the requested resource failed because the resource is in use or in transition.',
    'Base.1.0.ResourceAlreadyExists': 'The requested resource already exists.',
    'Base.1.0.CreateFailedMissingReqProperties': 'The create operation failed because the required property %1 was missing from the request.',
    'Base.1.0.CreateLimitReachedForResource': 'The create operation failed because the resource has reached the limit of possible resources.',
    'Base.1.0.ServiceShuttingDown': 'The operation failed because the service is shutting down and can no longer take incoming requests.',
    'Base.1.0.ServiceInUnknownState': 'The operation failed because the service is in an unknown state and can no longer take incoming requests.',
    'Base.1.0.NoValidSession': 'There is no valid session established with the implementation.',
    'Base.1.0.InsufficientPrivilege': 'There are insufficient privileges for the account or credentials associated with the current session to perform the requested operation.',
    'Base.1.0.AccountModified': 'The account was successfully modifed.',
    'Base.1.0.AccountNotModified': 'The account modification request failed.',
    'Base.1.0.AccountRemoved': 'The account was successfully removed.',
    'Base.1.0.AccountForSessionNoLongerExists': 'The account for the current session has been removed, thus the current session has been removed as well.',
    'Base.1.0.InvalidObject': 'The object at %1 is invalid.',
    'Base.1.0.InternalError': 'The request failed due to an internal service error.  The service is still operational.',
    'Base.1.0.UnrecognizedRequestBody': 'The service detected a malformed request body that it was unable to interpret.',
    'Base.1.0.ResourceMissingAtURI': 'The resource at the URI %1 was not found.',
    'Base.1.0.ResourceAtUriInUnknownFormat': 'The resource at %1 is in a format not recognized by the service.',
    'Base.1.0.ResourceAtUriUnauthorized': 'While accessing the resource at %1, the service received an authorization error %2.',
    'Base.1.0.CouldNotEstablishConnection': 'The service failed to establish a connection with the URI %1.',
    'Base.1.0.SourceDoesNotSupportProtocol': 'The other end of the connection at %1 does not support the specified protocol %2.',
    'Base.1.0.AccessDenied': 'While attempting to establish a connection to %1, the service was denied access.',
    'Base.1.0.ServiceTemporarilyUnavailable': 'The service is temporarily unavailable.  Retry in %1 seconds.',
    'Base.1.0.InvalidIndex': 'The Index %1 is not a valid offset into the array.',
    'Base.1.0.PropertyValueModified': 'The property %1 was assigned the value %2 due to modification by the service.',

    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict1': 'network can not connect more than one logic switch (%1 and %2)',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict1_CAN_FORCE': 'network can not connect more than one logic switch (%1 and %2)',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict2': 'Stack port %1 is in slot %2, not in %3',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict2_CAN_FORCE': 'Stack port %1 is in slot %2, not in %3',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict3': 'Stack port %1 is in plane %2, not in %3',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict3_CAN_FORCE': 'Stack port %1 is in plane %2, not in %3',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict4': "Port %1 don't has the ability %2",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict4_CAN_FORCE': "Port %1 don't has the ability %2",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict5': 'Trunk can only config in stacking mode',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict5_CAN_FORCE': 'Trunk can only config in stacking mode',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict6': "The object's key %1 is duplicate",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict6_CAN_FORCE': "The object's key %1 is duplicate",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict7': 'Resource has reach the max %1',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict7_CAN_FORCE': 'Resource has reach the max %1',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict8': 'Object %1 is used by %2',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict8_CAN_FORCE': 'Object %1 is used by %2',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict9': "Port type %1 can't connect to network type %2",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict9_CAN_FORCE': "Port type %1 can't connect to network type %2",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict10': "When monitor link enable, server port %1 can't connect to two uplinks",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict10_CAN_FORCE': "When monitor link enable, server port %1 can't connect to two uplinks",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict11': "Uplink's smartlink is enalbed, not suport sannetwork",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict11_CAN_FORCE': "Uplink's smartlink is enalbed, not suport sannetwork",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict12': "Port in tunnelling network can't connect to other network",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict12_CAN_FORCE': "Port in tunnelling network can't connect to other network",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict13': "Port can't has more than one san network",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict13_CAN_FORCE': "Port can't has more than one san network",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict14': 'Networks connect to port, have same %1',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict14_CAN_FORCE': 'Networks connect to port, have same %1',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict15': "One eth network can't with two uplinks",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict15_CAN_FORCE': "One eth network can't with two uplinks",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict16': "San network can't connect to fc and foce both",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict16_CAN_FORCE': "San network can't connect to fc and foce both",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict17': 'Default vlan can only set in mapping eth network',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict17_CAN_FORCE': 'Default vlan can only set in mapping eth network',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict18': 'Port can only has one default vlan',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict18_CAN_FORCE': 'Port can only has one default vlan',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict19': 'ServerVlanID  could not be empty',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict19_CAN_FORCE': 'ServerVlanID  could not be empty',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict20': 'When FCoE is Enabled, DownlinkFCoEVlanID could not be empty',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict20_CAN_FORCE': 'When FCoE is Enabled, DownlinkFCoEVlanID could not be empty',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict21': 'FSBEnable could not be empty if connect type is ToSanSwitch',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict21_CAN_FORCE': 'FSBEnable could not be empty if connect type is ToSanSwitch',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict22': "UplinkFCoEVlanID and FCoEVlan can't be same",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict22_CAN_FORCE': "UplinkFCoEVlanID and FCoEVlan can't be same",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict23': "UplinkFCoEVlanID can't be empty, if enable FCoE and disable FSB",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict23_CAN_FORCE': "UplinkFCoEVlanID can't be empty, if enable FCoE and disable FSB",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict24': 'UserZoneEnable could not be empty if connect type is ToStorage',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict24_CAN_FORCE': 'UserZoneEnable could not be empty if connect type is ToStorage',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict25': 'DCBEnable wants a value if enable FCoE',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict25_CAN_FORCE': 'DCBEnable wants a value if enable FCoE',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict26': 'DCB should be configured if enable DCB',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict26_CAN_FORCE': 'DCB should be configured if enable DCB',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict27': 'Require a ets profile if enable DCB',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict27_CAN_FORCE': 'Require a ets profile if enable DCB',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict28': 'DcbxVersion wants a value if enbale Dcbx',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict28_CAN_FORCE': 'DcbxVersion wants a value if enbale Dcbx',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict29': 'Zones should be configured if enable Zone',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict29_CAN_FORCE': 'Zones should be configured if enable Zone',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict30': 'Network %1 not connect to uplink %2',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict30_CAN_FORCE': 'Network %1 not connect to uplink %2',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict31': 'Network %1 not connect to server port %2',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict31_CAN_FORCE': 'Network %1 not connect to server port %2',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict32': 'Port %1 is used by trunk',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict32_CAN_FORCE': 'Port %1 is used by trunk',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict33': 'Port %1 is used as stack port',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict33_CAN_FORCE': 'Port %1 is used as stack port',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict34': 'Port %1 is used as dad port',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict34_CAN_FORCE': 'Port %1 is used as dad port',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict35': 'Port %1 is used by Uplinks',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict35_CAN_FORCE': 'Port %1 is used by Uplinks',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict36': 'logic switch %1 is used by Uplinks',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict36_CAN_FORCE': 'logic switch %1 is used by Uplinks',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict37': "Uplink's logical switch %1 can't be change",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict37_CAN_FORCE': "Uplink's logical switch %1 can't be change",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict38': 'Uplink %1 used in zone',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict38_CAN_FORCE': 'Uplink %1 used in zone',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict39': 'Uplink %1 is used in connections',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict39_CAN_FORCE': 'Uplink %1 is used in connections',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict40': 'Posts %1 in more than one uplinks',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict40_CAN_FORCE': 'Posts %1 in more than one uplinks',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict41': 'Port %1 type %2 not match uplink type %3',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict41_CAN_FORCE': 'Port %1 type %2 not match uplink type %3',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict42': 'Ports in uplink are not in same logic switch',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict42_CAN_FORCE': 'Ports in uplink are not in same logic switch',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict43': "Port %1 isn't plate port, can't be a Uplink member",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict43_CAN_FORCE': "Port %1 isn't plate port, can't be a Uplink member",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict44': "Port %1 is stack port can't be a uplink member",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict44_CAN_FORCE': "Port %1 is stack port can't be a uplink member",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict45': "Port %1 is dad port can't be a uplink member",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict45_CAN_FORCE': "Port %1 is dad port can't be a uplink member",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict46': "Member %1 can't be same",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict46_CAN_FORCE': "Member %1 can't be same",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict47': "Eth uplink %1 member's speed must be same",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict47_CAN_FORCE': "Eth uplink %1 member's speed must be same",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict48': "Master member can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict48_CAN_FORCE': "Master member can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict49': 'Smartlink disable has no salve port',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict49_CAN_FORCE': 'Smartlink disable has no salve port',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict50': 'Smartlink disable has no salve port',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict50_CAN_FORCE': 'Smartlink disable has no salve port',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict51': "Uplink's type can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict51_CAN_FORCE': "Uplink's type can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict52': "Uplink FC type can't enalbe trunk or monitor link",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict52_CAN_FORCE': "Uplink FC type can't enalbe trunk or monitor link",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict53': 'FC mode has no slave members',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict53_CAN_FORCE': 'FC mode has no slave members',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict54': 'Uplink enable foce can not enalbe smart link',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict54_CAN_FORCE': 'Uplink enable foce can not enalbe smart link',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict55': 'Monitor link can not enable in stack mode',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict55_CAN_FORCE': 'Monitor link can not enable in stack mode',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict56': 'More than one eth port in group, must enable trunk',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict56_CAN_FORCE': 'More than one eth port in group, must enable trunk',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict57': "Serverport's vlan reach the max",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict57_CAN_FORCE': "Serverport's vlan reach the max",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict58': 'Port %1 speed %2 not same with other',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict58_CAN_FORCE': 'Port %1 speed %2 not same with other',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict59': 'PriorityGroup 15 DrrWeight must be empty',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict59_CAN_FORCE': 'PriorityGroup 15 DrrWeight must be empty',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict60': "Uplink FC type can't enalbe smartlink",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict60_CAN_FORCE': "Uplink FC type can't enalbe smartlink",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict61': "FC plane's network can't enable FCoE",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict61_CAN_FORCE': "FC plane's network can't enable FCoE",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict62': 'Uplink fcoe vlan must be same with down link fcoe vlan',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict62_CAN_FORCE': 'Uplink fcoe vlan must be same with down link fcoe vlan',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict63': 'The FcInstanceNum reach the max',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict63_CAN_FORCE': 'The FcInstanceNum reach the max',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict64': 'valn %1 is aleardy used in the logicswitch %2',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict64_CAN_FORCE': 'valn %1 is aleardy used in the logicswitch %2',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict65': "Can't has same map vlan %1 in one uplink",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict65_CAN_FORCE': "Can't has same map vlan %1 in one uplink",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict66': "FCoE disable, can't has vlan",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict66_CAN_FORCE': "FCoE disable, can't has vlan",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict67': "Tunneling network can't has mapping vlan",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict67_CAN_FORCE': "Tunneling network can't has mapping vlan",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict68': 'This plane must set foceenable',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict68_CAN_FORCE': 'This plane must set foceenable',
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict69': "RestoreEnable enable, time can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict69_CAN_FORCE': "RestoreEnable enable, time can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict70': "FlushSendEnable enable, CtrlVlanID can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict70_CAN_FORCE': "FlushSendEnable enable, CtrlVlanID can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict71': "MonitorLinkEnable enable, RecoverTime can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict71_CAN_FORCE': "MonitorLinkEnable enable, RecoverTime can't be empty",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict72': "CtrlVlanID %1 must be a network's ServerVlanID, and connected to this uplink",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict72_CAN_FORCE': "CtrlVlanID %1 must be a network's ServerVlanID, and connected to this uplink",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict73': "Zone's %1 member not unique",
    'NetworkService_1.0_CONFLICT_UI_TAG_CodeConflict73_CAN_FORCE': "Zone's %1 member not unique",
    'NetworkService_1.0_ERR_CodeErr1': "Can't get hardware product %1 board %2 imformation",
    'NetworkService_1.0_ERR_CodeErr2': 'The Switch PlaneType(%1) is unkwon',
    'NetworkService_1.0_ERR_CodeErr3': 'The Switch PlaneID(%1) is unkwon',
    'NetworkService_1.0_ERR_CodeErr4': 'The object %1 is not found',
    'NetworkService_1.0_ERR_CodeErr5': "The switchprofile is releated, can't be delete",
    'NetworkService_1.0_ERR_CodeErr6': 'The switch board which server port connect to may be absent',
    'NetworkService_1.0_ERR_CodeErrInteral': 'Server interal error',
    'NetworkService_1.0_ERR_CodeErrInput': 'Input error',
    "Base.1.0.Success": {
        "Message": "Successfully Completed Request",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    "Base.1.0.GeneralError": {
        "Message": "A general error has occurred. See ExtendedInfo for more information.",
        "NumberOfArgs": 0,
        "Resolution": "See ExtendedInfo for more information."
    },
    "Base.1.0.Created": {
        "Message": "The resource has been created successfully",
        "NumberOfArgs": 0,
        "Resolution": "None"
    },
    "Base.1.0.PropertyDuplicate": {
        "Message": "The property %1 was duplicated in the request.",
        "NumberOfArgs": 1,
        "Resolution": "Remove the duplicate property from the request body and resubmit the request if the operation failed."
    },
    "Base.1.0.PropertyUnknown": {
        "Message": "The property %1 is not in the list of valid properties for the resource.",
        "NumberOfArgs": 1,
        "Resolution": "Remove the unknown property from the request body and resubmit the request if the operation failed."
    },
    "Base.1.0.PropertyValueTypeError": {
        "Message": "The value %1 for the property %2 is of a different type than the property can accept.",
        "NumberOfArgs": 2,
        "Resolution": "Correct the value for the property in the request body and resubmit the request if the operation failed."
    },
    "Base.1.0.PropertyValueFormatError": {
        "Message": "The value %1 for the property %2 is of a different format than the property can accept.",
        "NumberOfArgs": 2,
        "Resolution": "Correct the value for the property in the request body and resubmit the request if the operation failed."
    },
    "Base.1.0.PropertyValueNotInList": {
        "Message": "The value %1 for the property %2 is not in the list of acceptable values.",
        "NumberOfArgs": 2,
        "Resolution": "Choose a value from the enumeration list that the implementation can support and resubmit the request if the operation failed."
    },
    "Base.1.0.PropertyNotWritable": {
        "Message": "The property %1 is a read only property and cannot be assigned a value.",
        "NumberOfArgs": 1,
        "Resolution": "Remove the property from the request body and resubmit the request if the operation failed."
    },
    "Base.1.0.PropertyMissing": {
        "Message": "The property %1 is a required property and must be included in the request.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the property is in the request body and has a valid value and resubmit the request if the operation failed."
    },
    "Base.1.0.MalformedJSON": {
        "Message": "The request body submitted was malformed JSON and could not be parsed by the receiving service.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the request body is valid JSON and resubmit the request."
    },
    "Base.1.0.ActionNotSupported": {
        "Message": "The action %1 is not supported by the resource.",
        "NumberOfArgs": 1,
        "Resolution": "The action supplied cannot be resubmitted to the implementation. Perhaps the action was invalid, the wrong resource was the target or the implementation documentation may be of assistance."
    },
    "Base.1.0.ActionParameterMissing": {
        "Message": "The action %1 requires the parameter %2 to be present in the request body.",
        "NumberOfArgs": 2,
        "Resolution": "Supply the action with the required parameter in the request body when the request is resubmitted."
    },
    "Base.1.0.ActionParameterDuplicate": {
        "Message": "The action %1 was submitted with more than one value for the parameter %2.",
        "NumberOfArgs": 2,
        "Resolution": "Resubmit the action with only one instance of the parameter in the request body if the operation failed."
    },
    "Base.1.0.ActionParameterUnknown": {
        "Message": "The action %1 was submitted with with the invalid parameter %2.",
        "NumberOfArgs": 2,
        "Resolution": "Correct the invalid parameter and resubmit the request if the operation failed."
    },
    "Base.1.0.ActionParameterValueTypeError": {
        "Message": "The value %1 for the parameter %2 in the action %3 is of a different type than the parameter can accept.",
        "NumberOfArgs": 3,
        "Resolution": "Correct the value for the parameter in the request body and resubmit the request if the operation failed."
    },
    "Base.1.0.ActionParameterValueFormatError": {
        "Message": "The value %1 for the parameter %2 in the action %3 is of a different format than the parameter can accept.",
        "NumberOfArgs": 3,
        "Resolution": "Correct the value for the parameter in the request body and resubmit the request if the operation failed."
    },
    "Base.1.0.ActionParameterNotSupported": {
        "Message": "The parameter %1 for the action %2 is not supported on the target resource.",
        "NumberOfArgs": 2,
        "Resolution": "Remove the parameter supplied and resubmit the request if the operation failed."
    },
    "Base.1.0.QueryParameterValueTypeError": {
        "Message": "The value %1 for the query parameter %2 is of a different type than the parameter can accept.",
        "NumberOfArgs": 2,
        "Resolution": "Correct the value for the query parameter in the request and resubmit the request if the operation failed."
    },
    "Base.1.0.QueryParameterValueFormatError": {
        "Message": "The value %1 for the parameter %2 is of a different format than the parameter can accept.",
        "NumberOfArgs": 2,
        "Resolution": "Correct the value for the query parameter in the request and resubmit the request if the operation failed."
    },
    "Base.1.0.QueryParameterOutOfRange": {
        "Message": "The value %1 for the query parameter %2 is out of range %3.",
        "NumberOfArgs": 3,
        "Resolution": "Reduce the value for the query parameter to a value that is within range, such as a start or count value that is within bounds of the number of resources in a collection or a page that is within the range of valid pages."
    },
    "Base.1.0.QueryNotSupportedOnResource": {
        "Message": "Querying is not supported on the requested resource.",
        "NumberOfArgs": 0,
        "Resolution": "Remove the query parameters and resubmit the request if the operation failed."
    },
    "Base.1.0.QueryNotSupported": {
        "Message": "Querying is not supported by the implementation.",
        "NumberOfArgs": 0,
        "Resolution": "Remove the query parameters and resubmit the request if the operation failed."
    },
    "Base.1.0.SessionLimitExceeded": {
        "Message": "The session establishment failed due to the number of simultaneous sessions exceeding the limit of the implementation.",
        "NumberOfArgs": 0,
        "Resolution": "Reduce the number of other sessions before trying to establish the session or increase the limit of simultaneous sessions (if supported)."
    },
    "Base.1.0.EventSubscriptionLimitExceeded": {
        "Message": "The event subscription failed due to the number of simultaneous subscriptions exceeding the limit of the implementation.",
        "NumberOfArgs": 0,
        "Resolution": "Reduce the number of other subscriptions before trying to establish the event subscription or increase the limit of simultaneous subscriptions (if supported)."
    },
    "Base.1.0.ResourceCannotBeDeleted": {
        "Message": "The delete request failed because the resource requested cannot be deleted.",
        "NumberOfArgs": 0,
        "Resolution": "Do not attempt to delete a non-deletable resource."
    },
    "Base.1.0.ResourceInUse": {
        "Message": "The change to the requested resource failed because the resource is in use or in transition.",
        "NumberOfArgs": 0,
        "Resolution": "Try again later."
    },
    "Base.1.0.ResourceAlreadyExists": {
        "Message": "The requested resource already exists.",
        "NumberOfArgs": 0,
        "Resolution": "Do not repeat the create operation as the resource has already been created."
    },
    "Base.1.0.CreateFailedMissingReqProperties": {
        "Message": "The create operation failed because the required property %1 was missing from the request.",
        "NumberOfArgs": 1,
        "Resolution": "Correct the body to include the required property with a valid value and resubmit the request if the operation failed."
    },
    "Base.1.0.CreateLimitReachedForResource": {
        "Message": "The create operation failed because the resource has reached the limit of possible resources.",
        "NumberOfArgs": 0,
        "Resolution": "Either delete resources and resubmit the request if the operation failed or do not resubmit the request."
    },
    "Base.1.0.ServiceShuttingDown": {
        "Message": "The operation failed because the service is shutting down and can no longer take incoming requests.",
        "NumberOfArgs": 0,
        "Resolution": "When the service becomes available, resubmit the request if the operation failed."
    },
    "Base.1.0.ServiceInUnknownState": {
        "Message": "The operation failed because the service is in an unknown state and can no longer take incoming requests.",
        "NumberOfArgs": 0,
        "Resolution": "Restart the service and resubmit the request if the operation failed."
    },
    "Base.1.0.NoValidSession": {
        "Message": "There is no valid session established with the implementation.",
        "NumberOfArgs": 0,
        "Resolution": "Establish as session before attempting any operations."
    },
    "Base.1.0.InsufficientPrivilege": {
        "Message": "There are insufficient privileges for the account or credentials associated with the current session to perform the requested operation.",
        "NumberOfArgs": 0,
        "Resolution": "Either abandon the operation or change the associated access rights and resubmit the request if the operation failed."
    },
    "Base.1.0.AccountModified": {
        "Message": "The account was successfully modifed.",
        "NumberOfArgs": 0,
        "Resolution": "No resolution is required."
    },
    "Base.1.0.AccountNotModified": {
        "Message": "The account modification request failed.",
        "NumberOfArgs": 0,
        "Resolution": "The modification may have failed due to permission issues or issues with the request body."
    },
    "Base.1.0.AccountRemoved": {
        "Message": "The account was successfully removed.",
        "NumberOfArgs": 0,
        "Resolution": "No resolution is required."
    },
    "Base.1.0.AccountForSessionNoLongerExists": {
        "Message": "The account for the current session has been removed, thus the current session has been removed as well.",
        "NumberOfArgs": 0,
        "Resolution": "Attempt to connect with a valid account."
    },
    "Base.1.0.InvalidObject": {
        "Message": "The object at %1 is invalid.",
        "NumberOfArgs": 1,
        "Resolution": "Either the object is malformed or the URI is not correct. Correct the condition and resubmit the request if it failed."
    },
    "Base.1.0.InternalError": {
        "Message": "The request failed due to an internal service error. The service is still operational.",
        "NumberOfArgs": 0,
        "Resolution": "Resubmit the request. If the problem persists, consider resetting the service."
    },
    "Base.1.0.UnrecognizedRequestBody": {
        "Message": "The service detected a malformed request body that it was unable to interpret.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the request body and resubmit the request if it failed."
    },
    "Base.1.0.ResourceMissingAtURI": {
        "Message": "The resource at the URI %1 was not found.",
        "NumberOfArgs": 1,
        "Resolution": "Place a valid resource at thr URI or correct the URI and resubmit the request."
    },
    "Base.1.0.ResourceAtUriInUnknownFormat": {
        "Message": "The resource at %1 is in a format not recognized by the service.",
        "NumberOfArgs": 1,
        "Resolution": "Place an image or resource or file that is recognized by the service at the URI."
    },
    "Base.1.0.ResourceAtUriUnauthorized": {
        "Message": "While accessing the resource at %1, the service received an authorization error %2.",
        "NumberOfArgs": 2,
        "Resolution": "Ensure that the appropriate access is provided for the service in order for it to access the URI."
    },
    "Base.1.0.CouldNotEstablishConnection": {
        "Message": "The service failed to establish a connection with the URI %1.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the URI contains a valid and reachable node name, protocol information and other URI components."
    },
    "Base.1.0.SourceDoesNotSupportProtocol": {
        "Message": "The other end of the connection at %1 does not support the specified protocol %2.",
        "NumberOfArgs": 2,
        "Resolution": "Change protocols or URIs."
    },
    "Base.1.0.AccessDenied": {
        "Message": "While attempting to establish a connection to %1, the service was denied access.",
        "NumberOfArgs": 1,
        "Resolution": "Attempt to ensure that the URI is correct and that the service has the appropriate credentials."
    },
    "Base.1.0.ServiceTemporarilyUnavailable": {
        "Message": "The service is temporarily unavailable. Retry in %1 seconds.",
        "NumberOfArgs": 1,
        "Resolution": "Wait for the indicated retry duration and retry the operation."
    },
    "Base.1.0.InvalidIndex": {
        "Message": "The Index %1 is not a valid offset into the array.",
        "NumberOfArgs": 1,
        "Resolution": "Verify the index value provided is within the bounds of the array."
    },
    "Base.1.0.PropertyValueModified": {
        "Message": "The property %1 was assigned the value %2 due to modification by the service.",
        "NumberOfArgs": 2,
        "Resolution": "No resolution is required."
    },
    //business error
    "FusionDirector.1.0.AuthenticationFailure": {
        "Message": "Incorrect username or password.",
        "NumberOfArgs": 0,
        "Resolution": "Provide a valid credential and try again."
    },
    "FusionDirector.1.0.MethodNotAllowed": {
        "Message": "The HTTP method is not allowed for resources.",
        "NumberOfArgs": 0,
        "Resolution": "Stop using this HTTP method."
    },
    "FusionDirector.1.0.NotAcceptable": {
        "Message": "The value specified in Accept Head is not supported.",
        "NumberOfArgs": 0,
        "Resolution": "Specify a valid value."
    },
    "FusionDirector.1.0.PreconditionFailed": {
        "Message": "Failed to specify the If-Match or If-Not-Modified precondition.",
        "NumberOfArgs": 0,
        "Resolution": "Specify a valid If-Match or If-Not-Modified value."
    },
    "FusionDirector.1.0.VersionFailed": {
        "Message": "Failed to specify the DirectorVersion precondition.",
        "NumberOfArgs": 0,
        "Resolution": "Specify a valid DirectorVersion value."
    },
    "FusionDirector.1.0.UnsupportedMediaType": {
        "Message": "The value specified in Content-Type is not supported.",
        "NumberOfArgs": 0,
        "Resolution": "Specify a valid value."
    },
    "FusionDirector.1.0.PreconditionRequired": {
        "Message": "The If-Match or If-Not-Modified precondition is required for this operation.",
        "NumberOfArgs": 0,
        "Resolution": "Specify If-Match or If-Not-Modified, and try again."
    },
    "FusionDirector.1.0.Timeout": {
        "Message": "The operation timed out.",
        "NumberOfArgs": 0,
        "Resolution": "Make sure the service is running properly and try again."
    },
    "FusionDirector.1.0.DBOperationFailed": {
        "Message": "DB operation failed.",
        "NumberOfArgs": 0,
        "Resolution": "Try again or contact technical support if the error persists."
    },
    "FusionDirector.1.0.ResponseOversize": {
        "Message": "The response body is oversized.",
        "NumberOfArgs": 0,
        "Resolution": "Reduce the response body by adjusting parameter values."
    },
    "FusionDirector.1.0.NotEnoughLicense": {
        "Message": "The server capacity exceeds the threshold.",
        "NumberOfArgs": 0,
        "Resolution": "Expand the capacity of the license server."
    },
    "FusionDirector.1.0.LicenseExpired": {
        "Message": "License expired.",
        "NumberOfArgs": 0,
        "Resolution": "Add a valid license and try again."
    },
    "FusionDirector.1.0.ArrayPropertyExcessLimit": {
        "Message": "The array size of property %1 exceeds %2.",
        "NumberOfArgs": 2,
        "Resolution": "Reduce the array size and try again."
    },
    "FusionDirector.1.0.TooManyError": {
        "Message": "Too many errors occur.",
        "NumberOfArgs": 0,
        "Resolution": "Fix the errors and try again."
    },
    "FusionDirector.1.0.FileNameError": {
        "Message": "The file name is invalid.",
        "NumberOfArgs": 0,
        "Resolution": "Modify the file name and try again."
    },
    "FusionDirector.1.0.FileTypeError": {
        "Message": "The file type is invalid.",
        "NumberOfArgs": 0,
        "Resolution": "Use the correct file type and try again."
    },
    "FusionDirector.1.0.FileSizeError": {
        "Message": "The file size is invalid.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the file size is within the supported range and try again."
    },
    "FusionDirector.1.0.CertDecipherFailed": {
        "Message": "Failed to decrypt the certificate.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the certificate password is correct and try again."
    },
    "FusionDirector.1.0.CertFormatError": {
        "Message": "Incorrect certificate format.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the certificate is in the X509 format and try again."
    },
    "FusionDirector.1.0.CertParseFailed": {
        "Message": "Parsing error.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the certificate is valid and try again."
    },
    "FusionDirector.1.0.CertHasBeenExpired": {
        "Message": "The certificate has expired.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the certificate is valid and try again."
    },
    "FusionDirector.1.0.CertNearlyExpired": {
        "Message": "The certificate is about to expire.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the certificate is valid for more than 30 days and try again."
    },
    "FusionDirector.1.0.CertIsNotCA": {
        "Message": "Non-root certificate.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the imported root certificate is correct and try again."
    },
    "FusionDirector.1.0.CertKeyUsageError": {
        "Message": "The key usage of the certificate is incorrect.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the key usage of the certificate contains the signature and try again."
    },
    "FusionDirector.1.0.CertSignAlgoNotMatch": {
        "Message": "The certificate signature algorithm does not match.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the certificate signature algorithm is SHA256WithRSA and try again."
    },
    "FusionDirector.1.0.CertPublicKeyFailed": {
        "Message": "Failed to parse the public key of the certificate.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the public key of the certificate is valid and try again."
    },
    "FusionDirector.1.0.CertNotMatchPriKey": {
        "Message": "The certificate and private key do not match.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the certificate matches the private key and try again."
    },
    "FusionDirector.1.0.CertOperaeteObjectFailed": {
        "Message": "Failed to make the certificate take effect.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the component corresponding to the effective certificate is normal and try again."
    },
    "FusionDirector.1.0.EnclosureNotFloatIP": {
        "Message": "The IP is not a floating IP address.",
        "NumberOfArgs": 0,
        "Resolution": "Use the floating IP address and try again."
    },
    "FusionDirector.1.0.EnclosureAlreadyClaim": {
        "Message": "The chassis has been managed by another system.",
        "NumberOfArgs": 0,
        "Resolution": "Stop adding this chassis or remove it from another system."
    },
    "FusionDirector.1.0.IDPoolSectionConflict": {
        "Message": "There is a conflict between the sections.",
        "NumberOfArgs": 0,
        "Resolution": "Fix the range of the sections and try again."
    },
    "FusionDirector.1.0.IDPoolSectionLimit": {
        "Message": "The number of sections exceeds the limit %1.",
        "NumberOfArgs": 1,
        "Resolution": "Reduce the number of sections and try again."
    },
    "FusionDirector.1.0.IDPoolIDLimit": {
        "Message": "The number of IDs in the section exceeds the limit %1.",
        "NumberOfArgs": 1,
        "Resolution": "Reduce the number of IDs and try again."
    },
    "FusionDirector.1.0.IDPoolRangeStartError": {
        "Message": "The end ID must be greater than or equal to the start ID.",
        "NumberOfArgs": 0,
        "Resolution": "Modify the section range and try again."
    },
    "FusionDirector.1.0.IDPoolMultiBroadCastMACInSection": {
        "Message": "Multi-broadcast exists in the sections.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that there is no multi-broadcast and try again."
    },
    "FusionDirector.1.0.IDPoolNotEnoughID": {
        "Message": "Not sufficient IDs in the pool.",
        "NumberOfArgs": 0,
        "Resolution": "Stop allocating IDs from the pool or add more IDs to the pool."
    },
    "FusionDirector.1.0.IDPoolKeyNotInPool.": {
        "Message": "The key does not exist in the pool.",
        "NumberOfArgs": 0,
        "Resolution": "Provide a valid key and try again."
    },
    "FusionDirector.1.0.IDPoolKeyFreed": {
        "Message": "The key has been freed.",
        "NumberOfArgs": 0,
        "Resolution": "Stop freeing this key."
    },
    "FusionDirector.1.0.IDPoolKeyAllocated": {
        "Message": "The key has been allocated.",
        "NumberOfArgs": 0,
        "Resolution": "Use another key and try again."
    },
    "FusionDirector.1.0.IDPoolIDConflict": {
        "Message": "The pool ID conflicts with the user ID.",
        "NumberOfArgs": 0,
        "Resolution": "Change the pool ID or user ID and try again."
    },
    "FusionDirector.1.0.IDPoolMethodNotSupported": {
        "Message": "This type of pool does not support this operation.",
        "NumberOfArgs": 0,
        "Resolution": "Stop this operation."
    },
    "FusionDirector.1.0.IDPoolMultipleOtherUserID": {
        "Message": "Duplicate user ID.",
        "NumberOfArgs": 0,
        "Resolution": "Select another user ID and try again."
    },
    "FusionDirector.1.0.IDPoolKeyNotMatchIPv4": {
        "Message": "The key does not match the IPv4 address.",
        "NumberOfArgs": 0,
        "Resolution": "Provide a valid key and try again."
    },
    "FusionDirector.1.0.IPCountExcessSubnet": {
        "Message": "The number of IPv4 addresses exceeds the number of subnets.",
        "NumberOfArgs": 0,
        "Resolution": "Reduce the number of IPv4 addresses and try again."
    },
    "FusionDirector.1.0.GatewayIncludedInSection": {
        "Message": "Gateway included in the section.",
        "NumberOfArgs": 0,
        "Resolution": "Provide the valid section or gateway and try again."
    },
    "FusionDirector.1.0.NetmaskIncludedInSection": {
        "Message": "Netmask included in the section.",
        "NumberOfArgs": 0,
        "Resolution": "Provide the valid section or netmask and try again."
    },
    "FusionDirector.1.0.IDPoolStartAndEndNotInSameNet": {
        "Message": "The start and end IPv4 addresses are not in the same subnet.",
        "NumberOfArgs": 0,
        "Resolution": "Provide the valid start and end IPv4 addresses or valid subnet and try again."
    },
    "FusionDirector.1.0.IDPoolStartAndGatewayNotInSameNet": {
        "Message": "The start IP address and gateway are not in the same subnet.",
        "NumberOfArgs": 0,
        "Resolution": "Provide the valid start IPv4 address and gateway or valid subnet, and try again."
    },
    "FusionDirector.1.0.IDPoolEndAndGatewayNotInSameNet": {
        "Message": "The end IP address and gateway are not in the same subnet.",
        "NumberOfArgs": 0,
        "Resolution": "Provide the valid end IPv4 address and gateway or valid subnet, and try again."
    },
    "FusionDirector.1.0.LicenseUnsupported": {
        "Message": "Invalid license.",
        "NumberOfArgs": 0,
        "Resolution": "Provide a valid license and try again."
    },
    "FusionDirector.1.0.RepeatTrapServersMemberID": {
        "Message": "Duplicate trap servers.",
        "NumberOfArgs": 0,
        "Resolution": "Delete duplicate items and try again."
    },
    "FusionDirector.1.0.SFTPPathError": {
        "Message": "SFTP path error.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the path and try again."
    },
    "FusionDirector.1.0.SFTPFolderCreateError": {
        "Message": "Failed to create the SFTP folder.",
        "NumberOfArgs": 0,
        "Resolution": "Try again or contact technical support if the error persists."
    },
    "FusionDirector.1.0.SFTPFolderPermissionError": {
        "Message": "SFTP folder permission error.",
        "NumberOfArgs": 0,
        "Resolution": "Try again or contact technical support if the error persists."
    },
    "FusionDirector.1.0.SFTPFolderRemoveError": {
        "Message": "Failed to remove the SFTP folder.",
        "NumberOfArgs": 0,
        "Resolution": "Try again or contact technical support if the error persists."
    },
    "FusionDirector.1.0.PlanningDataSNAndMacEmpty": {
        "Message": "SN and MAC all empty on index %1.",
        "NumberOfArgs": 1,
        "Resolution": "Provide SN or MAC, and try again."
    },
    "FusionDirector.1.0.PlanningDataPropertyExistInNetwork": {
        "Message": "The value %1 for the property %2 already exists in the network on index %3.",
        "NumberOfArgs": 3,
        "Resolution": "Remove the property and try again."
    },
    "FusionDirector.1.0.PlanningDataPropertyExistInDB": {
        "Message": "The value %1 for the property %2 already exists in the DB on index %3.",
        "NumberOfArgs": 3,
        "Resolution": "Remove the property and try again."
    },
    "FusionDirector.1.0.PlanningDataImportTableCountOutRange": {
        "Message": "The number of rows in the table exceeds the limit %1.",
        "NumberOfArgs": 1,
        "Resolution": "Reduce the table rows and try again."
    },
    "FusionDirector.1.0.PlanningDataImportCountOutRange": {
        "Message": "The number of data records exceeds the limit %1.",
        "NumberOfArgs": 1,
        "Resolution": "Delete unnecessary data records from the system."
    },
    "FusionDirector.1.0.PlanningDataPropertyValueFormatError": {
        "Message": "The format of the value %1 for the property %2 is incorrect and cannot be displayed properly on index %3.",
        "NumberOfArgs": 3,
        "Resolution": "Correct the value for the property in the request body and resubmit the request if the operation failed."
    },
    "FusionDirector.1.0.PlanningDataPropertyDuplicate": {
        "Message": "The value %1 for the property %2 was duplicated in the request on index %3 and %4.",
        "NumberOfArgs": 3,
        "Resolution": "Remove the duplicate property from the request body and resubmit the request if the operation failed."
    },
    "FusionDirector.1.0.PlanningDataPropertyValueLengthError": {
        "Message": "The length of %1 for the property %2 is error on index %3.",
        "NumberOfArgs": 3,
        "Resolution": "Correct the value for the property in the request body and resubmit the request if the operation failed."
    },
    "FusionDirector.1.0.PlanningDataIPAndGatewayNotSameNet": {
        "Message": "The IPv4 address and gateway are not in same subnet on index %1.",
        "NumberOfArgs": 3,
        "Resolution": "Correct the value for the property in the request body and resubmit the request if the operation failed."
    },
    "FusionDirector.1.0.PlanningDataVersionNotMatch": {
        "Message": "The version does not match.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the value for the property in the request body and resubmit the request if the operation failed."
    },
    "FusionDirector.1.0.PlanningDataIPAssigning": {
        "Message": "An IP address in the resource to be operated is being allocated.",
        "NumberOfArgs": 0,
        "Resolution": "Try again later."
    },
    "FusionDirector.1.0.PlanningDataImportCountNotMatch": {
        "Message": "The imported member quantity does not match the value of Count.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the value for the property in the request body and resubmit the request if the operation failed."
    },
    "FusionDirector.1.0.EventSmtpDisableErr": {
        "Message": "The SMTP service is not enabled.",
        "NumberOfArgs": 0,
        "Resolution": "Enable the service and try again."
    },
    "FusionDirector.1.0.EventSenderMailAddrErr": {
        "Message": "The mail address is invalid.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the mail address and try again."
    },
    "FusionDirector.1.0.EventMailCertErr": {
        "Message": "Mail certification error.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the mail certification and try again."
    },
    "FusionDirector.1.0.EventMailAuthErr": {
        "Message": "Mail authentication error.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the mail authentication and try again."
    },
    "FusionDirector.1.0.EventMailServerAddrErr": {
        "Message": "Failed to connect to the mail server.",
        "NumberOfArgs": 0,
        "Resolution": "Make sure the network is normal and try again."
    },
    "FusionDirector.1.0.AppConfigInvalidDomainName": {
        "Message": "Invalid domain name. ",
        "NumberOfArgs": 0,
        "Resolution": "Correct the domain name and try again."
    },
    "FusionDirector.1.0.AppConfigNoEnableDNSServers": {
        "Message": "The DNS server is not enabled.",
        "NumberOfArgs": 0,
        "Resolution": "Enable the DNS server and try again."
    },
    "FusionDirector.1.0.AppConfigInavlidIpv4DNSServer": {
        "Message": "Invalid IPv4 DNS server.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the IPv4 DNS server and try again."
    },
    "FusionDirector.1.0.AppConfigInavlidIpv6DNSServer": {
        "Message": "Invalid IPv6 DNS server.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the IPv6 DNS server and try again."
    },
    "FusionDirector.1.0.AppConfigDNSServerNotExist": {
        "Message": "The DNS server does not exist.",
        "NumberOfArgs": 0,
        "Resolution": "Provide a valid DNS server and try again."
    },
    "FusionDirector.1.0.AppConfigDNSServerAuthenticationErr": {
        "Message": "DNS server authentication error.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the DNS server authentication and try again."
    },
    "FusionDirector.1.0.AppConfigDNSServerKeyErr": {
        "Message": "DNS server key error.",
        "NumberOfArgs": 0,
        "Resolution": "Provide a valid key and try again."
    },
    "FusionDirector.1.0.AppConfigPartSuccess": {
        "Message": "Some operations failed.",
        "NumberOfArgs": 0,
        "Resolution": "Try again or contact technical support if the error persists."
    },
    "FusionDirector.1.0.AppConfigDeleteDNSServerFailed": {
        "Message": "Failed to remove the DNS server.",
        "NumberOfArgs": 0,
        "Resolution": "Try again or contact technical support if the error persists."
    },
    "FusionDirector.1.0.IAMPasswordExpired": {
        "Message": "Password expired.",
        "NumberOfArgs": 0,
        "Resolution": "Change the password."
    },
    "FusionDirector.1.0.IAMNameNotSatisfyComplexity": {
        "Message": "The user name does not meet the complexity requirements.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the user name and try again."
    },
    "FusionDirector.1.0.IAMPasswordNotSatisfyComplexity": {
        "Message": "The password does not meet the complexity requirements.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the password and try again."
    },
    "FusionDirector.1.0.IAMPasswordModifyNotSatisfyDuration": {
        "Message": "Failed to change the password in %1.",
        "NumberOfArgs": 1,
        "Resolution": "Stop this operation."
    },
    "FusionDirector.1.0.IAMUserLocked": {
        "Message": "The user has been locked.",
        "NumberOfArgs": 0,
        "Resolution": "Unlock the user and try again."
    },
    "FusionDirector.1.0.IAMUserInterfaceNotMatch": {
        "Message": "The user cannot be used in this interface.",
        "NumberOfArgs": 0,
        "Resolution": "Stop this operation."
    },
    "FusionDirector.1.0.BaselineMismatch": {
        "Message": "The baseline does not match.",
        "NumberOfArgs": 0,
        "Resolution": "Provide a valid value and try again."
    },
    "FusionDirector.1.0.BaselineServerNotExist": {
        "Message": "No server.",
        "NumberOfArgs": 0,
        "Resolution": "Stop this operation."
    },
    "FusionDirector.1.0.BaselineFormatError": {
        "Message": "The baseline format is incorrect.",
        "NumberOfArgs": 0,
        "Resolution": "Provide a valid baseline value and try again."
    },
    "FusionDirector.1.0.SSDPSNRepeat": {
        "Message": "The value %1 for the property %2 on index %3 repeats with index %4.",
        "NumberOfArgs": 4,
        "Resolution": "Correct the value and try again."
    },
    "FusionDirector.1.0.SSDPIPRepeat": {
        "Message": "The value %1 for the property %2 on index %3 repeats with index %4.",
        "NumberOfArgs": 4,
        "Resolution": "Correct the value and try again."
    },
    "FusionDirector.1.0.SSDPSNExistedInPool": {
        "Message": "The value %1 for the property %2 already exists in ipv4pool database on index %3.",
        "NumberOfArgs": 3,
        "Resolution": "Delete duplicate items and try again."
    },
    "FusionDirector.1.0..SSDPIPExistedInPool": {
        "Message": "The value %1 for the property %2 already exists in ipv4pool database on index %3.",
        "NumberOfArgs": 3,
        "Resolution": "Delete duplicate items and try again."
    },
    "FusionDirector.1.0.SSDPSNExistedInDB": {
        "Message": "The value %1 for the property %2 already exists in database on index %3.",
        "NumberOfArgs": 3,
        "Resolution": "Delete duplicate items and try again."
    },
    "FusionDirector.1.0.SSDPIPExistedInDB": {
        "Message": "The value %1 for the property %2 already exists in database on index %3.",
        "NumberOfArgs": 3,
        "Resolution": "Delete duplicate items and try again."
    },
    "FusionDirector.1.0.SSDPSNExistedInNetwork": {
        "Message": "The value %1 for the property %2 already exists in network on index %3.",
        "NumberOfArgs": 3,
        "Resolution": "Delete duplicate items and try again."
    },
    "FusionDirector.1.0.SSDPIPExistedInNetwork": {
        "Message": "The value %1 for the property %2 already exists in network on index %3.",
        "NumberOfArgs": 3,
        "Resolution": "Delete duplicate items and try again."
    },
    "FusionDirector.1.0.SSDPIPv4AddressAndGatewayNotSameNetwork": {
        "Message": "The value %1 for the property %2 and the value %3 for the property %4 are not in same network segment on index %5.",
        "NumberOfArgs": 5,
        "Resolution": "Correct the value and try again."
    },
    "FusionDirector.1.0.ClusterFloatingIPMismatchStaticIPNetwork": {
        "Message": "The floating IP %1 does not match the static IP network %2.",
        "NumberOfArgs": 2,
        "Resolution": "Ensure that the floating IP matches the static IP network and resubmit the request."
    },
    "FusionDirector.1.0.ClusterIPConflict": {
        "Message": "The IP address %1 has been used by other device.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the IP address is not used and resubmit the request."
    },
    "FusionDirector.1.0.ClusterStaticIPNotConfig": {
        "Message": "The floating IP cannot be configured because static IP on %1 is not configured.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the static IP is configured and resubmit the request."
    },
    "FusionDirector.1.0.ClusterNetworkDomainsMismatch": {
        "Message": "The network domains %1 do not match the cluster network domains %2.",
        "NumberOfArgs": 2,
        "Resolution": "Ensure that the network domains match with each other and resubmit the request."
    },
    "FusionDirector.1.0.ClusterNTPServerEmpty": {
        "Message": "The NTP server cannot be empty when enabled.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the NTP server is valid and resubmit the request."
    },
    "FusionDirector.1.0.ClusterNTPServerMustBeExternal": {
        "Message": "The NTP server %1 must be an external IP and cannot be an IP in current cluster.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the NTP server is valid and resubmit the request."
    },
    "FusionDirector.1.0.ClusterNTPServerUnreachable": {
        "Message": "The NTP server %1 is unreachable.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the NTP server is valid and resubmit the request."
    },
    "FusionDirector.1.0.ClusterMaxNodeNumReached": {
        "Message": "The number of nodes has reached the maximum %1.",
        "NumberOfArgs": 1,
        "Resolution": "Stop creating nodes."
    },
    "FusionDirector.1.0.ClusterRemoteNetworkDomainsMismatch": {
        "Message": "The remote cluster network domains %1 do not match the node network domains %2.",
        "NumberOfArgs": 2,
        "Resolution": "Ensure that the network domains match with each other and resubmit the request."
    },
    "FusionDirector.1.0.ClusterActionUnsupportedInCluster": {
        "Message": "The action %1 is not supported in cluster.",
        "NumberOfArgs": 1,
        "Resolution": "Do not repeat the operation as it is not supported in cluster."
    },
    "FusionDirector.1.0.PortalCaptchaFailed": {
        "Message": "Captcha verification failed.",
        "NumberOfArgs": 1,
        "Resolution": "Refresh the captcha and try it again."
    },
    "FusionDirector.1.0.DevDiscoveryIPNotSameNetError": {
        "Message": "The start IP and end IP in the request are not in the same network segment.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the IP addresses and try again."
    },
    "FusionDirector.1.0.DevDiscoverIPRangeError": {
        "Message": "The range of the start IP and end IP in the request is incorrect.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the IP addresses and try again."
    },
    "FusionDirector.1.0.DevDiscoverIPRangeHasMultiIP": {
        "Message": "The start IP and end IP in the request contains a multi-broadcast address.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the IP addresses and try again."
    },
    "FusionDirector.1.0.DevDiscoverUserNameOrPasswordEmptyError": {
        "Message": "The request user name or password is empty.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the value and try again."
    },
    "FusionDirector.1.0.DevDiscoverRangeHaveIntersection": {
        "Message": "The IP ranges in the request have intersections.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the value and try again."
    },
    "FusionDirector.1.0.IPConfigDHCPNoRecord": {
        "Message": "The IP address does not exist.",
        "NumberOfArgs": 0,
        "Resolution": "Correct the value and try again."
    },
    "FusionDirector.1.0.ServerProfileParaMissing": {
        "Message": "The request body does not contain the attribute %1.",
        "NumberOfArgs": 1,
        "Resolution": "If the request fails, modify the request body and try again."
    },
    "FusionDirector.1.0.ServerProfileParaError": {
        "Message": "The attribute %1 in the request body is incorrect.",
        "NumberOfArgs": 1,
        "Resolution": "If the request fails, modify the request body and try again."
    },
    "FusionDirector.1.0.ServerProfileParaInUse": {
        "Message": "Attribute %1: %2 is in use.",
        "NumberOfArgs": 2,
        "Resolution": "Modify the attribute value in the request body."
    },
    "FusionDirector.1.0.ServerProfileRaidControlErr": {
        "Message": "RAID controller card error. The error type is %1.",
        "NumberOfArgs": 1,
        "Resolution": "Modify the RAID controller card in the request body."
    },
    "FusionDirector.1.0.ServerProfileModelMissing": {
        "Message": "The server configuration template does not exist.",
        "NumberOfArgs": 0,
        "Resolution": "If the request fails, modify the request body and try again."
    },
    "FusionDirector.1.0.ServerProfileModelConfigNotSupport": {
        "Message": "The server configuration template does not support the configuration of %1.",
        "NumberOfArgs": 1,
        "Resolution": "If the request fails, modify the request body and try again."
    },
    "FusionDirector.1.0.ServerProfileRaidVolumnErr": {
        "Message": "RAID logical volume %1 attribute %2: The value %3 is incorrect.",
        "NumberOfArgs": 3,
        "Resolution": "If the request fails, modify the request body and try again."
    },
    "FusionDirector.1.0.ServerProfileMezzParaErrOne": {
        "Message": "Mezzanine card attribute %1: The value %2 is incorrect.",
        "NumberOfArgs": 2,
        "Resolution": "If the request fails, modify the request body and try again."
    },
    "FusionDirector.1.0.ServerProfileMezzParaErrTwo": {
        "Message": "Mezzanine card %1: %2 attribute %3: The value %4 is incorrect.",
        "NumberOfArgs": 4,
        "Resolution": "If the request fails, modify the request body and try again."
    },
    "FusionDirector.1.0.ServerProfileMezzParaErrThree": {
        "Message": "Mezzanine card %1: %2, %3: %4, attribute %5: The value %6 is incorrect.",
        "NumberOfArgs": 6,
        "Resolution": "If the request fails, modify the request body and try again."
    },
    "FusionDirector.1.0.ServerProfileMezzParaLess": {
        "Message": "The attribute %1 of the mezzanine card is missing.",
        "NumberOfArgs": 1,
        "Resolution": "If the request fails, add the missing attribute."
    },
    "FusionDirector.1.0.ServerProfileMezzParaExcess": {
        "Message": "The attribute %1 is not required for the mezzanine card.",
        "NumberOfArgs": 1,
        "Resolution": "If the request fails, delete the unnecessary attribute."
    },
    "FusionDirector.1.0.ServerProfileBmcConfigIPErr": {
        "Message": "The %1 IP address %2 is incorrect.",
        "NumberOfArgs": 2,
        "Resolution": "If the request fails, modify the request body and try again."
    },
    "FusionDirector.1.0.ServerProfileLdapSetRuleErr": {
        "Message": "The rule %1 is not enabled and cannot be set in the LDAP.",
        "NumberOfArgs": 1,
        "Resolution": "If the request fails, enable the rule and try again."
    },
    "FusionDirector.1.0.ServerProfileLdapTimeRuleErr": {
        "Message": "The time format in the login rule is incorrect.",
        "NumberOfArgs": 0,
        "Resolution": "If the request fails, modify the time format in the login rule."
    },
    "FusionDirector.1.0.FileNotExist": {
        "Message": "The file does not exist.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the file exists and try again."
    },
    "FusionDirector.1.0.FileDuplicated": {
        "Message": "The file already exists or a file with the same name exists.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the file is unique and try again."
    },
    "FusionDirector.1.0.FileContentError": {
        "Message": "The file content is invalid.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the file content is correct and try again."
    },
    "FusionDirector.1.0.DiskSpaceShortage": {
        "Message": "Insufficient disk space.",
        "NumberOfArgs": 0,
        "Resolution": "Free up more disk space and try again."
    },
    "FusionDirector.1.0.UpgradeDeviceNotUpgradeable": {
        "Message": "The version of the device is the same as that of the firmware package.",
        "NumberOfArgs": 0,
        "Resolution": "Use a later version and try again."
    },
    "FusionDirector.1.0.UpgradeAlreadyHasPlan": {
        "Message": "The device %1 has been bound to an upgrade plan.",
        "NumberOfArgs": 1,
        "Resolution": "Cancel the upgrade plan and try again."
    },
    "FusionDirector.1.0.EnclosureTempProfileNotSupport": {
        "Message": "A temporary chassis profile cannot be bound or a chassis profile has been bound.",
        "NumberOfArgs": 0,
        "Resolution": "Select another chassis profile and try again."
    },
    "FusionDirector.1.0.MetricServerStateError": {
        "Message": "Failed to obtain the statistics of the server in the current state.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the server state is correct and try again."
    },
    "FusionDirector.1.0.ClusterAlreadyInUpgrading": {
        "Message": "An upgrade is in progress in the system.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the upgrade is complete and try again."
    },
    "FusionDirector.1.0.ClusterVersionInconsistent": {
        "Message": "Versions of clustered nodes are inconsistent.",
        "NumberOfArgs": 0,
        "Resolution": "The versions of the nodes are inconsistent and the upgrade cannot be performed."
    },
    "FusionDirector.1.0.ClusterInitUnfinished": {
        "Message": "System initialization is not complete.",
        "NumberOfArgs": 0,
        "Resolution": "Try again later."
    },
    "FusionDirector.1.0.ClusterActivatedInvalid": {
        "Message": "The upgrade cannot take effect.",
        "NumberOfArgs": 0,
        "Resolution": "Perform the upgrade first, and then make the upgrade take effect."
    },
    "FusionDirector.1.0.ClusterAlreadyInBackuping": {
        "Message": "The system is being backed up.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the backup is complete and try again."
    },
    "FusionDirector.1.0.ClusterAlreadyInRestoring": {
        "Message": "The system is recovering.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the recovery is complete and try again."
    },
    "FusionDirector.1.0.ClusterPackageCheckFailed": {
        "Message": "Failed to check the compressed package.",
        "NumberOfArgs": 0,
        "Resolution": "Check the format and integrity of the backup package."
    },
    "FusionDirector.1.0.AppConfigProxyNoResponse": {
        "Message": "The proxy server does not respond.",
        "NumberOfArgs": 0,
        "Resolution": "Check the proxy settings or proxy server."
    },
    "FusionDirector.1.0.IAMPasscodeValidationError": {
        "Message": "Failed to verify the verification code.",
        "NumberOfArgs": 0,
        "Resolution": "Enter the verification code again. If the problem persists, regenerate a verification code."
    },
    "FusionDirector.1.0.EnclosureNotAllowedOnStandbyMM": {
        "Message": "The standby management module does not support this operation.",
        "NumberOfArgs": 0,
        "Resolution": "Stop the operation or perform the operation on the active management module."
    },
    "FusionDirector.1.0.BaselineServerBusy": {
        "Message": "Failed to create the task because the server %1 is being checked or confirmed.",
        "NumberOfArgs": 1,
        "Resolution": "Try again after the task is complete."
    },
    "FusionDirector.1.0.DeployServiceNullID": {
        "Message": "The parameter ID is empty.",
        "NumberOfArgs": 0,
        "Resolution": "Enter a parameter ID and try again."
    },
    "FusionDirector.1.0.DeployServiceVersionNotMatch": {
        "Message": "The OS version does not match the OS type.",
        "NumberOfArgs": 0,
        "Resolution": "Select a correct OS version and try again."
    },
    "FusionDirector.1.0.DeployServiceNullRequest": {
        "Message": "The request body is empty.",
        "NumberOfArgs": 0,
        "Resolution": "Enter a complete request and try again."
    },
    "FusionDirector.1.0.DeployServiceModelBinded": {
        "Message": "The image has been bound to a deployment template.",
        "NumberOfArgs": 0,
        "Resolution": "Delete the bound deployment template and try again."
    },
    "FusionDirector.1.0.DeployServiceFileTypeChanged": {
        "Message": "The image type cannot be changed.",
        "NumberOfArgs": 0,
        "Resolution": "Do not change the image type."
    },
    "FusionDirector.1.0.DeployServiceSyncDataNotFound": {
        "Message": "Configuration synchronization is not set.",
        "NumberOfArgs": 0,
        "Resolution": "Set the configuration synchronization and try again."
    },
    "FusionDirector.1.0.DeployServicePwdFormatError": {
        "Message": "The password format is incorrect.",
        "NumberOfArgs": 0,
        "Resolution": "Enter a valid password and try again."
    },
    "FusionDirector.1.0.DeployServiceNullPwd": {
        "Message": "The password is empty.",
        "NumberOfArgs": 0,
        "Resolution": "Enter the password and retry."
    },
    "FusionDirector.1.0.DeployServiceNullKeyBoard": {
        "Message": "The system keyboard type is not set.",
        "NumberOfArgs": 0,
        "Resolution": "Set the system keyboard type and try again."
    },
    "FusionDirector.1.0.DeployServiceKeyBoardNotMatch": {
        "Message": "The keyboard type does not match the OS type.",
        "NumberOfArgs": 0,
        "Resolution": "Set the system keyboard type correctly and try again."
    },
    "FusionDirector.1.0.DeployServiceNullLanguage": {
        "Message": "The system language is not set.",
        "NumberOfArgs": 0,
        "Resolution": "Set the system language and try again."
    },
    "FusionDirector.1.0.DeployServiceLanguageNotMatch": {
        "Message": "The system language does not match the OS type.",
        "NumberOfArgs": 0,
        "Resolution": "Set the system language correctly and try again."
    },
    "FusionDirector.1.0.DeployServiceNullTimeZone": {
        "Message": "The system time zone is not set.",
        "NumberOfArgs": 0,
        "Resolution": "Set the system time zone and try again."
    },
    "FusionDirector.1.0.DeployServiceTimeZoneNotMatch": {
        "Message": "The system time zone does not match the OS type.",
        "NumberOfArgs": 0,
        "Resolution": "Set the system time zone correctly and try again."
    },
    "FusionDirector.1.0.DeployServiceNullCDKey": {
        "Message": "The Windows OS installation key is not entered.",
        "NumberOfArgs": 0,
        "Resolution": "Enter the Windows OS installation key and try again."
    },
    "FusionDirector.1.0.DeployServiceCDKeyFormatError": {
        "Message": "The format of the Windows installation key is invalid.",
        "NumberOfArgs": 0,
        "Resolution": "Enter the Windows installation key based on the format requirements and try again."
    },
    "FusionDirector.1.0.DeployServiceNullPreHostName": {
        "Message": "The host name prefix is not configured.",
        "NumberOfArgs": 0,
        "Resolution": "Configure the host name prefix and try again."
    },
    "FusionDirector.1.0.DeployServiceNullPartitionPara": {
        "Message": "The system partition is not configured.",
        "NumberOfArgs": 0,
        "Resolution": "Configure the system partition and try again."
    },
    "FusionDirector.1.0.DeployServicePartitionParaFormatError": {
        "Message": "The format of the system partition configuration parameter is incorrect.",
        "NumberOfArgs": 0,
        "Resolution": "Configure the system partition based on the format requirements and try again."
    },
    "FusionDirector.1.0.ClusterNotInBackuping": {
        "Message": "No backup operation is being performed in the system.",
        "NumberOfArgs": 0,
        "Resolution": "You can cancel a backup operation only when the backup operation is being performed."
    },
    "FusionDirector.1.0.ClusterUnfinishedTasksExist": {
        "Message": "This operation is not allowed because there are unfinished tasks in the system.",
        "NumberOfArgs": 0,
        "Resolution": "Perform this operation after the unfinished tasks are complete."
    },
    "FusionDirector.1.0.ClusterNodeStateInvalid": {
        "Message": "This operation is not allowed in the current node state.",
        "NumberOfArgs": 0,
        "Resolution": "Check the node status and try again."
    },
    "FusionDirector.1.0.EventMailUnableToRelayErr": {
        "Message": "Failed to send the email. Enter a correct email address.",
        "NumberOfArgs": 0,
        "Resolution": "Enter a correct email address."
    },
    "FusionDirector.1.0.ClusterFloatingIPNotConfig": {
        "Message": "Before performing this operation, you need to configure the floating IP address of the cluster.",
        "NumberOfArgs": 0,
        "Resolution": "Configure the floating IP address and try again."
    },
    "FusionDirector.1.0.SwitchProfileError1": {
        "Message": "A network can be used only on one logical switch.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that a network is used only on one logical switch."
    },
    "FusionDirector.1.0.SwitchProfileError2": {
        "Message": "The (%1) port of the stack member is incorrect.",
        "NumberOfArgs": 1,
        "Resolution": "Check the configuration and try again."
    },
    "FusionDirector.1.0.SwitchProfileError3": {
        "Message": "The resource (%1) does not exist.",
        "NumberOfArgs": 1,
        "Resolution": "Check whether the resource is correct."
    },
    "FusionDirector.1.0.SwitchProfileError4": {
        "Message": "The port (%1) does not support the (%2) function.",
        "NumberOfArgs": 2,
        "Resolution": "Use another port and try again."
    },
    "FusionDirector.1.0.SwitchProfileError5": {
        "Message": "The SwitchProfile is in use and cannot be deleted.",
        "NumberOfArgs": 0,
        "Resolution": "Do not delete a SwitchProfile that is in use."
    },
    "FusionDirector.1.0.SwitchProfileError6": {
        "Message": "The resource (%1) already exists.",
        "NumberOfArgs": 1,
        "Resolution": "The resources cannot be the same."
    },
    "FusionDirector.1.0.SwitchProfileError7": {
        "Message": "The server network port does not have a corresponding internal switch port.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the switch module in the corresponding slot is in position."
    },
    "FusionDirector.1.0.SwitchProfileError8": {
        "Message": "The resource (%1) has been used.",
        "NumberOfArgs": 1,
        "Resolution": "Please release it first."
    },
    "FusionDirector.1.0.SwitchProfileError9": {
        "Message": "The port type is incompatible with the network type.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the port type is compatible with the network type."
    },
    "FusionDirector.1.0.SwitchProfileError10": {
        "Message": "When the MonitorLink function is enabled for the uplink port group, the server network port cannot be associated with multiple uplink port groups.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the server network port is associated with only one uplink port group or the MonitorLink function is disabled for the uplink port group."
    },
    "FusionDirector.1.0.SwitchProfileError11": {
        "Message": "The SmartLink function has been enabled for the uplink port group and cannot be associated with the storage network.",
        "NumberOfArgs": 0,
        "Resolution": "Disable the SmartLink function for the uplink port group."
    },
    "FusionDirector.1.0.SwitchProfileError12": {
        "Message": "The port cannot be associated with the network where the tunnel function is enabled and any other network at the same time.",
        "NumberOfArgs": 0,
        "Resolution": "Delete the associated network first."
    },
    "FusionDirector.1.0.SwitchProfileError13": {
        "Message": "A port can be associated with only one storage network.",
        "NumberOfArgs": 0,
        "Resolution": "Do not associate a port with multiple storage networks."
    },
    "FusionDirector.1.0.SwitchProfileError14": {
        "Message": "The uplink port group (%1) has been associated with a storage network. The flow control function cannot be enabled for its member ports.",
        "NumberOfArgs": 1,
        "Resolution": "Disable the flow control function."
    },
    "FusionDirector.1.0.SwitchProfileError15": {
        "Message": "An Ethernet cannot be associated with multiple uplink port groups at the same time.",
        "NumberOfArgs": 0,
        "Resolution": "Do not associate an Ethernet with multiple uplink port groups."
    },
    "FusionDirector.1.0.SwitchProfileError16": {
        "Message": "The VLAN ID of a Flush packet configured in the uplink port group (%1) must be the VLAN ID of the associated network.",
        "NumberOfArgs": 1,
        "Resolution": "Select the VLAN ID of the network associated with the uplink port group as the VLAN ID of the Flush packet."
    },
    "FusionDirector.1.0.SwitchProfileError17": {
        "Message": "The network does not support the default VLAN.",
        "NumberOfArgs": 0,
        "Resolution": "Do not set the network as the default VLAN."
    },
    "FusionDirector.1.0.SwitchProfileError18": {
        "Message": "Only one default VLAN can be set for a port.",
        "NumberOfArgs": 0,
        "Resolution": "Do not set multiple default VLANs on a port."
    },
    "FusionDirector.1.0.SwitchProfileError19": {
        "Message": "The VLAN ID cannot be empty.",
        "NumberOfArgs": 0,
        "Resolution": "Enter a correct VLAN ID."
    },
    "FusionDirector.1.0.SwitchProfileError20": {
        "Message": "The downlink port FCoE VLAN ID cannot be empty.",
        "NumberOfArgs": 0,
        "Resolution": "Enter a correct VLAN ID."
    },
    "FusionDirector.1.0.SwitchProfileError21": {
        "Message": "The FSB function cannot be enabled for a network that is connected to a storage array.",
        "NumberOfArgs": 0,
        "Resolution": "Do not enable the FSB function for a network that is connected to a storage array."
    },
    "FusionDirector.1.0.SwitchProfileError22": {
        "Message": "The FCoE VLAN IDs of the uplink and downlink ports are inconsistent.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the uplink and downlink ports have the same FCoE VLAN ID."
    },
    "FusionDirector.1.0.SwitchProfileError23": {
        "Message": "The uplink port FCoE VLAN ID cannot be empty.",
        "NumberOfArgs": 0,
        "Resolution": "Enter a correct VLAN ID."
    },
    "FusionDirector.1.0.SwitchProfileError24": {
        "Message": "The UserZoneEnable field cannot be empty.",
        "NumberOfArgs": 0,
        "Resolution": "Enter a correct value."
    },
    "FusionDirector.1.0.SwitchProfileError25": {
        "Message": "The DCBEnable field cannot be empty.",
        "NumberOfArgs": 0,
        "Resolution": "Enter a correct value."
    },
    "FusionDirector.1.0.SwitchProfileError26": {
        "Message": "The DcbxEnable field cannot be empty.",
        "NumberOfArgs": 0,
        "Resolution": "Enter a correct value."
    },
    "FusionDirector.1.0.SwitchProfileError27": {
        "Message": "The DCB function has been enabled for the network, and an ETS template must be configured.",
        "NumberOfArgs": 0,
        "Resolution": "Configure an ETS template."
    },
    "FusionDirector.1.0.SwitchProfileError28": {
        "Message": "The DCBX version cannot be empty.",
        "NumberOfArgs": 0,
        "Resolution": "Enter the correct DCBX version."
    },
    "FusionDirector.1.0.SwitchProfileError29": {
        "Message": "No zone is created.",
        "NumberOfArgs": 0,
        "Resolution": "Create a zone."
    },
    "FusionDirector.1.0.SwitchProfileError30": {
        "Message": "The uplink port group (%1) is not associated with the current network and cannot be set as a zone member.",
        "NumberOfArgs": 1,
        "Resolution": "Associate the uplink port group with the current network."
    },
    "FusionDirector.1.0.SwitchProfileError31": {
        "Message": "The network port (%1) of the server is not associated with the current network and cannot be set as a zone member.",
        "NumberOfArgs": 1,
        "Resolution": "Associate the network port of the server with the current network."
    },
    "FusionDirector.1.0.SwitchProfileError32": {
        "Message": "The internal switch port (%1) has been configured as a link aggregation port.",
        "NumberOfArgs": 1,
        "Resolution": "Delete the link aggregation port configuration first."
    },
    "FusionDirector.1.0.SwitchProfileError33": {
        "Message": "The internal switch port (%1) has been configured as a stack port.",
        "NumberOfArgs": 1,
        "Resolution": "Delete the stack port configuration first."
    },
    "FusionDirector.1.0.SwitchProfileError34": {
        "Message": "The internal switch port (%1) has been configured as an active-active detection port.",
        "NumberOfArgs": 1,
        "Resolution": "Delete the active-active detection port configuration first."
    },
    "FusionDirector.1.0.SwitchProfileError35": {
        "Message": "The port has been added to another uplink port group.",
        "NumberOfArgs": 0,
        "Resolution": "Delete it from the uplink port group first."
    },
    "FusionDirector.1.0.SwitchProfileError36": {
        "Message": "An uplink port group has been created for the logical switch.",
        "NumberOfArgs": 0,
        "Resolution": "Delete the uplink port group first."
    },
    "FusionDirector.1.0.SwitchProfileError37": {
        "Message": "The logical switch to which the uplink port group belongs cannot be changed.",
        "NumberOfArgs": 0,
        "Resolution": "Do not change the logical switch to which the uplink port group belongs."
    },
    "FusionDirector.1.0.SwitchProfileError38": {
        "Message": "The uplink port group (%1) has been added to the customized zone of the network (%2).",
        "NumberOfArgs": 2,
        "Resolution": "Delete it from the zone first."
    },
    "FusionDirector.1.0.SwitchProfileError39": {
        "Message": "The uplink port group has been associated with the network (%1).",
        "NumberOfArgs": 2,
        "Resolution": "Cancel the association first."
    },
    "FusionDirector.1.0.SwitchProfileError40": {
        "Message": "The NIC (%1) is enabled with multiple channels. Therefore, the corresponding internal switch ports cannot be used to create a link aggregation group.",
        "NumberOfArgs": 1,
        "Resolution": "Delete the link aggregation group."
    },
    "FusionDirector.1.0.SwitchProfileError41": {
        "Message": "The port type does not match the uplink port group type.",
        "NumberOfArgs": 0,
        "Resolution": "Select a port that matches the type."
    },
    "FusionDirector.1.0.SwitchProfileError42": {
        "Message": "Member ports in the uplink port group do not belong to the same logical switch.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that all member ports in the uplink port group belong to the same logical switch."
    },
    "FusionDirector.1.0.SwitchProfileError43": {
        "Message": "Only the panel port can be added to the uplink port group.",
        "NumberOfArgs": 0,
        "Resolution": "Add a panel port to the uplink port group."
    },
    "FusionDirector.1.0.SwitchProfileError44": {
        "Message": "The port (%1) has been configured as a stack port and cannot be added to an uplink port group.",
        "NumberOfArgs": 1,
        "Resolution": "Delete the stack port configuration first."
    },
    "FusionDirector.1.0.SwitchProfileError45": {
        "Message": "Port (%1) has been configured as an active-active detection port and cannot be added to an uplink port group.",
        "NumberOfArgs": 1,
        "Resolution": "Delete the active-active detection port configuration first."
    },
    "FusionDirector.1.0.SwitchProfileError46": {
        "Message": "The port cannot be added to the uplink port group repeatedly.",
        "NumberOfArgs": 0,
        "Resolution": "Do not add the port to the uplink port group repeatedly."
    },
    "FusionDirector.1.0.SwitchProfileError47": {
        "Message": "The ports to be added to the same uplink port group must have the same rate.",
        "NumberOfArgs": 0,
        "Resolution": "Do not add ports with different rates to the same uplink port group."
    },
    "FusionDirector.1.0.SwitchProfileError48": {
        "Message": "There is no active member port.",
        "NumberOfArgs": 0,
        "Resolution": "Add an active member port."
    },
    "FusionDirector.1.0.SwitchProfileError49": {
        "Message": "The SmartLink function is disabled, and the passive member port cannot be added.",
        "NumberOfArgs": 0,
        "Resolution": "Enable the SmartLink function."
    },
    "FusionDirector.1.0.SwitchProfileError50": {
        "Message": "The SmartLink function is enabled, but no passive member port is available.",
        "NumberOfArgs": 0,
        "Resolution": "Add a passive member port."
    },
    "FusionDirector.1.0.SwitchProfileError51": {
        "Message": "The type of the uplink port group cannot be empty.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the type of the uplink port group is specified."
    },
    "FusionDirector.1.0.SwitchProfileError52": {
        "Message": "When the uplink port group is of the FC type, MonitorLink and link aggregation cannot be enabled.",
        "NumberOfArgs": 0,
        "Resolution": "Disable the MonitorLink and link aggregation functions."
    },
    "FusionDirector.1.0.SwitchProfileError53": {
        "Message": "When the uplink port group is of the FC type, the passive member port cannot be added.",
        "NumberOfArgs": 0,
        "Resolution": "Delete the member port."
    },
    "FusionDirector.1.0.SwitchProfileError54": {
        "Message": "When the uplink port group is of the FCoE type, SmartLink cannot be enabled.",
        "NumberOfArgs": 0,
        "Resolution": "Disable the SmartLink function."
    },
    "FusionDirector.1.0.SwitchProfileError55": {
        "Message": "The MonitorLink function cannot be enabled on a stacked logical switch.",
        "NumberOfArgs": 0,
        "Resolution": "Disable the MonitorLink function."
    },
    "FusionDirector.1.0.SwitchProfileError56": {
        "Message": "If the uplink port group has multiple member ports, the link aggregation function must be enabled.",
        "NumberOfArgs": 0,
        "Resolution": "Enable the link aggregation function."
    },
    "FusionDirector.1.0.SwitchProfileError57": {
        "Message": "The number of networks associated with the server network port has reached the maximum.",
        "NumberOfArgs": 0,
        "Resolution": "Do not associate with other networks."
    },
    "FusionDirector.1.0.SwitchProfileError58": {
        "Message": "All stack ports on the same logical switch must have the same rate.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that all stack ports on the same logical switch have the same rate."
    },
    "FusionDirector.1.0.SwitchProfileError59": {
        "Message": "Priority group 15 does not support DRR or DRR weight.",
        "NumberOfArgs": 0,
        "Resolution": "Do not configure DRR weight for priority group 15."
    },
    "FusionDirector.1.0.SwitchProfileError60": {
        "Message": "When the uplink port group is of the FC type, SmartLink cannot be enabled.",
        "NumberOfArgs": 0,
        "Resolution": "Disable the SmartLink function."
    },
    "FusionDirector.1.0.SwitchProfileError61": {
        "Message": "FC logical switches can use only FC networks.",
        "NumberOfArgs": 0,
        "Resolution": "Use an FC network."
    },
    "FusionDirector.1.0.SwitchProfileError62": {
        "Message": "The FCoE VLAN of the uplink port cannot be the same as the FCoE VLAN of the downlink port.",
        "NumberOfArgs": 0,
        "Resolution": "Use different FCoE VLANs."
    },
    "FusionDirector.1.0.SwitchProfileError63": {
        "Message": "The number of storage devices used by the logical switch has reached the maximum.",
        "NumberOfArgs": 0,
        "Resolution": "Do not associate with other storage networks."
    },
    "FusionDirector.1.0.SwitchProfileError64": {
        "Message": "The logical switch (%1) already uses the network that contains the VLAN (%2). Therefore, the network that contains the VLAN cannot be used repeatedly.",
        "NumberOfArgs": 2,
        "Resolution": "Do not use the network that contains the VLAN repeatedly."
    },
    "FusionDirector.1.0.SwitchProfileError65": {
        "Message": "The NIC (%1) cannot use a tunnel network and a non-tunnel network at the same time.",
        "NumberOfArgs": 1,
        "Resolution": "Do not use both a tunnel network and a non-tunnel network on the same NIC."
    },
    "FusionDirector.1.0.SwitchProfileError66": {
        "Message": "FCoE VLANcannot be configured because FCoE is not enabled on the network.",
        "NumberOfArgs": 0,
        "Resolution": "Do not configure FCoE VLAN."
    },
    "FusionDirector.1.0.SwitchProfileError67": {
        "Message": "MAP VLAN cannot be configured for a network in tunnel mode.",
        "NumberOfArgs": 0,
        "Resolution": "Do not configure MAP VLAN."
    },
    "FusionDirector.1.0.SwitchProfileError68": {
        "Message": "FC networks are not allowed for Ethernet and FCoE logical switches.",
        "NumberOfArgs": 0,
        "Resolution": "Do not use FC networks."
    },
    "FusionDirector.1.0.SwitchProfileError69": {
        "Message": "The SmartLink switchback function has been enabled, and the SmartLink switchback time must be set.",
        "NumberOfArgs": 0,
        "Resolution": "Set the SmartLink switchback time."
    },
    "FusionDirector.1.0.SwitchProfileError70": {
        "Message": "The Flush packet sending function of SmartLink has been enabled, and the VLAN ID of Flush packets must be set.",
        "NumberOfArgs": 0,
        "Resolution": "Set the VLAN ID of Flush packets."
    },
    "FusionDirector.1.0.SwitchProfileError71": {
        "Message": "The MonitorLink switchback function has been enabled, and the MonitorLink switchback time must be set.",
        "NumberOfArgs": 0,
        "Resolution": "Set the MonitorLink switchback time."
    },
    "FusionDirector.1.0.SwitchProfileError72": {
        "Message": "The FCoE function has been enabled for the NIC (%1), and networks in tunnel mode cannot be used.",
        "NumberOfArgs": 1,
        "Resolution": "Do not use networks in tunnel mode on the NIC on which the FCoE function is enabled."
    },
    "FusionDirector.1.0.SwitchProfileError73": {
        "Message": "The zone member must be unique.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the zone member is unique."
    },
    "FusionDirector.1.0.SwitchProfileError74": {
        "Message": "The server network ports of the same physical port cannot be associated with tunnel networks of the same VLAN ID.",
        "NumberOfArgs": 0,
        "Resolution": "Do not associate tunnel networks of the same VLAN ID."
    },
    "FusionDirector.1.0.SwitchProfileError75": {
        "Message": "The server network ports connected to the same internal link aggregation group must use the same default VLAN ID.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the same default VLAN ID is used."
    },
    "FusionDirector.1.0.SwitchProfileError76": {
        "Message": "If the DCB function is enabled on the network, the PFC mode must be set.",
        "NumberOfArgs": 0,
        "Resolution": "Set the PFC mode."
    },
    "FusionDirector.1.0.SwitchProfileError77": {
        "Message": "When the PFC mode is set to automatic, the DCBX function must be enabled.",
        "NumberOfArgs": 0,
        "Resolution": "Enable the DCBX function."
    },
    "FusionDirector.1.0.SwitchProfileError78": {
        "Message": "The SmartLink function has been enabled, and the switch delay must be set.",
        "NumberOfArgs": 0,
        "Resolution": "Set the switch delay."
    },
    "FusionDirector.1.0.SwitchProfileError79": {
        "Message": "The zone name cannot be empty.",
        "NumberOfArgs": 0,
        "Resolution": "Set the zone name."
    },
    "FusionDirector.1.0.SwitchProfileError80": {
        "Message": "The same mapping VLAN ID (%1) cannot be used.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that a port does not use the same mapping VLAN ID."
    },
    "FusionDirector.1.0.SwitchProfileError81": {
        "Message": "The network connected to the internal EthTrunk cannot be set to the default VLAN and non-default VLAN at the same time.",
        "NumberOfArgs": 0,
        "Resolution": "Do not set the same network to the default VLAN and non-default VLAN at the same time."
    },
    "FusionDirector.1.0.SwitchProfileError82": {
        "Message": "VLAN 1 cannot be used because FCoE has been enabled for the server network port.",
        "NumberOfArgs": 0,
        "Resolution": "Do not use VLAN 1."
    },
    "FusionDirector.1.0.SwitchProfileError83": {
        "Message": "The model of the flexible card changes, which causes network configuration conflicts. In this case, delete the uplink configuration of the flexible card. The flexible card in the following slot is changed: %1",
        "NumberOfArgs": 1,
        "Resolution": "Delete the uplink configuration of the flexible card."
    },
    "FusionDirector.1.0.SwitchProfileError84": {
        "Message": "The switch module model changes, which causes network configuration conflicts. Are you sure you want to forcibly delete the conflicting configurations? The switch module in the following slot is changed: %1",
        "NumberOfArgs": 1,
        "Resolution": "Are you sure you want to forcibly delete the conflicting configurations?"
    },
    "FusionDirector.1.0.SwitchProfileError85": {
        "Message": "The server network port changes, which causes network configuration conflicts. Are you sure you want to forcibly delete the conflicting configurations? The server network port in the following slot is changed: %1",
        "NumberOfArgs": 1,
        "Resolution": "Are you sure you want to forcibly delete the conflicting configurations?"
    },
    "FusionDirector.1.0.SwitchProfileError86": {
        "Message": "The network is in use. Are you sure you want to forcibly delete it?",
        "NumberOfArgs": 0,
        "Resolution": "Are you sure you want to forcibly delete it?"
    },
    "FusionDirector.1.0.SwitchProfileError87": {
        "Message": "The uplink port group has been associated with a network. Are you sure you want to forcibly delete it?",
        "NumberOfArgs": 0,
        "Resolution": "Are you sure you want to forcibly delete it?"
    },
    "FusionDirector.1.0.SwitchProfileError88": {
        "Message": "The internal switch port (%1) has been connected to an FCoE network port, and the traffic control function cannot be enabled.",
        "NumberOfArgs": 1,
        "Resolution": "Disable the traffic control function."
    },
    "FusionDirector.1.0.SwitchProfileError89": {
        "Message": "The total number of networks cannot exceed %1.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the number of networks does not exceed the maximum."
    },
    "FusionDirector.1.0.SwitchProfileError90": {
        "Message": "The number of networks that can be used by a logical switch cannot exceed %1.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the number of networks used by each logical switch does not exceed the maximum."
    },
    "FusionDirector.1.0.NetworkLoginLockedErr": {
        "Message": "Device locked.",
        "NumberOfArgs": 0,
        "Resolution": "Try again 6 minutes later."
    },
    "FusionDirector.1.0.SSDPFDNotExistedInNetwork": {
        "Message": "The FusionDirector (SN: %1) node does not exist on the network.",
        "NumberOfArgs": 1,
        "Resolution": "Correct the settings and try again."
    },
    "FusionDirector.1.0.SSDPFDNodeIDAndSNNotMatch": {
        "Message": "The SN: %1 does not match the Node ID: %2.",
        "NumberOfArgs": 2,
        "Resolution": "Correct the settings and try again."
    },
    "FusionDirector.1.0.SwitchProfileError91": {
        "Message": "The profile cannot be applied because a packet tracing task is running.",
        "NumberOfArgs": 0,
        "Resolution": "Stop packet tracing first."
    },
    "FusionDirector.1.0.SwitchProfileError92": {
        "Message": "The NIC of the target slot (%1) is inconsistent with that of the source slot.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the NIC of the target slot (%1) is consistent with that of the source slot."
    },
    "FusionDirector.1.0.SwitchProfileError93": {
        "Message": "The internal port link aggregation configuration of the target slot (%1) is inconsistent with that of the source slot.",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the internal port link aggregation configuration of the target slot (%1) is consistent with that of the source slot."
    },
    "FusionDirector.1.0.SwitchProfileError94": {
        "Message": "The network cannot be associated with both FCoE and FC uplink port groups.",
        "NumberOfArgs": 0,
        "Resolution": "Do not associate a network with FCoE and FC uplink port groups at the same time."
    },
    "FusionDirector.1.0.SwitchProfileError95": {
        "Message": "The logical switch has network connection configurations, and the stacking relationship cannot be modified. Are you sure you want to forcibly delete these configurations?",
        "NumberOfArgs": 0,
        "Resolution": "Are you sure you want to forcibly delete it?"
    },
    "FusionDirector.1.0.SwitchMonitorError1": {
        "Message": "The profile is being applied. Packet tracing cannot be performed.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the configuration is complete."
    },
    "FusionDirector.1.0.UpgradeBaselineNameDuplicate": {
        "Message": "The baseline name already exists.",
        "NumberOfArgs": 1,
        "Resolution": "Change the baseline name and try again."
    },
    "FusionDirector.1.0.VMMgmtVcenterConnectError": {
        "Message": "Failed to connect to vCenter.",
        "NumberOfArgs": 0,
        "Resolution": "Check the connection."
    },
    "FusionDirector.1.0.VMMgmtVcenterCertError": {
        "Message": "The vCenter certificate is not imported or the imported certificate is incorrect.",
        "NumberOfArgs": 0,
        "Resolution": "Import a correct vCenter certificate."
    },
    "FusionDirector.1.0.OperationNotSupportedOnState": {
        "Message": "The current status of the object does not support this operation.",
        "NumberOfArgs": 0,
        "Resolution": "Wait until the object is in the proper state and try again."
    },
    "FusionDirector.1.0.ServerProfileFileErr": {
        "Message": "Failed to import the file because the file contains the %1 error.",
        "NumberOfArgs": 1,
        "Resolution": "Modify the file and try again."
    },
    "FusionDirector.1.0.SwitchProfileError96": {
        "Message": "The customized zone of the network %1 does not have member ports.",
        "NumberOfArgs": 1,
        "Resolution": "Add member ports or delete the customized zone."
    },
    "FusionDirector.1.0.SwitchProfileError97": {
        "Message": "The resource (%1) has been used by 2%.",
        "NumberOfArgs": 2,
        "Resolution": "Release the resource first."
    },
    "FusionDirector.1.0.SwitchProfileError98": {
        "Message": "The chassis profile is inconsistent with the switch module configuration. The inconsistent slot list is as follows: %1",
        "NumberOfArgs": 1,
        "Resolution": "Ensure that the profile is consistent with the switch module configuration and submit the request again."
    },
    "FusionDirector.1.0.IAMTestLDAPConnectionFailed": {
        "Message": "Failed to test connectivity.",
        "NumberOfArgs": 0,
        "Resolution": "Ensure that the domain controller information is correctly configured and try again."
    }
    /***************************FD end**********************************/


}

/**
 * 获取错误代码
 * @param  ret 
 * @returns  errorMsg
 */
function getErrorMsg(ret) {
    var lang = localStorage.getItem('lang');
    if (ret.code == '-1') {
        if (ret.data.length == 0 || ret.data[0].data === undefined || ret.data[0].data.error === undefined) {
            return ret.msg;
        }
        var errorInfo = ret.data[0].data.error['@Message.ExtendedInfo'][0];
        var messageId = errorInfo.MessageId;
        var messageArgs = errorInfo.MessageArgs;
        if (lang === 'zhCN') {
            var msg = errorCode_zh_CN[messageId];
            if (!msg) {
                if (messageId == undefined) {
                    return errorInfo.Message;
                }
                //return messageId + ":" + errorInfo.Message;
                return errorCode_zh_CN['UnkownMessageId']
            }
            if (msg.Message === undefined) {
                return msg;
            }
            if (msg.NumberOfArgs === undefined || msg.NumberOfArgs == 0) {
                return msg.Message + msg.Resolution;
            }
            var content = '';
            if (msg.NumberOfArgs <= messageArgs.length) {
                content = msg.Message;
                for (var i = 1; i < msg.NumberOfArgs + 1; i++) {
                    content = content.replace('%' + i + '', messageArgs[i - 1]);
                }
                return content + msg.Resolution;
            }

            return messageId ? messageId : "" + errorInfo.Message;
        } else {
            var msg = errorCode_en[messageId];
            if (!msg) {
                if (messageId == undefined) {
                    return errorInfo.Message;
                }
                //return messageId + ":" + errorInfo.Message;
                return errorCode_en['UnkownMessageId']
            }
            if (msg.Message === undefined) {
                return msg;
            }
            if (msg.NumberOfArgs === undefined || msg.NumberOfArgs == 0) {
                return msg.Message + msg.Resolution;
            }
            var content = '';
            if (msg.NumberOfArgs <= messageArgs.length) {
                content = msg.Message;
                for (var i = 1; i < msg.NumberOfArgs + 1; i++) {
                    content = content.replace('%' + i + '', messageArgs[i - 1]);
                }
                return content + msg.Resolution;
            }
            return messageId ? messageId : "" + errorInfo.Message;
        }
    } else {
        if (lang === 'zhCN') {
            var msg = errorCode_zh_CN[ret.code];
            if (msg) {
                return msg;
            }
            return ret.code
        }
        var msg = errorCode_en[ret.code];
        if (msg) {
            return msg;
        }
        return ret.code
    }
}