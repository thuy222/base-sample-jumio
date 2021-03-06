package com.mobilepoc;

import android.net.Uri;
import android.os.Bundle;
import com.reactnativenavigation.NavigationActivity;
import org.devio.rn.splashscreen.SplashScreen; 
import android.content.Intent;
import android.content.res.Configuration;

public class MainActivity extends NavigationActivity {

  @Override
    protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this, R.style.SplashScreenTheme, true);  // here
      super.onCreate(savedInstanceState);
  }
  @Override
      public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        Intent intent = new Intent("onConfigurationChanged");
        intent.putExtra("newConfig", newConfig);
        this.sendBroadcast(intent);
    }
}
