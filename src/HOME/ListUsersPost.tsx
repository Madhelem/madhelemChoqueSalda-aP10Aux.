import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet,ImageBackground,Image} from "react-native"; 
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



class ListUsersPost extends Component<any, MyState> {
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
      left={props => <List.Icon {...props}  icon={({ size, color }) => (
        <Image
          source={require('../../images/fondo.png')}
          style={{ width: 40, height: 40}}
        />
      )} />}
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
            <FAB
            style={style.fab}
            small={false}
            icon="plus"
            onPress={() => {
                this.props.navigation.push("RegisterUsers");
            }}
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
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})
  

export default ListUsersPost;

/*import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native"; 
import {} from "react-native"
class Order extends Component {
  render() {
    return (
        <View style={style.container}>
            <Text style={style.text}> 
                Reportes
            </Text>
        </View>
    )
  }
}
const style = StyleSheet.create({
  container:{
    flex:1,
  },
  text:{
    color : "#ffffff"
  }
})
  

export default Order;*/



/*


import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet} from "react-native"; 
import { StackNavigationProp } from '@react-navigation/stack';
import axios from "axios";
import {Appbar, List, Avatar, FAB, Searchbar} from "react-native-paper";
import AppContext from "../../context/AppContext"
import {Types} from "../../context/ContantTypes"; 

export interface ItemUser{
  title: string,
  url: string,
  createdArt: string,
 
}

interface ServerResponse {
  serverResponse:Array<ItemUser>
}
interface MyState {
  dataUsers: Array<ItemUser>,
  completeList: Array<ItemUser>,
  searchKey: string
}
interface ItemData {
  item: ItemUser
}
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
class ListUsers extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataUsers: [],
    }
    
  }
  async componentDidMount() {
    console.log(this.context);
    var result: Array<ItemUser> = await axios.get<ServerResponse>("http://192.168.100.9:8000/api/post").then((item) => {
      return item.data.serverResponse
    });
    this.setState({
      dataUsers: result,
      completeList: result,
    });
  }
  listItem(params: ItemData) {
    //const {dispatch} = this.context;
    var item : ItemUser = params.item
    if (item.uriavatar == null) {
      return <List.Item
      title={item.title}
      description={item.url}
      
      left={props => <List.Icon {...props} icon="incognito" />}
      />
    } else {
      var uriImg: string = "http://192.168.100.9:8000" + item.uriavatar;
      return <List.Item
                title={item.title}
                description={item.url}
               
                left={props => <Avatar.Image size={48} source={{uri : uriImg}} />}
      />
    }
}

 
  render() {
    return (
        <View style={style.container}>
          <View>
            <FlatList
              data={this.state.dataUsers}
              renderItem={({item}) => (
                this.listItem(item)
              )}
              keyExtractor={(item) => item._id}
            />
          </View>
        </View>
    )
  }
}
const style = StyleSheet.create({
  container:{
    flex:1,
  },
  text:{
    color : "#ffffff"
  }
})
  

export default ListUsers;*/


/*import React, { Component } from "react";
import {View, Text, Platform, FlatList, StyleSheet} from "react-native"; 
import { StackNavigationProp } from '@react-navigation/stack';
import axios from "axios";
import {Appbar, List, Avatar, FAB, Searchbar} from "react-native-paper";
import AppContext from "../../context/AppContext"
import {Types} from "../../context/ContantTypes"; 
export interface IRoles {
  _id: string,
  name: string,
  urn:  string,
  method: string
}
export interface ItemUser{
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
  completeList: Array<ItemUser>,
  searchKey: string
}
interface ItemData {
  item: ItemUser
}
interface MyProps {
    navigation: StackNavigationProp<any, any>
}
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
class ListUsers extends Component<MyProps, MyState> {
  static contextType = AppContext;
  constructor(props: any) {
    super(props);
    this.state = {
      dataUsers: [],
      searchKey : "",
      completeList: []
    }
  }
  async componentDidMount() {
    console.log(this.context);
    var result: Array<ItemUser> = await axios.get<ServerResponse>("http://192.168.100.9:8000/api/user").then((item) => {
      return item.data.serverResponse
    });
    this.setState({
      dataUsers: result,
      completeList: result,
    });
  }
  listItem(item: ItemUser) {
      const {dispatch} = this.context;
      //var item : ItemUser = params.item
      if (item.uriavatar == null) {
        return <List.Item
        title={item.username}
        description={item.email}
        onPress={() => {
            dispatch({type: Types.CHANGEITEMUSER, payload: item});
            this.props.navigation.push("DetailUsers");
        }}
        left={props => <List.Icon {...props} icon="incognito" />}
        />
      } else {
        var uriImg: string = "http://192.168.100.9:8000" + item.uriavatar;
        return <List.Item
                  title={item.username}
                  description={item.email}
                  onPress={() => {
                    dispatch({type: Types.CHANGEITEMUSER, payload: item});
                    this.props.navigation.push("DetailUsers");
                }}
                  left={props => <Avatar.Image size={48} source={{uri : uriImg}} />}
        />
      }
  }
  searchList(key: string) {
    this.setState({
      searchKey: key
    });
    var result: Array<ItemUser> = this.state.completeList.filter((item) => {
      var regx = new RegExp(key, "i");
      if (item.username.match(regx) != null) {
        return true;
      }
      return false;
    });
    if (result.length == 0) {
      // Buscar dentro del servidor
      //Consumir una API. y poder revisar ese resltado en la base de datos

    } else {
      this.setState({
        dataUsers: result
      }); 
    }
    
  }
  render() {
    var {searchbarVisible} = this.context;
    return (
        <View style={styles.container}>
          <View>
          {
            searchbarVisible && 
            <Searchbar
            placeholder="Buscar"
            value={this.state.searchKey}
            onChangeText={(msn) => {
              this.searchList(msn);
            }}
            />
          }
          </View>
          <View>
            <FlatList
              data={this.state.dataUsers}
              renderItem={({item}) => (
                this.listItem(item)
              )}
              keyExtractor={(item) => item._id}
            />
          </View>
          <FAB
            style={styles.fab}
            small={false}
            icon="plus"
            onPress={() => {
                this.props.navigation.push("RegisterUsers");
            }}
          />
        </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})
export default ListUsers;*/