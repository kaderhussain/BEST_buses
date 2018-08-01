
'use strict';

import React, { Component } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  TouchableOpacity,
  Linking,
} from 'react-native';


export default class CheckTicket extends Component {
    static navigationOptions = {
        tabBarIcon:({tintColor})=>(
          <Icon name="qrcode" size={25} style={{color:tintColor}} />
        )
      }
  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }
  
  render() {
    return (
      <QRCodeScanner
        
        onRead={this.onSuccess.bind(this)}
        topContent={(
          <Text style={styles.centerText}>
           Scan you ticket
          </Text>
        )}
        bottomContent={(
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        )}
        ref={(node) => { this.scanner = node,this.scanner.reactivate() }}
        
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 10,
    color: '#777',
  },

  textBold: {
    fontWeight: '500',
    color: '#000',
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  buttonTouchable: {
    padding: 16,
  },
});