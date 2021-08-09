import React, { PropTypes } from 'react';
import { constants } from "../../constants/constants";
import "./AddLayer.style.css";
import Button from '@material-ui/core/Button';
import AccordionActions from '@material-ui/core/AccordionActions';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { layersDataProvider } from "../../services/LayersDataProvider.servics";
import { httpManager } from '../../services/HttpManager';

class AddLayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layers: {},
            selectedLayer: {}
        }

        layersDataProvider.getAllLayers().then(result => {
            this.setState({ layers: result });
        });
    }

    render() {
        return (
            <div id="add-layer" onClick={() => this.props.onOptionClicked(constants.optionNames.AddLayer)}>

            <AccordionActions>
            <Autocomplete
                id="combo-box-demo"
                options={this.state.layers}
                onChange={(event, value) => this.setState({ selectedLayer: value })}
                getOptionLabel={(option) => option.displayName}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
            </AccordionActions>
                            
            <Button onClick={() => this.sendLayerDescription()}>Cancel</Button>
                <Button onClick={() => console.log(this.state.selectedLayer)}>Send</Button>
            </div>
        ) 
    }

    sendLayerDescription() {
        httpManager.post(constants.routes.layers.addDescription, {BODY: "--------------"}).then(r => {})
    }
}
export default AddLayer;