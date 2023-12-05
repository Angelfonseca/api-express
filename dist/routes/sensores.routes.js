"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sensores_controller_1 = __importDefault(require("../controllers/sensores.controller"));
const router = (0, express_1.Router)();
router.get('/', sensores_controller_1.default.getSensores);
router.post('/', sensores_controller_1.default.createSensores);
exports.default = router;
