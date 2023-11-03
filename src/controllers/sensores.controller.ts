import { Request, Response } from 'express';
import sensoresService from '../services/sensores.service';
import { handleHttp } from "../utils/error.handle";
import jwtService from '../utils/jwt.util';
import SensoresModel from '../models/sensores.model';

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
      const Sensores = await sensoresService.createSensores(req.body);
      res.send(Sensores);
    } catch (error) {
      handleHttp(res, 500, "ERROR TO CREATE SENSORES");
    }
  }
export default {
    getSensores,
    createSensores
};