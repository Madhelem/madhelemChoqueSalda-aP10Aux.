import React, { Component } from "react";
import {View, Text, StyleSheet, Dimensions, Image, ImageBackground,ColorPropType, TouchableHighlight} from "react-native"; 

import {TextInput, Button, Avatar, RadioButton} from "react-native-paper";
const {width: widthScreen, height: heightScreen} = Dimensions.get('window');
const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');
//const backgroundImage = require('./images/2.jpg');
const background = require('../../../images/nuevo.jpg');
const logo = require('../../../images/logo.png');
import {NavigationScreenProp} from "react-navigation";
//<Image style={styles.backgroundImage} source={background}/>
  
  interface IParams {
    onTake: Function
}
interface IRoute{
    params: IParams
}
interface MyProps {
    navigation: NavigationScreenProp<any,any>
    route: IRoute
}
    
class Regist extends Component <MyProps, any> {
  constructor(props:MyProps){
    super(props);
    
  }
    
  click() {
        
    this.props.navigation.navigate("Prelogin");
  
  }
    
  render() {
    return (
       
        <View style={styles.container}>
            <Image style={styles.backgroundImage} source={background}/>
            <View style={styles.footer}>
                
                

                <TouchableHighlight  onPress={()=>{
                    this.click();
              }}>
                 
                <View style={styles.containerText2}>
                    <Text style={styles.text2}>
                        Sign Up
                    </Text>
                  </View>
              </TouchableHighlight>


                <Text style={styles.textend}>
                    Potosí 
                </Text>
            </View>  
            
           

            
        </View>

        
        
     
        
  
)}
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flex: 1,
        justifyContent: "center",  
    },
    backgroundImage: {
        width: 420,
        height:750,
       
        opacity: 1 
      },

    
      footer: {
        height: 180,
        width: 250,
        alignItems:"center",
        position: "absolute",
        
        
      },
      text: {
        fontSize: 25,
        color: "#000000",
        textAlign: "center",
        fontFamily: 'lucida grande',
        fontWeight: "bold"
       
      },

      containerText2:{
       
        height: 65,
        width: 200,
        backgroundColor: "#2471A3",
        opacity: 0.6, 
        alignItems:"center",
        justifyContent: "center",
        borderRadius:20,
       
        
        
      },
      text2: {
        fontSize: 40,
        color: "#ffffff",
        fontWeight: "bold"
        
      },

      textend:{
          color: "#ffffff",
          fontSize: 20,
          marginTop:50,
          fontWeight: "bold"
      }
  
    }   
);
export default Regist;