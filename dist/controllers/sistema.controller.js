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
const sistema_service_1 = __importDefault(require("../services/sistema.service"));
const error_handle_1 = require("../utils/error.handle");
const getSistema = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sistema = yield sistema_service_1.default.getSistema();
        return res.send(sistema);
    }
    catch (error) {
        console.log(error);
        return (0, error_handle_1.handleHttp)(res, 500, "ERROR GET SISTEMA");
    }
});
const createsistema_riego = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Sistema = yield sistema_service_1.default.createsistema_riego(req.body);
        res.send(Sistema);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 500, "ERROR TO CREATE SISTEMA");
    }
});
exports.default = {
    getSistema,
    createsistema_riego
};
