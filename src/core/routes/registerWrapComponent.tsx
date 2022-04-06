import React from 'react'

import { Provider } from 'react-redux'
import store from 'src/core/redux-saga/store'

const wrapComponentWithProvider: wrapComponentWithProviderType = (Component) => (props) =>
  (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  )
export default wrapComponentWithProvider

type wrapComponentWithProviderType = (Component: any) => (props: any) => JSX.Element
