import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Navigator,
  Button,
  Modal,
  TouchableHighlight,
  ScrollView,
  Picker
} from 'react-native';
const styles = require('../../Styles.js')

export default class AddButton extends Component {
  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight
          underlayColor = "#24ce84"
          onPress={this.props.onPress}
        >
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
