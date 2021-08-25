// "وصف"
import * as React from "react";
import { siteState, siteTypes } from "../..";
import "./Header.style.scss";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="header-container">
                <span id="title" onClick={() => {this.props.changeState()}}>desciption</span> 
            </div>
        ) 
    }
}

export default Header;