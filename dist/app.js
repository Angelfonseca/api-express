"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./config/db"));
//import routes
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const sistema_routes_1 = __importDefault(require("./routes/sistema.routes"));
const sensores_routes_1 = __importDefault(require("./routes/sensores.routes"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.disable('x-powered-by');
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
// root route
app.get('/', (req, res) => {
    res.send('api works');
});
app.use('/api/users', users_routes_1.default);
app.use('/api/sistemas', sistema_routes_1.default);
app.use('/api/sensores', sensores_routes_1.default);
(0, db_1.default)().then(() => console.log(`database connection is ready!`));
app.listen(PORT, () => console.log(`api is listening on port ${PORT}`));
