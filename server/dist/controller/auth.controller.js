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
exports.register = exports.login = void 0;
const secretKey_1 = require("../helper/secretKey");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const setRefreshToken_1 = __importDefault(require("../utils/setRefreshToken"));
const user_model_1 = __importDefault(require("../db/model/user.model"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const accessToken = jsonwebtoken_1.default.sign({ username, password }, secretKey_1.accessTokenSecret, {
        expiresIn: "10m",
    });
    const refreshToken = jsonwebtoken_1.default.sign({ username, password }, secretKey_1.refreshTokenSecret, {
        expiresIn: "14d",
    });
    try {
        yield user_model_1.default.updateOne({ username }, { refreshToken });
        (0, setRefreshToken_1.default)(res, refreshToken);
        res.json({ accessToken });
    }
    catch (err) {
        res.send(403).json({ msg: "Username atau password salah." });
    }
});
exports.login = login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, username, password, confirmPass } = req.body;
    const findUser = yield user_model_1.default.findOne({ username });
    if (findUser != null)
        return res.send(403).json({ msg: "Username telah digunakan." });
    if (password !== confirmPass)
        return res.send(400).json({ msg: "Password tidak sama !" });
    const refreshToken = jsonwebtoken_1.default.sign({ username, password }, secretKey_1.refreshTokenSecret, {
        expiresIn: "14d",
    });
    try {
        yield user_model_1.default.insertMany({ name, username, password, refreshToken });
        (0, setRefreshToken_1.default)(res, refreshToken);
        res.send(203).json({ msg: "Akun berhasil dibuat." });
    }
    catch (err) {
        res.send(400).json({ msg: "Terjadi kesalahan, silahkan coba lagi." });
    }
});
exports.register = register;
