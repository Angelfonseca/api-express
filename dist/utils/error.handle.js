"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const handleHttp = (res, code, error) => {
    res.status(code);
    res.send({ error });
};
exports.handleHttp = handleHttp;
