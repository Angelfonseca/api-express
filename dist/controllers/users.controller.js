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
const users_service_1 = __importDefault(require("../services/users.service"));
const error_handle_1 = require("../utils/error.handle");
const jwt_util_1 = __importDefault(require("../utils/jwt.util"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield users_service_1.default.getUsers();
        res.send(users);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 500, "ERROR GET USERS");
    }
});
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_service_1.default.createUser(req.body);
        res.send(user);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, 500, "ERROR TO CREATE USERS");
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_service_1.default.login(req.body);
        if (user.error) {
            return (0, error_handle_1.handleHttp)(res, 500, user.message || 'ERROR TO LOGIN');
        }
        const data = {
            user: user.user,
            token: yield jwt_util_1.default.createToken(user.user)
        };
        res.send(data);
    }
    catch (error) {
        console.log(error);
        (0, error_handle_1.handleHttp)(res, 500, "ERROR TO LOGIN USER");
    }
});
exports.default = {
    getUsers,
    createUser,
    login
};
