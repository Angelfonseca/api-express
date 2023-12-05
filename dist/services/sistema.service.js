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
const sistema_model_1 = __importDefault(require("../models/sistema.model"));
const getSistema = () => __awaiter(void 0, void 0, void 0, function* () {
    //con populate haces que traiga la relacion de la otra coleccion pueden ir n populates('aasdf').populate('asdfas)-.......
    const sistema = yield sistema_model_1.default.find().populate('user').populate('sensor');
    return sistema;
});
const createsistema_riego = (sistema_riego) => __awaiter(void 0, void 0, void 0, function* () {
    const sistemaData = yield sistema_model_1.default.create(sistema_riego);
    return sistemaData;
});
exports.default = {
    getSistema,
    createsistema_riego
};
