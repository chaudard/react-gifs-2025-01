import React from "react";
import SearchBar from "./search_bar";

const App = () => {
    return(
        <div className="flex-container">
            <div id='flex-item-left'>
                <div id='search'>
                    <SearchBar></SearchBar>
                </div>
                <div id='selectedGif'></div>
            </div>
            <div id='flex-item-right'></div>
        </div>
    )
}

export default App;