"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sensores_service_1 = __importDefault(require("../services/sensores.service"));
const error_handle_1 = require("../utils/error.handle");
const axios = require('axios');
const getSensores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sensores = yield sensores_service_1.default.getSensores();
        return res.send(sensores);
    }
    catch (error) {
        console.log(error);
        return (0, error_handle_1.handleHttp)(res, 500, "ERROR GET SENSORES");
    }
});
const createSensores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sensor = req.body;
        const createdSensor = yield sensores_service_1.default.createSensores(sensor);
        res.send(createdSensor);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 500, "ERROR TO CREATE SENSORES");
    }
});
exports.default = {
    getSensores,
    createSensores
};
