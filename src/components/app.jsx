import React, { Component } from "react";

import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gifList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedGifUrl: "",
            gifs: []
        }
    }

    handleChange = (query) => {
        const API_KEY = process.env.GIPHY_API_KEY;
        const requestUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
        fetch(requestUrl)
            .then(response => response.json())
            .then((result) => {
                this.setState({gifs: result.data});
            });
    }

    handleSelect = (clickedGifUrl) => {
        this.setState({selectedGifUrl: clickedGifUrl})
    } 

    render() {
        return(
            <div className="flex-container">
                <div id='flex-item-left'>
                    <h1 className="text-center">type to search gifs</h1>
                    <div id='search'>
                        <SearchBar handleChange={this.handleChange}></SearchBar>
                    </div>
                    <div id='selectedGif'>
                        <Gif url={this.state.selectedGifUrl}></Gif>
                    </div>
                </div>
                <div id='flex-item-right'>
                    <h1 className="text-center">click to select gif</h1>
                    <GifList gifs={this.state.gifs} handleSelect={this.handleSelect}></GifList>
                </div>
            </div>
        )
    }
}

export default App;