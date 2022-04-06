import React, { useEffect } from 'react'

import { Formik } from 'formik'
import { useTranslation } from 'react-i18next'
import { SafeAreaView, View, Text, TextInput } from 'react-native'
import Button from 'src/components/Common/Button'
import { goToHome } from 'src/components/Views/Home/root/routes/navigation'
import * as yup from 'yup'

import { testIds } from '../root/constants/testId'
import { ILoginViewComponentProps } from '../root/models/interfaces/loginInfo'
import { goToRegister } from '../root/routes/navigation'
import styles from './style'

const LoginSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
})
const Login = (props: ILoginViewComponentProps) => {
  const { t } = useTranslation()
  const componentId: string = props.componentId
  useEffect(() => {
    if (props.message) {
      goToHome()
    }
  }, [props.message])
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values)
          props.submitLogin(values)
        }}
      >
        {(formProps) => (
          // eslint-disable-next-line prettier/prettier
          <View>
            <Text style={styles.labels}>{t('username')}:</Text>
            <TextInput
              style={styles.input}
              onChangeText={formProps.handleChange('username')}
              value={formProps.values.username}
              testID={testIds.usernameInputId}
            />
            <Text style={styles.errorText}>
              {formProps.touched.username && formProps.errors.username}
            </Text>
            <Text style={styles.labels}>{t('password')}:</Text>
            <TextInput
              style={styles.input}
              onChangeText={formProps.handleChange('password')}
              value={formProps.values.password}
              textContentType={'password'}
              testID={testIds.passwordInputId}
            />
            <Text style={styles.errorText}>
              {formProps.touched.password && formProps.errors.password}
            </Text>
            <View style={styles.btnContainer}>
              <Text
                onPress={() => {
                  goToRegister(componentId)
                }}
                testID={testIds.registerBtnId}
                style={styles.registerBtn}
              >
                {t('register')}
              </Text>
              <Button
                btnStyle={styles.submitBtn}
                testId={testIds.loginSubmitBtnId}
                onPress={formProps.handleSubmit}
              >
                <Text>Submit</Text>
              </Button>
            </View>
          </View>
        )}
      </Formik>
      <Text style={{ ...styles.labels, marginTop: 40 }}>
        Please input anything and click submit to home page
      </Text>
      <Text style={{ ...styles.labels, marginTop: 10 }}>
        Register will go to empty register page
      </Text>
    </SafeAreaView>
  )
}

export default Login
