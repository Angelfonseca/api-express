"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sistema_controller_1 = __importDefault(require("../controllers/sistema.controller"));
const router = (0, express_1.Router)();
router.get('/', sistema_controller_1.default.getSistema);
router.post('/', sistema_controller_1.default.createsistema_riego);
exports.default = router;
