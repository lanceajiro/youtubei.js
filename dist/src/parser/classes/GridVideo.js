import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Menu from './menus/Menu.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
class GridVideo extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        const length_alt = (_a = data.thumbnailOverlays.find((overlay) => overlay.hasOwnProperty('thumbnailOverlayTimeStatusRenderer'))) === null || _a === void 0 ? void 0 : _a.thumbnailOverlayTimeStatusRenderer;
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
        this.rich_thumbnail = Parser.parseItem(data.richThumbnail);
        this.published = new Text(data.publishedTimeText);
        this.duration = data.lengthText ? new Text(data.lengthText) : (length_alt === null || length_alt === void 0 ? void 0 : length_alt.text) ? new Text(length_alt.text) : null;
        this.author = data.shortBylineText && new Author(data.shortBylineText, data.ownerBadges);
        this.views = new Text(data.viewCountText);
        this.short_view_count = new Text(data.shortViewCountText);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.menu = Parser.parseItem(data.menu, Menu);
        if (Reflect.has(data, 'buttons')) {
            this.buttons = Parser.parseArray(data.buttons);
        }
        if (Reflect.has(data, 'upcomingEventData')) {
            this.upcoming = new Date(Number(`${data.upcomingEventData.startTime}000`));
            this.upcoming_text = new Text(data.upcomingEventData.upcomingEventText);
            this.is_reminder_set = !!((_b = data.upcomingEventData) === null || _b === void 0 ? void 0 : _b.isReminderSet);
        }
    }
    get is_upcoming() {
        return Boolean(this.upcoming && this.upcoming > new Date());
    }
}
GridVideo.type = 'GridVideo';
export default GridVideo;
//# sourceMappingURL=GridVideo.js.map