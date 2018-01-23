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
import Ionicons from 'react-native-vector-icons/Ionicons';

const list = [
  {
    title: 'Calories and Macronutrient Goals',
    nav: 'CalMacroGoal',
    icon: 'ios-heart'
  },
  {
    title: 'Profile',
    nav: 'Profile',
    icon: 'ios-contact-outline'
  },

]

export default class Settings extends React.Component{
  constructor() {
    super()

    this.navigate = this.navigate.bind(this)
  }

  navigate = (view) => {
    this.props.navigation.navigate(view)
  }

  alertMe(title){
    alert(title);
  }

  render(){

    return (
      <View>
        <ScrollView>
          <List>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={
                    <Ionicons
                      name={item.icon}
                      size={26}
                      style={{paddingRight: 10, paddingLeft: 10}}
                    />
                  }
                  onPress = {() => this.navigate(item.nav)}
                />
              ))
            }
          </List>

        </ScrollView>
      </View>
    );
  }

}
