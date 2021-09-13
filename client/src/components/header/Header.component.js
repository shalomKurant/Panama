// "وصف"
import * as React from "react";
import { siteState, siteTypes } from "../..";
import "./Header.style.scss";
import logo from "../../images/Piedpiperoldlogo.jpg"
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="header-container">
                <img className="logo" src={logo} onClick={() => {this.props.changeState()}}/>
            </div>
        ) 
    }
}

export default Header;