import React from 'react'
import { StatusBar, Platform } from 'react-native'

export default function TopBar() {
  return (
    <>
      {Platform.OS === 'ios'?
        <StatusBar barStyle="dark-content" />:
        <StatusBar barStyle="light-content" />
      }
    </>
  )
}
