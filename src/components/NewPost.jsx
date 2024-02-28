import styles from './NewPost.module.css';

export default function NewPost(props) {

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" required rows={3} onChange={props.onContentChange} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={props.onNameChange} />
      </p>
    </form>
  );
}
