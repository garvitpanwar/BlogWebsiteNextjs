import axios from "axios";
import PostsGrid from "../posts/posts-grid";

import classes from "./featured-posts.module.css";
import { useEffect, useState } from "react";

function FeaturedPosts(props) {
  const [posts, setPosts] = useState([]);


  const getData = async () => {
    console.log('Fetching data...');
    try {
      const response = await axios.get("https://newsapi.org/v2/everything?q=cloud&apiKey=e7350ff4282b4101ac1a086978b635f8");
      console.log('Fetched data:', response.data);
     
      setPosts(response.data.articles);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>

      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
