'use strict'

import ChoiceBook from './ChoiceBook'

 import React, {
   StyleSheet,
   Component,
   NavigatorIOS
 } from 'react-native'

 export default class Choiceness extends Component {
   render() {
     return (
       <NavigatorIOS
          initialRoute={{
            title: '精选',
            component: ChoiceBook
          }}
       />
     )
   }
 }
