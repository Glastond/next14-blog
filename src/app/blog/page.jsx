import React from "react";
import styles from "./blog.module.css";
import PostCard from "../../components/postCard";
import { getPosts } from "../../lib/data";

export const metadata = {
  title: "Glaston's Blog",
  description: "Blog page",
};

const Blog = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
