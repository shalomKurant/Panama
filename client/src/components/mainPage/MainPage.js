import * as React from "react";
import BaseContentOptions from "../baseContentOptions/BaseContentOptions";
import AddLayer from "../addLayer/AddLayer.component";
import DeleteLayer from "../deleteLayer/DeleteLayer.component";
import Header from "../header/Header.component";
import "./MainPage.style.scss";
import BaseGameBoard from "../../memoryGame/components/baseGameBoard/BaseGameBoard.component";
import BottomBar from "../bottomBar/BottomBar.component";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';

class MainPage extends React.Component {
    CLICKED_AMOUNT_TO_GAME_STATE = 5;

    constructor(props) {
        super(props);

        this.state = {
            siteStateRegular: true,
            clickedCounter: 0
        }
        this.changeState = this.changeState.bind(this);

    }

    changeState() {
        if (this.state.clickedCounter < this.CLICKED_AMOUNT_TO_GAME_STATE && this.state.siteStateRegular) {
            this.setState({clickedCounter: this.state.clickedCounter + 1});
        } else {
            this.setStateSite();
            this.setState({clickedCounter: 0});
        }        
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
            {name: "addLayer", title: "הוספת תיאור לשכבה", icon: <AddCircleOutlineIcon/>, component: <AddLayer onOptionClicked={this.onOptionClicked}/>, subTitle: ""},
            {name: "deleteLayer", title: "מחיקת שכבה קיימת ", icon: <DeleteIcon/>, component: <DeleteLayer onOptionClicked={this.onOptionClicked}/>}

        ];
    } 

    onOptionClicked() {
        console.log("clicked");
    }
}

export default MainPage;