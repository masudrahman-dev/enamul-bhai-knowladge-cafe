import React, { useEffect, useState } from "react";
import Post from "./Post/Post";
import Sidbar from "./Sidbar/Sidbar";
import { toast } from "react-hot-toast";

const Body = () => {
  const [data, setData] = useState([]);
  const [timeCount, setTimeCount] = useState(0);
  const [titleData, seTitleData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        const localData = JSON.parse(localStorage.getItem("marked-title"));
        console.log(localData);
        if (localData) {
          seTitleData(localData);
        }
      });
  }, []);

  const handleTitle = (postData) => {
    console.log("postData :>> ", postData);
    const newPostData = [postData];
    const addPostData = [...titleData, ...newPostData];
    localStorage.setItem("marked-title", JSON.stringify(addPostData));
    seTitleData(addPostData);
    const isTitle = titleData.find((t) => t.id === postData.id);
    if (isTitle) {
      toast("Here is your toast.");
    }
  };
  const handleTime = (watchTime) => {
    const totalTime = timeCount + watchTime;
    setTimeCount(totalTime);
  };

  return (
    <div className="container mx-auto  mt-12">
      <div className="grid grid-cols-2 gap-5">
        <Post
          handleTime={handleTime}
          handleTitle={handleTitle}
          data={data}
        ></Post>
        <Sidbar titleData={titleData} timeCount={timeCount}></Sidbar>
      </div>
    </div>
  );
};

export default Body;
