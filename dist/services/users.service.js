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
const user_model_1 = __importDefault(require("../models/user.model"));
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.find();
    return users;
});
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield user_model_1.default.create(user);
    return userData;
});
const isMatchPassword = (user, password) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        user.comparePassword(password, function (err, isMatch) {
            if (err)
                reject(err);
            resolve(isMatch);
        });
    });
});
const login = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ username: credentials.username });
    if (!user) {
        return { error: true, message: 'USER NOT FOUND' };
    }
    const matchPassword = yield isMatchPassword(user, credentials.password);
    if (matchPassword) {
        return { error: false, user };
    }
    return { error: true, message: 'INVALID CREDENTIALS' };
});
exports.default = {
    getUsers,
    createUser,
    login
};
