"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = auth;
const env = process.env.ENVIRONMENT;
function auth(req, res, next) {
    if (env === "local") {
        res.locals.owner = process.env.OWNER;
        next();
        return;
    }
    res.status(401).send("Unauthorized");
}
