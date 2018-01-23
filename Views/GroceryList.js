import React from 'react';
import { List } from 'react-native-elements';
import {
  ListView,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Button, Navigator,
  ScrollView,
  SectionList,
} from 'react-native';

export default class GroceryList extends React.Component{
  renderItem = (item) => {
    return <Text>{item.item.name}</Text>
  }

  renderHeader = (item) => {

  }

  render(){
    return (
      <View>
      </View>
    );
  }

  displayData = async () => {
    try{
      let food = await AsyncStorage.getItem('food');
      let parse = JSON.parse(food);
      //Description
      alert(parse[1].text);
    }
    catch(error){
      alert('error')
    }
  }

}
