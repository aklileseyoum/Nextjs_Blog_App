// components/EditPage.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import style from '../styles/Edit.module.css'
import Link from 'next/link'

const EditPage = ({ post }) => {
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedBody, setEditedBody] = useState(post.body);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Title:', editedTitle);
    console.log('Updated Body:', editedBody);
    router.push(`/post/${post.id}`);
  };

  return (
    <div className={style.container}>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={style.text}>Title: </label>
          <input
            type="text"
            value={editedTitle}
            defaultValue={editedTitle}
            className={style.title}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        </div>
        <div>
          <label className={style.text}>Body:</label>
          <textarea
            value={editedBody}
            defaultValue={editedBody}
            className={style.body}
            onChange={(e) => setEditedBody(e.target.value)}
          />
        </div>
        <Link href = {`/`}>
            <button type="submit" className={style.btn}>Save Changes</button>
        </Link>
      </form>
    </div>
  );
};

export default EditPage;
