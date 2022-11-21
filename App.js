import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/home/home";
import ProductDetail from "./src/home/productDetail";
import EditProduct from "./src/home/editProduct";

const Drawer = createDrawerNavigator()

const DrawerStack = () => {
  return(
    <Drawer.Navigator initialRouteName="home"
    // screenOptions={{headerShown: false}}
    >
      <Drawer.Screen name="home" component={Home}/>
      <Drawer.Screen name="productDetail" component={ProductDetail}/>
      <Drawer.Screen name="editProduct" component={EditProduct}/>

    </Drawer.Navigator>
    )
} 

const App = () => {
return(
  <NavigationContainer>
    <DrawerStack />
  </NavigationContainer>
)
}
export default App;