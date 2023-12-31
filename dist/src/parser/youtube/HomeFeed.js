import { __awaiter } from "tslib";
import FilterableFeed from '../../core/mixins/FilterableFeed.js';
import FeedTabbedHeader from '../classes/FeedTabbedHeader.js';
import RichGrid from '../classes/RichGrid.js';
export default class HomeFeed extends FilterableFeed {
    constructor(actions, data, already_parsed = false) {
        super(actions, data, already_parsed);
        this.header = this.memo.getType(FeedTabbedHeader).first();
        this.contents = this.memo.getType(RichGrid).first() || this.page.on_response_received_actions.first();
    }
    /**
     * Applies given filter to the feed. Use {@link filters} to get available filters.
     * @param filter - Filter to apply.
     */
    applyFilter(filter) {
        const _super = Object.create(null, {
            getFilteredFeed: { get: () => super.getFilteredFeed }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const feed = yield _super.getFilteredFeed.call(this, filter);
            return new HomeFeed(this.actions, feed.page, true);
        });
    }
    /**
     * Retrieves next batch of contents.
     */
    getContinuation() {
        const _super = Object.create(null, {
            getContinuation: { get: () => super.getContinuation }
        });
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const feed = yield _super.getContinuation.call(this);
            // Keep the page header
            feed.page.header = this.page.header;
            (_a = feed.page.header_memo) === null || _a === void 0 ? void 0 : _a.set(this.header.type, [this.header]);
            return new HomeFeed(this.actions, feed.page, true);
        });
    }
}
//# sourceMappingURL=HomeFeed.js.map