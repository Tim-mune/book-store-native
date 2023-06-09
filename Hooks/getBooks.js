import React, { useEffect, useState } from "react";
const getBooks = async () => {
  const url = "https://hapi-books.p.rapidapi.com/nominees/romance/2020";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = (await response.text()).slice(0, 40);
    return result;
  } catch (error) {
    console.error(error);
  }
};
export const useBooks = async () => {
  const [books, setBooks] = useState([]);
  const featuredBooks = await getBooks();
  setBooks(books);
  return [featuredBooks, error];
};
