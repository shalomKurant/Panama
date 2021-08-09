// "وصف"
import * as React from "react";
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
                <span id="title">desciption</span> 
            </div>
        ) 
    }

}

export default Header;