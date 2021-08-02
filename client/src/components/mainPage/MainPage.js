import * as React from "react";
import BaseContentOptions from "../baseContentOptions/BaseContentOptions";
import AddLayer from "../addLayer/AddLayer.component";

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                {
                    this.getListOptions().map(item => {
                        return (
                        <BaseContentOptions 
                            key={item.name}
                            header={item.title} 
                            component={item.component} 
                            name={item.name} 
                            icon={item.icon}>
                        </BaseContentOptions>)
                    })
                }
            </div>
        ) 
    }

    getListOptions() {
        return [
            {name: "addLayer1", title: "add new layer 1", icon: {}, component: <AddLayer onOptionClicked={this.onOptionClicked}/>, class: ""},
            {name: "addLayer2", title: "add new layer 2", icon: {}, component: <div></div>, class: ""}

        ];
    } 

    onOptionClicked() {
        console.log("clicked");
    }
}

export default MainPage;