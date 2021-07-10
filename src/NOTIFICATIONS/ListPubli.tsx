import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet,ImageBackground} from "react-native"; 
import { StackNavigationProp } from '@react-navigation/stack';
import axios from "axios";
import {Appbar, List, Avatar, FAB, Searchbar} from "react-native-paper";
import AppContext from "../context/AppContext"
import {Types} from "../context/ContantTypes"; 

export interface ItemUser{
  _id: string,
  title: string,
  url: string,
  createdArt: string,
  pathavatar?: string,
  uriavatar?: string
  
}

interface ServerResponse {
  serverResponse:Array<ItemUser>
}
interface MyState {
  dataUsers: Array<ItemUser>,

}
interface ItemData {
  item: ItemUser
}
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';



class  ListPubli extends Component<any, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataUsers: []
    } 
    
  }
  async componentDidMount() {
    console.log(this.context);
    var result: Array<ItemUser> = await axios.get<ServerResponse>("http://192.168.100.9:8000/api/post").then((item) => {
      return item.data.serverResponse
    });
    this.setState({
      dataUsers: result,
      
    });

  }
  listItem(params: ItemData) {
    //const {dispatch} = this.context;
    var item : ItemUser = params.item
    if (item.uriavatar == null) {
      return <List.Item
      title={item.title}
      description={item.url}
     /* onPress={() => {
          dispatch({type: Types.CHANGEITEMUSER, payload: item});
          this.props.navigation.push("DetailUsers");
      }}*/
      left={props => <List.Icon {...props} icon="incognito" />}
      />
    } else {
      var uriImg: string = "http://192.168.100.9:8000" + item.uriavatar;
      return <List.Item
                title={item.title}
                description={item.url}
              /*  onPress={() => {
                  dispatch({type: Types.CHANGEITEMUSER, payload: item});
                  this.props.navigation.push("DetailUsers");
              }}*/
                left={props => <Avatar.Image size={48} source={{uri : uriImg}} />}
      />
    }
}
 
  render() {
    return <ImageBackground style={style.container} source={require("../../images/fon1.jpg")}>
       
          <View style={style.container}>
            <View>
                <FlatList
                    data={this.state.dataUsers}
                    renderItem={({item}) => (
                      <this.listItem item={item}/>
                    )}
                    keyExtractor={(item) => item._id}
                  />
            </View>
          
            

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
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})
  

export default ListPubli;