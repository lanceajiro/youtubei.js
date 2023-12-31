var _TwoColumnWatchNextResults_instances, _TwoColumnWatchNextResults_parseAutoplaySet;
import { __classPrivateFieldGet } from "tslib";
import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Menu from './menus/Menu.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
class TwoColumnWatchNextResults extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e;
        super();
        _TwoColumnWatchNextResults_instances.add(this);
        this.results = Parser.parseArray((_a = data.results) === null || _a === void 0 ? void 0 : _a.results.contents);
        this.secondary_results = Parser.parseArray((_b = data.secondaryResults) === null || _b === void 0 ? void 0 : _b.secondaryResults.results);
        this.conversation_bar = Parser.parseItem(data === null || data === void 0 ? void 0 : data.conversationBar);
        const playlistData = (_c = data.playlist) === null || _c === void 0 ? void 0 : _c.playlist;
        if (playlistData) {
            this.playlist = {
                id: playlistData.playlistId,
                title: playlistData.title,
                author: ((_d = playlistData.shortBylineText) === null || _d === void 0 ? void 0 : _d.simpleText) ?
                    new Text(playlistData.shortBylineText) :
                    new Author(playlistData.longBylineText),
                contents: Parser.parseArray(playlistData.contents),
                current_index: playlistData.currentIndex,
                is_infinite: !!playlistData.isInfinite,
                menu: Parser.parseItem(playlistData.menu, Menu)
            };
        }
        const autoplayData = (_e = data.autoplay) === null || _e === void 0 ? void 0 : _e.autoplay;
        if (autoplayData) {
            this.autoplay = {
                sets: autoplayData.sets.map((set) => __classPrivateFieldGet(this, _TwoColumnWatchNextResults_instances, "m", _TwoColumnWatchNextResults_parseAutoplaySet).call(this, set))
            };
            if (autoplayData.modifiedSets) {
                this.autoplay.modified_sets = autoplayData.modifiedSets.map((set) => __classPrivateFieldGet(this, _TwoColumnWatchNextResults_instances, "m", _TwoColumnWatchNextResults_parseAutoplaySet).call(this, set));
            }
            if (autoplayData.countDownSecs) {
                this.autoplay.count_down_secs = autoplayData.countDownSecs;
            }
        }
    }
}
_TwoColumnWatchNextResults_instances = new WeakSet(), _TwoColumnWatchNextResults_parseAutoplaySet = function _TwoColumnWatchNextResults_parseAutoplaySet(data) {
    const result = {
        autoplay_video: new NavigationEndpoint(data.autoplayVideo)
    };
    if (data.nextButtonVideo) {
        result.next_button_video = new NavigationEndpoint(data.nextButtonVideo);
    }
    return result;
};
TwoColumnWatchNextResults.type = 'TwoColumnWatchNextResults';
export default TwoColumnWatchNextResults;
//# sourceMappingURL=TwoColumnWatchNextResults.js.map