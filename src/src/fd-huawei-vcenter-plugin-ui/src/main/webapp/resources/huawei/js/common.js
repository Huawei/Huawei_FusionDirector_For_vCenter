var pluginName = 'DirectorForvCenter';
var intervalTime = 500;
/**
 * 国际化
 **/
function getIn18() {
    var lang = localStorage.getItem('lang');
    if (lang) {
        if (lang == 'zhCN') {
            ELEMENT.locale(ELEMENT.lang.zhCN);
            return i18n_zh_CN;

        } else {
            ELEMENT.locale(ELEMENT.lang.en);
            return i18n_en;
        }
    } else {
        ELEMENT.locale(ELEMENT.lang.zhCN);
        return i18n_zh_CN;
    }
}

/**
 * 改变当前语言
 * @param {string} lang (zhCN,en)
 */
function changelang(lang) {
    if (lang == 'zhCN') {
        ELEMENT.locale(ELEMENT.lang.zhCN);
        localStorage.setItem('lang', 'zhCN');
        this.lang = ELEMENT.lang.zhCN.el.templateManage;
    } else {
        ELEMENT.locale(ELEMENT.lang.en);
        this.lang = ELEMENT.lang.en.el.templateManage;
        localStorage.setItem('lang', 'en');
    }
}

/**
 * 根据value值获取下拉列表Label名称
 * @param {string} arry 
 * @param {string} value
 */
function getOptionlabel(arry, value) {
    var optionItem = _.find(arry, function (x) {
        return x.value == value;
    });
    if (optionItem) {
        return optionItem.label;
    }
    return value;
}

/**
 * 获取FD列表
 **/
function getFDList(callback) {
    var FDData = [];
    var FDListUrl = com_huawei_fdvcenterpluginui.webContextPath + "/rest/services/fd?pageNo=-1&pageSize=-1&s=" + Math.random();
    //通过API获取数据
    $.get(FDListUrl, function (response) {
        console.log(response);
        if (typeof callback === "function") {
            FDData = response.data;
            var ret = {
                code: response.code,
                msg: response.description,
                data: response.data
            }
            if (localStorage.getItem("test")) {
                ret.data.push({
                    id: 3,
                    hostIp: '127.0.0.1',
                    aliasName: "",
                    hostPort: '32103',
                    loginAccount: 'sxw',
                    loginPwd: '',
                    latestStatus: '',
                    reservedInt1: '',
                    reservedInt2: '',
                    reservedStr1: '',
                    reservedStr2: '',
                    lastModify: '2017-05-22',
                    createTime: '2017-05-22 17:28:46'
                })
                ret.data.push({
                    id: 3,
                    hostIp: '192.168.8.138',
                    aliasName: "",
                    hostPort: '32103',
                    loginAccount: 'sxw',
                    loginPwd: '',
                    latestStatus: '',
                    reservedInt1: '',
                    reservedInt2: '',
                    reservedStr1: '',
                    reservedStr2: '',
                    lastModify: '2017-05-22',
                    createTime: '2017-05-22 17:28:46'
                })
            }
            localStorage.setItem('FDList', JSON.stringify(FDData)); //code==0时
            callback(ret);
        }
    }, "json");

}

/**
 * 根据FDIp获取别名
 * @param {*} ip 
 */
function getFDaliasName(ip) {
    var FDs = localStorage.getItem('FDList');
    if (FDs) {
        var FDList = JSON.parse(FDs);
        for (var i = 0; i < FDList.length; i++) {
            if (FDList[i].hostIp == ip) {
                if (FDList[i].aliasName) {
                    return FDList[i].aliasName;
                }
                return ip;
            }
        }
    }
    return ip;
}

/**
 * 设置当前FD
 **/
function setCurrentFD(FD) {
    localStorage.setItem('FD', FD);
}

/**
 * 获取当前FD
 **/
function getCurrentFD() {
    return localStorage.getItem('FD');
}

/**
 * 弹出提示框
 * @param {String}  msg 消息内容
 * @param {Function} cb 回调函数
 */
