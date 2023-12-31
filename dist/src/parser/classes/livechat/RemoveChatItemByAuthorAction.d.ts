import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
export default class RemoveChatItemByAuthorAction extends YTNode {
    static type: string;
    external_channel_id: string;
    constructor(data: RawNode);
}
