import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './components/splashScreen/MainScreen';
import firebase from 'firebase';
export default class App extends React.Component {
  render() {
    var config = {
      apiKey: "AIzaSyBQkRjeokanIk0oep8s2Zmxs9UCOq_5260",
      authDomain: "pounpoun-3a48f.firebaseapp.com",
      databaseURL: "https://pounpoun-3a48f.firebaseio.com",
      projectId: "pounpoun-3a48f",
      storageBucket: "pounpoun-3a48f.appspot.com",
      messagingSenderId: "958641788233"
    };
    firebase.initializeApp(config);
    return (
      
      <AppStackNavigator />
      
    );
  }
}

const AppStackNavigator = StackNavigator({
  Main:{
    screen: MainScreen
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
