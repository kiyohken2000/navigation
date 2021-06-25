import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

export const ListItem = (props) => {
  const { title, subTitle, imageUrl, onPress } = props;

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: imageUrl }} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {title}
        </Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 5,
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flexDirection: 'column',
    padding: 10,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
  },
  subTitle: {
    fontSize: 12,
    color: '#555',
  },
});