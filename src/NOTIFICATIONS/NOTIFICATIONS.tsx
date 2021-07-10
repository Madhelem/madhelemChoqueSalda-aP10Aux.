import React, { Component } from "react";
import {createStackNavigator} from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import {View, Text,StyleSheet, Platform} from "react-native"; 
import {Appbar} from "react-native-paper"

import ListPubli from "./ListPubli";

import AppContext from "../context/AppContext";


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

var Stack = createStackNavigator();
class NOTI extends Component<any, any> {
  test: any
  static contextType = AppContext
  constructor(props: any) {
    super(props);
    this.state = {
      dataUsers: []
    }
    
  }
  render() {
    const {searchbarVisible, changeSearchBarVisible} = this.context;
    return (
        <NavigationContainer independent={true}>
          <Stack.Navigator>
          <Stack.Screen name="listPubli" component={ListPubli} options={() => (
              {header: (navigate) => <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                  navigate.navigation.pop();
                  //this.props.navigation.pop();
                }} />
                <Appbar.Content title="Nueva Publicacion" />
             </Appbar.Header>}
            )}/>
             
           
          </Stack.Navigator>
        </NavigationContainer>
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
export default NOTI;


