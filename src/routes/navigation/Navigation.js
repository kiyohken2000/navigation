import React, { useEffect, useState, useCallback, createContext } from 'react'
import { NavigationContainer, StatusBar } from '@react-navigation/native'
import DrawerNavigator from './drawer'

export const Global = createContext();

export default function App() {
  const [isFilter, setFilter] = useState(false)
  const [sport, setSport] = useState('')
  const [food, setFood] = useState('')
  const [color, setColor] = useState('')
  const value = {
    isFilter, setFilter,
    sport, setSport,
    food, setFood,
    color, setColor
  }
  return (
    <Global.Provider value={value}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Global.Provider>
)}