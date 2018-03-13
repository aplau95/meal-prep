import React from 'react';
import { List } from 'react-native-elements';
import {
  Modal,
  ListView,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Button, Navigator,
  ScrollView,
  SectionList,
  TouchableHighlight,
  TextInput
} from 'react-native';

import * as firebase from 'firebase';
import Firebase from '../Firebase/Firebase';
import AddButton from '../Components/AddButton/AddButton';

const styles = require('../Styles')

export default class GroceryList extends React.Component{
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      itemDataSource: ds,
      modalVisible: false,
      text:''
    }

    this.itemsRef = this.getRef().child("items");
    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }

  getRef(){
    return firebase.database().ref();
  }
  componentWillMount(){
    this.getItems(this.itemsRef);
  }

  componentDidMount(){
    this.getItems(this.itemsRef);
  }

  toAnyItem(item){
    return []
  }
  getItems(itemsRef){
    //let items = [{title: 'Item One'},{title: 'Item Two'}];
    itemsRef.on('value', (snap) => {
      let items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val(),
          _key: child.key
        })
      })
      this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(items)
      })
    })

  }

  pressRow(item){
    this.itemsRef.child(item._key).remove();
  }

  renderRow(item){
    return (
      //Pressable Items
      <TouchableHighlight onPress={() => {
        this.pressRow(item);
      }}>
        <View style={styles.li}>
          <Text>{item.title}</Text>
        </View>
      </TouchableHighlight>

    );
  }

  setModalVisible(visible){
      this.setState({modalVisible:visible});
  }

  addItem(){
    this.setModalVisible(true);
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {

          }}>
          <View style={{marginTop: 22}}>
            <View>
              <TextInput
                value={this.state.text}
                placeholder="Add Item"
                onChangeText = {(value) => this.setState({text:value})}
              />
              <TouchableHighlight
                style={styles.action}
                onPress={() => {
                  this.itemsRef.push({value: this.state.text})
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={styles.actionText}>Save Item</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.action}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={styles.actionText}>Save Item</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <ListView
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />
        <AddButton onPress={this.addItem.bind(this)} title="Add Item" />
      </View>
    );
  }

}
