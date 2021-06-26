import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StatusBar, useColorScheme, Dimensions } from 'react-native'
import { BlurView } from 'expo-blur'
import styles from './styles'
import { Divider } from 'react-native-elements'

export default function Sheet(props) {
  const data = props.data
  const height = Dimensions.get('window').height

  return (
    <BlurView intensity={95} >
    <View style={{ padding: 16, height: height*0.83, }}>
      <Divider style={{marginLeft:140, marginRight:140, borderRadius:20}} width={5} color={'#c0c0c0'} />
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.field}>{data.body}</Text>
      </View>
    </BlurView>
  )
}