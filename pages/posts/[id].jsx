import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState(null);

  const { id } = router.query;

  useEffect(() => {
    id && fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id, setPost]);

  return (
    <div className="container">
      {post?.id ? (
        <div>
          <div className="post">
            <p className="post__title">{post.title}</p>
            <p className="post__body">{post.body}</p>
          </div>
        </div>
      ) : <div>Loading....</div>}

      <style jsx>{`
        .container {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .post {
          border: 1px solid black;
          padding: 40px;
        }
        
        .post__title {
          font-size: 26px;
        }
        
        .post__body {
          font-style: italic;
        }
      `}</style>
    </div>
  )
}
