import { Memo } from '../parser/helpers.js';
import type { EmojiRun, TextRun } from '../parser/misc.js';
import type { FetchFunction } from '../types/PlatformShim.js';
import type PlatformShim from '../types/PlatformShim.js';
export declare class Platform {
    #private;
    static load(platform: PlatformShim): void;
    static get shim(): PlatformShim;
}
export declare class InnertubeError extends Error {
    date: Date;
    version: string;
    info?: any;
    constructor(message: string, info?: any);
}
export declare class ParsingError extends InnertubeError {
}
export declare class MissingParamError extends InnertubeError {
}
export declare class OAuthError extends InnertubeError {
}
export declare class PlayerError extends Error {
}
export declare class SessionError extends Error {
}
export declare class ChannelError extends Error {
}
/**
 * Compares given objects. May not work correctly for
 * objects with methods.
 */
export declare function deepCompare(obj1: any, obj2: any): boolean;
/**
 * Finds a string between two delimiters.
 * @param data - the data.
 * @param start_string - start string.
 * @param end_string - end string.
 */
export declare function getStringBetweenStrings(data: string, start_string: string, end_string: string): string | undefined;
export declare function escapeStringRegexp(input: string): string;
export type DeviceCategory = 'mobile' | 'desktop';
/**
 * Returns a random user agent.
 * @param type - mobile | desktop
 */
export declare function getRandomUserAgent(type: DeviceCategory): string;
/**
 * Generates an authentication token from a cookies' sid.
 * @param sid - Sid extracted from cookies
 */
export declare function generateSidAuth(sid: string): Promise<string>;
/**
 * Generates a random string with the given length.
 *
 */
export declare function generateRandomString(length: number): string;
/**
 * Converts time (h:m:s) to seconds.
 * @returns seconds
 */
export declare function timeToSeconds(time: string): number;
export declare function concatMemos(...iterables: Array<Memo | undefined>): Memo;
export declare function throwIfMissing(params: object): void;
export declare function hasKeys<T extends object, R extends (keyof T)[]>(params: T, ...keys: R): params is Exclude<T, R[number]> & Required<Pick<T, R[number]>>;
export declare function streamToIterable(stream: ReadableStream<Uint8Array>): AsyncGenerator<Uint8Array, void, unknown>;
export declare const debugFetch: FetchFunction;
export declare function u8ToBase64(u8: Uint8Array): string;
export declare function base64ToU8(base64: string): Uint8Array;
export declare function isTextRun(run: TextRun | EmojiRun): run is TextRun;