function alertMsg(msg, cb) {
    if (app) {
        app.$alert(msg, app.i18ns.common.prompt, {
            confirmButtonText: app.i18ns.common.confirm,
            callback: function () {
                cb && cb();
            }
        });
    } else {
        alert(msg);
    }
}




/**
 * alertMsg('alert msg')
 * alertMsg('alert msg',function(){console.log('alert finish')})
 * @param {*} msg 
 * @param {*} cb 
 */
function alertErrMsg(ret, itemCode, cb) {
    if (app) {
        if (ret.ip != null && ret.ip != "" && ret.ip != undefined) {
            if (ret.ip != getCurrentFD()) {
                return false
            } else if (!isAlert(ret, itemCode)) {
                return false
            }
        }
        var msg = getErrorMsg(ret);
        app.$alert(msg, app.i18ns.common.prompt, {
            confirmButtonText: app.i18ns.common.confirm,
            callback: function () {
                cb && cb();
            }
        });
    } else {
        alert(msg);
    }
}
/**
 * alertCode(-99999)
 * alertCode(9999,function(){console.log('alert finish')})
 * @param {*} errCode 
 * @param {*} cb 
 */
function alertCode(errCode, cb) {
    var msg = getErrorMsg(errCode);
    if (app) {
        /*  app.$alert(msg, app.i18ns.common.prompt, {
             confirmButtonText: app.i18ns.common.confirm,
             callback: function() {
                 cb && cb();
             }
         }); */
        var h = app.$createElement;
        var nodes = [];
        var msgTxts = msg.split("</br>")
        for (var i = 0; i < msgTxts.length; i++) {
            nodes.push(h('p', null, msgTxts[i]));
        }
        var context = h('div', null, nodes);
        app.$msgbox({
            title: app.i18ns.common.prompt,
            message: context,
            confirmButtonText: app.i18ns.common.confirm,
        }).then(function () {
            cb && cb();
        });
    } else {
        alert(msg);
    }
}

/**
 * confirm('please confirm').then(()=>{console.log('confirm ok')})
 * confirm('please confirm').then(()=>{console.log('confirm ok')},()=>{console.log('cancel')})
 * @param {*} msg 
 */
function confirm(msg) {
    if (app) {
        return app.$confirm(msg, app.i18ns.common.prompt, {
            confirmButtonText: app.i18ns.common.confirm,
            cancelButtonText: app.i18ns.common.cancel,
            closeOnClickModal: false,
            type: 'warning'
        });
    } else {
        console.error('app is undefind');
    }
}

/**
 * notifySuccess("Success")
 * notifySuccess("Success").then(()=>{console.log('callback')})
 */
function notifySuccess(msg, duration) {
    return new Promise(function (reslove) {
        app.$notify({
            message: msg || 'default msg',
            duration: duration || 2000,
            type: 'success'
        });
        setTimeout(function () {
            reslove && reslove();
        }, duration || 2000);
    });
}
/**
 * notifyInfo("Info")
 * notifyInfo("Info").then(()=>{console.log('callback')})
 */
function notifyInfo(msg, duration) {
    return new Promise(function (reslove) {
        app.$notify({
            message: msg || 'default msg',
            duration: duration || 2000
        });
        setTimeout(function () {
            reslove && reslove();
        }, duration || 2000);
    });
}

/**
 * notifyWarn("Warn")
 * notifyWarn("Warn").then(()=>{console.log('callback')})
 */
function notifyWarn(msg, duration) {
    return new Promise(function (reslove) {
        app.$notify({
            message: msg || 'default msg',
            duration: duration || 2000,
            type: 'Warn'
        });
        setTimeout(function () {
            reslove && reslove();
        }, duration || 2000);
    });
}

/**
 * notifyError("error")
 * notifyError("error").then(()=>{console.log('callback')})
 */
function notifyError(msg, duration) {
    app.$message.error(msg);
}

/**
 * dealResult(ret,function(){})
 * dealResult(ret,function(){},function(){})
 */
