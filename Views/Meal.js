import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, Navigator, Button } from 'react-native';



export default class Meal extends React.Component{
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={this.saveDataq}>
          <Text>click me to save data</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.displayData}>
          <Text>click me to display data</Text>
        </TouchableOpacity>

      </View>
    );
  }

  saveData(){
    let item  = {
        name: 'carrot',
        serving: '3',
        calories: '10',
    }
    AsyncStorage.setItem('user', JSON.stringify(item));
  }

  displayData = async () => {
    try{
      let user = await AsyncStorage.getItem('user');
      let parse = JSON.parse(user);
      alert(parse.serving);
    }
    catch(error){
      alert('error')
    }
  }

}
