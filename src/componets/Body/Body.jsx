import React from "react";
import Post from "./Post/Post";
import Sidbar from "./Sidbar/Sidbar";

const Body = () => {
  return (
    <div className="container mx-auto  mt-12">
      <div className="grid grid-cols-2 gap-5">
        <Post></Post>
        <Sidbar></Sidbar>
      </div>
    </div>
  );
};

export default Body;
