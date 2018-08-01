import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import {Icon, Button, Container, Header, Content,Left } from 'native-base';

class BusDetail extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Text> Bus Detail </Text>
            </View>
        )
    }
}
styles= StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
  })
export default BusDetail;
