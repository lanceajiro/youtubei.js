import Author from '../misc/Author.js';
import Text from '../misc/Text.js';
import Thumbnail from '../misc/Thumbnail.js';
import Menu from '../menus/Menu.js';
import AuthorCommentBadge from './AuthorCommentBadge.js';
import CommentActionButtons from './CommentActionButtons.js';
import PdgCommentChip from './PdgCommentChip.js';
import SponsorCommentBadge from './SponsorCommentBadge.js';
import { YTNode } from '../../helpers.js';
import type Actions from '../../../core/Actions.js';
import type { ApiResponse } from '../../../core/Actions.js';
import type { RawNode } from '../../index.js';
export default class Comment extends YTNode {
    #private;
    static type: string;
    content: Text;
    published: Text;
    author_is_channel_owner: boolean;
    current_user_reply_thumbnail: Thumbnail[];
    sponsor_comment_badge: SponsorCommentBadge | null;
    paid_comment_chip: PdgCommentChip | null;
    author_badge: AuthorCommentBadge | null;
    author: Author;
    action_menu: Menu | null;
    action_buttons: CommentActionButtons | null;
    comment_id: string;
    vote_status: string;
    vote_count: string;
    reply_count: number;
    is_liked: boolean;
    is_disliked: boolean;
    is_hearted: boolean;
    is_pinned: boolean;
    is_member: boolean;
    constructor(data: RawNode);
    /**
     * Likes the comment.
     */
    like(): Promise<ApiResponse>;
    /**
     * Dislikes the comment.
     */
    dislike(): Promise<ApiResponse>;
    /**
     * Creates a reply to the comment.
     */
    reply(text: string): Promise<ApiResponse>;
    /**
     * Translates the comment to a given language.
     * @param target_language - Ex; en, ja
     */
    translate(target_language: string): Promise<{
        content: any;
        success: boolean;
        status_code: number;
        data: any;
    }>;
    setActions(actions: Actions | undefined): void;
}
