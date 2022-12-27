"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setRefreshToken(res, refreshToken) {
    res.cookie("refreshToken", refreshToken, { httpOnly: true });
}
exports.default = setRefreshToken;
