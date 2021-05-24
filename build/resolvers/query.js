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
const query = {
    Query: {
        seasonsList(_, __, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield dataSources.seasons.getSeasons().then((data) => data.MRData.SeasonTable.Seasons);
            });
        },
        racesByYear(_, { year }, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield dataSources.races.getYear(year).then((data) => data.MRData.RaceTable.Races);
            });
        },
        raceSelect(_, { year, round }, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield dataSources.races.getYearRound(year, round).then((data) => data.MRData.RaceTable.Races[0]);
            });
        },
        historyDrivers(_, { pageElements, page }, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield dataSources.drivers.getDrivers(pageElements, page).then((data) => data.MRData.DriverTable.Drivers);
            });
        },
        driversYear(_, { year }, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield dataSources.drivers.getDriversByYear(year).then((data) => data.MRData.DriverTable.Drivers);
            });
        },
        driversYearAndRound(_, { year, round }, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield dataSources.drivers.getDriversByYearAndRound(year, round).then((data) => data.MRData.DriverTable.Drivers);
            });
        },
        driverSelect(_, { id }, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield dataSources.drivers.getDriver(id).then((data) => data.MRData.DriverTable.Drivers[0]);
            });
        },
        seasonPilotsRanking(_, { year }, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield dataSources.drivers.getSeasonsPilotsRanking(year).then((data) => data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
            });
        },
        historyCircuits(_, { year, round }, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield dataSources.circuits.getCircuits(year, round).then((data) => data.MRData.CircuitTable.Circuits);
            });
        },
        circuitSelect(_, { id }, { dataSources }) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield dataSources.circuits.getCircuit(id).then((data) => data.MRData.CircuitTable.Circuits[0]);
            });
        }
    }
};
exports.default = query;
