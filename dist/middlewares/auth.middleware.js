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
require("dotenv/config");
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const moment_1 = __importDefault(require("moment"));
const error_handle_1 = require("../utils/error.handle");
const secret = process.env.SECRET_JWT || '';
const ensureAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.headers.authorization) {
        return (0, error_handle_1.handleHttp)(res, 403, 'AUTHORIZATION ERROR');
    }
    const token = req.headers.authorization.replace(/['"]+/g, '');
    let payload;
    try {
        payload = jwt_simple_1.default.decode(token, secret);
        if (payload.exp <= (0, moment_1.default)().unix()) {
            return (0, error_handle_1.handleHttp)(res, 401, 'AUTHORIZATION TOKEN EXPIRED');
        }
    }
    catch (error) {
        return (0, error_handle_1.handleHttp)(res, 401, 'INVALID AUTHORIZATION TOKEN');
    }
    req.user = payload;
    next();
});
exports.default = ensureAuth;
