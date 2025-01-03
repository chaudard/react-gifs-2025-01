import React, { Component } from "react";
import SearchBar from "./search_bar";
import Gif from "./gif";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={selectedGifUrl: "https://media3.giphy.com/media/a93jwI0wkWTQs/giphy.gif?cid=d2485151nbfj1btq6xwv4vp7mvq86h7q7lmltgvsqy99hofw&ep=v1_gifs_search&rid=giphy.gif&ct=g"}
    }

    render() {
        return(
            <div className="flex-container">
                <div id='flex-item-left'>
                    <div id='search'>
                        <SearchBar></SearchBar>
                    </div>
                    <div id='selectedGif'>
                        <Gif gifUrl={this.state.selectedGifUrl}></Gif>
                    </div>
                </div>
                <div id='flex-item-right'></div>
            </div>
        )
    }
}

export default App;