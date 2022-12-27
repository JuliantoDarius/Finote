import { Request, Response } from "express";
import { accessTokenSecret, refreshTokenSecret } from "../helper/secretKey";
import jwt from "jsonwebtoken";
import setRefreshToken from "../utils/setRefreshToken";
import User from "../db/model/user.model";

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const accessToken = jwt.sign({ username, password }, accessTokenSecret, {
        expiresIn: "10m",
    });

    const refreshToken = jwt.sign({ username, password }, refreshTokenSecret, {
        expiresIn: "14d",
    });

    try {
        await User.updateOne({ username }, { refreshToken });
        setRefreshToken(res, refreshToken);
        res.json({ accessToken });
    } catch (err) {
        res.send(403).json({ msg: "Username atau password salah." });
    }
};

export const register = async (req: Request, res: Response) => {
    const { name, username, password, confirmPass } = req.body;

    const findUser = await User.findOne({ username });
    if (findUser != null)
        return res.send(403).json({ msg: "Username telah digunakan." });

    if (password !== confirmPass)
        return res.send(400).json({ msg: "Password tidak sama !" });

    const refreshToken = jwt.sign({ username, password }, refreshTokenSecret, {
        expiresIn: "14d",
    });

    try {
        await User.insertMany({ name, username, password, refreshToken });
        setRefreshToken(res, refreshToken);
        res.send(203).json({ msg: "Akun berhasil dibuat." });
    } catch (err) {
        res.send(400).json({ msg: "Terjadi kesalahan, silahkan coba lagi." });
    }
};
