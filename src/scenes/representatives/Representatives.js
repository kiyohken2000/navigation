import React, { useEffect, useState, useContext, useMemo } from 'react'
import { Text, View, TouchableOpacity, ScrollView, FlatList, useColorScheme, Dimensions } from 'react-native'
import styles from './styles'
import BottomSheet from 'reanimated-bottom-sheet'
import Sheet from './Sheet'
import axios from 'axios'
import { Avatar } from 'react-native-elements'
import { Global } from '../../routes/navigation/Navigation'
import Modal from 'react-native-modal'
import Filter from './Filter'

export default function Representatives(props) {
  const height = Dimensions.get('window').height
  const { isFilter, setFilter } = useContext(Global)
  const sheetRef = React.useRef(null)
  const [data, setData] = useState([])
  const [person, setPerson] = useState('')

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/photos')
    setData(result.data)
  }

  const openSheet = (d) => {
    setPerson(d)
    sheetRef.current.snapTo(0)
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} onPress={() => openSheet(item)} style={styles.item}>
        <View style={{flexDirection:'row'}}>
          <View style={styles.avatar}>
            <Avatar
              size="large"
              title="NI"
              source={{ uri: item.thumbnailUrl }}
            />
          </View>
          <View style={{marginEnd: 90}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.field}>{item.thumbnailUrl}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const FlatListRender = useMemo(() => {
    return (
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={data}
        renderItem={renderItem}
        indicatorStyle={'black'}
      />
    )
  }, [data])

  return (
    <>
    <View style={styles.container}>
      <View style={{ flex: 1, width: '100%' }}>
        {FlatListRender}
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
      isVisible={isFilter}
      backdropOpacity={0.3}
      onBackdropPress={() => setFilter(false)}
    >
      <Filter />
    </Modal>
    </>
  )
}