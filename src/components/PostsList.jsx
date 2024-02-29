import { useState } from 'react';
import Post from "./Post"
import styles from "./PostsList.module.css"
import NewPost from "./NewPost"
import Modal from './Modal';

export default function PostsList({isPosting, onStopPosting}) {

  return (
    <>
      { isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost 
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post name="Arteezy" content="Man Upon A Cliffs" />
        <Post name="Miracle-" content="Backpain Coz Kuroky Wont Retired" />
      </ul>
    </>
  )
}
