import React from "react";

const PostCard = () => {
  return (
    <div className="mb-7">
      <div className="card card-compact  bg-base-100 shadow-xl">
        <img
          className="rounded-lg "
          src="https://loremflickr.com/320/240/dog"
          alt="Shoes"
        />

        <div className="card-body mt-5">
          <div className="flex items-center justify-between ">
            <div className="flex gap-5 items-center">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://loremflickr.com/320/240" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl">Mrs. Setara</h2>
                <p>Mar 14 (4 Days ago)</p>
              </div>
            </div>
            <div>
              <p>
                10 min read <span>🐱‍🏍</span>
              </p>
            </div>
          </div>
          <h2 className="card-title my-3">
            How to get your first job as a self-taught programmer
          </h2>

          <p>
            #beginners <span>#programming</span>
          </p>
          <div className="card-actions ">
            <button className="btn btn-primary">Mark as read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
