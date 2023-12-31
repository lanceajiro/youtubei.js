import GuideEntry from './GuideEntry.js';
import type { RawNode } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';
export default class GuideCollapsibleEntry extends YTNode {
    static type: string;
    expander_item: GuideEntry | null;
    collapser_item: GuideEntry | null;
    expandable_items: ObservedArray<YTNode>;
    constructor(data: RawNode);
}
