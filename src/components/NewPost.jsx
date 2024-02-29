import { useState } from 'react';
import styles from './NewPost.module.css';

export default function NewPost({onAddPost, onCancel}) {

  const [contentValue, setContentValue] = useState('')
  const [nameValue, setNameValue] = useState('')

  function contentChangeHandler(event) {
    setContentValue(event.target.value)
  }

  function nameChangeHandler(event) {
    setNameValue(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault()
    const postData = {
      content: contentValue,
      name: nameValue
    }

    onAddPost(postData)
    onCancel()
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" required rows={3} onChange={contentChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={nameChangeHandler} />
      </p>
      <p className={styles.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button type='submit'>Submit</button>
      </p>
    </form>
  );
}
