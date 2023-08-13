import { useRouter } from 'next/router'
import Link from 'next/link'
import EditPage from '../../EditPage';
import style from '../../../styles/SingleBlog.module.css'

const post = ({ post }) => {
  const router = useRouter();

  return (
    <div className={style.container}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={{ pathname: `/posts/${post.id}/edit`, query: { data: `${post}`, id: `${post.id}`} }}>
        <button className={style.edit}>Edit</button>
      </Link>
      <Link href = '/'>
        <button className={style.home}>Go Back Home</button></Link>
    </div>
  )
}

export const getServerSideProps = async(context) => {
  const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const post = await res.json()

  return {
    props: {
      post
    }
  }
} 

export default post
