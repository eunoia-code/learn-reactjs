import { Link, Form, redirect } from 'react-router-dom';
import styles from './NewPost.module.css';
import Modal from '../components/Modal';

export default function NewPost() {
  return (
    <Modal>
      <Form method='post' className={styles.form}>
        <p>
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p className={styles.actions}>
          <Link to=".." type='button'>Cancel</Link>
          <button type='submit'>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export async function action({request}) {
  console.log(request)
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  const response = await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return redirect('/')
}