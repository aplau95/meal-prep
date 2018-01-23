import React, { Component } from 'react';

import {
   Modal,
   Text,
   TouchableHighlight,
   View,
   StyleSheet
}
from 'react-native'


export default class FoodItem extends Component {
  constructor() {
    super()

    this.state = {
      modalVisible: false
    }
  }

  toggleModal(visible) {
    this.setState({modalVisible: visible})
  }
  render(){
    return (
      <Modal transparent = {false}
             visible = {this.state.modalVisible}
             onRequestClose = {() => { console.log("Modal has been closed.") } }>
        <View style = {styles.modal}>
           <Text style = {styles.text}>Modal is open!</Text>

           <TouchableHighlight onPress = {() => {
              this.toggleModal(false)}}>

              <Text style = {styles.text}>Close Modal</Text>
           </TouchableHighlight>
        </View>
      </Modal>
    )
  }
}
