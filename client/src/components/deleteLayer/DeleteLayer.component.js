import React from 'react';
import { constants } from "../../constants/constants";
import "./DeleteLayer.style.scss";
import Button from '@material-ui/core/Button';
import AccordionActions from '@material-ui/core/AccordionActions';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { layersDataProvider } from "../../services/LayersDataProvider.servics";
import { httpManager } from '../../services/HttpManager';

class DeleteLayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layers: {},
            selectedLayer: undefined
        }

        layersDataProvider.getAllLayers().then(result => {
            this.setState({ layers: result });
        });
    }

    render() {
        return (
            <div id="delete-layer" onClick={() => this.props.onOptionClicked(constants.optionNames.DeleteLayer)}>

            <AccordionActions>
            <Autocomplete
                id="combo-box-demo"
                options={this.state.layers}
                onChange={(event, value) => this.setState({ selectedLayer: value })}
                getOptionLabel={(option) => option.displayName}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Select layer" variant="outlined" />}
                />
            </AccordionActions>
            {this.state.selectedLayer ?
                <div id="selected-description">
                    <span className="title">Layer to delete</span>
                    <span className="name">{this.state.selectedLayer.displayName}</span>
                    <span className="description">{this.state.selectedLayer.description}</span>
                </div>
                : ""
            }
                            
            <Button onClick={() => this.deleteLayerDescription(this.state.selectedLayer)}>Delete</Button>
            </div>
        ) 
    }

    deleteLayerDescription(layerId) {
        if (!layerId) return;
        httpManager.delete(FormatString(constants.routes.layers.deleteDescription, layerId));
    }
}
export default DeleteLayer;


export const FormatString = (string, ...args) => {
    for (let i = 0; i < args.length; i++) {
        string.replace(`${i}`, args[i]);
    }
    return string;
}