import { Request, Response } from 'express';
import sensoresService from '../services/sensores.service';
import { handleHttp } from "../utils/error.handle";
import { Sensor } from '../interfaces/sensores.interface';
const axios = require('axios');

const getSensores = async (req: Request, res: Response) => {
    try {
      const sensores = await sensoresService.getSensores();
      return res.send(sensores);
    } catch (error) {
      console.log(error)
      return handleHttp(res, 500, "ERROR GET SENSORES");
    }
  }
  const createSensores = async (req: Request, res: Response) => {
    try {
      const sensor = req.body as Sensor;
      const createdSensor = await sensoresService.createSensores(sensor);
  
      res.send(createdSensor);
    } catch (error) {
      handleHttp(res, 500, "ERROR TO CREATE SENSORES");
    }
  }
  
export default {
    getSensores,
    createSensores
};