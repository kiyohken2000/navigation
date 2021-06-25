import React from 'react'
import { NavigationContainer, StatusBar } from '@react-navigation/native'
import DrawerNavigator from './drawer'

export default () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
)
