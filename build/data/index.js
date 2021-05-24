"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSources = void 0;
const data_seasons_1 = require("./data-seasons");
const data_races_1 = require("./data-races");
const data_drivers_1 = require("./data-drivers");
const data_circuits_1 = require("./data-circuits");
exports.dataSources = {
    SeasonsData: data_seasons_1.SeasonsData,
    RacesData: data_races_1.RacesData,
    DriversData: data_drivers_1.DriversData,
    CircuitsData: data_circuits_1.CircuitsData
};
