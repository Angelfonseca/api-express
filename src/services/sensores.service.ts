
import axios, { AxiosResponse } from 'axios';
import SensoresModel from "../models/sensores.model";
import { Sensor } from "../interfaces/sensores.interface";


const getSensores = async () => {
  const sensores = await SensoresModel.find();
  return sensores;
};

const createSensores = async (sensor: Sensor) => {
  const sensorData = await SensoresModel.create(sensor);
  return sensorData;
};


export default {
  getSensores,
  createSensores
};
