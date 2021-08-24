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
                <span id="title" onClick={() => {this.changeState()}}>desciption</span> 
            </div>
        ) 
    }

    changeState() {
        siteState = siteTypes.Game
    }

}

export default Header;