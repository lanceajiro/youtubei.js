var _Player_nsig_sc, _Player_sig_sc, _Player_sig_sc_timestamp, _Player_player_id;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { Platform, getRandomUserAgent, getStringBetweenStrings, PlayerError } from '../utils/Utils.js';
import * as Constants from '../utils/Constants.js';
/**
 * Represents YouTube's player script. This is required to decipher signatures.
 */
class Player {
    constructor(signature_timestamp, sig_sc, nsig_sc, player_id) {
        _Player_nsig_sc.set(this, void 0);
        _Player_sig_sc.set(this, void 0);
        _Player_sig_sc_timestamp.set(this, void 0);
        _Player_player_id.set(this, void 0);
        __classPrivateFieldSet(this, _Player_nsig_sc, nsig_sc, "f");
        __classPrivateFieldSet(this, _Player_sig_sc, sig_sc, "f");
        __classPrivateFieldSet(this, _Player_sig_sc_timestamp, signature_timestamp, "f");
        __classPrivateFieldSet(this, _Player_player_id, player_id, "f");
    }
    static create(cache, fetch = Platform.shim.fetch) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = new URL('/iframe_api', Constants.URLS.YT_BASE);
            const res = yield fetch(url);
            if (res.status !== 200)
                throw new PlayerError('Failed to request player id');
            const js = yield res.text();
            const player_id = getStringBetweenStrings(js, 'player\\/', '\\/');
            if (!player_id)
                throw new PlayerError('Failed to get player id');
            // We have the playerID now we can check if we have a cached player
            if (cache) {
                const cached_player = yield Player.fromCache(cache, player_id);
                if (cached_player)
                    return cached_player;
            }
            const player_url = new URL(`/s/player/${player_id}/player_ias.vflset/en_US/base.js`, Constants.URLS.YT_BASE);
            const player_res = yield fetch(player_url, {
                headers: {
                    'user-agent': getRandomUserAgent('desktop')
                }
            });
            if (!player_res.ok) {
                throw new PlayerError(`Failed to get player data: ${player_res.status}`);
            }
            const player_js = yield player_res.text();
            const sig_timestamp = this.extractSigTimestamp(player_js);
            const sig_sc = this.extractSigSourceCode(player_js);
            const nsig_sc = this.extractNSigSourceCode(player_js);
            return yield Player.fromSource(cache, sig_timestamp, sig_sc, nsig_sc, player_id);
        });
    }
    decipher(url, signature_cipher, cipher) {
        url = url || signature_cipher || cipher;
        if (!url)
            throw new PlayerError('No valid URL to decipher');
        const args = new URLSearchParams(url);
        const url_components = new URL(args.get('url') || url);
        if (signature_cipher || cipher) {
            const signature = Platform.shim.eval(__classPrivateFieldGet(this, _Player_sig_sc, "f"), {
                sig: args.get('s')
            });
            if (typeof signature !== 'string')
                throw new PlayerError('Failed to decipher signature');
            const sp = args.get('sp');
            sp ?
                url_components.searchParams.set(sp, signature) :
                url_components.searchParams.set('signature', signature);
        }
        const n = url_components.searchParams.get('n');
        if (n) {
            const nsig = Platform.shim.eval(__classPrivateFieldGet(this, _Player_nsig_sc, "f"), {
                nsig: n
            });
            if (typeof nsig !== 'string')
                throw new PlayerError('Failed to decipher nsig');
            if (nsig.startsWith('enhanced_except_')) {
                console.warn('Warning:\nCould not transform nsig, download may be throttled.\nChanging the InnerTube client to "ANDROID" might help!');
            }
            url_components.searchParams.set('n', nsig);
        }
        const client = url_components.searchParams.get('c');
        switch (client) {
            case 'WEB':
                url_components.searchParams.set('cver', Constants.CLIENTS.WEB.VERSION);
                break;
            case 'WEB_REMIX':
                url_components.searchParams.set('cver', Constants.CLIENTS.YTMUSIC.VERSION);
                break;
            case 'WEB_KIDS':
                url_components.searchParams.set('cver', Constants.CLIENTS.WEB_KIDS.VERSION);
                break;
            case 'ANDROID':
                url_components.searchParams.set('cver', Constants.CLIENTS.ANDROID.VERSION);
                break;
            case 'ANDROID_MUSIC':
                url_components.searchParams.set('cver', Constants.CLIENTS.YTMUSIC_ANDROID.VERSION);
                break;
            case 'TVHTML5_SIMPLY_EMBEDDED_PLAYER':
                url_components.searchParams.set('cver', Constants.CLIENTS.TV_EMBEDDED.VERSION);
                break;
        }
        return url_components.toString();
    }
    static fromCache(cache, player_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const buffer = yield cache.get(player_id);
            if (!buffer)
                return null;
            const view = new DataView(buffer);
            const version = view.getUint32(0, true);
            if (version !== Player.LIBRARY_VERSION)
                return null;
            const sig_timestamp = view.getUint32(4, true);
            const sig_len = view.getUint32(8, true);
            const sig_buf = buffer.slice(12, 12 + sig_len);
            const nsig_buf = buffer.slice(12 + sig_len);
            const decoder = new TextDecoder();
            const sig_sc = decoder.decode(sig_buf);
            const nsig_sc = decoder.decode(nsig_buf);
            return new Player(sig_timestamp, sig_sc, nsig_sc, player_id);
        });
    }
    static fromSource(cache, sig_timestamp, sig_sc, nsig_sc, player_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = new Player(sig_timestamp, sig_sc, nsig_sc, player_id);
            yield player.cache(cache);
            return player;
        });
    }
    cache(cache) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!cache)
                return;
            const encoder = new TextEncoder();
            const sig_buf = encoder.encode(__classPrivateFieldGet(this, _Player_sig_sc, "f"));
            const nsig_buf = encoder.encode(__classPrivateFieldGet(this, _Player_nsig_sc, "f"));
            const buffer = new ArrayBuffer(12 + sig_buf.byteLength + nsig_buf.byteLength);
            const view = new DataView(buffer);
            view.setUint32(0, Player.LIBRARY_VERSION, true);
            view.setUint32(4, __classPrivateFieldGet(this, _Player_sig_sc_timestamp, "f"), true);
            view.setUint32(8, sig_buf.byteLength, true);
            new Uint8Array(buffer).set(sig_buf, 12);
            new Uint8Array(buffer).set(nsig_buf, 12 + sig_buf.byteLength);
            yield cache.set(__classPrivateFieldGet(this, _Player_player_id, "f"), new Uint8Array(buffer));
        });
    }
    static extractSigTimestamp(data) {
        return parseInt(getStringBetweenStrings(data, 'signatureTimestamp:', ',') || '0');
    }
    static extractSigSourceCode(data) {
        var _a, _b, _c;
        const calls = getStringBetweenStrings(data, 'function(a){a=a.split("")', 'return a.join("")}');
        const obj_name = (_c = (_b = (_a = calls === null || calls === void 0 ? void 0 : calls.split(/\.|\[/)) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.replace(';', '')) === null || _c === void 0 ? void 0 : _c.trim();
        const functions = getStringBetweenStrings(data, `var ${obj_name}={`, '};');
        if (!functions || !calls)
            console.warn(new PlayerError('Failed to extract signature decipher algorithm'));
        return `function descramble_sig(a) { a = a.split(""); let ${obj_name}={${functions}}${calls} return a.join("") } descramble_sig(sig);`;
    }
    static extractNSigSourceCode(data) {
        const sc = `function descramble_nsig(a) { let b=a.split("")${getStringBetweenStrings(data, 'b=a.split("")', '}return b.join("")}')}} return b.join(""); } descramble_nsig(nsig)`;
        if (!sc)
            console.warn(new PlayerError('Failed to extract n-token decipher algorithm'));
        return sc;
    }
    get url() {
        return new URL(`/s/player/${__classPrivateFieldGet(this, _Player_player_id, "f")}/player_ias.vflset/en_US/base.js`, Constants.URLS.YT_BASE).toString();
    }
    get sts() {
        return __classPrivateFieldGet(this, _Player_sig_sc_timestamp, "f");
    }
    get nsig_sc() {
        return __classPrivateFieldGet(this, _Player_nsig_sc, "f");
    }
    get sig_sc() {
        return __classPrivateFieldGet(this, _Player_sig_sc, "f");
    }
    static get LIBRARY_VERSION() {
        return 2;
    }
}
_Player_nsig_sc = new WeakMap(), _Player_sig_sc = new WeakMap(), _Player_sig_sc_timestamp = new WeakMap(), _Player_player_id = new WeakMap();
export default Player;
//# sourceMappingURL=Player.js.map