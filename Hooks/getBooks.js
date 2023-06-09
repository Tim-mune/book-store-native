import React, { useEffect, useState } from "react";
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
