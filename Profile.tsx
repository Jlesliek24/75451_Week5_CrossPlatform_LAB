import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import userData from "./data.json"; 

const Profile = ({ route, navigation }: any) => {
  // Destruktur data user yang dikirim dari UserList
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.photo_url }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}'s Profile</Text>
      <Text style={styles.email}>{user.email}</Text>

      <Button
        title="GO BACK"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  email: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20
  }
});
