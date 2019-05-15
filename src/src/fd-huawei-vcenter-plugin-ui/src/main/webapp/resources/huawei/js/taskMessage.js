var messageZhCN = {
    "Id": "Base.1.0.",
    "Language": "zh",
    "Messages": [{
            "type": 'Base.1.0.Success',
            "Message": "成功完成请求",
            "NumberOfArgs": 0,
            "Resolution": "无"

        },
        {
            "type": 'Base.1.0.GeneralError',
            "Message": "发生了内部错误。",
            "NumberOfArgs": 0,
            "Resolution": "错误详细请联系华为工程师定位。"
        },
        {
            "type": "Base.1.0.Created",
            "Message": "已成功创建资源",
            "NumberOfArgs": 0,
            "Resolution": "无"
        },
        {
            "type": 'Base.1.0.PropertyDuplicate',
            "Message": "发生了内部错误。请参见请求中的属性{1}已被复制。",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "从请求正文中删除重复属性, 并在操作失败时重新提交请求."
        },
        {
            "type": "Base.1.0.PropertyUnknown",
            "Message": "属性{1}不在资源的有效属性列表中",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "从请求正文中删除未知属性, 并在操作失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.PropertyValueTypeError",
            "Message": "属性{2}的值{1}与属性可以接受的类型不同。",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "更正请求正文中的属性值, 并在操作失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.PropertyValueFormatError",
            "Message": "属性{2}的值{1} 的格式与属性所能接受的不同",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "更正请求正文中的属性值, 并在操作失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.PropertyValueNotInList",
            "Message": "属性{2}的值{1}不在可接受值的列表中。",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "从枚举列表中选择一个值, 如果操作失败, 实现可以支持并重新提交请求。"
        },
        {
            "type": "Base.1.0.PropertyNotWritable",
            "Message": "属性{1}是只读属性, 无法为其赋值。",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "从请求正文中移除该属性, 并在操作失败时重新提交请求。"
        },


        {
            "type": "Base.1.0.PropertyMissing",
            "Message": "属性{1}是只读属性, 无法为其赋值。",
            "NumberOfArgs": 1,
            "ParamTypes": ["string"],
            "Resolution": "确保该属性在请求正文中并具有有效值并在操作失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.MalformedJSON",
            "Message": "提交的请求正文是格式错误的 JSON, 无法由接收服务分析。",
            "NumberOfArgs": 0,
            "Resolution": "请确保请求正文是有效的 JSON 并重新提交请求。"
        },
        {
            "type": "Base.1.0.ActionNotSupported",
            "Message": "该资源不支持操作{1}。",
            "NumberOfArgs": 1,
            "ParamTypes": ["string"],
            "Resolution": "无法将提供的操作重新提交到实现。 也许行动是无效的, 错误的资源是目标或实施文件可能是协助。"
        },
        {
            "type": "Base.1.0.ActionParameterMissing",
            "Message": "操作{1}要求参数{2} 出现在请求正文中。",
            "NumberOfArgs": 2,
            "ParamTypes": ["string", "string"],
            "Resolution": "当请求重新提交时, 在请求正文中提供所需参数的操作。"
        },
        {
            "type": "Base.1.0.ActionParameterDuplicate",
            "Message": "为参数{2}提交的操作{1} 的值不止一个。",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "如果操作失败, 则在请求正文中仅使用参数的一个实例重新提交操作。"
        },
        {
            "type": "Base.1.0.ActionParameterUnknown",
            "Message": "与无效的参数{2} 一起提交了操作{1}。",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "更正无效参数, 并在操作失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.ActionParameterValueTypeError",
            "Message": "操作{3}中参数{2}的值{1}的类型与参数可以接受的不同。",
            "NumberOfArgs": 3,
            "ParamTypes": [
                "string",
                "string",
                "string"
            ],
            "Resolution": "在请求正文中更正参数的值, 并在操作失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.ActionParameterValueFormatError",
            "Message": "操作{3}中参数{2}的值{1}的格式与参数所能接受的不同。",
            "NumberOfArgs": 3,
            "ParamTypes": [
                "string",
                "string",
                "string"
            ],
            "Resolution": "在请求正文中更正参数的值, 并在操作失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.ActionParameterNotSupported",
            "Message": "目标资源不支持操作{2}的参数{1}。",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "删除所提供的参数, 并在操作失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.QueryParameterValueTypeError",
            "Message": "查询参数{2}的值{1}与参数可以接受的类型不同。",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "在请求中更正查询参数的值, 并在操作失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.QueryParameterValueFormatError",
            "Message": "参数{2}的值{1}的格式与参数所能接受的不同。",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "在请求中更正查询参数的值, 并在操作失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.QueryParameterOutOfRange",
            "Message": "查询参数{2}的值{1}超过范围{3}。",
            "NumberOfArgs": 3,
            "ParamTypes": [
                "string",
                "string",
                "string"
            ],
            "Resolution": "将查询参数的值减少到范围内的值, 例如, 在集合中的资源数的边界内或在有效页范围内的页中的起始值或 count 数值。"
        },
        {
            "type": "Base.1.0.QueryNotSupportedOnResource",
            "Message": "请求的资源不支持查询。",
            "NumberOfArgs": 0,
            "Resolution": "删除查询参数, 并在操作失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.QueryNotSupported",
            "Message": "实现不支持查询。",
            "NumberOfArgs": 0,
            "Resolution": "删除查询参数, 并在操作失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.SessionLimitExceeded",
            "Message": "会话设置失败, 因为同时会话的数量超过了实现的限制。",
            "NumberOfArgs": 0,
            "Resolution": "在尝试建立会话之前减少其他会话的数量, 或增加同时会话的限制 (如果支持)。"
        },
        {
            "type": "Base.1.0.EventSubscriptionLimitExceeded",
            "Message": "由于同时订阅的数量超过了实现的限制, 事件订阅失败。",
            "NumberOfArgs": 0,
            "Resolution": "在尝试建立事件订阅或增加同时订阅的限制 (如果支持) 之前, 请减少其他订阅的数量。"
        },
        {
            "type": "Base.1.0.ResourceCannotBeDeleted",
            "Message": "删除请求失败, 因为无法删除所请求的资源。",
            "NumberOfArgs": 0,
            "Resolution": "不要尝试删除 non-deletable 资源。"
        },
        {
            "type": "Base.1.0.ResourceInUse",
            "Message": "由于资源正在使用或处于转换中, 对请求的资源所做的更改失败。",
            "NumberOfArgs": 0,
            "Resolution": "删除该条件并在操作失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.ResourceAlreadyExists",
            "Message": "请求的资源已存在。",
            "NumberOfArgs": 0,
            "Resolution": "当资源已经创建时, 不要重复创建操作。"
        },
        {
            "type": "Base.1.0.CreateFailedMissingReqProperties",
            "Message": "创建操作失败, 因为请求中缺少所需的属性{1}。",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "更正正文以包含具有有效值的必需属性, 并在操作失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.CreateLimitReachedForResource",
            "Message": "创建操作失败, 因为资源已达到可能的资源限制。",
            "NumberOfArgs": 0,
            "Resolution": "如果操作失败或未重新提交请求, 则删除资源并重新提交请求。"
        },
        {
            "type": "Base.1.0.ServiceShuttingDown",
            "Message": "操作失败, 因为服务正在关闭, 无法再接收传入的请求。",
            "NumberOfArgs": 0,
            "Resolution": "当服务变为可用时, 如果操作失败, 则重新提交请求。"
        },
        {
            "type": "Base.1.0.ServiceInUnknownState",
            "Message": "操作失败, 因为该服务处于未知状态, 无法再接收传入请求。",
            "NumberOfArgs": 0,
            "Resolution": "重新启动服务, 并在操作失败时再次提交请求。"
        },
        {
            "type": "Base.1.0.NoValidSession",
            "Message": "在实现中没有建立有效的会话。",
            "NumberOfArgs": 0,
            "Resolution": "在尝试任何操作之前, 将其设置为会话。"
        },
        {
            "type": "Base.1.0.InsufficientPrivilege",
            "Message": "与当前会话关联的帐户或凭据的权限不足, 无法执行请求的操作。",
            "NumberOfArgs": 0,
            "Resolution": "要么放弃操作, 要么更改关联的访问权限, 并在操作失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.AccountModified",
            "Message": "该帐户已成功修改。",
            "NumberOfArgs": 0,
            "Resolution": "无需解决。"
        },
        {
            "type": "Base.1.0.AccountNotModified",
            "Message": "帐户修改请求失败。",
            "NumberOfArgs": 0,
            "Resolution": "由于权限问题或请求正文的问题, 修改可能失败。"
        },
        {
            "type": "Base.1.0.AccountRemoved",
            "Message": "已成功删除该帐户。",
            "NumberOfArgs": 0,
            "Resolution": "无需解决。"
        },
        {
            "type": "Base.1.0.AccountForSessionNoLongerExists",
            "Message": "当前会话的帐户已被删除, 因此当前会话也已被删除。",
            "NumberOfArgs": 0,
            "Resolution": "尝试使用有效帐户进行连接。"
        },
        {
            "type": "Base.1.0.InvalidObject",
            "Message": "{1}上的对象无效。",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "对象格式不正确, 或者 URI 错误。 更正条件并在失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.InternalError",
            "Message": "内部错误。",
            "NumberOfArgs": 0,
            "Resolution": "发生内部错误，请联系华为工程师。"
        },
        {
            "type": "Base.1.0.UnrecognizedRequestBody",
            "Message": "该服务检测到它无法解释的格式错误的请求正文。",
            "NumberOfArgs": 0,
            "Resolution": "更正请求正文并在失败时重新提交请求。"
        },
        {
            "type": "Base.1.0.ResourceMissingAtURI",
            "Message": "找不到 URI{1}的资源。",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "在 uri 中放置有效资源或更正 uri 并重新提交请求。"
        },
        {
            "type": "Base.1.0.ResourceAtUriInUnknownFormat",
            "Message": "{1}中的资源处于服务无法识别的格式。",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "将服务所识别的图像或资源或文件放在 URI 中。"
        },
        {
            "type": "Base.1.0.ResourceAtUriUnauthorized",
            "Message": "访问{1}上的资源时, 服务收到了一个授权错误{2}。",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "确保为服务提供了适当的访问权限, 以便它能够访问 URI。"
        },
        {
            "type": "Base.1.0.CouldNotEstablishConnection",
            "Message": "服务未能建立与 URI{1}的连接。",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "确保 uri 包含有效且可访问的节点名称、协议信息和其他 uri 组件。"
        },
        {
            "type": "Base.1.0.SourceDoesNotSupportProtocol",
            "Message": "{1}上的连接的另一端不支持指定的协议{2}。",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "更改协议或 uri。"
        },
        {
            "type": "Base.1.0.AccessDenied",
            "Message": "在尝试建立到{1}的连接时, 该服务被拒绝访问。",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "尝试确保 URI 是正确的, 并且该服务具有适当的凭据。"
        },
        {
            "type": "Base.1.0.ServiceTemporarilyUnavailable",
            "Message": "服务暂时不可用。 在{1}秒内重试。",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "等待指定的重试持续时间, 然后重试操作。"
        },
        {
            "type": "Base.1.0.InvalidIndex",
            "Message": "索引{1}不是数组中的有效偏移量。",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "number"
            ],
            "Resolution": "验证所提供的索引值是否在数组的边界内。"
        },
        {
            "type": "Base.1.0.PropertyValueModified",
            "Message": "由于服务的修改, 属性{1}被分配了值{2}",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "无需解决。"
        },
        //profile
        {
            "type": "Base.1.0.OperationTimeOut",
            "Message": "{1} 的操作已超时",
            "NumberOfArgs": 1,
            "Resolution": "如果操作失败, 则重新提交请求。"
        },
        {
            "type": "Base.1.0.OperationFailed",
            "Message": "{1} 上的操作由于 {2} 而失败。",
            "NumberOfArgs": 2,
            "Resolution": "如果操作失败, 则重新提交请求。"
        },
        //os
        {
            "type": "Base.1.0.CheckResourceFail",
            "Message": "校验资源文件失败",
            "NumberOfArgs": 0,
            "Resolution": "请检查文件是否已被损坏，或者输入的校验码是否正确."
        },
        //baseline
        {
            "type": "Base.1.0.BaselineConflict",
            "Message": "基线冲突创建或修改自动更新策略时, 操作失败。",
            "NumberOfArgs": 0,
            "Resolution": "检查基线文件并确保它们不冲突。"
        },
        //baselineCreate
        {
            "type": "Base.1.0.ModuleConflict",
            "Message": "模块{1}冲突, 操作失败。",
            "NumberOfArgs": 1,
            "Resolution": "检查基线文件并确保相同设备下模块不冲突。"
        },
        //baselineCreate
        {
            "type": "Base.1.0.iBMC.1.0.PasswordNotSatisfyComplexity",
            "Message": "密码不符合复杂度要求。",
            "NumberOfArgs": 1,
            "Resolution": "长度为8-20个字符，至少包含大小写字母，数字中的两种字符，至少包含一个空格或以下特殊字符：`~!@#$%^&*()-_=+\\|[{}];:'\",<.>/?，不能和用户名或者用户名的倒写一样。"
        },
        //baselineCreate
        {
            "type": "Base.1.0.1.0.PasswordNotSatisfyComplexity",
            "Message": "密码不符合复杂度要求。",
            "NumberOfArgs": 1,
            "Resolution": "长度为8-20个字符，至少包含大小写字母，数字中的两种字符，至少包含一个空格或以下特殊字符：`~!@#$%^&*()-_=+\\|[{}];:'\",<.>/?，不能和用户名或者用户名的倒写一样，新旧口令至少在两个字符位上不同。"
        },
        //    升级页面最新适配
        {
            "type": "Base.1.0.UnknownError",
            "Message": "设备底层发生未知错误。",
            "NumberOfArgs": 0,
            "Resolution": "可进行二次尝试，若仍发生错误请联系华为工程师定位。"
        },
        {
            "type": "Base.1.0.FilenameError",
            "Message": "升级包名长度超出限制。",
            "NumberOfArgs": 0,
            "Resolution": "请检查升级包名的长度是否符合规范，若仍发生错误请联系华为工程师定位。"
        },
        {
            "type": "Base.1.0.FileLengthError",
            "Message": "无法获取升级包大小，或者升级包大小超出限制或内存不足。",
            "NumberOfArgs": 0,
            "Resolution": "请检查升级包大小，若仍发生错误请联系华为工程师定位。"
        },
        {
            "type": "Base.1.0.FileError",
            "Message": "升级包中文件转换失败，不能完成转换。",
            "NumberOfArgs": 0,
            "Resolution": "请检查升级包文件是否正确，若仍发生错误请联系华为工程师定位。"
        },
        {
            "type": "Base.1.0.ProtocolError",
            "Message": "升级包文件转换时，转换协议不允许在当前环境使用。",
            "NumberOfArgs": 0,
            "Resolution": "请检查升级包文件是否正确，若仍发生错误请联系华为工程师定位"
        },
        {
            "type": "Base.1.0.FilePathError",
            "Message": "升级包路径不正确。",
            "NumberOfArgs": 0,
            "Resolution": "请确认升级包的路径是否正确，若仍发生错误请联系华为工程师定位。"
        },
        {
            "type": "Base.1.0.UpgradeFileError",
            "Message": "升级包不存在。",
            "NumberOfArgs": 0,
            "Resolution": "请确认升级包是否存在，若仍发生错误请联系华为工程师定位。"
        },
        {
            "type": "Base.1.0.InvalidFileError",
            "Message": "无效的升级包。",
            "NumberOfArgs": 0,
            "Resolution": "请确认升级包是否有效，若仍发生错误请联系华为工程师定位。"
        },
        {
            "type": "Base.1.0.MemoryError",
            "Message": "升级的内存容量不足。",
            "NumberOfArgs": 0,
            "Resolution": "可进行二次尝试，若仍发生错误请联系华为工程师定位。"
        },
        {
            "type": "Base.1.0.OSError",
            "Message": "关闭操作系统之后，开始BIOS升级时发生错误。",
            "NumberOfArgs": 0,
            "Resolution": "可进行二次尝试，若仍发生错误请联系华为工程师定位。"
        },
        {
            "type": "Base.1.0.VersionError",
            "Message": "固件版本不匹配。",
            "NumberOfArgs": 0,
            "Resolution": "请确认固件的版本是否正确，若仍发生错误请联系华为工程师定位。"
        },
        {
            "type": "Base.1.0.MatchError",
            "Message": "升级包和将要升级的设备不匹配。",
            "NumberOfArgs": 0,
            "Resolution": "请确认升级包与升级设备是否匹配，若仍发生错误请联系华为工程师定位。"
        },
        {
            "type": "Base.1.0.BIOSError",
            "Message": "ME状态不正确导致BIOS失败。",
            "NumberOfArgs": 0,
            "Resolution": "可进行二次尝试，若仍发生错误请联系华为工程师定位。"
        },
        {
            "type": "Base.1.0.UpgradeProgressError",
            "Message": "升级过程中发生错误。",
            "NumberOfArgs": 0,
            "Resolution": "可进行二次尝试，若仍发生错误请联系华为工程师定位。"
        },
        {
            "type": "Base.1.0.UpgradeError",
            "Message": "升级失败。",
            "NumberOfArgs": 0,
            "Resolution": "可进行二次尝试，若仍发生错误请联系华为工程师定位。"
        },
        //    chh
        {
            "type": 'Examine.1.0.GetServerInfoFailed',
            "Message": "获取服务器信息失败，设备为{1}",
            "NumberOfArgs": 1,
            "Resolution": "请确保服务器被正常纳管，重新提交请求。"

        },
        {
            "type": 'Examine.1.0.SaveExamineResultsFailed',
            "Message": "存储核查结果失败，设备为{1}",
            "NumberOfArgs": 1,
            "Resolution": "请确保服务器被正常纳管，重新提交请求。"
        },
        {
            "type": 'Examine.1.0.ChangeCMDBStatusFailed',
            "Message": "设置CMDB状态失败，设备为{1}",
            "NumberOfArgs": 1,
            "Resolution": "请确保网络连接正常，用户权限满足条件，设备已录入CMDB，重新提交请求。"
        },
        {
            "type": 'Examine.1.0.DeviceOffline',
            "Message": "服务器已经离线无法核查，设备为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保服务器被正常纳管，重新提交请求。"

        },
        {
            "type": 'Examine.1.0.DeviceLocked',
            "Message": "服务器已经锁定无法核查，设备为{1}",
            "NumberOfArgs": 1,
            "Resolution": "请确保服务器被正常纳管，重新提交请求。"

        },
        {
            "type": 'Examine.1.0.GetCMDBStatusFailed',
            "Message": "获取CMDB状态失败，设备为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保网络连接正常，用户权限满足条件，设备已录入CMDB，重新提交请求。"
        },
        {
            "type": 'Examine.1.0.ExportSPRaidFailed',
            "Message": "导出3008RAID信息失败，设备为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保服务器被正常纳管，重新提交请求。"
        },
        {
            "type": 'Examine.1.0.SPRaidModelError',
            "Message": "RAID不支持带外管理且非3008RAID，设备为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "不支持核查非3008RAID的带内RAID卡。"
        },
        {
            "type": 'Examine.1.0.ResetInBandFailed',
            "Message": "服务器带内重启失败，设备为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保服务器被正常纳管，重新提交请求。"
        },
        {
            "type": 'Examine.1.0.PatchSPServiceFailed',
            "Message": "服务器设置重启项失败，设备为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保服务器被正常纳管，重新提交请求。"
        },
        {
            "type": 'Examine.1.0.GetSPResultFailed',
            "Message": "获取服务器3008RAID导出任务信息失败，设备为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保服务器被正常纳管，重新提交请求。"
        },
        {
            "type": 'Examine.1.0.GetSPTaskResultTimeout',
            "Message": "获取服务器3008RAID导出任务信息超时失败，设备为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请减少核查服务器数量，重新提交请求"
        },
        {
            "type": 'Examine.1.0.SPTaskFailed',
            "Message": "服务器3008RAID信息导出任务失败，设备为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保核查时未对服务器执行其他操作，重新提交请求。"
        },
        {
            "type": 'Examine.1.0.CMDBStatusNotOnRack',
            "Message": "服务器CMDB状态为非上架状态，设备为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保服务器为上架状态，重新提交请求。"
        },
        {
            "type": 'Examine.1.0.GetOptionIDFailed',
            "Message": "服务器操作锁定失败，设备为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保服务器被正常纳管，重新提交请求。"
        },
        {
            "type": 'Examine.1.0.CheckBIOSVersionFailed',
            "Message": "服务器BIOS版本较低，版本为{1}小于等于0.39。",
            "NumberOfArgs": 1,
            "Resolution": "请升级服务器BIOS固件版本，重新提交请求。"
        },
        {
            "type": 'Examine.1.0.CheckSPVersionFailed',
            "Message": "服务器SP版本较低，版本为{1}小于1.13。",
            "NumberOfArgs": 1,
            "Resolution": "请升级服务器SP版本，重新提交请求。"
        },
        {
            "type": 'Examine.1.0.InternalError',
            "Message": "由于内部错误造成此请求失败。",
            "NumberOfArgs": 1,
            "Resolution": "请重新提交请求，如果问题复现，考虑重新启动服务。"
        },
        {
            "type": 'Examine.1.0.InsufficientPrivilege',
            "Message": "无权限对此设备进行操作，请检查操作用户权限，设备为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请检查操作用户权限和操作域，在提升权限或者扩大操作域后重试。"
        },
        //    设备管理
        {
            "type": "FusionDirector.1.0.DevMgmtInternalError",
            "Message": "内部错误。",
            "NumberOfArgs": 0,
            "Resolution": "错误详细请联系华为工程师定位。"
        },
        {
            "type": "FusionDirector.1.0.DevMgmtMissingServerInfo",
            "Message": "服务器纳管信息丢失。",
            "NumberOfArgs": 0,
            "Resolution": "删除该台服务器然后重新纳管。"
        },
        {
            "type": "FusionDirector.1.0.DevMgmtConnectTimeout",
            "Message": "连接服务器超时。",
            "NumberOfArgs": 0,
            "Resolution": "检查服务器连接状态。"
        },
        {
            "type": "FusionDirector.1.0.DevMgmtAuthenticationFailed",
            "Message": "鉴权失败。",
            "NumberOfArgs": 0,
            "Resolution": "用户名或密码错误。"
        },
        {
            "type": "FusionDirector.1.0.DevMgmtNotSupport",
            "Message": "未知机型。",
            "NumberOfArgs": 0,
            "Resolution": "该设备类型不支持纳管。"
        },
        {
            "type": "FusionDirector.1.0.DevMgmtGetServerUUIDFailed",
            "Message": "获取服务器uuid失败。",
            "NumberOfArgs": 0,
            "Resolution": "获取服务器uuid失败。"
        },
        {
            "type": "FusionDirector.1.0.DevMgmtServerBeGoverning",
            "Message": "设备正在纳管中。",
            "NumberOfArgs": 0,
            "Resolution": "操作受限，请稍后重试。"
        },
        {
            "type": "FusionDirector.1.0.DevMgmtServerHasBeenGoverned",
            "Message": "设备已经被纳管。",
            "NumberOfArgs": 0,
            "Resolution": "请不要重复纳管。"
        },
        {
            "type": "FusionDirector.1.0.DevMgmtFDRestart",
            "Message": "Fusion director 重启。",
            "NumberOfArgs": 0,
            "Resolution": "无"
        },
        {
            "type": "DevMgmt.1.0.UnDefined",
            "Message": "未定义的错误类型。",
            "NumberOfArgs": 0,
            "Resolution": "错误详细请联系华为工程师定位。"
        },
        {
            "type": "FusionDirector.1.0.DevMgmtOvertime",
            "Message": "纳管超时。",
            "NumberOfArgs": 0,
            "Resolution": "删除服务器后重新纳管。"
        },
        {
            "type": "FusionDirector.1.0.DevMgmtServerManagedByOtherFD",
            "Message": "设备已被其他FusionDirector系统管理。",
            "NumberOfArgs": 0,
            "Resolution": "为避免冲突，设备只能被一个FusionDirector系统管理。如果确定需要管理该设备，可在重试操作中选择强制纳管选项。"
        },
        //    系统升级
        {
            "type": "FDUpgrade.1.0.CheckEnvironmentFailed",
            "Message": "升级前环境检测失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确认磁盘剩余空间是否充足。"
        },
        {
            "type": "FDUpgrade.1.0.CheckEnvironmentSuccess",
            "Message": "升级前环境检测成功。",
            "NumberOfArgs": 0,
            "Resolution": "无。"
        },
        {
            "type": "FDUpgrade.1.0.CheckPackageFailed",
            "Message": "升级包校验失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确认是否为合法的升级包。"
        },
        {
            "type": "FDUpgrade.1.0.CheckPackageSuccess",
            "Message": "升级包校验成功。",
            "NumberOfArgs": 0,
            "Resolution": "无。"
        },
        {
            "type": "FDUpgrade.1.0.UnzipPackageFailed",
            "Message": "升级包解压失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确认是正确的升级包格式。"
        },
        {
            "type": "FDUpgrade.1.0.UnzipPackageSuccess",
            "Message": "升级包解压成功。",
            "NumberOfArgs": 0,
            "Resolution": "无。"
        },
        {
            "type": "FDUpgrade.1.0.UpgradeFailed",
            "Message": "升级失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确认升级包是否可用。"
        },
        {
            "type": "FDUpgrade.1.0.UpgradeSuccess",
            "Message": "升级成功。",
            "NumberOfArgs": 0,
            "Resolution": "无。"
        },
        //    任务管理
        {
            "type": "Task.1.0.Timeout",
            "Message": "任务执行超时。",
            "NumberOfArgs": 0,
            "Resolution": "请重新执行该动作。"
        },
        {
            "type": "Task.1.0.ServiceRestart",
            "Message": "FusionDirector被重启。",
            "NumberOfArgs": 0,
            "Resolution": "请重新执行该动作。"
        },
        //    配置规划
        {
            "type": 'ConfigService.1.0.ImportPlanningEncryptError',
            "Message": "加密用户信息失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"

        },
        {
            "type": 'ConfigService.1.0.ImportPlanningWriteDBError',
            "Message": "写数据到数据库失败",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": 'ConfigService.1.0.ImportPlanningWriteDHCPServerError',
            "Message": "写数据到依赖的第三方服务失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        //wei
        {
            "type": "Device.1.0.Updating",
            "Message": "设备正在升级中。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.DeployingProfile",
            "Message": "设备正在进行Profile配置。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.DeployingOS",
            "Message": "设备正在部署操作系统。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.Reseting",
            "Message": "设备正在上下电。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.CreatingBonding",
            "Message": "设备正在创建网口绑定。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.ModifyingEthInfo",
            "Message": "设备正在修改以太网口信息。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.CreatingVLAN",
            "Message": "设备正在创建VLAN网口。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.ModifyingVLAN",
            "Message": "设备正在修改VLAN网口信息。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.SettingOSInstallParameter",
            "Message": "设备正在设置SP部署操作系统参数。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.SettingCloneParameter",
            "Message": "设备正在设置SP克隆操作系统参数。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.SettingRecoverParameter",
            "Message": "设备正在设置SP快速部署操作系统参数。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.SettingVirtualMedia",
            "Message": "设备正在挂载虚拟媒体。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.CreatingVolume",
            "Message": "设备正在创建逻辑盘。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.ActivatingFirmware",
            "Message": "设备正在生效固件版本。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.ModifyingAccount",
            "Message": "设备正在修改默认账户信息。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.ModifyingBonding",
            "Message": "设备正在修改网口绑定信息。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.SettingBIOS",
            "Message": "设备正在修改BIOS配置。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.ModifyingSP",
            "Message": "设备正在配置SP信息。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.ModifyingVolume",
            "Message": "设备正在修改逻辑盘信息。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.DeletingBonding",
            "Message": "设备正在删除网口绑定。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.DeletingVLAN",
            "Message": "设备正在删除VLAN网口。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.DeletingVolume",
            "Message": "设备正在删除逻辑盘。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Device.1.0.DeletingDevice",
            "Message": "设备正在被删除。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": "Node.1.0.OperateDatabseError",
            "Message": "数据库访问失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "Task.1.0.Timeout",
            "Message": "任务执行超时。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "Task.1.0.ServiceRestart",
            "Message": "FusionDirector被重启。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "Deploy.1.0.OperateRedisError",
            "Message": "缓存数据读取异常。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "Deploy.1.0.ImageSizeError",
            "Message": "镜像大小不合法。",
            "NumberOfArgs": 0,
            "Resolution": "请上传新的镜像并重新提交请求。"
        },
        {
            "type": "Deploy.1.0.CheckCodeError",
            "Message": "无效的镜像校验码。",
            "NumberOfArgs": 0,
            "Resolution": "请输入正确的校验码并重新提交请求。"
        },
        {
            "type": "Deploy.1.0.MoveImageError",
            "Message": "移动镜像失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "Deploy.1.0.OperateDatabseError",
            "Message": "数据库访问失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "Task.1.0.InternalError",
            "Message": "发生了内部错误。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "Deploy.1.0.IllegalParameter",
            "Message": "非法的任务参数,参数字段为%1。",
            "NumberOfArgs": 1,
            "Resolution": "请更改任务参数并重新提交请求。"
        },
        {
            "type": "Deploy.1.0.CheckDeviceFailed",
            "Message": "设备信息校验失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "Deploy.1.0.SetDeployParamError",
            "Message": "设置部署参数失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "Deploy.1.0.LinkVirMediaError",
            "Message": "挂载虚拟媒体失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "Deploy.1.0.SetSPStartError",
            "Message": "设置从SP启动并重启设备失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "Deploy.1.0. DeployOSFailed",
            "Message": "部署操作系统失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "Device.1.0.DeviceFault",
            "Message": "设备发生了故障。",
            "NumberOfArgs": 0,
            "Resolution": "请检查设备并重新提交请求。"
        },
        //    ibmc账户管理
        {
            "type": 'iBMC.1.0.PasswordNotSatisfyComplexity',
            "Message": "密码不符合复杂度校验规则",
            "NumberOfArgs": 1,
            "Resolution": "请更换密码，重新提交请求。"
        },
        {
            "type": 'Base.1.0.ResourceAlreadyExists',
            "Message": "用户名已经存在",
            "NumberOfArgs": 1,
            "Resolution": "请更换用户名，重新提交请求。"
        },
        {
            "type": 'iBMC.1.0.PasswordInWeakPWDDict',
            "Message": "弱密码",
            "NumberOfArgs": 1,
            "Resolution": "请更换密码，重新提交请求。"
        },
        {
            "type": 'iBMC.1.0.InvalidPasswordSameWithHistory',
            "Message": "无效密码，和历史密码相同",
            "NumberOfArgs": 1,
            "Resolution": "请更换密码，重新提交请求。"
        },
        {
            "type": 'iBMC.1.0.InvalidPassword',
            "Message": "密码无效，密码为空",
            "NumberOfArgs": 1,
            "Resolution": "请使用一个正确的密码重试."
        },
        {
            "type": 'iBMC.1.0.PropertyValueExceedsMaxLength',
            "Message": "用户名密码不能超过16个字符",
            "NumberOfArgs": 1,
            "Resolution": "请使用一个合法的用户名，重新提交请求。"
        },
        {
            "type": 'Enclosure.1.0.TaskSubCallFail',
            "Message": "查询设备进度失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保设备连接正常，刷新机框后重新提交请求。"

        },
        {
            "type": 'Enclosure.1.0.TaskExecFail',
            "Message": "任务执行失败。",
            "NumberOfArgs": 0,
            "Resolution": "错误详细请联系华为工程师定位。"
        },
        {
            "type": 'Enclosure.1.0.TaskExecTimeout',
            "Message": "任务执行超时。",
            "NumberOfArgs": 0,
            "Resolution": "错误详细请联系华为工程师定位。"
        },
        {
            "type": 'Enclosure.1.0.TaskApplyFail',
            "Message": "机框配置下发失败，下发失败的项目：{1}，下发成功的项目：{2}。",
            "NumberOfArgs": 2,
            "Resolution": "排查下发失败的模块，重新下发。"
        },
        //    日志
        {
            "type": 'Examine.1.0.QueryMacTableFailed',
            "Message": "查询交换MAC表项失败，设备为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保交换模块功能正常，并重新提交请求。"
        },
        {
            "type": 'Examine.1.0.CollectSwitchLogFailed',
            "Message": "收集交换日志失败，交换模块为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保交换模块功能正常，并重新提交请求。"
        },
        {
            "type": 'Examine.1.0.CollectSwitchLogBySlotFailed',
            "Message": "收集交换日志失败，机框ID为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保交换模块功能正常，并重新提交请求。"
        },
        {
            "type": 'Examine.1.0.CollectSwitchLogBySlotPartiallyFinish',
            "Message": "交换模块日志收集部分成功，失败平面列表如下:{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保交换模块功能正常，并重新提交请求。"
        },
        {
            "type": 'Examine.1.0.Timeout',
            "Message": "操作超时",
            "NumberOfArgs": 0,
            "Resolution": "请确保设备功能正常，并重新提交请求。"
        },
        {
            "type": "Device.1.0.ModifyingBMCIPv4",
            "Message": "设备正在修改管理网口IPv4",
            "NumberOfArgs": 0,
            "Resolution": "此设备正在修改管理网口IPv4中，请稍后重试"

        },
        {
            "type": 'FusionDirector.1.0.DevMgmtModelTypeMiss',
            "Message": "设备缺失Model值。",
            "NumberOfArgs": 0,
            "Resolution": "请检查设备是否缺失Model值。"
        }, {
            "type": 'FusionDirector.1.0.DevMgmtMacOrSnMiss',
            "Message": "设备缺失Mac或SN值。",
            "NumberOfArgs": 0,
            "Resolution": "请检查该设备的Mac或者SN是否有值。"
        },
        {
            "type": "Upgrade.1.0.UnknownErr",
            "Message": "未知错误。",
            "NumberOfArgs": 0,
            "Resolution": "错误详细请联系华为工程师定位。"
        },
        {
            "type": "Upgrade.1.0.UpgradeFailedErr",
            "Message": "升级任务处理超时。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.TaskTimeOutErr",
            "Message": "任务处理超时。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.DoActiveProcessing",
            "Message": "生效任务执行中。",
            "NumberOfArgs": 0,
            "Resolution": "无"
        },
        {
            "type": "Upgrade.1.0.DoActiveFailedErr",
            "Message": "生效任务执行失败。",
            "NumberOfArgs": 0,
            "Resolution": "无"
        },
        {
            "type": "Upgrade.1.0.SetDeviceLockFailedErr",
            "Message": "操作设备失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.GetDeviceLockFailedErr",
            "Message": "操作冲突，该设备正在执行其他操作。",
            "NumberOfArgs": 0,
            "Resolution": "请检查当前设备是否正在做其他配置，并等待该设备空闲时，再重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.PostFirmwareActivateFailedErr",
            "Message": "下发生效失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.UpgradeFinish",
            "Message": "升级成功。",
            "NumberOfArgs": 0,
            "Resolution": "无"
        },
        {
            "type": "Upgrade.1.0.DoUpgradeProcessing",
            "Message": "升级任务执行中。",
            "NumberOfArgs": 0,
            "Resolution": "无"
        },
        {
            "type": "Upgrade.1.0.GetDeivceInfoFailedErr",
            "Message": "获取待升级设备信息失败。",
            "NumberOfArgs": 0,
            "Resolution": "请检查升级设备，请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.GetDeivceIDFailedErr",
            "Message": "获取待升级设备ID失败。",
            "NumberOfArgs": 0,
            "Resolution": "请检查升级设备，请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.GetActiveStatusAndVersionByIDFailedErr",
            "Message": "获取设备生效状态失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.DeviceActiveStatusIsNoActive",
            "Message": "当前设备已经处于待生效状态，不支持升级。",
            "NumberOfArgs": 0,
            "Resolution": "请手动生效该设备后，再执行升级任务。"
        },
        {
            "type": "Upgrade.1.0.PostUpgradeFailedErr",
            "Message": "下发升级失败。",
            "NumberOfArgs": 0,
            "Resolution": "请检测网络或者待升级设备，重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.GetNewJsonFailedErr",
            "Message": "升级内部错误。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.GetMissedDeviceIDsFailedErr",
            "Message": "升级内部错误。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.GetUpgProgressFailedErr",
            "Message": "获取升级进度时，任务管理发生内部错误。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.GetUpgProgressRespFailedErr",
            "Message": "获取升级进度失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.UnmarshalFailedErr",
            "Message": "任务信息反序列化转换失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.GetProgressInfoFailedErr",
            "Message": "获取升级进度信息时，发生内部错误。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.GetProgressInfoStatusFailedErr",
            "Message": "获取升级信息中的升级状态失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.GetProgressInfoProgressFailedErr",
            "Message": "获取升级信息中的升级进度失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.GetProgressDataFailedErr",
            "Message": "获取升级进度时，发生内部错误。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.GetProgressMesgsFailedErr",
            "Message": "获取升级进度信息失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.GetProgressMesgFailedErr",
            "Message": "获取升级进度信息失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.Message2MessageIdFailedErr",
            "Message": "获取升级进度信息失败,发生内部错误。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.DoUpgradeFailedErr",
            "Message": "升级任务失败，发生内部错误。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.StartUpgrade",
            "Message": "启动升级任务。",
            "NumberOfArgs": 0,
            "Resolution": "无"
        },
        {
            "type": "Upgrade.1.0.StartActive",
            "Message": "启动生效任务。",
            "NumberOfArgs": 0,
            "Resolution": "无"
        },
        {
            "type": "Upgrade.1.0.StartImportFile",
            "Message": "启动导入文件任务。",
            "NumberOfArgs": 0,
            "Resolution": "无"
        },
        {
            "type": "Upgrade.1.0.StartSubUpgrade",
            "Message": "启动升级子任务。",
            "NumberOfArgs": 0,
            "Resolution": "无"
        },
        {
            "type": "Upgrade.1.0.DoUploadFileFailedErr",
            "Message": "导入文件失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新导入文件。"
        },
        {
            "type": "Upgrade.1.0.DoUploadFileProcessing",
            "Message": "导入文件执行中。",
            "NumberOfArgs": 0,
            "Resolution": "无"
        },
        {
            "type": "Upgrade.1.0.UploadFileOK",
            "Message": "导入文件成功。",
            "NumberOfArgs": 0,
            "Resolution": "无"
        },
        {
            "type": "Upgrade.1.0.GetActiveModeByPathErr",
            "Message": "获取固件包生效信息失败。",
            "NumberOfArgs": 0,
            "Resolution": "请检查固件包，并重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.UpgradeSameVersionFailedErr",
            "Message": "升级相同版本导致失败。",
            "NumberOfArgs": 0,
            "Resolution": "当前不支持相同版本升级，请过滤掉相同版本的升级任务。"
        },
        {
            "type": "Upgrade.1.0.UpgradingEnclosureLockErr",
            "Message": "升级任务失败，发生内部错误。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.BuildAsyncTaskSignatureErr",
            "Message": "升级任务失败，发生内部错误。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.SendAsyncTaskSignatureErr",
            "Message": "升级任务失败，发生内部错误。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.PostUpgradeRequestErr",
            "Message": "下发升级失败。",
            "NumberOfArgs": 0,
            "Resolution": "请检测网络或者待升级设备，重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.UpgradeResponseCodeErr",
            "Message": "下发升级失败。",
            "NumberOfArgs": 0,
            "Resolution": "请检测网络或者待升级设备，重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.DeviceNotUpgradeErr",
            "Message": "设备未升级。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.DoUpgradeFinish",
            "Message": "升级成功。",
            "NumberOfArgs": 0,
            "Resolution": "无"
        },
        {
            "type": "Upgrade.1.0.DoActiveFinish",
            "Message": "生效成功。",
            "NumberOfArgs": 0,
            "Resolution": "无"
        },
        {
            "type": "Upgrade.1.0.CheckManagerUpgradeStatusErr",
            "Message": "管理板升级错误，生效未执行。",
            "NumberOfArgs": 0,
            "Resolution": "请检测网络或者待升级设备，重新下发升级任务。"
        },
        {
            "type": "Upgrade.1.0.CheckUpgradeParaErr",
            "Message": "升级参数错误。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        {
            "type": 'iBMC.1.0.FruNotExist',
            "Message": "交换平面{1}不存在。",
            "NumberOfArgs": 1,
            "Resolution": "请检查交换平面存在后重试。"

        },
        {
            "type": 'iBMC.1.0.ActionFailedByPowerOff',
            "Message": "交换平面电源控制操作失败，当前已下电。",
            "NumberOfArgs": 0,
            "Resolution": "请确保设备上电后重试。"
        },
        {
            "type": "Upgrade.1.0.CheckDoUpgradeNumErr",
            "Message": "获取当前升级任务个数错误。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发升级任务。"
        },
        // cmy
        {
            "type": "Config.1.0.UnknownErr",
            "Message": "未知错误。",
            "NumberOfArgs": 0,
            "Resolution": "请联系华为工程师定位"
        },
        {
            "type": "Config.1.0.TaskTimeOutErr",
            "Message": "任务处理超时。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.BIOSActiveFailedErr",
            "Message": "BIOS生效失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.BIOSConfigFailedErr",
            "Message": "BIOS配置失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.RAIDConfigFailedErr",
            "Message": "RAID配置失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.ResetFailedErr",
            "Message": "下发重启命令失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.RAIDInfoCheckingFailedErr",
            "Message": "RAID校验过程中失败。",
            "NumberOfArgs": 0,
            "Resolution": "请检查RAID配置，重新下发配置任务。"
        },
        {
            "type": "Config.1.0.RAIDInfoCheckNotPassErr",
            "Message": "RAID检测不通过。",
            "NumberOfArgs": 0,
            "Resolution": "请检查RAID配置，重新下发配置任务。"
        },
        {
            "type": "Config.1.0.BMCConfigFailedErr",
            "Message": "BMC配置失败。",
            "NumberOfArgs": 0,
            "Resolution": "请检查BMC配置，重新下发配置任务。"
        },
        {
            "type": "Config.1.0.MEZZConfigFailedErr",
            "Message": "MEZZ卡配置失败。",
            "NumberOfArgs": 0,
            "Resolution": "请检查MEZZ卡配置，重新下发配置任务。"
        },
        {
            "type": "Config.1.0.GetOperationIDFailedErr",
            "Message": "操作冲突，该设备正在执行其他操作。",
            "NumberOfArgs": 0,
            "Resolution": "请检查当前设备是否正在做其他配置，并等待该设备空闲时，重新下发配置任务。"
        },
        {
            "type": "Config.1.0.GetEthernetFailedErr",
            "Message": "获取配置网络信息失败。",
            "NumberOfArgs": 0,
            "Resolution": "请检测待网口，重新下发配置任务。"
        },
        {
            "type": "Config.1.0.ConfigEthernetFailedErr",
            "Message": "下发网络配置失败。",
            "NumberOfArgs": 0,
            "Resolution": "请检测网络配置，重新下发配置任务。"
        },
        {
            "type": "Config.1.0.GetErrInfoFromRespFailedErr",
            "Message": "接受响应体异常。",
            "NumberOfArgs": 0,
            "Resolution": "请检查配置，重新下发配置任务。"
        },
        {
            "type": "Config.1.0.GetFDAsNTPServerJs",
            "Message": " 检测以当前设备作为NTP失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.MarshalFailedErr",
            "Message": "配置信息序列化转换失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.GetSouthOutBandIPFromClusterFailedErr",
            "Message": "NTP配置获取南向IP失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.UnmarshalFailedErr",
            "Message": "配置信息反序列化转换失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.ConfigNTPFailedErr",
            "Message": "配置NTP失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.JsonToStringFailedErr",
            "Message": "josn格式转成字符串失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.GetNTPKeyFromClusterMgmtFailedErr",
            "Message": "从集群获取NTP Key失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.GetNTPKeyURLFailedErr",
            "Message": "获取NTP Key URL失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.CheckLDAPEnableConfigFailedErr",
            "Message": "检测LDAP字段使能失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.GetLoginRuleFailedErr",
            "Message": "检测登录规则失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.ConfigLDAPEnableFailedErr",
            "Message": "LDAP使能配置失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.ConfigLoginRuleFailedErr",
            "Message": "登录规则配置失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.CheckNTPAttrFailedErr",
            "Message": "获取NTP配置属性失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.ConfigNTPAttrFailedErr",
            "Message": "NTP配置属性失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.GetFirstEthFailedErr",
            "Message": "获取第一个网口配置失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.ConfigMZ520MZ522FailedErr",
            "Message": "配置MZ520或者MZ522失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.GetMezz520Or522DynamicDataMacFailedErr",
            "Message": "获取MEZZ520或者MZ522失败无状态数据Mac失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.GetMezz520Or522DynamicDataWWNFailedErr",
            "Message": "获取MEZZ520或者MZ522失败无状态数据WWN失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.GetMezz520Or522DynamicDataVlanFailedErr",
            "Message": "获取MEZZ520或者MZ522失败无状态数据Vlan失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.ConfigLOMFailedErr",
            "Message": "配置LOM卡失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.ConfigFabricsModeFailedErr",
            "Message": "配置拓扑模式失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.ConfigFabricesFailedErr",
            "Message": "配置拓扑模式失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        {
            "type": "Config.1.0.CompositionModeFailedErr",
            "Message": "配置拓扑入参错误。",
            "NumberOfArgs": 0,
            "Resolution": "请重新下发配置。"
        },
        //mkx
        {
            "type": 'Backup.1.0.GetClusterMasterNodeFailed',
            "Message": "获取集群内主节点失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保集群内各节点正常，重新提交请求。"

        },
        {
            "type": 'Backup.1.0.ExportDataFromDBFailed',
            "Message": "导出数据库中的数据失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保数据库运行正常，重新提交请求。"
        },
        {
            "type": 'Backup.1.0.GetBackupFilesFailed',
            "Message": "获取各微服务的备份文件失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保各微服务运行正常，重新提交请求。"
        },
        {
            "type": 'Backup.1.0.CompressDataFailed',
            "Message": "压缩备份数据失败。",
            "NumberOfArgs": 0,
            "Resolution": "发生内部错误，请联系华为工程师。"

        },
        {
            "type": 'Restore.1.0.EnvCheckFailed',
            "Message": "恢复环境检测失败。",
            "NumberOfArgs": 0,
            "Resolution": "请检查备份包的版本是否和当前系统版本兼容，重新提交请求。"

        },
        {
            "type": 'Restore.1.0.EnvPrepareFailed',
            "Message": "恢复环境准备失败。",
            "NumberOfArgs": 0,
            "Resolution": "发生内部错误，请联系华为工程师。"

        },
        {
            "type": 'Restore.1.0.ImportDataToDBFailed',
            "Message": "导入数据到数据库中失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保数据库运行正常，重新提交请求。"

        },
        {
            "type": 'Restore.1.0.RetoreServiceFilesFailed',
            "Message": "恢复各微服务的配置文件失败。",
            "NumberOfArgs": 0,
            "Resolution": "发生内部错误，请联系华为工程师。"

        },
        {
            "type": 'Restore.1.0.UpdateSerivceFailed',
            "Message": "更新各微服务失败。",
            "NumberOfArgs": 0,
            "Resolution": "发生内部错误，请联系华为工程师。"

        },
        {
            "type": 'Upgrade.1.0.EnvCheckFailed',
            "Message": "升级环境检测失败。",
            "NumberOfArgs": 0,
            "Resolution": "请检查磁盘空间是否充足，版本是否兼容"

        },
        {
            "type": 'Upgrade.1.0.EnvPrepareFailed',
            "Message": "升级环境准备失败。",
            "NumberOfArgs": 0,
            "Resolution": "发生内部错误，请联系华为工程师。"

        },
        {
            "type": 'Upgrade.1.0.UpgradeFailed',
            "Message": "升级操作失败。",
            "NumberOfArgs": 0,
            "Resolution": "发生内部错误，请联系华为工程师。"

        },
        {
            "type": 'Activated.1.0.ActivatedFailed',
            "Message": "生效操作失败。",
            "NumberOfArgs": 0,
            "Resolution": "发生内部错误，请联系华为工程师。"

        },
        {
            "type": 'Activated.1.0.VersionCheckedFailed',
            "Message": "生效版本检测失败。",
            "NumberOfArgs": 0,
            "Resolution": "发生内部错误，请联系华为工程师。"

        },
        {
            "type": 'Upgrade.1.0.GetCurrentVersionFailed',
            "Message": "集群内节点当前版本不一致。",
            "NumberOfArgs": 0,
            "Resolution": "无"

        },
        {
            "type": 'Upgrade.1.0.GetInactiveVersionFailed',
            "Message": "集群内节点生效版本不一致。",
            "NumberOfArgs": 0,
            "Resolution": "无"

        },
        //    lgy
        {
            "type": 'DevMgmt.1.0.ServerIsNotGoverned',
            "Message": "服务器没有被纳管。",
            "NumberOfArgs": 0,
            "Resolution": "请确保服务器被正常纳管，重新提交请求。"
        },
        {
            "type": 'DevMgmt.1.0.ServerStateIsNotOnline',
            "Message": "服务器状态不在线。",
            "NumberOfArgs": 0,
            "Resolution": "请确保服务器为在线状态，重新提交请求。"
        },
        {
            "type": 'DevMgmt.1.0.ServerCallBMCRestoreFactoryError',
            "Message": "设置BMC恢复出厂失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保网络连接正常，用户权限满足条件，重新提交请求。"
        },
        {
            "type": 'DevMgmt.1.0.ServerIsNotExist',
            "Message": "服务器不存在。",
            "NumberOfArgs": 0,
            "Resolution": "请确保服务器被正常纳管，重新提交请求。"

        },
        {
            "type": 'DevMgmt.1.0.ServerLinkStateIsNotEnable',
            "Message": "服务器心跳丢失。",
            "NumberOfArgs": 0,
            "Resolution": "请确保服务器被正常纳管，重新提交请求。"

        },
        {
            "type": 'DevMgmt.1.0.ServerPowerStateIsOn',
            "Message": "服务器带内上电。",
            "NumberOfArgs": 0,
            "Resolution": "请确保服务器带内下电，重新提交请求。"

        },
        {
            "type": 'DevMgmt.1.0.ServerReleaseRepeated',
            "Message": "服务器下线请求重复。",
            "NumberOfArgs": 0,
            "Resolution": "请确保服务器未发送下线请求后，重新提交请求。"
        },
        {
            "type": 'DevMgmt.1.0.ServerDeleteFailed',
            "Message": "服务器恢复出厂设置成功但是删除服务器失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求或者手动删除服务器。"
        },
        {
            "type": 'DevMgmt.1.0.CallBMCError',
            "Message": "调用服务器接口异常。",
            "NumberOfArgs": 0,
            "Resolution": "请确保网络连接正常，用户权限满足条件，重新提交请求。"
        }, {
            "type": 'Network.1.0.InternalError',
            "Message": "内部错误。",
            "NumberOfArgs": 0,
            "Resolution": "发生内部错误，请联系华为工程师。"
        },
        {
            "type": 'Network.1.0.QueryMacTableFailed',
            "Message": "查询交换MAC表项失败，设备为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保交换模块功能正常，并重新提交请求。"
        },
        {
            "type": 'Network.1.0.CollectSwitchLogFailed',
            "Message": "收集交换日志失败，交换模块为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保交换模块功能正常，并重新提交请求。"
        },
        {
            "type": 'Network.1.0.CollectSwitchLogBySlotFailed',
            "Message": "收集交换日志失败，机框ID为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保交换模块功能正常，并重新提交请求。"
        },
        {
            "type": 'Network.1.0.CollectSwitchLogBySlotPartiallyFinish',
            "Message": "交换模块日志收集部分成功，失败平面列表如下:{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保交换模块功能正常，并重新提交请求。"
        },
        {
            "type": 'Network.1.0.Timeout',
            "Message": "操作超时。",
            "NumberOfArgs": 0,
            "Resolution": "请确保设备功能正常，并重新提交请求。"
        },
        {
            "type": 'Network.1.0.HealthCheckAbnormal',
            "Message": "存在交换设备状态异常，中止升级，异常设备列表：{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保设备状态正常，并重新提交请求。"
        },
        {
            "type": 'Network.1.0.FirmwareUpgradeFailed',
            "Message": "固件升级失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保设备状态正常，并重新提交请求。"
        },
        {
            "type": 'Network.1.0.FirmwareUpgradeAbort',
            "Message": "当前机框存在交换设备固件升级失败，中止升级",
            "NumberOfArgs": 0,
            "Resolution": "请确保设备状态正常，并重新提交请求。"
        },
        {
            "type": 'LogMgmtService.1.0.DumpDeviceLogDumpFailed',
            "Message": "存在设备状态异常，日志收集失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保设备状态正常，并重新提交请求。"
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailed',
            "Message": "存在异常设备，日志收集失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保设备正常，并重新提交请求。"

        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedGetBMCIp',
            "Message": "获取BMC自身ip异常，日志收集失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保获取BMC自身ip正常，并重新提交请求。"
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedCreatePathErr',
            "Message": "创建日志收集路径异常，日志收集失败。",
            "NumberOfArgs": 0,
            "Resolution": "请联系华为工程师。"
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedGetUploadUrl',
            "Message": "获取日志收集路径异常，日志收集失败。",
            "NumberOfArgs": 0,
            "Resolution": "请联系华为工程师。"
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedchassisBMC',
            "Message": "存在异常设备，日志收集失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保设备正常，并重新提交请求。"
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedchassisVrp',
            "Message": "存在设备状态异常，日志收集失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保设备状态正常，并重新提交请求。"
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedchassisEmLog',
            "Message": "存在设备异常，日志收集失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保设备正常，并重新提交请求。"
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedchassisAppliance',
            "Message": "存在异常设备，日志收集失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保设备正常，并重新提交请求。"
        },
        {
            "type": 'LogMgmtService.1.0.FdLogDumpFailed',
            "Message": "FusionDirector自身存在异常，日志收集失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保FusionDirector网络通信正常，并重新提交请求。"
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedForChassis',
            "Message": "存在异常设备，日志收集失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保设备正常，并重新提交请求。"
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedForBmc',
            "Message": "存在异常设备，日志收集失败。",
            "NumberOfArgs": 0,
            "Resolution": "请确保设备正常，并重新提交请求。"
        },
        {
            "type": 'Deploy.1.0.ImageNameExists',
            "Message": "镜像名称已经存在。",
            "NumberOfArgs": 0,
            "Resolution": "请修改镜像名重新提交请求。"
        },
        {
            "type": 'Deploy.1.0.ReadServerInfoFailed',
            "Message": "读取设备信息失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": 'Device.1.0.CloningOS',
            "Message": "设备正在克隆镜像。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": 'Device.1.0.RecoveringOS',
            "Message": "设备正在快速部署操作系统。",
            "NumberOfArgs": 0,
            "Resolution": "请等待当前设备上操作完成后重试。"
        },
        {
            "type": 'Deploy.1.0.AllocateSPIPFailed',
            "Message": "申请SP网络ip失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": 'Deploy.1.0.NotEnoughLicense',
            "Message": "设备上没有安装License。",
            "NumberOfArgs": 0,
            "Resolution": "请安装License后重新提交请求。"
        },
        {
            "type": 'Deploy.1.0.SPNotFount',
            "Message": "设备上没有安装SP。",
            "NumberOfArgs": 0,
            "Resolution": "请安装SP后重新提交请求。"
        },
        {
            "type": 'Deploy.1.0.DeviceNotSupportOperation',
            "Message": "设备配置不支持该操作。",
            "NumberOfArgs": 0,
            "Resolution": "请选择支持操作的设备重新提交请求。"
        },
        {
            "type": 'Deploy.1.0.DeviceNotOnLine',
            "Message": "设备状态不是在线状态。",
            "NumberOfArgs": 0,
            "Resolution": "请将设备上线后重新提交请求。"
        },
        {
            "type": "Deploy.1.0.SetCloneParamError",
            "Message": "设置克隆参数失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "Deploy.1.0.SetRecoverParamError",
            "Message": "设置快速部署参数失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "Deploy.1.0.CloneOSFailed",
            "Message": "克隆操作系统失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "Deploy.1.0.RecoverOSFailed",
            "Message": "快速部署操作系统失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "SP.1.0.BtrfsNotSupport",
            "Message": "不支持btrfs文件系统。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "SP.1.0.FetchCloneToolsFailed",
            "Message": "下载克隆工具失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "SP.1.0.VerifyParaFailed",
            "Message": "SP校验参数失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "SP.1.0.SetNetworkFailed",
            "Message": "配置SP网络失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "SP.1.0.ExportConfigFailed",
            "Message": "导出Raid配置失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "SP.1.0.UploadInitFailed",
            "Message": "上传初始化失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "SP.1.0.StorageNotEnough",
            "Message": "存储空间不足。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "SP.1.0.UploadImageFailed",
            "Message": "上传镜像文件失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "SP.1.0.TransferFailed",
            "Message": "下载镜像文件失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "SP.1.0.ImportDeviceInfoFailed",
            "Message": "导入系统设备信息失败。",
            "NumberOfArgs": 0,
            "Resolution": "请重新提交请求。"
        },
        {
            "type": "Deploy.1.0.NotAuthorized",
            "Message": "没有权限操作该设备。",
            "NumberOfArgs": 0,
            "Resolution": "请申请操作权限后重新提交请求。"
        },
        {
            "type": "SP.1.0.SPCheckOSVersionFailed",
            "Message": "操作系统版本校验失败。",
            "NumberOfArgs": 0,
            "Resolution": "请检查操作系统版本后重新提交请求。"
        },
        {
            "type": 'Network.1.0.ApplyConflict',
            "Message": "机框正在应用配置文件",
            "NumberOfArgs": 0,
            "Resolution": "请确保当前机框应用配置文件完成，再重新提交请求。"
        },
        {
            "type": 'Network.1.0.ApplyDispatchFailed',
            "Message": "机框配置下发失败，失败列表：{1}",
            "NumberOfArgs": 1,
            "Resolution": "请确保设备状态正常，并重新提交请求。"
        },
        {
            "type": 'Network.1.0.ApplyBoardCheckAbnormal',
            "Message": "机框配置文件与交换设备不一致，不一致槽位列表：{1}",
            "NumberOfArgs": 1,
            "Resolution": "请确保配置文件与交换设备一致，并重新提交请求。"
        },
        {
            'type': 'Scope.1.0.ResourceURIInWrongFormat',
            'Message': '资源URI格式错误',
            'NumberOfArgs': 0,
            'Resolution': '请修改资源路径后重新下发请求。'
        },
        {
            'type': 'Scope.1.0.ResourceNotExist',
            'Message': '资源不存在',
            'NumberOfArgs': 0,
            'Resolution': '请确认资源存在后重新下发请求。'
        },
        {
            'type': 'Scope.1.0.InsufficientPrivilege',
            'Message': '无权限对此资源进行操作，请检查操作用户权限',
            'NumberOfArgs': 0,
            'Resolution': '请检查操作用户权限和操作域，在提升权限或者扩大操作域后重试。'
        },
        {
            "type": 'Examine.1.0.DeviceDetached',
            "Message": "服务器已经脱管无法核查或者确定核查结果，设备为{1}。",
            "NumberOfArgs": 1,
            "Resolution": "请确保服务器被正常纳管，重新提交请求。"

        },
        {
            "type": 'FusionDirector.1.0.OperationNotSupportedOnState',
            "Message": "对象当前的状态不支持该操作。",
            "NumberOfArgs": 0,
            "Resolution": "请等待对象处于合适的状态后再尝试此操作。"

        },
        {
            "type": "Deploy.1.0.SPVersionTooEarly",
            "Message": "Smart Provisioning版本太低。",
            "NumberOfArgs": 0,
            "Resolution": "请先升级Provisioning后重新提交请求。"
        },
        {
            "type": 'Enclosure.1.0.RefreshFailed',
            "Message": "机框刷新异常，刷新异常的项目：{1}，刷新成功的项目：{2}。",
            "NumberOfArgs": 2,
            "Resolution": "请检查机框告警，确保机框各模块功能正常，并重新刷新机框。"
        },
        {
            "type": 'Enclosure.1.0.LoginFailed',
            "Message": "机框纳管账户异常。",
            "NumberOfArgs": 0,
            "Resolution": "请确保机框各模块功能正常，重新输入用户名密码进行机框刷新。"
        },
        {
            "type": 'Enclosure.1.0.ConnectFailed',
            "Message": "机框连接异常。",
            "NumberOfArgs": 0,
            "Resolution": "请确保机框各模块功能正常，并且机框管理IP可达，重新进行机框刷新。"
        },
        {
            "type": "Upgrade.1.0.DeviceOffline",
            "Message": "设备处于非在线状态，不能升级。",
            "NumberOfArgs": 0,
            "Resolution": "请检查设备管理状态。"
        },
        {
            "type": "Upgrade.1.0.SPVersionTooEarly",
            "Message": "Smart Provisioning版本太低。",
            "NumberOfArgs": 0,
            "Resolution": "请先升级Provisioning后重新提交请求。"
        },
        {
            "type": 'DevMgmt.1.0.SNRepeat',
            "Message": "序列号重复。",
            "NumberOfArgs": 0,
            "Resolution": "请确保被纳管设备的序列号的唯一性，重新提交请求。"
        }
    ]

}
var messageEN = {
    "Id": "Base.1.0.",
    "Language": "en",
    "Messages": [{
            "type": 'Base.1.0.Success',
            "Message": "Successfully Completed Request",
            "NumberOfArgs": 0,
            "Resolution": "None"
        },
        {
            "type": 'Base.1.0.GeneralError',
            "Message": "A general error has occurred.",
            "NumberOfArgs": 0,
            "Resolution": "For details, contact Huawei engineers."
        },
        {
            "type": 'Base.1.0.Created',
            "Message": "The resource has been created successfully",
            "NumberOfArgs": 0,
            "Resolution": "None"
        },
        {
            "type": "Base.1.0.PropertyDuplicate",
            "Message": "The property {1} was duplicated in the request.",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "Remove the duplicate property from the request body and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.PropertyUnknown",
            "Message": "The property {1} is not in the list of valid properties for the resource.",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "Remove the unknown property from the request body and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.PropertyValueTypeError",
            "Message": "The value {1} for the property {2} is of a different type than the property can accept.",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "Correct the value for the property in the request body and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.PropertyValueFormatError",
            "Message": "The value {1} for the property {2} is of a different format than the property can accept.",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "Correct the value for the property in the request body and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.PropertyValueNotInList",
            "Message": "The value {1} for the property {2} is not in the list of acceptable values.",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "Choose a value from the enumeration list that the implementation can support and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.PropertyNotWritable",
            "Message": "The property {1} is a read only property and cannot be assigned a value.",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "Remove the property from the request body and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.PropertyMissing",
            "Message": "The property {1} is a required property and must be included in the request.",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "Ensure that the property is in the request body and has a valid value and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.MalformedJSON",
            "Message": "The request body submitted was malformed JSON and could not be parsed by the receiving service.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the request body is valid JSON and resubmit the request."
        },
        {
            "type": "Base.1.0.ActionNotSupported",
            "Message": "The action {1} is not supported by the resource.",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "The action supplied cannot be resubmitted to the implementation.  Perhaps the action was invalid, the wrong resource was the target or the implementation documentation may be of assistance."
        },
        {
            "type": "Base.1.0.ActionParameterMissing",
            "Message": "The action {1} requires the parameter {2} to be present in the request body.",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "Supply the action with the required parameter in the request body when the request is resubmitted."
        },
        {
            "type": "Base.1.0.ActionParameterDuplicate",
            "Message": "The action {1} was submitted with more than one value for the parameter {2}.",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "Resubmit the action with only one instance of the parameter in the request body if the operation failed."
        },
        {
            "type": "Base.1.0.ActionParameterUnknown",
            "Message": "The action {1} was submitted with with the invalid parameter {2}.",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "Correct the invalid parameter and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.ActionParameterValueTypeError",
            "Message": "The value {1} for the parameter {2} in the action {3} is of a different type than the parameter can accept.",
            "NumberOfArgs": 3,
            "ParamTypes": [
                "string",
                "string",
                "string"
            ],
            "Resolution": "Correct the value for the parameter in the request body and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.ActionParameterValueFormatError",
            "Message": "The value {1} for the parameter {2} in the action {3} is of a different format than the parameter can accept.",
            "NumberOfArgs": 3,
            "ParamTypes": [
                "string",
                "string",
                "string"
            ],
            "Resolution": "Correct the value for the parameter in the request body and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.ActionParameterNotSupported",
            "Message": "The parameter {1} for the action {2} is not supported on the target resource.",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "Remove the parameter supplied and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.QueryParameterValueTypeError",
            "Message": "The value {1} for the query parameter {2} is of a different type than the parameter can accept.",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "Correct the value for the query parameter in the request and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.QueryParameterValueFormatError",
            "Message": "The value {1} for the parameter {2} is of a different format than the parameter can accept.",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "Correct the value for the query parameter in the request and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.QueryParameterOutOfRange",
            "Message": "The value{1} for the query parameter {2} is out of range {3}.",
            "NumberOfArgs": 3,
            "ParamTypes": [
                "string",
                "string",
                "string"
            ],
            "Resolution": "Reduce the value for the query parameter to a value that is within range, such as a start or count value that is within bounds of the number of resources in a collection or a page that is within the range of valid pages."
        },
        {
            "type": "Base.1.0.QueryNotSupportedOnResource",
            "Message": "Querying is not supported on the requested resource.",
            "NumberOfArgs": 0,
            "Resolution": "Remove the query parameters and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.QueryNotSupported",
            "Message": "Querying is not supported by the implementation.",
            "NumberOfArgs": 0,
            "Resolution": "Remove the query parameters and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.SessionLimitExceeded",
            "Message": "The session establishment failed due to the number of simultaneous sessions exceeding the limit of the implementation.",
            "NumberOfArgs": 0,
            "Resolution": "Reduce the number of other sessions before trying to establish the session or increase the limit of simultaneous sessions (if supported)."
        },
        {
            "type": "Base.1.0.EventSubscriptionLimitExceeded",
            "Message": "The event subscription failed due to the number of simultaneous subscriptions exceeding the limit of the implementation.",
            "NumberOfArgs": 0,
            "Resolution": "Reduce the number of other subscriptions before trying to establish the event subscription or increase the limit of simultaneous subscriptions (if supported)."
        },
        {
            "type": "Base.1.0.ResourceCannotBeDeleted",
            "Message": "The delete request failed because the resource requested cannot be deleted.",
            "NumberOfArgs": 0,
            "Resolution": "Do not attempt to delete a non-deletable resource."
        },
        {
            "type": "Base.1.0.ResourceInUse",
            "Message": "The change to the requested resource failed because the resource is in use or in transition.",
            "NumberOfArgs": 0,
            "Resolution": "Remove the condition and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.ResourceAlreadyExists",
            "Message": "The requested resource already exists.",
            "NumberOfArgs": 0,
            "Resolution": "Do not repeat the create operation as the resource has already been created."
        },
        {
            "type": "Base.1.0.CreateFailedMissingReqProperties",
            "Message": "The create operation failed because the required property {1} was missing from the request.",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "Correct the body to include the required property with a valid value and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.CreateLimitReachedForResource",
            "Message": "The create operation failed because the resource has reached the limit of possible resources.",
            "NumberOfArgs": 0,
            "Resolution": "Either delete resources and resubmit the request if the operation failed or do not resubmit the request."
        },
        {
            "type": "Base.1.0.ServiceShuttingDown",
            "Message": "The operation failed because the service is shutting down and can no longer take incoming requests.",
            "NumberOfArgs": 0,
            "Resolution": "When the service becomes available, resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.ServiceInUnknownState",
            "Message": "The operation failed because the service is in an unknown state and can no longer take incoming requests.",
            "NumberOfArgs": 0,
            "Resolution": "Restart the service and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.NoValidSession",
            "Message": "There is no valid session established with the implementation.",
            "NumberOfArgs": 0,
            "Resolution": "Establish as session before attempting any operations."
        },
        {
            "type": "Base.1.0.InsufficientPrivilege",
            "Message": "There are insufficient privileges for the account or credentials associated with the current session to perform the requested operation.",
            "NumberOfArgs": 0,
            "Resolution": "Either abandon the operation or change the associated access rights and resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.AccountModified",
            "Message": "The account was successfully modifed.",
            "NumberOfArgs": 0,
            "Resolution": "No resolution is required."
        },
        {
            "type": "Base.1.0.AccountNotModified",
            "Message": "The account modification request failed.",
            "NumberOfArgs": 0,
            "Resolution": "The modification may have failed due to permission issues or issues with the request body."
        },
        {
            "type": "Base.1.0.AccountRemoved",
            "Message": "The account was successfully removed.",
            "NumberOfArgs": 0,
            "Resolution": "No resolution is required."
        },
        {
            "type": "Base.1.0.AccountForSessionNoLongerExists",
            "Message": "The account for the current session has been removed, thus the current session has been removed as well.",
            "NumberOfArgs": 0,
            "Resolution": "Attempt to connect with a valid account."
        },
        {
            "type": "Base.1.0.InvalidObject",
            "Message": "The object at %1 is invalid.",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "Either the object is malformed or the URI is not correct.  Correct the condition and resubmit the request if it failed."
        },
        {
            "type": "Base.1.0.InternalError",
            "Message": "Internal error.",
            "NumberOfArgs": 0,
            "Resolution": "An internal error occurred. Contact Huawei engineers."
        },
        {
            "type": "Base.1.0.UnrecognizedRequestBody",
            "Message": "The service detected a malformed request body that it was unable to interpret.",
            "NumberOfArgs": 0,
            "Resolution": "Correct the request body and resubmit the request if it failed."
        },
        {
            "type": "Base.1.0.ResourceMissingAtURI",
            "Message": "The resource at the URI {1} was not found.",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "Place a valid resource at thr URI or correct the URI and resubmit the request."
        },
        {
            "type": "Base.1.0.ResourceAtUriInUnknownFormat",
            "Message": "The resource at {1} is in a format not recognized by the service.",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "Place an image or resource or file that is recognized by the service at the URI."
        },
        {
            "type": "Base.1.0.ResourceAtUriUnauthorized",
            "Message": "While accessing the resource at {1}, the service received an authorization error {2}.",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "Ensure that the appropriate access is provided for the service in order for it to access the URI."
        },
        {
            "type": "Base.1.0.CouldNotEstablishConnection",
            "Message": "The service failed to establish a connection with the URI {1}.",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "Ensure that the URI contains a valid and reachable node name, protocol information and other URI components."
        },
        {
            "type": "Base.1.0.SourceDoesNotSupportProtocol",
            "Message": "The other end of the connection at {1} does not support the specified protocol {2}.",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "Change protocols or URIs. "
        },
        {
            "type": "Base.1.0.AccessDenied",
            "Message": "While attempting to establish a connection to {1}, the service was denied access.",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "Attempt to ensure that the URI is correct and that the service has the appropriate credentials."
        },
        {
            "type": "Base.1.0.ServiceTemporarilyUnavailable",
            "Message": "The service is temporarily unavailable.  Retry in {1} seconds.",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "string"
            ],
            "Resolution": "Wait for the indicated retry duration and retry the operation."
        },
        {
            "type": "Base.1.0.InvalidIndex",
            "Message": "The Index {1} is not a valid offset into the array.",
            "NumberOfArgs": 1,
            "ParamTypes": [
                "number"
            ],
            "Resolution": "Verify the index value provided is within the bounds of the array."
        },
        {
            "type": "Base.1.0.PropertyValueModified",
            "Message": "The property {1} was assigned the value {2} due to modification by the service.",
            "NumberOfArgs": 2,
            "ParamTypes": [
                "string",
                "string"
            ],
            "Resolution": "No resolution is required."
        },
        //profile
        {
            "type": "Base.1.0.OperationTimeOut",
            "Message": "The operation of {1} has been time out",
            "NumberOfArgs": 1,
            "Resolution": "Resubmit the request if the operation failed."
        },
        {
            "type": "Base.1.0.OperationFailed",
            "Message": " The operation on {1} has been exec failed due to {2}.",
            "NumberOfArgs": 2,
            "Resolution": "Resubmit the request if the operation failed."
        },
        //os
        {
            "type": "Base.1.0.CheckResourceFail",
            "Message": "Check the target resource failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please check if the resource is broken or the input CheckCode is wrong."
        },
        //baseline
        {
            "type": "Base.1.0.BaselineConflict",
            "Message": "Baselines conflict while create or modify auto update policy, the operation is failed.",
            "NumberOfArgs": 0,
            "Resolution": "Check the files of baselines and ensure they do not conflict."
        },
        //baselineCreate
        {
            "type": "Base.1.0.ModuleConflict",
            "Message": "Module{1} conflict while create or modify baseline, the operation is failed.",
            "NumberOfArgs": 1,
            "Resolution": "Check the files of baseline and ensure they do not conflict."
        },
        //baselineCreate
        {
            "type": "Base.1.0.iBMC.1.0.PasswordNotSatisfyComplexity",
            "Message": "Passwords do not meet complexity requirements.",
            "NumberOfArgs": 1,
            "Resolution": "The length is 8-20 characters, contains at least uppercase and lowercase letters, two characters in a number, and contains at least one space or the following special characters: ' ~!@#$%^&* ()-_=+\\| [{}];: ' \", <. >/?, not the same as the user name or the user name, the old and new password at least two characters in a different position."
        },
        //baselineCreate
        {
            "type": "Base.1.0.1.0.PasswordNotSatisfyComplexity",
            "Message": "密码不符合复杂度要求。",
            "NumberOfArgs": 1,
            "Resolution": "The length is 8-20 characters, contains at least uppercase and lowercase letters, two characters in a number, and contains at least one space or the following special characters: ' ~!@#$%^&* ()-_=+\\| [{}];: ' \", <. >/?, not the same as the user name or the user name."
        },
        //    升级页面最新适配
        {
            "type": "Base.1.0.UnknownError",
            "Message": "An unknown error occurred at the bottom of the device.",
            "NumberOfArgs": 0,
            "Resolution": "Two attempts may be made, if errors still occur please contact Huawei Engineer to locate."
        },
        {
            "type": "Base.1.0.FilenameError",
            "Message": "The upgrade package name length exceeds the limit.",
            "NumberOfArgs": 0,
            "Resolution": "Please check to see if the upgrade package name is in line with the specification and if an error still occurs please contact Huawei Engineer for positioning."
        },
        {
            "type": "Base.1.0.FileLengthError",
            "Message": "The upgrade package size could not be obtained, or the upgrade package size exceeded the limit or was out of memory.",
            "NumberOfArgs": 0,
            "Resolution": "Please check the upgrade package size, if the error still occurs please contact Huawei Engineer Positioning."
        },
        {
            "type": "Base.1.0.FileError",
            "Message": "File conversion failed in upgrade package and conversion cannot be completed.",
            "NumberOfArgs": 0,
            "Resolution": "Please check that the upgrade package file is correct, and if an error still occurs please contact Huawei Engineer to locate."
        },
        {
            "type": "Base.1.0.ProtocolError",
            "Message": "The conversion protocol is not allowed to be used in the current environment when upgrading package file conversions.",
            "NumberOfArgs": 0,
            "Resolution": "Please check that the upgrade package file is correct, and if an error still occurs please contact Huawei Engineer to locate."
        },
        {
            "type": "Base.1.0.FilePathError",
            "Message": "The upgrade package path is incorrect.",
            "NumberOfArgs": 0,
            "Resolution": "Please confirm that the upgrade package is in the correct path, and if an error persists please contact Huawei Engineer to locate."
        },
        {
            "type": "Base.1.0.UpgradeFileError",
            "Message": "Upgrade package does not exist.",
            "NumberOfArgs": 0,
            "Resolution": "Please confirm that the upgrade package exists and if an error persists please contact Huawei Engineer to locate."
        },
        {
            "type": "Base.1.0.InvalidFileError",
            "Message": "An invalid upgrade package.",
            "NumberOfArgs": 0,
            "Resolution": "Please confirm that the upgrade package is valid and if an error still occurs please contact Huawei Engineer for positioning."
        },
        {
            "type": "Base.1.0.MemoryError",
            "Message": "The amount of memory that was upgraded is insufficient.",
            "NumberOfArgs": 0,
            "Resolution": "Two attempts may be made, if errors still occur please contact Huawei Engineer to locate."
        },
        {
            "type": "Base.1.0.OSError",
            "Message": "An error occurred while starting the BIOS upgrade after shutting down the operating system.",
            "NumberOfArgs": 0,
            "Resolution": "Two attempts may be made, if errors still occur please contact Huawei Engineer to locate."
        },
        {
            "type": "Base.1.0.VersionError",
            "Message": "The firmware version does not match.",
            "NumberOfArgs": 0,
            "Resolution": "Please make sure the firmware version is correct and if the error still occurs please contact Huawei Engineer to locate."
        },
        {
            "type": "Base.1.0.MatchError",
            "Message": "The upgrade package does not match the device that will be upgraded.",
            "NumberOfArgs": 0,
            "Resolution": "Please confirm that the upgrade package matches the upgrade device, and if an error persists please contact Huawei Engineer to locate."
        },
        {
            "type": "Base.1.0.BIOSError",
            "Message": "Incorrect me status causes BIOS failure.",
            "NumberOfArgs": 0,
            "Resolution": "Two attempts may be made, if errors still occur please contact Huawei Engineer to locate."
        },
        {
            "type": "Base.1.0.UpgradeProgressError",
            "Message": "An error occurred during the upgrade process.",
            "NumberOfArgs": 0,
            "Resolution": "Two attempts may be made, if errors still occur please contact Huawei Engineer to locate."
        },
        {
            "type": "Base.1.0.UpgradeError",
            "Message": "Upgrade failed.",
            "NumberOfArgs": 0,
            "Resolution": "Two attempts may be made, if errors still occur please contact Huawei Engineer to locate."
        },
        //    chh
        {
            "type": 'Examine.1.0.GetServerInfoFailed',
            "Message": "Get server information failed, device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure that the server be normal nanotubes, resubmit the request."

        },
        {
            "type": 'Examine.1.0.SaveExamineResultsFailed',
            "Message": "Save examine results failed，device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure that the server be normal nanotubes, resubmit the request."
        },
        {
            "type": 'Examine.1.0.ChangeCMDBStatusFailed',
            "Message": "Set CMDB status to BMC_Ready failed, device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure the network connection is normal, the user permission to meet the conditions, the device has been entered into the CMDB, resubmit the request."
        },
        {
            "type": 'Examine.1.0.DeviceOffline',
            "Message": "The server is offline and cannot be checked or determined. The device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure that the server be normal nanotubes, resubmit the request."

        },
        {
            "type": 'Examine.1.0.DeviceLocked',
            "Message": "The server is locked and cannot be checked or determined. The device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure that the server be normal nanotubes, resubmit the request."

        },
        {
            "type": 'Examine.1.0.GetCMDBStatusFailed',
            "Message": "Get CMDB status failed, device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure the network connection is normal, the user permission to meet the conditions, the device has been entered into the CMDB, resubmit the request."
        },
        {
            "type": 'Examine.1.0.ExportSPRaidFailed',
            "Message": "Export 3008Raid inforamtion failed, device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure that the server be normal nanotubes, resubmit the request."
        },
        {
            "type": 'Examine.1.0.SPRaidModelError',
            "Message": "RAID does not support out-of-band management and is not 3008RAID, device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Checking for in-band RAID cards other than 3008RAID is not supported."
        },
        {
            "type": 'Examine.1.0.ResetInBandFailed',
            "Message": "Server restart in band failed, device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure that the server be normal nanotubes, resubmit the request."
        },
        {
            "type": 'Examine.1.0.PatchSPServiceFailed',
            "Message": "Set server restart item failed, device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure that the server be normal nanotubes, resubmit the request."
        },
        {
            "type": 'Examine.1.0.GetSPResultFailed',
            "Message": "Get export result failed, device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure that the server be normal nanotubes, resubmit the request."
        },
        {
            "type": 'Examine.1.0.GetSPTaskResultTimeout',
            "Message": "Get export result timeout, device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please reduce the number of servers to be checked, resubmit the request."
        },
        {
            "type": 'Examine.1.0.SPTaskFailed',
            "Message": "Export 3008RAID information failed, device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure that no action is taken on the server when examining server, resubmit the request."
        },
        {
            "type": 'Examine.1.0.CMDBStatusNotOnRack',
            "Message": "The CMDB status of the server is not OnRack, device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure that the CMDB status of the server is OnRack, resubmit the request."
        },
        {
            "type": 'Examine.1.0.GetOptionIDFailed',
            "Message": "Failed to lock the server operation, device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure that the CMDB status of the server is OnRack, resubmit the request."
        },
        {
            "type": 'Examine.1.0.CheckBIOSVersionFailed',
            "Message": "The version of BIOS is {1},which is lower than or equal to 0.39.",
            "NumberOfArgs": 1,
            "Resolution": "Please update the version of BIOS, resubmit the request."
        },
        {
            "type": 'Examine.1.0.CheckSPVersionFailed',
            "Message": "The version of SP is {1},which is lower than 1.13.",
            "NumberOfArgs": 1,
            "Resolution": "Please update the version of SP, resubmit the request."
        },
        {
            "type": 'Examine.1.0.InternalError',
            "Message": "The request failed due to an internal service error.",
            "NumberOfArgs": 1,
            "Resolution": "Resubmit the request.  If the problem persists, consider resetting the service."
        },
        {
            "type": 'Examine.1.0.InsufficientPrivilege',
            "Message": "No permission for operation of this device.Please check user permissions，device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please check user permissions and operation domain. Retry after improve permissions or expand the operating field."
        },
        //    设备管理
        {
            "type": "FusionDirector.1.0.DevMgmtInternalError",
            "Message": "Internal error.",
            "NumberOfArgs": 0,
            "Resolution": "For details, contact Huawei engineers."
        },
        {
            "type": "FusionDirector.1.0.DevMgmtMissingServerInfo",
            "Message": "Missing info for add server.",
            "NumberOfArgs": 0,
            "Resolution": "Delete the server and then re-add it."
        },
        {
            "type": "FusionDirector.1.0.DevMgmtConnectTimeout",
            "Message": "Connect the server which want to add timeout.",
            "NumberOfArgs": 0,
            "Resolution": "Check the server connection."
        },
        {
            "type": "FusionDirector.1.0.DevMgmtAuthenticationFailed",
            "Message": "Authentication failed.",
            "NumberOfArgs": 0,
            "Resolution": "Wrong username or password."
        },
        {
            "type": "FusionDirector.1.0.DevMgmtNotSupport",
            "Message": "Unknown device.",
            "NumberOfArgs": 0,
            "Resolution": "The device not support for add."
        },
        {
            "type": "FusionDirector.1.0.DevMgmtGetServerUUIDFailed",
            "Message": "Failed to get server uuid.",
            "NumberOfArgs": 0,
            "Resolution": "Failed to get server uuid."
        },
        {
            "type": "FusionDirector.1.0.DevMgmtServerBeGoverning",
            "Message": "Server are being added.",
            "NumberOfArgs": 0,
            "Resolution": "Operation restricted. Please try again later."
        },
        {
            "type": "FusionDirector.1.0.DevMgmtServerHasBeenGoverned",
            "Message": "Server has been added.",
            "NumberOfArgs": 0,
            "Resolution": "Do not re-add."
        },
        {
            "type": "FusionDirector.1.0.DevMgmtFDRestart",
            "Message": "Fusion director restart.",
            "NumberOfArgs": 0,
            "Resolution": "None"
        },
        {
            "type": "DevMgmt.1.0.UnDefined",
            "Message": "UnDefined error.",
            "NumberOfArgs": 0,
            "Resolution": "For details, contact Huawei engineers."
        },
        {
            "type": "FusionDirector.1.0.DevMgmtOvertime",
            "Message": "Overtime to add.",
            "NumberOfArgs": 0,
            "Resolution": "Delete the server and then repeat add it."
        },
        {
            "type": "FusionDirector.1.0.DevMgmtServerManagedByOtherFD",
            "Message": "The device has been managed by another FusionDirector system.",
            "NumberOfArgs": 0,
            "Resolution": "To avoid conflicts, the device can be managed by only one FusionDirector system. If you want to manage the device, select Forcible Management in the Retry operation."
        },
        //    系统升级
        {
            "type": "FDUpgrade.1.0.CheckEnvironmentFailed",
            "Message": "Check upgrade environment failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please check upgrade environment and ensure disk space is enough."
        },
        {
            "type": "FDUpgrade.1.0.CheckEnvironmentSuccess",
            "Message": "Check upgrade environment successfully.",
            "NumberOfArgs": 0,
            "Resolution": "None."
        },
        {
            "type": "FDUpgrade.1.0.CheckPackageFailed",
            "Message": "Check upgrade package failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please ensure the package name is legal and cms file is correct."
        },
        {
            "type": "FDUpgrade.1.0.CheckPackageSuccess",
            "Message": "Check upgrade package successfully.",
            "NumberOfArgs": 0,
            "Resolution": "None."
        },
        {
            "type": "FDUpgrade.1.0.UnzipPackageFailed",
            "Message": "Unzip upgrade package failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please ensure the package is correct."
        },
        {
            "type": "FDUpgrade.1.0.UnzipPackageSuccess",
            "Message": "Unzip upgrade package successfully.",
            "NumberOfArgs": 0,
            "Resolution": "None."
        },
        {
            "type": "FDUpgrade.1.0.UpgradeFailed",
            "Message": "Upgrade os failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please check iso file is correct."
        },
        {
            "type": "FDUpgrade.1.0.UpgradeSuccess",
            "Message": "Upgrade os successfully.",
            "NumberOfArgs": 0,
            "Resolution": "None."
        },
        //    任务管理
        {
            "type": "Task.1.0.Timeout",
            "Message": "The task has been time out.",
            "NumberOfArgs": 0,
            "Resolution": "Resubmit the request if the operation failed."
        },
        {
            "type": "Task.1.0.ServiceRestart",
            "Message": "The service has been restarted.",
            "NumberOfArgs": 0,
            "Resolution": "Resubmit the request if the operation failed."
        },
        //    配置规划
        {
            "type": 'ConfigService.1.0.ImportPlanningEncryptError',
            "Message": "Encrypt userinfo failed.",
            "NumberOfArgs": 0,
            "Resolution": "Resubmit the request if the operation failed."

        },
        {
            "type": 'ConfigService.1.0.ImportPlanningWriteDBError',
            "Message": "Write data to DB failed.",
            "NumberOfArgs": 0,
            "Resolution": "Resubmit the request if the operation failed."
        },
        {
            "type": 'ConfigService.1.0.ImportPlanningWriteDHCPServerError',
            "Message": "Write data to DHCPServer failed.",
            "NumberOfArgs": 0,
            "Resolution": "Resubmit the request if the operation failed."
        },
        //    wei
        {
            "type": "Device.1.0.Updating",
            "Message": "The device is being upgraded.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.DeployingProfile",
            "Message": "The device is in the profile configuration.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.DeployingOS",
            "Message": "The device is deploying an operating system.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.Reseting",
            "Message": "The device is power up and down.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.CreatingBonding",
            "Message": "The device is creating a network port binding.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.ModifyingEthInfo",
            "Message": "The device is modifying the Ethernet port information.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.CreatingVLAN",
            "Message": "The device is creating a VLAN network port.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.ModifyingVLAN",
            "Message": "The device is modifying VLAN network port information.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.SettingOSInstallParameter",
            "Message": "The device is setting the SP deployment operating system parameters.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.SettingCloneParameter",
            "Message": "The device is setting the SP cloning operating system parameters.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.SettingRecoverParameter",
            "Message": "The device is setting up SP Quick Deploy operating system parameters.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.SettingVirtualMedia",
            "Message": "The device is mounting virtual media.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.CreatingVolume",
            "Message": "The device is creating a logical disk.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.ActivatingFirmware",
            "Message": "The device is in effect for the firmware version.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.ModifyingAccount",
            "Message": "The device is modifying the default account information.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.ModifyingBonding",
            "Message": "The device is modifying the network port binding information.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.SettingBIOS",
            "Message": "The device is modifying the BIOS configuration.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.ModifyingSP",
            "Message": "The device is configuring SP information.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.ModifyingVolume",
            "Message": "The device is modifying the logical disk information.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.DeletingBonding",
            "Message": "The device is removing the network port bindings.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.DeletingVLAN",
            "Message": "The device is removing the VLAN gateway.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.DeletingVolume",
            "Message": "The device is removing the logical disk.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Device.1.0.DeletingDevice",
            "Message": "The device is being deleted.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": "Node.1.0.OperateDatabseError",
            "Message": "Database access failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "Task.1.0.Timeout",
            "Message": "Task execution timed out.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "Task.1.0.ServiceRestart",
            "Message": "Fusiondirector is restarted.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "Deploy.1.0.OperateRedisError",
            "Message": "Cache data Read exception.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "Deploy.1.0.ImageSizeError",
            "Message": "The mirror size is not valid.",
            "NumberOfArgs": 0,
            "Resolution": "Please upload a new image and resubmit the request."
        },
        {
            "type": "Deploy.1.0.CheckCodeError",
            "Message": "Invalid mirror check code.",
            "NumberOfArgs": 0,
            "Resolution": "Please enter the correct check code and resubmit the request."
        },
        {
            "type": "Deploy.1.0.MoveImageError",
            "Message": "The move mirror failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "Deploy.1.0.OperateDatabseError",
            "Message": "Database access failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "Task.1.0.InternalError",
            "Message": "An internal error has occurred.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "Deploy.1.0.IllegalParameter",
            "Message": "Invalid task parameter, parameter field {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please change the task parameters and resubmit the request."
        },
        {
            "type": "Deploy.1.0.CheckDeviceFailed",
            "Message": "The device information check failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "Deploy.1.0.SetDeployParamError",
            "Message": "Failed to set deployment parameters.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "Deploy.1.0.LinkVirMediaError",
            "Message": "Failed to mount Virtual media.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "Deploy.1.0.SetSPStartError",
            "Message": "Setup failed to boot and reboot the device from SP.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "Deploy.1.0. DeployOSFailed",
            "Message": "Failed to deploy operating system.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "Device.1.0.DeviceFault",
            "Message": "The device has failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please check the device and resubmit the request."
        },

        //ibmc庄户管理
        {
            "type": 'iBMC.1.0.PasswordNotSatisfyComplexity',
            "Message": "The property Password cannot be modified because the password does not meet password complexity requirements.",
            "NumberOfArgs": 1,
            "Resolution": "Try again using a correct password."
        },
        {
            "type": 'Base.1.0.ResourceAlreadyExists',
            "Message": "The requested resource already exists.",
            "NumberOfArgs": 1,
            "Resolution": "Do not repeat the create operation as the resource has already been created."
        },
        {
            "type": 'iBMC.1.0.InvalidPasswordSameWithHistory',
            "Message": "The password is invalid because it is same with history",
            "NumberOfArgs": 1,
            "Resolution": "Try again using a correct password."
        },

        {
            "type": 'iBMC.1.0.PropertyValueExceedsMaxLength',
            "Message": "The value for the property UserName cannot exceed 16 characters.",
            "NumberOfArgs": 1,
            "Resolution": "Try again using a correct value."
        },
        {
            "type": 'iBMC.1.0.InvalidPassword',
            "Message": "The password is invalid because it is empty.",
            "NumberOfArgs": 1,
            "Resolution": "Try again using a correct password."
        },
        {
            "type": 'iBMC.1.0.PasswordInWeakPWDDict',
            "Message": "The password is invalid because it is in weak pasword dict.",
            "NumberOfArgs": 1,
            "Resolution": "Try again using a correct password."
        },
        {
            "type": 'Enclosure.1.0.TaskSubCallFail',
            "Message": "Query device progress fail.",
            "NumberOfArgs": 0,
            "Resolution": "Make sure device connect ok，refresh enclosure and try again"

        },
        {
            "type": 'Enclosure.1.0.TaskExecFail',
            "Message": "Task execute fail.",
            "NumberOfArgs": 0,
            "Resolution": "For details, contact Huawei engineers."
        },
        {
            "type": 'Enclosure.1.0.TaskExecTimeout',
            "Message": "Task execute timeout.",
            "NumberOfArgs": 0,
            "Resolution": "For details, contact Huawei engineers."
        },
        {
            "type": 'Enclosure.1.0.TaskApplyFail',
            "Message": "Enclosure Profile apply fail，fail items:{1} ,success items:{2}",
            "NumberOfArgs": 2,
            "Resolution": "Check fail locations, and apply again."
        },
        //日志
        {
            "type": 'Examine.1.0.QueryMacTableFailed',
            "Message": "Query Mac table failed, device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure that the switch module be normal nanotubes, resubmit the request."
        },
        {
            "type": 'Examine.1.0.CollectSwitchLogFailed',
            "Message": "Collect log of switch module failed, switch module is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure that the switch module be normal nanotubes, resubmit the request."
        },
        {
            "type": 'Examine.1.0.CollectSwitchLogBySlotFailed',
            "Message": "Collect log of switch module failed, enclosure id is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure that the switch module be normal nanotubes, resubmit the request."
        },
        {
            "type": 'Examine.1.0.CollectSwitchLogBySlotPartiallyFinish',
            "Message": "Collect log of switch module partially successful, the list of planes which collect log failed are {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure that the device be normal nanotubes, resubmit the request."
        },
        {
            "type": 'Examine.1.0.Timeout',
            "Message": "Operation timeout",
            "NumberOfArgs": 0,
            "Resolution": "Please make sure that the device be normal nanotubes, resubmit the request."
        },
        {
            "type": "Device.1.0.ModifyingBMCIPv4",
            "Message": "The Device is Modifying iBMC IPv4",
            "NumberOfArgs": 0,
            "Resolution": "The device is changing IPv4 now, please retry later"
        },
        {
            "type": 'FusionDirector.1.0.DevMgmtModelTypeMiss',
            "Message": "The model value is missing from the device.",
            "NumberOfArgs": 0,
            "Resolution": "Check whether the model value is missing."
        }, {
            "type": 'FusionDirector.1.0.DevMgmtMacOrSnMiss',
            "Message": "The device does not have the MAC or SN value.",
            "NumberOfArgs": 0,
            "Resolution": "Check whether the MAC address or SN of the device is correct."
        },
        {
            "type": "Upgrade.1.0.UnknownErr",
            "Message": "Unknown error.",
            "NumberOfArgs": 0,
            "Resolution": "For details, contact Huawei engineers."
        },
        {
            "type": "Upgrade.1.0.UpgradeFailedErr",
            "Message": "The upgrade task processing times out.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.TaskTimeOutErr",
            "Message": "Task processing timed out.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.DoActiveProcessing",
            "Message": "The effective task is being executed.",
            "NumberOfArgs": 0,
            "Resolution": "None"
        },
        {
            "type": "Upgrade.1.0.DoActiveFailedErr",
            "Message": "Failed to execute the effective task.",
            "NumberOfArgs": 0,
            "Resolution": "None"
        },
        {
            "type": "Upgrade.1.0.SetDeviceLockFailedErr",
            "Message": "Failed to operate the device.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.GetDeviceLockFailedErr",
            "Message": "Operation conflict. Other operations are being performed on the device.",
            "NumberOfArgs": 0,
            "Resolution": "Check whether other configurations are being performed on the device. If the device is idle, deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.PostFirmwareActivateFailedErr",
            "Message": "The delivery fails to take effect.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.UpgradeFinish",
            "Message": "The upgrade is successful.",
            "NumberOfArgs": 0,
            "Resolution": "None"
        },
        {
            "type": "Upgrade.1.0.DoUpgradeProcessing",
            "Message": "The upgrade task is being executed.",
            "NumberOfArgs": 0,
            "Resolution": "None"
        },
        {
            "type": "Upgrade.1.0.GetDeivceInfoFailedErr",
            "Message": "Failed to obtain the information about the device to be upgraded.",
            "NumberOfArgs": 0,
            "Resolution": "Check the upgrade device and deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.GetDeivceIDFailedErr",
            "Message": "Failed to obtain the ID of the device to be upgraded.",
            "NumberOfArgs": 0,
            "Resolution": "Check the upgrade device and deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.GetActiveStatusAndVersionByIDFailedErr",
            "Message": "Failed to obtain the device effective status.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.DeviceActiveStatusIsNoActive",
            "Message": "The device is in the to-be-validated state and cannot be upgraded.",
            "NumberOfArgs": 0,
            "Resolution": "Manually make the device take effect and then perform the upgrade task."
        },
        {
            "type": "Upgrade.1.0.PostUpgradeFailedErr",
            "Message": "Failed to deliver the upgrade.",
            "NumberOfArgs": 0,
            "Resolution": "Check the network or the device to be upgraded and deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.GetNewJsonFailedErr",
            "Message": "An internal error occurs during the upgrade.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.GetMissedDeviceIDsFailedErr",
            "Message": "An internal error occurs during the upgrade.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.GetUpgProgressFailedErr",
            "Message": "An internal error occurs during task management when the upgrade progress is being obtained.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.GetUpgProgressRespFailedErr",
            "Message": "Failed to obtain the upgrade progress.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.UnmarshalFailedErr",
            "Message": "Failed to convert the task information in deserialization mode.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.GetProgressInfoFailedErr",
            "Message": "An internal error occurred when obtaining the upgrade progress information.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.GetProgressInfoStatusFailedErr",
            "Message": "Failed to obtain the upgrade status in the upgrade information.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.GetProgressInfoProgressFailedErr",
            "Message": "Failed to obtain the upgrade progress in the upgrade information.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.GetProgressDataFailedErr",
            "Message": "An internal error occurred when obtaining the upgrade progress.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.GetProgressMesgsFailedErr",
            "Message": "Failed to obtain the upgrade progress information.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.GetProgressMesgFailedErr",
            "Message": "Failed to obtain the upgrade progress information.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.Message2MessageIdFailedErr",
            "Message": "Failed to obtain the upgrade progress information. An internal error occurred.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.DoUpgradeFailedErr",
            "Message": "The upgrade task fails and an internal error occurs.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.StartUpgrade",
            "Message": "Start the upgrade task.",
            "NumberOfArgs": 0,
            "Resolution": "None"
        },
        {
            "type": "Upgrade.1.0.StartActive",
            "Message": "Start the effective task.",
            "NumberOfArgs": 0,
            "Resolution": "None"
        },
        {
            "type": "Upgrade.1.0.StartImportFile",
            "Message": "Start the file import task.",
            "NumberOfArgs": 0,
            "Resolution": ""
        },
        {
            "type": "Upgrade.1.0.StartSubUpgrade",
            "Message": "Start the upgrade subtask.",
            "NumberOfArgs": 0,
            "Resolution": "None"
        },
        {
            "type": "Upgrade.1.0.DoUploadFileFailedErr",
            "Message": "Failed to import the file.",
            "NumberOfArgs": 0,
            "Resolution": "Import the file again."
        },
        {
            "type": "Upgrade.1.0.DoUploadFileProcessing",
            "Message": "The file is being imported.",
            "NumberOfArgs": 0,
            "Resolution": "None"
        },
        {
            "type": "Upgrade.1.0.UploadFileOK",
            "Message": "The file is imported successfully.",
            "NumberOfArgs": 0,
            "Resolution": "None"
        },
        {
            "type": "Upgrade.1.0.GetActiveModeByPathErr",
            "Message": "Failed to obtain the firmware package effective information.",
            "NumberOfArgs": 0,
            "Resolution": "Check the firmware package and deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.UpgradeSameVersionFailedErr",
            "Message": "Upgrade to the same version fails.",
            "NumberOfArgs": 0,
            "Resolution": "The current version does not support the upgrade of the same version. Filter out the upgrade tasks of the same version."
        },
        {
            "type": "Upgrade.1.0.UpgradingEnclosureLockErr",
            "Message": "The upgrade task fails and an internal error occurs.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.BuildAsyncTaskSignatureErr",
            "Message": "The upgrade task fails and an internal error occurs.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.SendAsyncTaskSignatureErr",
            "Message": "The upgrade task fails and an internal error occurs.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.PostUpgradeRequestErr",
            "Message": "Failed to deliver the upgrade.",
            "NumberOfArgs": 0,
            "Resolution": "Check the network or the device to be upgraded and deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.UpgradeResponseCodeErr",
            "Message": "Failed to deliver the upgrade.",
            "NumberOfArgs": 0,
            "Resolution": "Check the network or the device to be upgraded and deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.DeviceNotUpgradeErr",
            "Message": "The device is not upgraded.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.DoUpgradeFinish",
            "Message": "The upgrade is successful.",
            "NumberOfArgs": 0,
            "Resolution": "None"
        },
        {
            "type": "Upgrade.1.0.DoActiveFinish",
            "Message": "The operation is successful.",
            "NumberOfArgs": 0,
            "Resolution": "None"
        },
        {
            "type": "Upgrade.1.0.CheckManagerUpgradeStatusErr",
            "Message": "The upgrade of the management board is incorrect, and the upgrade fails to take effect.",
            "NumberOfArgs": 0,
            "Resolution": "Check the network or the device to be upgraded and deliver the upgrade task again."
        },
        {
            "type": "Upgrade.1.0.CheckUpgradeParaErr",
            "Message": "The upgrade parameter is incorrect.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": 'iBMC.1.0.FruNotExist',
            "Message": "FRU {1} is not found.",
            "NumberOfArgs": 1,
            "Resolution": "Check that the FRU exists, and try again."

        },
        {
            "type": 'iBMC.1.0.ActionFailedByPowerOff',
            "Message": "The action GracefulShutdown failed because the device is powered off.",
            "NumberOfArgs": 1,
            "Resolution": "Ensure that the device is powered on and try again."
        },
        {
            "type": "Upgrade.1.0.CheckDoUpgradeNumErr",
            "Message": "Failed to obtain the number of current upgrade tasks.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the upgrade task again."
        },
        {
            "type": "Config.1.0.UnknownErr",
            "Message": "Unknown error.",
            "NumberOfArgs": 0,
            "Resolution": "Contact Huawei engineers to locate the fault."
        },
        {
            "type": "Config.1.0.TaskTimeOutErr",
            "Message": "Task processing timed out.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.BIOSActiveFailedErr",
            "Message": "The BIOS fails to take effect.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.BIOSConfigFailedErr",
            "Message": "BIOS configuration failed.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.RAIDConfigFailedErr",
            "Message": "Failed to configure the RAID.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.ResetFailedErr",
            "Message": "Failed to issue the restart command.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.RAIDInfoCheckingFailedErr",
            "Message": "Failed to verify the RAID.",
            "NumberOfArgs": 0,
            "Resolution": "Check the RAID configuration and deliver the configuration task again."
        },
        {
            "type": "Config.1.0.RAIDInfoCheckNotPassErr",
            "Message": "The RAID check fails.",
            "NumberOfArgs": 0,
            "Resolution": "Check the RAID configuration and deliver the configuration task again."
        },
        {
            "type": "Config.1.0.BMCConfigFailedErr",
            "Message": "Failed to configure the BMC.",
            "NumberOfArgs": 0,
            "Resolution": "Check the BMC configuration and deliver the configuration task again."
        },
        {
            "type": "Config.1.0.MEZZConfigFailedErr",
            "Message": "Failed to configure the mezzanine card.",
            "NumberOfArgs": 0,
            "Resolution": "Check the mezzanine card configuration and resend the configuration task."
        },
        {
            "type": "Config.1.0.GetOperationIDFailedErr",
            "Message": "Operation conflict. Other operations are being performed on the device.",
            "NumberOfArgs": 0,
            "Resolution": "Check whether other configurations are being performed on the device. If the device is idle, deliver the configuration task again."
        },
        {
            "type": "Config.1.0.GetEthernetFailedErr",
            "Message": "Failed to obtain the configuration network information.",
            "NumberOfArgs": 0,
            "Resolution": "Check the network port and deliver the configuration task again."
        },
        {
            "type": "Config.1.0.ConfigEthernetFailedErr",
            "Message": "Failed to deliver the network configuration.",
            "NumberOfArgs": 0,
            "Resolution": "Check the network configuration and deliver the configuration task again."
        },
        {
            "type": "Config.1.0.GetErrInfoFromRespFailedErr",
            "Message": "The response body is abnormal.",
            "NumberOfArgs": 0,
            "Resolution": "Check the configuration and deliver the configuration task again."
        },
        {
            "type": "Config.1.0.GetFDAsNTPServerJs",
            "Message": " Failed to check whether the current device functions as the NTP server.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.MarshalFailedErr",
            "Message": "Failed to convert the configuration information serialization.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.GetSouthOutBandIPFromClusterFailedErr",
            "Message": "Failed to obtain the southbound IP address from the NTP configuration.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.UnmarshalFailedErr",
            "Message": "Failed to convert the configuration information in deserialization mode.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.ConfigNTPFailedErr",
            "Message": "Failed to configure NTP.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.JsonToStringFailedErr",
            "Message": "Failed to convert the JSON format to a character string.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.GetNTPKeyFromClusterMgmtFailedErr",
            "Message": "Failed to obtain the NTP Key from the cluster.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.GetNTPKeyURLFailedErr",
            "Message": "Failed to obtain the NTP Key URL.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.CheckLDAPEnableConfigFailedErr",
            "Message": "Failed to check whether the LDAP field is enabled.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.GetLoginRuleFailedErr",
            "Message": "Failed to check the login rule.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.ConfigLDAPEnableFailedErr",
            "Message": "Failed to enable the LDAP function.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.ConfigLoginRuleFailedErr",
            "Message": "Failed to configure the login rule.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.CheckNTPAttrFailedErr",
            "Message": "Failed to obtain the NTP configuration attribute.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.ConfigNTPAttrFailedErr",
            "Message": "Failed to configure NTP attributes.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.GetFirstEthFailedErr",
            "Message": "Failed to obtain the configuration of the first network port.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.ConfigMZ520MZ522FailedErr",
            "Message": "Failed to configure MZ520 or MZ522.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.GetMezz520Or522DynamicDataMacFailedErr",
            "Message": "Failed to obtain the MEZZ520 or MZ522 because the MAC address of the stateless data fails to be obtained.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.GetMezz520Or522DynamicDataWWNFailedErr",
            "Message": "Failed to obtain the WWN of the stateless data of MEZZ520 or MZ522.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.GetMezz520Or522DynamicDataVlanFailedErr",
            "Message": "Failed to obtain the MEZZ520 or MZ522.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.ConfigLOMFailedErr",
            "Message": "Failed to configure the LOM card.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.ConfigFabricsModeFailedErr",
            "Message": "Failed to configure the topology mode.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.ConfigFabricesFailedErr",
            "Message": "Failed to configure the topology mode.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        {
            "type": "Config.1.0.CompositionModeFailedErr",
            "Message": "Failed to configure the topology input parameter.",
            "NumberOfArgs": 0,
            "Resolution": "Deliver the configuration again."
        },
        //mkx
        {
            "type": 'Backup.1.0.GetClusterMasterNodeFailed',
            "Message": "Failed to obtain the active node in the cluster.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that all nodes in the cluster are normal and submit the request again."

        },
        {
            "type": 'Backup.1.0.ExportDataFromDBFailed',
            "Message": "Failed to export data from the database.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the database is running properly and submit the request again."
        },
        {
            "type": 'Backup.1.0.GetBackupFilesFailed',
            "Message": "Failed to obtain the backup file of each microservice.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that all microservices are running properly and submit the request again."
        },
        {
            "type": 'Backup.1.0.CompressDataFailed',
            "Message": "Failed to compress the backup data.",
            "NumberOfArgs": 0,
            "Resolution": "An internal error occurred. Contact Huawei engineers."

        },
        {
            "type": 'Restore.1.0.EnvCheckFailed',
            "Message": "Failed to restore the environment check.",
            "NumberOfArgs": 0,
            "Resolution": "Check whether the version of the backup package is compatible with the current system version. If yes, submit the request again."

        },
        {
            "type": 'Restore.1.0.EnvPrepareFailed',
            "Message": "Failed to prepare the restoration environment.",
            "NumberOfArgs": 0,
            "Resolution": "An internal error occurred. Contact Huawei engineers."

        },
        {
            "type": 'Restore.1.0.ImportDataToDBFailed',
            "Message": "Failed to import data to the database.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the database is running properly and submit the request again."

        },
        {
            "type": 'Restore.1.0.RetoreServiceFilesFailed',
            "Message": "Failed to restore the configuration file of each microservice.",
            "NumberOfArgs": 0,
            "Resolution": "An internal error occurred. Contact Huawei engineers."

        },
        {
            "type": 'Restore.1.0.UpdateSerivceFailed',
            "Message": "Failed to update the microservice.",
            "NumberOfArgs": 0,
            "Resolution": "An internal error occurred. Contact Huawei engineers."

        },
        {
            "type": 'Upgrade.1.0.EnvCheckFailed',
            "Message": "Failed to check the upgrade environment.",
            "NumberOfArgs": 0,
            "Resolution": "Check whether the disk space is sufficient and whether the version is compatible."

        },
        {
            "type": 'Upgrade.1.0.EnvPrepareFailed',
            "Message": "Failed to prepare the upgrade environment.",
            "NumberOfArgs": 0,
            "Resolution": "An internal error occurred. Contact Huawei engineers."

        },
        {
            "type": 'Upgrade.1.0.UpgradeFailed',
            "Message": "The upgrade fails.",
            "NumberOfArgs": 0,
            "Resolution": "An internal error occurred. Contact Huawei engineers."

        },
        {
            "type": 'Activated.1.0.ActivatedFailed',
            "Message": "Failed to take effect.",
            "NumberOfArgs": 0,
            "Resolution": "An internal error occurred. Contact Huawei engineers."

        },
        {
            "type": 'Activated.1.0.VersionCheckedFailed',
            "Message": "Failed to check the effective version.",
            "NumberOfArgs": 0,
            "Resolution": "An internal error occurred. Contact Huawei engineers."

        },
        {
            "type": 'Upgrade.1.0.GetCurrentVersionFailed',
            "Message": "The current version of nodes in the cluster is inconsistent.",
            "NumberOfArgs": 0,
            "Resolution": "None."

        },
        {
            "type": 'Upgrade.1.0.GetInactiveVersionFailed',
            "Message": "The versions of the nodes in the cluster are inconsistent.",
            "NumberOfArgs": 0,
            "Resolution": "None."

        },
        //    lgy
        {
            "type": 'DevMgmt.1.0.ServerIsNotGoverned',
            "Message": "The server is not managed.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the server is properly managed and submit the request again."
        },
        {
            "type": 'DevMgmt.1.0.ServerStateIsNotOnline',
            "Message": "The server is offline.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the server is online and submit the request again."
        },
        {
            "type": 'DevMgmt.1.0.ServerCallBMCRestoreFactoryError',
            "Message": "Failed to restore the BMC to factory defaults.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the network connection is normal, the user permission meets the requirements, and the request is submitted again."
        },
        {
            "type": 'DevMgmt.1.0.ServerIsNotExist',
            "Message": "The server does not exist.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the server is properly managed and submit the request again."

        },
        {
            "type": 'DevMgmt.1.0.ServerLinkStateIsNotEnable',
            "Message": "The heartbeat of the server is lost.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the server is properly managed and submit the request again."

        },
        {
            "type": 'DevMgmt.1.0.ServerPowerStateIsOn',
            "Message": "The server is powered on in in-band mode.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the server is powered off and then submit the request again."

        },
        {
            "type": 'DevMgmt.1.0.ServerReleaseRepeated',
            "Message": "The request for bringing the server offline is repeated.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the server does not send a logout request and submit the request again."
        },
        {
            "type": 'DevMgmt.1.0.ServerDeleteFailed',
            "Message": "Succeeded in restoring the server to factory settings but failed to delete the server.",
            "NumberOfArgs": 0,
            "Resolution": "Submit the request again or manually delete the server."
        },
        {
            "type": 'DevMgmt.1.0.CallBMCError',
            "Message": "An exception occurred when invoking the server interface.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the network connection is normal, the user permission meets the requirements, and the request is submitted again."
        },
        {
            "type": 'Network.1.0.InternalError',
            "Message": "Internal error.",
            "NumberOfArgs": 0,
            "Resolution": "An internal error occurred. Contact Huawei engineers."
        },
        {
            "type": 'Network.1.0.QueryMacTableFailed',
            "Message": "Failed to query the switch MAC address entry. The device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Ensure that the switch module functions properly and submit the request again."
        },
        {
            "type": 'Network.1.0.CollectSwitchLogFailed',
            "Message": "Failed to collect switch logs. The switch module is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Ensure that the switch module functions properly and submit the request again."
        },
        {
            "type": 'Network.1.0.CollectSwitchLogBySlotFailed',
            "Message": "Failed to collect switch logs. The shelf ID is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Ensure that the switch module functions properly and submit the request again."
        },
        {
            "type": 'Network.1.0.CollectSwitchLogBySlotPartiallyFinish',
            "Message": "The switch module log collection is partially successful. The failed plane list is as follows: {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Ensure that the switch module functions properly and submit the request again."
        },
        {
            "type": 'Network.1.0.Timeout',
            "Message": "Operation timed out.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the device functions properly and submit the request again."
        },
        {
            "type": 'Network.1.0.HealthCheckAbnormal',
            "Message": "The status of the switch device is abnormal. The upgrade is aborted. The list of abnormal devices is as follows: {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Ensure that the device status is normal and submit the request again."
        },
        {
            "type": 'Network.1.0.FirmwareUpgradeFailed',
            "Message": "Failed to upgrade the firmware.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the device status is normal and submit the request again."
        },
        {
            "type": 'Network.1.0.FirmwareUpgradeAbort',
            "Message": "If the firmware of the switch device fails to be upgraded, the upgrade stops.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the device status is normal and submit the request again."
        },
        {
            "type": 'LogMgmtService.1.0.DumpDeviceLogDumpFailed',
            "Message": "The device status is abnormal, and the log collection fails.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the device status is normal and submit the request again."
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailed',
            "Message": "A device exception occurs, and logs are collected and upgraded.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the device is normal and submit the request again."

        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedGetBMCIp',
            "Message": "Failed to collect logs because the BMC IP address is abnormal.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the BMC IP address is correct and submit the request again."
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedCreatePathErr',
            "Message": "An exception occurred when creating the log collection path. The log collection failed.",
            "NumberOfArgs": 0,
            "Resolution": "Contact Huawei engineers."
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedGetUploadUrl',
            "Message": "Failed to obtain the log collection path because the log collection path is abnormal.",
            "NumberOfArgs": 0,
            "Resolution": "Contact Huawei engineers."
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedchassisBMC',
            "Message": "Failed to collect logs because an abnormal device exists.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the device is normal and submit the request again."
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedchassisVrp',
            "Message": "The device status is abnormal, and the log collection fails.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the device status is normal and submit the request again."
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedchassisEmLog',
            "Message": "Failed to collect logs because an abnormal device exists.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the device is normal and submit the request again."
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedchassisAppliance',
            "Message": "Failed to collect logs because an abnormal device exists.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the device is normal and submit the request again."
        },
        {
            "type": 'LogMgmtService.1.0.FdLogDumpFailed',
            "Message": "The FusionDirector is abnormal, and logs fail to be collected.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the FusionDirector network communication is normal and submit the request again."
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedForChassis',
            "Message": "Failed to collect logs because an abnormal device exists.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the device is normal and submit the request again."
        },
        {
            "type": 'LogMgmtService.1.0.DumpFailedForBmc',
            "Message": "Failed to collect logs because an abnormal device exists.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the device is normal and submit the request again."
        },
        {
            "type": 'Deploy.1.0.ImageNameExists',
            "Message": "Image Name Already Exists。",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request again after change image name。"
        },
        {
            "type": 'Deploy.1.0.ReadServerInfoFailed',
            "Message": "Get Server Information Failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request again."
        },
        {
            "type": 'Device.1.0.CloningOS',
            "Message": "The device is cloning OS image.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": 'Device.1.0.RecoveringOS',
            "Message": "The device is recovering OS image.",
            "NumberOfArgs": 0,
            "Resolution": "Please wait until the operation on the current device is complete and try again."
        },
        {
            "type": 'Deploy.1.0.AllocateSPIPFailed',
            "Message": "Allocate SP Network IP Failed。",
            "NumberOfArgs": 0,
            "Resolution": "Resubmit request please."
        },
        {
            "type": 'Deploy.1.0.NotEnoughLicense',
            "Message": "Not Enouth License.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request again after install license."
        },
        {
            "type": 'Deploy.1.0.SPNotFount',
            "Message": "No Smart Provisioning。",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request again after install SP."
        },
        {
            "type": 'Deploy.1.0.DeviceNotSupportOperation',
            "Message": "Device Do Not Support The Operation.",
            "NumberOfArgs": 0,
            "Resolution": "Please choose another device and resubmit the request again."
        },
        {
            "type": 'Deploy.1.0.DeviceNotOnLine',
            "Message": "Device Not On Line",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request again after the device is online."
        },
        {
            "type": "Deploy.1.0.SetCloneParamError",
            "Message": "Failed to set clone parameters.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "Deploy.1.0.SetRecoverParamError",
            "Message": "Failed to set recover parameters.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "Deploy.1.0.CloneOSFailed",
            "Message": "Failed to clone operating system.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "Deploy.1.0.RecoverOSFailed",
            "Message": "Failed to recover operating system.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "SP.1.0.BtrfsNotSupport",
            "Message": "Do Not Support btrfs Filesystem.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "SP.1.0.FetchCloneToolsFailed",
            "Message": "Fetch Clone Tools Failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "SP.1.0.VerifyParaFailed",
            "Message": "SP Verify Parameters Failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "SP.1.0.SetNetworkFailed",
            "Message": "Set SP Network Failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "SP.1.0.ExportConfigFailed",
            "Message": "Export Configuration Files Failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "SP.1.0.UploadInitFailed",
            "Message": "Upload Initializing Failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "SP.1.0.StorageNotEnough",
            "Message": "Storage Not Enough.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "SP.1.0.UploadImageFailed",
            "Message": "Upload Image Failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "SP.1.0.TransferFailed",
            "Message": "Transfer Failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "SP.1.0.ImportDeviceInfoFailed",
            "Message": "Import System Device Info Failed.",
            "NumberOfArgs": 0,
            "Resolution": "Please resubmit the request."
        },
        {
            "type": "Deploy.1.0.NotAuthorized",
            "Message": "You do not have the right to operate the device.",
            "NumberOfArgs": 0,
            "Resolution": "Apply for the operation permission and submit the request again."
        },
        {
            "type": "SP.1.0.SPCheckOSVersionFailed",
            "Message": "Failed to verify the operating system version.",
            "NumberOfArgs": 0,
            "Resolution": "Check the operating system version and submit the request again."
        },
        {
            "type": 'Network.1.0.ApplyConflict',
            "Message": "The configuration file is being applied to the shelf.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the application configuration file of the current shelf is complete and submit the request again."
        },
        {
            "type": 'Network.1.0.ApplyDispatchFailed',
            "Message": "Failed to deliver the shelf configuration. Failure list: {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Ensure that the device status is normal and submit the request again."
        },
        {
            "type": 'Network.1.0.ApplyBoardCheckAbnormal',
            "Message": "The configuration file of the subrack is inconsistent with that of the switching equipment. List of inconsistent slots. {1}",
            "NumberOfArgs": 1,
            "Resolution": "Ensure that the configuration file is consistent with that on the switch and submit the request again."
        },
        {
            'type': 'Scope.1.0.ResourceURIInWrongFormat',
            'Message': 'The resource URI format is incorrect.',
            'NumberOfArgs': 0,
            'Resolution': 'Modify the resource path and resend the request.'
        },
        {
            'type': 'Scope.1.0.ResourceNotExist',
            'Message': 'The resource does not exist.',
            'NumberOfArgs': 0,
            'Resolution': 'Ensure that the resource exists and resend the request.'
        },
        {
            'type': 'Scope.1.0.InsufficientPrivilege',
            'Message': 'You are not authorized to perform operations on this resource. Please check the operation user rights.',
            'NumberOfArgs': 0,
            'Resolution': 'Check the operation user permission and operation domain, and try again after the permission is increased or the operation domain is expanded.'
        },
        {
            "type": 'Examine.1.0.DeviceDetached',
            "Message": "Server has been detached and can't be examined or confirmed the examine result, device is {1}.",
            "NumberOfArgs": 1,
            "Resolution": "Please make sure that the server be normal nanotubes, resubmit the request."

        },
        {
            "type": 'FusionDirector.1.0.OperationNotSupportedOnState',
            "Message": "The current status of the object does not support this operation.",
            "NumberOfArgs": 0,
            "Resolution": "Wait until the object is in the proper state and try again."
        },
        {
            "type": "Deploy.1.0.SPVersionTooEarly",
            "Message": "The Smart Provisioning Version is Too Early。",
            "NumberOfArgs": 0,
            "Resolution": "Upgrade the smart provisioning and submit the request again."
        },
        {
            "type": 'Enclosure.1.0.RefreshFailed',
            "Message": "An exception occurred when refreshing the shelf. The abnormal items are as follows: {1}. Items that are successfully refreshed: {2}.",
            "NumberOfArgs": 2,
            "Resolution": "Check the shelf alarms to ensure that the modules of the shelf are functional and refresh the shelf again."
        },
        {
            "type": 'Enclosure.1.0.LoginFailed',
            "Message": "The management account of the subrack is abnormal.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that all modules in the shelf are functional. Enter the user name and password again to refresh the shelf."
        },
        {
            "type": 'Enclosure.1.0.ConnectFailed',
            "Message": "The subrack connection is abnormal.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that all modules in the shelf are functional and the management IP address of the shelf is reachable. Refresh the shelf again."
        },
        {
            "type": "Upgrade.1.0.DeviceOffline",
            "Message": "The device is in a non-online state and cannot be upgraded.",
            "NumberOfArgs": 0,
            "Resolution": "Check the device management status."
        },
        {
            "type": "Upgrade.1.0.SPVersionTooEarly",
            "Message": "The Smart Provisioning Version is Too Early.",
            "NumberOfArgs": 0,
            "Resolution": "Upgrade the smart provisioning and submit the request again."
        },
        {
            "type": 'DevMgmt.1.0.SNRepeat',
            "Message": "Duplicate serial number.",
            "NumberOfArgs": 0,
            "Resolution": "Ensure that the serial number of the managed device is unique and submit the request again."
        }
    ]
}


