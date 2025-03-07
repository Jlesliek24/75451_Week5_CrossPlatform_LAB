import React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet
} from "react-native";
import userData from "./data.json"; 

// Fungsi untuk mencocokkan path lokal ke require()
function getLocalImage(path: string) {
  switch (path) {
    case "./assets/John.jpg":
      return require("/assets/John.jpg"); // Sesuaikan path
    case "./assets/Doe.jpg":
      return require("/assets/Doe.jpg");  // Sesuaikan path
    default:
      // Jika tidak ditemukan, tampilkan placeholder
      return require("/assets/John.jpg");
    // Ganti placeholder sesuai kebutuhan Anda
  }
}

const UserList = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      {userData.map((user) => (
        <TouchableOpacity
          key={user.id}
          style={styles.userContainer}
          onPress={() => navigation.navigate("Profile", { user })}
        >
          <Image
            source={getLocalImage(user.photo_url)}
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
    backgroundColor: "#fff",
    marginTop: 50, // opsional
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#f7f7f7",
    borderRadius: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
});
