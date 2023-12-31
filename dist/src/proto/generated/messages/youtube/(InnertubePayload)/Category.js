import { tsValueToJsonValueFns, jsonValueToTsValueFns, } from "../../../runtime/json/scalar.js";
import { default as serialize, } from "../../../runtime/wire/serialize.js";
import { tsValueToWireValueFns, wireValueToTsValueFns, } from "../../../runtime/wire/scalar.js";
import { default as deserialize, } from "../../../runtime/wire/deserialize.js";
export function getDefaultValue() {
    return {
        id: 0,
    };
}
export function createValue(partialValue) {
    return Object.assign(Object.assign({}, getDefaultValue()), partialValue);
}
export function encodeJson(value) {
    const result = {};
    if (value.id !== undefined)
        result.id = tsValueToJsonValueFns.int32(value.id);
    return result;
}
export function decodeJson(value) {
    const result = getDefaultValue();
    if (value.id !== undefined)
        result.id = jsonValueToTsValueFns.int32(value.id);
    return result;
}
export function encodeBinary(value) {
    const result = [];
    if (value.id !== undefined) {
        const tsValue = value.id;
        result.push([1, tsValueToWireValueFns.int32(tsValue)]);
    }
    return serialize(result);
}
export function decodeBinary(binary) {
    const result = getDefaultValue();
    const wireMessage = deserialize(binary);
    const wireFields = new Map(wireMessage);
    field: {
        const wireValue = wireFields.get(1);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.int32(wireValue);
        if (value === undefined)
            break field;
        result.id = value;
    }
    return result;
}
//# sourceMappingURL=Category.js.map