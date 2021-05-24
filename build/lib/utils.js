"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationOptions = exports.roundCheck = exports.checkYear = exports.getWikipediaMobileUrl = void 0;
function getWikipediaMobileUrl(url) {
    return (url !== undefined) ? url.replace('wikipedia', 'm.wikipedia') : '';
}
exports.getWikipediaMobileUrl = getWikipediaMobileUrl;
function checkYear(year) {
    const currentYear = new Date().getFullYear();
    if (isNaN(+year) || +year < 1950 || +year > currentYear) {
        return String(currentYear);
    }
    return year;
}
exports.checkYear = checkYear;
function roundCheck(round) {
    if (round >= 100) {
        return 1;
    }
    return round;
}
exports.roundCheck = roundCheck;
function paginationOptions(pageElements, page) {
    const offset = (page - 1) * pageElements;
    const limit = pageElements;
    return `limit=${limit}&offset=${offset}`;
}
exports.paginationOptions = paginationOptions;
