import React, {Component} from "react";

class RandomImage extends Component {

    constructor(props) {
        super(props);
        this.state = {nbrChange: 1};
    }

    handleClick = () => {
        this.setState({nbrChange: this.state.nbrChange + 1})
    }

    render() {
        let srcImage = "https://picsum.photos/200?random=";
        srcImage += this.state.nbrChange;
        return(
            <div>
                <div className="flex-container">
                    <button className="btn btn-primary" onClick={this.handleClick}>Click to change picture.</button>
                </div>
                <div className="text-center">
                  <u>
                  current display picture
                  </u>
                  <p>
                  {srcImage}
                  </p>
                </div>
                <div className="flex-container">
                    <img src={srcImage}></img>
                </div>
            </div>
        )

    }
}

export default RandomImage;