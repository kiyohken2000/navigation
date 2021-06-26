import React, { useEffect, useState, useCallback } from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import {
  TopTabNavigator,
  DaysNavigator
} from '../toptabs/TopTabs'
import { FeedNavigator, SettingsNavigator } from '../stacks'
import { colors } from 'theme'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

export const UserCount = React.createContext();

const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => {
  const [isModal, setModal] = useState(false)
  const value = { isModal, setModal }
  return (
    <UserCount.Provider value={value}>
    <Drawer.Navigator
      initialRouteName="Home"
      overlayColor="transparent"
      screenOptions={{
        headerShown: true,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: colors.darkPurple },
        headerTitleStyle: { fontSize: 18 },
      }}
      drawerContent={DrawerMenuContainer}
      drawerStyle={{
        // backgroundColor: 'black',
        opacity: 0.93
      }}
    >
      <Drawer.Screen name="Home" component={TopTabNavigator}
        options={({ navigation, route }) => ({
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <FontIcon
              name="apple-alt"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
          headerRight: () => (
            <FontIcon
              onPress={() => setModal(!isModal)}
              name="sliders-h"
              color="#fff"
              size={20}
              style={{marginRight:20}}
            />
          ),
        })}
      />
      <Drawer.Screen name="Feed" component={FeedNavigator}
        options={{
          title: 'Feed',
          drawerIcon: ({focused, size}) => (
            <FontIcon
              name="fire-alt"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen name="Days" component={DaysNavigator}
        options={{
          title: 'Days',
          drawerIcon: ({focused, size}) => (
            <FontIcon
              name="calendar-alt"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen name="Settings" component={SettingsNavigator}
        options={{
          title: 'Settings',
          drawerIcon: ({focused, size}) => (
            <FontIcon
              name="wrench"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
    </UserCount.Provider>
  )}

export default DrawerNavigator
