import React, { Component } from 'react';
import { View, Text,StyleSheet,Image, TouchableOpacity,WebView  } from 'react-native';
import {Icon, Button, Container, Header, Content,Left } from 'native-base';
import SVGImage from 'react-native-svg-image';
import MapView, { Marker } from 'react-native-maps';


//Custom Component Bus
import BusNumber from './BusStopComponent/BusNumber';
import BusDetail from './BusStopComponent/BusDetail';


class BusStop extends Component{

    static navigationOptions ={
        drawerIcon:(
            <SVGImage
      style={{ width: 24, height: 24, paddingTop:6 }}
      source={{uri:'https://image.flaticon.com/icons/svg/224/224592.svg'}}
    />
        )
        
    }
 

    render(){
        return(
            <Container>
                <Header style={{backgroundColor: 'white'}}>
                    <Left  style={styles.icons}>
                        <Icon name={"ios-menu"} 
                       
                        onPress={
                            ()=>this.props.navigation.navigate('DrawerOpen')
                        }/>
                    </Left>
                    <Text style={{top:15,fontSize:15,fontWeight:'100'}}>
                    Bus Stop Details
                </Text>
                </Header>
                <View style={styles.upper}>
                    <Text style={styles.text}>Check the Bus Stops</Text>
                    <SVGImage
                        style={{position:'absolute', width: 40, height: 40, paddingTop:6 ,marginLeft:'40%', backgroundColor:'black' }}
                        source={{uri:'https://image.flaticon.com/icons/svg/191/191187.svg'}}
                        />
                </View>

                <WebView style={{flex:1}}
                    source={{uri: 'https://irfani0.github.io/web-app/#/BusStop'}}
                    style={{ height:1000}}
                />
            </Container>
        );
    }
    
}



const styles= StyleSheet.create({
button:{
    backgroundColor:'white',
    padding:20,
    color:"white"
}, 
icons:{
    position:'absolute',
    left:'1%',
    marginLeft: 5,
    top:8
},
upper:{
    height:70,
    backgroundColor:'black',
},
text:{  
    marginLeft:'25%',
    color:'white',
    fontSize:18,
    fontWeight:'bold'
}
  })
export default BusStop;