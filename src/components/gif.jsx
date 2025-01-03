import React, { Component } from "react";

class Gif extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <img src={this.props.gifUrl}></img>
            </div>
        )
    }

}

export default Gif;