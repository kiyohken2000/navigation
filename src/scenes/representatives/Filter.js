import React, { useEffect, useState, useCallback, useContext } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StatusBar, useColorScheme, Dimensions } from 'react-native'
import styles, {pickerSelectStyles} from './styles'
import { Global } from '../../routes/navigation/Navigation'
import { BlurView } from 'expo-blur'
import RNPickerSelect from 'react-native-picker-select'
import { sports, foods, colors } from './items'

export default function Filter(props) {
  const {
    isFilter, setFilter,
    sport, setSport,
    food, setFood,
    color, setColor
  } = useContext(Global)

  function clearFilter() {
    setSport('')
    setFood('')
    setColor('')
  }

  return(
    <BlurView intensity={95} >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.title}>Content Filter</Text>
        <ScrollView style={{width:'100%'}}>
          <View style={{ width: '100%', marginTop: 20 }}>
            <Text style={styles.field}>Sport: {sport}</Text>
            <RNPickerSelect
              value={sport}
              style={pickerSelectStyles}
              onValueChange={(value) => setSport(value)}
              items={sports}
              placeholder={{ label: 'Select a Sports', value: '' }}
            />
            <Text style={styles.field}>Food: {food}</Text>
            <RNPickerSelect
              value={food}
              style={pickerSelectStyles}
              onValueChange={(value) => setFood(value)}
              items={foods}
              placeholder={{ label: 'Select a Foods', value: '' }}
            />
            <Text style={styles.field}>Color: {color}</Text>
            <RNPickerSelect
              value={color}
              style={pickerSelectStyles}
              onValueChange={(value) => setColor(value)}
              items={colors}
              placeholder={{ label: 'Select a Colors', value: '' }}
            />
          </View>
        </ScrollView>
        <View style={{ width: '100%', marginBottom: 20 }}>
          <TouchableOpacity style={styles.button} onPress={() => setFilter(false)} >
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerView} onPress={() => clearFilter()} >
            <Text style={styles.footerLink}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </BlurView>
  )
}