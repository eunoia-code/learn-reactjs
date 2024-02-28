import styles from './Post.module.css'

export default function Post(props) {
  return (
    <li className={styles.post}>
      <p className={styles.name}>{props.name}</p>
      <p className={styles.content}>{props.content}</p>
    </li>
  )
}