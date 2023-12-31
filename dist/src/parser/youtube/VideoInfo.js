var _VideoInfo_watch_next_continuation;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import ChipCloud from '../classes/ChipCloud.js';
import ChipCloudChip from '../classes/ChipCloudChip.js';
import CommentsEntryPointHeader from '../classes/comments/CommentsEntryPointHeader.js';
import ContinuationItem from '../classes/ContinuationItem.js';
import ItemSection from '../classes/ItemSection.js';
import LiveChat from '../classes/LiveChat.js';
import MerchandiseShelf from '../classes/MerchandiseShelf.js';
import MicroformatData from '../classes/MicroformatData.js';
import PlayerMicroformat from '../classes/PlayerMicroformat.js';
import PlayerOverlay from '../classes/PlayerOverlay.js';
import RelatedChipCloud from '../classes/RelatedChipCloud.js';
import RichMetadata from '../classes/RichMetadata.js';
import RichMetadataRow from '../classes/RichMetadataRow.js';
import SegmentedLikeDislikeButton from '../classes/SegmentedLikeDislikeButton.js';
import ToggleButton from '../classes/ToggleButton.js';
import TwoColumnWatchNextResults from '../classes/TwoColumnWatchNextResults.js';
import VideoPrimaryInfo from '../classes/VideoPrimaryInfo.js';
import VideoSecondaryInfo from '../classes/VideoSecondaryInfo.js';
import LiveChatWrap from './LiveChat.js';
import PlayerLegacyDesktopYpcTrailer from '../classes/PlayerLegacyDesktopYpcTrailer.js';
import { InnertubeError } from '../../utils/Utils.js';
import { MediaInfo } from '../../core/mixins/index.js';
import StructuredDescriptionContent from '../classes/StructuredDescriptionContent.js';
import { VideoDescriptionMusicSection } from '../nodes.js';
class VideoInfo extends MediaInfo {
    /**
     * @param data - API response.
     * @param actions - Actions instance.
     * @param player - Player instance.
     * @param cpn - Client Playback Nonce.
     */
    constructor(data, actions, cpn) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17;
        super(data, actions, cpn);
        _VideoInfo_watch_next_continuation.set(this, void 0);
        const [info, next] = this.page;
        if (info.microformat && !((_a = info.microformat) === null || _a === void 0 ? void 0 : _a.is(PlayerMicroformat, MicroformatData)))
            throw new InnertubeError('Invalid microformat', info.microformat);
        this.basic_info = Object.assign(Object.assign(Object.assign({}, info.video_details), {
            embed: ((_b = info.microformat) === null || _b === void 0 ? void 0 : _b.is(PlayerMicroformat)) ? (_c = info.microformat) === null || _c === void 0 ? void 0 : _c.embed : null,
            channel: ((_d = info.microformat) === null || _d === void 0 ? void 0 : _d.is(PlayerMicroformat)) ? (_e = info.microformat) === null || _e === void 0 ? void 0 : _e.channel : null,
            is_unlisted: (_f = info.microformat) === null || _f === void 0 ? void 0 : _f.is_unlisted,
            is_family_safe: (_g = info.microformat) === null || _g === void 0 ? void 0 : _g.is_family_safe,
            category: ((_h = info.microformat) === null || _h === void 0 ? void 0 : _h.is(PlayerMicroformat)) ? (_j = info.microformat) === null || _j === void 0 ? void 0 : _j.category : null,
            has_ypc_metadata: ((_k = info.microformat) === null || _k === void 0 ? void 0 : _k.is(PlayerMicroformat)) ? (_l = info.microformat) === null || _l === void 0 ? void 0 : _l.has_ypc_metadata : null,
            start_timestamp: ((_m = info.microformat) === null || _m === void 0 ? void 0 : _m.is(PlayerMicroformat)) ? info.microformat.start_timestamp : null,
            view_count: ((_o = info.microformat) === null || _o === void 0 ? void 0 : _o.is(PlayerMicroformat)) && isNaN((_p = info.video_details) === null || _p === void 0 ? void 0 : _p.view_count) ? info.microformat.view_count : (_q = info.video_details) === null || _q === void 0 ? void 0 : _q.view_count
        }), { like_count: undefined, is_liked: undefined, is_disliked: undefined });
        this.annotations = info.annotations;
        this.storyboards = info.storyboards;
        this.endscreen = info.endscreen;
        this.captions = info.captions;
        this.cards = info.cards;
        if (this.streaming_data) {
            const default_audio_track = this.streaming_data.adaptive_formats.find((format) => { var _a; return (_a = format.audio_track) === null || _a === void 0 ? void 0 : _a.audio_is_default; });
            if (default_audio_track) {
                // The combined formats only exist for the default language, even for videos with multiple audio tracks
                // So we can copy the language from the default audio track to the combined formats
                this.streaming_data.formats.forEach((format) => format.language = default_audio_track.language);
            }
            else if (typeof ((_r = this.captions) === null || _r === void 0 ? void 0 : _r.default_audio_track_index) !== 'undefined' && ((_s = this.captions) === null || _s === void 0 ? void 0 : _s.audio_tracks) && this.captions.caption_tracks) {
                // For videos with a single audio track and captions, we can use the captions to figure out the language of the audio and combined formats
                const audioTrack = this.captions.audio_tracks[this.captions.default_audio_track_index];
                const index = audioTrack.default_caption_track_index || 0;
                const language_code = this.captions.caption_tracks[index].language_code;
                this.streaming_data.adaptive_formats.forEach((format) => {
                    if (format.has_audio) {
                        format.language = language_code;
                    }
                });
                this.streaming_data.formats.forEach((format) => format.language = language_code);
            }
        }
        const two_col = (_t = next === null || next === void 0 ? void 0 : next.contents) === null || _t === void 0 ? void 0 : _t.item().as(TwoColumnWatchNextResults);
        const results = two_col === null || two_col === void 0 ? void 0 : two_col.results;
        const secondary_results = two_col === null || two_col === void 0 ? void 0 : two_col.secondary_results;
        if (results && secondary_results) {
            if (((_u = info.microformat) === null || _u === void 0 ? void 0 : _u.is(PlayerMicroformat)) && ((_v = info.microformat) === null || _v === void 0 ? void 0 : _v.category) === 'Gaming') {
                const row = (_y = (_x = (_w = results.firstOfType(VideoSecondaryInfo)) === null || _w === void 0 ? void 0 : _w.metadata) === null || _x === void 0 ? void 0 : _x.rows) === null || _y === void 0 ? void 0 : _y.firstOfType(RichMetadataRow);
                if (row === null || row === void 0 ? void 0 : row.is(RichMetadataRow)) {
                    this.game_info = {
                        title: (_0 = (_z = row === null || row === void 0 ? void 0 : row.contents) === null || _z === void 0 ? void 0 : _z.firstOfType(RichMetadata)) === null || _0 === void 0 ? void 0 : _0.title,
                        release_year: (_2 = (_1 = row === null || row === void 0 ? void 0 : row.contents) === null || _1 === void 0 ? void 0 : _1.firstOfType(RichMetadata)) === null || _2 === void 0 ? void 0 : _2.subtitle
                    };
                }
            }
            this.primary_info = results.firstOfType(VideoPrimaryInfo);
            this.secondary_info = results.firstOfType(VideoSecondaryInfo);
            this.merchandise = results.firstOfType(MerchandiseShelf);
            this.related_chip_cloud = (_3 = secondary_results.firstOfType(RelatedChipCloud)) === null || _3 === void 0 ? void 0 : _3.content.as(ChipCloud);
            if (two_col === null || two_col === void 0 ? void 0 : two_col.playlist) {
                this.playlist = two_col.playlist;
            }
            this.watch_next_feed = ((_4 = secondary_results.firstOfType(ItemSection)) === null || _4 === void 0 ? void 0 : _4.contents) || secondary_results;
            if (this.watch_next_feed && Array.isArray(this.watch_next_feed) && ((_5 = this.watch_next_feed.at(-1)) === null || _5 === void 0 ? void 0 : _5.is(ContinuationItem)))
                __classPrivateFieldSet(this, _VideoInfo_watch_next_continuation, (_6 = this.watch_next_feed.pop()) === null || _6 === void 0 ? void 0 : _6.as(ContinuationItem), "f");
            this.player_overlays = (_7 = next === null || next === void 0 ? void 0 : next.player_overlays) === null || _7 === void 0 ? void 0 : _7.item().as(PlayerOverlay);
            if (two_col === null || two_col === void 0 ? void 0 : two_col.autoplay) {
                this.autoplay = two_col.autoplay;
            }
            const segmented_like_dislike_button = (_9 = (_8 = this.primary_info) === null || _8 === void 0 ? void 0 : _8.menu) === null || _9 === void 0 ? void 0 : _9.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);
            if (((_10 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _10 === void 0 ? void 0 : _10.is(ToggleButton)) && ((_11 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button) === null || _11 === void 0 ? void 0 : _11.is(ToggleButton))) {
                this.basic_info.like_count = (_12 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _12 === void 0 ? void 0 : _12.like_count;
                this.basic_info.is_liked = (_13 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _13 === void 0 ? void 0 : _13.is_toggled;
                this.basic_info.is_disliked = (_14 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button) === null || _14 === void 0 ? void 0 : _14.is_toggled;
            }
            const comments_entry_point = (_15 = results.get({ target_id: 'comments-entry-point' })) === null || _15 === void 0 ? void 0 : _15.as(ItemSection);
            this.comments_entry_point_header = (_16 = comments_entry_point === null || comments_entry_point === void 0 ? void 0 : comments_entry_point.contents) === null || _16 === void 0 ? void 0 : _16.firstOfType(CommentsEntryPointHeader);
            this.livechat = (_17 = next === null || next === void 0 ? void 0 : next.contents_memo) === null || _17 === void 0 ? void 0 : _17.getType(LiveChat).first();
        }
    }
    /**
     * Applies given filter to the watch next feed. Use {@link filters} to get available filters.
     * @param target_filter - Filter to apply.
     */
    selectFilter(target_filter) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.related_chip_cloud)
                throw new InnertubeError('Chip cloud not found, cannot apply filter');
            let cloud_chip;
            if (typeof target_filter === 'string') {
                const filter = (_b = (_a = this.related_chip_cloud) === null || _a === void 0 ? void 0 : _a.chips) === null || _b === void 0 ? void 0 : _b.get({ text: target_filter });
                if (!filter)
                    throw new InnertubeError('Invalid filter', { available_filters: this.filters });
                cloud_chip = filter;
            }
            else if (target_filter === null || target_filter === void 0 ? void 0 : target_filter.is(ChipCloudChip)) {
                cloud_chip = target_filter;
            }
            else {
                throw new InnertubeError('Invalid cloud chip', target_filter);
            }
            if (cloud_chip.is_selected)
                return this;
            const response = yield ((_c = cloud_chip.endpoint) === null || _c === void 0 ? void 0 : _c.call(this.actions, { parse: true }));
            const data = (_d = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints) === null || _d === void 0 ? void 0 : _d.get({ target_id: 'watch-next-feed' });
            this.watch_next_feed = data === null || data === void 0 ? void 0 : data.contents;
            return this;
        });
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
    /**
     * Retrieves watch next feed continuation.
     */
    getWatchNextContinuation() {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _VideoInfo_watch_next_continuation, "f"))
                throw new InnertubeError('Watch next feed continuation not found');
            const response = yield ((_a = __classPrivateFieldGet(this, _VideoInfo_watch_next_continuation, "f")) === null || _a === void 0 ? void 0 : _a.endpoint.call(this.actions, { parse: true }));
            const data = (_b = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints) === null || _b === void 0 ? void 0 : _b.get({ type: 'appendContinuationItemsAction' });
            if (!data)
                throw new InnertubeError('AppendContinuationItemsAction not found');
            this.watch_next_feed = data === null || data === void 0 ? void 0 : data.contents;
            if ((_d = (_c = this.watch_next_feed) === null || _c === void 0 ? void 0 : _c.at(-1)) === null || _d === void 0 ? void 0 : _d.is(ContinuationItem)) {
                __classPrivateFieldSet(this, _VideoInfo_watch_next_continuation, (_e = this.watch_next_feed.pop()) === null || _e === void 0 ? void 0 : _e.as(ContinuationItem), "f");
            }
            else {
                __classPrivateFieldSet(this, _VideoInfo_watch_next_continuation, undefined, "f");
            }
            return this;
        });
    }
    /**
     * Likes the video.
     */
    like() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const segmented_like_dislike_button = (_b = (_a = this.primary_info) === null || _a === void 0 ? void 0 : _a.menu) === null || _b === void 0 ? void 0 : _b.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);
            const button = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button;
            if (!button)
                throw new InnertubeError('Like button not found', { video_id: this.basic_info.id });
            if (!button.is(ToggleButton))
                throw new InnertubeError('Like button is not a toggle button. This action is likely disabled for this video.', { video_id: this.basic_info.id });
            if (button.is_toggled)
                throw new InnertubeError('This video is already liked', { video_id: this.basic_info.id });
            const response = yield button.endpoint.call(this.actions);
            return response;
        });
    }
    /**
     * Dislikes the video.
     */
    dislike() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const segmented_like_dislike_button = (_b = (_a = this.primary_info) === null || _a === void 0 ? void 0 : _a.menu) === null || _b === void 0 ? void 0 : _b.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);
            const button = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button;
            if (!button)
                throw new InnertubeError('Dislike button not found', { video_id: this.basic_info.id });
            if (!button.is(ToggleButton))
                throw new InnertubeError('Dislike button is not a toggle button. This action is likely disabled for this video.', { video_id: this.basic_info.id });
            if (button.is_toggled)
                throw new InnertubeError('This video is already disliked', { video_id: this.basic_info.id });
            const response = yield button.endpoint.call(this.actions);
            return response;
        });
    }
    /**
     * Removes like/dislike.
     */
    removeRating() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let button;
            const segmented_like_dislike_button = (_b = (_a = this.primary_info) === null || _a === void 0 ? void 0 : _a.menu) === null || _b === void 0 ? void 0 : _b.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);
            const like_button = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button;
            const dislike_button = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button;
            if (!(like_button === null || like_button === void 0 ? void 0 : like_button.is(ToggleButton)) || !(dislike_button === null || dislike_button === void 0 ? void 0 : dislike_button.is(ToggleButton)))
                throw new InnertubeError('Like/Dislike button is not a toggle button. This action is likely disabled for this video.', { video_id: this.basic_info.id });
            if (like_button === null || like_button === void 0 ? void 0 : like_button.is_toggled) {
                button = like_button;
            }
            else if (dislike_button === null || dislike_button === void 0 ? void 0 : dislike_button.is_toggled) {
                button = dislike_button;
            }
            if (!button)
                throw new InnertubeError('This video is not liked/disliked', { video_id: this.basic_info.id });
            const response = yield button.toggled_endpoint.call(this.actions);
            return response;
        });
    }
    /**
     * Retrieves Live Chat if available.
     */
    getLiveChat() {
        if (!this.livechat)
            throw new InnertubeError('Live Chat is not available', { video_id: this.basic_info.id });
        return new LiveChatWrap(this);
    }
    /**
     * Retrieves trailer info if available (typically for non-purchased movies or films).
     * @returns `VideoInfo` for the trailer, or `null` if none.
     */
    getTrailerInfo() {
        var _a, _b;
        if (this.has_trailer) {
            const player_response = (_b = (_a = this.playability_status.error_screen) === null || _a === void 0 ? void 0 : _a.as(PlayerLegacyDesktopYpcTrailer).trailer) === null || _b === void 0 ? void 0 : _b.player_response;
            if (player_response) {
                return new VideoInfo([{ data: player_response }], this.actions, this.cpn);
            }
        }
        return null;
    }
    /**
     * Watch next feed filters.
     */
    get filters() {
        var _a, _b;
        return ((_b = (_a = this.related_chip_cloud) === null || _a === void 0 ? void 0 : _a.chips) === null || _b === void 0 ? void 0 : _b.map((chip) => { var _a; return (_a = chip.text) === null || _a === void 0 ? void 0 : _a.toString(); })) || [];
    }
    /**
     * Checks if continuation is available for the watch next feed.
     */
    get wn_has_continuation() {
        return !!__classPrivateFieldGet(this, _VideoInfo_watch_next_continuation, "f");
    }
    /**
     * Gets the endpoint of the autoplay video
     */
    get autoplay_video_endpoint() {
        var _a, _b, _c;
        return ((_c = (_b = (_a = this.autoplay) === null || _a === void 0 ? void 0 : _a.sets) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.autoplay_video) || null;
    }
    /**
     * Checks if trailer is available.
     */
    get has_trailer() {
        var _a;
        return !!((_a = this.playability_status.error_screen) === null || _a === void 0 ? void 0 : _a.is(PlayerLegacyDesktopYpcTrailer));
    }
    /**
     * Get songs used in the video.
     */
    get music_tracks() {
        var _a, _b, _c, _d, _e, _f;
        // @TODO: Refactor this.
        const description_content = (_b = (_a = this.page[1]) === null || _a === void 0 ? void 0 : _a.engagement_panels) === null || _b === void 0 ? void 0 : _b.filter((panel) => { var _a; return (_a = panel.content) === null || _a === void 0 ? void 0 : _a.is(StructuredDescriptionContent); });
        if (description_content !== undefined && description_content.length > 0) {
            const music_section = (_e = (_d = (_c = description_content[0].content) === null || _c === void 0 ? void 0 : _c.as(StructuredDescriptionContent)) === null || _d === void 0 ? void 0 : _d.items) === null || _e === void 0 ? void 0 : _e.filterType(VideoDescriptionMusicSection);
            if (music_section !== undefined && music_section.length > 0) {
                return (_f = music_section[0].carousel_lockups) === null || _f === void 0 ? void 0 : _f.map((lookup) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
                    let song;
                    let artist;
                    let album;
                    let license;
                    let videoId;
                    let channelId;
                    // If the song isn't in the video_lockup, it should be in the info_rows
                    song = (_b = (_a = lookup.video_lockup) === null || _a === void 0 ? void 0 : _a.title) === null || _b === void 0 ? void 0 : _b.toString();
                    // If the video id isn't in the video_lockup, it should be in the info_rows
                    videoId = (_c = lookup.video_lockup) === null || _c === void 0 ? void 0 : _c.endpoint.payload.videoId;
                    for (let i = 0; i < lookup.info_rows.length; i++) {
                        const info_row = lookup.info_rows[i];
                        if (info_row.info_row_expand_status_key === undefined) {
                            if (song === undefined) {
                                song = ((_d = info_row.default_metadata) === null || _d === void 0 ? void 0 : _d.toString()) || ((_e = info_row.expanded_metadata) === null || _e === void 0 ? void 0 : _e.toString());
                                if (videoId === undefined) {
                                    const endpoint = ((_f = info_row.default_metadata) === null || _f === void 0 ? void 0 : _f.endpoint) || ((_g = info_row.expanded_metadata) === null || _g === void 0 ? void 0 : _g.endpoint);
                                    videoId = (_h = endpoint === null || endpoint === void 0 ? void 0 : endpoint.payload) === null || _h === void 0 ? void 0 : _h.videoId;
                                }
                            }
                            else {
                                album = ((_j = info_row.default_metadata) === null || _j === void 0 ? void 0 : _j.toString()) || ((_k = info_row.expanded_metadata) === null || _k === void 0 ? void 0 : _k.toString());
                            }
                        }
                        else {
                            if (((_l = info_row.info_row_expand_status_key) === null || _l === void 0 ? void 0 : _l.indexOf('structured-description-music-section-artists-row-state-id')) !== -1) {
                                artist = ((_m = info_row.default_metadata) === null || _m === void 0 ? void 0 : _m.toString()) || ((_o = info_row.expanded_metadata) === null || _o === void 0 ? void 0 : _o.toString());
                                if (channelId === undefined) {
                                    const endpoint = ((_p = info_row.default_metadata) === null || _p === void 0 ? void 0 : _p.endpoint) || ((_q = info_row.expanded_metadata) === null || _q === void 0 ? void 0 : _q.endpoint);
                                    channelId = (_r = endpoint === null || endpoint === void 0 ? void 0 : endpoint.payload) === null || _r === void 0 ? void 0 : _r.browseId;
                                }
                            }
                            if (((_s = info_row.info_row_expand_status_key) === null || _s === void 0 ? void 0 : _s.indexOf('structured-description-music-section-licenses-row-state-id')) !== -1) {
                                license = ((_t = info_row.default_metadata) === null || _t === void 0 ? void 0 : _t.toString()) || ((_u = info_row.expanded_metadata) === null || _u === void 0 ? void 0 : _u.toString());
                            }
                        }
                    }
                    return { song, artist, album, license, videoId, channelId };
                });
            }
        }
        return [];
    }
}
_VideoInfo_watch_next_continuation = new WeakMap();
export default VideoInfo;
//# sourceMappingURL=VideoInfo.js.map