// import React, { Component } from 'react';
// import { View, Text,StyleSheet,Image,StatusBar,ImageBackground, RefreshControl,ListView,TextInput} from 'react-native';
// import {Icon, Button, Container, Header, Content,Left } from 'native-base';
// import MapView, { Marker, Callout } from 'react-native-maps';
// import SVGImage from 'react-native-svg-image';
// import firebase from 'firebase';
// import TimerMixin from 'react-timer-mixin'


import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,StatusBar,ImageBackground, RefreshControl,ListView,TextInput,TouchableOpacity} from 'react-native';
import {Icon, Button, Container, Header, Content,Left } from 'native-base';
import MapView, { Marker, Callout } from 'react-native-maps';
import SVGImage from 'react-native-svg-image';
import firebase from 'firebase';

class HomeScreen extends Component{

    static navigationOptions ={
        drawerIcon:(
            <Image source={require('../assets/Home.png')}
            style={{height:24, width:24,paddingTop:6}}
            />
        )
        
    }
//     constructor(){
//         super()

//         this.state ={
//             lat: null,
//             long: null,
//             places: null,
//             busnumber:null,
//         }
//     }
    
//     componentDidMount(){
//          setInterval( () =>{
//             navigator.geolocation.getCurrentPosition(
//                 (position) =>{
//                     const lat = position.coords.latitude;
//                     const long = position.coords.longitude;
//                     console.log(lat,long);
//                     this.setState({lat, long})
//                     this.getPlaces();     
//                 }
//             )
//          }, 5000) 
              
       
//     }

    
//     sendLocation=()=>{
        
//         const {long, lat,busnumber} =this.state;
//         setInterval(() =>{
//             firebase.database().ref(`/buslocation/${busnumber}/busconductor`).set({ location:{
//                 long:long, lat:lat  },
//             });
//         }, 5000)

//      }
    
//     getPlaces(){
//         const url = this.getUrlWithParameters(this.state.lat, this.state.long, 6000, 'bus_station', 'AIzaSyBczXQXLIRS9EF_e_6Oo6P0t66an0V_T58');
//         fetch(url)
//             .then((data) => data.json())
//             .then((res) => {
//                 console.log(res);
//                 const arrayMarkers = [];
//                 res.results.map((element ,i) =>{
//                     arrayMarkers.push(
//                     <Marker 
//                         key={i}
//                         coordinate={{
//                             latitude: element.geometry.location.lat,
//                             longitude: element.geometry.location.lng,

//                         }}>
                        
//                         <View>
//                         <ImageBackground
//                         style={{ width:30, height: 30}}
//                         source={{uri:'https://image.flaticon.com/icons/png/512/358/358532.png'}}
//                         >
//                         <Callout style={{flex:1, width:100, alignContent:'center',justifyContent:'center'}}>
//                              <Text >{element.name}</Text>
//                         </Callout>
//                         </ImageBackground>
//                         </View>
//                     </Marker>
//                     )
//                 })
//                 this.setState({places: arrayMarkers});
//             })
//     }
    
//     getUrlWithParameters( lat, long, radius, type, API){
//         const url ="https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
//         const location =  `location=${lat},${long}&radius=${radius}`;
//         const typeData = `&types=${type}`;
//         const key = `&key=${API}`;
//         return (`${url}${location}${typeData}${key}`);

//     }
//     render(){
    
//         return(
//             <Container>
            
//                 <Header style={{backgroundColor: 'white'}}>
//                     <Left style={styles.icons}>
//                         <Icon   name={"ios-menu"} 
//                         onPress={
//                             ()=>this.props.navigation.navigate('DrawerOpen')
                            
//                         }/>
//                     </Left>
//                 </Header>
                
//                 <View style={{flex:1}}>
//                 {this.state.lat ? 
                    
//                 <MapView
//                 style={{flex:1}}
//                 provider = {MapView.PROVIDER_GOOGLE}
//                 initialRegion={{
//                     latitude:this.state.lat,
//                     longitude: this.state.long,
//                     latitudeDelta:0.0922,
//                     longitudeDelta: 0.0421
//                 }}
//                 >
//                 <Marker 
//                     coordinate={{
//                     latitude:this.state.lat,
//                     longitude: this.state.long,
//                     }}
//                 >
//                 <View>
//                 <Image
//                 style={{ width:30, height: 30}}
//                 source={require('../assets/bus_4.png')}
//                 />
//                 </View>
//                 </Marker>
//                 {this.state.places}
//                 </MapView> : null}
                
//                 <TextInput
                     
//                     style={styles.input}
//                     onChangeText={(busnumber) => this.setState({busnumber})}
//                     value={this.state.busnumber}
//                     underlineColorAndroid='rgba(0,0,0,0)'
//                     placeholder="Enter the Bus Number"
//                 />
            
//                 <Button style={styles.btn} 
//                 onPress={this.sendLocation.bind(this)}
//                 >
//                 <Text style={{color:'white'}}>Send My Location</Text>
//                 </Button>
//                 </View>
                
//             </Container>
//         );
//     } 
// }
// const styles= StyleSheet.create({
//     container:{
//       flex:1,
//       justifyContent:'center',
//       alignItems:'center'
//     },
//     icons:{
//         position:'absolute',
//         left:'1%',
//         marginLeft: 5,
//         top:8
//     },
//     statusbar:{
//         backgroundColor:'black',
//     },
//     btn:{
//         position:'absolute',
//         padding:10,
//         height:50,
//         bottom:0,
//         left:120,
//         borderRadius:10,
//         backgroundColor:'black',
//         alignItems:'center',
//         justifyContent:'center'
//     },
//     input:{
//         position:'absolute',
//         marginLeft:20,
//         marginRight:20,
//         padding:10,
//         opacity:0.9,
//         color:'#ddd',
//         backgroundColor:'white',
//         width:'90%',
//         bottom:55,
//         color:'black',
//         borderRadius:10,
//         alignItems:'center',
//         justifyContent:'center'
//     },
    
    
//   })
constructor(){
    super()

    this.state ={
        lat: 19.040285,
        long: 72.9465957,
        places: null,
        busnumber:21,
    }
}

componentWillMount(){
  
  const {lat,  long, busnumber} = this.state;
  
  this.getLocation();
  this.getPlaces();

}
reload = () =>{
  const {lat,  long, busnumber} = this.state;
  this.getLocation();
  this.getPlaces();
}        
  
getLocation = () =>{
  const {lat,  long, busnumber} = this.state;
  const ref= firebase.database().ref(`buslocation/${busnumber}/busconductor`).on('value', snapshot =>{
      var data = snapshot.val();
      var keys = Object.keys(data);
      console.log(data.location.lat);
      this.setState({
          lat : data.location.lat,
          long: data.location.long
      })
      this.getPlaces();
      console.log(lat, long)
})
}
   
    
// componentWillMount(){
//   navigator.geolocation.getCurrentPosition(
//       (position) =>{
//           const lat = position.coords.latitude;
//           const long = position.coords.longitude;
//           this.setState({lat, long})
//           this.getPlaces();
//       }
//   )
 
// }

  
 



// sendLocation=()=>{
//     const {long, lat,busnumber} =this.state;
//     console.log(long , lat);
//      firebase.database().ref(`/buslocation/${busnumber}/busconductor`).push({ location:{
//              long:long, lat:lat }
//          });
//          this.state.busnumber = null
//  }

getPlaces(){
    const url = this.getUrlWithParameters(this.state.lat, this.state.long, 9000, 'bus_station', 'AIzaSyBczXQXLIRS9EF_e_6Oo6P0t66an0V_T58');
    fetch(url)
        .then((data) => data.json())
        
        .then((res) => {
            console.log(res);
            
            const arrayMarkers = [];
            res.results.map((element ,i) =>{
                arrayMarkers.push(
                <Marker 
                    key={i}
                    coordinate={{
                        latitude: element.geometry.location.lat,
                        longitude: element.geometry.location.lng,

                    }}>
                    
                    <View>
                    <ImageBackground
                    style={{ width:30, height: 30}}
                    source={{uri:'https://image.flaticon.com/icons/png/512/358/358532.png'}}
                    >
                    <Callout style={{flex:1, width:100, alignContent:'center',justifyContent:'center'}}>
                         <Text >{element.name}</Text>
                    </Callout>
                    </ImageBackground>
                    </View>
                </Marker>
                )
            })
            this.setState({places: arrayMarkers});
        })
}

getUrlWithParameters( lat, long, radius, type, API){
    const url ="https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    const location =  `location=${lat},${long}&radius=${radius}`;
    const typeData = `&types=${type}`;
    const key = `&key=${API}`;
    return (`${url}${location}${typeData}${key}`);

}
render(){
    
    return(
        <Container >
        
             <Header style={{backgroundColor: 'white'}}>
                <Left style={styles.icons}>
                    <Icon   name={"ios-menu"} 
                    onPress={
                        ()=>this.props.navigation.navigate('DrawerOpen')
                        
                    }/>
                </Left>
                <Text style={{top:15,fontSize:15,fontWeight:'100'}}>
                    Home
                </Text>
            </Header> 
            
            <View style={{flex:1}}>
            {this.state.lat ? 
                
            <MapView
            provider = {MapView.PROVIDER_GOOGLE}
            style={{flex:1}}
            initialRegion={{
                latitude:this.state.lat,
                longitude: this.state.long,
                latitudeDelta:0.0922,
                longitudeDelta: 0.0421
            }}
            >
            <Marker 
                coordinate={{
                latitude:this.state.lat,
                longitude: this.state.long,
                }}
            >
            <View>
            <ImageBackground
            style={{ width:30, height: 30}}
            source={require('../assets/bus_4.png')}
            >
            <Callout style={{flex:1, width:100, alignContent:'center',justifyContent:'center'}}>
                         <Text >{this.state.busnumber}</Text>
            </Callout>
            </ImageBackground>
            </View>
            </Marker>
            {this.state.places}
            </MapView> : null}
            
             <TextInput
                underlineColorAndroid='rgba(0,0,0,0)'
                style={styles.input}
                onChangeText={(busnumber) => this.setState({busnumber})}
                value={this.state.busnumber}
                placeholder="Enter the Bus Number"
            />
            
            
            <TouchableOpacity
            style={styles.btn}
            onPress = {this.getLocation}
            >
            <Text style={{color:'white'}}>Get Bus Location</Text>
            </TouchableOpacity>
            </View>
            
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
statusbar:{
    backgroundColor:'black',
},
btn:{
    position:'absolute',
    padding:10,
    height:50,
    bottom:0,
    left:120,
    borderRadius:10,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center'
},
input:{
    position:'absolute',
    marginLeft:20,
    marginRight:20,
    padding:10,
    opacity:0.9,
    color:'black',
    backgroundColor:'white',
    width:'90%',
    bottom:55,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
}
})

export default HomeScreen;