function dealResult(ret, callback) {
    if (app && app.fullscreenLoading) {
        setTimeout(function () {
            app.fullscreenLoading = false;
        }, intervalTime); //延迟关闭loading
    }
    if (app && app.loading) {
        setTimeout(function () {
            app.loading = false;
        }, intervalTime); //延迟关闭loading
    }
    if (app && app.loading1) {
        setTimeout(function () {
            app.loading1 = false;
        }, intervalTime); //延迟关闭loading
    }
    if (app && app.loading2) {
        setTimeout(function () {
            app.loading2 = false;
        }, intervalTime); //延迟关闭loading
    }
    if (app && app.loading3) {
        setTimeout(function () {
            app.loading3 = false;
        }, intervalTime); //延迟关闭loading
    }
    if (ret.code == '0' || ret.code.substr(0, 1) == '2') {
        ret.code = '0';
    }
    callback && callback(ret);
}
/**
 * 字符串扩展函数
 */
String.prototype.format = function (args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        } else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出

                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}


/**
 * 服务器健康状态
 * @param {*} status 
 */
function getServerStatusTxt(healthStatus) {
    var lang = localStorage.getItem('lang');
    if (!healthStatus) {
        return lang == 'zhCN' ? "未知" : "Unknown";
    }
    var status = healthStatus.toLowerCase();
    if (status == "ok") {
        return lang == 'zhCN' ? "正常" : "Health";
    } else if (status == "warning") {
        return lang == 'zhCN' ? "警告" : "Warning";
    } else if (status == "critical") {
        return lang == 'zhCN' ? "紧急" : "Critical";
    } else {
        return lang == 'zhCN' ? "未知" : "Unknown";
    }
}

/**
 * 服务器管理状态
 * @param {*} status 
 */
function getManageStatusTxt(status) {
    var lang = localStorage.getItem('lang');
    if (!status) {
        return lang == 'zhCN' ? "未管理" : "Unmanaged";
    }
    status = status.toLowerCase();
    if (status == "online") {
        return lang == 'zhCN' ? "在线" : "Online";
    } else if (status == "failed") {
        return lang == 'zhCN' ? "失败" : "Failed";
    } else if (status == "locked") {
        return lang == 'zhCN' ? "锁定中" : "Locked";
    } else if (status == "adding") {
        return lang == 'zhCN' ? "添加中" : "Adding";
    } else if (status == "ready") {
        return lang == 'zhCN' ? "就绪" : "Ready";
    } else if (status == "unmanaged") {
        return lang == 'zhCN' ? "未管理" : "Unmanaged";
    } else {
        return lang == 'zhCN' ? "未管理" : "Unmanaged";
    }
}

/**
 * 机框管理状态
 * @param {*} status 
 */
function getEnclosureManageStatusTxt(status) {
    var lang = localStorage.getItem('lang');
    if (!status) {
        return lang == 'zhCN' ? "未管理" : "Unmanaged";
    }
    status = status.toLowerCase();
    if (status == "ready") {
        return lang == 'zhCN' ? "就绪" : "Ready";
    } else if (status == "added") {
        return lang == 'zhCN' ? "就绪" : "Ready";
    } else if (status == "locked") {
        return lang == 'zhCN' ? "锁定中" : "Locked";
    } else if (status == "unmanaged") {
        return lang == 'zhCN' ? "未管理" : "Unmanaged";
    } else {
        return lang == 'zhCN' ? "未管理" : "Unmanaged";
    }
}

/**
 * 设备健康状态
 * @param {*} status 
 */
function getHealthStatusTxt(status) {
    var lang = localStorage.getItem('lang');
    if (!status) {
        return lang == 'zhCN' ? "--" : "--";
    }
    status = status.toLowerCase();
    if (status == "ok") {
        return lang == 'zhCN' ? "正常" : "Health";
    } else if (status == "warning") {
        return lang == 'zhCN' ? "警告" : "Warning";
    } else if (status == "critical") {
        return lang == 'zhCN' ? "紧急" : "Critical";
    } else {
        return lang == 'zhCN' ? "未知" : "Unknown";
    }
}

