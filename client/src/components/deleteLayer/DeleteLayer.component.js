import React from 'react';
import { constants } from "../../constants/constants";
import "./DeleteLayer.style.scss";
import Button from '@material-ui/core/Button';
import AccordionActions from '@material-ui/core/AccordionActions';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { layersDataProvider } from "../../services/LayersDataProvider.servics";
import { httpManager } from '../../services/HttpManager';
import { FormatString } from '../../services/FormatString';

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
            <div id="delete-layer">
            <div className="list-content" onClick={() => this.props.onOptionClicked(constants.optionNames.DeleteLayer)}>
                <Autocomplete
                    id="combo-box-demo"
                    options={this.state.layers}
                    onChange={(event, value) => this.setState({ selectedLayer: value })}
                    getOptionLabel={(option) => option.displayName}
                    size="small"
                    renderInput={(params) => <TextField {...params} label="רשימת שכבות" variant="outlined" />}
                    />
            </div>
            {this.state.selectedLayer ?
                <div id="selected-description">
                    <span className="title">שכבה נבחרה למחיקה: </span>
                    &nbsp;
                    <span className="name">{this.state.selectedLayer.displayName}</span>
                    &nbsp;
                    <br/>
                    <span className="description">{this.state.selectedLayer.description}</span>
                </div>
                : ""
            }          
            <Button disabled={!this.state.selectedLayer} className="action-buttons" onClick={() => this.deleteLayerDescription(this.state.selectedLayer)}>מחיקה</Button>
            </div>
        ) 
    }

    deleteLayerDescription(layerId) {
        if (!layerId) return;
        httpManager.delete(FormatString(constants.routes.layers.deleteDescription, layerId));
    }
}
export default DeleteLayer;