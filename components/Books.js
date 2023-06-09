import React, { useEffect, useState } from "react";
import { Text } from "@rneui/base";
import { dummyBooks } from "../dummyBooks";
import { Card } from "@rneui/themed";
import {
  FlatList,
  View,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
const Books = () => {
  const [featuredBooks, setFeaturedBooks] = useState(dummyBooks);
  const getBooks = async () => {
    const url = "https://hapi-books.p.rapidapi.com/nominees/romance/2020";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "32360ad673msh5dadacc43436a2fp1323d0jsn669da86bbab0",
        "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
      setFeaturedBooks(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // getBooks();
  });
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={featuredBooks}
      keyExtractor={(item) => item.book_id}
      renderItem={({ item }) => {
        const { author, cover, name, url, votes, book_id } = item;
        return (
          <View style={styles.card}>
            <TouchableOpacity onPress={() => Linking.openURL(url)}>
              <Image
                source={{ uri: cover }}
                style={{
                  width: 200,
                  height: 250,
                  borderRadius: 8,
                  marginHorizontal: 4,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: "800",
                fontSize: 17,
                letterSpacing: 0.5,
                padding: 2,
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 16,
                letterSpacing: 0.5,
                padding: 2,
              }}
            >
              By:{author}
            </Text>
            <Text
              style={{
                fontWeight: "300",
                fontSize: 14,
                letterSpacing: 0.5,
                padding: 2,
              }}
            >
              votes:{votes}
            </Text>
          </View>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  card: {
    // backgroundColor: "#e8e1dc",
    gap: 4,
    display: "flex",
  },
  textStyles: {
    marginTop: 4,
    fontSize: 16,
    letterSpacing: 0.6,
  },
});
export default Books;
