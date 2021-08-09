export const constants = {
    optionNames: {
        addLayer: "addLayer",
    
    },
    routes: {
        layers: {
            getAll: "getAll",
            getAllDescripion: "getAllLayersDescripion",
            addDescription: "addLayerDescription",
            editDescription: "editLayerDescription",
            deleteDescription: "deleteLayerDescription",
            getDescriptionById: "getLayerDescriptionById"
        }
    }
}

const getUrl = window.location;
export const baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];