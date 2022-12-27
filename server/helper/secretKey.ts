import { Secret } from "jsonwebtoken";

export const accessTokenSecret: Secret =
    process.env.ACCESS_TOKEN_SECRET || "hiqudhqwudhzjxfh123fih82";
export const refreshTokenSecret: Secret =
    process.env.REFRESH_TOKEN_SECRET || "asdfhjgewvkasdniwni123fi";
