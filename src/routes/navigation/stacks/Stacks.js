import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import Details from 'scenes/details'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import Feed from 'scenes/feed'
import Article from 'scenes/article'
import Settings from 'scenes/settings'
import Daily from 'scenes/daily'
import Weekly from 'scenes/weekly'
import Monthly from 'scenes/monthly'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
  headerShown: false
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        title: 'Home',
      })}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation }) => ({
        title: 'Profile',
      })}
    />
  </Stack.Navigator>
)

export const FeedNavigator = () => (
  <Stack.Navigator
    initialRouteName="Feed"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Feed"
      component={Feed}
      options={({ navigation }) => ({
        title: 'Feed',
      })}
    />
    <Stack.Screen
      name="Article"
      component={Article}
      options={({ navigation }) => ({
        title: 'Article',
      })}
    />
  </Stack.Navigator>
)

export const SettingsNavigator = () => (
  <Stack.Navigator
    initialRouteName="Settings"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={({ navigation }) => ({
        title: 'Settings',
      })}
    />
  </Stack.Navigator>
)

export const MonthlyNavigator = () => (
  <Stack.Navigator
    initialRouteName="Monthly"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Monthly"
      component={Monthly}
      options={({ navigation }) => ({
        title: 'Monthly',
      })}
    />
  </Stack.Navigator>
)

export const WeeklyNavigator = () => (
  <Stack.Navigator
    initialRouteName="Weekly"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Weekly"
      component={Weekly}
      options={({ navigation }) => ({
        title: 'Weekly',
      })}
    />
  </Stack.Navigator>
)

export const DailyNavigator = () => (
  <Stack.Navigator
    initialRouteName="Daily"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Daily"
      component={Daily}
      options={({ navigation }) => ({
        title: 'Daily',
      })}
    />
  </Stack.Navigator>
)