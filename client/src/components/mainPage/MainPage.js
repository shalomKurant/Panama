import * as React from "react";
import BaseContentOptions from "../baseContentOptions/BaseContentOptions";
import AddLayer from "../addLayer/AddLayer.component";
import Header from "../header/Header.component";
import "./MainPage.style.scss";

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Header/>
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
            </div>
        ) 
    }

    getListOptions() {
        return [
            {name: "addLayer1", title: "add new layer 1", icon: {}, component: <AddLayer onOptionClicked={this.onOptionClicked}/>, subTitle: "Click here"},
            {name: "addLayer2", title: "add new layer 2", icon: {}, component: <div></div>, class: ""}

        ];
    } 

    onOptionClicked() {
        console.log("clicked");
    }
}

export default MainPage;