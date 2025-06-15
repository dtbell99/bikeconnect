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
const express_1 = __importDefault(require("express"));
const bikeservice_1 = require("../service/bikeservice");
const authorizer_1 = require("../middleware/authorizer");
const router = express_1.default.Router();
router.use(authorizer_1.auth);
router.get("/", (req, res) => {
    res.send("hello");
});
router.post("/save", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = req.body;
    const saved = yield (0, bikeservice_1.saveBike)(bike, res.locals.owner);
    if (saved) {
        res.json({ success: true, id: bike.id });
    }
    else {
        res.status(500).json({ success: false });
    }
}));
router.get("/list", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikeList = yield (0, bikeservice_1.getBikeList)(res.locals.owner);
    res.json(bikeList);
}));
router.post("/save", (req, res) => {
    res.json({ success: false });
});
exports.default = router;
