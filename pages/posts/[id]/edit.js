// pages/posts/[id]/edit.js

import { useRouter } from 'next/router';
import EditPage from '../../EditPage'; // Update the path

const EditPostPage = () => {
  const router = useRouter();
  const { data, id } = router.query;

  const post = { id, title: data.title, body: data.body };
  
  return <EditPage post={post} />;
};

export const getServerSideProps = async(context) => {
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const post = await res.json()
  
    return {
      props: {
        post
      }
    }
  } 

export default EditPostPage;
