// components/NewPostForm.js

import React, { useState } from 'react';
import { useGlobalContext } from '@/components/GlobalContext';
import Link from 'next/link'
import styles from '../styles/CreateBlog.module.css'

const NewPostForm = ({ onAddPost }) => {
  const { globalData, updateGlobalData } = useGlobalContext();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = { title, body };
    updateGlobalData(newPost);
    setTitle('');
    setBody('');
  };
  
  return (
    <>
      <h1>Create New Blog</h1>
      <form className={styles.container}>
      <input type="text" value={title} onChange={handleTitleChange} placeholder="Title" className={styles.title} />
      <textarea value={body} onChange={handleBodyChange} placeholder="Body" className={styles.body} />
      <Link href={'/'}>
      <button type="submit" className={styles.btn}>Add Post</button>
      </Link>
    </form>
    </>
  );
};

export default NewPostForm;
