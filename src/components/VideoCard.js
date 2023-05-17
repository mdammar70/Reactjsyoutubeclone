import React from "react";

const VideoCard = ({ items }) => {
  //console.log(items);
  return (
    <>
      <article className="ml-10 mt-8 w-72 rounded-lg border border-gray-100 shadow-sm">
        <img
          className=" rounded"
          alt="Office"
          src={items?.snippet?.thumbnails?.maxres?.url}
        />

        <div className="p-1 sm:p-1">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900">
              {items?.snippet?.title}
            </h3>
          </a>

          <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            {items?.snippet?.channelTitle}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            {items?.statistics?.viewCount} views
          </p>
        </div>
      </article>
    </>
  );
};

export default VideoCard;
