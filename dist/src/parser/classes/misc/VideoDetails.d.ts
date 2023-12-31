import Thumbnail from './Thumbnail.js';
import type { RawNode } from '../../index.js';
export default class VideoDetails {
    id: string;
    channel_id: string;
    title: string;
    duration: number;
    keywords: string[];
    is_owner_viewing: boolean;
    short_description: string;
    thumbnail: Thumbnail[];
    allow_ratings: boolean;
    view_count: number;
    author: string;
    is_private: boolean;
    is_live: boolean;
    is_live_content: boolean;
    is_upcoming: boolean;
    is_crawlable: boolean;
    is_post_live_dvr: boolean;
    constructor(data: RawNode);
}
