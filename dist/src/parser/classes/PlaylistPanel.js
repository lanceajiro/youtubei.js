import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import AutomixPreviewVideo from './AutomixPreviewVideo.js';
import PlaylistPanelVideo from './PlaylistPanelVideo.js';
import PlaylistPanelVideoWrapper from './PlaylistPanelVideoWrapper.js';
import Text from './misc/Text.js';
class PlaylistPanel extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f;
        super();
        this.title = data.title;
        this.title_text = new Text(data.titleText);
        this.contents = Parser.parseArray(data.contents, [PlaylistPanelVideoWrapper, PlaylistPanelVideo, AutomixPreviewVideo]);
        this.playlist_id = data.playlistId;
        this.is_infinite = data.isInfinite;
        this.continuation = ((_c = (_b = (_a = data.continuations) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.nextRadioContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || ((_f = (_e = (_d = data.continuations) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.nextContinuationData) === null || _f === void 0 ? void 0 : _f.continuation);
        this.is_editable = data.isEditable;
        this.preview_description = data.previewDescription;
        this.num_items_to_show = data.numItemsToShow;
    }
}
PlaylistPanel.type = 'PlaylistPanel';
export default PlaylistPanel;
//# sourceMappingURL=PlaylistPanel.js.map