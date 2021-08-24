export const constants = {
    optionNames: {
        addLayer: "addLayer",
    
    },
    routes: {
        layers: {
            getAll: "layers/getAll",
            getAllDescripion: "layers/getAllLayersDescripion",
            addDescription: "layers/addLayerDescription",
            editDescription: "layers/editLayerDescription",
            deleteDescription: "layers/deleteLayerDescription/{0}",
            getDescriptionById: "layers/getLayerDescriptionById/{0}"
        }
    }
}

const getUrl = window.location;
export const baseUrl: string = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];