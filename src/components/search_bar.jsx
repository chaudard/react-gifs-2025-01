import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends Component {

    constructor(props) {
        super(props);
    }

    changeValue = (event) => {
        this.props.handleChange(event.target.value);
    }

    render() {
        return(
            <div id="search-bar">
                <div id="font-awesome-icon">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div>
                    <input onChange={this.changeValue}></input>
                </div>

            </div>
        )
    }
}

export default SearchBar;