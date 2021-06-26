import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StatusBar, useColorScheme, Dimensions } from 'react-native'
import styles from './styles'
import BottomSheet from 'reanimated-bottom-sheet'
import Sheet from './Sheet'

export default function Settings(props) {
  const height = Dimensions.get('window').height
  const sheetRef = React.useRef(null)

  return (
    <>
    <View style={styles.container}>
      <View style={{ width: '100%' }}>
        <TouchableOpacity style={styles.button} onPress={() => sheetRef.current.snapTo(0)} >
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableOpacity>
      </View>
    </View>
    <BottomSheet
      ref={sheetRef}
      snapPoints={[height*0.87, 0]}
      initialSnap={1}
      borderRadius={30}
      renderContent={() => <Sheet title={'Bottom Sheet'}/>}
    />
    </>
  )
}