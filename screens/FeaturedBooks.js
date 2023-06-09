import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Input } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { Books } from "../components";

const FeaturedBooks = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: "#FFF", height: "100%", padding: 10 }}
    >
      {/* nav bar */}
      <View style={styles.navbar}>
        <AntDesign name="bars" size={24} color="#7d0b59" />
        <AntDesign name="user" size={24} color="#7d0b59" />
      </View>
      <Text style={styles.textItem}>Keep exploring</Text>
      {/* search bar*/}

      <Input
        placeholder="search for books"
        rightIcon={<AntDesign name="search1" size={24} color="#7d0b59" />}
        autoCapitalize="none"
        value=""
        blurOnSubmit={true}
        style={{ marginTop: 15, padding: 10 }}
        onChange={console.log("search item")}
      />
      {/* trending books text */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{ fontSize: 24, fontWeight: "400", marginTop: 10, padding: 5 }}
        >
          Trending books
        </Text>

        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
        >
          {/* #363535 */}
          <Text>See all</Text>
          <AntDesign name="eye" size={20} color="#7d0b59" />
        </TouchableOpacity>
      </View>
      <Books />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  navbar: {
    height: "5%",
    display: "flex",
    flexDirection: "row",

    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    fontSize: 36,
    fontWeight: "600",
    letterSpacing: 1,
    marginTop: 5,
    color: "#591d46",
    textTransform: "capitalize",
  },
});
export default FeaturedBooks;
