import styles from '../styles/blogpost.module.css'
import Link from 'next/link'
import SingleBlog from './SingleBlog'
import NewPostForm from '../pages/CreateBlog';
import { useState } from 'react'

const BlogPost = ({ posts }) => {
  const [allPosts, setAllPosts] = useState(posts);

  const handleAddPost = (newPost) => {
      const updatedPosts = [...allPosts, newPost];
      setAllPosts(updatedPosts);
  };

  return (
    <div>
        {posts.map((post) => (
          <SingleBlog post={post} />
      ))}
      <NewPostForm onAddPost={handleAddPost} />
    </div>
    
  );
};

export default BlogPost;
