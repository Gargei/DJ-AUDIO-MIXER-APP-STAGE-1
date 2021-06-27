import React, { Component } from 'react';
import { View, Button, Alert, TouchableOpacity, Text } from 'react-native';


export default class App extends Component {
   displayalert(){
    alert("Enjoy your music!!");
  }
  displayalert2(){
    alert("Start mixing");
  }
   displayalert3(){
    alert("Great going!");
  }
   displayalert4(){
    alert("Yes you did it!!");
  }
   displayalert5(){
    alert("Mix it all together and you get the best of all sounds!");
  }



  render() {
    return (
      <View style={{backgroundColor:'#E1BEE7',justifyContent:'center', 
    alignItems:'center', paddingBottom:90, paddingTop:20}}>
        <View>
          <TouchableOpacity
            style={{
              width: 300,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: '#1976d2',
              borderWidth: 2,
              borderColor: 'black',
              marginTop:20
            }}
            onPress={
              this.displayalert
            }>
            <Text> Audio 1</Text>
          </TouchableOpacity>
        </View>


        <View>
          <TouchableOpacity
            style={{
               width: 250,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: '#2196f3',
              borderWidth: 2,
              borderColor: 'Black',
              marginTop:20
            }}
            onPress={this.displayalert2}>
            <Text> Audio 2</Text>
          </TouchableOpacity>
        </View>


        <View>
          <TouchableOpacity
            style={{
              width: 200,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: '#64b5f6',
              borderWidth: 2,
              borderColor: 'Black',
              marginTop:20
            }}
            onPress={this. displayalert3} >
            <Text> Audio 3</Text>
          </TouchableOpacity>
        </View>


        <View>
          <TouchableOpacity
            style={{
               width: 150,
              height: 70,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: '#bbdefb',
              borderWidth: 2,
              borderColor: 'Black',
              marginTop:20
            }}
            onPress={this.displayalert4}>
            <Text> Audio 4</Text>
          </TouchableOpacity>
        </View>
        


        <TouchableOpacity
          style={{
            width: 100,
            height: 90,            
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor: '#ba68c8',
            borderWidth: 2,
            borderColor: 'black',
            marginTop:20
          }}
          onPress={this.displayalert5}>
          <Text> Redo </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
