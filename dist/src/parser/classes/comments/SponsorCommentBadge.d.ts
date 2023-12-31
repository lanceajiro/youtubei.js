import Thumbnail from '../misc/Thumbnail.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
export default class SponsorCommentBadge extends YTNode {
    static type: string;
    custom_badge: Thumbnail[];
    tooltip: string;
    constructor(data: RawNode);
}
