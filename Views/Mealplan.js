import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, Button, Navigator } from 'react-native';


export default class Mealplan extends React.Component{
  constructor() {
    super()

    this.navigate = this.navigate.bind(this)
  }

  navigate = () => {
    this.props.navigation.navigate('Meal')
  }

  render(){

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>
          Meal Plan
        </Text>
        <Button
          title="get food"
          onPress={() => this.displayData()}
        />

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
