"use strict";
exports.__esModule = true;
var base65536_1 = require("base65536");
var ab2str = require('arraybuffer-to-string');
var dataConverter = function (data) {
    var convertedData;
    switch (typeof data) {
        case "string":
            convertedData = data;
            break;
        case "number":
        case "object":
        case "boolean":
            convertedData = JSON.stringify(data);
            break;
        default:
            throw new Error("data of type " + typeof data + " is not supported");
    }
    return Buffer.from(convertedData);
};
var encodeHelper = function (data) {
    return base65536_1.encode(dataConverter(data));
};
var decodeHelper = function (encodedData) {
    return (ab2str(base65536_1.decode(encodedData)));
};
module.exports = {
    rawDecode: base65536_1.decode,
    rawEncode: base65536_1.encode,
    decode: decodeHelper,
    encode: encodeHelper
};
