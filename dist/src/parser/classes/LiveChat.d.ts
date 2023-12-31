import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import Text from './misc/Text.js';
export default class LiveChat extends YTNode {
    static type: string;
    header: YTNode;
    initial_display_state: string;
    continuation: string;
    client_messages: {
        reconnect_message: Text;
        unable_to_reconnect_message: Text;
        fatal_error: Text;
        reconnected_message: Text;
        generic_error: Text;
    };
    is_replay: boolean;
    constructor(data: RawNode);
}
