package com.lianlf.capacitoryfullscreen;

import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import android.app.Activity;
import android.util.Log;
import android.content.pm.ActivityInfo;


@NativePlugin()
public class ToggleFullScreen extends Plugin {

    @PluginMethod()
    public void toggle(final PluginCall call) {
        getBridge().executeOnMainThread(new Runnable() {
            @Override
            public void run() {
                Activity a = getActivity();
                String orientation = call.getString("orientation");
                int currentOrientation = a.getResources().getConfiguration().orientation;
                Log.i("Current Orientation", currentOrientation + "");
                Log.i("Target Orientation", orientation);

                if (currentOrientation == 1 && !orientation.equals("PORTRAIT")) {
                    a.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
                } else if (currentOrientation == 2 && !orientation.equals("LANDSCAPE")) {
                    a.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
                }
                call.success();
            }
        });
    }
}
