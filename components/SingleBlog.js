import Link from 'next/link'
import styles from '../styles/blogpost.module.css'


const SingleBlog = ({ post }) => {
  return (
    <div>
        <div className={styles.blog}>
        <Link href={`./posts/${post.id}`}>
        <h3>{post.title} &rarr;</h3>
        </Link>
        <p>January 1, 2023</p>
        </div>
    </div>
  )
}

export default SingleBlog