/**
 * 设备在位状态
 * @param {*} status 
 */
function getPositionStatusTxt(status) {
    var lang = localStorage.getItem('lang');
    if (!status) {
        return "--";
    }
    status = status.toLowerCase();
    if (status == "absent") {
        return lang == 'zhCN' ? "不在位" : "Absent";
    } else {
        return lang == 'zhCN' ? "在位" : "Present";
    }
}

/**
 * 管理板主备关系
 * @param {*} status 
 */
function getActiveStandbyTxt(status) {
    var lang = localStorage.getItem('lang');
    if (!status) {
        return "--";
    }
    status = status.toLowerCase();
    if (status == "standbyspare") {
        return lang == 'zhCN' ? "备板" : "Standby";
    } else {
        return lang == 'zhCN' ? "主板" : "Active";
    }
}

/**
 * 交换板状态
 * @param {*} switchState 
 * @param {*} healthStatus 
 */
function getSwitchTxt(switchState, healthStatus) {
    var lang = localStorage.getItem('lang');
    if (!switchState) {
        return lang == 'zhCN' ? "未知" : "Unknown";
    }
    switchState = switchState.toLowerCase();
    if (switchState != "offline") {
        return getHealthStatusTxt(healthStatus);
    }
    /*  else if (switchState == "failed") {
         return lang == 'zhCN' ? "失败" : "Failed";
     } else if (switchState == "locked") {
         return lang == 'zhCN' ? "锁定中" : "Locked";
     } */
    else {
        return lang == 'zhCN' ? "离线" : "OffLine";
    }
}

/**
 * 获取URL参数值
 * @param {string} name 参数名称
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

/**
 * 获取字符串的字节数值
 * @param string 字符串
 */
this.getBytes = function (string) {
    if (string.match(/[^\x00-\xFF]/g)) {
        return string.match(/[^\x00-\xFF]/g).length * 3 + string.length - string.match(/[^\x00-\xFF]/g).length
    } else {
        return string.length
    }
};

/**
 * 发起Ajax请求
 * @param {*} data 
 * @param {*} callback 
 */
function ajax(data, callback) {
    var url = com_huawei_fdvcenterpluginui.webContextPath + "/rest/services/fd/api";
   /*  if (localStorage.getItem("test")) {
        if (data.ips[0] == '127.0.0.1' || data.ips[0] == '192.168.8.138') {
            url = "https://192.168.8.105:8443/rest/services/fd/api";
        }
    } */
    if (data.ips === undefined || data.ips === null || data.ips.length === 0) {
        var ip = getCurrentFD();
        data.ips = [ip]
    }
    $.ajax({
        url: url,
        type: 'post',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        dataType: 'json',
        success: function (response) {
            if (typeof callback === "function") {
                var ret = {
                    code: response.code,
                    msg: response.description,
                    data: response.data,
                    headers: response.headers,
                    ip: response.ips?response.ips[0]:null
                }
                if (ret.code == '0') {
                    // sessionStorage.setItem('serverDate', ret.msg);
                    if (ret.msg.indexOf("-") != -1) {
                        var data = parseTime(new Date(new Date(ret.msg).getTime() + 60000));
                        sessionStorage.setItem('serverDate', data);
                    } else {
                        var date = parseTime(new Date(ret.msg))
                        var data = parseTime(new Date(new Date(ret.msg).getTime() + 60000));
                        sessionStorage.setItem('serverDate', data);
                    }
                }
                dealResult(ret, callback);
            }
        }
    });
}

/**
 * 计算时间
 * @param d1 开始时间
 * @param d2 结束时间
 */
