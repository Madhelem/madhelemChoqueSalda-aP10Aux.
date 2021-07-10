import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet, ImageBackground} from "react-native"; 
import { StackNavigationProp } from '@react-navigation/stack';
import axios from "axios";
import {Appbar, List, Avatar, FAB, Searchbar} from "react-native-paper";
import { Item } from "react-native-paper/lib/typescript/components/List/List";

export interface ItemUser{
  _id: string,
  fullname: string,
  username: string,
  email: string,
  nick: string,
  
}

interface ServerResponse {
  users:Array<ItemUser>
}
interface MyState {
  dataUsers: Array<ItemUser>,

}
interface ItemData {
  item: ItemUser
}
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';



class ListUsers extends Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataUsers: []
    } 
    
  }
  async componentDidMount() {
    console.log(this.context);
    var result: Array<ItemUser> = await axios.get<ServerResponse>("http://192.168.100.9:8000/api/user").then((item) => {
      return item.data.users
    });
    this.setState({
      dataUsers: result,
      
    });

  }
 
  render() {
    return <ImageBackground style={style.container} source={require("../../images/fon1.jpg")}>
       
          <View style={{}}>
            <FlatList
            
              data={this.state.dataUsers}
              renderItem={({item}) => (
                <List.Item
                  title={"Nombre: "+item.fullname}
               description={"Usuario: "+item.username+ "     gmail: "+item.email+"     Apodo: "+item.nick}
                left={props => <List.Icon {...props} icon="odnoklassniki"  />}
                
                 />
              )}
              keyExtractor={(item) => item._id}
            />
          </View>
        
       
    
    </ImageBackground>
  }
}
const style = StyleSheet.create({
  container:{
    flex:1,
    
   
    
  },
  text:{
    color : "#ffffff"
  },
  texto:{
      textDecorationColor: "#ffffff"
  }
})
  

export default ListUsers;