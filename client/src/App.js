import React, { useState } from "react";
import "./App.css";
import ShowVideos from "./ShowVideos";
import Search from "./Search";
import AddVideo from "./AddVideo";
function App() {
  // Search box content, link between search and show videos. It's taken from search component to ShowVideo. Thus, we put off design interferring between search and showVideo
  const [searchedValue, setSearchedValue] = useState("");
  const search = (value) => {
    setSearchedValue(value);
  };
  // AddVideo component
  const [newObj, setNewObj] = useState({})
  const add = (title, url) => {
    setNewObj({ title: title, url: url });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      {/* Search */}
      <Search search={search} />
      {/* Search */}
      {/* Add video */}
      <AddVideo add={add} />
      {/* Add video */}
      <ShowVideos searchedValue={searchedValue} newObj={newObj}/>
    </div>
  );
}

export default App;
