import React, { useEffect, useState, useContext } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StatusBar, useColorScheme, Dimensions } from 'react-native'
import { BlurView } from 'expo-blur'
import styles from './styles'
import { Global } from '../../routes/navigation/Navigation'
import { Divider } from 'react-native-elements'

export default function Sheet(props) {
  const data = props.data
  const height = Dimensions.get('window').height
  const {sport, food, color} = useContext(Global)

  return (
    <BlurView intensity={95}>
      <View style={{ padding: 16, height: height*0.83, }}>
        <Divider style={{marginLeft:140, marginRight:140, borderRadius:20}} width={5} color={'#c0c0c0'} />
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.field}>{data.email}</Text>
        <Text style={styles.field}>{data.phone}</Text>
        <Text style={styles.field}>{data.website}</Text>
        <Text style={styles.field}>Sport: {sport?sport:'unselected'}</Text>
        <Text style={styles.field}>Food: {food?food:'unselected'}</Text>
        <Text style={styles.field}>Color: {color?color:'unselected'}</Text>
      </View>
    </BlurView>
  )
}