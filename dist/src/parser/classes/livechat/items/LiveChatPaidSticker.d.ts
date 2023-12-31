import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import Author from '../../misc/Author.js';
import Thumbnail from '../../misc/Thumbnail.js';
export default class LiveChatPaidSticker extends YTNode {
    static type: string;
    id: string;
    author: Author;
    money_chip_background_color: number;
    money_chip_text_color: number;
    background_color: number;
    author_name_text_color: number;
    sticker: Thumbnail[];
    purchase_amount: string;
    context_menu: NavigationEndpoint;
    menu_endpoint: NavigationEndpoint;
    timestamp: number;
    constructor(data: RawNode);
}
