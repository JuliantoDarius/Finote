import jwt from "jsonwebtoken";

type JWTDataType = {
    [key: string]: string;
};

export default function setJWTToken(
    data: JWTDataType,
    secretToken: string,
    expireTime?: string
) {
    return jwt.sign(data, secretToken, {
        expiresIn: expireTime || "14d",
    });
}
