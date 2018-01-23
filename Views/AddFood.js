import React from 'react';
import { List, ListItem } from 'react-native-elements';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Navigator,
  Button,
  Modal,
  TouchableHighlight,
  ScrollView,
  Picker
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Constants } from 'expo';
import { SearchBar } from 'react-native-elements';


import FoodItem from '../Forms/FoodItem'


const _ = require('lodash')

const list = [
  {
    title: 'Brand Name',
    subtitle: 'Optional',
    text: ''
  },
  {
    title: 'Description',
    subtitle: 'Required',
    text: ''
  },
  {
    title: 'Measurement Units',
    subtitle: 'Required',
    text: '',
    choices: [
      'Grams (g)',
      'Milliliters (mL)',
      'Ounces (oz)',
      'Cups'
    ]
  },
  {
    title: 'Amount',
    subtitle: 'Required',
    text: ''
  },
]

var asdf = false


export default class AddFood extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
          showMeasurements: false,
          showAmount: false
    };
  }

  cannotEdit(title){
    if (title == 'Measurement Units' || title== 'Amount'){
      return false
    }

  }

  changeText(index, text){
    list[index].text = text
    console.log(list[index].text)
  }

  showPicker(title){
    if (title == 'Measurement Units'){
      this.setState({showMeasurements: true});
      this.setState({showAmount: false});
    }
    else if (title == 'Amount'){
      this.setState({showAmount: true});
      this.setState({showMeasurements: false});
    } else {
      this.setState({showMeasurements: false});
      this.setState({showAmount: false});
    }
  }


  keyboardPick(title){
    if (title == 'Amount'){
      return 'numeric'
    } else {
      return 'default'
    }
  }

  render(){
    const showMeasurements = this.state.showMeasurements;
    const showAmount = this.state.showAmount;
    let Measurements = null;
    let Amount = null;

    let data = [];
    for(var i=1;i<10000;i++){
        data.push(<Picker.Item key={i} value={i} label={i.toString()} />);
    }
    //console.log(data.length);

    if (showMeasurements) {
      Measurements =
        <View>
          <Picker
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            {
              _.map(list[2].choices, (choice, index) => {
                return <Picker.Item label={choice} key={index}/>
              })
            }
          </Picker>
        </View>
    } else {
      Measurements = null
    }

    if (showAmount){
      Amount =
        <View>
          <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Button onPress={() => console.log('button1')} title='Fractions' color='black'/>
            <Button onPress={() => console.log('button2')} title='Decimal' color='black'/>
          </View>

          <Picker
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            {data}
          </Picker>
        </View>
    } else {
      Amount = null
    }

    return(
      <View>
          <List>
            {
              list.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  textInput={true}
                  hideChevron={true}
                  onPress={() => this.showPicker(item.title)}
                  textInputOnFocus={() => this.showPicker(item.title)}
                  textInputPlaceholder={item.subtitle}
                  textInputOnChangeText={(text) => this.changeText(i, (text))}
                  keyboardType={this.keyboardPick(item.title)}
                />

              ))
            }
          </List>


        <TouchableOpacity>
          <Button
            onPress={() => this.saveData()}
            title="Add a food"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Button
            onPress={() => this.displayData()}
            title="Display Food"
          />
        </TouchableOpacity>
        {Measurements}
        {Amount}



      </View>
    );
  }

  saveData(){
    AsyncStorage.setItem('food', JSON.stringify(list));
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
