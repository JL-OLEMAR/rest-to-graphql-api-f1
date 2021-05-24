"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.F1 = void 0;
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class F1 extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://ergast.com/api/f1/';
    }
}
exports.F1 = F1;
