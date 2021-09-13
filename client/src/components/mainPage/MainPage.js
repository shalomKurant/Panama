import * as React from "react";
import BaseContentOptions from "../baseContentOptions/BaseContentOptions";
import AddLayer from "../addLayer/AddLayer.component";
import DeleteLayer from "../deleteLayer/DeleteLayer.component";
import Header from "../header/Header.component";
import "./MainPage.style.scss";
import BaseGameBoard from "../../memoryGame/components/baseGameBoard/BaseGameBoard.component";
import BottomBar from "../bottomBar/BottomBar.component";

class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            siteStateRegular: true
        }
        this.changeState = this.changeState.bind(this);

    }

    changeState() {
        this.setStateSite();
    }

    setStateSite() {
        this.setState({siteStateRegular: !this.state.siteStateRegular})
    }

    render() {
        return (
            <div>
                <Header changeState={this.changeState}/>
                { this.state.siteStateRegular ?
                <div id="base-option-container">
                    {
                        this.getListOptions().map(item => {
                            return (
                            <BaseContentOptions 
                                key={item.name}
                                header={item.title}
                                subTitle={item.subTitle}
                                component={item.component} 
                                name={item.name} 
                                icon={item.icon}>
                            </BaseContentOptions>)
                        })
                    }
                </div>
                : <BaseGameBoard></BaseGameBoard>}
                <BottomBar/>
            </div>
        ) 
    }

    getListOptions() {
        return [
            {name: "addLayer", title: "הוספת תיאור לשכבה", icon: {}, component: <AddLayer onOptionClicked={this.onOptionClicked}/>, subTitle: "Click here"},
            {name: "deleteLayer", title: "מחיקת שכבה קיימת ", icon: {}, component: <DeleteLayer onOptionClicked={this.onOptionClicked}/>, class: ""}

        ];
    } 

    onOptionClicked() {
        console.log("clicked");
    }
}

export default MainPage;