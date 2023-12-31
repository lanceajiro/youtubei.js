import { __awaiter } from "tslib";
import ItemSection from '../classes/ItemSection.js';
import PlayerOverlay from '../classes/PlayerOverlay.js';
import SlimVideoMetadata from '../classes/SlimVideoMetadata.js';
import TwoColumnWatchNextResults from '../classes/TwoColumnWatchNextResults.js';
import { MediaInfo } from '../../core/mixins/index.js';
class VideoInfo extends MediaInfo {
    constructor(data, actions, cpn) {
        var _a, _b, _c, _d, _e;
        super(data, actions, cpn);
        const [info, next] = this.page;
        this.basic_info = info.video_details;
        this.captions = info.captions;
        const two_col = (_a = next === null || next === void 0 ? void 0 : next.contents) === null || _a === void 0 ? void 0 : _a.item().as(TwoColumnWatchNextResults);
        const results = two_col === null || two_col === void 0 ? void 0 : two_col.results;
        const secondary_results = two_col === null || two_col === void 0 ? void 0 : two_col.secondary_results;
        if (results && secondary_results) {
            this.slim_video_metadata = (_c = (_b = results.firstOfType(ItemSection)) === null || _b === void 0 ? void 0 : _b.contents) === null || _c === void 0 ? void 0 : _c.firstOfType(SlimVideoMetadata);
            this.watch_next_feed = ((_d = secondary_results.firstOfType(ItemSection)) === null || _d === void 0 ? void 0 : _d.contents) || secondary_results;
            this.current_video_endpoint = next === null || next === void 0 ? void 0 : next.current_video_endpoint;
            this.player_overlays = (_e = next === null || next === void 0 ? void 0 : next.player_overlays) === null || _e === void 0 ? void 0 : _e.item().as(PlayerOverlay);
        }
    }
    /**
   * Adds video to the watch history.
   */
    addToWatchHistory() {
        const _super = Object.create(null, {
            addToWatchHistory: { get: () => super.addToWatchHistory }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.addToWatchHistory.call(this);
        });
    }
}
export default VideoInfo;
//# sourceMappingURL=VideoInfo.js.map