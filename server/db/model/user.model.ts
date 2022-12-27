import { Schema, model } from "mongoose";

type UserSchemaType = {
    name: string;
    username: string;
    password: string;
    refreshToken: string;
};

const UserSchema = new Schema<UserSchemaType>({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    refreshToken: { type: String, required: true },
});

const User = model<UserSchemaType>("User", UserSchema);
export default User;
