// UserList.tsx
import React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet
} from "react-native";
import userdata from "./data.json"; // sesuaikan path data.json

const UserList = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {userdata.map((user) => (
        <TouchableOpacity
          key={user.id}
          style={styles.userContainer}
          onPress={() =>
            navigation.navigate("Profile", { user: user })
          }
        >
          <Image
            source={{ uri: user.photo_url }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#f7f7f7",
    borderRadius: 8
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  email: {
    fontSize: 14,
    color: "#666"
  }
});
