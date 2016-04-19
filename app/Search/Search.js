'use strict'

import SearchBook from './SearchBook'

 import React, {
   StyleSheet,
   Component,
   Text,
   NavigatorIOS
 } from 'react-native'

 var styles = StyleSheet.create({
   container: {
     flex: 1
   }
 })

 export default class Search extends Component {
   render() {
     return (
       <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'Search',
            component: SearchBook,
          }}
       />
     )
   }
 }
