import { useState } from 'react';
import Post from "./Post"
import styles from "./PostsList.module.css"
import NewPost from "./NewPost"

export default function PostsList() {

  const [contentValue, setContentValue] = useState('')
  const [nameValue, setNameValue] = useState('')

  function contentChangeHandler(event) {
    setContentValue(event.target.value)
  }

  function nameChangeHandler(event) {
    setNameValue(event.target.value)
  }

  return (
    <>
      <NewPost onContentChange={contentChangeHandler} onNameChange={nameChangeHandler} />
      <ul className={styles.posts}>
        <Post name={nameValue} content={contentValue} />
        <Post name="Arteezy" content="Man Upon A Cliffs" />
        <Post name="Miracle-" content="Backpain Coz Kuroky Wont Retired" />
      </ul>
    </>
  )
}
