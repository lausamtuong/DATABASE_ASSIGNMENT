import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import storetoolkit from './reduxToolkit/store.js'
import {NextUIProvider} from '@nextui-org/react'
import MessengerCustomerChat from "react-messenger-customer-chat";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storetoolkit} >
      <NextUIProvider >
        <App />
      </NextUIProvider>
    </Provider>
    <MessengerCustomerChat
    pageId="1426771290948216"
    appId="668526127603326"
    
  />,
  </React.StrictMode>,
  document.getElementById('root')
)
