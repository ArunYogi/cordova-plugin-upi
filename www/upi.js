/**
 * This class exposes the PayPal iOS SDK functionality to javascript.
 *
 * @constructor
 */
function UPI() {
    this.vpa = ""; // VPA
    this.payeeName = "";
    this.amount = 0;
    this.transactionRef = "";
}

const CONFIG = {
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

UPI.prototype.init = function (config) {
    this.vpa = config.vpa;
    this.payeeName = config.payeeName;
    this.amount = config.amount;
    this.transactionRef = config.transactionRef;
}

UPI.prototype.supportedApps = function (sCallback, fCallback) {
    cordova.exec(sCallback, fCallback, "UPIPlugin", "supportedapps", []);
}

UPI.prototype.acceptPayment = function (config, app, sCallback, fCallback) {
    var c = { upiString: "upi://pay?", application: app };
    var l = Object.keys(config).length;
    Object.keys(CONFIG).forEach(function (k, index) {
        c.upiString += CONFIG[k] + "=" + (config[k] + "");
        if (index < l) { c.upiString += "&" }
    })
    cordova.exec(sCallback, fCallback, "UPIPlugin", "acceptPayment", [c]);
}

/**
 * Plugin setup boilerplate.
 */
module.exports = new UPI();