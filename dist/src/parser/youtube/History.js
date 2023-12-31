import { __awaiter } from "tslib";
import Feed from '../../core/mixins/Feed.js';
import ItemSection from '../classes/ItemSection.js';
import BrowseFeedActions from '../classes/BrowseFeedActions.js';
// TODO: make feed actions usable
class History extends Feed {
    constructor(actions, data, already_parsed = false) {
        super(actions, data, already_parsed);
        this.sections = this.memo.getType(ItemSection);
        this.feed_actions = this.memo.getType(BrowseFeedActions).first();
    }
    /**
     * Retrieves next batch of contents.
     */
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getContinuationData();
            if (!response)
                throw new Error('No continuation data found');
            return new History(this.actions, response, true);
        });
    }
}
export default History;
//# sourceMappingURL=History.js.map