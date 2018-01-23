import React, {Component} from 'react';
import ReactNative from 'react-native';
const Styles = require('../Styles.js')
const { View, TouchableHighlight, Text } = ReactNative;

export default class ListItem extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={Styles.li}>
          <Text style={Styles.liText}>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
