import React from "react";
import { View, Text, Button } from "react-native";
// Jika Anda punya file style terpisah, import di sini:
// import styles from "../App.styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Navigation List</Text>
      <Button
        title="Email"
        onPress={() => navigation.navigate("Email")}
      />
      <Button
        title="UserList"
        onPress={() => navigation.navigate("UserList")}
      />
    </View>
  );
};

export default HomeScreen;
