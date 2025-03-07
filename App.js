import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screen lain
import HomeScreen from "./HomeScreen"; // opsional, jika ada
import UserList from "./UserList";
import Profile from "./Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        {/* Jika Anda memiliki HomeScreen, bisa diletakkan di sini */}
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
