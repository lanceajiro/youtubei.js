import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
class MusicDetailHeader extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        super();
        this.title = new Text(data.title);
        this.description = new Text(data.description);
        this.subtitle = new Text(data.subtitle);
        this.second_subtitle = new Text(data.secondSubtitle);
        this.year = ((_b = (_a = this.subtitle.runs) === null || _a === void 0 ? void 0 : _a.find((run) => (/^[12][0-9]{3}$/).test(run.text))) === null || _b === void 0 ? void 0 : _b.text) || '';
        this.song_count = ((_d = (_c = this.second_subtitle.runs) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.text) || '';
        this.total_duration = ((_f = (_e = this.second_subtitle.runs) === null || _e === void 0 ? void 0 : _e[2]) === null || _f === void 0 ? void 0 : _f.text) || '';
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail.croppedSquareThumbnailRenderer.thumbnail);
        this.badges = Parser.parseArray(data.subtitleBadges);
        const author = (_g = this.subtitle.runs) === null || _g === void 0 ? void 0 : _g.find((run) => { var _a, _b; return (_b = (_a = run === null || run === void 0 ? void 0 : run.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId.startsWith('UC'); });
        if (author) {
            this.author = {
                name: author.text,
                channel_id: (_j = (_h = author.endpoint) === null || _h === void 0 ? void 0 : _h.payload) === null || _j === void 0 ? void 0 : _j.browseId,
                endpoint: author.endpoint
            };
        }
        this.menu = Parser.parseItem(data.menu);
    }
}
MusicDetailHeader.type = 'MusicDetailHeader';
export default MusicDetailHeader;
//# sourceMappingURL=MusicDetailHeader.js.map