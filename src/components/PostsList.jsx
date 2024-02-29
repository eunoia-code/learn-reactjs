import { useState } from 'react';
import Post from "./Post"
import styles from "./PostsList.module.css"
import NewPost from "./NewPost"
import Modal from './Modal';

export default function PostsList({isPosting, onStopPosting}) {
  const [posts, setPosts] = useState([])
  
  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts])
  }

  return (
    <>
      { isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost 
            onAddPost={addPostHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      { posts.length > 0 && (
          <ul className={styles.posts}>
            {posts.map((post, index) => (
              <Post key={index} name={post.name} content={post.content} />
            ))}
          </ul>
      )}
      { posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )} 
    </>
  )
}
