import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = ({ data }) => {
  const { post } = useParams();
  const selectedPost = data.find((x) => {
    return x.id == post;
  });

  console.log(selectedPost);
  return (
    <div>
      <h2>{selectedPost.title}</h2>
      <div>
        <span>{selectedPost.userId}</span>
      </div>
      <div>{selectedPost.body}</div>
    </div>
  );
};

export default PostDetail;
