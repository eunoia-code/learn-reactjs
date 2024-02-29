import styles from './NewPost.module.css';

export default function NewPost({onContentChange, onNameChange, onCancel}) {

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" required rows={3} onChange={onContentChange} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={onNameChange} />
      </p>
      <p className={styles.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button type='submit'>Submit</button>
      </p>
    </form>
  );
}
