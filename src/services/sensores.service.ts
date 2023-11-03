import { Sensores } from "../interfaces/sensores.interface";
import SensoresModel from "../models/sensores.model";
import { handleHttp } from "../utils/error.handle";

const getSensores = async () => {
    const sensores = await SensoresModel.find();
    return sensores;
  };
const createSensores = async (sensores: Sensores) => {
    const sensoresData = await SensoresModel.create(sensores)
    return sensoresData;
  }
  export default {
    getSensores,
    createSensores
  };