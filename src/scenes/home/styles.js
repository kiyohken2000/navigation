import { StyleSheet, Dimensions } from 'react-native'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

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
    marginLeft: 5,
    marginRight: 5,
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
  footerView: {
    alignItems: "center",
    marginTop: 20
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16
  },
  modalView: {
    height: height*0.52,
    width: width*0.9,
    backgroundColor: "#f0f8ff",
    opacity: 0.97,
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0,
    shadowRadius: 20,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
})

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    padding: 10,
    paddingRight: 20,
  },
  iconContainer: {
    top: 6,
    right: 25,
  },
});