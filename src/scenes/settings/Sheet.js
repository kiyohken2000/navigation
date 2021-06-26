import React, { useEffect, useState, useContext } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StatusBar, useColorScheme, Dimensions } from 'react-native'
import { BlurView } from 'expo-blur'
import { Global } from '../../routes/navigation/Navigation'

export default function Sheet(props) {
  const title = props.title
  const height = Dimensions.get('window').height
  const {
    sport, setSport,
    food, setFood,
    color, setColor
  } = useContext(Global)

  return (
    <BlurView intensity={95} >
      <View
        style={{
          padding: 16,
          height: height*0.87,
        }}
      >
        <Text>Swipe down to close</Text>
        <Text>{title}</Text>
        <Text>{sport}</Text>
        <Text>{food}</Text>
        <Text>{color}</Text>
      </View>
    </BlurView>
  )
}