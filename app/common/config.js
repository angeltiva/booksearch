'use strict'

import React, {
  PixelRatio
} from 'react-native'

exports.fontTiny = 10
exports.fontSmall = 12
exports.fontLarge = 16
exports.fontHuge = 20

exports.gapTiny = 3
exports.gapSmall = 5
exports.gapMedium = 10
exports.gapLarge = 15
exports.gapHuge = 20

exports.bgGray = '#F0F0F0'
exports.bgWhite = '#FFF'

exports.borderWidth = 1 / PixelRatio.get()
exports.borderColor = '#DDD'

exports.navBarHeight = 65
exports.tabBarHeight = 48

exports.buttonStyle = {
    borderRadius: 2,
    backgroundColor: '#f39c12',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center'
}

exports.inputStyle = {
    borderRadius: 2,
    borderWidth: exports.borderWidth,
    backgroundColor: '#FFF',
    height: 36,
    fontSize: exports.fontLarge,
    padding: exports.gapTiny
}
