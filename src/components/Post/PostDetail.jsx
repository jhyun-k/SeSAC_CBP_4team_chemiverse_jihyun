import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = ({ data, postIndex, setPostIndex }) => {
  const { post } = useParams();
  // if (post == ) {
  //   console.log('true');
  // }
  useEffect(() => {
    setPostIndex(post);
  }, [post, setPostIndex]);

  const selectedPost = data[postIndex];

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
