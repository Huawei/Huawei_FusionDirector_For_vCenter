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
 * 获取禁用启用
 **/
function getForbiddenType() {
    var lang = localStorage.getItem('lang');
    if (lang) {
        if (lang == 'en') {
            return [{
                value: 'Enabled',
                label: 'Enabled'
            }, {
                value: 'Disabled',
                label: 'Disabled'
            }];
        }
    }
    return [{
        value: 'Enabled',
        label: '启用'
    }, {
        value: 'Disabled',
        label: '禁用'
    }];
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
    return new Promise(function (reslove) {
        app.$notify.error({
            message: msg || 'default msg',
            duration: duration || 2000
        });
        setTimeout(function () {
            reslove && reslove();
        }, duration || 2000);
    })
}

/**
 * dealResult(ret,function(){})
 * dealResult(ret,function(){},function(){})
 */
function dealResult(ret, success, faild) {
    if (app && app.fullscreenLoading) {
        app.fullscreenLoading = false;
    }
    if (app && app.loading) {
        app.loading = false;
    }
    if (app && app.secondloading) {
        app.secondloading = false;
    }
    if (ret.code.substr(0, 1) == '2'||ret.code=='0') {
        ret.code='0';
        success && success(ret);
    } else {
        faild && faild(ret);
        alertCode(ret.code);
        console.warn(ret);

    }
}
/**
 * 封装返回列表页弹出提示
 * @param {*} url 
 */
function goBack(url) {
    app.$confirm(app.i18ns.common.beBackTips, app.i18ns.common.prompt, {
        confirmButtonText: app.i18ns.common.confirm,
        cancelButtonText: app.i18ns.common.cancel,
        closeOnClickModal: false,
        type: 'warning'
    }).then(function () {
        location.href = url + '?s=' + Math.random();
    }).catch(function () {});
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
