import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,WebView } from 'react-native';
import {Icon, Button, Container, Header, Content,Left } from 'native-base';
import SVGImage from 'react-native-svg-image';
import Spinner from 'react-native-loading-spinner-overlay';



class BusDetail extends Component{

    static navigationOptions ={
        drawerIcon:(
            <SVGImage
      style={{ width: 24, height: 24, paddingTop:6 }}
      source={{uri:'https://image.flaticon.com/icons/svg/148/148843.svg'}}
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
                    Bus Number Detail
                </Text>
                </Header>
                <View style={styles.upper}>
                    <Text style={styles.text}>Check the Bus Number</Text>
                    <SVGImage
                        style={{position:'absolute', width: 40, height: 40, paddingTop:6 ,marginLeft:'40%', backgroundColor:'black' }}
                        source={{uri:'https://image.flaticon.com/icons/png/512/477/477818.png'}}
                        />
                </View>
                <WebView style={{flex:1}}
                    source={{uri: 'https://irfani0.github.io/web-app/#/BusDetail'}}
                    style={{ height:1000}}
                />
            </Container>
        );
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
export default BusDetail;