function timeFn(d1, d2) { //di作为一个变量传进来
    //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    var dateBegin = new Date(d1); //将-转化为/，使用new Date
    var dateEnd
    if (d2) {
        dateEnd = new Date(d2);
    } else {
        dateEnd = new Date();
    }
    var dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
    var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
    var leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000)) //计算出小时数
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000)) //计算相差分钟数
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000)
    if (dayDiff != 0) {
        return dayDiff + "d" + hours + "h" + minutes + "min" + seconds + "s"
    } else if (hours != 0) {
        return hours + "h" + minutes + "min" + seconds + "s";
    } else if (minutes != 0) {
        return minutes + "min" + seconds + "s";
    } else {
        return seconds + "s";
    }

}

function sec_to_time(s) {
    var t = '';
    if (s > -1) {
        var hour = Math.floor(s / 3600);
        var min = Math.floor(s / 60) % 60;
        var sec = s % 60;
        if (hour > 0) {
            t = hour + "h";
        }
        if (min > 0) {
            t += min + "min";
        }
        t += sec + 's';
    }
    return t;
}

/**
 * 转化时间
 * @param {} time 
 * @param {*} cFormat 
 */
function compatibleTime(time) {
    if (time == null)
        return false;
    time = time.replace(/-/g, "/");
    time = time.replace(/T/g, " ");
    time = time.substr(0, 19);
    return time;
}

function parseTime(time, cFormat) {
    if (arguments.length === 0) {
        return null;
    }
    var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
    var date;
    if (typeof time == 'object') {
        date = time;
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000;
        time = compatibleTime(time);
        date = new Date(time);
    }
    var formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    };
    var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, function (result, key) {
        var value = formatObj[key];
        if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
        if (result.length > 0 && value < 10) {
            value = '0' + value;
        }
        return value || 0;
    });
    return time_str;
}

/**
 * 转化单位
 * @param {} srcData 
 */
function unitFun(Size) {
    if (parseInt(Size) < 1024) {
        return Size + ' ' + 'B'
    } else if (parseInt(Size) >= 1024 && parseInt(Size) < (1024 * 1024)) {
        return (parseInt(Size) / 1024).toFixed(0) + ' ' + 'KB'
    } else if (parseInt(Size) >= (1024 * 1024) && parseInt(Size) < (1024 * 1024 * 1024)) {
        return (parseInt(Size) / 1024 / 1024).toFixed(0) + ' ' + 'MB'
    } else {
        return (parseInt(Size) / 1024 / 1024 / 1024).toFixed(0) + ' ' + 'GB'
    }
};

function isAlert(ret, item) {
    var date = new Date().getTime();
    if (!sessionStorage.getItem(item)) {
        if (!ret.data||ret.data.length == 0 || ret.data[0].data === undefined ||
            ret.data[0].data.error === undefined) {
            sessionStorage.setItem(item, ret.code)
        } else {
            var errorInfo = ret.data[0].data.error['@Message.ExtendedInfo'][0];
            var messageId = errorInfo.MessageId;
            sessionStorage.setItem(item, messageId)
        }
        sessionStorage.setItem(item + '-codeDate', date)
        return true
    }

    if (!ret.data||ret.data.length == 0 || ret.data[0].data === undefined ||
        ret.data[0].data.error === undefined) {
        if (sessionStorage.getItem(item) == ret.code) {
            var code = sessionStorage.getItem(item + '-codeDate')
            if (code && date - code > 30000) {
                return true
            } else {
                sessionStorage.setItem(item + '-codeDate', date)
                return false
            }
        } else {
            sessionStorage.setItem(item, ret.code)
            sessionStorage.setItem(item + '-codeDate', date)
            return true
        }
    } else {
        var errorInfo = ret.data[0].data.error['@Message.ExtendedInfo'][0];
        var messageId = errorInfo.MessageId;
        if (sessionStorage.getItem(item) == messageId) {
            var code = sessionStorage.getItem(item + '-codeDate')
            if (code && date - code > 30000) {
                return true
            } else {
                sessionStorage.setItem(item + '-codeDate', date)
                return false
            }
        } else {
            sessionStorage.setItem(item, messageId)
            sessionStorage.setItem(item + '-codeDate', date)
            return true
        }
    }
}