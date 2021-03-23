import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, [setPosts]);

  return (
    <div className="container">
      <h1>Best posts so far</h1>
      <div className="posts">
        {posts.map(p => (
         <Link key={p.id} href={`posts/${p.id}`} passHref>
           <a className="post">
             <p className="post__title">{p.title}</p>
             <p className="post__body">{p.body}</p>
           </a>
         </Link>
        ))}
      </div>

      <style jsx>{`
        .container {
          padding: 40px;
        }
        
        .posts {
          display: flex;
          flex-wrap: wrap;
        }
        
        .post {
          border: 1px solid black;
          width: 500px;
          transition: width 0.3s;
          padding: 15px;
          margin: 10px 20px 0 0;
          text-decoration: none;
          color: black;
        }
        
        .post:hover {
          width: 520px;
        }
        
        .post__title {
          width: 500px;
          font-size: 19px;
        }
        
        .post__body {
          width: 500px;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};
