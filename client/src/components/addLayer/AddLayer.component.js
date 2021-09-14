import React from 'react';
import { constants } from "../../constants/constants";
import "./AddLayer.style.scss";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { layersDataProvider } from "../../services/LayersDataProvider.servics";
import { httpManager } from '../../services/HttpManager';

class AddLayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layers: {},
            selectedLayer: null,
            inputDescriptionValue: null
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
                <div className="list-content" onClick={() => this.props.onOptionClicked(constants.optionNames.AddLayer)}>
                <Autocomplete
                    className="autocomplete"
                    id="combo-box-demo"
                    options={this.state.layers}
                    onChange={(event, value) => this.setState({ selectedLayer: value })}
                    getOptionLabel={(option) => option.displayName}
                    size="small"
                    renderInput={(params) => <TextField {...params} label="רשימת שכבות" variant="outlined" />}
                    />
                    <Button 
                        disabled={!this.state.inputDescriptionValue || !this.state.selectedLayer} 
                        className="action-buttons" 
                        onClick={() => this.sendLayerDescription()}>הוספה</Button>
                </div>
                <textarea 
                    disabled={!this.state.selectedLayer} 
                    className="description-text-area" 
                    value={this.state.inputDescriptionValue} 
                    placeholder="תיאור שכבה" 
                    onChange={this.handleChange}>
                </textarea>          
            </div>
        ) 
    }

    sendLayerDescription() {
        httpManager.post(constants.routes.layers.addDescription, 
            {   
                id: this.state.selectedLayer.id,
                description: this.state.selectedLayer.description,
                displayName: this.state.selectedLayer.displayName
            }).then(r => {})
    }
}
export default AddLayer;