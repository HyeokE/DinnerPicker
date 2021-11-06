import React from "react";
import Category from "./src/pages/Category";
import { createStackNavigator } from "@react-navigation/stack";
import Setting from "./src/pages/Setting";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
