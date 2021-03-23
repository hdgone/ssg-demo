import React from "react";

export default function Post({ post }) {
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

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return {
    paths: data.map(({ id }) => ({ params: { id: `${id}` } })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { id }}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
