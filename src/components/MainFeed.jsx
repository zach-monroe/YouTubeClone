import React from 'react';
import VideoCard from "./MainFeed/VideoCard";

const MainFeed = ({ videoData }) => {
  const items = videoData.items;


  //For some reason array.isarray makes the map work? who knows why.

  return (
    <div className="main">
      <div className="main-grid">
        {Array.isArray(items) && items.map((item, index) => (
          <VideoCard
            key={index}
            thumb={item.snippet.thumbnails.medium.url}
            videoId={item.id.videoId}
            title={item.snippet.title}
            desc={item.snippet.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MainFeed;



