import { timeToSeconds } from '../../utils/Utils.js';
import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import Menu from './menus/Menu.js';
import MetadataBadge from './MetadataBadge.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
class CompactVideo extends YTNode {
    constructor(data) {
        super();
        this.id = data.videoId;
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail) || null;
        if (Reflect.has(data, 'richThumbnail')) {
            this.rich_thumbnail = Parser.parse(data.richThumbnail);
        }
        this.title = new Text(data.title);
        this.author = new Author(data.longBylineText, data.ownerBadges, data.channelThumbnail);
        this.view_count = new Text(data.viewCountText);
        this.short_view_count = new Text(data.shortViewCountText);
        this.published = new Text(data.publishedTimeText);
        this.badges = Parser.parseArray(data.badges, MetadataBadge);
        this.duration = {
            text: new Text(data.lengthText).toString(),
            seconds: timeToSeconds(new Text(data.lengthText).toString())
        };
        this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.menu = Parser.parseItem(data.menu, Menu);
    }
    get best_thumbnail() {
        return this.thumbnails[0];
    }
    get is_fundraiser() {
        return this.badges.some((badge) => badge.label === 'Fundraiser');
    }
    get is_live() {
        return this.badges.some((badge) => {
            if (badge.style === 'BADGE_STYLE_TYPE_LIVE_NOW' || badge.label === 'LIVE')
                return true;
        });
    }
    get is_new() {
        return this.badges.some((badge) => badge.label === 'New');
    }
    get is_premiere() {
        return this.badges.some((badge) => badge.style === 'PREMIERE');
    }
}
CompactVideo.type = 'CompactVideo';
export default CompactVideo;
//# sourceMappingURL=CompactVideo.js.map