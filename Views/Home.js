import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, Button, Navigator } from 'react-native';


export default class Home extends React.Component{
  constructor() {
    super()

    this.navigate = this.navigate.bind(this)
  }

  navigate = () => {
    this.props.navigation.navigate('AddFood')
  }

  render(){

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


        <TouchableOpacity>
          <Button
            onPress={() => this.navigate()}
            title="Add a food"
          />
        </TouchableOpacity>

      </View>
    );
  }




}
