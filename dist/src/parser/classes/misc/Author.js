var _Author_nav_text;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import * as Constants from '../../../utils/Constants.js';
import { observe } from '../../helpers.js';
import Parser from '../../index.js';
import Text from './Text.js';
import Thumbnail from './Thumbnail.js';
class Author {
    constructor(item, badges, thumbs, id) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12;
        _Author_nav_text.set(this, void 0);
        __classPrivateFieldSet(this, _Author_nav_text, new Text(item), "f");
        this.id = id || ((_e = (_d = (_c = (_b = (_a = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _a === void 0 ? void 0 : _a.runs) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.endpoint) === null || _d === void 0 ? void 0 : _d.payload) === null || _e === void 0 ? void 0 : _e.browseId) || ((_h = (_g = (_f = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _f === void 0 ? void 0 : _f.endpoint) === null || _g === void 0 ? void 0 : _g.payload) === null || _h === void 0 ? void 0 : _h.browseId) || 'N/A';
        this.name = ((_j = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _j === void 0 ? void 0 : _j.text) || 'N/A';
        this.thumbnails = thumbs ? Thumbnail.fromResponse(thumbs) : [];
        this.endpoint = ((_m = (_l = (_k = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _k === void 0 ? void 0 : _k.runs) === null || _l === void 0 ? void 0 : _l[0]) === null || _m === void 0 ? void 0 : _m.endpoint) || ((_o = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _o === void 0 ? void 0 : _o.endpoint);
        this.badges = Array.isArray(badges) ? Parser.parseArray(badges) : observe([]);
        this.is_moderator = (_p = this.badges) === null || _p === void 0 ? void 0 : _p.some((badge) => badge.icon_type == 'MODERATOR');
        this.is_verified = (_q = this.badges) === null || _q === void 0 ? void 0 : _q.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED');
        this.is_verified_artist = (_r = this.badges) === null || _r === void 0 ? void 0 : _r.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED_ARTIST');
        // @TODO: Refactor this mess.
        this.url =
            ((_w = (_v = (_u = (_t = (_s = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _s === void 0 ? void 0 : _s.runs) === null || _t === void 0 ? void 0 : _t[0]) === null || _u === void 0 ? void 0 : _u.endpoint) === null || _v === void 0 ? void 0 : _v.metadata) === null || _w === void 0 ? void 0 : _w.api_url) === '/browse' &&
                `${Constants.URLS.YT_BASE}${((_1 = (_0 = (_z = (_y = (_x = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _x === void 0 ? void 0 : _x.runs) === null || _y === void 0 ? void 0 : _y[0]) === null || _z === void 0 ? void 0 : _z.endpoint) === null || _0 === void 0 ? void 0 : _0.payload) === null || _1 === void 0 ? void 0 : _1.canonicalBaseUrl) || `/u/${(_6 = (_5 = (_4 = (_3 = (_2 = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _2 === void 0 ? void 0 : _2.runs) === null || _3 === void 0 ? void 0 : _3[0]) === null || _4 === void 0 ? void 0 : _4.endpoint) === null || _5 === void 0 ? void 0 : _5.payload) === null || _6 === void 0 ? void 0 : _6.browseId}`}` ||
                `${Constants.URLS.YT_BASE}${((_9 = (_8 = (_7 = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _7 === void 0 ? void 0 : _7.endpoint) === null || _8 === void 0 ? void 0 : _8.payload) === null || _9 === void 0 ? void 0 : _9.canonicalBaseUrl) || `/u/${(_12 = (_11 = (_10 = __classPrivateFieldGet(this, _Author_nav_text, "f")) === null || _10 === void 0 ? void 0 : _10.endpoint) === null || _11 === void 0 ? void 0 : _11.payload) === null || _12 === void 0 ? void 0 : _12.browseId}`}`;
    }
    get best_thumbnail() {
        return this.thumbnails[0];
    }
}
_Author_nav_text = new WeakMap();
export default Author;
//# sourceMappingURL=Author.js.map