import React, { useEffect, useState, useMemo } from 'react'
import { Text, View, TouchableOpacity, ScrollView, FlatList, useColorScheme, Dimensions } from 'react-native'
import styles from './styles'
import BottomSheet from 'reanimated-bottom-sheet'
import Sheet from './Sheet'
import axios from 'axios'
import { Avatar } from 'react-native-elements'

export default function Councilors(props) {
  const height = Dimensions.get('window').height
  const sheetRef = React.useRef(null)
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState('')

  useEffect(() => {
   const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/photos')
      setPosts(result.data)
    }
    fetchData();
  }, []);

  function openSheet(d) {
    setPost(d)
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
        data={posts}
        renderItem={renderItem}
      />
    )
  }, [posts])

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
      renderContent={() => <Sheet data={post}/>}
    />
    </>
  )
}