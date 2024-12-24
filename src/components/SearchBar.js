import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
    

    function search() {
        alert(props.name)
    }

    return (
        <div className="SearchBar">
            <input type="text" placeholder="Type and search" />
            <button onClick={search}>Search</button>
        </div>
    )
}

export default SearchBar;