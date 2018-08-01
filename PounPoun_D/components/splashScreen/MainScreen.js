import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {Icon } from 'native-base'
import {TabNavigator} from 'react-navigation';

import HomeTab from '../../AppTabNavigation/HomeTab'
import CheckTicket from '../../AppTabNavigation/CheckTicket';
import ProfileTab from '../../AppTabNavigation/ProfileTab';
import Mymap from '../../MapComponents/Map';
class MainScreen extends React.Component {
  
   static navigationOptions = {
      header: null
}
    render() {
    return (
      <AppTabNavigator />
    );
  }
}


export default MainScreen;

const AppTabNavigator = TabNavigator({
    HomeTab:{
        screen:HomeTab  //Bus Location
    },
    Map:{
        screen:Mymap
    },
    CheckTicket:{
        screen:CheckTicket
    },
    ProfileTab:{
        screen:ProfileTab
    },


},{
    animationEnabled:true,
    swipeEnabled:true,
    tabBarPosition:"bottom",
    tabBarOptions:{
        style:{
            ...Platform.select({
                android:{
                    backgroundColor:'white',
                    
                }
            
            })
            
        },
        indicatorStyle: {
            backgroundColor: 'black',
        },
        activeTintColor: '#000',
        inactiveTintColor:"#eee",
        showLabel:false,
        showIcon:true
        
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
