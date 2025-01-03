import React, { Component } from "react";

import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gifList";
import GIPHY_API_KEY from "../../credentials";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedGifUrl: "https://media3.giphy.com/media/a93jwI0wkWTQs/giphy.gif?cid=d2485151nbfj1btq6xwv4vp7mvq86h7q7lmltgvsqy99hofw&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            gifs: []
        }
    }

    handleChange = (query) => {
        const requestUrl = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
        fetch(requestUrl)
            .then(response => response.json())
            .then((result) => {
                this.setState({gifs: result.data});
            });
    }

    render() {
        return(
            <div className="flex-container">
                <div id='flex-item-left'>
                    <div id='search'>
                        <SearchBar handleChange={this.handleChange}></SearchBar>
                    </div>
                    <div id='selectedGif'>
                        <Gif url={this.state.selectedGifUrl}></Gif>
                    </div>
                </div>
                <div id='flex-item-right'>
                    <GifList gifs={this.state.gifs}></GifList>
                </div>
            </div>
        )
    }
}

export default App;