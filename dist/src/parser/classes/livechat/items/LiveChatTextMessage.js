import { YTNode } from '../../../helpers.js';
import Parser from '../../../index.js';
import Button from '../../Button.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import Author from '../../misc/Author.js';
import Text from '../../misc/Text.js';
export class LiveChatMessageBase extends YTNode {
    constructor(data) {
        super();
        this.message = new Text(data.message);
        this.inline_action_buttons = Parser.parseArray(data.inlineActionButtons, Button);
        this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
        this.id = data.id;
    }
}
LiveChatMessageBase.type = 'LiveChatMessageBase';
class LiveChatTextMessage extends LiveChatMessageBase {
    constructor(data) {
        super(data);
        this.author = new Author(data.authorName, data.authorBadges, data.authorPhoto, data.authorExternalChannelId);
        this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    }
}
LiveChatTextMessage.type = 'LiveChatTextMessage';
export default LiveChatTextMessage;
//# sourceMappingURL=LiveChatTextMessage.js.map