/* eslint-disable @typescript-eslint/no-floating-promises */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './translations/en.json'

const resources = {
  en: {
    translation: en,
  },
}

i18n.use(initReactI18next).init({
  resources,
  //language to use if translations in user language are not available
  fallbackLng: 'en',
  lng: 'en', // default language
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
})

export default i18n
