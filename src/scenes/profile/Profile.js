import React, { useEffect, useState, useCallback } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StatusBar, useColorScheme, Dimensions } from 'react-native'
import styles from './styles'
import BottomSheet from 'reanimated-bottom-sheet'
import Sheet from './Sheet'
import axios from 'axios'
import { Divider } from 'react-native-elements'

export default function Profile(props) {
  const height = Dimensions.get('window').height
  const sheetRef = React.useRef(null)
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState('')

  useEffect(() => {
   const fetchData = async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/posts')
      setPosts(result.data)
    }
    fetchData();
  }, []);

  function openSheet(d) {
    setPost(d)
    sheetRef.current.snapTo(0)
  }

  return (
    <>
    <View style={styles.container}>
      <View style={{ flex: 1, width: '100%' }}>
        <ScrollView>
          {
            posts.map((post, i) => {
              return (
                <View key={i}>
                  <TouchableOpacity onPress={() => openSheet(post)} >
                    <Text style={styles.title}>{post.title}</Text>
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
      renderContent={() => <Sheet data={post}/>}
    />
    </>
  )
}