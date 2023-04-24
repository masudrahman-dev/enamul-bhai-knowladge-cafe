import React from "react";

const Sidbar = ({ titleData, timeCount }) => {
  return (
    <div className=" bg-green-900">
      <div className=" text-center p-5 text-2xl bg-slate-800">
        <p>Spent time on read : {timeCount} min</p>
      </div>
      <div className=" ">
        <div className=" ">
          <div className="m-5">
            <h1 className="text-2xl font-semibold">
              Bookmarked Blogs : {titleData.length}
            </h1>
            {titleData?.map((title, index) => (
              <div key={index} className="bg-slate-800 p-5 rounded-lg mt-7">
                <p>Master Microsoft Power Platform and Become an In-Demand!</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidbar;
