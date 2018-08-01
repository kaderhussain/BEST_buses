import React, { Component } from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import {Icon, Button, Container, Header, Content,Left } from 'native-base';
import SVGImage from 'react-native-svg-image';

class SettingsScreen extends Component{
    static navigationOptions ={
        drawerIcon:(
            <SVGImage
      style={{ width: 24, height: 24,paddingTop:6 }}
      source={{uri:'https://image.flaticon.com/icons/svg/236/236810.svg'}}
    />
        )
        
    }
    render(){
        
        return(
            <Container>
                <Header style={{backgroundColor: 'white'}}>
                    <Left style={styles.icons}>
                        <Icon name={"ios-menu"} onPress={
                            ()=>this.props.navigation.navigate('DrawerOpen')
                        }/>
                    </Left>
                    <Text style={{top:15,fontSize:15,fontWeight:'100'}}>About App</Text>
                </Header>
                <Content contentContainerStyle={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
    <View style={styles.container}>
        <Image 
        style={styles.log}
        source={require('../assets/Logo.png')} 
        />

        <Text style={{ marginTop: 60}}>
          About App -
          Version: 1.0.0 (beta)
        </Text>
        <View style={styles.dev}>
        <Text style={styles.text}> About Team- </Text>
        <Text 
        style={styles.text}>
        Developed with 💓 by 
        </Text>
        <Text
        style={styles.text}>
        Shaikh kader hussain
        </Text>
        <Text
        style={styles.text}>
        Shaikh Shahid Raza
        </Text>
        <Text
        style={styles.text}>
        Shaikh Irfan
        </Text>
        
        </View>
      </View>
                
            </Content>
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
    log:{
        position:'absolute',
        top:20,
        width:'100%',
        height:200
      }, 
      dev:{
        backgroundColor:"#616161",
        width:200,
        fontWeight:"100",
        marginTop: 30,
  
      }, 
      text:{
        color:'white',
        fontWeight:'bold',
      },
      people:{
        position:'absolute',
        bottom:10,
        width:'80%',
        height:180
      }
  })
export default SettingsScreen;