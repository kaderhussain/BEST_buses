import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ProfileTab extends React.Component {
  
  static navigationOptions = {
    tabBarIcon:({tintColor})=>(
      <Icon name="person" style={{color:tintColor}} size={25} />
    )
  }

    render() {
    return (
      <View style={styles.container}>
        <Image 
        style={styles.log}
        source={require('../assets/Logo.png')} 
        />

        <Text style={{ marginTop: 20}}>
          About App -
          Version: 1.0.0 (beta)
        </Text>
        <View style={styles.dev}>
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
    );
  }
}

export default ProfileTab;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"white",
      alignItems: 'center',
      justifyContent: 'center',
    },
    log:{
      position:'absolute',
      top:20,
      width:'100%',
      height:200
    }, 
    dev:{
      backgroundColor:"#616161",
      color:'white',
      width:'100%',
      fontSize:35,
      fontWeight:"100",
      marginTop: 20,

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
  });