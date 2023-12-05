"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const moment_1 = __importDefault(require("moment"));
const secret = process.env.SECRET_JWT || '';
const createToken = (obj) => {
    let payload = {
        id: obj.id,
        username: obj.username,
        iat: (0, moment_1.default)().unix(),
        exp: (0, moment_1.default)().add(400, 'days').unix()
    };
    return jwt_simple_1.default.encode(payload, secret);
};
const jwtMethods = {
    createToken
};
exports.default = jwtMethods;
