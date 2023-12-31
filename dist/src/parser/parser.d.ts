import type { IParsedResponse, IRawResponse, RawData, RawNode } from './types/index.js';
import Format from './classes/misc/Format.js';
import type { ObservedArray, YTNodeConstructor, YTNode } from './helpers.js';
import { Memo, SuperParsedResult } from './helpers.js';
import * as YTNodes from './nodes.js';
import type { KeyInfo } from './generator.js';
import { Continuation, ItemSectionContinuation, SectionListContinuation, LiveChatContinuation, MusicPlaylistShelfContinuation, MusicShelfContinuation, GridContinuation, PlaylistPanelContinuation, ReloadContinuationItemsCommand } from './continuations.js';
export type ParserError = {
    classname: string;
} & ({
    error_type: 'typecheck';
    classdata: RawNode;
    expected: string | string[];
} | {
    error_type: 'parse';
    classdata: RawNode;
    error: unknown;
} | {
    error_type: 'mutation_data_missing';
} | {
    error_type: 'mutation_data_invalid';
    total: number;
    failed: number;
    titles: string[];
} | {
    error_type: 'class_not_found';
    key_info: KeyInfo;
} | {
    error_type: 'class_changed';
    key_info: KeyInfo;
    changed_keys: KeyInfo;
});
export type ParserErrorHandler = (error: ParserError) => void;
export declare function setParserErrorHandler(handler: ParserErrorHandler): void;
export declare function shouldIgnore(classname: string): boolean;
export declare function sanitizeClassName(input: string): string;
export declare function getParserByName(classname: string): YTNodeConstructor<YTNode>;
export declare function hasParser(classname: string): boolean;
export declare function addRuntimeParser(classname: string, ParserConstructor: YTNodeConstructor): void;
export declare function getDynamicParsers(): {
    [k: string]: YTNodeConstructor<YTNode>;
};
/**
 * Parses given InnerTube response.
 * @param data - Raw data.
 */
export declare function parseResponse<T extends IParsedResponse = IParsedResponse>(data: IRawResponse): T;
/**
 * Parses a single item.
 * @param data - The data to parse.
 * @param validTypes - YTNode types that are allowed to be parsed.
 */
export declare function parseItem<T extends YTNode, K extends YTNodeConstructor<T>[]>(data: RawNode | undefined, validTypes: K): InstanceType<K[number]> | null;
export declare function parseItem<T extends YTNode>(data: RawNode | undefined, validTypes: YTNodeConstructor<T>): T | null;
export declare function parseItem(data?: RawNode): YTNode;
/**
 * Parses an array of items.
 * @param data - The data to parse.
 * @param validTypes - YTNode types that are allowed to be parsed.
 */
export declare function parseArray<T extends YTNode, K extends YTNodeConstructor<T>[]>(data: RawNode[] | undefined, validTypes: K): ObservedArray<InstanceType<K[number]>>;
export declare function parseArray<T extends YTNode = YTNode>(data: RawNode[] | undefined, validType: YTNodeConstructor<T>): ObservedArray<T>;
export declare function parseArray(data: RawNode[] | undefined): ObservedArray<YTNode>;
/**
 * Parses an item or an array of items.
 * @param data - The data to parse.
 * @param requireArray - Whether the data should be parsed as an array.
 * @param validTypes - YTNode types that are allowed to be parsed.
 */
export declare function parse<T extends YTNode, K extends YTNodeConstructor<T>[]>(data: RawData, requireArray: true, validTypes?: K): ObservedArray<InstanceType<K[number]>> | null;
export declare function parse<T extends YTNode = YTNode>(data?: RawData, requireArray?: false | undefined, validTypes?: YTNodeConstructor<T> | YTNodeConstructor<T>[]): SuperParsedResult<T>;
export declare function parseC(data: RawNode): Continuation | null;
export declare function parseLC(data: RawNode): ItemSectionContinuation | SectionListContinuation | LiveChatContinuation | MusicPlaylistShelfContinuation | MusicShelfContinuation | GridContinuation | PlaylistPanelContinuation | null;
export declare function parseRR(actions: RawNode[]): ObservedArray<YTNodes.AppendContinuationItemsAction | ReloadContinuationItemsCommand>;
export declare function parseActions(data: RawData): SuperParsedResult<YTNode>;
export declare function parseFormats(formats: RawNode[]): Format[];
export declare function applyMutations(memo: Memo, mutations: RawNode[]): void;
