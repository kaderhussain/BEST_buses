import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import {Icon, Button, Container, Header, Content,Left } from 'native-base';


class BusNumber extends Component{
    render(){
        return(
            <Container>
            <Header style={{backgroundColor: 'white'}}>
                    <Left style={styles.icons} >
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('BusStop')} >
                        <Icon   name="ios-arrow-back"/>
                    </TouchableOpacity>
                    </Left>
                </Header>
                <Content>
                <Text > Bus Stops</Text>
                
                </Content>
            </Container>
        )
    }
}
const styles= StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    icons:{
        position:'absolute',
        left:'2%',
        top:8
    }
  })
export default BusNumber;

