import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import Text from './misc/Text.js';
class LiveChat extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.header = Parser.parseItem(data.header);
        this.initial_display_state = data.initialDisplayState;
        this.continuation = (_b = (_a = data.continuations[0]) === null || _a === void 0 ? void 0 : _a.reloadContinuationData) === null || _b === void 0 ? void 0 : _b.continuation;
        this.client_messages = {
            reconnect_message: new Text(data.clientMessages.reconnectMessage),
            unable_to_reconnect_message: new Text(data.clientMessages.unableToReconnectMessage),
            fatal_error: new Text(data.clientMessages.fatalError),
            reconnected_message: new Text(data.clientMessages.reconnectedMessage),
            generic_error: new Text(data.clientMessages.genericError)
        };
        this.is_replay = !!data.isReplay;
    }
}
LiveChat.type = 'LiveChat';
export default LiveChat;
//# sourceMappingURL=LiveChat.js.map