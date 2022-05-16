import {NavigationContainer}  from "@react-navigation/native";                              //expo doctor --fix-dependencies
import {createStackNavigator} from "@react-navigation/stack";
import BooksScreen from "./src/pages/Books"; //farklı bir isim verilmiş Books yerine 
import * as React from "react";
import CartsScreen from "./src/pages/Carts";
import CartIcon from "./src/component/CartIcon"; 
import "react-native-gesture-handler";
import { BooksellerProvider,useContext } from "./src/context";

const Stack = createStackNavigator();

export default function App() {
// native deki navigasyon yapısını tanımladık
  return (
      <BooksellerProvider>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen>
                    name = "Book" 
                    component = {BooksScreen}
                    options ={
                      {
                        title:"Book",
                        headerRight:(props) => <CartIcon {...props}/> // CartIcon daki props ı udeğiştirme
                      }

                    }
                  </Stack.Screen>
                  <Stack.Screen>
                   name="Cart"
                   component = {CartsScreen}
                   options = {{
                     title:"Cart"
                   }}
                  </Stack.Screen>
              </Stack.Navigator>
          </NavigationContainer>
      </BooksellerProvider>
  )
}