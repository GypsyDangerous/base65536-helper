import { encode, decode } from "base65536";
const ab2str = require('arraybuffer-to-string')

const dataConverter = (data: any): Uint8Array => {
	let convertedData: string;

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
			throw new Error(`data of type ${typeof data} is not supported`);
	}

	return Buffer.from(convertedData);
};

const encodeHelper = (data: any): string => {
	return encode(dataConverter(data));
};

const decodeHelper = (encodedData: string): string => {
	return (ab2str(decode(encodedData)));
};

module.exports = {
	rawDecode: decode,
	rawEncode: encode,
	decode: decodeHelper,
	encode: encodeHelper,
};
