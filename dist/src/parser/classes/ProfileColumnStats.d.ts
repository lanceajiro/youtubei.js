import { type RawNode } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';
export default class ProfileColumnStats extends YTNode {
    static type: string;
    items: ObservedArray<YTNode>;
    constructor(data: RawNode);
    get contents(): ObservedArray<YTNode>;
}
