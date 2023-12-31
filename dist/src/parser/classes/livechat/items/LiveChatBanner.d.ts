import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import LiveChatBannerHeader from './LiveChatBannerHeader.js';
export default class LiveChatBanner extends YTNode {
    static type: string;
    header: LiveChatBannerHeader | null;
    contents: YTNode;
    action_id: string;
    viewer_is_creator: boolean;
    target_id: string;
    is_stackable: boolean;
    background_type: string;
    constructor(data: RawNode);
}
