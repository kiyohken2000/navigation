import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StatusBar, useColorScheme, Dimensions } from 'react-native'
import { BlurView } from 'expo-blur'

export default function Sheet(props) {
  const title = props.title
  const height = Dimensions.get('window').height

  return (
    <BlurView intensity={95} >
      <View
        style={{
          padding: 16,
          height: height*0.9,
        }}
      >
        <Text>Swipe down to close</Text>
        <Text>{title}</Text>
      </View>
    </BlurView>
  )
}