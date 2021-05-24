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
exports.CircuitsData = void 0;
const data_source_1 = require("./data-source");
const utils_1 = require("../lib/utils");
class CircuitsData extends data_source_1.F1 {
    constructor() {
        super();
    }
    getCircuits(pageElements = -1, page = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            if (pageElements === -1) {
                return yield this.get('circuits.json?limit=1000', {
                    cacheOptions: { ttl: 60 }
                });
            }
            return yield this.get(`circuits.json?${utils_1.paginationOptions(pageElements, page)}`, {
                cacheOptions: { ttl: 60 }
            });
        });
    }
    getCircuit(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get(`circuits/${id}.json`, {
                cacheOptions: { ttl: 60 }
            });
        });
    }
}
exports.CircuitsData = CircuitsData;
