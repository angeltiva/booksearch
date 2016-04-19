'use strict'

import React, {
  Component,
  View,
  TextInput,
  NavigatorIOS,
  TabBarIOS,
  Image,
  Text,
  TouchableHighlight,
  PropTypes
} from 'react-native'

import styles from './style'
import Main from './main'

export default class home extends Component {

  state = {
    username: '',
    pwd: ''
  };

  handleSubmit = () => {
    navigator.push({
      title: '231',
      Component: Main
    })
  };

  render() {
    let { username, pwd } = this.state;

    return (
      <View style={styles.container}>

        <Image
          style={styles.backgroundimage}
          source={require('../img/home.jpg')}
        >

          <View style={styles.texts}>

            <Text style={styles.text}>
              登    录
            </Text>

            <TextInput style={styles.textinput}
              value={username}
              placeholder="填写用户名"
              placeholderTextColoe='grey'
              onChangeText={username => {
                this.setState({
                  username
                })
              }}
            />
            <TextInput style={styles.textinput}
              value={pwd}
              placeholder="填写密码"
              placeholderTextColoe='grey'
              onChangeText={pwd => {
                this.setState({
                  pwd
                })
              }}
            />

            <TouchableHighlight
              onPress={this.handleSubmit}
              style={styles.button}
              underlayColor="#cbebff"
            >
              <Text style={styles.buttonText}>
                提    交
              </Text>
            </TouchableHighlight>

          </View>

        </Image>

      </View>
    )
  }
}