//获取任务失败信息
function getTaskMsg(errorInfo) {
    var lang = localStorage.getItem('lang');
    var msg = {};
    var messageId = errorInfo.MessageID;
    var messageArgs = errorInfo.MessageArgs;
    if (lang === 'zhCN') {
        if (_.keys(errorInfo).length < 2) {
            return {
                reason: '发生了内部错误。',
                proposal: '错误详细请联系华为工程师定位。'
            };
        }
        var msg = _.find(messageZhCN.Messages, function (item) {
            return item.type == messageId
        });
        if (!msg) {
            return {
                reason: '发生了内部错误。',
                proposal: '错误详细请联系华为工程师定位。'
            };
        }

    } else {
        if (_.keys(errorInfo).length < 2) {
            return {
                reason: 'A general error has occurred.',
                proposal: 'For details, contact Huawei engineers.'
            };
        }
        var msg = _.find(messageEN.Messages, function (item) {
            return item.type == messageId
        });
        if (!msg) {
            return {
                reason: 'A general error has occurred.',
                proposal: 'For details, contact Huawei engineers.'
            };
        }
    }
    if (msg.Message === undefined) {
        return {
            reason: messageId,
            proposal: ''
        };
    }
    if (msg.NumberOfArgs === undefined || msg.NumberOfArgs == 0) {
        return {
            reason: msg.Message,
            proposal: msg.Resolution
        };
    }
    var content = '';
    if (msg.NumberOfArgs <= messageArgs.length) {
        content = msg.Message;
        for (var i = 1; i < msg.NumberOfArgs + 1; i++) {
            content = content.replace('{' + i + '}', messageArgs[i - 1]);
        }
        return {
            reason: content,
            proposal: msg.Resolution
        };
    }

}