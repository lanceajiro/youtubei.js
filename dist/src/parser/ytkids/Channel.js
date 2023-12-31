import { __awaiter } from "tslib";
import Feed from '../../core/mixins/Feed.js';
import C4TabbedHeader from '../classes/C4TabbedHeader.js';
import ItemSection from '../classes/ItemSection.js';
import { ItemSectionContinuation } from '../index.js';
class Channel extends Feed {
    constructor(actions, data, already_parsed = false) {
        var _a, _b;
        super(actions, data, already_parsed);
        this.header = (_a = this.page.header) === null || _a === void 0 ? void 0 : _a.item().as(C4TabbedHeader);
        this.contents = this.memo.getType(ItemSection).first() || ((_b = this.page.continuation_contents) === null || _b === void 0 ? void 0 : _b.as(ItemSectionContinuation));
    }
    /**
     * Retrieves next batch of videos.
     */
    getContinuation() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute('/browse', {
                continuation: (_a = this.contents) === null || _a === void 0 ? void 0 : _a.continuation,
                client: 'YTKIDS'
            });
            return new Channel(this.actions, response);
        });
    }
    get has_continuation() {
        var _a;
        return !!((_a = this.contents) === null || _a === void 0 ? void 0 : _a.continuation);
    }
}
export default Channel;
//# sourceMappingURL=Channel.js.map