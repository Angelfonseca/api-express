"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sistemaSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'user' },
    sensor: { type: mongoose_1.Schema.Types.ObjectId, ref: 'sensores' }
}, {
    timestamps: true
});
const SistemaModel = (0, mongoose_1.model)("sistema", sistemaSchema);
exports.default = SistemaModel;
