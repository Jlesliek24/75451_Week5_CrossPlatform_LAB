import React from "react";
import {ScrollView,View,TouchableOpacity,Image,Text} from "react-native";
import userdata from "./data.json";


const UserList = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      {userdata.map((user) => (
        <TouchableOpacity
          key={user.id}
          onPress={() =>
            navigation.navigate("Profile", { username: user.name })
          }
        >
          <View style={{ flexDirection: "row", margin: 10, alignItems: "center" }}>
            <Image
              source={{ uri: user.photo_url }}
              style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
            />
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{user.name}</Text>
              <Text>{user.email}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default UserList;
