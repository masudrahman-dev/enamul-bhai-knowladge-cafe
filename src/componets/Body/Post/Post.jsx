import React from "react";
import PostCard from "./PostCard/PostCard";

const Post = ({ handleTitle, data,handleTime }) => {
    // console.log('data :>> ', data);
  return (
    <div className="">
      {data?.map((postData) => (
        <PostCard
          key={postData.id}
          postData={postData}
          handleTitle={handleTitle}
          handleTime={handleTime}
        ></PostCard>
      ))}
    </div>
  );
};

export default Post;
