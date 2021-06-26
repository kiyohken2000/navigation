import React, { useEffect, useState, useCallback, useContext } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StatusBar, useColorScheme, Dimensions } from 'react-native'
import styles, {pickerSelectStyles} from './styles'
import BottomSheet from 'reanimated-bottom-sheet'
import Sheet from './Sheet'
import axios from 'axios'
import { Divider } from 'react-native-elements'
import { UserCount } from '../../routes/navigation/drawer/Drawer'
import Modal from 'react-native-modal'
import { BlurView } from 'expo-blur'
import RNPickerSelect from 'react-native-picker-select'
import { sports, foods, colors } from './items'

export default function Home(props) {
  const height = Dimensions.get('window').height
  const sheetRef = React.useRef(null)
  const [data, setData] = useState([])
  const [person, setPerson] = useState('')
  const [sport, setSport] = useState('')
  const [food, setFood] = useState('')
  const [color, setColor] = useState('')
  const { isModal, setModal } = useContext(UserCount)

  useEffect(() => {
   const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users')
      setData(result.data)
    }
    fetchData();
  }, []);

  function openSheet(d) {
    setPerson(d)
    sheetRef.current.snapTo(0)
  }

  return (
    <>
    <View style={styles.container}>
      <View style={{ flex: 1, width: '100%' }}>
        <ScrollView>
          {
            data.map((person, i) => {
              return (
                <View key={i}>
                  <TouchableOpacity onPress={() => openSheet(person)} >
                    <Text style={styles.title}>{person.name}</Text>
                    <Text style={styles.field}>{person.email}</Text>
                    <Text style={styles.field}>{person.company.name}</Text>
                  </TouchableOpacity>
                  <Divider />
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    </View>
    <BottomSheet
      ref={sheetRef}
      snapPoints={[height*0.83, 0]}
      initialSnap={1}
      borderRadius={30}
      renderContent={() => <Sheet data={person}/>}
    />
    <Modal
      isVisible={isModal}
      backdropOpacity={0.15}
    >
      <View style={styles.centeredView}>
        <BlurView intensity={95} >
          <View style={styles.modalView}>
            <Text style={styles.title}>Content Filter</Text>
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
            <View style={{ width: '100%', position: 'absolute', bottom: 20 }}>
              <TouchableOpacity style={styles.button} onPress={() => setModal(false)} >
                <Text style={styles.buttonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </View>
    </Modal>
    </>
  )
}