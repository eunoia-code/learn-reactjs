import { Link } from 'react-router-dom'
import styles from './Post.module.css'

export default function Post({id, name, content}) {
  return (
    <li className={styles.post}>
      <Link to={id} className={styles.link}>
        <p className={styles.name}>{name}</p>
        <p className={styles.content}>{content}</p>
      </Link>
    </li>
  )
}