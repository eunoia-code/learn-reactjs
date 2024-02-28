import { useState } from 'react';
import Post from "./Post"
import styles from "./PostsList.module.css"
import NewPost from "./NewPost"
import Modal from './Modal';

export default function PostsList() {

  const [contentValue, setContentValue] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [modalIsVisible, setModalIsVisible] = useState(true)

  function modalHandler(){
    setModalIsVisible(false)
  }

  function contentChangeHandler(event) {
    setContentValue(event.target.value)
  }

  function nameChangeHandler(event) {
    setNameValue(event.target.value)
  }

  // let modalContent;
  // if(modalIsVisible){
  //   modalContent = <Modal onClose={modalHandler}>
  //                   <NewPost onContentChange={contentChangeHandler} onNameChange={nameChangeHandler} />
  //                 </Modal>
  // }

  return (
    <>
      { modalIsVisible && (
        <Modal onClose={modalHandler}>
          <NewPost onContentChange={contentChangeHandler} onNameChange={nameChangeHandler} />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post name={nameValue} content={contentValue} />
        <Post name="Arteezy" content="Man Upon A Cliffs" />
        <Post name="Miracle-" content="Backpain Coz Kuroky Wont Retired" />
      </ul>
    </>
  )
}
