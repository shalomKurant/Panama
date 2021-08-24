import React, { PropTypes } from 'react';
import { constants } from "../../constants/constants";
import "./AddLayer.style.css";
import Button from '@material-ui/core/Button';
import AccordionActions from '@material-ui/core/AccordionActions';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { layersDataProvider } from "../../services/LayersDataProvider.servics";
import { httpManager } from '../../services/HttpManager';
import { Input } from '@material-ui/core';

class AddLayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layers: {},
            selectedLayer: {},
            inputDescriptionValue: "Description here"
        }

        layersDataProvider.getAllLayers().then(result => {
            this.setState({ layers: result });
        });

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({inputDescriptionValue: event.target.value});
      }

    render() {
        return (
            <div id="add-layer">

                <div onClick={() => this.props.onOptionClicked(constants.optionNames.AddLayer)}>

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
                    <Button onClick={() => console.log(this.state.selectedLayer + "" + this.state.inputDescriptionValue)}>Send</Button>
                </div>
                <textarea value={this.state.inputDescriptionValue} onChange={this.handleChange}></textarea>          

            </div>
        ) 
    }

    sendLayerDescription() {
        httpManager.post(constants.routes.layers.addDescription, {BODY: "--------------"}).then(r => {})
    }
}
export default AddLayer;