import React from "react";
import { View, Text, Button } from "react-native";

const Profile = ({ navigation, route }) => {
  const { username } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Profile Screen</Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>Hello, {username}</Text>
      <Button
        title="Go Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default Profile;
