// "وصف"
import * as React from "react";
import "./BottomBar.style.scss";
import RichardGif from "../../images/Richard.gif"
import JaredGif from "../../images/Jared.gif"

class BottomBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldShowGifs: false
        }
    }

    render() {
        return (
            <div id="bottom-bar-container">
                {this.state.shouldShowGifs ? <img className="gif jaredgif" src={JaredGif}/>: ""}
                {this.state.shouldShowGifs ? <img className="gif richardgif" src={RichardGif}/>: ""}
                {this.state.shouldShowGifs ? <img className="gif jaredgif" src={JaredGif}/>: ""}
                {this.state.shouldShowGifs ? <img className="gif richardgif" src={RichardGif}/>: ""}
                <span onMouseLeave={() => this.toggleGifShowing(false)} onMouseEnter={() => this.toggleGifShowing(true)}> By Richard Hendricks &copy;</span>
                {this.state.shouldShowGifs ? <img className="gif jaredgif" src={JaredGif}/>: ""}
                {this.state.shouldShowGifs ? <img className="gif richardgif" src={RichardGif}/>: ""}
                {this.state.shouldShowGifs ? <img className="gif jaredgif" src={JaredGif}/>: ""}
                {this.state.shouldShowGifs ? <img className="gif richardgif" src={RichardGif}/>: ""}
    
            </div>
        ) 
    }

    toggleGifShowing(shouldDisplay) {
        this.setState({shouldShowGifs: shouldDisplay})
    }
}

export default BottomBar;