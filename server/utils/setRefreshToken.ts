import { Response } from "express";

export default function setRefreshToken(res: Response, refreshToken: string) {
    res.cookie("refreshToken", refreshToken, { httpOnly: true });
}
