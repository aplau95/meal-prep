import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootTabs } from './Config/Router'

class App extends Component {
  render() {
    return <RootTabs />;
  }
}

export default App
