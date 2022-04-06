v0.0.1

# Mobile Poc setup

## 1. Preparation
IOS Cert: please download the file in `Box/Tec-Projects/Fusang Mobile App/Mobile App Development` and install the p12 developemnt cert.

please follow the [react native page](https://reactnative.dev/docs/environment-setup) to setup
Node: install nodejs , watchman
IOS: 
* install xcode 
* install gem
* install cocoapods

Android:
* install jdk
* install android studio
* install required android SDK
* install the emulator you want to use
## 2. Dependency 
please run : 
1. yarn install
2. npm install ( some times package may not work properly on yarn install)
3. cd ios 
4. pod install
5. cd ..(back to project base directory to run other cmd)

## 3. Build and Run
You can either:
1. open /android in android studio and start debug 
2. open /ios in xcode and start debug
3. run command `yarn run ios` or `yarn run android`

## 4.Testing
* storybook
  1. change the .env to set IS_TESTING to yes
  2. yarn storybook
  3. start your app by `yarn run ios` or `yarn run android`
  4. enjoy testing
* unit test
  1. unknown
* ui test
  1. unknown

## p.s. Gitlab-runner
If you would like to install gitlab-runner on your local mac machine. please try to install following items:
1. install [gitlab runner](https://docs.gitlab.com/runner/install/)
2. Register the runner with this URL: https://console.gitlab.fusang.co/
3. registration token `_9Rass4Fv25Z5v3AZArY`
4. assign tab `ios`
5. install gem
6. sudo gem install fastlane -NV or brew
7. install xcode (if you don't have)
8. install jdk , android studio (if you don't have)
9. gitlab-runner run & 
