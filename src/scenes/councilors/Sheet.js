import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image, useColorScheme, Dimensions } from 'react-native'
import { BlurView } from 'expo-blur'
import styles from './styles'
import CloseBar from '../../components/CloseBar'

export default function Sheet(props) {
  const data = props.data
  const height = Dimensions.get('window').height

  return (
    <BlurView intensity={95} >
    <View style={{ marginTop:20, height: height*0.83, }}>
      <CloseBar />
        <ScrollView style={styles.itemContainer}>
          <Image
            source={{uri:data.url}}
            style={{ width: 250, height: 250, alignSelf: "center", borderRadius:20 }}
          />
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.field}>{data.url}</Text>
            <Text style={styles.field}>{data.thumbnailUrl}</Text>
            <Text style={styles.field}>id: {data.id}</Text>
            <Text style={styles.field}>albumId: {data.albumId}</Text>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.field}>{data.url}</Text>
            <Text style={styles.field}>{data.thumbnailUrl}</Text>
            <Text style={styles.field}>id: {data.id}</Text>
            <Text style={styles.field}>albumId: {data.albumId}</Text>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.field}>{data.url}</Text>
            <Text style={styles.field}>{data.thumbnailUrl}</Text>
            <Text style={styles.field}>id: {data.id}</Text>
            <Text style={styles.field}>albumId: {data.albumId}</Text>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.field}>{data.url}</Text>
            <Text style={styles.field}>{data.thumbnailUrl}</Text>
            <Text style={styles.field}>id: {data.id}</Text>
            <Text style={styles.field}>albumId: {data.albumId}</Text>
          </View>
        </ScrollView>
      </View>
    </BlurView>
  )
}