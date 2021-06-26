import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, FlatList, useColorScheme } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { ListItem } from './ListItem'

export default function Feed(props) {
  const navigation = useNavigation()
  const [articles, setArticles] = useState([])

  const fetch = async () => {
    const response = await axios.get('https://asia-northeast1-news-app-udemy.cloudfunctions.net/dummy_news')
    setArticles(response.data.articles);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <FlatList
          data={articles}
          renderItem={({ item }) => (
            <ListItem
              imageUrl={item.urlToImage}
              title={item.title}
              subTitle={item.author}
              onPress={() => navigation.navigate('Article', { data: item })}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  )
}