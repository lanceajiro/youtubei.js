import { encodeJson as encodeJson_1, decodeJson as decodeJson_1, encodeBinary as encodeBinary_1, decodeBinary as decodeBinary_1, } from "./(MusicSearchFilter)/Filters.js";
import { WireType, } from "../../runtime/wire/index.js";
import { default as serialize, } from "../../runtime/wire/serialize.js";
import { default as deserialize, } from "../../runtime/wire/deserialize.js";
export function getDefaultValue() {
    return {
        filters: undefined,
    };
}
export function createValue(partialValue) {
    return Object.assign(Object.assign({}, getDefaultValue()), partialValue);
}
export function encodeJson(value) {
    const result = {};
    if (value.filters !== undefined)
        result.filters = encodeJson_1(value.filters);
    return result;
}
export function decodeJson(value) {
    const result = getDefaultValue();
    if (value.filters !== undefined)
        result.filters = decodeJson_1(value.filters);
    return result;
}
export function encodeBinary(value) {
    const result = [];
    if (value.filters !== undefined) {
        const tsValue = value.filters;
        result.push([2, { type: WireType.LengthDelimited, value: encodeBinary_1(tsValue) }]);
    }
    return serialize(result);
}
export function decodeBinary(binary) {
    const result = getDefaultValue();
    const wireMessage = deserialize(binary);
    const wireFields = new Map(wireMessage);
    field: {
        const wireValue = wireFields.get(2);
        if (wireValue === undefined)
            break field;
        const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
        if (value === undefined)
            break field;
        result.filters = value;
    }
    return result;
}
//# sourceMappingURL=MusicSearchFilter.js.map