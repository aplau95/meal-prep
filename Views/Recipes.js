import React from 'react';
import { List, ListItem } from 'react-native-elements';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Button, Navigator,
  ScrollView,
} from 'react-native';

export default class Recipes extends React.Component{
  render(){

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Recipes
        </Text>
      </View>
    );
  }
}
