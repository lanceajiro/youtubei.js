import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
export default class EmojiPickerCategory extends YTNode {
    static type: string;
    category_id: string;
    title: Text;
    emoji_ids: string[];
    image_loading_lazy: boolean;
    category_type: string;
    constructor(data: RawNode);
}
