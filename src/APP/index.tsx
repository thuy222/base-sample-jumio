/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useCallback, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'
import { SafeAreaView, Linking, Alert } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
// import AlertDialog from 'src/components/Common/Dialogs/AlertDialog'
// import ConfirmDialog from 'src/components/Common/Dialogs/ConfirmDialog'
// import { goToLogin } from 'src/core/routes/navigation'
import 'src/core/i18n/i18n.config'
import { goToHome } from 'src/components/Views/Home/root/routes/navigation'

const App = () => {
  const { t } = useTranslation()
  const [initUrl, setInitUrl] = useState('')
  const handleDeepLink = useCallback((event: { url: string }) => {
    console.log(event.url)
    Alert.alert('Link', event.url)
  }, [])
  useEffect(() => {
    const getUrlAsync = async () => {
      const initialUrl = await Linking.getInitialURL()
      console.log(initialUrl)
      setInitUrl(initialUrl ?? 'unknown')
    }
    getUrlAsync()
    Linking.addEventListener('url', handleDeepLink)
  }, [])
  useEffect(() => {
    if (initUrl) {
      if (initUrl !== 'unknown') {
        Alert.alert('Link', initUrl)
      }
      setTimeout(() => {
        SplashScreen.hide()
        // if (Math.floor(Math.random() * 2) === 0) {
        //   AlertDialog(t('newUpdateAvailable'), t('forceUpdateMessage'), t('update'), () => {
        //     goToLogin()
        //   })
        // } else {
        //   ConfirmDialog(
        //     t('newUpdateAvailable'),
        //     t('nonForceUpdateMessage'),
        //     t('update'),
        //     () => {
        //       goToLogin()
        //     },
        //     t('skip'),
        //     () => {
        //       goToLogin()
        //     },
        //   )
        // }
        goToHome()
      }, 300)
    }
  }, [initUrl])
  return <SafeAreaView />
}

export default App
