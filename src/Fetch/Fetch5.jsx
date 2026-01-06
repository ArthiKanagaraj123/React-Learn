import React, { useState } from 'react'

const Fetch5 = () => {
  const [post, setPost] = useState(null);

  const fetchPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/5")
      .then((res) => res.json())
      .then((data) => setPost(data));
  };

  return (
    <div>
      <button onClick={fetchPost}>Get Post</button>

      {post && (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
}



export default Fetch5
