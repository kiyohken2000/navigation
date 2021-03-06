import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// stack navigators
import {
  RepresentativesNavigator,
  CouncilorsNavigator,
  MonthlyNavigator,
  WeeklyNavigator,
  DailyNavigator
} from '../stacks'

const Tab = createMaterialTopTabNavigator()

export const TopTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Representatives"
  >
    <Tab.Screen
      name="Representatives"
      component={RepresentativesNavigator}
      options={{ tabBarLabel: 'toptab 1' }}
    />
    <Tab.Screen
      name="Councilors"
      component={CouncilorsNavigator}
      options={{ tabBarLabel: 'toptab 2' }}
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