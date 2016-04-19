'use strict'

 import React, {
   StyleSheet,
   Component,
   NavigatorIOS,
   Image,
   ListView
 } from 'react-native'

import MyBooks from './MyBooks'
import Search from '../Search/Search'

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default class BookList extends Component {

  renderBook() {}

   render(book) {
     return (
       <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'My BookList',
          component: MyBooks,
          rightButtonTitle: 'Search',
          leftButtonTitle: 'Avatar',
          onLeftButtonPress: function() {
          }
        }}
       />
     )
   }
 }
