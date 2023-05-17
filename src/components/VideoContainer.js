import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  async function getVideos() {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
  }

  return (
    <>
      <div className="flex flex-wrap">
        {videos.map(
          (val) =>
            val.snippet.thumbnails.maxres !== undefined && (
              <Link key={val.id} to={"/watch?v=" + val.id}>
                <VideoCard items={val} />
              </Link>
            )
        )}
      </div>
    </>
  );
};

export default VideoContainer;
