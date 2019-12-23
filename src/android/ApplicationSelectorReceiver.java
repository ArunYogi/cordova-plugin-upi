package com.cordova.upi;

import android.content.Context;
import android.content.ComponentName;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;

import com.cordova.upi.UPIPlugin;

import android.content.BroadcastReceiver;
import android.util.Log;

public class ApplicationSelectorReceiver extends BroadcastReceiver {
    
    private static final String TAG = "UPIPLugin";

    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent != null && intent.getExtras() != null && intent.getExtras().size() > 0) {
            for (String key : intent.getExtras().keySet()) {
                try {
                    ComponentName componentInfo = (ComponentName) intent.getExtras().get(key);
                    PackageManager packageManager = context.getPackageManager();
                    assert componentInfo != null;
                    String appName = (String) packageManager.getApplicationLabel(packageManager.getApplicationInfo(componentInfo.getPackageName(), PackageManager.GET_META_DATA));
                    //Log.d(TAG, "Selected Application Name " + appName + ", PKG: " + componentInfo.getPackageName());
                    UPIPlugin.setApplication(componentInfo.getPackageName(), appName);
                } catch (Exception e) {
                    e.printStackTrace();
                }    
            }
        }
    }
}