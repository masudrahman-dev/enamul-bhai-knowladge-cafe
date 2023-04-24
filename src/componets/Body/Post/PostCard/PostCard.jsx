import React from "react";
import { Toaster } from "react-hot-toast";
const PostCard = (props) => {
  // console.log("postData :>> ", postData);
  // eslint-disable-next-line react/prop-types
  const { id, blogTitle, date, avatar, name, url, watchTime } = props.postData;
  const { handleTitle } = props;
  const { handleTime } = props;

  return (
    <div className="mb-7">
      <div className="card card-compact  bg-base-100 shadow-xl">
        <img className="rounded-lg " src={url} alt="Shoes" />

        <div className="card-body mt-5">
          <div className="flex items-center justify-between ">
            <div className="flex gap-5 items-center">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={avatar} />
                </div>
              </div>
              <div>
                <h2 className="text-2xl">{name}</h2>
                <p>{date}</p>
              </div>
            </div>
            <button
              onClick={() => handleTime(watchTime)}
              className="btn btn-ghost"
            >
              <p className="text-2xl">
                {watchTime} min <span>🐱‍🏍</span>
              </p>
            </button>
          </div>
          <h2 className="card-title my-3">{blogTitle} </h2>

          <p>
            #beginners <span>#programming</span>
          </p>
          <div className="card-actions ">
            <button
              onClick={() => {
                handleTitle(props.postData);
              }}
              className="btn btn-primary"
            >
              Mark as read
            </button>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
