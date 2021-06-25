import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StatusBar, useColorScheme, Dimensions } from 'react-native'
import { BlurView } from 'expo-blur'
import styles from './styles'

export default function Sheet(props) {
  const data = props.data
  const height = Dimensions.get('window').height

  return (
    <BlurView intensity={95} >
      <View
        style={{
          padding: 16,
          height: height*0.83,
        }}
      >
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.field}>{data.email}</Text>
        <Text style={styles.field}>{data.phone}</Text>
        <Text style={styles.field}>{data.website}</Text>
      </View>
    </BlurView>
  )
}