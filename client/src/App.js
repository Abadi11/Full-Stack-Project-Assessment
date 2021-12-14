import React, { useState, useEffect } from "react";
import "./App.css";
import ShowVideos from "./ShowVideos";
import Search from "./Search";
import AddVideo from "./AddVideo";
import SortVideos from "./SortVideos"
function App() {
  const [videos, setVideo] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/').then(response => response.json()).then((data) => {
    console.log(data)
    setVideo(data)
    });
  }, [])
  // Search box content, link between search and show videos. It's taken from search component to ShowVideo. Thus, we put off design interferring between search and showVideo
  const [searchedValue, setSearchedValue] = useState("");
  const search = (value) => {
    setSearchedValue(value);
  };

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      {/* Sort */}
      <SortVideos />
      {/* Sort */}
      {/* Search */}
      <Search search={search} />
      {/* Search */}
      {/* Add video */}
      <AddVideo />
      {/* Add video */}
      <ShowVideos searchedValue={searchedValue} videos={videos}/>
    </div>
  );
}

export default App;
