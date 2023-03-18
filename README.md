# cordova-plugin-upi
Cordova plugin to pay via UPI supported apps via intent based

### Supported Platform:
* Android

### Installations:
> cordova plugin add cordova-plugin-upi

After installation, the upi plugin would be avilable in "window" object.

### Methods:
* Fetch UPI supported apps.
```js
let successCallback = function (apps) {
    console.log("UPI supported apps", apps);
}
let failureCallback = function (err) {
    console.error("Issue in fetching UPI supported apps ", err);
}

window["UPI"].supportedApps(successCallback, failureCallback);
```
* Start a transaction
you can start a transaction either by passing upistring or parsed value as given below.

```js
let config = {
        "pa": "pa", // VPA no from UPI payment acc
        "pn": "pn", // Merchant Name registered in UPI payment acc
        "me": "me", // Merchant Code from UPI payment acc
        "tid": "tid", // Unique transaction id for merchant's reference
        "tr": "tr", // Unique transaction id for merchant's reference
        "tn": "tn", // Note that will displayed in payment app during transaction
        "am": "am", // Amount 
        "mam": "mam", // its optional. Minimum amount that has to be transferred 
        "cu": "cu", // Currency of amount
        "url": "url" // URL for the order
};

or

let config = {
        "payeeVPA": "pa", // VPA no from UPI payment acc
        "payeeName": "pn", // Merchant Name registered in UPI payment acc
        "payeeMerchantCode": "me", // Merchant Code from UPI payment acc
        "transactionId": "tid", // Unique transaction id for merchant's reference
        "transactionRef": "tr", // Unique transaction id for merchant's reference
        "transactionNote": "tn", // Note that will displayed in payment app during transaction
        "amount": "am", // Amount 
        "minimumAmount": "mam", // its optional. Minimum amount that has to be transferred 
        "currency": "cu", // Currency of amount
        "transactionRefUrl": "url" // URL for the order
};
let successCallback = function (result) { 
    /* success and failure of payment will be given in this method, this is because each payment uses different name to represent the status of transaction under "Status" field.*/
    console.log("result of success interaction of payment app", result);
}
let failureCallback = function (err) {
    console.error("Issue in interaction and completion of payment with UPI", err);
}

window["UPI"].acceptPayment(config, successCallback, failureCallback);
```

Sample response of successful payment
```json
{
  "ApprovalRefNo": "932413452",
  "Status": "SUCCESS",
  "message": "txnId=764900774.690841&responseCode=00&Status=SUCCESS&txnRef=417855597.31908274&ApprovalRefNo=932413452",
  "responseCode": "00",
  "status": "SUCCESS",
  "txnId": "764900774.690841",
  "txnRef": "417855597.31908274",
  "appId": "com.phonepe.app.preprod",
  "appName": "PhonePe Preprod",
}
```

Sample response of failure payment
```json
{
  "Status": "FAILURE",
  "message": "txnId=901818401.3087038&responseCode=ZD&Status=FAILURE&txnRef=654595701.7025663",
  "responseCode": "ZD",
  "status": "FAILURE",
  "txnId": "901818401.3087038",
  "txnRef": "654595701.7025663",
  "appId": "com.phonepe.app.preprod",
  "appName": "PhonePe Preprod",
}
```

### Release Notes:
# 1.0.0:
 Initial Release of cordova plugin for upi transaction

# 1.0.1:
  Added capability to fetch all UPI supported apps rather than predefined list (added in 1.0.0v)
  Added capability to send upi app details used for payment, in response.

# 1.0.2:
  Bug fix related to defensive check on "Status" field.

# 1.0.3:
  Bug fix to handle Empty Param from UPI apps in response. [Issue](https://github.com/ArunYogi/cordova-plugin-upi/issues/6)

# 1.0.4:
  Bug fix
