import { encodeJson as encodeJson_1, decodeJson as decodeJson_1, encodeBinary as encodeBinary_1, decodeBinary as decodeBinary_1, } from "./(GetCommentsSectionParams)/Context.js";
import { encodeJson as encodeJson_2, decodeJson as decodeJson_2, encodeBinary as encodeBinary_2, decodeBinary as decodeBinary_2, } from "./(GetCommentsSectionParams)/Params.js";
import { tsValueToJsonValueFns, jsonValueToTsValueFns, } from "../../runtime/json/scalar.js";
import { WireType, } from "../../runtime/wire/index.js";
import { default as serialize, } from "../../runtime/wire/serialize.js";
import { tsValueToWireValueFns, wireValueToTsValueFns, } from "../../runtime/wire/scalar.js";
import { default as deserialize, } from "../../runtime/wire/deserialize.js";
export function getDefaultValue() {
    return {
        ctx: undefined,
        unkParam: 0,
        params: undefined,
    };
}
export function createValue(partialValue) {
    return Object.assign(Object.assign({}, getDefaultValue()), partialValue);
}
export function encodeJson(value) {
    const result = {};
    if (value.ctx !== undefined)
        result.ctx = encodeJson_1(value.ctx);
    if (value.unkParam !== undefined)
        result.unkParam = tsValueToJsonValueFns.int32(value.unkParam);
    if (value.params !== undefined)
        result.params = encodeJson_2(value.params);
    return result;
}
export function decodeJson(value) {
    const result = getDefaultValue();
    if (value.ctx !== undefined)
        result.ctx = decodeJson_1(value.ctx);
    if (value.unkParam !== undefined)
        result.unkParam = jsonValueToTsValueFns.int32(value.unkParam);
    if (value.params !== undefined)
        result.params = decodeJson_2(value.params);
    return result;
}
export function encodeBinary(value) {
    const result = [];
    if (value.ctx !== undefined) {
        const tsValue = value.ctx;
        result.push([2, { type: WireType.LengthDelimited, value: encodeBinary_1(tsValue) }]);
    }
    if (value.unkParam !== undefined) {
        const tsValue = value.unkParam;
        result.push([3, tsValueToWireValueFns.int32(tsValue)]);
    }
    if (value.params !== undefined) {
        const tsValue = value.params;
        result.push([6, { type: WireType.LengthDelimited, value: encodeBinary_2(tsValue) }]);
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
        result.ctx = value;
    }
    field: {
        const wireValue = wireFields.get(3);
        if (wireValue === undefined)
            break field;
        const value = wireValueToTsValueFns.int32(wireValue);
        if (value === undefined)
            break field;
        result.unkParam = value;
    }
    field: {
        const wireValue = wireFields.get(6);
        if (wireValue === undefined)
            break field;
        const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
        if (value === undefined)
            break field;
        result.params = value;
    }
    return result;
}
//# sourceMappingURL=GetCommentsSectionParams.js.map