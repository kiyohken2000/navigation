import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StatusBar, useColorScheme } from 'react-native'
import styles from './styles'
import { useRoute } from '@react-navigation/native'

export default function Article(props) {
  const route = useRoute()
  const data = route.params.data

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.author}</Text>
      <Text style={styles.field}>{data.title}</Text>
      <Text style={styles.field}>{data.publishedAt}</Text>
    </View>
  )
}