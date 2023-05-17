import React from "react";
import { useSearchParams } from "react-router-dom";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"));
  return (
    <div className="flex flex-col m-8 w-full">
      <div className="flex ">
        <div>
          <iframe
            width="900"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default WatchPage;
