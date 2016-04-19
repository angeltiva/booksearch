'use strict'

import config from '../common/config'

import React, {
  StyleSheet,
  Component,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: config.navBarHeight,
    marginBottom: config.tabBarHeight,
    backgroundColor: config.bgGray
  },
  thumbnail: {
    width: 128,
    height: 200,
    marginRight: config.gapMedium
  },
  topcontainer: {
    backgroundColor: config.bgWhite,
    flexDirection: 'row',
    margin: config.gapLarge,
    padding: 10,
  },
  topRight: {
    flexDirection: 'column',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: config.gapLarge
  },
  focus: {
    width: 50,
    height: 25,
    borderRadius: 2,
    backgroundColor: '#f39c12',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: config.gapMedium
  },
  font: {
    color: '#fff'
  },
  title: {
    color: '#333',
    fontSize: config.fontLarge,
    marginBottom: config.gapSmall
  },
  author: {
    color: '#bbb',
  },
  buttomcontainer: {
    margin: config.gapLarge,
    padding: config.gapMedium,
    backgroundColor: config.bgWhite
  }
});

export default class BookDetail extends Component {
  render() {
    var book = this.props.book;
    return(
      <View style={styles.container}>
        <View style={styles.topcontainer}>
          <Image
            source={{uri: book.volumeInfo.imageLinks.thumbnail}}
            style={styles.thumbnail}
           />
           <View style={styles.topRight}>
             <View style={styles.intro}>
               <Text style={styles.title}>
                 {book.volumeInfo.title}
               </Text>
               <Text style={styles.author}>
                 {book.volumeInfo.authors}
               </Text>
             </View>
             <View style={styles.buttons}>
               <TouchableHighlight
               style={styles.focus}
               underlayColor='#ccc'
               onPress={() => {alert('你已经关注了')}}
               >
                 <Text style={styles.font}>
                   关注
                 </Text>
               </TouchableHighlight>
               <TouchableHighlight
               style={styles.focus}
               underlayColor='#ccc'
                onPress={() => {alert('你已经收藏了')}}
                >
                 <Text style={styles.font}>
                   收藏
                 </Text>
               </TouchableHighlight>
               <TouchableHighlight
               style={styles.focus}
               underlayColor='#ccc'
                onPress={() => {alert('你正在下载')}}
                >
                 <Text style={styles.font}>
                   下载
                 </Text>
               </TouchableHighlight>
             </View>
           </View>
        </View>
        <View style={styles.buttomcontainer}>
          <Text>
            {book.volumeInfo.description}
          </Text>
        </View>
      </View>

    )
  }
}
