import React, {Component} from "react";
import { AsyncStorage, ScrollView, StyleSheet, Text, View, Alert, Image } from "react-native";
//import Button from "./styling/Button";
// import Product from '../screens/Product';
// import { Card, Button } from 'react-native-elements';
import {ProductsList} from '../akaReactNativeApp/screens/ProductList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductDetails } from '../akaReactNativeApp/screens/ProductDetail';
import { Cart } from '../akaReactNativeApp/screens/Cart.js';
import { LoginScreen } from '../akaReactNativeApp/screens/LoginScreen.js'
import { RegisterScreen } from '../akaReactNativeApp/screens/RegisterScreen.js'
import { CartIcon } from '../akaReactNativeApp/components/CartIcon.js';
import { CartProvider } from '../akaReactNativeApp/screens/CartContext';
const Stack = createNativeStackNavigator();


export default class App extends Component {
  render() {
    return (
<CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
          <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown: false}}/>
          <Stack.Screen name='Products' component={ProductsList}
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails}
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart}
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>




      /*  <View style={styles.container}>
          <ScrollView>
            <Text style={styles.welcome}>Welcome to Netcore!</Text>
            <Button onPress={this.callLogOut}>Log Out</Button>
            <Text style={styles.welcome} />
          </ScrollView>
        </View>*/
    );
  }


  trackEvent = (eventName, payloadata) => {
    console.log("Name->", eventName);
    console.log("data->", payloadata);

  };


  callLogOut = () => {
    const { navigate } = this.props.navigation;
    //    NetcoreSDK.logoutAndClearUserIdentity(true);
    //    NetcoreSDK.logout();
    AsyncStorage.setItem("UserIdentity", "");
    navigate("LoginScreen", { name: "Login Screen" });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 40,
    fontWeight: "bold"
  },
  instructions: {
    fontSize: 12,
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  headerText: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  col: {
    flex: 1,
  },
  headerTitle: {
      fontSize: 20
    }

});
