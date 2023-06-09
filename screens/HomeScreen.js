import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.home}>
      <View style={styles.imageView}>
        <Image
          source={require("../assets/homeImage.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.headingText}>Keep reading.</Text>
        <Text style={styles.headingText}>You will fall in love</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          width: "100%",
          marginTop: 10,
        }}
      >
        <Text numberOfLines={4} style={styles.textDetail}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
          soluta itaque veniam iure autem mollitia voluptate temporibus
          assumenda dolores.
        </Text>
        {/* <Text ellipsizeMode="tail" numberOfLines={1} style={styles.textDetail}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
          soluta itaque veniam iure autem mollitia voluptate temporibus
          assumenda dolores.
        </Text> */}
      </View>
      <TouchableOpacity
        onPress={() => navigate.navigate("Featured")}
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 20,
          borderStartColor: "",
        }}
      >
        <AntDesign name="arrowright" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  home: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
  },
  imageView: {
    height: "65%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textView: {
    display: "flex",
    justifyContent: "center",
    gap: 3,
    alignItems: "center",
    marginTop: 0,
    paddingTop: 0,
    backgroundColor: "#FFF",
  },
  headingText: {
    fontSize: 40,
    fontWeight: "600",
    color: "#0b3342",
    letterSpacing: 1,
    fontStyle: "normal",
  },
  textDetail: {
    fontSize: 24,
    maxWidth: "80%",
    textAlign: "auto",
    fontWeight: "300",
    textAlignVertical: "center",
    textShadowRadius: 0.4,
    color: "#1b617a",
    letterSpacing: 1,
  },
});
