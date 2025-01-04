import React, { Component } from "react";

class Gif extends Component {

    constructor(props) {
        super(props)
    }

    handleClick = () => {
        return this.props.handleClick(this.props.url)
    }

    render() {
        return(
            <div>
                <img src={this.props.url} onClick={this.handleClick}></img>
            </div>
        )
    }

}

export default Gif;