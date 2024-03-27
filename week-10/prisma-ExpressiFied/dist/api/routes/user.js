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
exports.userRouter = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.get("/", (req, res) => {
    console.log("GET /user");
});
userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId, password, email, firstName, lastName, phone } = req.body;
    try {
        const existingUser = yield client.user.findUnique({
            where: {
                memberId
            }
        });
        if (existingUser) {
            res.status(400).json({
                message: "User already exists"
            });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const newUser = yield client.user.create({
            data: {
                memberId,
                hashedPassword,
                email,
                firstName,
                lastName,
                phone
            }
        });
        res.status(201).json(newUser);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
    finally {
        client.$disconnect();
    }
    // check if username is already taken
    // if it is, return 400
    // if not, create user
    // hash password
    // save user to Database
    // return 201
}));
userRouter.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId, password } = req.body;
    const { authorization } = req.headers;
    try {
        // Optional section!
        // if(!authorization){
        //    console.log("No Auth found!");
        // }else{
        //     const token = authorization.split(" ")[1];
        //     const decoded = await jwt.verify(token, 'secret');
        //     if(!decoded){
        //         console.log(decoded);
        //     }
        // }
        const user = yield client.user.findUnique({
            where: {
                memberId
            }
        });
        if (!user) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.hashedPassword);
        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }
        const token = jsonwebtoken_1.default.sign({ data: user.hashedPassword }, 'secret', { expiresIn: '1h' });
        res.status(200).json({
            message: "Login Successful",
            jwtToken: token
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
    finally {
        client.$disconnect();
    }
}));
