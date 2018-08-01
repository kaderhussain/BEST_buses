import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
}from 'react-native';
import {DrawerNavigator, DrawerItems} from 'react-navigation';
import firebase from 'firebase';
//Import Component
import HomeScreen from './components/HomeScreen'
import BusDetail from './components/BusDetail'
import SettingScreen from './components/SettingsScreen'
import BusStop from './components/BusStop'
import Ticket from './components/Ticket';

import { Container, Content, Header, Body, Icon} from 'native-base'

class App extends Component{
  
  render(){
    var config = {
      apiKey: "AIzaSyBQkRjeokanIk0oep8s2Zmxs9UCOq_5260",
      authDomain: "pounpoun-3a48f.firebaseapp.com",
      databaseURL: "https://pounpoun-3a48f.firebaseio.com",
      projectId: "pounpoun-3a48f",
      storageBucket: "pounpoun-3a48f.appspot.com",
      messagingSenderId: "958641788233"
    };
    firebase.initializeApp(config);

    return(
    
      <MyApp />
      
    );
    } 
  }
  const CustomDrawerComponent = (props) =>(

    <Container>
      <Header style={{
        height:200,
        backgroundColor:'white'
      }}>
      <Body>
      <Image 
      style={
        styles.DrawerLogo
      }
      source={require('./assets/Logo.png')} 
      />
      </Body>
      </Header>
      <Content>
      <DrawerItems {...props} />
      </Content>
    </Container>
  )
const MyApp = DrawerNavigator({

  Home:{
    screen: HomeScreen
  },
  Stops:{
    screen:BusStop
  },
  Details:{
    screen:BusDetail
  },
  Ticket:{
    screen: Ticket
  },
  About:{
    screen:SettingScreen
  },
},{
  initalRouterName:'Home',
  contentComponent:CustomDrawerComponent,
  drawerOpenRoute:'DrawerOpen',
  drawerCloseRoute:'DrawerClose',
  drawerToggleRoute:'DrawerToggle',
  drawerBackgroundColor:'white',
  contentOptions:{
      activeBackgroundColor: 'white',
      inactiveTintColor:"black",
      activeTintColor:'green',
      inactiveBackgroundColor:'white',
      showIcon:true
  }
})

  styles= StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    DrawerLogo:{
      height:120,
      width:240
    }
  })

export default App;