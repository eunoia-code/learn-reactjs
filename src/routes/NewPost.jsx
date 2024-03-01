import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NewPost.module.css';
import Modal from '../components/Modal';

export default function NewPost({onAddPost}) {

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
    <Modal>
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
          <Link to=".." type='button'>Cancel</Link>
          <button type='submit'>Submit</button>
        </p>
      </form>
    </Modal>
  );
}
