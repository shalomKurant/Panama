import * as React from "react";
import { constants } from "../../constants/constants";

class AddLayer extends React.Component {
    constructor(props) {

        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div onClick={() => this.props.onOptionClicked(constants.optionNames.AddLayer)}>
                FROM-add-LAYER 
            </div>
        ) 
    }

}

export default AddLayer;