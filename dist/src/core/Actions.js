var _Actions_instances, _Actions_session, _Actions_wrap, _Actions_isBrowse, _Actions_needsLogin;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Parser, { NavigateAction } from '../parser/index.js';
import { InnertubeError } from '../utils/Utils.js';
class Actions {
    constructor(session) {
        _Actions_instances.add(this);
        _Actions_session.set(this, void 0);
        __classPrivateFieldSet(this, _Actions_session, session, "f");
    }
    get session() {
        return __classPrivateFieldGet(this, _Actions_session, "f");
    }
    /**
     * Makes calls to the playback tracking API.
     * @param url - The URL to call.
     * @param client - The client to use.
     * @param params - Call parameters.
     */
    stats(url, client, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const s_url = new URL(url);
            s_url.searchParams.set('ver', '2');
            s_url.searchParams.set('c', client.client_name.toLowerCase());
            s_url.searchParams.set('cbrver', client.client_version);
            s_url.searchParams.set('cver', client.client_version);
            for (const key of Object.keys(params)) {
                s_url.searchParams.set(key, params[key]);
            }
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(s_url);
            return response;
        });
    }
    execute(endpoint, args) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            if (args && !args.protobuf) {
                data = Object.assign({}, args);
                if (Reflect.has(data, 'browseId')) {
                    if (__classPrivateFieldGet(this, _Actions_instances, "m", _Actions_needsLogin).call(this, data.browseId) && !__classPrivateFieldGet(this, _Actions_session, "f").logged_in)
                        throw new InnertubeError('You must be signed in to perform this operation.');
                }
                if (Reflect.has(data, 'override_endpoint'))
                    delete data.override_endpoint;
                if (Reflect.has(data, 'parse'))
                    delete data.parse;
                if (Reflect.has(data, 'request'))
                    delete data.request;
                if (Reflect.has(data, 'clientActions'))
                    delete data.clientActions;
                if (Reflect.has(data, 'settingItemIdForClient'))
                    delete data.settingItemIdForClient;
                if (Reflect.has(data, 'action')) {
                    data.actions = [data.action];
                    delete data.action;
                }
                if (Reflect.has(data, 'boolValue')) {
                    data.newValue = { boolValue: data.boolValue };
                    delete data.boolValue;
                }
                if (Reflect.has(data, 'token')) {
                    data.continuation = data.token;
                    delete data.token;
                }
                if ((data === null || data === void 0 ? void 0 : data.client) === 'YTMUSIC') {
                    data.isAudioOnly = true;
                }
            }
            else if (args) {
                data = args.serialized_data;
            }
            const target_endpoint = Reflect.has(args || {}, 'override_endpoint') ? args === null || args === void 0 ? void 0 : args.override_endpoint : endpoint;
            const response = yield __classPrivateFieldGet(this, _Actions_session, "f").http.fetch(target_endpoint, {
                method: 'POST',
                body: (args === null || args === void 0 ? void 0 : args.protobuf) ? data : JSON.stringify((data || {})),
                headers: {
                    'Content-Type': (args === null || args === void 0 ? void 0 : args.protobuf) ?
                        'application/x-protobuf' :
                        'application/json'
                }
            });
            if (args === null || args === void 0 ? void 0 : args.parse) {
                let parsed_response = Parser.parseResponse(yield response.json());
                // Handle redirects
                if (__classPrivateFieldGet(this, _Actions_instances, "m", _Actions_isBrowse).call(this, parsed_response) && ((_b = (_a = parsed_response.on_response_received_actions) === null || _a === void 0 ? void 0 : _a.first()) === null || _b === void 0 ? void 0 : _b.type) === 'navigateAction') {
                    const navigate_action = parsed_response.on_response_received_actions.firstOfType(NavigateAction);
                    if (navigate_action) {
                        parsed_response = yield navigate_action.endpoint.call(this, { parse: true });
                    }
                }
                return parsed_response;
            }
            return __classPrivateFieldGet(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
        });
    }
}
_Actions_session = new WeakMap(), _Actions_instances = new WeakSet(), _Actions_wrap = function _Actions_wrap(response) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            success: response.ok,
            status_code: response.status,
            data: JSON.parse(yield response.text())
        };
    });
}, _Actions_isBrowse = function _Actions_isBrowse(response) {
    return 'on_response_received_actions' in response;
}, _Actions_needsLogin = function _Actions_needsLogin(id) {
    return [
        'FElibrary',
        'FEhistory',
        'FEsubscriptions',
        'FEmusic_listening_review',
        'FEmusic_library_landing',
        'SPaccount_overview',
        'SPaccount_notifications',
        'SPaccount_privacy',
        'SPtime_watched'
    ].includes(id);
};
export default Actions;
//# sourceMappingURL=Actions.js.map