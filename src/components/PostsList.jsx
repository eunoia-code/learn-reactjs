import { useState, useEffect } from 'react';
import Post from "./Post"
import styles from "./PostsList.module.css"
import NewPost from "./NewPost"
import Modal from './Modal';

export default function PostsList({isPosting, onStopPosting}) {
  const [posts, setPosts] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true)
      const response = await fetch('http://localhost:8080/posts')
      const resData = await response.json()
      setPosts(resData.posts)
      setIsFetching(false)
    }

    fetchPosts()
  }, [])

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // setPosts((existingPosts) => [postData, ...existingPosts])
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
      { !isFetching && posts.length > 0 && (
          <ul className={styles.posts}>
            {posts.map((post) => (
              <Post key={post.id} name={post.name} content={post.content} />
            ))}
          </ul>
      )}
      { !isFetching && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )} 
      { isFetching && (
        <div style={{ textAlign: 'center', color: 'white'}}>
          <h2>Loading...</h2>
        </div>)}
    </>
  )
}
