// TODO: Clean up and refactor this.
var _MusicResponsiveListItem_instances, _MusicResponsiveListItem_playlist_item_data, _MusicResponsiveListItem_parseOther, _MusicResponsiveListItem_parseVideoOrSong, _MusicResponsiveListItem_parseSong, _MusicResponsiveListItem_parseVideo, _MusicResponsiveListItem_parseArtist, _MusicResponsiveListItem_parseLibraryArtist, _MusicResponsiveListItem_parseNonMusicTrack, _MusicResponsiveListItem_parseAlbum, _MusicResponsiveListItem_parsePlaylist;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { YTNode } from '../helpers.js';
import { isTextRun, timeToSeconds } from '../../utils/Utils.js';
import Parser from '../index.js';
import MusicItemThumbnailOverlay from './MusicItemThumbnailOverlay.js';
import MusicResponsiveListItemFixedColumn from './MusicResponsiveListItemFixedColumn.js';
import MusicResponsiveListItemFlexColumn from './MusicResponsiveListItemFlexColumn.js';
import MusicThumbnail from './MusicThumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Menu from './menus/Menu.js';
import Text from './misc/Text.js';
class MusicResponsiveListItem extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f;
        super();
        _MusicResponsiveListItem_instances.add(this);
        _MusicResponsiveListItem_playlist_item_data.set(this, void 0);
        this.flex_columns = Parser.parseArray(data.flexColumns, MusicResponsiveListItemFlexColumn);
        this.fixed_columns = Parser.parseArray(data.fixedColumns, MusicResponsiveListItemFixedColumn);
        __classPrivateFieldSet(this, _MusicResponsiveListItem_playlist_item_data, {
            video_id: ((_a = data === null || data === void 0 ? void 0 : data.playlistItemData) === null || _a === void 0 ? void 0 : _a.videoId) || null,
            playlist_set_video_id: ((_b = data === null || data === void 0 ? void 0 : data.playlistItemData) === null || _b === void 0 ? void 0 : _b.playlistSetVideoId) || null
        }, "f");
        if (Reflect.has(data, 'navigationEndpoint')) {
            this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        }
        let page_type = (_f = (_e = (_d = (_c = this.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.browseEndpointContextSupportedConfigs) === null || _e === void 0 ? void 0 : _e.browseEndpointContextMusicConfig) === null || _f === void 0 ? void 0 : _f.pageType;
        if (!page_type) {
            const is_non_music_track = this.flex_columns.find((col) => { var _a, _b, _c, _d; return ((_d = (_c = (_b = (_a = col.title.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseEndpointContextSupportedConfigs) === null || _c === void 0 ? void 0 : _c.browseEndpointContextMusicConfig) === null || _d === void 0 ? void 0 : _d.pageType) === 'MUSIC_PAGE_TYPE_NON_MUSIC_AUDIO_TRACK_PAGE'; });
            if (is_non_music_track) {
                page_type = 'MUSIC_PAGE_TYPE_NON_MUSIC_AUDIO_TRACK_PAGE';
            }
        }
        switch (page_type) {
            case 'MUSIC_PAGE_TYPE_ALBUM':
                this.item_type = 'album';
                __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseAlbum).call(this);
                break;
            case 'MUSIC_PAGE_TYPE_PLAYLIST':
                this.item_type = 'playlist';
                __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parsePlaylist).call(this);
                break;
            case 'MUSIC_PAGE_TYPE_ARTIST':
            case 'MUSIC_PAGE_TYPE_USER_CHANNEL':
                this.item_type = 'artist';
                __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseArtist).call(this);
                break;
            case 'MUSIC_PAGE_TYPE_LIBRARY_ARTIST':
                this.item_type = 'library_artist';
                __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseLibraryArtist).call(this);
                break;
            case 'MUSIC_PAGE_TYPE_NON_MUSIC_AUDIO_TRACK_PAGE':
                this.item_type = 'non_music_track';
                __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseNonMusicTrack).call(this);
                break;
            default:
                if (this.flex_columns[1]) {
                    __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseVideoOrSong).call(this);
                }
                else {
                    __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseOther).call(this);
                }
        }
        if (Reflect.has(data, 'index')) {
            this.index = new Text(data.index);
        }
        if (Reflect.has(data, 'thumbnail')) {
            this.thumbnail = Parser.parseItem(data.thumbnail, MusicThumbnail);
        }
        if (Reflect.has(data, 'badges')) {
            this.badges = Parser.parseArray(data.badges);
        }
        if (Reflect.has(data, 'menu')) {
            this.menu = Parser.parseItem(data.menu, Menu);
        }
        if (Reflect.has(data, 'overlay')) {
            this.overlay = Parser.parseItem(data.overlay, MusicItemThumbnailOverlay);
        }
    }
    get thumbnails() {
        var _a;
        return ((_a = this.thumbnail) === null || _a === void 0 ? void 0 : _a.contents) || [];
    }
}
_MusicResponsiveListItem_playlist_item_data = new WeakMap(), _MusicResponsiveListItem_instances = new WeakSet(), _MusicResponsiveListItem_parseOther = function _MusicResponsiveListItem_parseOther() {
    this.title = this.flex_columns.first().title.toString();
    if (this.endpoint) {
        this.item_type = 'endpoint';
    }
    else {
        this.item_type = 'unknown';
    }
}, _MusicResponsiveListItem_parseVideoOrSong = function _MusicResponsiveListItem_parseVideoOrSong() {
    var _a, _b;
    const is_video = (_b = (_a = this.flex_columns.at(1)) === null || _a === void 0 ? void 0 : _a.title.runs) === null || _b === void 0 ? void 0 : _b.some((run) => run.text.match(/(.*?) views/));
    if (is_video) {
        this.item_type = 'video';
        __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseVideo).call(this);
    }
    else {
        this.item_type = 'song';
        __classPrivateFieldGet(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseSong).call(this);
    }
}, _MusicResponsiveListItem_parseSong = function _MusicResponsiveListItem_parseSong() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    this.id = __classPrivateFieldGet(this, _MusicResponsiveListItem_playlist_item_data, "f").video_id || ((_b = (_a = this.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.videoId);
    this.title = this.flex_columns.first().title.toString();
    const duration_text = ((_e = (_d = (_c = this.flex_columns.at(1)) === null || _c === void 0 ? void 0 : _c.title.runs) === null || _d === void 0 ? void 0 : _d.find((run) => (/^\d+$/).test(run.text.replace(/:/g, '')))) === null || _e === void 0 ? void 0 : _e.text) || ((_g = (_f = this.fixed_columns.first()) === null || _f === void 0 ? void 0 : _f.title) === null || _g === void 0 ? void 0 : _g.toString());
    if (duration_text) {
        this.duration = {
            text: duration_text,
            seconds: timeToSeconds(duration_text)
        };
    }
    const album_run = ((_j = (_h = this.flex_columns.at(1)) === null || _h === void 0 ? void 0 : _h.title.runs) === null || _j === void 0 ? void 0 : _j.find((run) => (isTextRun(run) && run.endpoint) &&
        run.endpoint.payload.browseId.startsWith('MPR'))) ||
        ((_l = (_k = this.flex_columns.at(2)) === null || _k === void 0 ? void 0 : _k.title.runs) === null || _l === void 0 ? void 0 : _l.find((run) => (isTextRun(run) && run.endpoint) &&
            run.endpoint.payload.browseId.startsWith('MPR')));
    if (album_run && isTextRun(album_run)) {
        this.album = {
            id: (_o = (_m = album_run.endpoint) === null || _m === void 0 ? void 0 : _m.payload) === null || _o === void 0 ? void 0 : _o.browseId,
            name: album_run.text,
            endpoint: album_run.endpoint
        };
    }
    const artist_runs = (_q = (_p = this.flex_columns.at(1)) === null || _p === void 0 ? void 0 : _p.title.runs) === null || _q === void 0 ? void 0 : _q.filter((run) => (isTextRun(run) && run.endpoint) && run.endpoint.payload.browseId.startsWith('UC'));
    if (artist_runs) {
        this.artists = artist_runs.map((run) => {
            var _a, _b;
            return ({
                name: run.text,
                channel_id: isTextRun(run) ? (_b = (_a = run.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId : undefined,
                endpoint: isTextRun(run) ? run.endpoint : undefined
            });
        });
    }
}, _MusicResponsiveListItem_parseVideo = function _MusicResponsiveListItem_parseVideo() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    this.id = __classPrivateFieldGet(this, _MusicResponsiveListItem_playlist_item_data, "f").video_id;
    this.title = this.flex_columns.first().title.toString();
    this.views = (_c = (_b = (_a = this.flex_columns.at(1)) === null || _a === void 0 ? void 0 : _a.title.runs) === null || _b === void 0 ? void 0 : _b.find((run) => run.text.match(/(.*?) views/))) === null || _c === void 0 ? void 0 : _c.toString();
    const author_runs = (_e = (_d = this.flex_columns.at(1)) === null || _d === void 0 ? void 0 : _d.title.runs) === null || _e === void 0 ? void 0 : _e.filter((run) => (isTextRun(run) && run.endpoint) &&
        run.endpoint.payload.browseId.startsWith('UC'));
    if (author_runs) {
        this.authors = author_runs.map((run) => {
            var _a, _b;
            return {
                name: run.text,
                channel_id: isTextRun(run) ? (_b = (_a = run.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId : undefined,
                endpoint: isTextRun(run) ? run.endpoint : undefined
            };
        });
    }
    const duration_text = ((_g = (_f = this.flex_columns[1].title.runs) === null || _f === void 0 ? void 0 : _f.find((run) => (/^\d+$/).test(run.text.replace(/:/g, '')))) === null || _g === void 0 ? void 0 : _g.text) || ((_k = (_j = (_h = this.fixed_columns.first()) === null || _h === void 0 ? void 0 : _h.title.runs) === null || _j === void 0 ? void 0 : _j.find((run) => (/^\d+$/).test(run.text.replace(/:/g, '')))) === null || _k === void 0 ? void 0 : _k.text);
    if (duration_text) {
        this.duration = {
            text: duration_text,
            seconds: timeToSeconds(duration_text)
        };
    }
}, _MusicResponsiveListItem_parseArtist = function _MusicResponsiveListItem_parseArtist() {
    var _a, _b, _c, _d, _e, _f;
    this.id = (_b = (_a = this.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId;
    this.name = this.flex_columns.first().title.toString();
    this.subtitle = (_c = this.flex_columns.at(1)) === null || _c === void 0 ? void 0 : _c.title;
    this.subscribers = ((_f = (_e = (_d = this.subtitle) === null || _d === void 0 ? void 0 : _d.runs) === null || _e === void 0 ? void 0 : _e.find((run) => (/^(\d*\.)?\d+[M|K]? subscribers?$/i).test(run.text))) === null || _f === void 0 ? void 0 : _f.text) || '';
}, _MusicResponsiveListItem_parseLibraryArtist = function _MusicResponsiveListItem_parseLibraryArtist() {
    var _a, _b, _c, _d;
    this.name = this.flex_columns.first().title.toString();
    this.subtitle = (_a = this.flex_columns.at(1)) === null || _a === void 0 ? void 0 : _a.title;
    this.song_count = ((_d = (_c = (_b = this.subtitle) === null || _b === void 0 ? void 0 : _b.runs) === null || _c === void 0 ? void 0 : _c.find((run) => (/^\d+(,\d+)? songs?$/i).test(run.text))) === null || _d === void 0 ? void 0 : _d.text) || '';
}, _MusicResponsiveListItem_parseNonMusicTrack = function _MusicResponsiveListItem_parseNonMusicTrack() {
    var _a, _b;
    this.id = __classPrivateFieldGet(this, _MusicResponsiveListItem_playlist_item_data, "f").video_id || ((_b = (_a = this.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.videoId);
    this.title = this.flex_columns.first().title.toString();
}, _MusicResponsiveListItem_parseAlbum = function _MusicResponsiveListItem_parseAlbum() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    this.id = (_b = (_a = this.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId;
    this.title = this.flex_columns.first().title.toString();
    const author_run = (_d = (_c = this.flex_columns.at(1)) === null || _c === void 0 ? void 0 : _c.title.runs) === null || _d === void 0 ? void 0 : _d.find((run) => (isTextRun(run) && run.endpoint) &&
        run.endpoint.payload.browseId.startsWith('UC'));
    if (author_run && isTextRun(author_run)) {
        this.author = {
            name: author_run.text,
            channel_id: (_f = (_e = author_run.endpoint) === null || _e === void 0 ? void 0 : _e.payload) === null || _f === void 0 ? void 0 : _f.browseId,
            endpoint: author_run.endpoint
        };
    }
    this.year = (_j = (_h = (_g = this.flex_columns.at(1)) === null || _g === void 0 ? void 0 : _g.title.runs) === null || _h === void 0 ? void 0 : _h.find((run) => (/^[12][0-9]{3}$/).test(run.text))) === null || _j === void 0 ? void 0 : _j.text;
}, _MusicResponsiveListItem_parsePlaylist = function _MusicResponsiveListItem_parsePlaylist() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    this.id = (_b = (_a = this.endpoint) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.browseId;
    this.title = this.flex_columns.first().title.toString();
    const item_count_run = (_d = (_c = this.flex_columns.at(1)) === null || _c === void 0 ? void 0 : _c.title.runs) === null || _d === void 0 ? void 0 : _d.find((run) => run.text.match(/\d+ (song|songs)/));
    this.item_count = item_count_run ? item_count_run.text : undefined;
    const author_run = (_f = (_e = this.flex_columns.at(1)) === null || _e === void 0 ? void 0 : _e.title.runs) === null || _f === void 0 ? void 0 : _f.find((run) => (isTextRun(run) && run.endpoint) &&
        run.endpoint.payload.browseId.startsWith('UC'));
    if (author_run && isTextRun(author_run)) {
        this.author = {
            name: author_run.text,
            channel_id: (_h = (_g = author_run.endpoint) === null || _g === void 0 ? void 0 : _g.payload) === null || _h === void 0 ? void 0 : _h.browseId,
            endpoint: author_run.endpoint
        };
    }
};
MusicResponsiveListItem.type = 'MusicResponsiveListItem';
export default MusicResponsiveListItem;
//# sourceMappingURL=MusicResponsiveListItem.js.map