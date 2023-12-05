"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SensoresSchema = new mongoose_1.Schema({
    sens_temp: {
        type: Number,
        required: true
    },
    sens_hum: {
        type: Number,
        required: true
    },
    sens_soilh: {
        type: Number,
        required: true
    },
    place: {
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true
});
const SensoresModel = (0, mongoose_1.model)("sensores", SensoresSchema);
exports.default = SensoresModel;
