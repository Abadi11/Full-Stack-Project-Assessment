import React, {useState, useEffect } from 'react'

function Search(props) {
 
 const [searchInput, setSearchInput] = useState("");
 // const [count, setCount] = useState(0)
 const handleSearchInput = (e) => {
  setSearchInput(() => e.target.value);
  props.search(searchInput);
  // setCount(() => count + 1)
 }
 // useEffect(() => {}, [count]);
 return (
   <div>
     <input
       type="text"
       id="customerName"
       name="keyword"
       className="form-control"
       placeholder="video name"
       value={searchInput}
       onChange={handleSearchInput}
     />
   </div>
 );
}

export default Search
