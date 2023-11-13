import { Sensor } from "../interfaces/sensores.interface";
import SensoresModel from "../models/sensores.model";
import { handleHttp } from "../utils/error.handle";

const getSensores = async () => {
    const sensores = await SensoresModel.find();
    return sensores;
  };
const createSensores = async (sensor: Sensor) => {
    const sensorData = await SensoresModel.create(sensor)
    return sensorData;
  }
  export default {
    getSensores,
    createSensores
  };