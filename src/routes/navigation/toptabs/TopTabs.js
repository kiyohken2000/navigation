import React from 'react'
import { colors } from 'theme'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// stack navigators
import {
  HomeNavigator,
  ProfileNavigator,
  FeedNavigator,
  MonthlyNavigator,
  WeeklyNavigator,
  DailyNavigator
} from '../stacks'

const Tab = createMaterialTopTabNavigator()

export const TopTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
  >
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileNavigator}
    />
  </Tab.Navigator>
)

export const DaysNavigator = () => (
  <Tab.Navigator
    initialRouteName="Daily"
  >
    <Tab.Screen
      name="Daily"
      component={DailyNavigator}
    />
    <Tab.Screen
      name="Weekly"
      component={WeeklyNavigator}
    />
    <Tab.Screen
      name="Monthly"
      component={MonthlyNavigator}
    />
  </Tab.Navigator>
)