import React, { useState } from "react";
import Video from "./Video";
import Search from "./Search";
import AddVideo from "./AddVideo";
import StaticData from "./data/exampleresponse.json";

function ShowVideos() {
  const [videos, setVideo] = useState(StaticData);
  const [searchedValue, setSearchedValue] = useState("");
  const search = (value) => {
    setSearchedValue(value);
  };
  const add = (title, url) => {
    let newObj = {title: title, url: url};
    setVideo((prev) => prev.concat(newObj))
  }
  return (
    <div>
      {/* Search */}
      <Search search={search} />
      {/* Search */}
      {/* Add video */}
      <AddVideo add={add}/>
      {/* Add video */}
      {videos
        .filter((video) =>
          video.title.toLowerCase().includes(searchedValue.toLowerCase())
        )
        .map((video) => {
          return <Video video={video} />;
        })}
    </div>
  );
}

export default ShowVideos;
