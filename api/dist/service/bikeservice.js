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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBikeList = getBikeList;
exports.saveBike = saveBike;
const bike_1 = require("../database/bike");
function getBikeList(owner) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("getBikeList");
        const bikeList = yield (0, bike_1.queryBikeList)(owner);
        if (!bikeList || !bikeList.rows) {
            return [];
        }
        return bikeList.rows;
    });
}
function saveBike(bike, owner) {
    return __awaiter(this, void 0, void 0, function* () {
        let result;
        let saved = false;
        if (!bike.id) {
            result = yield (0, bike_1.insertBike)(bike, owner);
            if (result && result.rows && result.rows.length === 1) {
                bike.id = result.rows[0].id;
                saved = true;
            }
        }
        else {
            result = yield (0, bike_1.updateBike)(bike, owner);
            if (result)
                saved = true;
        }
        return saved;
    });
}
