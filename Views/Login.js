import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Navigator,
  Button,
  TextInput,
  Keyboard,
} from 'react-native';
const {StyleSheet} = React;

import Firebase from '../Firebase/Firebase'
import * as firebase from 'firebase';
import RootTabs from '../Config/Router'


export default class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      response: "",
    }
  }

  async signup() {

    Keyboard.dismiss();

    try {
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);

        this.setState({
            response: "account created"
        });

        setTimeout(() => {
            this.props.navigator.push({
                name: "Home"
            })
        }, 1500);

    } catch (error) {
        this.setState({
            response: error.toString()
        })
    }

  }

  async login() {

    try {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);

        this.setState({
            response: "Logged In!"
        });

        setTimeout(() => {
            this.props.navigator.push({
                name: "RootTabs"
            })
        }, 1500);

    } catch (error) {
        this.setState({
            response: error.toString()
        })
    }
  }

  render(){
    return (
      <View style={{ backgroundColor: "#3d3d5c", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>

        </Text>
        <TextInput
          style={styles.inputBox}
          autoCorrect = {false}
          onChangeText={(email) => this.setState({email})}
          placeholder="Email"
          text = "nuyllz"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.inputBox}
          onChangeText={(password) => this.setState({password})}
          placeholder="Password"
          text = "nuyllz"
        />
        <TouchableOpacity onPress={this.login} style={styles.loginButton}>
          <Text> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.signup} style={styles.signUpButton}>
          <Text> Sign Up </Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = {
  loginButton : {
    borderWidth: 1,
    backgroundColor: '#2d862d',
    borderColor: '#2d862d',
    width: "80%", height: "6%",
    alignItems: 'center',
    justifyContent: 'center',
  },

  signUpButton : {

    backgroundColor: '#1c756c',
    width: "80%", height: "6%",
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputBox: {
    height: 40,
    width: "80%",
    backgroundColor : "#ccd3e0",
    borderColor: "#ccd3e0",
    alignItems: 'center',
    justifyContent: 'center'
  },

};
