
import axios, { AxiosResponse } from 'axios';
import SensoresModel from "../models/sensores.model";
import { Sensor } from "../interfaces/sensores.interface";


const getSensores = async () => {
  const sensores = await SensoresModel.find();
  return sensores;
};

const createSensores = async (sensor: Sensor) => {
  try {
    const sensorData = await SensoresModel.create(sensor);
    return sensorData;
  } catch (error) {
    console.error('Error creating sensor data:', error);
    throw error; // Rethrow the error or handle it accordingly
  }
};


export default {
  getSensores,
  createSensores
};
