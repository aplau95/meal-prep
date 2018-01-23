import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootTabs } from './Config/Router'
import * as firebase from 'firebase';
import Firebase from './Firebase/Firebase';
import Login from './Views/Login';

class App extends Component {
  constructor(props) {
    super(props);

    Firebase.initialize();

    this.getInitialView();

    this.state = {
      userLoaded: false,
      initialView: null
    };

    this.getInitialView = this.getInitialView.bind(this);

  }

  getInitialView() {

    firebase.auth().onAuthStateChanged((user) => {

      let initialView = user ? "Home" : "Login";

      this.setState({
        userLoaded: true,
        initialView: initialView
      })
    })
  }

  render() {
    if (this.state.userLoaded) {
    return <Login />;
  } else {
    return <RootTabs />;
  }
  }
}

export default App
