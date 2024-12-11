"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Page({ params: paramsPromise, searchParams }) {
  const [params, setParams] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {category} = searchParams;

  useEffect(() => {
    // Unwrap the params Promise
    paramsPromise.then((resolvedParams) => setParams(resolvedParams));

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${category}&language=en&apiKey=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
        );
        setData(
          response.data.articles.map((item, index) => ({
            ...item,
            id: index.toString(),
          }))
        );
        setIsLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [paramsPromise, category]);

  if (!params) {
    return <div>Loading...</div>;
  }

  const article = data.find((item) => item.id === params.id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}
