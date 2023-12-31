import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import Button from './Button.js';
import Text from './misc/Text.js';
export default class UpsellDialog extends YTNode {
    static type: string;
    message_title: Text;
    message_text: Text;
    action_button: Button | null;
    dismiss_button: Button | null;
    is_visible: boolean;
    constructor(data: RawNode);
}
