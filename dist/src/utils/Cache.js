var _UniversalCache_cache;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { Platform } from './Utils.js';
class UniversalCache {
    constructor(persistent, persistent_directory) {
        _UniversalCache_cache.set(this, void 0);
        __classPrivateFieldSet(this, _UniversalCache_cache, new Platform.shim.Cache(persistent, persistent_directory), "f");
    }
    get cache_dir() {
        return __classPrivateFieldGet(this, _UniversalCache_cache, "f").cache_dir;
    }
    get(key) {
        return __classPrivateFieldGet(this, _UniversalCache_cache, "f").get(key);
    }
    set(key, value) {
        return __classPrivateFieldGet(this, _UniversalCache_cache, "f").set(key, value);
    }
    remove(key) {
        return __classPrivateFieldGet(this, _UniversalCache_cache, "f").remove(key);
    }
}
_UniversalCache_cache = new WeakMap();
export default UniversalCache;
//# sourceMappingURL=Cache.js.map