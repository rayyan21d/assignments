"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const user_1 = require("./routes/user");
const apiRouter = (0, express_1.Router)();
exports.apiRouter = apiRouter;
apiRouter.use("/user", user_1.userRouter);
