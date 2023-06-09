import React, { useState } from "react";
import { Text } from "@rneui/base";
import { View } from "react-native";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  return (
    <View>
      <Text>All books</Text>
    </View>
  );
};

export default AllBooks;
