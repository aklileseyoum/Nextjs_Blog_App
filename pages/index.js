import Head from 'next/head'
import { useState, useEffect } from 'react'
import BlogPost from '../components/BlogList';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
    <Head>
      <title>Blog Post</title>
    </Head>
      <h1>Blog Post</h1>
      <Link href={'./CreateBlog'}>
      <button className={styles.blogs}>Create Blog</button>
      </Link>
      <BlogPost posts={posts}/>
    </>
  )
}
