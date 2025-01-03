import React, { Component } from "react";
import Gif from "./gif";

class GifList extends Component {

    constructor(props) {
        super(props);
    }

    renderList = () => {
        return this.props.gifs.map(gif => {return <Gif url={gif.images.original.url} key={gif.images.original.url}></Gif>});
    }

    render() {
        return(
            <div className="cards">
                {this.renderList()}
            </div>
        )
    }

}

export default GifList