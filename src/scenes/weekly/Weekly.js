import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StatusBar, useColorScheme } from 'react-native'
import styles from './styles'

export default function Weekly(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weekly screen</Text>
    </View>
  )
}