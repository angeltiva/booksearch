'use strict'

import React, {
  StyleSheet,
  Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window')

module.exports = React.StyleSheet.create ({
  container: {
    flex: 1,
    position: 'relative'
  },
  backgroundimage: {
    flex: 1,
    width: width,
    height: height
  },
  texts: {
    position: 'absolute',
    top: 260,
    right: 0,
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 20,
    marginRight: 15
  },
  textinput: {
    backgroundColor: "white",
    width: 200,
    height: 44,
    marginTop: 10,
    marginRight: 15,
    padding: 10
  },
  button: {
    width: 200,
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    marginRight: 15,
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 20,
    color: '#cbebff'
  }
})
