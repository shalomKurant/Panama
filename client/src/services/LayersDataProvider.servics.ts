import { constants } from "../constants/constants";
import { httpManager } from "./HttpManager";
import { ILayer } from "../../common/interfaces/ILayer";
class LayersDataProvider {
    private allLayers: ILayer[] = [];
    constructor() {}

    public async getAllLayers(): Promise<ILayer[]> {
        this.allLayers = await this.requestAllLayers();
        return this.allLayers;
    }

    private async requestAllLayers(): Promise<ILayer[]> {
        return [
            {
                displayName: "Layer 1",
                id: "id 1"
            },
            {
                displayName: "Layer 2",
                id: "id 2"
            },
            {
                displayName: "Layer 3",
                id: "id 3"
            },
        ]
        const layers: ILayer[] = await httpManager.get(constants.routes.layers.getAll)
        return layers;
    }

    private async getLayersDescription() {
        const layers: ILayer[] = await httpManager.get(constants.routes.layers.getAllDescripion)
        return layers;
    }
}

const layersDataProvider = new LayersDataProvider();
export {layersDataProvider}