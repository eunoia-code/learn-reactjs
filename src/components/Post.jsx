import styles from './Post.module.css'

export default function Post({name, content}) {
  return (
    <li className={styles.post}>
      <p className={styles.name}>{name}</p>
      <p className={styles.content}>{content}</p>
    </li>
  )
}