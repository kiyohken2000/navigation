import React, { useEffect, useState, useCallback } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StatusBar, useColorScheme, Dimensions } from 'react-native'
import styles from './styles'
import BottomSheet from 'reanimated-bottom-sheet'
import Sheet from './Sheet'
import axios from 'axios'
import { Divider } from 'react-native-elements'

export default function Home(props) {
  const height = Dimensions.get('window').height
  const sheetRef = React.useRef(null)
  const [data, setData] = useState([])
  const [person, setPerson] = useState('')

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
    </>
  )
}