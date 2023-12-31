var _CommentThread_actions, _CommentThread_continuation;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Parser from '../../index.js';
import Button from '../Button.js';
import ContinuationItem from '../ContinuationItem.js';
import Comment from './Comment.js';
import CommentReplies from './CommentReplies.js';
import { InnertubeError } from '../../../utils/Utils.js';
import { observe, YTNode } from '../../helpers.js';
class CommentThread extends YTNode {
    constructor(data) {
        super();
        _CommentThread_actions.set(this, void 0);
        _CommentThread_continuation.set(this, void 0);
        this.comment = Parser.parseItem(data.comment, Comment);
        this.comment_replies_data = Parser.parseItem(data.replies, CommentReplies);
        this.is_moderated_elq_comment = data.isModeratedElqComment;
        this.has_replies = !!this.comment_replies_data;
    }
    /**
     * Retrieves replies to this comment thread.
     */
    getReplies() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _CommentThread_actions, "f"))
                throw new InnertubeError('Actions instance not set for this thread.');
            if (!this.comment_replies_data)
                throw new InnertubeError('This comment has no replies.', this);
            const continuation = (_a = this.comment_replies_data.contents) === null || _a === void 0 ? void 0 : _a.firstOfType(ContinuationItem);
            if (!continuation)
                throw new InnertubeError('Replies continuation not found.');
            const response = yield continuation.endpoint.call(__classPrivateFieldGet(this, _CommentThread_actions, "f"), { parse: true });
            if (!response.on_response_received_endpoints_memo)
                throw new InnertubeError('Unexpected response.', response);
            this.replies = observe(response.on_response_received_endpoints_memo.getType(Comment).map((comment) => {
                comment.setActions(__classPrivateFieldGet(this, _CommentThread_actions, "f"));
                return comment;
            }));
            __classPrivateFieldSet(this, _CommentThread_continuation, response === null || response === void 0 ? void 0 : response.on_response_received_endpoints_memo.getType(ContinuationItem).first(), "f");
            return this;
        });
    }
    /**
     * Retrieves next batch of replies.
     */
    getContinuation() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.replies)
                throw new InnertubeError('Cannot retrieve continuation because this thread\'s replies have not been loaded.');
            if (!__classPrivateFieldGet(this, _CommentThread_continuation, "f"))
                throw new InnertubeError('Continuation not found.');
            if (!__classPrivateFieldGet(this, _CommentThread_actions, "f"))
                throw new InnertubeError('Actions instance not set for this thread.');
            const load_more_button = (_a = __classPrivateFieldGet(this, _CommentThread_continuation, "f").button) === null || _a === void 0 ? void 0 : _a.as(Button);
            if (!load_more_button)
                throw new InnertubeError('"Load more" button not found.');
            const response = yield load_more_button.endpoint.call(__classPrivateFieldGet(this, _CommentThread_actions, "f"), { parse: true });
            if (!response.on_response_received_endpoints_memo)
                throw new InnertubeError('Unexpected response.', response);
            this.replies = observe(response.on_response_received_endpoints_memo.getType(Comment).map((comment) => {
                comment.setActions(__classPrivateFieldGet(this, _CommentThread_actions, "f"));
                return comment;
            }));
            __classPrivateFieldSet(this, _CommentThread_continuation, response.on_response_received_endpoints_memo.getType(ContinuationItem).first(), "f");
            return this;
        });
    }
    get has_continuation() {
        if (!this.replies)
            throw new InnertubeError('Cannot determine if there is a continuation because this thread\'s replies have not been loaded.');
        return !!__classPrivateFieldGet(this, _CommentThread_continuation, "f");
    }
    setActions(actions) {
        __classPrivateFieldSet(this, _CommentThread_actions, actions, "f");
    }
}
_CommentThread_actions = new WeakMap(), _CommentThread_continuation = new WeakMap();
CommentThread.type = 'CommentThread';
export default CommentThread;
//# sourceMappingURL=CommentThread.js.map