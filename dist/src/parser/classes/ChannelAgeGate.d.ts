import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Button from './Button.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
export default class ChannelAgeGate extends YTNode {
    static type: string;
    channel_title: string;
    avatar: Thumbnail[];
    header: Text;
    main_text: Text;
    sign_in_button: Button | null;
    secondary_text: Text;
    constructor(data: RawNode);
}
