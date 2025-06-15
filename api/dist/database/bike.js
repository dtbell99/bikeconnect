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
exports.insertBike = insertBike;
exports.updateBike = updateBike;
exports.queryBikeList = queryBikeList;
const client_1 = require("./client");
function insertBike(bike, owner) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = (0, client_1.getClient)();
            client.connect();
            console.log("insertBike");
            const result = yield client.query("insert into bike (brand, model, size, frame_material, owner, updated) values ($1, $2, $3, $4, $5, $6) RETURNING id", [bike.brand, bike.model, bike.size, bike.frameMaterial, owner, new Date()]);
            return result;
        }
        catch (err) {
            console.error(err);
        }
        finally {
            if (client)
                client.end();
        }
    });
}
function updateBike(bike, owner) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = (0, client_1.getClient)();
            client.connect();
            console.log("insertBike");
            const result = yield client.query("update bike set brand=$1, model=$2, size=$3, frame_material=$4 where id=$5 and owner=$6", [bike.brand, bike.model, bike.size, bike.frameMaterial, bike.id, owner]);
            return result;
        }
        catch (err) {
            console.error(err);
        }
        finally {
            if (client)
                client.end();
        }
    });
}
function queryBikeList(owner) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = (0, client_1.getClient)();
            client.connect();
            console.log("queryBikeList");
            const bikeList = yield client.query("select * from bike where owner = $1", [
                owner,
            ]);
            return bikeList;
        }
        catch (err) {
            console.error(err);
        }
        finally {
            if (client)
                client.end();
        }
    });
}
