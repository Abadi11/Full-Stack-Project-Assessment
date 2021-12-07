import React, {useState} from 'react'

function Search(props) {
 
 const [searchInput, setSearchInput] = useState("");
 const handleSearchInput = (e) => {
  setSearchInput(() => e.target.value);
  props.search(searchInput);
 }
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
