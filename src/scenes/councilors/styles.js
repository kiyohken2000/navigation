import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
  },
  field: {
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#788eec',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  avatar: {
    margin: 10,
    alignSelf: "center",
  },
  item: {
    marginLeft: 5,
    marginRight: 10,
  },
  itemContainer: {
    padding:20,
  }
})
