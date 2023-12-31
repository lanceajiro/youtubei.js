import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import MetadataBadge from './MetadataBadge.js';
import Menu from './menus/Menu.js';
import Text from './misc/Text.js';
export default class VideoPrimaryInfo extends YTNode {
    static type: string;
    title: Text;
    super_title_link?: Text;
    view_count: Text;
    short_view_count: Text;
    badges: ObservedArray<MetadataBadge>;
    published: Text;
    relative_date: Text;
    menu: Menu | null;
    constructor(data: RawNode);
}
