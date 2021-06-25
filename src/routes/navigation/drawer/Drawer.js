import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import TopTabNavigator from '../toptabs/TopTabs'

const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  newState.routes = newState.routes.filter((item) => item.name !== 'Home')
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    overlayColor="transparent"
    screenOptions={{
      headerShown: true
    }}
    drawerContent={DrawerMenuContainer}
    drawerStyle={{
      // backgroundColor: 'black',
    }}
  >
    <Drawer.Screen name="Home" component={TopTabNavigator} />
  </Drawer.Navigator>
)

export default DrawerNavigator
