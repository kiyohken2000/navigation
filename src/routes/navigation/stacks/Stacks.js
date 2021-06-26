import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Representatives from 'scenes/representatives'
import Councilors from 'scenes/councilors'
import Details from 'scenes/details'
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

export const RepresentativesNavigator = () => (
  <Stack.Navigator
    initialRouteName="Representatives"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Representatives"
      component={Representatives}
      options={({ navigation }) => ({
        title: 'Representatives',
      })}
    />
  </Stack.Navigator>
)

export const CouncilorsNavigator = () => (
  <Stack.Navigator
    initialRouteName="Councilors"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Councilors"
      component={Councilors}
      options={({ navigation }) => ({
        title: 'Councilors',
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