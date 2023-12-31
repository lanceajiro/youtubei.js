import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
export default class LiveChatProductItem extends YTNode {
    static type: string;
    title: string;
    accessibility_title: string;
    thumbnail: Thumbnail[];
    price: string;
    vendor_name: string;
    from_vendor_text: string;
    information_button: YTNode;
    endpoint: NavigationEndpoint;
    creator_message: string;
    creator_name: string;
    author_photo: Thumbnail[];
    information_dialog: YTNode;
    is_verified: boolean;
    creator_custom_message: Text;
    constructor(data: RawNode);
}
