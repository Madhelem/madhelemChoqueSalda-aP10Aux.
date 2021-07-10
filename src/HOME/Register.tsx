import React, { Component } from "react";
import {View, Text, StyleSheet, Alert} from "react-native"; 
import {TextInput, Button, Avatar} from "react-native-paper";
import {StackNavigationProp} from "@react-navigation/stack";
import axios, { AxiosResponse } from "axios";
import AppContext from "../context/AppContext";

interface ItemUser{
    title: string,
    url: string,
    content: string,
   
  }
interface Mystate {

    //datos  que  se  estan enviando
    title: string,
    url: string,
    content: string,
    isload: boolean,
    pathImg?: string
}
interface MyProps {
    navigation: StackNavigationProp<any, any>
}
class Register extends Component<MyProps, Mystate> {
    /*static contextType = AppContext;*/
    constructor(props: any) {
        super(props);
        this.state = {
          isload: false,
          title: "", url: "", content: ""
        }
    }
    async checkandSendData() {
        var navigation:StackNavigationProp<any, any> = this.props.navigation;
        console.log(this.state);
        if (!this.state.title) {
            return;
        }
        console.log("aqui  "+this.state)
        var result: any = await axios.post<ItemUser, AxiosResponse<any>>("http://192.168.100.9:8000/api/post/Newpost", this.state)
        .then((response) => {
            return response.data;
        });
       console.log(this.state.pathImg);
        //console.log("debug2 "+this.state.username+" "+this.state.email+" "+this.state.tipo+" "+this.state.password);
        if (this.state.isload) {
            var data = new FormData();
            data.append("avatar", {
            name: "avatar.jpg", 
            uri: this.state.pathImg, 
            type: "image/jpg"});
            console.log("http://192.168.100.9:8000/api/NewImage/" )
            fetch("http://192.168.100.9:8000/api/NewImage/" , {
                method: "POST",
                headers: { 
                    "Content-Type": "multipart/form-data"
                },
                body: data
            }).then((result) => {
                result.json();
            }).then((result) => {
                console.log(result);
                navigation.push("list");
            });
            /*var result_img = await axios.post("http://192.168.0.106:8000/api/uploadportrait/" + result.serverResponse._id, data,{
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((response) => {
                return response.data;
            });
            navigation.push("list");
            //console.log(result_img);
            */
        }else{
            this.showAvatar();
            navigation.push("list");
        }
        
        
    }
    onTakePicture(path: string) {
        //console.log(path);
        this.setState({
            pathImg: path,
            isload: true
        })
    }
    showAvatar() {
        if (this.state.isload) {
          
            return <Avatar.Image size={150} source={{uri: this.state.pathImg}} />
        } else {
            return <Avatar.Image size={150} source={require('../../assets/img/avatar.png')} />
            
        }
    }
  render() {
    return (
        <View style= {styles.container}>
            <TextInput style={styles.txtStyles}
            label="Titulo de la publicacion"
            onChangeText={text => {  
                this.setState({
                    title: text
                })
            }}/>
            <TextInput style={styles.txtStyles}
            label="Introdusca la URL "
            onChangeText={text => {   
                this.setState({
                    url: text
                })
            }}/>
            
            <TextInput style={styles.txtStylescont}
            label="Introdusca el Contenido de la publicacion:"
            onChangeText={text => {   
                this.setState({
                    content: text
                })
            }}/>
            
           
            <Button style={styles.txtStyles} icon="camera" mode="contained" onPress={() => {
                //this.checkandSendData();
                this.props.navigation.push("TakePicture", {onTake: (params: string) => {
                    this.onTakePicture(params);
                    console.log(params);
                }});
            }}>
                Tomar Foto
            </Button>
            <View style={styles.avatarView}>
            {this.showAvatar()}
            </View>
            <Button style={styles.txtStyles} icon="gnome" mode="contained" onPress={() => {
                this.checkandSendData();
            }}>
                Create
            </Button>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    txtStyles: {
        marginTop: 10
    },
    avatarView: {
        alignItems: "center"
    },
    txtStylescont: {
      
        marginTop: 10,
       height:200
        
    },
}   
);
export default Register;