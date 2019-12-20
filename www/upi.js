
var CONFIG = {
    payeeVPA: "pa",
    payeeName: "pn",
    payeeMerchantCode: "me",
    transactionId: "tid",
    transactionRef: "tr",
    transactionNote: "tn",
    amount: "am",
    minimumAmount: "mam",
    currency: "cu",
    transactionRefUrl: "url"
}

var supportedApps = function (sCallback, fCallback) {
    cordova.exec(sCallback, fCallback, "UPIPlugin", "supportedApps", []);
}
var acceptPayment = function (config, app, sCallback, fCallback) {
    var c = { upiString: "upi://pay?", application: app };
    if (typeof config == "string") {
        c.upiString = config;
    } else {
        var params = [];
        Object.keys(CONFIG).forEach(function (k) {
            if (config[k] || config[CONFIG[k]]) {
                params.push(CONFIG[k] + "=" + ((config[k] || config[CONFIG[k]]) + ""));
            }
        })
        c.upiString += params.join("&");
    }
    cordova.exec(sCallback, fCallback, "UPIPlugin", "acceptPayment", [c]);
}
module.exports = { supportedApps, acceptPayment };