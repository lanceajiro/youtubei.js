"use strict";
/* eslint-disable */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// dist/src/platform/node.js
var node_exports = {};
__export(node_exports, {
  Actions: () => Actions_default,
  AppendContinuationItemsAction: () => AppendContinuationItemsAction_default,
  ClientType: () => ClientType,
  Clients: () => clients_exports,
  Constants: () => Constants_exports,
  Continuation: () => Continuation,
  Endpoints: () => endpoints_exports,
  EventEmitter: () => EventEmitterLike_default,
  FormatUtils: () => FormatUtils_exports,
  Generator: () => generator_exports,
  GridContinuation: () => GridContinuation,
  HTTPClient: () => HTTPClient_default,
  Helpers: () => helpers_exports,
  Innertube: () => Innertube_default,
  ItemSectionContinuation: () => ItemSectionContinuation,
  LiveChatContinuation: () => LiveChatContinuation,
  Managers: () => managers_exports,
  Misc: () => misc_exports,
  Mixins: () => mixins_exports,
  MusicPlaylistShelfContinuation: () => MusicPlaylistShelfContinuation,
  MusicShelfContinuation: () => MusicShelfContinuation,
  NavigateAction: () => NavigateAction,
  OAuth: () => OAuth_default,
  Parser: () => parser_default,
  Platform: () => Platform,
  Player: () => Player_default,
  PlaylistPanelContinuation: () => PlaylistPanelContinuation,
  Proto: () => proto_exports,
  ReloadContinuationItemsCommand: () => ReloadContinuationItemsCommand,
  SectionListContinuation: () => SectionListContinuation,
  Session: () => Session_default,
  ShowMiniplayerCommand: () => ShowMiniplayerCommand,
  Types: () => types_exports,
  UniversalCache: () => Cache_default,
  Utils: () => Utils_exports,
  YT: () => youtube_exports,
  YTKids: () => ytkids_exports,
  YTMusic: () => ytmusic_exports,
  YTNodes: () => nodes_exports,
  default: () => node_default
});
module.exports = __toCommonJS(node_exports);
var import_tslib64 = require("tslib");
var import_web = require("stream/web");
var import_undici = require("undici");

// dist/src/utils/Utils.js
var Utils_exports = {};
__export(Utils_exports, {
  ChannelError: () => ChannelError,
  InnertubeError: () => InnertubeError,
  MissingParamError: () => MissingParamError,
  OAuthError: () => OAuthError,
  ParsingError: () => ParsingError,
  Platform: () => Platform,
  PlayerError: () => PlayerError,
  SessionError: () => SessionError,
  base64ToU8: () => base64ToU8,
  concatMemos: () => concatMemos,
  debugFetch: () => debugFetch,
  deepCompare: () => deepCompare,
  escapeStringRegexp: () => escapeStringRegexp,
  generateRandomString: () => generateRandomString,
  generateSidAuth: () => generateSidAuth,
  getRandomUserAgent: () => getRandomUserAgent,
  getStringBetweenStrings: () => getStringBetweenStrings,
  hasKeys: () => hasKeys,
  isTextRun: () => isTextRun,
  streamToIterable: () => streamToIterable,
  throwIfMissing: () => throwIfMissing,
  timeToSeconds: () => timeToSeconds,
  u8ToBase64: () => u8ToBase64
});
var import_tslib51 = require("tslib");

// dist/src/parser/helpers.js
var helpers_exports = {};
__export(helpers_exports, {
  Maybe: () => Maybe,
  Memo: () => Memo,
  SuperParsedResult: () => SuperParsedResult,
  YTNode: () => YTNode,
  observe: () => observe
});
var import_tslib = require("tslib");
var _YTNode_instances;
var _YTNode_is;
var _Maybe_instances;
var _Maybe_value;
var _Maybe_checkPrimative;
var _Maybe_assertPrimative;
var _SuperParsedResult_result;
var isObserved = Symbol("ObservedArray.isObserved");
var YTNode = class {
  constructor() {
    _YTNode_instances.add(this);
    this.type = this.constructor.type;
  }
  is(...types) {
    return types.some((type) => (0, import_tslib.__classPrivateFieldGet)(this, _YTNode_instances, "m", _YTNode_is).call(this, type));
  }
  as(...types) {
    if (!this.is(...types)) {
      throw new ParsingError(`Cannot cast ${this.type} to one of ${types.map((t) => t.type).join(", ")}`);
    }
    return this;
  }
  hasKey(key) {
    return Reflect.has(this, key);
  }
  key(key) {
    if (!this.hasKey(key)) {
      throw new ParsingError(`Missing key ${key}`);
    }
    return new Maybe(this[key]);
  }
};
__name(YTNode, "YTNode");
_YTNode_instances = /* @__PURE__ */ new WeakSet(), _YTNode_is = /* @__PURE__ */ __name(function _YTNode_is2(type) {
  return this.type === type.type;
}, "_YTNode_is");
YTNode.type = "YTNode";
var Maybe = class {
  constructor(value) {
    _Maybe_instances.add(this);
    _Maybe_value.set(this, void 0);
    (0, import_tslib.__classPrivateFieldSet)(this, _Maybe_value, value, "f");
  }
  get typeof() {
    return typeof (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f");
  }
  string() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "string");
  }
  isString() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "string");
  }
  number() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "number");
  }
  isNumber() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "number");
  }
  bigint() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "bigint");
  }
  isBigint() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "bigint");
  }
  boolean() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "boolean");
  }
  isBoolean() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "boolean");
  }
  symbol() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "symbol");
  }
  isSymbol() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "symbol");
  }
  undefined() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "undefined");
  }
  isUndefined() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "undefined");
  }
  null() {
    if ((0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f") !== null)
      throw new TypeError(`Expected null, got ${typeof (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f")}`);
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f");
  }
  isNull() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f") === null;
  }
  object() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "object");
  }
  isObject() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "object");
  }
  function() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_assertPrimative).call(this, "function");
  }
  isFunction() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, "function");
  }
  array() {
    if (!Array.isArray((0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f"))) {
      throw new TypeError(`Expected array, got ${typeof (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f")}`);
    }
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f");
  }
  arrayOfMaybe() {
    const arrayProps = [];
    return new Proxy(this.array(), {
      get(target, prop) {
        if (Reflect.has(arrayProps, prop)) {
          return Reflect.get(target, prop);
        }
        return new Maybe(Reflect.get(target, prop));
      }
    });
  }
  isArray() {
    return Array.isArray((0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f"));
  }
  node() {
    if (!((0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f") instanceof YTNode)) {
      throw new TypeError(`Expected YTNode, got ${(0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f").constructor.name}`);
    }
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f");
  }
  isNode() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f") instanceof YTNode;
  }
  nodeOfType(...types) {
    return this.node().as(...types);
  }
  isNodeOfType(...types) {
    return this.isNode() && this.node().is(...types);
  }
  observed() {
    if (!this.isObserved()) {
      throw new TypeError(`Expected ObservedArray, got ${typeof (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f")}`);
    }
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f");
  }
  isObserved() {
    var _a4;
    return (_a4 = (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f")) === null || _a4 === void 0 ? void 0 : _a4[isObserved];
  }
  parsed() {
    if (!((0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f") instanceof SuperParsedResult)) {
      throw new TypeError(`Expected SuperParsedResult, got ${typeof (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f")}`);
    }
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f");
  }
  isParsed() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f") instanceof SuperParsedResult;
  }
  any() {
    console.warn("This call is not meant to be used outside of debugging. Please use the specific type getter instead.");
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f");
  }
  instanceof(type) {
    if (!this.isInstanceof(type)) {
      throw new TypeError(`Expected instance of ${type.name}, got ${(0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f").constructor.name}`);
    }
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f");
  }
  isInstanceof(type) {
    return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f") instanceof type;
  }
};
__name(Maybe, "Maybe");
_Maybe_value = /* @__PURE__ */ new WeakMap(), _Maybe_instances = /* @__PURE__ */ new WeakSet(), _Maybe_checkPrimative = /* @__PURE__ */ __name(function _Maybe_checkPrimative2(type) {
  if (typeof (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f") !== type) {
    return false;
  }
  return true;
}, "_Maybe_checkPrimative"), _Maybe_assertPrimative = /* @__PURE__ */ __name(function _Maybe_assertPrimative2(type) {
  if (!(0, import_tslib.__classPrivateFieldGet)(this, _Maybe_instances, "m", _Maybe_checkPrimative).call(this, type)) {
    throw new TypeError(`Expected ${type}, got ${this.typeof}`);
  }
  return (0, import_tslib.__classPrivateFieldGet)(this, _Maybe_value, "f");
}, "_Maybe_assertPrimative");
var SuperParsedResult = class {
  constructor(result) {
    _SuperParsedResult_result.set(this, void 0);
    (0, import_tslib.__classPrivateFieldSet)(this, _SuperParsedResult_result, result, "f");
  }
  get is_null() {
    return (0, import_tslib.__classPrivateFieldGet)(this, _SuperParsedResult_result, "f") === null;
  }
  get is_array() {
    return !this.is_null && Array.isArray((0, import_tslib.__classPrivateFieldGet)(this, _SuperParsedResult_result, "f"));
  }
  get is_node() {
    return !this.is_array;
  }
  array() {
    if (!this.is_array) {
      throw new TypeError("Expected an array, got a node");
    }
    return (0, import_tslib.__classPrivateFieldGet)(this, _SuperParsedResult_result, "f");
  }
  item() {
    if (!this.is_node) {
      throw new TypeError("Expected a node, got an array");
    }
    return (0, import_tslib.__classPrivateFieldGet)(this, _SuperParsedResult_result, "f");
  }
};
__name(SuperParsedResult, "SuperParsedResult");
_SuperParsedResult_result = /* @__PURE__ */ new WeakMap();
function observe(obj) {
  return new Proxy(obj, {
    get(target, prop) {
      if (prop == "get") {
        return (rule, del_item) => target.find((obj2, index) => {
          const match = deepCompare(rule, obj2);
          if (match && del_item) {
            target.splice(index, 1);
          }
          return match;
        });
      }
      if (prop == isObserved) {
        return true;
      }
      if (prop == "getAll") {
        return (rule, del_items) => target.filter((obj2, index) => {
          const match = deepCompare(rule, obj2);
          if (match && del_items) {
            target.splice(index, 1);
          }
          return match;
        });
      }
      if (prop == "matchCondition") {
        return (condition) => target.find((obj2) => {
          return condition(obj2);
        });
      }
      if (prop == "filterType") {
        return (...types) => {
          return observe(target.filter((node) => {
            if (node.is(...types))
              return true;
            return false;
          }));
        };
      }
      if (prop == "firstOfType") {
        return (...types) => {
          return target.find((node) => {
            if (node.is(...types))
              return true;
            return false;
          });
        };
      }
      if (prop == "first") {
        return () => target[0];
      }
      if (prop == "as") {
        return (...types) => {
          return observe(target.map((node) => {
            if (node.is(...types))
              return node;
            throw new ParsingError(`Expected node of any type ${types.map((type) => type.type).join(", ")}, got ${node.type}`);
          }));
        };
      }
      if (prop == "remove") {
        return (index) => target.splice(index, 1);
      }
      return Reflect.get(target, prop);
    }
  });
}
__name(observe, "observe");
var Memo = class extends Map {
  getType(...types) {
    types = types.flat();
    return observe(types.flatMap((type) => this.get(type.type) || []));
  }
};
__name(Memo, "Memo");

// dist/src/parser/misc.js
var misc_exports = {};
__export(misc_exports, {
  Author: () => Author_default,
  ChildElement: () => ChildElement_default,
  EmojiRun: () => EmojiRun,
  Format: () => Format,
  Text: () => Text,
  TextRun: () => TextRun,
  Thumbnail: () => Thumbnail,
  VideoDetails: () => VideoDetails
});

// dist/src/parser/classes/misc/Author.js
var import_tslib50 = require("tslib");

// dist/src/utils/Constants.js
var Constants_exports = {};
__export(Constants_exports, {
  CLIENTS: () => CLIENTS,
  INNERTUBE_HEADERS_BASE: () => INNERTUBE_HEADERS_BASE,
  OAUTH: () => OAUTH,
  STREAM_HEADERS: () => STREAM_HEADERS,
  URLS: () => URLS
});
var URLS = Object.freeze({
  YT_BASE: "https://www.youtube.com",
  YT_MUSIC_BASE: "https://music.youtube.com",
  YT_SUGGESTIONS: "https://suggestqueries.google.com/complete/",
  YT_UPLOAD: "https://upload.youtube.com/",
  API: Object.freeze({
    BASE: "https://youtubei.googleapis.com",
    PRODUCTION_1: "https://www.youtube.com/youtubei/",
    PRODUCTION_2: "https://youtubei.googleapis.com/youtubei/",
    STAGING: "https://green-youtubei.sandbox.googleapis.com/youtubei/",
    RELEASE: "https://release-youtubei.sandbox.googleapis.com/youtubei/",
    TEST: "https://test-youtubei.sandbox.googleapis.com/youtubei/",
    CAMI: "http://cami-youtubei.sandbox.googleapis.com/youtubei/",
    UYTFE: "https://uytfe.sandbox.google.com/youtubei/"
  })
});
var OAUTH = Object.freeze({
  SCOPE: "http://gdata.youtube.com https://www.googleapis.com/auth/youtube-paid-content",
  GRANT_TYPE: "http://oauth.net/grant_type/device/1.0",
  MODEL_NAME: "ytlr::",
  HEADERS: Object.freeze({
    "accept": "*/*",
    "origin": "https://www.youtube.com",
    "user-agent": "Mozilla/5.0 (ChromiumStylePlatform) Cobalt/Version",
    "content-type": "application/json",
    "referer": "https://www.youtube.com/tv",
    "accept-language": "en-US"
  }),
  REGEX: Object.freeze({
    AUTH_SCRIPT: /<script id="base-js" src="(.*?)" nonce=".*?"><\/script>/,
    CLIENT_IDENTITY: /var .+?={clientId:"(?<client_id>.+?)",.+?:"(?<client_secret>.+?)".+?}/
  })
});
var CLIENTS = Object.freeze({
  iOS: {
    NAME: "iOS",
    VERSION: "18.06.35",
    USER_AGENT: "com.google.ios.youtube/18.06.35 (iPhone; CPU iPhone OS 14_4 like Mac OS X; en_US)",
    DEVICE_MODEL: "iPhone10,6"
  },
  WEB: {
    NAME: "WEB",
    VERSION: "2.20230622.06.00",
    API_KEY: "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
    API_VERSION: "v1",
    STATIC_VISITOR_ID: "6zpwvWUNAco"
  },
  WEB_KIDS: {
    NAME: "WEB_KIDS",
    VERSION: "2.20230111.00.00"
  },
  YTMUSIC: {
    NAME: "WEB_REMIX",
    VERSION: "1.20211213.00.00"
  },
  ANDROID: {
    NAME: "ANDROID",
    VERSION: "18.06.35",
    SDK_VERSION: "29",
    USER_AGENT: "com.google.android.youtube/18.06.35 (Linux; U; Android 10; US)"
  },
  YTSTUDIO_ANDROID: {
    NAME: "ANDROID_CREATOR",
    VERSION: "22.43.101"
  },
  YTMUSIC_ANDROID: {
    NAME: "ANDROID_MUSIC",
    VERSION: "5.34.51"
  },
  TV_EMBEDDED: {
    NAME: "TVHTML5_SIMPLY_EMBEDDED_PLAYER",
    VERSION: "2.0"
  }
});
var STREAM_HEADERS = Object.freeze({
  "accept": "*/*",
  "origin": "https://www.youtube.com",
  "referer": "https://www.youtube.com",
  "DNT": "?1"
});
var INNERTUBE_HEADERS_BASE = Object.freeze({
  "accept": "*/*",
  "accept-encoding": "gzip, deflate",
  "content-type": "application/json"
});

// dist/src/parser/parser.js
var parser_exports = {};
__export(parser_exports, {
  addRuntimeParser: () => addRuntimeParser,
  applyMutations: () => applyMutations,
  getDynamicParsers: () => getDynamicParsers,
  getParserByName: () => getParserByName,
  hasParser: () => hasParser,
  parse: () => parse,
  parseActions: () => parseActions,
  parseArray: () => parseArray,
  parseC: () => parseC,
  parseFormats: () => parseFormats,
  parseItem: () => parseItem,
  parseLC: () => parseLC,
  parseRR: () => parseRR,
  parseResponse: () => parseResponse,
  sanitizeClassName: () => sanitizeClassName,
  setParserErrorHandler: () => setParserErrorHandler,
  shouldIgnore: () => shouldIgnore
});
var import_tslib8 = require("tslib");

// dist/src/parser/classes/AudioOnlyPlayability.js
var AudioOnlyPlayability = class extends YTNode {
  constructor(data) {
    super();
    this.audio_only_availability = data.audioOnlyAvailability;
  }
};
__name(AudioOnlyPlayability, "AudioOnlyPlayability");
AudioOnlyPlayability.type = "AudioOnlyPlayability";
var AudioOnlyPlayability_default = AudioOnlyPlayability;

// dist/src/parser/classes/Button.js
var Button = class extends YTNode {
  constructor(data) {
    super();
    if (Reflect.has(data, "text"))
      this.text = new Text(data.text).toString();
    if (Reflect.has(data, "accessibility") && Reflect.has(data.accessibility, "label"))
      this.label = data.accessibility.label;
    if (Reflect.has(data, "tooltip"))
      this.tooltip = data.tooltip;
    if (Reflect.has(data, "icon") && Reflect.has(data.icon, "iconType"))
      this.icon_type = data.icon.iconType;
    if (Reflect.has(data, "isDisabled"))
      this.is_disabled = data.isDisabled;
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint || data.serviceEndpoint || data.command);
  }
};
__name(Button, "Button");
Button.type = "Button";
var Button_default = Button;

// dist/src/parser/classes/DropdownItem.js
var DropdownItem = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    this.label = new Text(data.label).toString();
    this.selected = !!data.isSelected;
    if (Reflect.has(data, "int32Value")) {
      this.value = data.int32Value;
    } else if (data.stringValue) {
      this.value = data.stringValue;
    }
    if (Reflect.has(data, "onSelectCommand")) {
      this.endpoint = new NavigationEndpoint_default(data.onSelectCommand);
    }
    if (Reflect.has(data, "icon")) {
      this.icon_type = (_a4 = data.icon) === null || _a4 === void 0 ? void 0 : _a4.iconType;
    }
    if (Reflect.has(data, "descriptionText")) {
      this.description = new Text(data.descriptionText);
    }
  }
};
__name(DropdownItem, "DropdownItem");
DropdownItem.type = "DropdownItem";
var DropdownItem_default = DropdownItem;

// dist/src/parser/classes/Dropdown.js
var Dropdown = class extends YTNode {
  constructor(data) {
    super();
    this.label = data.label || "";
    this.entries = parser_default.parseArray(data.entries, DropdownItem_default);
  }
};
__name(Dropdown, "Dropdown");
Dropdown.type = "Dropdown";
var Dropdown_default = Dropdown;

// dist/src/parser/classes/CreatePlaylistDialog.js
var CreatePlaylistDialog = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.dialogTitle).toString();
    this.title_placeholder = data.titlePlaceholder || "";
    this.privacy_option = parser_default.parseItem(data.privacyOption, Dropdown_default);
    this.create_button = parser_default.parseItem(data.cancelButton, Button_default);
    this.cancel_button = parser_default.parseItem(data.cancelButton, Button_default);
  }
};
__name(CreatePlaylistDialog, "CreatePlaylistDialog");
CreatePlaylistDialog.type = "CreatePlaylistDialog";
var CreatePlaylistDialog_default = CreatePlaylistDialog;

// dist/src/parser/classes/actions/OpenPopupAction.js
var OpenPopupAction = class extends YTNode {
  constructor(data) {
    super();
    this.popup = parser_default.parseItem(data.popup);
    this.popup_type = data.popupType;
  }
};
__name(OpenPopupAction, "OpenPopupAction");
OpenPopupAction.type = "OpenPopupAction";
var OpenPopupAction_default = OpenPopupAction;

// dist/src/parser/classes/NavigationEndpoint.js
var NavigationEndpoint = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c, _d, _e, _f, _g, _h;
    super();
    if (Reflect.has(data || {}, "innertubeCommand"))
      data = data.innertubeCommand;
    if (Reflect.has(data || {}, "openPopupAction"))
      this.open_popup = new OpenPopupAction_default(data.openPopupAction);
    const name = Object.keys(data || {}).find((item) => item.endsWith("Endpoint") || item.endsWith("Command"));
    this.payload = name ? Reflect.get(data, name) : {};
    if (Reflect.has(this.payload, "dialog") || Reflect.has(this.payload, "content")) {
      this.dialog = parser_default.parseItem(this.payload.dialog || this.payload.content);
    }
    if (data === null || data === void 0 ? void 0 : data.serviceEndpoint) {
      data = data.serviceEndpoint;
    }
    this.metadata = {};
    if ((_b2 = (_a4 = data === null || data === void 0 ? void 0 : data.commandMetadata) === null || _a4 === void 0 ? void 0 : _a4.webCommandMetadata) === null || _b2 === void 0 ? void 0 : _b2.url) {
      this.metadata.url = data.commandMetadata.webCommandMetadata.url;
    }
    if ((_d = (_c = data === null || data === void 0 ? void 0 : data.commandMetadata) === null || _c === void 0 ? void 0 : _c.webCommandMetadata) === null || _d === void 0 ? void 0 : _d.webPageType) {
      this.metadata.page_type = data.commandMetadata.webCommandMetadata.webPageType;
    }
    if ((_f = (_e = data === null || data === void 0 ? void 0 : data.commandMetadata) === null || _e === void 0 ? void 0 : _e.webCommandMetadata) === null || _f === void 0 ? void 0 : _f.apiUrl) {
      this.metadata.api_url = data.commandMetadata.webCommandMetadata.apiUrl.replace("/youtubei/v1/", "");
    } else if (name) {
      this.metadata.api_url = this.getEndpoint(name);
    }
    if ((_h = (_g = data === null || data === void 0 ? void 0 : data.commandMetadata) === null || _g === void 0 ? void 0 : _g.webCommandMetadata) === null || _h === void 0 ? void 0 : _h.sendPost) {
      this.metadata.send_post = data.commandMetadata.webCommandMetadata.sendPost;
    }
    if (data === null || data === void 0 ? void 0 : data.createPlaylistEndpoint) {
      if (data === null || data === void 0 ? void 0 : data.createPlaylistEndpoint.createPlaylistDialog) {
        this.dialog = parser_default.parseItem(data === null || data === void 0 ? void 0 : data.createPlaylistEndpoint.createPlaylistDialog, CreatePlaylistDialog_default);
      }
    }
  }
  getEndpoint(name) {
    switch (name) {
      case "browseEndpoint":
        return "/browse";
      case "watchEndpoint":
        return "/player";
      case "searchEndpoint":
        return "/search";
      case "watchPlaylistEndpoint":
        return "/next";
      case "liveChatItemContextMenuEndpoint":
        return "live_chat/get_item_context_menu";
    }
  }
  call(actions, args) {
    if (!actions)
      throw new Error("An active caller must be provided");
    if (!this.metadata.api_url)
      throw new Error("Expected an api_url, but none was found, this is a bug.");
    return actions.execute(this.metadata.api_url, Object.assign(Object.assign({}, this.payload), args));
  }
  toURL() {
    if (!this.metadata.url)
      return void 0;
    if (!this.metadata.page_type)
      return void 0;
    return this.metadata.page_type === "WEB_PAGE_TYPE_UNKNOWN" ? this.metadata.url : `https://www.youtube.com${this.metadata.url}`;
  }
};
__name(NavigationEndpoint, "NavigationEndpoint");
NavigationEndpoint.type = "NavigationEndpoint";
var NavigationEndpoint_default = NavigationEndpoint;

// dist/src/parser/classes/misc/Thumbnail.js
var Thumbnail = class {
  constructor(data) {
    this.url = data.url;
    this.width = data.width;
    this.height = data.height;
  }
  static fromResponse(data) {
    if (!data || !data.thumbnails)
      return [];
    return data.thumbnails.map((x) => new Thumbnail(x)).sort((a, b) => b.width - a.width);
  }
};
__name(Thumbnail, "Thumbnail");

// dist/src/parser/classes/misc/EmojiRun.js
var EmojiRun = class {
  constructor(data) {
    var _a4, _b2, _c, _d, _e, _f;
    this.text = ((_a4 = data.emoji) === null || _a4 === void 0 ? void 0 : _a4.emojiId) || ((_c = (_b2 = data.emoji) === null || _b2 === void 0 ? void 0 : _b2.shortcuts) === null || _c === void 0 ? void 0 : _c[0]) || "";
    this.emoji = {
      emoji_id: data.emoji.emojiId,
      shortcuts: ((_d = data.emoji) === null || _d === void 0 ? void 0 : _d.shortcuts) || [],
      search_terms: ((_e = data.emoji) === null || _e === void 0 ? void 0 : _e.searchTerms) || [],
      image: Thumbnail.fromResponse(data.emoji.image),
      is_custom: !!((_f = data.emoji) === null || _f === void 0 ? void 0 : _f.isCustomEmoji)
    };
  }
  toString() {
    return this.text;
  }
  toHTML() {
    const escaped_text = escape(this.text);
    return `<img src="${this.emoji.image[0].url}" alt="${escaped_text}" title="${escaped_text}" style="display: inline-block; vertical-align: text-top; height: var(--yt-emoji-size, 1rem); width: var(--yt-emoji-size, 1rem);" loading="lazy" crossorigin="anonymous" />`;
  }
};
__name(EmojiRun, "EmojiRun");

// dist/src/parser/classes/misc/TextRun.js
var TextRun = class {
  constructor(data) {
    this.text = data.text;
    this.bold = Boolean(data.bold);
    this.italics = Boolean(data.italics);
    this.strikethrough = Boolean(data.strikethrough);
    if (Reflect.has(data, "navigationEndpoint")) {
      this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    }
    this.attachment = data.attachment;
  }
  toString() {
    return this.text;
  }
  toHTML() {
    const tags = [];
    if (this.bold)
      tags.push("b");
    if (this.italics)
      tags.push("i");
    if (this.strikethrough)
      tags.push("s");
    const escaped_text = escape(this.text);
    const styled_text = tags.map((tag) => `<${tag}>`).join("") + escaped_text + tags.map((tag) => `</${tag}>`).join("");
    const wrapped_text = `<span style="white-space: pre-wrap;">${styled_text}</span>`;
    if (this.attachment) {
      if (this.attachment.element.type.imageType.image.sources.length) {
        const { url } = this.attachment.element.type.imageType.image.sources[0];
        if (this.endpoint) {
          const nav_url = this.endpoint.toURL();
          if (nav_url)
            return `<a href="${nav_url}" class="yt-ch-link" display: block; width: fit-content; font-size: small;><img src="${url}" style="vertical-align: middle; height: ${this.attachment.element.properties.layoutProperties.height.value}px; width: ${this.attachment.element.properties.layoutProperties.width.value}px;">${wrapped_text}</a>`;
        }
      }
    }
    if (this.endpoint) {
      const url = this.endpoint.toURL();
      if (url)
        return `<a href="${url}">${wrapped_text}</a>`;
    }
    return wrapped_text;
  }
};
__name(TextRun, "TextRun");

// dist/src/parser/classes/misc/Text.js
function escape(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
__name(escape, "escape");
var Text = class {
  constructor(data) {
    var _a4, _b2, _c, _d;
    if (typeof data === "object" && data !== null && Reflect.has(data, "runs") && Array.isArray(data.runs)) {
      this.runs = data.runs.map((run) => run.emoji ? new EmojiRun(run) : new TextRun(run));
      this.text = this.runs.map((run) => run.text).join("");
    } else {
      this.text = data === null || data === void 0 ? void 0 : data.simpleText;
    }
    if (typeof data === "object" && data !== null && Reflect.has(data, "navigationEndpoint")) {
      this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    }
    if (typeof data === "object" && data !== null && Reflect.has(data, "titleNavigationEndpoint")) {
      this.endpoint = new NavigationEndpoint_default(data.titleNavigationEndpoint);
    }
    if (!this.endpoint) {
      if ((_b2 = (_a4 = this.runs) === null || _a4 === void 0 ? void 0 : _a4[0]) === null || _b2 === void 0 ? void 0 : _b2.endpoint) {
        this.endpoint = (_d = (_c = this.runs) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.endpoint;
      }
    }
  }
  static fromAttributed(data) {
    const runs = [];
    const content = data.content;
    const command_runs = data.commandRuns;
    let last_end_index = 0;
    if (command_runs) {
      for (const item of command_runs) {
        const length = item.length;
        const start_index = item.startIndex;
        if (start_index > last_end_index) {
          runs.push({
            text: content.slice(last_end_index, start_index)
          });
        }
        if (Reflect.has(item, "onTap")) {
          let attachment = null;
          if (Reflect.has(data, "attachmentRuns")) {
            const attachment_runs = data.attachmentRuns;
            for (const attatchment_run of attachment_runs) {
              if (attatchment_run.startIndex - 2 == start_index) {
                attachment = attatchment_run;
                break;
              }
            }
          }
          if (attachment) {
            runs.push({
              text: content.slice(start_index, start_index + length),
              navigationEndpoint: item.onTap,
              attachment
            });
          } else {
            runs.push({
              text: content.slice(start_index, start_index + length),
              navigationEndpoint: item.onTap
            });
          }
        }
        last_end_index = start_index + length;
      }
      if (last_end_index < content.length) {
        runs.push({
          text: content.slice(last_end_index)
        });
      }
    } else {
      runs.push({
        text: content
      });
    }
    return new Text({ runs });
  }
  toHTML() {
    return this.runs ? this.runs.map((run) => run.toHTML()).join("") : this.text;
  }
  isEmpty() {
    return this.text === void 0;
  }
  toString() {
    return this.text || "N/A";
  }
};
__name(Text, "Text");

// dist/src/parser/classes/CardCollection.js
var CardCollection = class extends YTNode {
  constructor(data) {
    super();
    this.cards = parser_default.parseArray(data.cards);
    this.header = new Text(data.headerText);
    this.allow_teaser_dismiss = data.allowTeaserDismiss;
  }
};
__name(CardCollection, "CardCollection");
CardCollection.type = "CardCollection";
var CardCollection_default = CardCollection;

// dist/src/parser/classes/Endscreen.js
var Endscreen = class extends YTNode {
  constructor(data) {
    super();
    this.elements = parser_default.parseArray(data.elements);
    this.start_ms = data.startMs;
  }
};
__name(Endscreen, "Endscreen");
Endscreen.type = "Endscreen";
var Endscreen_default = Endscreen;

// dist/src/parser/classes/PlayerAnnotationsExpanded.js
var PlayerAnnotationsExpanded = class extends YTNode {
  constructor(data) {
    super();
    if (Reflect.has(data, "featuredChannel")) {
      this.featured_channel = {
        start_time_ms: data.featuredChannel.startTimeMs,
        end_time_ms: data.featuredChannel.endTimeMs,
        watermark: Thumbnail.fromResponse(data.featuredChannel.watermark),
        channel_name: data.featuredChannel.channelName,
        endpoint: new NavigationEndpoint_default(data.featuredChannel.navigationEndpoint),
        subscribe_button: parser_default.parseItem(data.featuredChannel.subscribeButton)
      };
    }
    this.allow_swipe_dismiss = data.allowSwipeDismiss;
    this.annotation_id = data.annotationId;
  }
};
__name(PlayerAnnotationsExpanded, "PlayerAnnotationsExpanded");
PlayerAnnotationsExpanded.type = "PlayerAnnotationsExpanded";
var PlayerAnnotationsExpanded_default = PlayerAnnotationsExpanded;

// dist/src/parser/classes/PlayerCaptionsTracklist.js
var PlayerCaptionsTracklist = class extends YTNode {
  constructor(data) {
    super();
    if (Reflect.has(data, "captionTracks")) {
      this.caption_tracks = data.captionTracks.map((ct) => ({
        base_url: ct.baseUrl,
        name: new Text(ct.name),
        vss_id: ct.vssId,
        language_code: ct.languageCode,
        kind: ct.kind,
        is_translatable: ct.isTranslatable
      }));
    }
    if (Reflect.has(data, "audioTracks")) {
      this.audio_tracks = data.audioTracks.map((at) => ({
        audio_track_id: at.audioTrackId,
        captions_initial_state: at.captionsInitialState,
        default_caption_track_index: at.defaultCaptionTrackIndex,
        has_default_track: at.hasDefaultTrack,
        visibility: at.visibility,
        caption_track_indices: at.captionTrackIndices
      }));
    }
    if (Reflect.has(data, "defaultAudioTrackIndex")) {
      this.default_audio_track_index = data.defaultAudioTrackIndex;
    }
    if (Reflect.has(data, "translationLanguages")) {
      this.translation_languages = data.translationLanguages.map((tl) => ({
        language_code: tl.languageCode,
        language_name: new Text(tl.languageName)
      }));
    }
  }
};
__name(PlayerCaptionsTracklist, "PlayerCaptionsTracklist");
PlayerCaptionsTracklist.type = "PlayerCaptionsTracklist";
var PlayerCaptionsTracklist_default = PlayerCaptionsTracklist;

// dist/src/parser/classes/PlayerLiveStoryboardSpec.js
var PlayerLiveStoryboardSpec = class extends YTNode {
  constructor() {
    super();
  }
};
__name(PlayerLiveStoryboardSpec, "PlayerLiveStoryboardSpec");
PlayerLiveStoryboardSpec.type = "PlayerLiveStoryboardSpec";
var PlayerLiveStoryboardSpec_default = PlayerLiveStoryboardSpec;

// dist/src/parser/classes/PlayerStoryboardSpec.js
var PlayerStoryboardSpec = class extends YTNode {
  constructor(data) {
    super();
    const parts = data.spec.split("|");
    const url = new URL(parts.shift());
    this.boards = parts.map((part, i) => {
      const [thumbnail_width, thumbnail_height, thumbnail_count, columns, rows, interval, name, sigh] = part.split("#");
      url.searchParams.set("sigh", sigh);
      const storyboard_count = Math.ceil(parseInt(thumbnail_count, 10) / (parseInt(columns, 10) * parseInt(rows, 10)));
      return {
        template_url: url.toString().replace("$L", i).replace("$N", name),
        thumbnail_width: parseInt(thumbnail_width, 10),
        thumbnail_height: parseInt(thumbnail_height, 10),
        thumbnail_count: parseInt(thumbnail_count, 10),
        interval: parseInt(interval, 10),
        columns: parseInt(columns, 10),
        rows: parseInt(rows, 10),
        storyboard_count
      };
    });
  }
};
__name(PlayerStoryboardSpec, "PlayerStoryboardSpec");
PlayerStoryboardSpec.type = "PlayerStoryboardSpec";
var PlayerStoryboardSpec_default = PlayerStoryboardSpec;

// dist/src/parser/classes/Alert.js
var Alert = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text(data.text);
    this.alert_type = data.type;
  }
};
__name(Alert, "Alert");
Alert.type = "Alert";
var Alert_default = Alert;

// dist/src/parser/classes/AlertWithButton.js
var AlertWithButton = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text(data.text);
    this.alert_type = data.type;
    this.dismiss_button = parser_exports.parseItem(data.dismissButton, Button_default);
  }
};
__name(AlertWithButton, "AlertWithButton");
AlertWithButton.type = "AlertWithButton";
var AlertWithButton_default = AlertWithButton;

// dist/src/parser/classes/menus/MusicMultiSelectMenuItem.js
var MusicMultiSelectMenuItem = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title).toString();
    this.form_item_entity_key = data.formItemEntityKey;
    if (Reflect.has(data, "selectedIcon")) {
      this.selected_icon_type = data.selectedIcon.iconType;
    }
    if (Reflect.has(data, "selectedCommand")) {
      this.endpoint = new NavigationEndpoint_default(data.selectedCommand);
    }
    this.selected = !!this.endpoint;
  }
};
__name(MusicMultiSelectMenuItem, "MusicMultiSelectMenuItem");
MusicMultiSelectMenuItem.type = "MusicMultiSelectMenuItem";
var MusicMultiSelectMenuItem_default = MusicMultiSelectMenuItem;

// dist/src/parser/classes/misc/Format.js
var Format = class {
  constructor(data) {
    var _a4, _b2, _c, _d, _e, _f;
    this.itag = data.itag;
    this.mime_type = data.mimeType;
    this.is_type_otf = data.type === "FORMAT_STREAM_TYPE_OTF";
    this.bitrate = data.bitrate;
    this.average_bitrate = data.averageBitrate;
    this.width = data.width;
    this.height = data.height;
    this.init_range = data.initRange ? {
      start: parseInt(data.initRange.start),
      end: parseInt(data.initRange.end)
    } : void 0;
    this.index_range = data.indexRange ? {
      start: parseInt(data.indexRange.start),
      end: parseInt(data.indexRange.end)
    } : void 0;
    this.last_modified = new Date(Math.floor(parseInt(data.lastModified) / 1e3));
    this.content_length = parseInt(data.contentLength);
    this.quality = data.quality;
    this.quality_label = data.qualityLabel;
    this.fps = data.fps;
    this.url = data.url;
    this.cipher = data.cipher;
    this.signature_cipher = data.signatureCipher;
    this.audio_quality = data.audioQuality;
    this.approx_duration_ms = parseInt(data.approxDurationMs);
    this.audio_sample_rate = parseInt(data.audioSampleRate);
    this.audio_channels = data.audioChannels;
    this.loudness_db = data.loudnessDb;
    this.has_audio = !!data.audioBitrate || !!data.audioQuality;
    this.has_video = !!data.qualityLabel;
    this.color_info = data.colorInfo ? {
      primaries: (_a4 = data.colorInfo.primaries) === null || _a4 === void 0 ? void 0 : _a4.replace("COLOR_PRIMARIES_", ""),
      transfer_characteristics: (_b2 = data.colorInfo.transferCharacteristics) === null || _b2 === void 0 ? void 0 : _b2.replace("COLOR_TRANSFER_CHARACTERISTICS_", ""),
      matrix_coefficients: (_c = data.colorInfo.matrixCoefficients) === null || _c === void 0 ? void 0 : _c.replace("COLOR_MATRIX_COEFFICIENTS_", "")
    } : void 0;
    if (this.has_audio) {
      const args = new URLSearchParams(this.cipher || this.signature_cipher);
      const url_components = new URLSearchParams(args.get("url") || this.url);
      const xtags = (_d = url_components.get("xtags")) === null || _d === void 0 ? void 0 : _d.split(":");
      const audio_content = (_e = xtags === null || xtags === void 0 ? void 0 : xtags.find((x) => x.startsWith("acont="))) === null || _e === void 0 ? void 0 : _e.split("=")[1];
      this.language = ((_f = xtags === null || xtags === void 0 ? void 0 : xtags.find((x) => x.startsWith("lang="))) === null || _f === void 0 ? void 0 : _f.split("=")[1]) || null;
      this.is_dubbed = audio_content === "dubbed";
      this.is_descriptive = audio_content === "descriptive";
      this.is_original = audio_content === "original" || !this.is_dubbed && !this.is_descriptive;
      if (Reflect.has(data, "audioTrack")) {
        this.audio_track = {
          audio_is_default: data.audioTrack.audioIsDefault,
          display_name: data.audioTrack.displayName,
          id: data.audioTrack.id
        };
      }
    }
  }
  decipher(player) {
    if (!player)
      throw new InnertubeError("Cannot decipher format, this session appears to have no valid player.");
    return player.decipher(this.url, this.signature_cipher, this.cipher);
  }
};
__name(Format, "Format");

// dist/src/parser/classes/misc/VideoDetails.js
var VideoDetails = class {
  constructor(data) {
    this.id = data.videoId;
    this.channel_id = data.channelId;
    this.title = data.title;
    this.duration = parseInt(data.lengthSeconds);
    this.keywords = data.keywords;
    this.is_owner_viewing = !!data.isOwnerViewing;
    this.short_description = data.shortDescription;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.allow_ratings = !!data.allowRatings;
    this.view_count = parseInt(data.viewCount);
    this.author = data.author;
    this.is_private = !!data.isPrivate;
    this.is_live = !!data.isLive;
    this.is_live_content = !!data.isLiveContent;
    this.is_upcoming = !!data.isUpcoming;
    this.is_post_live_dvr = !!data.isPostLiveDvr;
    this.is_crawlable = !!data.isCrawlable;
  }
};
__name(VideoDetails, "VideoDetails");

// dist/src/parser/nodes.js
var nodes_exports = {};
__export(nodes_exports, {
  AccountChannel: () => AccountChannel_default,
  AccountItemSection: () => AccountItemSection_default,
  AccountItemSectionHeader: () => AccountItemSectionHeader_default,
  AccountSectionList: () => AccountSectionList_default,
  AddBannerToLiveChatCommand: () => AddBannerToLiveChatCommand_default,
  AddChatItemAction: () => AddChatItemAction_default,
  AddLiveChatTickerItemAction: () => AddLiveChatTickerItemAction_default,
  Alert: () => Alert_default,
  AlertWithButton: () => AlertWithButton_default,
  AnalyticsMainAppKeyMetrics: () => AnalyticsMainAppKeyMetrics_default,
  AnalyticsRoot: () => AnalyticsRoot_default,
  AnalyticsShortsCarouselCard: () => AnalyticsShortsCarouselCard_default,
  AnalyticsVideo: () => AnalyticsVideo_default,
  AnalyticsVodCarouselCard: () => AnalyticsVodCarouselCard_default,
  AnchoredSection: () => AnchoredSection_default,
  AppendContinuationItemsAction: () => AppendContinuationItemsAction_default,
  AudioOnlyPlayability: () => AudioOnlyPlayability_default,
  AuthorCommentBadge: () => AuthorCommentBadge_default,
  AutomixPreviewVideo: () => AutomixPreviewVideo_default,
  BackstageImage: () => BackstageImage_default,
  BackstagePost: () => BackstagePost_default,
  BackstagePostThread: () => BackstagePostThread_default,
  BrowseFeedActions: () => BrowseFeedActions_default,
  BrowserMediaSession: () => BrowserMediaSession_default,
  Button: () => Button_default,
  C4TabbedHeader: () => C4TabbedHeader_default,
  CallToActionButton: () => CallToActionButton_default,
  Card: () => Card_default,
  CardCollection: () => CardCollection_default,
  CarouselHeader: () => CarouselHeader_default,
  CarouselItem: () => CarouselItem_default,
  CarouselLockup: () => CarouselLockup_default,
  Channel: () => Channel_default,
  ChannelAboutFullMetadata: () => ChannelAboutFullMetadata_default,
  ChannelAgeGate: () => ChannelAgeGate_default,
  ChannelFeaturedContent: () => ChannelFeaturedContent_default,
  ChannelHeaderLinks: () => ChannelHeaderLinks_default,
  ChannelHeaderLinksView: () => ChannelHeaderLinksView_default,
  ChannelMetadata: () => ChannelMetadata_default,
  ChannelMobileHeader: () => ChannelMobileHeader_default,
  ChannelOptions: () => ChannelOptions_default,
  ChannelSubMenu: () => ChannelSubMenu_default,
  ChannelThumbnailWithLink: () => ChannelThumbnailWithLink_default,
  ChannelVideoPlayer: () => ChannelVideoPlayer_default,
  Chapter: () => Chapter_default,
  ChildVideo: () => ChildVideo_default,
  ChipCloud: () => ChipCloud_default,
  ChipCloudChip: () => ChipCloudChip_default,
  CollaboratorInfoCardContent: () => CollaboratorInfoCardContent_default,
  CollageHeroImage: () => CollageHeroImage_default,
  Comment: () => Comment_default,
  CommentActionButtons: () => CommentActionButtons_default,
  CommentDialog: () => CommentDialog_default,
  CommentReplies: () => CommentReplies_default,
  CommentReplyDialog: () => CommentReplyDialog_default,
  CommentSimplebox: () => CommentSimplebox_default,
  CommentThread: () => CommentThread_default,
  CommentsEntryPointHeader: () => CommentsEntryPointHeader_default,
  CommentsEntryPointTeaser: () => CommentsEntryPointTeaser_default,
  CommentsHeader: () => CommentsHeader_default,
  CommentsSimplebox: () => CommentsSimplebox_default,
  CompactChannel: () => CompactChannel_default,
  CompactLink: () => CompactLink_default,
  CompactMix: () => CompactMix_default,
  CompactMovie: () => CompactMovie_default,
  CompactPlaylist: () => CompactPlaylist_default,
  CompactStation: () => CompactStation_default,
  CompactVideo: () => CompactVideo_default,
  ConfirmDialog: () => ConfirmDialog_default,
  ContentPreviewImageView: () => ContentPreviewImageView_default,
  ContinuationItem: () => ContinuationItem_default,
  ConversationBar: () => ConversationBar_default,
  CopyLink: () => CopyLink_default,
  CreatePlaylistDialog: () => CreatePlaylistDialog_default,
  CreatorHeart: () => CreatorHeart_default,
  CtaGoToCreatorStudio: () => CtaGoToCreatorStudio_default,
  DataModelSection: () => DataModelSection_default,
  DecoratedPlayerBar: () => DecoratedPlayerBar_default,
  DefaultPromoPanel: () => DefaultPromoPanel_default,
  DidYouMean: () => DidYouMean_default,
  DimChatItemAction: () => DimChatItemAction_default,
  DownloadButton: () => DownloadButton_default,
  Dropdown: () => Dropdown_default,
  DropdownItem: () => DropdownItem_default,
  DynamicTextView: () => DynamicTextView_default,
  Element: () => Element_default,
  EmergencyOnebox: () => EmergencyOnebox_default,
  EmojiPicker: () => EmojiPicker_default,
  EmojiPickerCategory: () => EmojiPickerCategory_default,
  EmojiPickerCategoryButton: () => EmojiPickerCategoryButton_default,
  EmojiPickerUpsellCategory: () => EmojiPickerUpsellCategory_default,
  EndScreenPlaylist: () => EndScreenPlaylist_default,
  EndScreenVideo: () => EndScreenVideo_default,
  Endscreen: () => Endscreen_default,
  EndscreenElement: () => EndscreenElement_default,
  EngagementPanelSectionList: () => EngagementPanelSectionList_default,
  EngagementPanelTitleHeader: () => EngagementPanelTitleHeader_default,
  ExpandableMetadata: () => ExpandableMetadata_default,
  ExpandableTab: () => ExpandableTab_default,
  ExpandableVideoDescriptionBody: () => ExpandableVideoDescriptionBody_default,
  ExpandedShelfContents: () => ExpandedShelfContents_default,
  Factoid: () => Factoid_default,
  FeedFilterChipBar: () => FeedFilterChipBar_default,
  FeedTabbedHeader: () => FeedTabbedHeader_default,
  GameCard: () => GameCard_default,
  GameDetails: () => GameDetails_default,
  Grid: () => Grid_default,
  GridChannel: () => GridChannel_default,
  GridHeader: () => GridHeader_default,
  GridMix: () => GridMix_default,
  GridMovie: () => GridMovie_default,
  GridPlaylist: () => GridPlaylist_default,
  GridShow: () => GridShow_default,
  GridVideo: () => GridVideo_default,
  GuideCollapsibleEntry: () => GuideCollapsibleEntry_default,
  GuideCollapsibleSectionEntry: () => GuideCollapsibleSectionEntry_default,
  GuideDownloadsEntry: () => GuideDownloadsEntry_default,
  GuideEntry: () => GuideEntry_default,
  GuideSection: () => GuideSection_default,
  GuideSubscriptionsSection: () => GuideSubscriptionsSection_default,
  HashtagHeader: () => HashtagHeader_default,
  HashtagTile: () => HashtagTile_default,
  HeatMarker: () => HeatMarker_default,
  Heatmap: () => Heatmap_default,
  HeroPlaylistThumbnail: () => HeroPlaylistThumbnail_default,
  HighlightsCarousel: () => HighlightsCarousel_default,
  HistorySuggestion: () => HistorySuggestion_default,
  HorizontalCardList: () => HorizontalCardList_default,
  HorizontalList: () => HorizontalList_default,
  HorizontalMovieList: () => HorizontalMovieList_default,
  IconLink: () => IconLink_default,
  IncludingResultsFor: () => IncludingResultsFor_default,
  InfoPanelContainer: () => InfoPanelContainer_default,
  InfoPanelContent: () => InfoPanelContent_default,
  InfoRow: () => InfoRow_default,
  InteractiveTabbedHeader: () => InteractiveTabbedHeader_default,
  ItemSection: () => ItemSection_default,
  ItemSectionHeader: () => ItemSectionHeader_default,
  ItemSectionTab: () => ItemSectionTab_default,
  ItemSectionTabbedHeader: () => ItemSectionTabbedHeader_default,
  KidsCategoriesHeader: () => KidsCategoriesHeader_default,
  KidsCategoryTab: () => KidsCategoryTab_default,
  KidsHomeScreen: () => KidsHomeScreen_default,
  LikeButton: () => LikeButton_default,
  LiveChat: () => LiveChat_default,
  LiveChatActionPanel: () => LiveChatActionPanel_default,
  LiveChatAuthorBadge: () => LiveChatAuthorBadge_default,
  LiveChatAutoModMessage: () => LiveChatAutoModMessage_default,
  LiveChatBanner: () => LiveChatBanner_default,
  LiveChatBannerHeader: () => LiveChatBannerHeader_default,
  LiveChatBannerPoll: () => LiveChatBannerPoll_default,
  LiveChatDialog: () => LiveChatDialog_default,
  LiveChatHeader: () => LiveChatHeader_default,
  LiveChatItemList: () => LiveChatItemList_default,
  LiveChatMembershipItem: () => LiveChatMembershipItem_default,
  LiveChatMessageInput: () => LiveChatMessageInput_default,
  LiveChatPaidMessage: () => LiveChatPaidMessage_default,
  LiveChatPaidSticker: () => LiveChatPaidSticker_default,
  LiveChatParticipant: () => LiveChatParticipant_default,
  LiveChatParticipantsList: () => LiveChatParticipantsList_default,
  LiveChatPlaceholderItem: () => LiveChatPlaceholderItem_default,
  LiveChatProductItem: () => LiveChatProductItem_default,
  LiveChatRestrictedParticipation: () => LiveChatRestrictedParticipation_default,
  LiveChatTextMessage: () => LiveChatTextMessage_default,
  LiveChatTickerPaidMessageItem: () => LiveChatTickerPaidMessageItem_default,
  LiveChatTickerPaidStickerItem: () => LiveChatTickerPaidStickerItem_default,
  LiveChatTickerSponsorItem: () => LiveChatTickerSponsorItem_default,
  LiveChatViewerEngagementMessage: () => LiveChatViewerEngagementMessage_default,
  MacroMarkersInfoItem: () => MacroMarkersInfoItem_default,
  MacroMarkersList: () => MacroMarkersList_default,
  MacroMarkersListItem: () => MacroMarkersListItem_default,
  MarkChatItemAsDeletedAction: () => MarkChatItemAsDeletedAction_default,
  MarkChatItemsByAuthorAsDeletedAction: () => MarkChatItemsByAuthorAsDeletedAction_default,
  Menu: () => Menu_default,
  MenuNavigationItem: () => MenuNavigationItem_default,
  MenuServiceItem: () => MenuServiceItem_default,
  MenuServiceItemDownload: () => MenuServiceItemDownload_default,
  MerchandiseItem: () => MerchandiseItem_default,
  MerchandiseShelf: () => MerchandiseShelf_default,
  Message: () => Message_default,
  MetadataBadge: () => MetadataBadge_default,
  MetadataRow: () => MetadataRow_default,
  MetadataRowContainer: () => MetadataRowContainer_default,
  MetadataRowHeader: () => MetadataRowHeader_default,
  MetadataScreen: () => MetadataScreen_default,
  MicroformatData: () => MicroformatData_default,
  Mix: () => Mix_default,
  Movie: () => Movie_default,
  MovingThumbnail: () => MovingThumbnail_default,
  MultiMarkersPlayerBar: () => MultiMarkersPlayerBar_default,
  MultiPageMenu: () => MultiPageMenu_default,
  MultiPageMenuNotificationSection: () => MultiPageMenuNotificationSection_default,
  MusicCardShelf: () => MusicCardShelf_default,
  MusicCardShelfHeaderBasic: () => MusicCardShelfHeaderBasic_default,
  MusicCarouselShelf: () => MusicCarouselShelf_default,
  MusicCarouselShelfBasicHeader: () => MusicCarouselShelfBasicHeader_default,
  MusicDescriptionShelf: () => MusicDescriptionShelf_default,
  MusicDetailHeader: () => MusicDetailHeader_default,
  MusicDownloadStateBadge: () => MusicDownloadStateBadge_default,
  MusicEditablePlaylistDetailHeader: () => MusicEditablePlaylistDetailHeader_default,
  MusicElementHeader: () => MusicElementHeader_default,
  MusicHeader: () => MusicHeader_default,
  MusicImmersiveHeader: () => MusicImmersiveHeader_default,
  MusicInlineBadge: () => MusicInlineBadge_default,
  MusicItemThumbnailOverlay: () => MusicItemThumbnailOverlay_default,
  MusicLargeCardItemCarousel: () => MusicLargeCardItemCarousel_default,
  MusicMenuItemDivider: () => MusicMenuItemDivider_default,
  MusicMultiRowListItem: () => MusicMultiRowListItem_default,
  MusicMultiSelectMenu: () => MusicMultiSelectMenu_default,
  MusicMultiSelectMenuItem: () => MusicMultiSelectMenuItem_default,
  MusicNavigationButton: () => MusicNavigationButton_default,
  MusicPlayButton: () => MusicPlayButton_default,
  MusicPlaylistShelf: () => MusicPlaylistShelf_default,
  MusicQueue: () => MusicQueue_default,
  MusicResponsiveListItem: () => MusicResponsiveListItem_default,
  MusicResponsiveListItemFixedColumn: () => MusicResponsiveListItemFixedColumn_default,
  MusicResponsiveListItemFlexColumn: () => MusicResponsiveListItemFlexColumn_default,
  MusicShelf: () => MusicShelf_default,
  MusicSideAlignedItem: () => MusicSideAlignedItem_default,
  MusicSortFilterButton: () => MusicSortFilterButton_default,
  MusicTastebuilderShelf: () => MusicTastebuilderShelf_default,
  MusicTastebuilderShelfThumbnail: () => MusicTastebuilderShelfThumbnail_default,
  MusicThumbnail: () => MusicThumbnail_default,
  MusicTwoRowItem: () => MusicTwoRowItem_default,
  MusicVisualHeader: () => MusicVisualHeader_default,
  NavigationEndpoint: () => NavigationEndpoint_default,
  Notification: () => Notification_default,
  OpenPopupAction: () => OpenPopupAction_default,
  PageHeader: () => PageHeader_default,
  PageHeaderView: () => PageHeaderView_default,
  PageIntroduction: () => PageIntroduction_default,
  PdgCommentChip: () => PdgCommentChip_default,
  PlayerAnnotationsExpanded: () => PlayerAnnotationsExpanded_default,
  PlayerCaptionsTracklist: () => PlayerCaptionsTracklist_default,
  PlayerErrorMessage: () => PlayerErrorMessage_default,
  PlayerLegacyDesktopYpcOffer: () => PlayerLegacyDesktopYpcOffer_default,
  PlayerLegacyDesktopYpcTrailer: () => PlayerLegacyDesktopYpcTrailer_default,
  PlayerLiveStoryboardSpec: () => PlayerLiveStoryboardSpec_default,
  PlayerMicroformat: () => PlayerMicroformat_default,
  PlayerOverlay: () => PlayerOverlay_default,
  PlayerOverlayAutoplay: () => PlayerOverlayAutoplay_default,
  PlayerStoryboardSpec: () => PlayerStoryboardSpec_default,
  Playlist: () => Playlist_default,
  PlaylistCustomThumbnail: () => PlaylistCustomThumbnail_default,
  PlaylistHeader: () => PlaylistHeader_default,
  PlaylistInfoCardContent: () => PlaylistInfoCardContent_default,
  PlaylistMetadata: () => PlaylistMetadata_default,
  PlaylistPanel: () => PlaylistPanel_default,
  PlaylistPanelVideo: () => PlaylistPanelVideo_default,
  PlaylistPanelVideoWrapper: () => PlaylistPanelVideoWrapper_default,
  PlaylistSidebar: () => PlaylistSidebar_default,
  PlaylistSidebarPrimaryInfo: () => PlaylistSidebarPrimaryInfo_default,
  PlaylistSidebarSecondaryInfo: () => PlaylistSidebarSecondaryInfo_default,
  PlaylistVideo: () => PlaylistVideo_default,
  PlaylistVideoList: () => PlaylistVideoList_default,
  PlaylistVideoThumbnail: () => PlaylistVideoThumbnail_default,
  Poll: () => Poll_default,
  PollHeader: () => PollHeader_default,
  Post: () => Post_default,
  PostMultiImage: () => PostMultiImage_default,
  ProfileColumn: () => ProfileColumn_default,
  ProfileColumnStats: () => ProfileColumnStats_default,
  ProfileColumnStatsEntry: () => ProfileColumnStatsEntry_default,
  ProfileColumnUserInfo: () => ProfileColumnUserInfo_default,
  Quiz: () => Quiz_default,
  RecognitionShelf: () => RecognitionShelf_default,
  ReelItem: () => ReelItem_default,
  ReelShelf: () => ReelShelf_default,
  RelatedChipCloud: () => RelatedChipCloud_default,
  RemoveBannerForLiveChatCommand: () => RemoveBannerForLiveChatCommand_default,
  RemoveChatItemAction: () => RemoveChatItemAction_default,
  RemoveChatItemByAuthorAction: () => RemoveChatItemByAuthorAction_default,
  ReplaceChatItemAction: () => ReplaceChatItemAction_default,
  ReplayChatItemAction: () => ReplayChatItemAction_default,
  RichGrid: () => RichGrid_default,
  RichItem: () => RichItem_default,
  RichListHeader: () => RichListHeader_default,
  RichMetadata: () => RichMetadata_default,
  RichMetadataRow: () => RichMetadataRow_default,
  RichSection: () => RichSection_default,
  RichShelf: () => RichShelf_default,
  SearchBox: () => SearchBox_default,
  SearchFilter: () => SearchFilter_default,
  SearchFilterGroup: () => SearchFilterGroup_default,
  SearchFilterOptionsDialog: () => SearchFilterOptionsDialog_default,
  SearchHeader: () => SearchHeader_default,
  SearchRefinementCard: () => SearchRefinementCard_default,
  SearchSubMenu: () => SearchSubMenu_default,
  SearchSuggestion: () => SearchSuggestion_default,
  SearchSuggestionsSection: () => SearchSuggestionsSection_default,
  SecondarySearchContainer: () => SecondarySearchContainer_default,
  SectionList: () => SectionList_default,
  SegmentedLikeDislikeButton: () => SegmentedLikeDislikeButton_default,
  SettingBoolean: () => SettingBoolean_default,
  SettingsCheckbox: () => SettingsCheckbox_default,
  SettingsOptions: () => SettingsOptions_default,
  SettingsSidebar: () => SettingsSidebar_default,
  SettingsSwitch: () => SettingsSwitch_default,
  SharedPost: () => SharedPost_default,
  Shelf: () => Shelf_default,
  ShowCustomThumbnail: () => ShowCustomThumbnail_default,
  ShowLiveChatActionPanelAction: () => ShowLiveChatActionPanelAction_default,
  ShowLiveChatDialogAction: () => ShowLiveChatDialogAction_default,
  ShowLiveChatTooltipCommand: () => ShowLiveChatTooltipCommand_default,
  ShowingResultsFor: () => ShowingResultsFor_default,
  SimpleCardContent: () => SimpleCardContent_default,
  SimpleCardTeaser: () => SimpleCardTeaser_default,
  SimpleMenuHeader: () => SimpleMenuHeader_default,
  SimpleTextSection: () => SimpleTextSection_default,
  SingleActionEmergencySupport: () => SingleActionEmergencySupport_default,
  SingleColumnBrowseResults: () => SingleColumnBrowseResults_default,
  SingleColumnMusicWatchNextResults: () => SingleColumnMusicWatchNextResults_default,
  SingleHeroImage: () => SingleHeroImage_default,
  SlimOwner: () => SlimOwner_default,
  SlimVideoMetadata: () => SlimVideoMetadata_default,
  SortFilterSubMenu: () => SortFilterSubMenu_default,
  SponsorCommentBadge: () => SponsorCommentBadge_default,
  StatRow: () => StatRow_default,
  StructuredDescriptionContent: () => StructuredDescriptionContent_default,
  SubFeedOption: () => SubFeedOption_default,
  SubFeedSelector: () => SubFeedSelector_default,
  SubscribeButton: () => SubscribeButton_default,
  SubscriptionNotificationToggleButton: () => SubscriptionNotificationToggleButton_default,
  Tab: () => Tab_default,
  Tabbed: () => Tabbed_default,
  TabbedSearchResults: () => TabbedSearchResults_default,
  TextHeader: () => TextHeader_default,
  ThumbnailLandscapePortrait: () => ThumbnailLandscapePortrait_default,
  ThumbnailOverlayBottomPanel: () => ThumbnailOverlayBottomPanel_default,
  ThumbnailOverlayEndorsement: () => ThumbnailOverlayEndorsement_default,
  ThumbnailOverlayHoverText: () => ThumbnailOverlayHoverText_default,
  ThumbnailOverlayInlineUnplayable: () => ThumbnailOverlayInlineUnplayable_default,
  ThumbnailOverlayLoadingPreview: () => ThumbnailOverlayLoadingPreview_default,
  ThumbnailOverlayNowPlaying: () => ThumbnailOverlayNowPlaying_default,
  ThumbnailOverlayPinking: () => ThumbnailOverlayPinking_default,
  ThumbnailOverlayPlaybackStatus: () => ThumbnailOverlayPlaybackStatus_default,
  ThumbnailOverlayResumePlayback: () => ThumbnailOverlayResumePlayback_default,
  ThumbnailOverlaySidePanel: () => ThumbnailOverlaySidePanel_default,
  ThumbnailOverlayTimeStatus: () => ThumbnailOverlayTimeStatus_default,
  ThumbnailOverlayToggleButton: () => ThumbnailOverlayToggleButton_default,
  TimedMarkerDecoration: () => TimedMarkerDecoration_default,
  TitleAndButtonListHeader: () => TitleAndButtonListHeader_default,
  ToggleButton: () => ToggleButton_default,
  ToggleMenuServiceItem: () => ToggleMenuServiceItem_default,
  Tooltip: () => Tooltip_default,
  TopicChannelDetails: () => TopicChannelDetails_default,
  TwoColumnBrowseResults: () => TwoColumnBrowseResults_default,
  TwoColumnSearchResults: () => TwoColumnSearchResults_default,
  TwoColumnWatchNextResults: () => TwoColumnWatchNextResults_default,
  UniversalWatchCard: () => UniversalWatchCard_default,
  UpdateDateTextAction: () => UpdateDateTextAction_default,
  UpdateDescriptionAction: () => UpdateDescriptionAction_default,
  UpdateLiveChatPollAction: () => UpdateLiveChatPollAction_default,
  UpdateTitleAction: () => UpdateTitleAction_default,
  UpdateToggleButtonTextAction: () => UpdateToggleButtonTextAction_default,
  UpdateViewershipAction: () => UpdateViewershipAction_default,
  UpsellDialog: () => UpsellDialog_default,
  VerticalList: () => VerticalList_default,
  VerticalWatchCardList: () => VerticalWatchCardList_default,
  Video: () => Video_default,
  VideoCard: () => VideoCard_default,
  VideoDescriptionHeader: () => VideoDescriptionHeader_default,
  VideoDescriptionInfocardsSection: () => VideoDescriptionInfocardsSection_default,
  VideoDescriptionMusicSection: () => VideoDescriptionMusicSection_default,
  VideoInfoCardContent: () => VideoInfoCardContent_default,
  VideoOwner: () => VideoOwner_default,
  VideoPrimaryInfo: () => VideoPrimaryInfo_default,
  VideoSecondaryInfo: () => VideoSecondaryInfo_default,
  WatchCardCompactVideo: () => WatchCardCompactVideo_default,
  WatchCardHeroVideo: () => WatchCardHeroVideo_default,
  WatchCardRichHeader: () => WatchCardRichHeader_default,
  WatchCardSectionSequence: () => WatchCardSectionSequence_default,
  WatchNextEndScreen: () => WatchNextEndScreen_default,
  WatchNextTabbedResults: () => WatchNextTabbedResults_default,
  YpcTrailer: () => YpcTrailer_default
});

// dist/src/parser/classes/AccountChannel.js
var AccountChannel = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
  }
};
__name(AccountChannel, "AccountChannel");
AccountChannel.type = "AccountChannel";
var AccountChannel_default = AccountChannel;

// dist/src/parser/classes/AccountItemSectionHeader.js
var AccountItemSectionHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
  }
};
__name(AccountItemSectionHeader, "AccountItemSectionHeader");
AccountItemSectionHeader.type = "AccountItemSectionHeader";
var AccountItemSectionHeader_default = AccountItemSectionHeader;

// dist/src/parser/classes/AccountItemSection.js
var AccountItem = class extends YTNode {
  constructor(data) {
    super();
    this.account_name = new Text(data.accountName);
    this.account_photo = Thumbnail.fromResponse(data.accountPhoto);
    this.is_selected = !!data.isSelected;
    this.is_disabled = !!data.isDisabled;
    this.has_channel = !!data.hasChannel;
    this.endpoint = new NavigationEndpoint_default(data.serviceEndpoint);
    this.account_byline = new Text(data.accountByline);
  }
};
__name(AccountItem, "AccountItem");
AccountItem.type = "AccountItem";
var AccountItemSection = class extends YTNode {
  constructor(data) {
    super();
    this.contents = observe(data.contents.map((ac) => new AccountItem(ac.accountItem)));
    this.header = parser_default.parseItem(data.header, AccountItemSectionHeader_default);
  }
};
__name(AccountItemSection, "AccountItemSection");
AccountItemSection.type = "AccountItemSection";
var AccountItemSection_default = AccountItemSection;

// dist/src/parser/classes/AccountSectionList.js
var AccountSectionList = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parseItem(data.contents[0], AccountItemSection_default);
    this.footers = parser_default.parseItem(data.footers[0], AccountChannel_default);
  }
};
__name(AccountSectionList, "AccountSectionList");
AccountSectionList.type = "AccountSectionList";
var AccountSectionList_default = AccountSectionList;

// dist/src/parser/classes/actions/AppendContinuationItemsAction.js
var AppendContinuationItemsAction = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parseArray(data.continuationItems);
    this.target = data.target;
  }
};
__name(AppendContinuationItemsAction, "AppendContinuationItemsAction");
AppendContinuationItemsAction.type = "AppendContinuationItemsAction";
var AppendContinuationItemsAction_default = AppendContinuationItemsAction;

// dist/src/parser/classes/analytics/DataModelSection.js
var DataModelSection = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.metric_value = data.metricValue;
    this.comparison_indicator = data.comparisonIndicator;
    const line_series = data.seriesConfiguration.lineSeries;
    this.series_configuration = {
      line_series: {
        lines_data: {
          x: line_series.linesData[0].x,
          y: line_series.linesData[0].y,
          style: {
            line_width: line_series.linesData[0].style.lineWidth,
            line_color: line_series.linesData[0].style.lineColor
          }
        },
        domain_axis: {
          tick_values: line_series.domainAxis.tickValues,
          custom_formatter: line_series.domainAxis.customFormatter
        },
        measure_axis: {
          tick_values: line_series.measureAxis.tickValues,
          custom_formatter: line_series.measureAxis.customFormatter
        }
      }
    };
  }
};
__name(DataModelSection, "DataModelSection");
DataModelSection.type = "DataModelSection";
var DataModelSection_default = DataModelSection;

// dist/src/parser/classes/analytics/AnalyticsMainAppKeyMetrics.js
var AnalyticsMainAppKeyMetrics = class extends YTNode {
  constructor(data) {
    super();
    this.period = data.cardData.periodLabel;
    const metrics_data = data.cardData.sections[0].analyticsKeyMetricsData;
    this.sections = metrics_data.dataModel.sections.map((section) => new DataModelSection_default(section));
  }
};
__name(AnalyticsMainAppKeyMetrics, "AnalyticsMainAppKeyMetrics");
AnalyticsMainAppKeyMetrics.type = "AnalyticsMainAppKeyMetrics";
var AnalyticsMainAppKeyMetrics_default = AnalyticsMainAppKeyMetrics;

// dist/src/parser/classes/analytics/AnalyticsRoot.js
var AnalyticsRoot = class extends YTNode {
  constructor(data) {
    super();
    const cards = data.analyticsTableCarouselData.data.tableCards;
    this.title = data.analyticsTableCarouselData.carouselTitle;
    this.selected_card_index_key = data.analyticsTableCarouselData.selectedCardIndexKey;
    this.table_cards = cards.map((card) => ({
      title: card.cardData.title,
      rows: card.cardData.rows.map((row) => ({
        label: row.label,
        display_value: row.displayValue,
        display_value_a11y: row.displayValueA11y,
        bar_ratio: row.barRatio,
        bar_color: row.barColor,
        bar_opacity: row.barOpacity
      }))
    }));
    this.use_main_app_specs = data.analyticsTableCarouselData.useMainAppSpecs;
  }
};
__name(AnalyticsRoot, "AnalyticsRoot");
AnalyticsRoot.type = "AnalyticsRoot";
var AnalyticsRoot_default = AnalyticsRoot;

// dist/src/parser/classes/analytics/AnalyticsShortsCarouselCard.js
var AnalyticsShortsCarouselCard = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    this.shorts = data.shortsCarouselData.shorts.map((short) => ({
      description: short.shortsDescription,
      thumbnail_url: short.thumbnailUrl,
      endpoint: new NavigationEndpoint_default(short.videoEndpoint)
    }));
  }
};
__name(AnalyticsShortsCarouselCard, "AnalyticsShortsCarouselCard");
AnalyticsShortsCarouselCard.type = "AnalyticsShortsCarouselCard";
var AnalyticsShortsCarouselCard_default = AnalyticsShortsCarouselCard;

// dist/src/parser/classes/analytics/AnalyticsVideo.js
var AnalyticsVideo = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.videoTitle;
    this.metadata = {
      views: data.videoDescription.split("\xB7")[0].trim(),
      published: data.videoDescription.split("\xB7")[1].trim(),
      thumbnails: Thumbnail.fromResponse(data.thumbnailDetails),
      duration: data.formattedLength,
      is_short: data.isShort
    };
  }
};
__name(AnalyticsVideo, "AnalyticsVideo");
AnalyticsVideo.type = "AnalyticsVideo";
var AnalyticsVideo_default = AnalyticsVideo;

// dist/src/parser/classes/analytics/AnalyticsVodCarouselCard.js
var AnalyticsVodCarouselCard = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    if (Reflect.has(data, "noDataMessage")) {
      this.no_data_message = data.noDataMessage;
    }
    if (Reflect.has(data, "videoCarouselData") && Reflect.has(data.videoCarouselData, "videos")) {
      this.videos = data.videoCarouselData.videos.map((video) => new AnalyticsVideo_default(video));
    }
  }
};
__name(AnalyticsVodCarouselCard, "AnalyticsVodCarouselCard");
AnalyticsVodCarouselCard.type = "AnalyticsVodCarouselCard";
var AnalyticsVodCarouselCard_default = AnalyticsVodCarouselCard;

// dist/src/parser/classes/analytics/CtaGoToCreatorStudio.js
var CtaGoToCreatorStudio = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.buttonLabel;
    this.use_new_specs = data.useNewSpecs;
  }
};
__name(CtaGoToCreatorStudio, "CtaGoToCreatorStudio");
CtaGoToCreatorStudio.type = "CtaGoToCreatorStudio";
var CtaGoToCreatorStudio_default = CtaGoToCreatorStudio;

// dist/src/parser/classes/analytics/StatRow.js
var StatRow = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.contents = new Text(data.contents);
  }
};
__name(StatRow, "StatRow");
StatRow.type = "StatRow";
var StatRow_default = StatRow;

// dist/src/parser/classes/AutomixPreviewVideo.js
var AutomixPreviewVideo = class extends YTNode {
  constructor(data) {
    var _a4, _b2;
    super();
    if ((_b2 = (_a4 = data === null || data === void 0 ? void 0 : data.content) === null || _a4 === void 0 ? void 0 : _a4.automixPlaylistVideoRenderer) === null || _b2 === void 0 ? void 0 : _b2.navigationEndpoint) {
      this.playlist_video = {
        endpoint: new NavigationEndpoint_default(data.content.automixPlaylistVideoRenderer.navigationEndpoint)
      };
    }
  }
};
__name(AutomixPreviewVideo, "AutomixPreviewVideo");
AutomixPreviewVideo.type = "AutomixPreviewVideo";
var AutomixPreviewVideo_default = AutomixPreviewVideo;

// dist/src/parser/classes/BackstageImage.js
var BackstageImage = class extends YTNode {
  constructor(data) {
    super();
    this.image = Thumbnail.fromResponse(data.image);
    this.endpoint = new NavigationEndpoint_default(data.command);
  }
};
__name(BackstageImage, "BackstageImage");
BackstageImage.type = "BackstageImage";
var BackstageImage_default = BackstageImage;

// dist/src/parser/classes/ToggleButton.js
var ToggleButton = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c, _d, _e, _f, _g, _h;
    super();
    this.text = new Text(data.defaultText);
    this.toggled_text = new Text(data.toggledText);
    this.tooltip = data.defaultTooltip;
    this.toggled_tooltip = data.toggledTooltip;
    this.is_toggled = data.isToggled;
    this.is_disabled = data.isDisabled;
    this.icon_type = data.defaultIcon.iconType;
    const acc_label = ((_c = (_b2 = (_a4 = data === null || data === void 0 ? void 0 : data.defaultText) === null || _a4 === void 0 ? void 0 : _a4.accessibility) === null || _b2 === void 0 ? void 0 : _b2.accessibilityData) === null || _c === void 0 ? void 0 : _c.label) || ((_e = (_d = data === null || data === void 0 ? void 0 : data.accessibilityData) === null || _d === void 0 ? void 0 : _d.accessibilityData) === null || _e === void 0 ? void 0 : _e.label) || ((_f = data === null || data === void 0 ? void 0 : data.accessibility) === null || _f === void 0 ? void 0 : _f.label);
    if (this.icon_type == "LIKE") {
      this.like_count = parseInt(acc_label.replace(/\D/g, ""));
      this.short_like_count = new Text(data.defaultText).toString();
    }
    this.endpoint = ((_h = (_g = data.defaultServiceEndpoint) === null || _g === void 0 ? void 0 : _g.commandExecutorCommand) === null || _h === void 0 ? void 0 : _h.commands) ? new NavigationEndpoint_default(data.defaultServiceEndpoint.commandExecutorCommand.commands.pop()) : new NavigationEndpoint_default(data.defaultServiceEndpoint);
    this.toggled_endpoint = new NavigationEndpoint_default(data.toggledServiceEndpoint);
    if (Reflect.has(data, "toggleButtonSupportedData") && Reflect.has(data.toggleButtonSupportedData, "toggleButtonIdData")) {
      this.button_id = data.toggleButtonSupportedData.toggleButtonIdData.id;
    }
    if (Reflect.has(data, "targetId")) {
      this.target_id = data.targetId;
    }
  }
};
__name(ToggleButton, "ToggleButton");
ToggleButton.type = "ToggleButton";
var ToggleButton_default = ToggleButton;

// dist/src/parser/classes/comments/CreatorHeart.js
var CreatorHeart = class extends YTNode {
  constructor(data) {
    var _a4, _b2;
    super();
    this.creator_thumbnail = Thumbnail.fromResponse(data.creatorThumbnail);
    if (Reflect.has(data, "heartIcon") && Reflect.has(data.heartIcon, "iconType")) {
      this.heart_icon_type = data.heartIcon.iconType;
    }
    this.heart_color = {
      basic_color_palette_data: {
        foreground_title_color: (_b2 = (_a4 = data.heartColor) === null || _a4 === void 0 ? void 0 : _a4.basicColorPaletteData) === null || _b2 === void 0 ? void 0 : _b2.foregroundTitleColor
      }
    };
    this.hearted_tooltip = data.heartedTooltip;
    this.is_hearted = data.isHearted;
    this.is_enabled = data.isEnabled;
    this.kennedy_heart_color_string = data.kennedyHeartColorString;
  }
};
__name(CreatorHeart, "CreatorHeart");
CreatorHeart.type = "CreatorHeart";
var CreatorHeart_default = CreatorHeart;

// dist/src/parser/classes/comments/CommentActionButtons.js
var CommentActionButtons = class extends YTNode {
  constructor(data) {
    super();
    this.like_button = parser_default.parseItem(data.likeButton, ToggleButton_default);
    this.dislike_button = parser_default.parseItem(data.dislikeButton, ToggleButton_default);
    this.reply_button = parser_default.parseItem(data.replyButton, Button_default);
    this.creator_heart = parser_default.parseItem(data.creatorHeart, CreatorHeart_default);
  }
};
__name(CommentActionButtons, "CommentActionButtons");
CommentActionButtons.type = "CommentActionButtons";
var CommentActionButtons_default = CommentActionButtons;

// dist/src/parser/classes/menus/Menu.js
var Menu = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parseArray(data.items);
    this.top_level_buttons = parser_default.parseArray(data.topLevelButtons);
    if (Reflect.has(data, "accessibility") && Reflect.has(data.accessibility, "accessibilityData")) {
      this.label = data.accessibility.accessibilityData.label;
    }
  }
  get contents() {
    return this.items;
  }
};
__name(Menu, "Menu");
Menu.type = "Menu";
var Menu_default = Menu;

// dist/src/parser/classes/BackstagePost.js
var BackstagePost = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.postId;
    this.author = new Author_default(Object.assign(Object.assign({}, data.authorText), { navigationEndpoint: data.authorEndpoint }), null, data.authorThumbnail);
    this.content = new Text(data.contentText);
    this.published = new Text(data.publishedTimeText);
    if (Reflect.has(data, "pollStatus")) {
      this.poll_status = data.pollStatus;
    }
    if (Reflect.has(data, "voteStatus")) {
      this.vote_status = data.voteStatus;
    }
    if (Reflect.has(data, "voteCount")) {
      this.vote_count = new Text(data.voteCount);
    }
    if (Reflect.has(data, "actionMenu")) {
      this.menu = parser_default.parseItem(data.actionMenu, Menu_default);
    }
    if (Reflect.has(data, "actionButtons")) {
      this.action_buttons = parser_default.parseItem(data.actionButtons, CommentActionButtons_default);
    }
    if (Reflect.has(data, "voteButton")) {
      this.vote_button = parser_default.parseItem(data.voteButton, CommentActionButtons_default);
    }
    if (Reflect.has(data, "navigationEndpoint")) {
      this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    }
    if (Reflect.has(data, "backstageAttachment")) {
      this.attachment = parser_default.parseItem(data.backstageAttachment);
    }
    this.surface = data.surface;
  }
};
__name(BackstagePost, "BackstagePost");
BackstagePost.type = "BackstagePost";
var BackstagePost_default = BackstagePost;

// dist/src/parser/classes/BackstagePostThread.js
var BackstagePostThread = class extends YTNode {
  constructor(data) {
    super();
    this.post = parser_default.parseItem(data.post);
  }
};
__name(BackstagePostThread, "BackstagePostThread");
BackstagePostThread.type = "BackstagePostThread";
var BackstagePostThread_default = BackstagePostThread;

// dist/src/parser/classes/BrowseFeedActions.js
var BrowseFeedActions = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parseArray(data.contents);
  }
};
__name(BrowseFeedActions, "BrowseFeedActions");
BrowseFeedActions.type = "BrowseFeedActions";
var BrowseFeedActions_default = BrowseFeedActions;

// dist/src/parser/classes/BrowserMediaSession.js
var BrowserMediaSession = class extends YTNode {
  constructor(data) {
    super();
    this.album = new Text(data.album);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnailDetails);
  }
};
__name(BrowserMediaSession, "BrowserMediaSession");
BrowserMediaSession.type = "BrowserMediaSession";
var BrowserMediaSession_default = BrowserMediaSession;

// dist/src/parser/classes/ChannelHeaderLinks.js
var HeaderLink = class extends YTNode {
  constructor(data) {
    super();
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.icon = Thumbnail.fromResponse(data.icon);
    this.title = new Text(data.title);
  }
};
__name(HeaderLink, "HeaderLink");
HeaderLink.type = "HeaderLink";
var ChannelHeaderLinks = class extends YTNode {
  constructor(data) {
    var _a4, _b2;
    super();
    this.primary = observe(((_a4 = data.primaryLinks) === null || _a4 === void 0 ? void 0 : _a4.map((link) => new HeaderLink(link))) || []);
    this.secondary = observe(((_b2 = data.secondaryLinks) === null || _b2 === void 0 ? void 0 : _b2.map((link) => new HeaderLink(link))) || []);
  }
};
__name(ChannelHeaderLinks, "ChannelHeaderLinks");
ChannelHeaderLinks.type = "ChannelHeaderLinks";
var ChannelHeaderLinks_default = ChannelHeaderLinks;

// dist/src/parser/classes/ChannelHeaderLinksView.js
var ChannelHeaderLinksView = class extends YTNode {
  constructor(data) {
    super();
    if (Reflect.has(data, "firstLink")) {
      this.first_link = Text.fromAttributed(data.firstLink);
    }
    if (Reflect.has(data, "more")) {
      this.more = Text.fromAttributed(data.more);
    }
  }
};
__name(ChannelHeaderLinksView, "ChannelHeaderLinksView");
ChannelHeaderLinksView.type = "ChannelHeaderLinksView";
var ChannelHeaderLinksView_default = ChannelHeaderLinksView;

// dist/src/parser/classes/SubscriptionNotificationToggleButton.js
var SubscriptionNotificationToggleButton = class extends YTNode {
  constructor(data) {
    super();
    this.states = data.states.map((data2) => ({
      id: data2.stateId,
      next_id: data2.nextStateId,
      state: parser_default.parse(data2.state)
    }));
    this.current_state_id = data.currentStateId;
    this.target_id = data.targetId;
  }
};
__name(SubscriptionNotificationToggleButton, "SubscriptionNotificationToggleButton");
SubscriptionNotificationToggleButton.type = "SubscriptionNotificationToggleButton";
var SubscriptionNotificationToggleButton_default = SubscriptionNotificationToggleButton;

// dist/src/parser/classes/SubscribeButton.js
var SubscribeButton = class extends YTNode {
  constructor(data) {
    var _a4, _b2;
    super();
    this.title = new Text(data.buttonText);
    this.subscribed = data.subscribed;
    this.enabled = data.enabled;
    this.item_type = data.type;
    this.channel_id = data.channelId;
    this.show_preferences = data.showPreferences;
    this.subscribed_text = new Text(data.subscribedButtonText);
    this.unsubscribed_text = new Text(data.unsubscribedButtonText);
    this.notification_preference_button = parser_default.parseItem(data.notificationPreferenceButton, SubscriptionNotificationToggleButton_default);
    this.endpoint = new NavigationEndpoint_default(((_a4 = data.serviceEndpoints) === null || _a4 === void 0 ? void 0 : _a4[0]) || ((_b2 = data.onSubscribeEndpoints) === null || _b2 === void 0 ? void 0 : _b2[0]));
  }
};
__name(SubscribeButton, "SubscribeButton");
SubscribeButton.type = "SubscribeButton";
var SubscribeButton_default = SubscribeButton;

// dist/src/parser/classes/C4TabbedHeader.js
var C4TabbedHeader = class extends YTNode {
  constructor(data) {
    super();
    this.author = new Author_default({
      simpleText: data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.badges, data.avatar);
    if (Reflect.has(data, "banner")) {
      this.banner = Thumbnail.fromResponse(data.banner);
    }
    if (Reflect.has(data, "tv_banner")) {
      this.tv_banner = Thumbnail.fromResponse(data.tvBanner);
    }
    if (Reflect.has(data, "mobile_banner")) {
      this.mobile_banner = Thumbnail.fromResponse(data.mobileBanner);
    }
    if (Reflect.has(data, "subscriberCountText")) {
      this.subscribers = new Text(data.subscriberCountText);
    }
    if (Reflect.has(data, "videosCountText")) {
      this.videos_count = new Text(data.videosCountText);
    }
    if (Reflect.has(data, "sponsorButton")) {
      this.sponsor_button = parser_default.parseItem(data.sponsorButton, Button_default);
    }
    if (Reflect.has(data, "subscribeButton")) {
      this.subscribe_button = parser_default.parseItem(data.subscribeButton, [SubscribeButton_default, Button_default]);
    }
    if (Reflect.has(data, "headerLinks")) {
      this.header_links = parser_default.parseItem(data.headerLinks, [ChannelHeaderLinks_default, ChannelHeaderLinksView_default]);
    }
    if (Reflect.has(data, "channelHandleText")) {
      this.channel_handle = new Text(data.channelHandleText);
    }
    if (Reflect.has(data, "channelId")) {
      this.channel_id = data.channelId;
    }
  }
};
__name(C4TabbedHeader, "C4TabbedHeader");
C4TabbedHeader.type = "C4TabbedHeader";
var C4TabbedHeader_default = C4TabbedHeader;

// dist/src/parser/classes/CallToActionButton.js
var CallToActionButton = class extends YTNode {
  constructor(data) {
    super();
    this.label = new Text(data.label);
    this.icon_type = data.icon.iconType;
    this.style = data.style;
  }
};
__name(CallToActionButton, "CallToActionButton");
CallToActionButton.type = "CallToActionButton";
var CallToActionButton_default = CallToActionButton;

// dist/src/parser/classes/Card.js
var Card = class extends YTNode {
  constructor(data) {
    super();
    this.teaser = parser_default.parseItem(data.teaser);
    this.content = parser_default.parseItem(data.content);
    if (Reflect.has(data, "cardId")) {
      this.card_id = data.cardId;
    }
    if (Reflect.has(data, "feature")) {
      this.feature = data.feature;
    }
    this.cue_ranges = data.cueRanges.map((cr) => ({
      start_card_active_ms: cr.startCardActiveMs,
      end_card_active_ms: cr.endCardActiveMs,
      teaser_duration_ms: cr.teaserDurationMs,
      icon_after_teaser_ms: cr.iconAfterTeaserMs
    }));
  }
};
__name(Card, "Card");
Card.type = "Card";
var Card_default = Card;

// dist/src/parser/classes/CarouselHeader.js
var CarouselHeader = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parseArray(data.contents);
  }
};
__name(CarouselHeader, "CarouselHeader");
CarouselHeader.type = "CarouselHeader";
var CarouselHeader_default = CarouselHeader;

// dist/src/parser/classes/CarouselItem.js
var CarouselItem = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parseArray(data.carouselItems);
    this.background_color = data.backgroundColor;
    this.layout_style = data.layoutStyle;
    this.pagination_thumbnails = Thumbnail.fromResponse(data.paginationThumbnails);
    this.paginator_alignment = data.paginatorAlignment;
  }
  get contents() {
    return this.items;
  }
};
__name(CarouselItem, "CarouselItem");
CarouselItem.type = "CarouselItem";
var CarouselItem_default = CarouselItem;

// dist/src/parser/classes/InfoRow.js
var InfoRow = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    if (Reflect.has(data, "defaultMetadata")) {
      this.default_metadata = new Text(data.defaultMetadata);
    }
    if (Reflect.has(data, "expandedMetadata")) {
      this.expanded_metadata = new Text(data.expandedMetadata);
    }
    if (Reflect.has(data, "infoRowExpandStatusKey")) {
      this.info_row_expand_status_key = data.infoRowExpandStatusKey;
    }
  }
};
__name(InfoRow, "InfoRow");
InfoRow.type = "InfoRow";
var InfoRow_default = InfoRow;

// dist/src/parser/classes/MetadataBadge.js
var MetadataBadge = class extends YTNode {
  constructor(data) {
    super();
    if (Reflect.has(data, "icon")) {
      this.icon_type = data.icon.iconType;
    }
    if (Reflect.has(data, "style")) {
      this.style = data.style;
    }
    if (Reflect.has(data, "label")) {
      this.label = data.label;
    }
    if (Reflect.has(data, "tooltip") || Reflect.has(data, "iconTooltip")) {
      this.tooltip = data.tooltip || data.iconTooltip;
    }
  }
};
__name(MetadataBadge, "MetadataBadge");
MetadataBadge.type = "MetadataBadge";
var MetadataBadge_default = MetadataBadge;

// dist/src/parser/classes/CompactVideo.js
var CompactVideo = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.videoId;
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail) || null;
    if (Reflect.has(data, "richThumbnail")) {
      this.rich_thumbnail = parser_default.parse(data.richThumbnail);
    }
    this.title = new Text(data.title);
    this.author = new Author_default(data.longBylineText, data.ownerBadges, data.channelThumbnail);
    this.view_count = new Text(data.viewCountText);
    this.short_view_count = new Text(data.shortViewCountText);
    this.published = new Text(data.publishedTimeText);
    this.badges = parser_default.parseArray(data.badges, MetadataBadge_default);
    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: timeToSeconds(new Text(data.lengthText).toString())
    };
    this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.menu = parser_default.parseItem(data.menu, Menu_default);
  }
  get best_thumbnail() {
    return this.thumbnails[0];
  }
  get is_fundraiser() {
    return this.badges.some((badge) => badge.label === "Fundraiser");
  }
  get is_live() {
    return this.badges.some((badge) => {
      if (badge.style === "BADGE_STYLE_TYPE_LIVE_NOW" || badge.label === "LIVE")
        return true;
    });
  }
  get is_new() {
    return this.badges.some((badge) => badge.label === "New");
  }
  get is_premiere() {
    return this.badges.some((badge) => badge.style === "PREMIERE");
  }
};
__name(CompactVideo, "CompactVideo");
CompactVideo.type = "CompactVideo";
var CompactVideo_default = CompactVideo;

// dist/src/parser/classes/CarouselLockup.js
var CarouselLockup = class extends YTNode {
  constructor(data) {
    super();
    this.info_rows = parser_default.parseArray(data.infoRows, InfoRow_default);
    this.video_lockup = parser_default.parseItem(data.videoLockup, CompactVideo_default);
  }
};
__name(CarouselLockup, "CarouselLockup");
CarouselLockup.type = "CarouselLockup";
var CarouselLockup_default = CarouselLockup;

// dist/src/parser/classes/Channel.js
var Channel = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.channelId;
    this.author = new Author_default(Object.assign(Object.assign({}, data.title), { navigationEndpoint: data.navigationEndpoint }), data.ownerBadges, data.thumbnail);
    this.subscriber_count = new Text(data.subscriberCountText);
    this.video_count = new Text(data.videoCountText);
    this.long_byline = new Text(data.longBylineText);
    this.short_byline = new Text(data.shortBylineText);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.subscribe_button = parser_default.parseItem(data.subscribeButton, [SubscribeButton_default, Button_default]);
    this.description_snippet = new Text(data.descriptionSnippet);
  }
  get subscribers() {
    return this.subscriber_count;
  }
  get videos() {
    return this.video_count;
  }
};
__name(Channel, "Channel");
Channel.type = "Channel";
var Channel_default = Channel;

// dist/src/parser/classes/ChannelAboutFullMetadata.js
var ChannelAboutFullMetadata = class extends YTNode {
  constructor(data) {
    var _a4, _b2;
    super();
    this.id = data.channelId;
    this.name = new Text(data.title);
    this.avatar = Thumbnail.fromResponse(data.avatar);
    this.canonical_channel_url = data.canonicalChannelUrl;
    this.primary_links = (_b2 = (_a4 = data.primaryLinks) === null || _a4 === void 0 ? void 0 : _a4.map((link) => ({
      endpoint: new NavigationEndpoint_default(link.navigationEndpoint),
      icon: Thumbnail.fromResponse(link.icon),
      title: new Text(link.title)
    }))) !== null && _b2 !== void 0 ? _b2 : [];
    this.view_count = new Text(data.viewCountText);
    this.joined_date = new Text(data.joinedDateText);
    this.description = new Text(data.description);
    this.email_reveal = new NavigationEndpoint_default(data.onBusinessEmailRevealClickCommand);
    this.can_reveal_email = !data.signInForBusinessEmail;
    this.country = new Text(data.country);
    this.buttons = parser_default.parseArray(data.actionButtons, Button_default);
  }
  get views() {
    return this.view_count;
  }
  get joined() {
    return this.joined_date;
  }
};
__name(ChannelAboutFullMetadata, "ChannelAboutFullMetadata");
ChannelAboutFullMetadata.type = "ChannelAboutFullMetadata";
var ChannelAboutFullMetadata_default = ChannelAboutFullMetadata;

// dist/src/parser/classes/ChannelAgeGate.js
var ChannelAgeGate = class extends YTNode {
  constructor(data) {
    super();
    this.channel_title = data.channelTitle;
    this.avatar = Thumbnail.fromResponse(data.avatar);
    this.header = new Text(data.header);
    this.main_text = new Text(data.mainText);
    this.sign_in_button = parser_exports.parseItem(data.signInButton, Button_default);
    this.secondary_text = new Text(data.secondaryText);
  }
};
__name(ChannelAgeGate, "ChannelAgeGate");
ChannelAgeGate.type = "ChannelAgeGate";
var ChannelAgeGate_default = ChannelAgeGate;

// dist/src/parser/classes/ChannelFeaturedContent.js
var ChannelFeaturedContent = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.items = parser_default.parseArray(data.items);
  }
};
__name(ChannelFeaturedContent, "ChannelFeaturedContent");
ChannelFeaturedContent.type = "ChannelFeaturedContent";
var ChannelFeaturedContent_default = ChannelFeaturedContent;

// dist/src/parser/classes/ChannelMetadata.js
var ChannelMetadata = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    this.description = data.description;
    this.url = data.channelUrl;
    this.rss_url = data.rssUrl;
    this.vanity_channel_url = data.vanityChannelUrl;
    this.external_id = data.externalId;
    this.is_family_safe = data.isFamilySafe;
    this.keywords = data.keywords;
    this.avatar = Thumbnail.fromResponse(data.avatar);
    this.music_artist_name = typeof data.musicArtistName === "string" && data.musicArtistName.length > 0 ? data.musicArtistName : void 0;
    this.available_countries = data.availableCountryCodes;
    this.android_deep_link = data.androidDeepLink;
    this.android_appindexing_link = data.androidAppindexingLink;
    this.ios_appindexing_link = data.iosAppindexingLink;
  }
};
__name(ChannelMetadata, "ChannelMetadata");
ChannelMetadata.type = "ChannelMetadata";
var ChannelMetadata_default = ChannelMetadata;

// dist/src/parser/classes/ChannelMobileHeader.js
var ChannelMobileHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
  }
};
__name(ChannelMobileHeader, "ChannelMobileHeader");
ChannelMobileHeader.type = "ChannelMobileHeader";
var ChannelMobileHeader_default = ChannelMobileHeader;

// dist/src/parser/classes/ChannelOptions.js
var ChannelOptions = class extends YTNode {
  constructor(data) {
    super();
    this.avatar = Thumbnail.fromResponse(data.avatar);
    this.endpoint = new NavigationEndpoint_default(data.avatarEndpoint);
    this.name = data.name;
    this.links = data.links.map((link) => new Text(link));
  }
};
__name(ChannelOptions, "ChannelOptions");
ChannelOptions.type = "ChannelOptions";
var ChannelOptions_default = ChannelOptions;

// dist/src/parser/classes/ChannelSubMenu.js
var ChannelSubMenu = class extends YTNode {
  constructor(data) {
    super();
    this.content_type_sub_menu_items = data.contentTypeSubMenuItems.map((item) => ({
      endpoint: new NavigationEndpoint_default(item.navigationEndpoint || item.endpoint),
      selected: item.selected,
      title: item.title
    }));
    this.sort_setting = parser_default.parseItem(data.sortSetting);
  }
};
__name(ChannelSubMenu, "ChannelSubMenu");
ChannelSubMenu.type = "ChannelSubMenu";
var ChannelSubMenu_default = ChannelSubMenu;

// dist/src/parser/classes/ChannelThumbnailWithLink.js
var ChannelThumbnailWithLink = class extends YTNode {
  constructor(data) {
    var _a4, _b2;
    super();
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.label = (_b2 = (_a4 = data.accessibility) === null || _a4 === void 0 ? void 0 : _a4.accessibilityData) === null || _b2 === void 0 ? void 0 : _b2.label;
  }
};
__name(ChannelThumbnailWithLink, "ChannelThumbnailWithLink");
ChannelThumbnailWithLink.type = "ChannelThumbnailWithLink";
var ChannelThumbnailWithLink_default = ChannelThumbnailWithLink;

// dist/src/parser/classes/ChannelVideoPlayer.js
var ChannelVideoPlayer = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.view_count = new Text(data.viewCountText);
    this.published_time = new Text(data.publishedTimeText);
  }
  get views() {
    return this.view_count;
  }
  get published() {
    return this.published_time;
  }
};
__name(ChannelVideoPlayer, "ChannelVideoPlayer");
ChannelVideoPlayer.type = "ChannelVideoPlayer";
var ChannelVideoPlayer_default = ChannelVideoPlayer;

// dist/src/parser/classes/Chapter.js
var Chapter = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.time_range_start_millis = data.timeRangeStartMillis;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
};
__name(Chapter, "Chapter");
Chapter.type = "Chapter";
var Chapter_default = Chapter;

// dist/src/parser/classes/ChildVideo.js
var ChildVideo = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.duration = {
      text: data.lengthText.simpleText,
      seconds: timeToSeconds(data.lengthText.simpleText)
    };
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
  }
};
__name(ChildVideo, "ChildVideo");
ChildVideo.type = "ChildVideo";
var ChildVideo_default = ChildVideo;

// dist/src/parser/classes/ChipCloudChip.js
var ChipCloudChip = class extends YTNode {
  constructor(data) {
    super();
    this.is_selected = data.isSelected;
    if (Reflect.has(data, "navigationEndpoint")) {
      this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    }
    this.text = new Text(data.text).toString();
  }
};
__name(ChipCloudChip, "ChipCloudChip");
ChipCloudChip.type = "ChipCloudChip";
var ChipCloudChip_default = ChipCloudChip;

// dist/src/parser/classes/ChipCloud.js
var ChipCloud = class extends YTNode {
  constructor(data) {
    super();
    this.chips = parser_default.parseArray(data.chips, ChipCloudChip_default);
    this.next_button = parser_default.parseItem(data.nextButton, Button_default);
    this.previous_button = parser_default.parseItem(data.previousButton, Button_default);
    this.horizontal_scrollable = data.horizontalScrollable;
  }
};
__name(ChipCloud, "ChipCloud");
ChipCloud.type = "ChipCloud";
var ChipCloud_default = ChipCloud;

// dist/src/parser/classes/CollaboratorInfoCardContent.js
var CollaboratorInfoCardContent = class extends YTNode {
  constructor(data) {
    super();
    this.channel_avatar = Thumbnail.fromResponse(data.channelAvatar);
    this.custom_text = new Text(data.customText);
    this.channel_name = new Text(data.channelName);
    this.subscriber_count = new Text(data.subscriberCountText);
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
  }
};
__name(CollaboratorInfoCardContent, "CollaboratorInfoCardContent");
CollaboratorInfoCardContent.type = "CollaboratorInfoCardContent";
var CollaboratorInfoCardContent_default = CollaboratorInfoCardContent;

// dist/src/parser/classes/CollageHeroImage.js
var CollageHeroImage = class extends YTNode {
  constructor(data) {
    super();
    this.left = Thumbnail.fromResponse(data.leftThumbnail);
    this.top_right = Thumbnail.fromResponse(data.topRightThumbnail);
    this.bottom_right = Thumbnail.fromResponse(data.bottomRightThumbnail);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
  }
};
__name(CollageHeroImage, "CollageHeroImage");
CollageHeroImage.type = "CollageHeroImage";
var CollageHeroImage_default = CollageHeroImage;

// dist/src/parser/classes/comments/AuthorCommentBadge.js
var import_tslib2 = require("tslib");
var _AuthorCommentBadge_data;
var AuthorCommentBadge = class extends YTNode {
  constructor(data) {
    super();
    _AuthorCommentBadge_data.set(this, void 0);
    if (Reflect.has(data, "icon") && Reflect.has(data.icon, "iconType")) {
      this.icon_type = data.icon.iconType;
    }
    this.tooltip = data.iconTooltip;
    this.tooltip === "Verified" && (this.style = "BADGE_STYLE_TYPE_VERIFIED") && (data.style = "BADGE_STYLE_TYPE_VERIFIED");
    (0, import_tslib2.__classPrivateFieldSet)(this, _AuthorCommentBadge_data, data, "f");
  }
  get orig_badge() {
    return (0, import_tslib2.__classPrivateFieldGet)(this, _AuthorCommentBadge_data, "f");
  }
};
__name(AuthorCommentBadge, "AuthorCommentBadge");
_AuthorCommentBadge_data = /* @__PURE__ */ new WeakMap();
AuthorCommentBadge.type = "AuthorCommentBadge";
var AuthorCommentBadge_default = AuthorCommentBadge;

// dist/src/parser/classes/comments/Comment.js
var import_tslib3 = require("tslib");

// dist/src/parser/classes/comments/CommentReplyDialog.js
var CommentReplyDialog = class extends YTNode {
  constructor(data) {
    super();
    this.reply_button = parser_default.parseItem(data.replyButton, Button_default);
    this.cancel_button = parser_default.parseItem(data.cancelButton, Button_default);
    this.author_thumbnail = Thumbnail.fromResponse(data.authorThumbnail);
    this.placeholder = new Text(data.placeholderText);
    this.error_message = new Text(data.errorMessage);
  }
};
__name(CommentReplyDialog, "CommentReplyDialog");
CommentReplyDialog.type = "CommentReplyDialog";
var CommentReplyDialog_default = CommentReplyDialog;

// dist/src/parser/classes/comments/PdgCommentChip.js
var PdgCommentChip = class extends YTNode {
  constructor(data) {
    var _a4, _b2;
    super();
    this.text = new Text(data.chipText);
    this.color_pallette = {
      background_color: (_a4 = data.chipColorPalette) === null || _a4 === void 0 ? void 0 : _a4.backgroundColor,
      foreground_title_color: (_b2 = data.chipColorPalette) === null || _b2 === void 0 ? void 0 : _b2.foregroundTitleColor
    };
    if (Reflect.has(data, "chipIcon") && Reflect.has(data.chipIcon, "iconType")) {
      this.icon_type = data.chipIcon.iconType;
    }
  }
};
__name(PdgCommentChip, "PdgCommentChip");
PdgCommentChip.type = "PdgCommentChip";
var PdgCommentChip_default = PdgCommentChip;

// dist/src/parser/classes/comments/SponsorCommentBadge.js
var SponsorCommentBadge = class extends YTNode {
  constructor(data) {
    super();
    this.custom_badge = Thumbnail.fromResponse(data.customBadge);
    this.tooltip = data.tooltip;
  }
};
__name(SponsorCommentBadge, "SponsorCommentBadge");
SponsorCommentBadge.type = "SponsorCommentBadge";
var SponsorCommentBadge_default = SponsorCommentBadge;

// dist/src/proto/index.js
var proto_exports = {};
__export(proto_exports, {
  decodeVisitorData: () => decodeVisitorData,
  encodeChannelAnalyticsParams: () => encodeChannelAnalyticsParams,
  encodeCommentActionParams: () => encodeCommentActionParams,
  encodeCommentParams: () => encodeCommentParams,
  encodeCommentsSectionParams: () => encodeCommentsSectionParams,
  encodeCustomThumbnailPayload: () => encodeCustomThumbnailPayload,
  encodeHashtag: () => encodeHashtag,
  encodeMessageParams: () => encodeMessageParams,
  encodeMusicSearchFilters: () => encodeMusicSearchFilters,
  encodeNotificationPref: () => encodeNotificationPref,
  encodeSearchFilters: () => encodeSearchFilters,
  encodeVideoMetadataPayload: () => encodeVideoMetadataPayload,
  encodeVisitorData: () => encodeVisitorData
});

// dist/src/proto/generated/runtime/wire/index.js
var WireType;
(function(WireType2) {
  WireType2[WireType2["Varint"] = 0] = "Varint";
  WireType2[WireType2["Fixed64"] = 1] = "Fixed64";
  WireType2[WireType2["LengthDelimited"] = 2] = "LengthDelimited";
  WireType2[WireType2["StartGroup"] = 3] = "StartGroup";
  WireType2[WireType2["EndGroup"] = 4] = "EndGroup";
  WireType2[WireType2["Fixed32"] = 5] = "Fixed32";
})(WireType || (WireType = {}));

// dist/src/proto/generated/runtime/Long.js
var UINT16_MAX = 65535;
var UINT32_MAX = 4294967295;
var Long = class extends Uint32Array {
  constructor(lo = 0, hi = 0) {
    super([lo, hi]);
  }
  toString(signed = true) {
    const [lo, hi] = this;
    if (lo === 0 && hi === 0)
      return "0";
    if (signed && hi > 2147483647) {
      return "-" + add(negate(this), one).toString(false);
    }
    const result = [];
    let tmp = new Long(lo, hi);
    while (compare(tmp, zero)) {
      const [next, remainder] = divByTen(tmp);
      result.push(remainder);
      tmp = next;
    }
    return result.reverse().join("");
  }
  static parse(text) {
    const parsedValue = parseInt(text, 10);
    const sign = parsedValue < 0;
    if (Number.isNaN(parsedValue))
      return new Long(0);
    if (text.length < 10) {
      if (parsedValue < 0)
        return add(negate(new Long(-parsedValue)), one);
      return new Long(parsedValue);
    }
    let result = new Long();
    let powerTen = one;
    for (const digit of text.split("").reverse()) {
      if (parseInt(digit)) {
        result = add(result, mul(new Long(parseInt(digit)), powerTen));
      }
      powerTen = mul(powerTen, new Long(10));
    }
    if (!sign)
      return result;
    return add(negate(result), one);
  }
};
__name(Long, "Long");
var zero = new Long(0);
var one = new Long(1);
function makeChunk(value) {
  const [lo, hi] = value;
  return [lo & UINT16_MAX, lo >>> 16, hi & UINT16_MAX, hi >>> 16];
}
__name(makeChunk, "makeChunk");
function add(a, b) {
  const [a00, a16, a32, a48] = makeChunk(a);
  const [b00, b16, b32, b48] = makeChunk(b);
  let c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 + b00;
  c16 += c00 >>> 16;
  c00 &= UINT16_MAX;
  c16 += a16 + b16;
  c32 += c16 >>> 16;
  c16 &= UINT16_MAX;
  c32 += a32 + b32;
  c48 += c32 >>> 16;
  c32 &= UINT16_MAX;
  c48 += a48 + b48;
  c48 &= UINT16_MAX;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}
__name(add, "add");
function mul(a, b) {
  const [a00, a16, a32, a48] = makeChunk(a);
  const [b00, b16, b32, b48] = makeChunk(b);
  let c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= UINT16_MAX;
  c16 += a00 * b16 + a16 * b00;
  c32 += c16 >>> 16;
  c16 &= UINT16_MAX;
  c32 += a00 * b32 + a32 * b00 + a16 * b16;
  c48 += c32 >>> 16;
  c32 &= UINT16_MAX;
  c48 += a00 * b48 + a16 * b32 + a32 * b16 + a48 * b00;
  c48 &= UINT16_MAX;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}
__name(mul, "mul");
function divByTen(value) {
  const [lo, hi] = value;
  return [
    new Long((hi % 10 * (UINT32_MAX + 1) + lo) / 10 | 0, hi / 10 | 0),
    (hi % 10 * (UINT32_MAX + 1) + lo) % 10
  ];
}
__name(divByTen, "divByTen");
function compare(a, b) {
  const [l1, h1] = a;
  const [l2, h2] = b;
  if (h1 !== h2)
    return h1 - h2;
  return l1 - l2;
}
__name(compare, "compare");
function negate(value) {
  const [lo, hi] = value;
  return new Long(~lo, ~hi);
}
__name(negate, "negate");

// dist/src/proto/generated/runtime/wire/varint.js
function encode2(value) {
  const result = [];
  const mask = 127;
  const head = 1 << 7;
  let long = typeof value === "number" ? new Long(value) : value;
  while (long[0] || long[1]) {
    const [lo, hi] = long;
    const chunk = lo & mask;
    const nextHi = hi >>> 7;
    const nextLo = lo >>> 7 | (hi & mask) << 32 - 7;
    long = new Long(nextLo, nextHi);
    const resultChunk = !(long[0] || long[1]) ? chunk : chunk | head;
    result.push(resultChunk);
  }
  if (result.length < 1)
    return new Uint8Array(1);
  return Uint8Array.from(result);
}
__name(encode2, "encode");
function decode2(dataview) {
  let result = new Long(0);
  let i = 0;
  while (true) {
    const curr = dataview.getUint8(i);
    result = or(result, leftshift(new Long(curr & 127), i * 7));
    ++i;
    if (curr >>> 7)
      continue;
    return [i, result];
  }
}
__name(decode2, "decode");
function or(a, b) {
  return new Long(a[0] | b[0], a[1] | b[1]);
}
__name(or, "or");
function leftshift(a, count) {
  if (count === 0)
    return a;
  if (count >= 32)
    return new Long(0, a[0] << count - 32);
  return new Long(a[0] << count, a[1] << count | a[0] >>> 32 - count);
}
__name(leftshift, "leftshift");

// dist/src/proto/generated/runtime/wire/serialize.js
function serialize(wireMessage) {
  const result = [];
  wireMessage.forEach(([fieldNumber, field]) => {
    result.push(encode2(fieldNumber << 3 | field.type));
    switch (field.type) {
      case WireType.Varint:
        result.push(encode2(field.value));
        break;
      case WireType.Fixed64: {
        const arr = new Uint8Array(8);
        const dataview = new DataView(arr.buffer);
        dataview.setUint32(0, field.value[0], true);
        dataview.setUint32(4, field.value[1], true);
        result.push(arr);
        break;
      }
      case WireType.LengthDelimited:
        result.push(encode2(field.value.byteLength));
        result.push(field.value);
        break;
      case WireType.Fixed32: {
        const arr = new Uint8Array(4);
        const dataview = new DataView(arr.buffer);
        dataview.setUint32(0, field.value, true);
        result.push(arr);
        break;
      }
    }
  });
  return concat(result);
}
__name(serialize, "serialize");
function concat(arrays) {
  const totalLength = arrays.reduce((acc, value) => {
    return acc + value.byteLength;
  }, 0);
  const result = new Uint8Array(totalLength);
  arrays.reduce((acc, array) => {
    result.set(array, acc);
    return acc + array.byteLength;
  }, 0);
  return result;
}
__name(concat, "concat");

// dist/src/proto/generated/runtime/wire/zigzag.js
function encode3(value) {
  if (value instanceof Long) {
    const l = new Long(value[0] << 1, value[1] << 1 | value[0] >>> 31);
    const r = value[1] >>> 31 ? new Long(4294967295, 4294967295) : new Long();
    return new Long(l[0] ^ r[0], l[1] ^ r[1]);
  }
  return (value * 2 ^ value >> 31) >>> 0;
}
__name(encode3, "encode");
function decode3(value) {
  if (value instanceof Long) {
    const l = new Long(value[0] >>> 1 | value[1] << 31, value[1] >>> 1);
    const r = value[0] & 1 ? new Long(4294967295, 4294967295) : new Long();
    return new Long(l[0] ^ r[0], l[1] ^ r[1]);
  }
  return value >>> 1 ^ -(value & 1);
}
__name(decode3, "decode");

// dist/src/proto/generated/runtime/wire/scalar.js
var decodeVarintFns = {
  int32: (long) => long[0] | 0,
  int64: (long) => long.toString(true),
  uint32: (long) => long[0] >>> 0,
  uint64: (long) => long.toString(false),
  sint32: (long) => decode3(long[0]),
  sint64: (long) => decode3(long).toString(true),
  bool: (long) => long[0] !== 0
};
var encodeVarintFns = {
  int32: (tsValue) => new Long(tsValue),
  int64: (tsValue) => Long.parse(tsValue),
  uint32: (tsValue) => new Long(tsValue),
  uint64: (tsValue) => Long.parse(tsValue),
  sint32: (tsValue) => encode3(new Long(tsValue)),
  sint64: (tsValue) => encode3(Long.parse(tsValue)),
  bool: (tsValue) => new Long(+tsValue)
};
var varintFieldToTsValueFns = Object.fromEntries(Object.entries(decodeVarintFns).map(([type, fn]) => [
  type,
  (wireValue) => {
    if (wireValue.type !== WireType.Varint)
      return;
    return fn(wireValue.value);
  }
]));
var tsValueToVarintFieldFns = Object.fromEntries(Object.entries(encodeVarintFns).map(([type, fn]) => [
  type,
  (tsValue) => ({
    type: WireType.Varint,
    value: fn(tsValue)
  })
]));
var wireValueToTsValueFns = Object.assign(Object.assign({}, varintFieldToTsValueFns), { double: (wireValue) => {
  if (wireValue.type !== WireType.Fixed64)
    return;
  const dataview = new DataView(wireValue.value.buffer);
  return dataview.getFloat64(0, true);
}, float: (wireValue) => {
  if (wireValue.type !== WireType.Fixed32)
    return;
  const dataview = new DataView(new Uint32Array([wireValue.value]).buffer);
  return dataview.getFloat32(0, true);
}, fixed32: (wireValue) => {
  if (wireValue.type !== WireType.Fixed32)
    return;
  return wireValue.value >>> 0;
}, fixed64: (wireValue) => {
  if (wireValue.type !== WireType.Fixed64)
    return;
  return wireValue.value.toString(false);
}, sfixed32: (wireValue) => {
  if (wireValue.type !== WireType.Fixed32)
    return;
  return wireValue.value | 0;
}, sfixed64: (wireValue) => {
  if (wireValue.type !== WireType.Fixed64)
    return;
  return wireValue.value.toString(true);
}, string: (wireValue) => {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const textDecoder = new TextDecoder();
  return textDecoder.decode(wireValue.value);
}, bytes: (wireValue) => {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  return wireValue.value;
} });
var tsValueToWireValueFns = Object.assign(Object.assign({}, tsValueToVarintFieldFns), { double: (tsValue) => {
  const long = new Long();
  const dataview = new DataView(long.buffer);
  dataview.setFloat64(0, tsValue, true);
  return { type: WireType.Fixed64, value: long };
}, float: (tsValue) => {
  const u32 = new Uint32Array(1);
  const dataview = new DataView(u32.buffer);
  dataview.setFloat32(0, tsValue, true);
  return { type: WireType.Fixed32, value: dataview.getUint32(0, true) };
}, fixed32: (tsValue) => ({ type: WireType.Fixed32, value: tsValue >>> 0 }), fixed64: (tsValue) => ({
  type: WireType.Fixed64,
  value: Long.parse(tsValue)
}), sfixed32: (tsValue) => ({ type: WireType.Fixed32, value: tsValue | 0 }), sfixed64: (tsValue) => ({
  type: WireType.Fixed64,
  value: Long.parse(tsValue)
}), string: (tsValue) => {
  const textEncoder = new TextEncoder();
  return {
    type: WireType.LengthDelimited,
    value: textEncoder.encode(tsValue)
  };
}, bytes: (tsValue) => ({ type: WireType.LengthDelimited, value: tsValue }) });
var unpackVarintFns = Object.fromEntries(Object.keys(decodeVarintFns).map((type) => [
  type,
  function* (wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns[type](wireValue);
      if (value != null)
        yield value;
      else {
        for (const long of unpackVarint(wireValue)) {
          yield decodeVarintFns[type](long);
        }
      }
    }
  }
]));
var unpackFns = Object.assign(Object.assign({}, unpackVarintFns), {
  *double(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.double(wireValue);
      if (value != null)
        yield value;
      else
        yield* unpackDouble(wireValue);
    }
  },
  *float(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.float(wireValue);
      if (value != null)
        yield value;
      else
        yield* unpackFloat(wireValue);
    }
  },
  *fixed32(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.fixed32(wireValue);
      if (value != null)
        yield value;
      else
        for (const value2 of unpackFixed32(wireValue))
          yield value2 >>> 0;
    }
  },
  *fixed64(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.fixed64(wireValue);
      if (value != null)
        yield value;
      else {
        for (const value2 of unpackFixed64(wireValue)) {
          yield value2.toString(false);
        }
      }
    }
  },
  *sfixed32(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.sfixed32(wireValue);
      if (value != null)
        yield value;
      else
        for (const value2 of unpackFixed32(wireValue))
          yield value2 | 0;
    }
  },
  *sfixed64(wireValues) {
    for (const wireValue of wireValues) {
      const value = wireValueToTsValueFns.sfixed64(wireValue);
      if (value != null)
        yield value;
      else {
        for (const value2 of unpackFixed64(wireValue)) {
          yield value2.toString(true);
        }
      }
    }
  }
});
var packVarintFns = Object.fromEntries(Object.keys(encodeVarintFns).map((type) => [
  type,
  function(tsValues) {
    return {
      type: WireType.LengthDelimited,
      value: concat(tsValues.map((tsValue) => {
        const value = encodeVarintFns[type](tsValue);
        return encode2(value);
      }))
    };
  }
]));
function getFixedPackFn(size, setFn) {
  return /* @__PURE__ */ __name(function pack(values) {
    const value = new Uint8Array(values.length * size);
    const dataview = new DataView(value.buffer);
    for (let i = 0; i < values.length; ++i) {
      setFn(dataview, i * size, values[i]);
    }
    return { type: WireType.LengthDelimited, value };
  }, "pack");
}
__name(getFixedPackFn, "getFixedPackFn");
var packFns = Object.assign(Object.assign({}, packVarintFns), { double: getFixedPackFn(8, (dataView, byteOffset, value) => {
  dataView.setFloat64(byteOffset, value, true);
}), float: getFixedPackFn(4, (dataView, byteOffset, value) => {
  dataView.setFloat32(byteOffset, value, true);
}), fixed32: getFixedPackFn(4, (dataView, byteOffset, value) => {
  dataView.setUint32(byteOffset, value, true);
}), fixed64: getFixedPackFn(8, (dataView, byteOffset, value) => {
  const long = Long.parse(value);
  dataView.setUint32(byteOffset, long[0], true);
  dataView.setUint32(byteOffset + 4, long[1], true);
}), sfixed32: getFixedPackFn(4, (dataView, byteOffset, value) => {
  dataView.setInt32(byteOffset, value, true);
}), sfixed64: getFixedPackFn(8, (dataView, byteOffset, value) => {
  const long = Long.parse(value);
  dataView.setUint32(byteOffset, long[0], true);
  dataView.setUint32(byteOffset + 4, long[1], true);
}) });
function* unpackDouble(wireValue) {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const { value } = wireValue;
  let idx = 0;
  const dataview = new DataView(value.buffer, value.byteOffset);
  while (idx < value.length) {
    const double = dataview.getFloat64(idx, true);
    idx += 4;
    yield double;
  }
}
__name(unpackDouble, "unpackDouble");
function* unpackFloat(wireValue) {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const { value } = wireValue;
  let idx = 0;
  const dataview = new DataView(value.buffer, value.byteOffset);
  while (idx < value.length) {
    const float = dataview.getFloat32(idx, true);
    idx += 4;
    yield float;
  }
}
__name(unpackFloat, "unpackFloat");
function* unpackVarint(wireValue) {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const { value } = wireValue;
  let idx = 0;
  const offset = value.byteOffset;
  while (idx < value.length) {
    const decodeResult = decode2(new DataView(value.buffer, offset + idx));
    idx += decodeResult[0];
    yield decodeResult[1];
  }
}
__name(unpackVarint, "unpackVarint");
function* unpackFixed32(wireValue) {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const { value } = wireValue;
  let idx = 0;
  const dataview = new DataView(value.buffer, value.byteOffset);
  while (idx < value.length) {
    const fixed32 = dataview.getUint32(idx, true);
    idx += 4;
    yield fixed32;
  }
}
__name(unpackFixed32, "unpackFixed32");
function* unpackFixed64(wireValue) {
  if (wireValue.type !== WireType.LengthDelimited)
    return;
  const { value } = wireValue;
  let idx = 0;
  const dataview = new DataView(value.buffer, value.byteOffset);
  while (idx < value.length) {
    const lo = dataview.getUint32(idx, true);
    idx += 4;
    const hi = dataview.getUint32(idx, true);
    idx += 4;
    yield new Long(lo, hi);
  }
}
__name(unpackFixed64, "unpackFixed64");

// dist/src/proto/generated/runtime/wire/deserialize.js
function deserialize(uint8array) {
  let idx = 0;
  const offset = uint8array.byteOffset;
  const result = [];
  const dataview = new DataView(uint8array.buffer, offset);
  while (idx < uint8array.length) {
    const decodeResult = decode2(new DataView(uint8array.buffer, offset + idx));
    const key = decodeResult[1][0];
    idx += decodeResult[0];
    const type = key & 7;
    const fieldNumber = key >>> 3;
    switch (type) {
      default:
        throw new Error(`Unknown wire type ${type}`);
      case WireType.Varint: {
        const [len, value] = decode2(new DataView(uint8array.buffer, offset + idx));
        result.push([fieldNumber, { type, value }]);
        idx += len;
        break;
      }
      case WireType.Fixed64:
        const lo = dataview.getUint32(idx, true);
        const hi = dataview.getUint32(idx += 4, true);
        idx += 4;
        result.push([fieldNumber, {
          type,
          value: new Long(lo, hi)
        }]);
        break;
      case WireType.LengthDelimited: {
        const [len, value] = decode2(new DataView(uint8array.buffer, offset + idx));
        result.push([fieldNumber, {
          type,
          value: uint8array.subarray(idx += len, idx += value[0])
        }]);
        break;
      }
      case WireType.StartGroup:
      case WireType.EndGroup:
        result.push([fieldNumber, { type }]);
        break;
      case WireType.Fixed32:
        result.push([fieldNumber, {
          type,
          value: dataview.getUint32(idx, true)
        }]);
        idx += 4;
        break;
    }
  }
  return result;
}
__name(deserialize, "deserialize");

// dist/src/proto/generated/messages/youtube/VisitorData.js
function getDefaultValue() {
  return {
    id: "",
    timestamp: 0
  };
}
__name(getDefaultValue, "getDefaultValue");
function encodeBinary(value) {
  const result = [];
  if (value.id !== void 0) {
    const tsValue = value.id;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.timestamp !== void 0) {
    const tsValue = value.timestamp;
    result.push([5, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary, "encodeBinary");
function decodeBinary(binary) {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === void 0)
      break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === void 0)
      break field;
    result.id = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === void 0)
      break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === void 0)
      break field;
    result.timestamp = value;
  }
  return result;
}
__name(decodeBinary, "decodeBinary");

// dist/src/proto/generated/messages/youtube/(ChannelAnalytics)/Params.js
function encodeBinary2(value) {
  const result = [];
  if (value.channelId !== void 0) {
    const tsValue = value.channelId;
    result.push([1001, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary2, "encodeBinary");

// dist/src/proto/generated/messages/youtube/ChannelAnalytics.js
function encodeBinary3(value) {
  const result = [];
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([32, { type: WireType.LengthDelimited, value: encodeBinary2(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary3, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(SearchFilter)/Filters.js
function encodeBinary4(value) {
  const result = [];
  if (value.uploadDate !== void 0) {
    const tsValue = value.uploadDate;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.duration !== void 0) {
    const tsValue = value.duration;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresHd !== void 0) {
    const tsValue = value.featuresHd;
    result.push([4, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresSubtitles !== void 0) {
    const tsValue = value.featuresSubtitles;
    result.push([5, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresCreativeCommons !== void 0) {
    const tsValue = value.featuresCreativeCommons;
    result.push([6, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.features3d !== void 0) {
    const tsValue = value.features3d;
    result.push([7, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresLive !== void 0) {
    const tsValue = value.featuresLive;
    result.push([8, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresPurchased !== void 0) {
    const tsValue = value.featuresPurchased;
    result.push([9, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.features4k !== void 0) {
    const tsValue = value.features4k;
    result.push([14, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.features360 !== void 0) {
    const tsValue = value.features360;
    result.push([15, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresLocation !== void 0) {
    const tsValue = value.featuresLocation;
    result.push([23, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresHdr !== void 0) {
    const tsValue = value.featuresHdr;
    result.push([25, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.featuresVr180 !== void 0) {
    const tsValue = value.featuresVr180;
    result.push([26, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary4, "encodeBinary");

// dist/src/proto/generated/messages/youtube/SearchFilter.js
function encodeBinary5(value) {
  const result = [];
  if (value.sortBy !== void 0) {
    const tsValue = value.sortBy;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.filters !== void 0) {
    const tsValue = value.filters;
    result.push([2, { type: WireType.LengthDelimited, value: encodeBinary4(tsValue) }]);
  }
  if (value.noFilter !== void 0) {
    const tsValue = value.noFilter;
    result.push([19, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary5, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(MusicSearchFilter)/(Filters)/Type.js
function encodeBinary6(value) {
  const result = [];
  if (value.song !== void 0) {
    const tsValue = value.song;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.video !== void 0) {
    const tsValue = value.video;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.album !== void 0) {
    const tsValue = value.album;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.artist !== void 0) {
    const tsValue = value.artist;
    result.push([4, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.playlist !== void 0) {
    const tsValue = value.playlist;
    result.push([5, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary6, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(MusicSearchFilter)/Filters.js
function encodeBinary7(value) {
  const result = [];
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([17, { type: WireType.LengthDelimited, value: encodeBinary6(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary7, "encodeBinary");

// dist/src/proto/generated/messages/youtube/MusicSearchFilter.js
function encodeBinary8(value) {
  const result = [];
  if (value.filters !== void 0) {
    const tsValue = value.filters;
    result.push([2, { type: WireType.LengthDelimited, value: encodeBinary7(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary8, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(LiveMessageParams)/(Params)/Ids.js
function encodeBinary9(value) {
  const result = [];
  if (value.channelId !== void 0) {
    const tsValue = value.channelId;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary9, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(LiveMessageParams)/Params.js
function encodeBinary10(value) {
  const result = [];
  if (value.ids !== void 0) {
    const tsValue = value.ids;
    result.push([5, { type: WireType.LengthDelimited, value: encodeBinary9(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary10, "encodeBinary");

// dist/src/proto/generated/messages/youtube/LiveMessageParams.js
function encodeBinary11(value) {
  const result = [];
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([1, { type: WireType.LengthDelimited, value: encodeBinary10(tsValue) }]);
  }
  if (value.number0 !== void 0) {
    const tsValue = value.number0;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.number1 !== void 0) {
    const tsValue = value.number1;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary11, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(GetCommentsSectionParams)/Context.js
function encodeBinary12(value) {
  const result = [];
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary12, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(GetCommentsSectionParams)/(Params)/(RepliesOptions)/UnkOpts.js
function encodeBinary13(value) {
  const result = [];
  if (value.unkParam !== void 0) {
    const tsValue = value.unkParam;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary13, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(GetCommentsSectionParams)/(Params)/RepliesOptions.js
function encodeBinary14(value) {
  const result = [];
  if (value.commentId !== void 0) {
    const tsValue = value.commentId;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.unkopts !== void 0) {
    const tsValue = value.unkopts;
    result.push([4, { type: WireType.LengthDelimited, value: encodeBinary13(tsValue) }]);
  }
  if (value.channelId !== void 0) {
    const tsValue = value.channelId;
    result.push([5, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([6, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.unkParam1 !== void 0) {
    const tsValue = value.unkParam1;
    result.push([8, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.unkParam2 !== void 0) {
    const tsValue = value.unkParam2;
    result.push([9, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary14, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(GetCommentsSectionParams)/(Params)/Options.js
function encodeBinary15(value) {
  const result = [];
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([4, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.sortBy !== void 0) {
    const tsValue = value.sortBy;
    result.push([6, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([15, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary15, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(GetCommentsSectionParams)/Params.js
function encodeBinary16(value) {
  const result = [];
  if (value.unkToken !== void 0) {
    const tsValue = value.unkToken;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.repliesOpts !== void 0) {
    const tsValue = value.repliesOpts;
    result.push([3, { type: WireType.LengthDelimited, value: encodeBinary14(tsValue) }]);
  }
  if (value.opts !== void 0) {
    const tsValue = value.opts;
    result.push([4, { type: WireType.LengthDelimited, value: encodeBinary15(tsValue) }]);
  }
  if (value.page !== void 0) {
    const tsValue = value.page;
    result.push([5, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.target !== void 0) {
    const tsValue = value.target;
    result.push([8, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary16, "encodeBinary");

// dist/src/proto/generated/messages/youtube/GetCommentsSectionParams.js
function encodeBinary17(value) {
  const result = [];
  if (value.ctx !== void 0) {
    const tsValue = value.ctx;
    result.push([2, { type: WireType.LengthDelimited, value: encodeBinary12(tsValue) }]);
  }
  if (value.unkParam !== void 0) {
    const tsValue = value.unkParam;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([6, { type: WireType.LengthDelimited, value: encodeBinary16(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary17, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(CreateCommentParams)/Params.js
function encodeBinary18(value) {
  const result = [];
  if (value.index !== void 0) {
    const tsValue = value.index;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary18, "encodeBinary");

// dist/src/proto/generated/messages/youtube/CreateCommentParams.js
function encodeBinary19(value) {
  const result = [];
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([5, { type: WireType.LengthDelimited, value: encodeBinary18(tsValue) }]);
  }
  if (value.number !== void 0) {
    const tsValue = value.number;
    result.push([10, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary19, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(PeformCommentActionParams)/(TranslateCommentParams)/(Params)/Comment.js
function encodeBinary20(value) {
  const result = [];
  if (value.text !== void 0) {
    const tsValue = value.text;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary20, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(PeformCommentActionParams)/(TranslateCommentParams)/Params.js
function encodeBinary21(value) {
  const result = [];
  if (value.comment !== void 0) {
    const tsValue = value.comment;
    result.push([1, { type: WireType.LengthDelimited, value: encodeBinary20(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary21, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(PeformCommentActionParams)/TranslateCommentParams.js
function encodeBinary22(value) {
  const result = [];
  if (value.commentId !== void 0) {
    const tsValue = value.commentId;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([3, { type: WireType.LengthDelimited, value: encodeBinary21(tsValue) }]);
  }
  if (value.targetLanguage !== void 0) {
    const tsValue = value.targetLanguage;
    result.push([4, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary22, "encodeBinary");

// dist/src/proto/generated/messages/youtube/PeformCommentActionParams.js
function encodeBinary23(value) {
  const result = [];
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.unkNum !== void 0) {
    const tsValue = value.unkNum;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.commentId !== void 0) {
    const tsValue = value.commentId;
    result.push([3, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.videoId !== void 0) {
    const tsValue = value.videoId;
    result.push([5, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.channelId !== void 0) {
    const tsValue = value.channelId;
    result.push([23, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.translateCommentParams !== void 0) {
    const tsValue = value.translateCommentParams;
    result.push([31, { type: WireType.LengthDelimited, value: encodeBinary22(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary23, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(NotificationPreferences)/Preference.js
function encodeBinary24(value) {
  const result = [];
  if (value.index !== void 0) {
    const tsValue = value.index;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary24, "encodeBinary");

// dist/src/proto/generated/messages/youtube/NotificationPreferences.js
function encodeBinary25(value) {
  const result = [];
  if (value.channelId !== void 0) {
    const tsValue = value.channelId;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.prefId !== void 0) {
    const tsValue = value.prefId;
    result.push([2, { type: WireType.LengthDelimited, value: encodeBinary24(tsValue) }]);
  }
  if (value.number0 !== void 0) {
    const tsValue = value.number0;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.number1 !== void 0) {
    const tsValue = value.number1;
    result.push([4, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary25, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/(Context)/Client.js
function encodeBinary26(value) {
  const result = [];
  if (value.unkparam !== void 0) {
    const tsValue = value.unkparam;
    result.push([16, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.clientVersion !== void 0) {
    const tsValue = value.clientVersion;
    result.push([17, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.clientName !== void 0) {
    const tsValue = value.clientName;
    result.push([18, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary26, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Context.js
function encodeBinary27(value) {
  const result = [];
  if (value.client !== void 0) {
    const tsValue = value.client;
    result.push([1, { type: WireType.LengthDelimited, value: encodeBinary26(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary27, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Title.js
function encodeBinary28(value) {
  const result = [];
  if (value.text !== void 0) {
    const tsValue = value.text;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary28, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Description.js
function encodeBinary29(value) {
  const result = [];
  if (value.text !== void 0) {
    const tsValue = value.text;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary29, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Tags.js
function encodeBinary30(value) {
  const result = [];
  for (const tsValue of value.list) {
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary30, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Category.js
function encodeBinary31(value) {
  const result = [];
  if (value.id !== void 0) {
    const tsValue = value.id;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary31, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/License.js
function encodeBinary32(value) {
  const result = [];
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary32, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/(VideoThumbnail)/Thumbnail.js
function encodeBinary33(value) {
  const result = [];
  if (value.imageData !== void 0) {
    const tsValue = value.imageData;
    result.push([1, tsValueToWireValueFns.bytes(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary33, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/VideoThumbnail.js
function encodeBinary34(value) {
  const result = [];
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.thumbnail !== void 0) {
    const tsValue = value.thumbnail;
    result.push([3, { type: WireType.LengthDelimited, value: encodeBinary33(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary34, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/Privacy.js
function encodeBinary35(value) {
  const result = [];
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary35, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/MadeForKids.js
function encodeBinary36(value) {
  const result = [];
  if (value.unkparam !== void 0) {
    const tsValue = value.unkparam;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.choice !== void 0) {
    const tsValue = value.choice;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary36, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(InnertubePayload)/AgeRestricted.js
function encodeBinary37(value) {
  const result = [];
  if (value.unkparam !== void 0) {
    const tsValue = value.unkparam;
    result.push([1, tsValueToWireValueFns.int32(tsValue)]);
  }
  if (value.choice !== void 0) {
    const tsValue = value.choice;
    result.push([2, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary37, "encodeBinary");

// dist/src/proto/generated/messages/youtube/InnertubePayload.js
function encodeBinary38(value) {
  const result = [];
  if (value.context !== void 0) {
    const tsValue = value.context;
    result.push([1, { type: WireType.LengthDelimited, value: encodeBinary27(tsValue) }]);
  }
  if (value.target !== void 0) {
    const tsValue = value.target;
    result.push([2, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.title !== void 0) {
    const tsValue = value.title;
    result.push([3, { type: WireType.LengthDelimited, value: encodeBinary28(tsValue) }]);
  }
  if (value.description !== void 0) {
    const tsValue = value.description;
    result.push([4, { type: WireType.LengthDelimited, value: encodeBinary29(tsValue) }]);
  }
  if (value.tags !== void 0) {
    const tsValue = value.tags;
    result.push([6, { type: WireType.LengthDelimited, value: encodeBinary30(tsValue) }]);
  }
  if (value.category !== void 0) {
    const tsValue = value.category;
    result.push([7, { type: WireType.LengthDelimited, value: encodeBinary31(tsValue) }]);
  }
  if (value.license !== void 0) {
    const tsValue = value.license;
    result.push([8, { type: WireType.LengthDelimited, value: encodeBinary32(tsValue) }]);
  }
  if (value.videoThumbnail !== void 0) {
    const tsValue = value.videoThumbnail;
    result.push([20, { type: WireType.LengthDelimited, value: encodeBinary34(tsValue) }]);
  }
  if (value.privacy !== void 0) {
    const tsValue = value.privacy;
    result.push([38, { type: WireType.LengthDelimited, value: encodeBinary35(tsValue) }]);
  }
  if (value.madeForKids !== void 0) {
    const tsValue = value.madeForKids;
    result.push([68, { type: WireType.LengthDelimited, value: encodeBinary36(tsValue) }]);
  }
  if (value.ageRestricted !== void 0) {
    const tsValue = value.ageRestricted;
    result.push([69, { type: WireType.LengthDelimited, value: encodeBinary37(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary38, "encodeBinary");

// dist/src/proto/generated/messages/youtube/(Hashtag)/Params.js
function encodeBinary39(value) {
  const result = [];
  if (value.hashtag !== void 0) {
    const tsValue = value.hashtag;
    result.push([1, tsValueToWireValueFns.string(tsValue)]);
  }
  if (value.type !== void 0) {
    const tsValue = value.type;
    result.push([3, tsValueToWireValueFns.int32(tsValue)]);
  }
  return serialize(result);
}
__name(encodeBinary39, "encodeBinary");

// dist/src/proto/generated/messages/youtube/Hashtag.js
function encodeBinary40(value) {
  const result = [];
  if (value.params !== void 0) {
    const tsValue = value.params;
    result.push([93, { type: WireType.LengthDelimited, value: encodeBinary39(tsValue) }]);
  }
  return serialize(result);
}
__name(encodeBinary40, "encodeBinary");

// dist/src/proto/index.js
function encodeVisitorData(id, timestamp) {
  const buf = encodeBinary({ id, timestamp });
  return encodeURIComponent(u8ToBase64(buf).replace(/\+/g, "-").replace(/\//g, "_"));
}
__name(encodeVisitorData, "encodeVisitorData");
function decodeVisitorData(visitor_data) {
  const data = decodeBinary(base64ToU8(decodeURIComponent(visitor_data)));
  return data;
}
__name(decodeVisitorData, "decodeVisitorData");
function encodeChannelAnalyticsParams(channel_id) {
  const buf = encodeBinary3({
    params: {
      channelId: channel_id
    }
  });
  return encodeURIComponent(u8ToBase64(buf));
}
__name(encodeChannelAnalyticsParams, "encodeChannelAnalyticsParams");
function encodeSearchFilters(filters) {
  const upload_date = {
    all: void 0,
    hour: 1,
    today: 2,
    week: 3,
    month: 4,
    year: 5
  };
  const type = {
    all: void 0,
    video: 1,
    channel: 2,
    playlist: 3,
    movie: 4
  };
  const duration = {
    all: void 0,
    short: 1,
    long: 2,
    medium: 3
  };
  const order = {
    relevance: void 0,
    rating: 1,
    upload_date: 2,
    view_count: 3
  };
  const features = {
    hd: "featuresHd",
    subtitles: "featuresSubtitles",
    creative_commons: "featuresCreativeCommons",
    "3d": "features3D",
    live: "featuresLive",
    purchased: "featuresPurchased",
    "4k": "features4K",
    "360": "features360",
    location: "featuresLocation",
    hdr: "featuresHdr",
    vr180: "featuresVr180"
  };
  const data = {};
  if (filters)
    data.filters = {};
  else
    data.noFilter = 0;
  if (data.filters) {
    if (filters.upload_date) {
      data.filters.uploadDate = upload_date[filters.upload_date];
    }
    if (filters.type) {
      data.filters.type = type[filters.type];
    }
    if (filters.duration) {
      data.filters.duration = duration[filters.duration];
    }
    if (filters.sort_by && filters.sort_by !== "relevance") {
      data.sortBy = order[filters.sort_by];
    }
    if (filters.features) {
      for (const feature of filters.features) {
        data.filters[features[feature]] = 1;
      }
    }
  }
  const buf = encodeBinary5(data);
  return encodeURIComponent(u8ToBase64(buf));
}
__name(encodeSearchFilters, "encodeSearchFilters");
function encodeMusicSearchFilters(filters) {
  var _a4;
  const data = {
    filters: {
      type: {}
    }
  };
  if (filters.type && filters.type !== "all" && ((_a4 = data.filters) === null || _a4 === void 0 ? void 0 : _a4.type))
    data.filters.type[filters.type] = 1;
  const buf = encodeBinary8(data);
  return encodeURIComponent(u8ToBase64(buf));
}
__name(encodeMusicSearchFilters, "encodeMusicSearchFilters");
function encodeMessageParams(channel_id, video_id) {
  const buf = encodeBinary11({
    params: {
      ids: {
        channelId: channel_id,
        videoId: video_id
      }
    },
    number0: 1,
    number1: 4
  });
  return btoa(encodeURIComponent(u8ToBase64(buf)));
}
__name(encodeMessageParams, "encodeMessageParams");
function encodeCommentsSectionParams(video_id, options = {}) {
  const sort_options = {
    TOP_COMMENTS: 0,
    NEWEST_FIRST: 1
  };
  const buf = encodeBinary17({
    ctx: {
      videoId: video_id
    },
    unkParam: 6,
    params: {
      opts: {
        videoId: video_id,
        sortBy: sort_options[options.sort_by || "TOP_COMMENTS"],
        type: options.type || 2
      },
      target: "comments-section"
    }
  });
  return encodeURIComponent(u8ToBase64(buf));
}
__name(encodeCommentsSectionParams, "encodeCommentsSectionParams");
function encodeCommentParams(video_id) {
  const buf = encodeBinary19({
    videoId: video_id,
    params: {
      index: 0
    },
    number: 7
  });
  return encodeURIComponent(u8ToBase64(buf));
}
__name(encodeCommentParams, "encodeCommentParams");
function encodeCommentActionParams(type, args = {}) {
  const data = {
    type,
    commentId: args.comment_id || " ",
    videoId: args.video_id || " ",
    channelId: " ",
    unkNum: 2
  };
  if (args.hasOwnProperty("text")) {
    if (typeof args.target_language !== "string")
      throw new Error("target_language must be a string");
    args.comment_id && delete data.unkNum;
    data.translateCommentParams = {
      params: {
        comment: {
          text: args.text
        }
      },
      commentId: args.comment_id || " ",
      targetLanguage: args.target_language
    };
  }
  const buf = encodeBinary23(data);
  return encodeURIComponent(u8ToBase64(buf));
}
__name(encodeCommentActionParams, "encodeCommentActionParams");
function encodeNotificationPref(channel_id, index) {
  const buf = encodeBinary25({
    channelId: channel_id,
    prefId: {
      index
    },
    number0: 0,
    number1: 4
  });
  return encodeURIComponent(u8ToBase64(buf));
}
__name(encodeNotificationPref, "encodeNotificationPref");
function encodeVideoMetadataPayload(video_id, metadata) {
  const data = {
    context: {
      client: {
        unkparam: 14,
        clientName: CLIENTS.ANDROID.NAME,
        clientVersion: CLIENTS.YTSTUDIO_ANDROID.VERSION
      }
    },
    target: video_id
  };
  if (Reflect.has(metadata, "title"))
    data.title = { text: metadata.title || "" };
  if (Reflect.has(metadata, "description"))
    data.description = { text: metadata.description || "" };
  if (Reflect.has(metadata, "license"))
    data.license = { type: metadata.license || "" };
  if (Reflect.has(metadata, "tags"))
    data.tags = { list: metadata.tags || [] };
  if (Reflect.has(metadata, "category"))
    data.category = { id: metadata.category || 0 };
  if (Reflect.has(metadata, "privacy")) {
    switch (metadata.privacy) {
      case "PUBLIC":
        data.privacy = { type: 1 };
        break;
      case "UNLISTED":
        data.privacy = { type: 2 };
        break;
      case "PRIVATE":
        data.privacy = { type: 3 };
        break;
      default:
        throw new Error("Invalid visibility option");
    }
  }
  if (Reflect.has(metadata, "made_for_kids")) {
    data.madeForKids = {
      unkparam: 1,
      choice: metadata.made_for_kids ? 1 : 2
    };
  }
  if (Reflect.has(metadata, "age_restricted")) {
    data.ageRestricted = {
      unkparam: 1,
      choice: metadata.age_restricted ? 1 : 2
    };
  }
  const buf = encodeBinary38(data);
  return buf;
}
__name(encodeVideoMetadataPayload, "encodeVideoMetadataPayload");
function encodeCustomThumbnailPayload(video_id, bytes) {
  const data = {
    context: {
      client: {
        unkparam: 14,
        clientName: CLIENTS.ANDROID.NAME,
        clientVersion: CLIENTS.YTSTUDIO_ANDROID.VERSION
      }
    },
    target: video_id,
    videoThumbnail: {
      type: 3,
      thumbnail: {
        imageData: bytes
      }
    }
  };
  const buf = encodeBinary38(data);
  return buf;
}
__name(encodeCustomThumbnailPayload, "encodeCustomThumbnailPayload");
function encodeHashtag(hashtag) {
  const buf = encodeBinary40({
    params: {
      hashtag,
      type: 1
    }
  });
  return encodeURIComponent(u8ToBase64(buf));
}
__name(encodeHashtag, "encodeHashtag");

// dist/src/parser/classes/comments/Comment.js
var _Comment_actions;
var Comment = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c, _d, _e, _f, _g;
    super();
    _Comment_actions.set(this, void 0);
    this.content = new Text(data.contentText);
    this.published = new Text(data.publishedTimeText);
    this.author_is_channel_owner = data.authorIsChannelOwner;
    this.current_user_reply_thumbnail = Thumbnail.fromResponse(data.currentUserReplyThumbnail);
    this.sponsor_comment_badge = parser_default.parseItem(data.sponsorCommentBadge, SponsorCommentBadge_default);
    this.paid_comment_chip = parser_default.parseItem(data.paidCommentChipRenderer, PdgCommentChip_default);
    this.author_badge = parser_default.parseItem(data.authorCommentBadge, AuthorCommentBadge_default);
    this.author = new Author_default(Object.assign(Object.assign({}, data.authorText), { navigationEndpoint: data.authorEndpoint }), this.author_badge ? [{
      metadataBadgeRenderer: (_a4 = this.author_badge) === null || _a4 === void 0 ? void 0 : _a4.orig_badge
    }] : null, data.authorThumbnail);
    this.action_menu = parser_default.parseItem(data.actionMenu, Menu_default);
    this.action_buttons = parser_default.parseItem(data.actionButtons, CommentActionButtons_default);
    this.comment_id = data.commentId;
    this.vote_status = data.voteStatus;
    this.vote_count = data.voteCount ? new Text(data.voteCount).toString() : "0";
    this.reply_count = data.replyCount || 0;
    this.is_liked = !!((_c = (_b2 = this.action_buttons) === null || _b2 === void 0 ? void 0 : _b2.like_button) === null || _c === void 0 ? void 0 : _c.is_toggled);
    this.is_disliked = !!((_e = (_d = this.action_buttons) === null || _d === void 0 ? void 0 : _d.dislike_button) === null || _e === void 0 ? void 0 : _e.is_toggled);
    this.is_hearted = !!((_g = (_f = this.action_buttons) === null || _f === void 0 ? void 0 : _f.creator_heart) === null || _g === void 0 ? void 0 : _g.is_hearted);
    this.is_pinned = !!data.pinnedCommentBadge;
    this.is_member = !!data.sponsorCommentBadge;
  }
  like() {
    var _a4;
    return (0, import_tslib3.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib3.__classPrivateFieldGet)(this, _Comment_actions, "f"))
        throw new InnertubeError("An active caller must be provide to perform this operation.");
      const button = (_a4 = this.action_buttons) === null || _a4 === void 0 ? void 0 : _a4.like_button;
      if (!button)
        throw new InnertubeError("Like button was not found.", { comment_id: this.comment_id });
      if (button.is_toggled)
        throw new InnertubeError("This comment is already liked", { comment_id: this.comment_id });
      const response = yield button.endpoint.call((0, import_tslib3.__classPrivateFieldGet)(this, _Comment_actions, "f"), { parse: false });
      return response;
    });
  }
  dislike() {
    var _a4;
    return (0, import_tslib3.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib3.__classPrivateFieldGet)(this, _Comment_actions, "f"))
        throw new InnertubeError("An active caller must be provide to perform this operation.");
      const button = (_a4 = this.action_buttons) === null || _a4 === void 0 ? void 0 : _a4.dislike_button;
      if (!button)
        throw new InnertubeError("Dislike button was not found.", { comment_id: this.comment_id });
      if (button.is_toggled)
        throw new InnertubeError("This comment is already disliked", { comment_id: this.comment_id });
      const response = yield button.endpoint.call((0, import_tslib3.__classPrivateFieldGet)(this, _Comment_actions, "f"), { parse: false });
      return response;
    });
  }
  reply(text) {
    var _a4, _b2, _c;
    return (0, import_tslib3.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib3.__classPrivateFieldGet)(this, _Comment_actions, "f"))
        throw new InnertubeError("An active caller must be provide to perform this operation.");
      if (!((_a4 = this.action_buttons) === null || _a4 === void 0 ? void 0 : _a4.reply_button))
        throw new InnertubeError("Cannot reply to another reply. Try mentioning the user instead.", { comment_id: this.comment_id });
      const button = (_b2 = this.action_buttons) === null || _b2 === void 0 ? void 0 : _b2.reply_button;
      if (!((_c = button.endpoint) === null || _c === void 0 ? void 0 : _c.dialog))
        throw new InnertubeError("Reply button endpoint did not have a dialog.");
      const dialog = button.endpoint.dialog.as(CommentReplyDialog_default);
      const dialog_button = dialog.reply_button;
      if (!dialog_button)
        throw new InnertubeError("Reply button was not found in the dialog.", { comment_id: this.comment_id });
      if (!dialog_button.endpoint)
        throw new InnertubeError("Reply button endpoint was not found.", { comment_id: this.comment_id });
      const response = yield dialog_button.endpoint.call((0, import_tslib3.__classPrivateFieldGet)(this, _Comment_actions, "f"), { commentText: text });
      return response;
    });
  }
  translate(target_language) {
    var _a4, _b2, _c, _d, _e, _f;
    return (0, import_tslib3.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib3.__classPrivateFieldGet)(this, _Comment_actions, "f"))
        throw new InnertubeError("An active caller must be provide to perform this operation.");
      const text = this.content.toString().replace(/[^\p{L}\p{N}\p{P}\p{Z}]/gu, "");
      const payload = {
        text,
        target_language,
        comment_id: this.comment_id
      };
      const action = encodeCommentActionParams(22, payload);
      const response = yield (0, import_tslib3.__classPrivateFieldGet)(this, _Comment_actions, "f").execute("comment/perform_comment_action", { action, client: "ANDROID" });
      const mutations = (_b2 = (_a4 = response.data.frameworkUpdates) === null || _a4 === void 0 ? void 0 : _a4.entityBatchUpdate) === null || _b2 === void 0 ? void 0 : _b2.mutations;
      const content = (_f = (_e = (_d = (_c = mutations === null || mutations === void 0 ? void 0 : mutations[0]) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.commentEntityPayload) === null || _e === void 0 ? void 0 : _e.translatedContent) === null || _f === void 0 ? void 0 : _f.content;
      return Object.assign(Object.assign({}, response), { content });
    });
  }
  setActions(actions) {
    (0, import_tslib3.__classPrivateFieldSet)(this, _Comment_actions, actions, "f");
  }
};
__name(Comment, "Comment");
_Comment_actions = /* @__PURE__ */ new WeakMap();
Comment.type = "Comment";
var Comment_default = Comment;

// dist/src/parser/classes/comments/EmojiPicker.js
var EmojiPicker = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.id;
    this.categories = parser_default.parseArray(data.categories);
    this.category_buttons = parser_default.parseArray(data.categoryButtons);
    this.search_placeholder = new Text(data.searchPlaceholderText);
    this.search_no_results = new Text(data.searchNoResultsText);
    this.pick_skin_tone = new Text(data.pickSkinToneText);
    this.clear_search_label = data.clearSearchLabel;
    this.skin_tone_generic_label = data.skinToneGenericLabel;
    this.skin_tone_light_label = data.skinToneLightLabel;
    this.skin_tone_medium_light_label = data.skinToneMediumLightLabel;
    this.skin_tone_medium_label = data.skinToneMediumLabel;
    this.skin_tone_medium_dark_label = data.skinToneMediumDarkLabel;
    this.skin_tone_dark_label = data.skinToneDarkLabel;
  }
};
__name(EmojiPicker, "EmojiPicker");
EmojiPicker.type = "EmojiPicker";
var EmojiPicker_default = EmojiPicker;

// dist/src/parser/classes/comments/CommentDialog.js
var CommentDialog = class extends YTNode {
  constructor(data) {
    super();
    this.editable_text = new Text(data.editableText);
    this.author_thumbnail = Thumbnail.fromResponse(data.authorThumbnail);
    this.submit_button = parser_default.parseItem(data.submitButton, Button_default);
    this.cancel_button = parser_default.parseItem(data.cancelButton, Button_default);
    this.placeholder = new Text(data.placeholderText);
    this.emoji_button = parser_default.parseItem(data.emojiButton, Button_default);
    this.emoji_picker = parser_default.parseItem(data.emojiPicker, EmojiPicker_default);
  }
};
__name(CommentDialog, "CommentDialog");
CommentDialog.type = "CommentDialog";
var CommentDialog_default = CommentDialog;

// dist/src/parser/classes/comments/CommentReplies.js
var CommentReplies = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parseArray(data.contents);
    this.view_replies = parser_default.parseItem(data.viewReplies, Button_default);
    this.hide_replies = parser_default.parseItem(data.hideReplies, Button_default);
    this.view_replies_creator_thumbnail = Thumbnail.fromResponse(data.viewRepliesCreatorThumbnail);
    this.has_channel_owner_replied = !!data.viewRepliesCreatorThumbnail;
  }
};
__name(CommentReplies, "CommentReplies");
CommentReplies.type = "CommentReplies";
var CommentReplies_default = CommentReplies;

// dist/src/parser/classes/comments/CommentsSimplebox.js
var CommentsSimplebox = class extends YTNode {
  constructor(data) {
    super();
    this.simplebox_avatar = Thumbnail.fromResponse(data.simpleboxAvatar);
    this.simplebox_placeholder = new Text(data.simpleboxPlaceholder);
  }
};
__name(CommentsSimplebox, "CommentsSimplebox");
CommentsSimplebox.type = "CommentsSimplebox";
var CommentsSimplebox_default = CommentsSimplebox;

// dist/src/parser/classes/comments/CommentsEntryPointTeaser.js
var CommentsEntryPointTeaser = class extends YTNode {
  constructor(data) {
    super();
    if (Reflect.has(data, "teaserAvatar")) {
      this.teaser_avatar = Thumbnail.fromResponse(data.teaserAvatar);
    }
    if (Reflect.has(data, "teaserContent")) {
      this.teaser_content = new Text(data.teaserContent);
    }
  }
};
__name(CommentsEntryPointTeaser, "CommentsEntryPointTeaser");
CommentsEntryPointTeaser.type = "CommentsEntryPointTeaser";
var CommentsEntryPointTeaser_default = CommentsEntryPointTeaser;

// dist/src/parser/classes/comments/CommentsEntryPointHeader.js
var CommentsEntryPointHeader = class extends YTNode {
  constructor(data) {
    super();
    if (Reflect.has(data, "headerText")) {
      this.header = new Text(data.headerText);
    }
    if (Reflect.has(data, "commentCount")) {
      this.comment_count = new Text(data.commentCount);
    }
    if (Reflect.has(data, "teaserAvatar") || Reflect.has(data, "simpleboxAvatar")) {
      this.teaser_avatar = Thumbnail.fromResponse(data.teaserAvatar || data.simpleboxAvatar);
    }
    if (Reflect.has(data, "teaserContent")) {
      this.teaser_content = new Text(data.teaserContent);
    }
    if (Reflect.has(data, "contentRenderer")) {
      this.content_renderer = parser_exports.parseItem(data.contentRenderer, [CommentsEntryPointTeaser_default, CommentsSimplebox_default]);
    }
    if (Reflect.has(data, "simpleboxPlaceholder")) {
      this.simplebox_placeholder = new Text(data.simpleboxPlaceholder);
    }
  }
};
__name(CommentsEntryPointHeader, "CommentsEntryPointHeader");
CommentsEntryPointHeader.type = "CommentsEntryPointHeader";
var CommentsEntryPointHeader_default = CommentsEntryPointHeader;

// dist/src/parser/classes/SortFilterSubMenu.js
var SortFilterSubMenu = class extends YTNode {
  constructor(data) {
    super();
    if (Reflect.has(data, "title")) {
      this.title = data.title;
    }
    if (Reflect.has(data, "icon")) {
      this.icon_type = data.icon.iconType;
    }
    if (Reflect.has(data, "accessibility")) {
      this.label = data.accessibility.accessibilityData.label;
    }
    if (Reflect.has(data, "tooltip")) {
      this.tooltip = data.tooltip;
    }
    if (Reflect.has(data, "subMenuItems")) {
      this.sub_menu_items = data.subMenuItems.map((item) => {
        var _a4, _b2;
        return {
          title: item.title,
          selected: item.selected,
          continuation: (_b2 = (_a4 = item.continuation) === null || _a4 === void 0 ? void 0 : _a4.reloadContinuationData) === null || _b2 === void 0 ? void 0 : _b2.continuation,
          endpoint: new NavigationEndpoint_default(item.serviceEndpoint || item.navigationEndpoint),
          subtitle: item.subtitle || null
        };
      });
    }
  }
};
__name(SortFilterSubMenu, "SortFilterSubMenu");
SortFilterSubMenu.type = "SortFilterSubMenu";
var SortFilterSubMenu_default = SortFilterSubMenu;

// dist/src/parser/classes/comments/CommentsHeader.js
var CommentsHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.titleText);
    this.count = new Text(data.countText);
    this.comments_count = new Text(data.commentsCount);
    this.create_renderer = parser_default.parseItem(data.createRenderer);
    this.sort_menu = parser_default.parseItem(data.sortMenu, SortFilterSubMenu_default);
    if (Reflect.has(data, "customEmojis")) {
      this.custom_emojis = data.customEmojis.map((emoji) => {
        return {
          emoji_id: emoji.emojiId,
          shortcuts: emoji.shortcuts,
          search_terms: emoji.searchTerms,
          image: Thumbnail.fromResponse(emoji.image),
          is_custom_emoji: emoji.isCustomEmoji
        };
      });
    }
  }
};
__name(CommentsHeader, "CommentsHeader");
CommentsHeader.type = "CommentsHeader";
var CommentsHeader_default = CommentsHeader;

// dist/src/parser/classes/comments/CommentSimplebox.js
var CommentSimplebox = class extends YTNode {
  constructor(data) {
    super();
    this.submit_button = parser_default.parseItem(data.submitButton, Button_default);
    this.cancel_button = parser_default.parseItem(data.cancelButton, Button_default);
    this.author_thumbnail = Thumbnail.fromResponse(data.authorThumbnail);
    this.placeholder = new Text(data.placeholderText);
    this.avatar_size = data.avatarSize;
  }
};
__name(CommentSimplebox, "CommentSimplebox");
CommentSimplebox.type = "CommentSimplebox";
var CommentSimplebox_default = CommentSimplebox;

// dist/src/parser/classes/comments/CommentThread.js
var import_tslib4 = require("tslib");

// dist/src/parser/classes/ContinuationItem.js
var ContinuationItem = class extends YTNode {
  constructor(data) {
    super();
    this.trigger = data.trigger;
    if (Reflect.has(data, "button")) {
      this.button = parser_default.parseItem(data.button, Button_default);
    }
    this.endpoint = new NavigationEndpoint_default(data.continuationEndpoint);
  }
};
__name(ContinuationItem, "ContinuationItem");
ContinuationItem.type = "ContinuationItem";
var ContinuationItem_default = ContinuationItem;

// dist/src/parser/classes/comments/CommentThread.js
var _CommentThread_actions;
var _CommentThread_continuation;
var CommentThread = class extends YTNode {
  constructor(data) {
    super();
    _CommentThread_actions.set(this, void 0);
    _CommentThread_continuation.set(this, void 0);
    this.comment = parser_default.parseItem(data.comment, Comment_default);
    this.comment_replies_data = parser_default.parseItem(data.replies, CommentReplies_default);
    this.is_moderated_elq_comment = data.isModeratedElqComment;
    this.has_replies = !!this.comment_replies_data;
  }
  getReplies() {
    var _a4;
    return (0, import_tslib4.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib4.__classPrivateFieldGet)(this, _CommentThread_actions, "f"))
        throw new InnertubeError("Actions instance not set for this thread.");
      if (!this.comment_replies_data)
        throw new InnertubeError("This comment has no replies.", this);
      const continuation = (_a4 = this.comment_replies_data.contents) === null || _a4 === void 0 ? void 0 : _a4.firstOfType(ContinuationItem_default);
      if (!continuation)
        throw new InnertubeError("Replies continuation not found.");
      const response = yield continuation.endpoint.call((0, import_tslib4.__classPrivateFieldGet)(this, _CommentThread_actions, "f"), { parse: true });
      if (!response.on_response_received_endpoints_memo)
        throw new InnertubeError("Unexpected response.", response);
      this.replies = observe(response.on_response_received_endpoints_memo.getType(Comment_default).map((comment) => {
        comment.setActions((0, import_tslib4.__classPrivateFieldGet)(this, _CommentThread_actions, "f"));
        return comment;
      }));
      (0, import_tslib4.__classPrivateFieldSet)(this, _CommentThread_continuation, response === null || response === void 0 ? void 0 : response.on_response_received_endpoints_memo.getType(ContinuationItem_default).first(), "f");
      return this;
    });
  }
  getContinuation() {
    var _a4;
    return (0, import_tslib4.__awaiter)(this, void 0, void 0, function* () {
      if (!this.replies)
        throw new InnertubeError("Cannot retrieve continuation because this thread's replies have not been loaded.");
      if (!(0, import_tslib4.__classPrivateFieldGet)(this, _CommentThread_continuation, "f"))
        throw new InnertubeError("Continuation not found.");
      if (!(0, import_tslib4.__classPrivateFieldGet)(this, _CommentThread_actions, "f"))
        throw new InnertubeError("Actions instance not set for this thread.");
      const load_more_button = (_a4 = (0, import_tslib4.__classPrivateFieldGet)(this, _CommentThread_continuation, "f").button) === null || _a4 === void 0 ? void 0 : _a4.as(Button_default);
      if (!load_more_button)
        throw new InnertubeError('"Load more" button not found.');
      const response = yield load_more_button.endpoint.call((0, import_tslib4.__classPrivateFieldGet)(this, _CommentThread_actions, "f"), { parse: true });
      if (!response.on_response_received_endpoints_memo)
        throw new InnertubeError("Unexpected response.", response);
      this.replies = observe(response.on_response_received_endpoints_memo.getType(Comment_default).map((comment) => {
        comment.setActions((0, import_tslib4.__classPrivateFieldGet)(this, _CommentThread_actions, "f"));
        return comment;
      }));
      (0, import_tslib4.__classPrivateFieldSet)(this, _CommentThread_continuation, response.on_response_received_endpoints_memo.getType(ContinuationItem_default).first(), "f");
      return this;
    });
  }
  get has_continuation() {
    if (!this.replies)
      throw new InnertubeError("Cannot determine if there is a continuation because this thread's replies have not been loaded.");
    return !!(0, import_tslib4.__classPrivateFieldGet)(this, _CommentThread_continuation, "f");
  }
  setActions(actions) {
    (0, import_tslib4.__classPrivateFieldSet)(this, _CommentThread_actions, actions, "f");
  }
};
__name(CommentThread, "CommentThread");
_CommentThread_actions = /* @__PURE__ */ new WeakMap(), _CommentThread_continuation = /* @__PURE__ */ new WeakMap();
CommentThread.type = "CommentThread";
var CommentThread_default = CommentThread;

// dist/src/parser/classes/CompactChannel.js
var CompactChannel = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.channel_id = data.channelId;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.display_name = new Text(data.displayName);
    this.video_count = new Text(data.videoCountText);
    this.subscriber_count = new Text(data.subscriberCountText);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.tv_banner = Thumbnail.fromResponse(data.tvBanner);
    this.menu = parser_default.parseItem(data.menu, Menu_default);
  }
};
__name(CompactChannel, "CompactChannel");
CompactChannel.type = "CompactChannel";
var CompactChannel_default = CompactChannel;

// dist/src/parser/classes/CompactLink.js
var CompactLink = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title).toString();
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.style = data.style;
  }
};
__name(CompactLink, "CompactLink");
CompactLink.type = "CompactLink";
var CompactLink_default = CompactLink;

// dist/src/parser/classes/PlaylistCustomThumbnail.js
var PlaylistCustomThumbnail = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
};
__name(PlaylistCustomThumbnail, "PlaylistCustomThumbnail");
PlaylistCustomThumbnail.type = "PlaylistCustomThumbnail";
var PlaylistCustomThumbnail_default = PlaylistCustomThumbnail;

// dist/src/parser/classes/PlaylistVideoThumbnail.js
var PlaylistVideoThumbnail = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
};
__name(PlaylistVideoThumbnail, "PlaylistVideoThumbnail");
PlaylistVideoThumbnail.type = "PlaylistVideoThumbnail";
var PlaylistVideoThumbnail_default = PlaylistVideoThumbnail;

// dist/src/parser/classes/Playlist.js
var Playlist = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    this.id = data.playlistId;
    this.title = new Text(data.title);
    this.author = ((_a4 = data.shortBylineText) === null || _a4 === void 0 ? void 0 : _a4.simpleText) ? new Text(data.shortBylineText) : new Author_default(data.longBylineText, data.ownerBadges, null);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail || { thumbnails: data.thumbnails.map((th) => th.thumbnails).flat(1) });
    this.video_count = new Text(data.thumbnailText);
    this.video_count_short = new Text(data.videoCountShortText);
    this.first_videos = parser_default.parseArray(data.videos);
    this.share_url = data.shareUrl || null;
    this.menu = parser_default.parseItem(data.menu);
    this.badges = parser_default.parseArray(data.ownerBadges);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
    if (Reflect.has(data, "thumbnailRenderer")) {
      this.thumbnail_renderer = parser_default.parseItem(data.thumbnailRenderer, [PlaylistVideoThumbnail_default, PlaylistCustomThumbnail_default]) || void 0;
    }
    if (Reflect.has(data, "viewPlaylistText")) {
      this.view_playlist = new Text(data.viewPlaylistText);
    }
  }
};
__name(Playlist, "Playlist");
Playlist.type = "Playlist";
var Playlist_default = Playlist;

// dist/src/parser/classes/CompactMix.js
var CompactMix = class extends Playlist_default {
  constructor(data) {
    super(data);
  }
};
__name(CompactMix, "CompactMix");
CompactMix.type = "CompactMix";
var CompactMix_default = CompactMix;

// dist/src/parser/classes/CompactMovie.js
var CompactMovie = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    const overlay_time_status = ((_a4 = data.thumbnailOverlays.find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)) === null || _a4 === void 0 ? void 0 : _a4.thumbnailOverlayTimeStatusRenderer.text) || "N/A";
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.top_metadata_items = new Text(data.topMetadataItems);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
    this.author = new Author_default(data.shortBylineText);
    const durationText = data.lengthText ? new Text(data.lengthText).toString() : new Text(overlay_time_status).toString();
    this.duration = {
      text: durationText,
      seconds: timeToSeconds(durationText)
    };
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.badges = parser_default.parseArray(data.badges);
    this.use_vertical_poster = data.useVerticalPoster;
    this.menu = parser_default.parseItem(data.menu, Menu_default);
  }
};
__name(CompactMovie, "CompactMovie");
CompactMovie.type = "CompactMovie";
var CompactMovie_default = CompactMovie;

// dist/src/parser/classes/CompactPlaylist.js
var CompactPlaylist = class extends Playlist_default {
  constructor(data) {
    super(data);
  }
};
__name(CompactPlaylist, "CompactPlaylist");
CompactPlaylist.type = "CompactPlaylist";
var CompactPlaylist_default = CompactPlaylist;

// dist/src/parser/classes/CompactStation.js
var CompactStation = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.video_count = new Text(data.videoCountText);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
};
__name(CompactStation, "CompactStation");
CompactStation.type = "CompactStation";
var CompactStation_default = CompactStation;

// dist/src/parser/classes/ConfirmDialog.js
var ConfirmDialog = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.confirm_button = parser_default.parseItem(data.confirmButton, Button_default);
    this.cancel_button = parser_default.parseItem(data.cancelButton, Button_default);
    this.dialog_messages = data.dialogMessages.map((txt) => new Text(txt));
  }
};
__name(ConfirmDialog, "ConfirmDialog");
ConfirmDialog.type = "ConfirmDialog";
var ConfirmDialog_default = ConfirmDialog;

// dist/src/parser/classes/ContentPreviewImageView.js
var ContentPreviewImageView = class extends YTNode {
  constructor(data) {
    super();
    this.image = data.image.sources.map((x) => new Thumbnail(x)).sort((a, b) => b.width - a.width);
    this.style = data.style;
  }
};
__name(ContentPreviewImageView, "ContentPreviewImageView");
ContentPreviewImageView.type = "ContentPreviewImageView";
var ContentPreviewImageView_default = ContentPreviewImageView;

// dist/src/parser/classes/Message.js
var Message = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text(data.text);
  }
};
__name(Message, "Message");
Message.type = "Message";
var Message_default = Message;

// dist/src/parser/classes/ConversationBar.js
var ConversationBar = class extends YTNode {
  constructor(data) {
    super();
    this.availability_message = parser_default.parseItem(data.availabilityMessage, Message_default);
  }
};
__name(ConversationBar, "ConversationBar");
ConversationBar.type = "ConversationBar";
var ConversationBar_default = ConversationBar;

// dist/src/parser/classes/CopyLink.js
var CopyLink = class extends YTNode {
  constructor(data) {
    super();
    this.copy_button = parser_default.parseItem(data.copyButton, Button_default);
    this.short_url = data.shortUrl;
    this.style = data.style;
  }
};
__name(CopyLink, "CopyLink");
CopyLink.type = "CopyLink";
var CopyLink_default = CopyLink;

// dist/src/parser/classes/HeatMarker.js
var HeatMarker = class extends YTNode {
  constructor(data) {
    super();
    this.time_range_start_millis = data.timeRangeStartMillis;
    this.marker_duration_millis = data.markerDurationMillis;
    this.heat_marker_intensity_score_normalized = data.heatMarkerIntensityScoreNormalized;
  }
};
__name(HeatMarker, "HeatMarker");
HeatMarker.type = "HeatMarker";
var HeatMarker_default = HeatMarker;

// dist/src/parser/classes/Heatmap.js
var Heatmap = class extends YTNode {
  constructor(data) {
    super();
    this.max_height_dp = data.maxHeightDp;
    this.min_height_dp = data.minHeightDp;
    this.show_hide_animation_duration_millis = data.showHideAnimationDurationMillis;
    this.heat_markers = parser_default.parseArray(data.heatMarkers, HeatMarker_default);
    this.heat_markers_decorations = parser_default.parseArray(data.heatMarkersDecorations);
  }
};
__name(Heatmap, "Heatmap");
Heatmap.type = "Heatmap";
var Heatmap_default = Heatmap;

// dist/src/parser/classes/MultiMarkersPlayerBar.js
var Marker = class extends YTNode {
  constructor(data) {
    super();
    this.marker_key = data.key;
    this.value = {};
    if (Reflect.has(data, "value")) {
      if (Reflect.has(data.value, "heatmap")) {
        this.value.heatmap = parser_default.parseItem(data.value.heatmap, Heatmap_default);
      }
      if (Reflect.has(data.value, "chapters")) {
        this.value.chapters = parser_default.parseArray(data.value.chapters, Chapter_default);
      }
    }
  }
};
__name(Marker, "Marker");
Marker.type = "Marker";
var MultiMarkersPlayerBar = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    this.markers_map = observe(((_a4 = data.markersMap) === null || _a4 === void 0 ? void 0 : _a4.map((marker) => new Marker(marker))) || []);
  }
};
__name(MultiMarkersPlayerBar, "MultiMarkersPlayerBar");
MultiMarkersPlayerBar.type = "MultiMarkersPlayerBar";
var MultiMarkersPlayerBar_default = MultiMarkersPlayerBar;

// dist/src/parser/classes/DecoratedPlayerBar.js
var DecoratedPlayerBar = class extends YTNode {
  constructor(data) {
    super();
    this.player_bar = parser_default.parseItem(data.playerBar, MultiMarkersPlayerBar_default);
    this.player_bar_action_button = parser_default.parseItem(data.playerBarActionButton, Button_default);
  }
};
__name(DecoratedPlayerBar, "DecoratedPlayerBar");
DecoratedPlayerBar.type = "DecoratedPlayerBar";
var DecoratedPlayerBar_default = DecoratedPlayerBar;

// dist/src/parser/classes/DefaultPromoPanel.js
var DefaultPromoPanel = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.large_form_factor_background_thumbnail = parser_default.parseItem(data.largeFormFactorBackgroundThumbnail);
    this.small_form_factor_background_thumbnail = parser_default.parseItem(data.smallFormFactorBackgroundThumbnail);
    this.scrim_color_values = data.scrimColorValues;
    this.min_panel_display_duration_ms = data.minPanelDisplayDurationMs;
    this.min_video_play_duration_ms = data.minVideoPlayDurationMs;
    this.scrim_duration = data.scrimDuration;
    this.metadata_order = data.metadataOrder;
    this.panel_layout = data.panelLayout;
  }
};
__name(DefaultPromoPanel, "DefaultPromoPanel");
DefaultPromoPanel.type = "DefaultPromoPanel";
var DefaultPromoPanel_default = DefaultPromoPanel;

// dist/src/parser/classes/DidYouMean.js
var DidYouMean = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text(data.didYouMean).toString();
    this.corrected_query = new Text(data.correctedQuery);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint || data.correctedQueryEndpoint);
  }
};
__name(DidYouMean, "DidYouMean");
DidYouMean.type = "DidYouMean";
var DidYouMean_default = DidYouMean;

// dist/src/parser/classes/DownloadButton.js
var DownloadButton = class extends YTNode {
  constructor(data) {
    super();
    this.style = data.style;
    this.size = data.size;
    this.endpoint = new NavigationEndpoint_default(data.command);
    this.target_id = data.targetId;
  }
};
__name(DownloadButton, "DownloadButton");
DownloadButton.type = "DownloadButton";
var DownloadButton_default = DownloadButton;

// dist/src/parser/classes/DynamicTextView.js
var DynamicTextView = class extends YTNode {
  constructor(data) {
    super();
    this.text = data.text.content;
  }
};
__name(DynamicTextView, "DynamicTextView");
DynamicTextView.type = "DynamicTextView";
var DynamicTextView_default = DynamicTextView;

// dist/src/parser/classes/misc/ChildElement.js
var ChildElement = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    if (Reflect.has(data, "type") && Reflect.has(data.type, "textType")) {
      this.text = (_a4 = data.type.textType.text) === null || _a4 === void 0 ? void 0 : _a4.content;
    }
    this.properties = data.properties;
    if (Reflect.has(data, "childElements")) {
      this.child_elements = data.childElements.map((el) => new ChildElement(el));
    }
  }
};
__name(ChildElement, "ChildElement");
ChildElement.type = "ChildElement";
var ChildElement_default = ChildElement;

// dist/src/parser/classes/Element.js
var Element = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    if (Reflect.has(data, "elementRenderer")) {
      return parser_default.parseItem(data, Element);
    }
    const type = data.newElement.type.componentType;
    this.model = parser_default.parseItem(type === null || type === void 0 ? void 0 : type.model);
    if (Reflect.has(data, "newElement") && Reflect.has(data.newElement, "childElements")) {
      this.child_elements = observe(((_a4 = data.newElement.childElements) === null || _a4 === void 0 ? void 0 : _a4.map((el) => new ChildElement_default(el))) || []);
    }
  }
};
__name(Element, "Element");
Element.type = "Element";
var Element_default = Element;

// dist/src/parser/classes/EmergencyOnebox.js
var EmergencyOnebox = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.first_option = parser_default.parseItem(data.firstOption);
    this.menu = parser_default.parseItem(data.menu, Menu_default);
  }
};
__name(EmergencyOnebox, "EmergencyOnebox");
EmergencyOnebox.type = "EmergencyOnebox";
var EmergencyOnebox_default = EmergencyOnebox;

// dist/src/parser/classes/EmojiPickerCategory.js
var EmojiPickerCategory = class extends YTNode {
  constructor(data) {
    super();
    this.category_id = data.categoryId;
    this.title = new Text(data.title);
    this.emoji_ids = data.emojiIds;
    this.image_loading_lazy = !!data.imageLoadingLazy;
    this.category_type = data.categoryType;
  }
};
__name(EmojiPickerCategory, "EmojiPickerCategory");
EmojiPickerCategory.type = "EmojiPickerCategory";
var EmojiPickerCategory_default = EmojiPickerCategory;

// dist/src/parser/classes/EmojiPickerCategoryButton.js
var EmojiPickerCategoryButton = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    this.category_id = data.categoryId;
    if (Reflect.has(data, "icon")) {
      this.icon_type = (_a4 = data.icon) === null || _a4 === void 0 ? void 0 : _a4.iconType;
    }
    this.tooltip = data.tooltip;
  }
};
__name(EmojiPickerCategoryButton, "EmojiPickerCategoryButton");
EmojiPickerCategoryButton.type = "EmojiPickerCategoryButton";
var EmojiPickerCategoryButton_default = EmojiPickerCategoryButton;

// dist/src/parser/classes/EmojiPickerUpsellCategory.js
var EmojiPickerUpsellCategory = class extends YTNode {
  constructor(data) {
    super();
    this.category_id = data.categoryId;
    this.title = new Text(data.title);
    this.upsell = new Text(data.upsell);
    this.emoji_tooltip = data.emojiTooltip;
    this.endpoint = new NavigationEndpoint_default(data.command);
    this.emoji_ids = data.emojiIds;
  }
};
__name(EmojiPickerUpsellCategory, "EmojiPickerUpsellCategory");
EmojiPickerUpsellCategory.type = "EmojiPickerUpsellCategory";
var EmojiPickerUpsellCategory_default = EmojiPickerUpsellCategory;

// dist/src/parser/classes/EndscreenElement.js
var EndscreenElement = class extends YTNode {
  constructor(data) {
    super();
    this.style = data.style;
    this.title = new Text(data.title);
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
    if (Reflect.has(data, "image")) {
      this.image = Thumbnail.fromResponse(data.image);
    }
    if (Reflect.has(data, "icon")) {
      this.icon = Thumbnail.fromResponse(data.icon);
    }
    if (Reflect.has(data, "metadata")) {
      this.metadata = new Text(data.metadata);
    }
    if (Reflect.has(data, "callToAction")) {
      this.call_to_action = new Text(data.callToAction);
    }
    if (Reflect.has(data, "hovercardButton")) {
      this.hovercard_button = parser_default.parseItem(data.hovercardButton);
    }
    if (Reflect.has(data, "isSubscribe")) {
      this.is_subscribe = !!data.isSubscribe;
    }
    if (Reflect.has(data, "playlistLength")) {
      this.playlist_length = new Text(data.playlistLength);
    }
    if (Reflect.has(data, "thumbnailOverlays")) {
      this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
    }
    this.left = parseFloat(data.left);
    this.width = parseFloat(data.width);
    this.top = parseFloat(data.top);
    this.aspect_ratio = parseFloat(data.aspectRatio);
    this.start_ms = parseFloat(data.startMs);
    this.end_ms = parseFloat(data.endMs);
    this.id = data.id;
  }
};
__name(EndscreenElement, "EndscreenElement");
EndscreenElement.type = "EndscreenElement";
var EndscreenElement_default = EndscreenElement;

// dist/src/parser/classes/EndScreenPlaylist.js
var EndScreenPlaylist = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.playlistId;
    this.title = new Text(data.title);
    this.author = new Text(data.longBylineText);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.video_count = new Text(data.videoCountText);
  }
};
__name(EndScreenPlaylist, "EndScreenPlaylist");
EndScreenPlaylist.type = "EndScreenPlaylist";
var EndScreenPlaylist_default = EndScreenPlaylist;

// dist/src/parser/classes/EndScreenVideo.js
var EndScreenVideo = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
    this.author = new Author_default(data.shortBylineText, data.ownerBadges);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.short_view_count = new Text(data.shortViewCountText);
    this.badges = parser_default.parseArray(data.badges);
    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: data.lengthInSeconds
    };
  }
};
__name(EndScreenVideo, "EndScreenVideo");
EndScreenVideo.type = "EndScreenVideo";
var EndScreenVideo_default = EndScreenVideo;

// dist/src/parser/classes/EngagementPanelTitleHeader.js
var EngagementPanelTitleHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.visibility_button = parser_exports.parseItem(data.visibilityButton, Button_default);
  }
};
__name(EngagementPanelTitleHeader, "EngagementPanelTitleHeader");
EngagementPanelTitleHeader.type = "EngagementPanelTitleHeader";
var EngagementPanelTitleHeader_default = EngagementPanelTitleHeader;

// dist/src/parser/classes/MacroMarkersInfoItem.js
var MacroMarkersInfoItem = class extends YTNode {
  constructor(data) {
    super();
    this.info_text = new Text(data.infoText);
    this.menu = parser_exports.parseItem(data.menu, Menu_default);
  }
};
__name(MacroMarkersInfoItem, "MacroMarkersInfoItem");
MacroMarkersInfoItem.type = "MacroMarkersInfoItem";
var MacroMarkersInfoItem_default = MacroMarkersInfoItem;

// dist/src/parser/classes/MacroMarkersListItem.js
var MacroMarkersListItem = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.time_description = new Text(data.timeDescription);
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.on_tap_endpoint = new NavigationEndpoint_default(data.onTap);
    this.layout = data.layout;
    this.is_highlighted = !!data.isHighlighted;
  }
};
__name(MacroMarkersListItem, "MacroMarkersListItem");
MacroMarkersListItem.type = "MacroMarkersListItem";
var MacroMarkersListItem_default = MacroMarkersListItem;

// dist/src/parser/classes/MacroMarkersList.js
var MacroMarkersList = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_exports.parseArray(data.contents, [MacroMarkersInfoItem_default, MacroMarkersListItem_default]);
    this.sync_button_label = new Text(data.syncButtonLabel);
  }
};
__name(MacroMarkersList, "MacroMarkersList");
MacroMarkersList.type = "MacroMarkersList";
var MacroMarkersList_default = MacroMarkersList;

// dist/src/parser/classes/SectionList.js
var SectionList = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parseArray(data.contents);
    if (Reflect.has(data, "targetId")) {
      this.target_id = data.targetId;
    }
    if (Reflect.has(data, "continuations")) {
      if (Reflect.has(data.continuations[0], "nextContinuationData")) {
        this.continuation = data.continuations[0].nextContinuationData.continuation;
      } else if (Reflect.has(data.continuations[0], "reloadContinuationData")) {
        this.continuation = data.continuations[0].reloadContinuationData.continuation;
      }
    }
    if (Reflect.has(data, "header")) {
      this.header = parser_default.parseItem(data.header);
    }
    if (Reflect.has(data, "subMenu")) {
      this.sub_menu = parser_default.parseItem(data.subMenu);
    }
  }
};
__name(SectionList, "SectionList");
SectionList.type = "SectionList";
var SectionList_default = SectionList;

// dist/src/parser/classes/ExpandableVideoDescriptionBody.js
var ExpandableVideoDescriptionBody = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    this.show_more_text = new Text(data.showMoreText);
    this.show_less_text = new Text(data.showLessText);
    if (Reflect.has(data, "attributedDescriptionBodyText")) {
      this.attributed_description_body_text = (_a4 = data.attributedDescriptionBodyText) === null || _a4 === void 0 ? void 0 : _a4.content;
    }
  }
};
__name(ExpandableVideoDescriptionBody, "ExpandableVideoDescriptionBody");
ExpandableVideoDescriptionBody.type = "ExpandableVideoDescriptionBody";
var ExpandableVideoDescriptionBody_default = ExpandableVideoDescriptionBody;

// dist/src/parser/classes/SearchRefinementCard.js
var SearchRefinementCard = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint_default(data.searchEndpoint);
    this.query = new Text(data.query).toString();
  }
};
__name(SearchRefinementCard, "SearchRefinementCard");
SearchRefinementCard.type = "SearchRefinementCard";
var SearchRefinementCard_default = SearchRefinementCard;

// dist/src/parser/classes/GameCard.js
var GameCard = class extends YTNode {
  constructor(data) {
    super();
    this.game = parser_default.parseItem(data.game);
  }
};
__name(GameCard, "GameCard");
GameCard.type = "GameCard";
var GameCard_default = GameCard;

// dist/src/parser/classes/ExpandableMetadata.js
var ExpandableMetadata = class extends YTNode {
  constructor(data) {
    super();
    if (Reflect.has(data, "header")) {
      this.header = {
        collapsed_title: new Text(data.header.collapsedTitle),
        collapsed_thumbnail: Thumbnail.fromResponse(data.header.collapsedThumbnail),
        collapsed_label: new Text(data.header.collapsedLabel),
        expanded_title: new Text(data.header.expandedTitle)
      };
    }
    this.expanded_content = parser_default.parseItem(data.expandedContent, HorizontalCardList_default);
    this.expand_button = parser_default.parseItem(data.expandButton, Button_default);
    this.collapse_button = parser_default.parseItem(data.collapseButton, Button_default);
  }
};
__name(ExpandableMetadata, "ExpandableMetadata");
ExpandableMetadata.type = "ExpandableMetadata";
var ExpandableMetadata_default = ExpandableMetadata;

// dist/src/parser/classes/ThumbnailOverlayTimeStatus.js
var ThumbnailOverlayTimeStatus = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text(data.text).toString();
    this.style = data.style;
  }
};
__name(ThumbnailOverlayTimeStatus, "ThumbnailOverlayTimeStatus");
ThumbnailOverlayTimeStatus.type = "ThumbnailOverlayTimeStatus";
var ThumbnailOverlayTimeStatus_default = ThumbnailOverlayTimeStatus;

// dist/src/parser/classes/Video.js
var Video = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c;
    super();
    const overlay_time_status = ((_a4 = data.thumbnailOverlays.find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)) === null || _a4 === void 0 ? void 0 : _a4.thumbnailOverlayTimeStatusRenderer.text) || "N/A";
    this.id = data.videoId;
    this.title = new Text(data.title);
    if (Reflect.has(data, "descriptionSnippet")) {
      this.description_snippet = new Text(data.descriptionSnippet);
    }
    if (Reflect.has(data, "detailedMetadataSnippets")) {
      this.snippets = data.detailedMetadataSnippets.map((snippet) => ({
        text: new Text(snippet.snippetText),
        hover_text: new Text(snippet.snippetHoverText)
      }));
    }
    this.expandable_metadata = parser_default.parseItem(data.expandableMetadata, ExpandableMetadata_default);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
    if (Reflect.has(data, "richThumbnail")) {
      this.rich_thumbnail = parser_default.parseItem(data.richThumbnail);
    }
    this.author = new Author_default(data.ownerText, data.ownerBadges, (_c = (_b2 = data.channelThumbnailSupportedRenderers) === null || _b2 === void 0 ? void 0 : _b2.channelThumbnailWithLinkRenderer) === null || _c === void 0 ? void 0 : _c.thumbnail);
    this.badges = parser_default.parseArray(data.badges, MetadataBadge_default);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.published = new Text(data.publishedTimeText);
    this.view_count = new Text(data.viewCountText);
    this.short_view_count = new Text(data.shortViewCountText);
    if (Reflect.has(data, "upcomingEventData")) {
      this.upcoming = new Date(Number(`${data.upcomingEventData.startTime}000`));
    }
    this.duration = {
      text: data.lengthText ? new Text(data.lengthText).toString() : new Text(overlay_time_status).toString(),
      seconds: timeToSeconds(data.lengthText ? new Text(data.lengthText).toString() : new Text(overlay_time_status).toString())
    };
    this.show_action_menu = !!data.showActionMenu;
    this.is_watched = !!data.isWatched;
    this.menu = parser_default.parseItem(data.menu, Menu_default);
    if (Reflect.has(data, "searchVideoResultEntityKey")) {
      this.search_video_result_entity_key = data.searchVideoResultEntityKey;
    }
  }
  get description() {
    var _a4;
    if (this.snippets) {
      return this.snippets.map((snip) => snip.text.toString()).join("");
    }
    return ((_a4 = this.description_snippet) === null || _a4 === void 0 ? void 0 : _a4.toString()) || "";
  }
  get is_live() {
    var _a4;
    return this.badges.some((badge) => {
      if (badge.style === "BADGE_STYLE_TYPE_LIVE_NOW" || badge.label === "LIVE")
        return true;
    }) || ((_a4 = this.thumbnail_overlays.firstOfType(ThumbnailOverlayTimeStatus_default)) === null || _a4 === void 0 ? void 0 : _a4.style) === "LIVE";
  }
  get is_upcoming() {
    return this.upcoming && this.upcoming > new Date();
  }
  get is_premiere() {
    return this.badges.some((badge) => badge.label === "PREMIERE");
  }
  get is_4k() {
    return this.badges.some((badge) => badge.label === "4K");
  }
  get has_captions() {
    return this.badges.some((badge) => badge.label === "CC");
  }
  get best_thumbnail() {
    return this.thumbnails[0];
  }
};
__name(Video, "Video");
Video.type = "Video";
var Video_default = Video;

// dist/src/parser/classes/VideoCard.js
var VideoCard = class extends Video_default {
  constructor(data) {
    super(data);
  }
};
__name(VideoCard, "VideoCard");
VideoCard.type = "VideoCard";
var VideoCard_default = VideoCard;

// dist/src/parser/classes/HorizontalCardList.js
var HorizontalCardList = class extends YTNode {
  constructor(data) {
    super();
    this.cards = parser_default.parseArray(data.cards, [SearchRefinementCard_default, MacroMarkersListItem_default, GameCard_default, VideoCard_default]);
    this.header = parser_default.parseItem(data.header);
    this.previous_button = parser_default.parseItem(data.previousButton, Button_default);
    this.next_button = parser_default.parseItem(data.nextButton, Button_default);
  }
};
__name(HorizontalCardList, "HorizontalCardList");
HorizontalCardList.type = "HorizontalCardList";
var HorizontalCardList_default = HorizontalCardList;

// dist/src/parser/classes/Factoid.js
var Factoid = class extends YTNode {
  constructor(data) {
    super();
    this.label = new Text(data.label);
    this.value = new Text(data.value);
    this.accessibility_text = data.accessibilityText;
  }
};
__name(Factoid, "Factoid");
Factoid.type = "Factoid";
var Factoid_default = Factoid;

// dist/src/parser/classes/VideoDescriptionHeader.js
var VideoDescriptionHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.channel = new Text(data.channel);
    this.channel_navigation_endpoint = new NavigationEndpoint_default(data.channelNavigationEndpoint);
    this.channel_thumbnail = Thumbnail.fromResponse(data.channelThumbnail);
    this.publish_date = new Text(data.publishDate);
    this.views = new Text(data.views);
    this.factoids = parser_default.parseArray(data.factoid, Factoid_default);
  }
};
__name(VideoDescriptionHeader, "VideoDescriptionHeader");
VideoDescriptionHeader.type = "VideoDescriptionHeader";
var VideoDescriptionHeader_default = VideoDescriptionHeader;

// dist/src/parser/classes/VideoDescriptionInfocardsSection.js
var VideoDescriptionInfocardsSection = class extends YTNode {
  constructor(data) {
    super();
    this.section_title = new Text(data.sectionTitle);
    this.creator_videos_button = parser_default.parseItem(data.creatorVideosButton, Button_default);
    this.creator_about_button = parser_default.parseItem(data.creatorAboutButton, Button_default);
    this.section_subtitle = new Text(data.sectionSubtitle);
    this.channel_avatar = Thumbnail.fromResponse(data.channelAvatar);
    this.channel_endpoint = new NavigationEndpoint_default(data.channelEndpoint);
  }
};
__name(VideoDescriptionInfocardsSection, "VideoDescriptionInfocardsSection");
VideoDescriptionInfocardsSection.type = "VideoDescriptionInfocardsSection";
var VideoDescriptionInfocardsSection_default = VideoDescriptionInfocardsSection;

// dist/src/parser/classes/VideoDescriptionMusicSection.js
var VideoDescriptionMusicSection = class extends YTNode {
  constructor(data) {
    super();
    this.carousel_lockups = parser_default.parseArray(data.carouselLockups, CarouselLockup_default);
    this.section_title = new Text(data.sectionTitle);
  }
};
__name(VideoDescriptionMusicSection, "VideoDescriptionMusicSection");
VideoDescriptionMusicSection.type = "VideoDescriptionMusicSection";
var VideoDescriptionMusicSection_default = VideoDescriptionMusicSection;

// dist/src/parser/classes/StructuredDescriptionContent.js
var StructuredDescriptionContent = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parseArray(data.items, [VideoDescriptionHeader_default, ExpandableVideoDescriptionBody_default, VideoDescriptionMusicSection_default, VideoDescriptionInfocardsSection_default, HorizontalCardList_default]);
  }
};
__name(StructuredDescriptionContent, "StructuredDescriptionContent");
StructuredDescriptionContent.type = "StructuredDescriptionContent";
var StructuredDescriptionContent_default = StructuredDescriptionContent;

// dist/src/parser/classes/EngagementPanelSectionList.js
var EngagementPanelSectionList = class extends YTNode {
  constructor(data) {
    super();
    this.header = parser_default.parseItem(data.header, EngagementPanelTitleHeader_default);
    this.content = parser_default.parseItem(data.content, [SectionList_default, ContinuationItem_default, StructuredDescriptionContent_default, MacroMarkersList_default]);
    this.panel_identifier = data.panelIdentifier;
    this.target_id = data.targetId;
    this.visibility = data.visibility;
  }
};
__name(EngagementPanelSectionList, "EngagementPanelSectionList");
EngagementPanelSectionList.type = "EngagementPanelSectionList";
var EngagementPanelSectionList_default = EngagementPanelSectionList;

// dist/src/parser/classes/ExpandableTab.js
var ExpandableTab = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
    this.selected = data.selected;
    this.content = parser_default.parseItem(data.content);
  }
};
__name(ExpandableTab, "ExpandableTab");
ExpandableTab.type = "ExpandableTab";
var ExpandableTab_default = ExpandableTab;

// dist/src/parser/classes/ExpandedShelfContents.js
var ExpandedShelfContents = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parseArray(data.items);
  }
  get contents() {
    return this.items;
  }
};
__name(ExpandedShelfContents, "ExpandedShelfContents");
ExpandedShelfContents.type = "ExpandedShelfContents";
var ExpandedShelfContents_default = ExpandedShelfContents;

// dist/src/parser/classes/FeedFilterChipBar.js
var FeedFilterChipBar = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parseArray(data.contents, ChipCloudChip_default);
  }
};
__name(FeedFilterChipBar, "FeedFilterChipBar");
FeedFilterChipBar.type = "FeedFilterChipBar";
var FeedFilterChipBar_default = FeedFilterChipBar;

// dist/src/parser/classes/FeedTabbedHeader.js
var FeedTabbedHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
  }
};
__name(FeedTabbedHeader, "FeedTabbedHeader");
FeedTabbedHeader.type = "FeedTabbedHeader";
var FeedTabbedHeader_default = FeedTabbedHeader;

// dist/src/parser/classes/GameDetails.js
var GameDetails = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.box_art = Thumbnail.fromResponse(data.boxArt);
    this.box_art_overlay_text = new Text(data.boxArtOverlayText);
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
    this.is_official_box_art = !!data.isOfficialBoxArt;
  }
};
__name(GameDetails, "GameDetails");
GameDetails.type = "GameDetails";
var GameDetails_default = GameDetails;

// dist/src/parser/classes/Grid.js
var Grid = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c;
    super();
    this.items = parser_default.parseArray(data.items);
    if (Reflect.has(data, "header")) {
      this.header = parser_default.parseItem(data.header);
    }
    if (Reflect.has(data, "isCollapsible")) {
      this.is_collapsible = data.isCollapsible;
    }
    if (Reflect.has(data, "visibleRowCount")) {
      this.visible_row_count = data.visibleRowCount;
    }
    if (Reflect.has(data, "targetId")) {
      this.target_id = data.targetId;
    }
    this.continuation = ((_c = (_b2 = (_a4 = data.continuations) === null || _a4 === void 0 ? void 0 : _a4[0]) === null || _b2 === void 0 ? void 0 : _b2.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || null;
  }
  get contents() {
    return this.items;
  }
};
__name(Grid, "Grid");
Grid.type = "Grid";
var Grid_default = Grid;

// dist/src/parser/classes/GridChannel.js
var GridChannel = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.channelId;
    this.author = new Author_default(Object.assign(Object.assign({}, data.title), { navigationEndpoint: data.navigationEndpoint }), data.ownerBadges, data.thumbnail);
    this.subscribers = new Text(data.subscriberCountText);
    this.video_count = new Text(data.videoCountText);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.subscribe_button = parser_default.parseItem(data.subscribeButton);
  }
};
__name(GridChannel, "GridChannel");
GridChannel.type = "GridChannel";
var GridChannel_default = GridChannel;

// dist/src/parser/classes/GridHeader.js
var GridHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
  }
};
__name(GridHeader, "GridHeader");
GridHeader.type = "GridHeader";
var GridHeader_default = GridHeader;

// dist/src/parser/classes/GridMix.js
var GridMix = class extends YTNode {
  constructor(data) {
    var _a4, _b2;
    super();
    this.id = data.playlistId;
    this.title = new Text(data.title);
    this.author = ((_a4 = data.shortBylineText) === null || _a4 === void 0 ? void 0 : _a4.simpleText) ? new Text(data.shortBylineText) : ((_b2 = data.longBylineText) === null || _b2 === void 0 ? void 0 : _b2.simpleText) ? new Text(data.longBylineText) : null;
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.video_count = new Text(data.videoCountText);
    this.video_count_short = new Text(data.videoCountShortText);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.secondary_endpoint = new NavigationEndpoint_default(data.secondaryNavigationEndpoint);
    this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
  }
};
__name(GridMix, "GridMix");
GridMix.type = "GridMix";
var GridMix_default = GridMix;

// dist/src/parser/classes/GridMovie.js
var GridMovie = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    const length_alt = (_a4 = data.thumbnailOverlays.find((overlay) => overlay.hasOwnProperty("thumbnailOverlayTimeStatusRenderer"))) === null || _a4 === void 0 ? void 0 : _a4.thumbnailOverlayTimeStatusRenderer;
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.duration = data.lengthText ? new Text(data.lengthText) : (length_alt === null || length_alt === void 0 ? void 0 : length_alt.text) ? new Text(length_alt.text) : null;
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.badges = parser_default.parseArray(data.badges, MetadataBadge_default);
    this.metadata = new Text(data.metadata);
    this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
  }
};
__name(GridMovie, "GridMovie");
GridMovie.type = "GridMovie";
var GridMovie_default = GridMovie;

// dist/src/parser/classes/GridPlaylist.js
var GridPlaylist = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    this.id = data.playlistId;
    this.title = new Text(data.title);
    if (Reflect.has(data, "shortBylineText")) {
      this.author = new Author_default(data.shortBylineText, data.ownerBadges);
    }
    this.badges = parser_default.parseArray(data.ownerBadges);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.view_playlist = new Text(data.viewPlaylistText);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_renderer = parser_default.parseItem(data.thumbnailRenderer);
    this.sidebar_thumbnails = [].concat(...((_a4 = data.sidebarThumbnails) === null || _a4 === void 0 ? void 0 : _a4.map((thumbnail) => Thumbnail.fromResponse(thumbnail))) || []) || null;
    this.video_count = new Text(data.thumbnailText);
    this.video_count_short = new Text(data.videoCountShortText);
  }
};
__name(GridPlaylist, "GridPlaylist");
GridPlaylist.type = "GridPlaylist";
var GridPlaylist_default = GridPlaylist;

// dist/src/parser/classes/ShowCustomThumbnail.js
var ShowCustomThumbnail = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
};
__name(ShowCustomThumbnail, "ShowCustomThumbnail");
ShowCustomThumbnail.type = "ShowCustomThumbnail";
var ShowCustomThumbnail_default = ShowCustomThumbnail;

// dist/src/parser/classes/ThumbnailOverlayBottomPanel.js
var ThumbnailOverlayBottomPanel = class extends YTNode {
  constructor(data) {
    super();
    if (Reflect.has(data, "text")) {
      this.text = new Text(data.text);
    }
    if (Reflect.has(data, "icon") && Reflect.has(data.icon, "iconType")) {
      this.icon_type = data.icon.iconType;
    }
  }
};
__name(ThumbnailOverlayBottomPanel, "ThumbnailOverlayBottomPanel");
ThumbnailOverlayBottomPanel.type = "ThumbnailOverlayBottomPanel";
var ThumbnailOverlayBottomPanel_default = ThumbnailOverlayBottomPanel;

// dist/src/parser/classes/GridShow.js
var GridShow = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.thumbnail_renderer = parseItem(data.thumbnailRenderer, ShowCustomThumbnail_default);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.long_byline_text = new Text(data.longBylineText);
    this.thumbnail_overlays = parseArray(data.thumbnailOverlays, ThumbnailOverlayBottomPanel_default);
    this.author = new Author_default(data.shortBylineText, void 0);
  }
};
__name(GridShow, "GridShow");
GridShow.type = "GridShow";
var GridShow_default = GridShow;

// dist/src/parser/classes/GridVideo.js
var GridVideo = class extends YTNode {
  constructor(data) {
    var _a4, _b2;
    super();
    const length_alt = (_a4 = data.thumbnailOverlays.find((overlay) => overlay.hasOwnProperty("thumbnailOverlayTimeStatusRenderer"))) === null || _a4 === void 0 ? void 0 : _a4.thumbnailOverlayTimeStatusRenderer;
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
    this.rich_thumbnail = parser_default.parseItem(data.richThumbnail);
    this.published = new Text(data.publishedTimeText);
    this.duration = data.lengthText ? new Text(data.lengthText) : (length_alt === null || length_alt === void 0 ? void 0 : length_alt.text) ? new Text(length_alt.text) : null;
    this.author = data.shortBylineText && new Author_default(data.shortBylineText, data.ownerBadges);
    this.views = new Text(data.viewCountText);
    this.short_view_count = new Text(data.shortViewCountText);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.menu = parser_default.parseItem(data.menu, Menu_default);
    if (Reflect.has(data, "buttons")) {
      this.buttons = parser_default.parseArray(data.buttons);
    }
    if (Reflect.has(data, "upcomingEventData")) {
      this.upcoming = new Date(Number(`${data.upcomingEventData.startTime}000`));
      this.upcoming_text = new Text(data.upcomingEventData.upcomingEventText);
      this.is_reminder_set = !!((_b2 = data.upcomingEventData) === null || _b2 === void 0 ? void 0 : _b2.isReminderSet);
    }
  }
  get is_upcoming() {
    return Boolean(this.upcoming && this.upcoming > new Date());
  }
};
__name(GridVideo, "GridVideo");
GridVideo.type = "GridVideo";
var GridVideo_default = GridVideo;

// dist/src/parser/classes/GuideEntry.js
var GuideEntry = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.formattedTitle);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint || data.serviceEndpoint);
    if (Reflect.has(data, "icon") && Reflect.has(data.icon, "iconType")) {
      this.icon_type = data.icon.iconType;
    }
    if (Reflect.has(data, "thumbnail")) {
      this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    }
    if (Reflect.has(data, "badges")) {
      this.badges = data.badges;
    }
    this.is_primary = !!data.isPrimary;
  }
};
__name(GuideEntry, "GuideEntry");
GuideEntry.type = "GuideEntry";
var GuideEntry_default = GuideEntry;

// dist/src/parser/classes/GuideCollapsibleEntry.js
var GuideCollapsibleEntry = class extends YTNode {
  constructor(data) {
    super();
    this.expander_item = parseItem(data.expanderItem, GuideEntry_default);
    this.collapser_item = parseItem(data.collapserItem, GuideEntry_default);
    this.expandable_items = parseArray(data.expandableItems);
  }
};
__name(GuideCollapsibleEntry, "GuideCollapsibleEntry");
GuideCollapsibleEntry.type = "GuideCollapsibleEntry";
var GuideCollapsibleEntry_default = GuideCollapsibleEntry;

// dist/src/parser/classes/GuideCollapsibleSectionEntry.js
var GuideCollapsibleSectionEntry = class extends YTNode {
  constructor(data) {
    super();
    this.header_entry = parseItem(data.headerEntry);
    this.expander_icon = data.expanderIcon.iconType;
    this.collapser_icon = data.collapserIcon.iconType;
    this.section_items = parseArray(data.sectionItems);
  }
};
__name(GuideCollapsibleSectionEntry, "GuideCollapsibleSectionEntry");
GuideCollapsibleSectionEntry.type = "GuideCollapsibleSectionEntry";
var GuideCollapsibleSectionEntry_default = GuideCollapsibleSectionEntry;

// dist/src/parser/classes/GuideDownloadsEntry.js
var GuideDownloadsEntry = class extends GuideEntry_default {
  constructor(data) {
    super(data.entryRenderer.guideEntryRenderer);
    this.always_show = !!data.alwaysShow;
  }
};
__name(GuideDownloadsEntry, "GuideDownloadsEntry");
GuideDownloadsEntry.type = "GuideDownloadsEntry";
var GuideDownloadsEntry_default = GuideDownloadsEntry;

// dist/src/parser/classes/GuideSection.js
var GuideSection = class extends YTNode {
  constructor(data) {
    super();
    if (Reflect.has(data, "formattedTitle")) {
      this.title = new Text(data.formattedTitle);
    }
    this.items = parseArray(data.items);
  }
};
__name(GuideSection, "GuideSection");
GuideSection.type = "GuideSection";
var GuideSection_default = GuideSection;

// dist/src/parser/classes/GuideSubscriptionsSection.js
var GuideSubscriptionsSection = class extends GuideSection_default {
};
__name(GuideSubscriptionsSection, "GuideSubscriptionsSection");
GuideSubscriptionsSection.type = "GuideSubscriptionsSection";
var GuideSubscriptionsSection_default = GuideSubscriptionsSection;

// dist/src/parser/classes/HashtagHeader.js
var HashtagHeader = class extends YTNode {
  constructor(data) {
    super();
    this.hashtag = new Text(data.hashtag);
    this.hashtag_info = new Text(data.hashtagInfoText);
  }
};
__name(HashtagHeader, "HashtagHeader");
HashtagHeader.type = "HashtagHeader";
var HashtagHeader_default = HashtagHeader;

// dist/src/parser/classes/HashtagTile.js
var HashtagTile = class extends YTNode {
  constructor(data) {
    super();
    this.hashtag = new Text(data.hashtag);
    this.hashtag_info_text = new Text(data.hashtagInfoText);
    this.hashtag_thumbnail = Thumbnail.fromResponse(data.hashtagThumbnail);
    this.endpoint = new NavigationEndpoint_default(data.onTapCommand);
    this.hashtag_background_color = data.hashtagBackgroundColor;
    this.hashtag_video_count = new Text(data.hashtagVideoCount);
    this.hashtag_channel_count = new Text(data.hashtagChannelCount);
  }
};
__name(HashtagTile, "HashtagTile");
HashtagTile.type = "HashtagTile";
var HashtagTile_default = HashtagTile;

// dist/src/parser/classes/HeroPlaylistThumbnail.js
var HeroPlaylistThumbnail = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.on_tap_endpoint = new NavigationEndpoint_default(data.onTap);
  }
};
__name(HeroPlaylistThumbnail, "HeroPlaylistThumbnail");
HeroPlaylistThumbnail.type = "HeroPlaylistThumbnail";
var HeroPlaylistThumbnail_default = HeroPlaylistThumbnail;

// dist/src/parser/classes/HighlightsCarousel.js
var Panel = class extends YTNode {
  constructor(data) {
    super();
    if (data.thumbnail) {
      this.thumbnail = {
        image: data.thumbnail.image.sources,
        endpoint: new NavigationEndpoint_default(data.thumbnail.onTap),
        on_long_press_endpoint: new NavigationEndpoint_default(data.thumbnail.onLongPress),
        content_mode: data.thumbnail.contentMode,
        crop_options: data.thumbnail.cropOptions
      };
    }
    this.background_image = {
      image: data.backgroundImage.image.sources,
      gradient_image: data.backgroundImage.gradientImage.sources
    };
    this.strapline = data.strapline;
    this.title = data.title;
    this.description = data.description;
    this.cta = {
      icon_name: data.cta.iconName,
      title: data.cta.title,
      endpoint: new NavigationEndpoint_default(data.cta.onTap),
      accessibility_text: data.cta.accessibilityText,
      state: data.cta.state
    };
    this.text_on_tap_endpoint = new NavigationEndpoint_default(data.textOnTap);
  }
};
__name(Panel, "Panel");
Panel.type = "Panel";
var HighlightsCarousel = class extends YTNode {
  constructor(data) {
    super();
    this.panels = observe(data.highlightsCarousel.panels.map((el) => new Panel(el)));
  }
};
__name(HighlightsCarousel, "HighlightsCarousel");
HighlightsCarousel.type = "HighlightsCarousel";
var HighlightsCarousel_default = HighlightsCarousel;

// dist/src/parser/classes/SearchSuggestion.js
var SearchSuggestion = class extends YTNode {
  constructor(data) {
    super();
    this.suggestion = new Text(data.suggestion);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    if (Reflect.has(data, "icon")) {
      this.icon_type = data.icon.iconType;
    }
    if (Reflect.has(data, "serviceEndpoint")) {
      this.service_endpoint = new NavigationEndpoint_default(data.serviceEndpoint);
    }
  }
};
__name(SearchSuggestion, "SearchSuggestion");
SearchSuggestion.type = "SearchSuggestion";
var SearchSuggestion_default = SearchSuggestion;

// dist/src/parser/classes/HistorySuggestion.js
var HistorySuggestion = class extends SearchSuggestion_default {
  constructor(data) {
    super(data);
  }
};
__name(HistorySuggestion, "HistorySuggestion");
HistorySuggestion.type = "HistorySuggestion";
var HistorySuggestion_default = HistorySuggestion;

// dist/src/parser/classes/HorizontalList.js
var HorizontalList = class extends YTNode {
  constructor(data) {
    super();
    this.visible_item_count = data.visibleItemCount;
    this.items = parser_default.parseArray(data.items);
  }
  get contents() {
    return this.items;
  }
};
__name(HorizontalList, "HorizontalList");
HorizontalList.type = "HorizontalList";
var HorizontalList_default = HorizontalList;

// dist/src/parser/classes/HorizontalMovieList.js
var HorizontalMovieList = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parseArray(data.items);
    this.previous_button = parser_default.parseItem(data.previousButton, Button_default);
    this.next_button = parser_default.parseItem(data.nextButton, Button_default);
  }
  get contents() {
    return this.items;
  }
};
__name(HorizontalMovieList, "HorizontalMovieList");
HorizontalMovieList.type = "HorizontalMovieList";
var HorizontalMovieList_default = HorizontalMovieList;

// dist/src/parser/classes/IconLink.js
var IconLink = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    this.icon_type = (_a4 = data.icon) === null || _a4 === void 0 ? void 0 : _a4.iconType;
    if (Reflect.has(data, "tooltip")) {
      this.tooltip = new Text(data.tooltip).toString();
    }
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
  }
};
__name(IconLink, "IconLink");
IconLink.type = "IconLink";
var IconLink_default = IconLink;

// dist/src/parser/classes/IncludingResultsFor.js
var IncludingResultsFor = class extends YTNode {
  constructor(data) {
    super();
    this.including_results_for = new Text(data.includingResultsFor);
    this.corrected_query = new Text(data.correctedQuery);
    this.corrected_query_endpoint = new NavigationEndpoint_default(data.correctedQueryEndpoint);
    this.search_only_for = Reflect.has(data, "searchOnlyFor") ? new Text(data.searchOnlyFor) : void 0;
    this.original_query = Reflect.has(data, "originalQuery") ? new Text(data.originalQuery) : void 0;
    this.original_query_endpoint = Reflect.has(data, "originalQueryEndpoint") ? new NavigationEndpoint_default(data.originalQueryEndpoint) : void 0;
  }
};
__name(IncludingResultsFor, "IncludingResultsFor");
IncludingResultsFor.type = "IncludingResultsFor";
var IncludingResultsFor_default = IncludingResultsFor;

// dist/src/parser/classes/InfoPanelContent.js
var InfoPanelContent = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.source = new Text(data.source);
    this.paragraphs = data.paragraphs.map((p) => new Text(p));
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.source_endpoint = new NavigationEndpoint_default(data.sourceEndpoint);
    this.truncate_paragraphs = !!data.truncateParagraphs;
    this.background = data.background;
    if (Reflect.has(data, "inlineLinkIcon") && Reflect.has(data.inlineLinkIcon, "iconType")) {
      this.inline_link_icon_type = data.inlineLinkIcon.iconType;
    }
  }
};
__name(InfoPanelContent, "InfoPanelContent");
InfoPanelContent.type = "InfoPanelContent";
var InfoPanelContent_default = InfoPanelContent;

// dist/src/parser/classes/InfoPanelContainer.js
var InfoPanelContainer = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    this.title = new Text(data.title);
    this.menu = parser_default.parseItem(data.menu, Menu_default);
    this.content = parser_default.parseItem(data.content, InfoPanelContent_default);
    this.background = data.background;
    if (Reflect.has(data, "icon")) {
      this.icon_type = (_a4 = data.icon) === null || _a4 === void 0 ? void 0 : _a4.iconType;
    }
  }
};
__name(InfoPanelContainer, "InfoPanelContainer");
InfoPanelContainer.type = "InfoPanelContainer";
var InfoPanelContainer_default = InfoPanelContainer;

// dist/src/parser/classes/InteractiveTabbedHeader.js
var InteractiveTabbedHeader = class extends YTNode {
  constructor(data) {
    super();
    this.header_type = data.type;
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.metadata = new Text(data.metadata);
    this.badges = parser_default.parseArray(data.badges, MetadataBadge_default);
    this.box_art = Thumbnail.fromResponse(data.boxArt);
    this.banner = Thumbnail.fromResponse(data.banner);
    this.buttons = parser_default.parseArray(data.buttons, [SubscribeButton_default, Button_default]);
    this.auto_generated = new Text(data.autoGenerated);
  }
};
__name(InteractiveTabbedHeader, "InteractiveTabbedHeader");
InteractiveTabbedHeader.type = "InteractiveTabbedHeader";
var InteractiveTabbedHeader_default = InteractiveTabbedHeader;

// dist/src/parser/classes/ItemSectionHeader.js
var ItemSectionHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
  }
};
__name(ItemSectionHeader, "ItemSectionHeader");
ItemSectionHeader.type = "ItemSectionHeader";
var ItemSectionHeader_default = ItemSectionHeader;

// dist/src/parser/classes/ItemSectionTab.js
var ItemSectionTab = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.selected = !!data.selected;
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
  }
};
__name(ItemSectionTab, "ItemSectionTab");
ItemSectionTab.type = "Tab";
var ItemSectionTab_default = ItemSectionTab;

// dist/src/parser/classes/ItemSectionTabbedHeader.js
var ItemSectionTabbedHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.tabs = parser_default.parseArray(data.tabs, ItemSectionTab_default);
    if (Reflect.has(data, "endItems")) {
      this.end_items = parser_default.parseArray(data.endItems);
    }
  }
};
__name(ItemSectionTabbedHeader, "ItemSectionTabbedHeader");
ItemSectionTabbedHeader.type = "ItemSectionTabbedHeader";
var ItemSectionTabbedHeader_default = ItemSectionTabbedHeader;

// dist/src/parser/classes/ItemSection.js
var ItemSection = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c;
    super();
    this.header = parser_default.parseItem(data.header, [CommentsHeader_default, ItemSectionHeader_default, ItemSectionTabbedHeader_default]);
    this.contents = parser_default.parseArray(data.contents);
    if (data.targetId || data.sectionIdentifier) {
      this.target_id = data.target_id || data.sectionIdentifier;
    }
    if (data.continuations) {
      this.continuation = (_c = (_b2 = (_a4 = data.continuations) === null || _a4 === void 0 ? void 0 : _a4.at(0)) === null || _b2 === void 0 ? void 0 : _b2.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation;
    }
  }
};
__name(ItemSection, "ItemSection");
ItemSection.type = "ItemSection";
var ItemSection_default = ItemSection;

// dist/src/parser/classes/LikeButton.js
var LikeButton = class extends YTNode {
  constructor(data) {
    super();
    this.target = {
      video_id: data.target.videoId
    };
    this.like_status = data.likeStatus;
    this.likes_allowed = data.likesAllowed;
    if (Reflect.has(data, "serviceEndpoints")) {
      this.endpoints = data.serviceEndpoints.map((endpoint) => new NavigationEndpoint_default(endpoint));
    }
  }
};
__name(LikeButton, "LikeButton");
LikeButton.type = "LikeButton";
var LikeButton_default = LikeButton;

// dist/src/parser/classes/LiveChat.js
var LiveChat = class extends YTNode {
  constructor(data) {
    var _a4, _b2;
    super();
    this.header = parser_default.parseItem(data.header);
    this.initial_display_state = data.initialDisplayState;
    this.continuation = (_b2 = (_a4 = data.continuations[0]) === null || _a4 === void 0 ? void 0 : _a4.reloadContinuationData) === null || _b2 === void 0 ? void 0 : _b2.continuation;
    this.client_messages = {
      reconnect_message: new Text(data.clientMessages.reconnectMessage),
      unable_to_reconnect_message: new Text(data.clientMessages.unableToReconnectMessage),
      fatal_error: new Text(data.clientMessages.fatalError),
      reconnected_message: new Text(data.clientMessages.reconnectedMessage),
      generic_error: new Text(data.clientMessages.genericError)
    };
    this.is_replay = !!data.isReplay;
  }
};
__name(LiveChat, "LiveChat");
LiveChat.type = "LiveChat";
var LiveChat_default = LiveChat;

// dist/src/parser/classes/livechat/items/LiveChatBannerHeader.js
var LiveChatBannerHeader = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text(data.text);
    if (Reflect.has(data, "icon") && Reflect.has(data.icon, "iconType")) {
      this.icon_type = data.icon.iconType;
    }
    this.context_menu_button = parser_default.parseItem(data.contextMenuButton, Button_default);
  }
};
__name(LiveChatBannerHeader, "LiveChatBannerHeader");
LiveChatBannerHeader.type = "LiveChatBannerHeader";
var LiveChatBannerHeader_default = LiveChatBannerHeader;

// dist/src/parser/classes/livechat/items/LiveChatBanner.js
var LiveChatBanner = class extends YTNode {
  constructor(data) {
    super();
    this.header = parser_default.parseItem(data.header, LiveChatBannerHeader_default);
    this.contents = parser_default.parseItem(data.contents);
    this.action_id = data.actionId;
    this.viewer_is_creator = data.viewerIsCreator;
    this.target_id = data.targetId;
    this.is_stackable = data.isStackable;
    this.background_type = data.backgroundType;
  }
};
__name(LiveChatBanner, "LiveChatBanner");
LiveChatBanner.type = "LiveChatBanner";
var LiveChatBanner_default = LiveChatBanner;

// dist/src/parser/classes/livechat/AddBannerToLiveChatCommand.js
var AddBannerToLiveChatCommand = class extends YTNode {
  constructor(data) {
    super();
    this.banner = parser_default.parseItem(data.bannerRenderer, LiveChatBanner_default);
  }
};
__name(AddBannerToLiveChatCommand, "AddBannerToLiveChatCommand");
AddBannerToLiveChatCommand.type = "AddBannerToLiveChatCommand";
var AddBannerToLiveChatCommand_default = AddBannerToLiveChatCommand;

// dist/src/parser/classes/livechat/AddChatItemAction.js
var AddChatItemAction = class extends YTNode {
  constructor(data) {
    super();
    this.item = parser_default.parseItem(data.item);
    if (Reflect.has(data, "clientId")) {
      this.client_id = data.clientId;
    }
  }
};
__name(AddChatItemAction, "AddChatItemAction");
AddChatItemAction.type = "AddChatItemAction";
var AddChatItemAction_default = AddChatItemAction;

// dist/src/parser/classes/livechat/AddLiveChatTickerItemAction.js
var AddLiveChatTickerItemAction = class extends YTNode {
  constructor(data) {
    super();
    this.item = parser_default.parseItem(data.item);
    this.duration_sec = data.durationSec;
  }
};
__name(AddLiveChatTickerItemAction, "AddLiveChatTickerItemAction");
AddLiveChatTickerItemAction.type = "AddLiveChatTickerItemAction";
var AddLiveChatTickerItemAction_default = AddLiveChatTickerItemAction;

// dist/src/parser/classes/livechat/DimChatItemAction.js
var DimChatItemAction = class extends YTNode {
  constructor(data) {
    super();
    this.client_assigned_id = data.clientAssignedId;
  }
};
__name(DimChatItemAction, "DimChatItemAction");
DimChatItemAction.type = "DimChatItemAction";
var DimChatItemAction_default = DimChatItemAction;

// dist/src/parser/classes/livechat/items/LiveChatAutoModMessage.js
var LiveChatAutoModMessage = class extends YTNode {
  constructor(data) {
    super();
    this.menu_endpoint = new NavigationEndpoint_default(data.contextMenuEndpoint);
    this.moderation_buttons = parser_default.parseArray(data.moderationButtons, Button_default);
    this.auto_moderated_item = parser_default.parseItem(data.autoModeratedItem);
    this.header_text = new Text(data.headerText);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
    this.id = data.id;
  }
};
__name(LiveChatAutoModMessage, "LiveChatAutoModMessage");
LiveChatAutoModMessage.type = "LiveChatAutoModMessage";
var LiveChatAutoModMessage_default = LiveChatAutoModMessage;

// dist/src/parser/classes/livechat/items/LiveChatBannerPoll.js
var LiveChatBannerPoll = class extends YTNode {
  constructor(data) {
    super();
    this.poll_question = new Text(data.pollQuestion);
    this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
    this.choices = data.pollChoices.map((choice) => ({
      option_id: choice.pollOptionId,
      text: new Text(choice.text).toString()
    }));
    this.collapsed_state_entity_key = data.collapsedStateEntityKey;
    this.live_chat_poll_state_entity_key = data.liveChatPollStateEntityKey;
    this.context_menu_button = parser_default.parseItem(data.contextMenuButton, Button_default);
  }
};
__name(LiveChatBannerPoll, "LiveChatBannerPoll");
LiveChatBannerPoll.type = "LiveChatBannerPoll";
var LiveChatBannerPoll_default = LiveChatBannerPoll;

// dist/src/parser/classes/livechat/items/LiveChatMembershipItem.js
var LiveChatMembershipItem = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.id;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
    this.header_subtext = new Text(data.headerSubtext);
    this.author = new Author_default(data.authorName, data.authorBadges, data.authorPhoto, data.authorExternalChannelId);
    this.menu_endpoint = new NavigationEndpoint_default(data.contextMenuEndpoint);
  }
};
__name(LiveChatMembershipItem, "LiveChatMembershipItem");
LiveChatMembershipItem.type = "LiveChatMembershipItem";
var LiveChatMembershipItem_default = LiveChatMembershipItem;

// dist/src/parser/classes/livechat/items/LiveChatPaidMessage.js
var LiveChatPaidMessage = class extends YTNode {
  constructor(data) {
    super();
    this.message = new Text(data.message);
    this.author = new Author_default(data.authorName, data.authorBadges, data.authorPhoto, data.authorExternalChannelId);
    this.header_background_color = data.headerBackgroundColor;
    this.header_text_color = data.headerTextColor;
    this.body_background_color = data.bodyBackgroundColor;
    this.body_text_color = data.bodyTextColor;
    this.purchase_amount = new Text(data.purchaseAmountText).toString();
    this.menu_endpoint = new NavigationEndpoint_default(data.contextMenuEndpoint);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
    this.timestamp_text = new Text(data.timestampText).toString();
    this.id = data.id;
  }
};
__name(LiveChatPaidMessage, "LiveChatPaidMessage");
LiveChatPaidMessage.type = "LiveChatPaidMessage";
var LiveChatPaidMessage_default = LiveChatPaidMessage;

// dist/src/parser/classes/livechat/items/LiveChatPaidSticker.js
var LiveChatPaidSticker = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.id;
    this.author = new Author_default(data.authorName, data.authorBadges, data.authorPhoto, data.authorExternalChannelId);
    this.money_chip_background_color = data.moneyChipBackgroundColor;
    this.money_chip_text_color = data.moneyChipTextColor;
    this.background_color = data.backgroundColor;
    this.author_name_text_color = data.authorNameTextColor;
    this.sticker = Thumbnail.fromResponse(data.sticker);
    this.purchase_amount = new Text(data.purchaseAmountText).toString();
    this.menu_endpoint = new NavigationEndpoint_default(data.contextMenuEndpoint);
    this.context_menu = this.menu_endpoint;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
  }
};
__name(LiveChatPaidSticker, "LiveChatPaidSticker");
LiveChatPaidSticker.type = "LiveChatPaidSticker";
var LiveChatPaidSticker_default = LiveChatPaidSticker;

// dist/src/parser/classes/livechat/items/LiveChatPlaceholderItem.js
var LiveChatPlaceholderItem = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.id;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
  }
};
__name(LiveChatPlaceholderItem, "LiveChatPlaceholderItem");
LiveChatPlaceholderItem.type = "LiveChatPlaceholderItem";
var LiveChatPlaceholderItem_default = LiveChatPlaceholderItem;

// dist/src/parser/classes/livechat/items/LiveChatProductItem.js
var LiveChatProductItem = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    this.accessibility_title = data.accessibilityTitle;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.price = data.price;
    this.vendor_name = data.vendorName;
    this.from_vendor_text = data.fromVendorText;
    this.information_button = parser_default.parseItem(data.informationButton);
    this.endpoint = new NavigationEndpoint_default(data.onClickCommand);
    this.creator_message = data.creatorMessage;
    this.creator_name = data.creatorName;
    this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
    this.information_dialog = parser_default.parseItem(data.informationDialog);
    this.is_verified = data.isVerified;
    this.creator_custom_message = new Text(data.creatorCustomMessage);
  }
};
__name(LiveChatProductItem, "LiveChatProductItem");
LiveChatProductItem.type = "LiveChatProductItem";
var LiveChatProductItem_default = LiveChatProductItem;

// dist/src/parser/classes/livechat/items/LiveChatRestrictedParticipation.js
var LiveChatRestrictedParticipation = class extends YTNode {
  constructor(data) {
    super();
    this.message = new Text(data.message);
    if (Reflect.has(data, "icon") && Reflect.has(data.icon, "iconType")) {
      this.icon_type = data.icon.iconType;
    }
  }
};
__name(LiveChatRestrictedParticipation, "LiveChatRestrictedParticipation");
LiveChatRestrictedParticipation.type = "LiveChatRestrictedParticipation";
var LiveChatRestrictedParticipation_default = LiveChatRestrictedParticipation;

// dist/src/parser/classes/livechat/items/LiveChatTextMessage.js
var LiveChatMessageBase = class extends YTNode {
  constructor(data) {
    super();
    this.message = new Text(data.message);
    this.inline_action_buttons = parser_default.parseArray(data.inlineActionButtons, Button_default);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1e3);
    this.id = data.id;
  }
};
__name(LiveChatMessageBase, "LiveChatMessageBase");
LiveChatMessageBase.type = "LiveChatMessageBase";
var LiveChatTextMessage = class extends LiveChatMessageBase {
  constructor(data) {
    super(data);
    this.author = new Author_default(data.authorName, data.authorBadges, data.authorPhoto, data.authorExternalChannelId);
    this.menu_endpoint = new NavigationEndpoint_default(data.contextMenuEndpoint);
  }
};
__name(LiveChatTextMessage, "LiveChatTextMessage");
LiveChatTextMessage.type = "LiveChatTextMessage";
var LiveChatTextMessage_default = LiveChatTextMessage;

// dist/src/parser/classes/livechat/items/LiveChatTickerPaidMessageItem.js
var LiveChatTickerPaidMessageItem = class extends YTNode {
  constructor(data) {
    var _a4, _b2;
    super();
    this.author = new Author_default(data.authorName, data.authorBadges, data.authorPhoto, data.authorExternalChannelId);
    this.amount = new Text(data.amount);
    this.duration_sec = data.durationSec;
    this.full_duration_sec = data.fullDurationSec;
    this.show_item = parser_default.parseItem((_b2 = (_a4 = data.showItemEndpoint) === null || _a4 === void 0 ? void 0 : _a4.showLiveChatItemEndpoint) === null || _b2 === void 0 ? void 0 : _b2.renderer);
    this.show_item_endpoint = new NavigationEndpoint_default(data.showItemEndpoint);
    this.id = data.id;
  }
};
__name(LiveChatTickerPaidMessageItem, "LiveChatTickerPaidMessageItem");
LiveChatTickerPaidMessageItem.type = "LiveChatTickerPaidMessageItem";
var LiveChatTickerPaidMessageItem_default = LiveChatTickerPaidMessageItem;

// dist/src/parser/classes/livechat/items/LiveChatTickerPaidStickerItem.js
var LiveChatTickerPaidStickerItem = class extends LiveChatTickerPaidMessageItem_default {
};
__name(LiveChatTickerPaidStickerItem, "LiveChatTickerPaidStickerItem");
LiveChatTickerPaidStickerItem.type = "LiveChatTickerPaidStickerItem";
var LiveChatTickerPaidStickerItem_default = LiveChatTickerPaidStickerItem;

// dist/src/parser/classes/livechat/items/LiveChatTickerSponsorItem.js
var LiveChatTickerSponsorItem = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.id;
    this.detail = new Text(data.detailText);
    this.author = new Author_default(data.authorName, data.authorBadges, data.sponsorPhoto, data.authorExternalChannelId);
    this.duration_sec = data.durationSec;
  }
};
__name(LiveChatTickerSponsorItem, "LiveChatTickerSponsorItem");
LiveChatTickerSponsorItem.type = "LiveChatTickerSponsorItem";
var LiveChatTickerSponsorItem_default = LiveChatTickerSponsorItem;

// dist/src/parser/classes/livechat/items/LiveChatViewerEngagementMessage.js
var LiveChatViewerEngagementMessage = class extends LiveChatMessageBase {
  constructor(data) {
    super(data);
    if (Reflect.has(data, "icon") && Reflect.has(data.icon, "iconType")) {
      this.icon_type = data.icon.iconType;
    }
    this.action_button = parser_default.parseItem(data.actionButton);
  }
};
__name(LiveChatViewerEngagementMessage, "LiveChatViewerEngagementMessage");
LiveChatViewerEngagementMessage.type = "LiveChatViewerEngagementMessage";
var LiveChatViewerEngagementMessage_default = LiveChatViewerEngagementMessage;

// dist/src/parser/classes/livechat/items/PollHeader.js
var PollHeader = class extends YTNode {
  constructor(data) {
    super();
    this.poll_question = new Text(data.pollQuestion);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.metadata = new Text(data.metadataText);
    this.live_chat_poll_type = data.liveChatPollType;
    this.context_menu_button = parser_default.parseItem(data.contextMenuButton, Button_default);
  }
};
__name(PollHeader, "PollHeader");
PollHeader.type = "PollHeader";
var PollHeader_default = PollHeader;

// dist/src/parser/classes/livechat/LiveChatActionPanel.js
var LiveChatActionPanel = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.id;
    this.contents = parser_default.parse(data.contents);
    this.target_id = data.targetId;
  }
};
__name(LiveChatActionPanel, "LiveChatActionPanel");
LiveChatActionPanel.type = "LiveChatActionPanel";
var LiveChatActionPanel_default = LiveChatActionPanel;

// dist/src/parser/classes/livechat/MarkChatItemAsDeletedAction.js
var MarkChatItemAsDeletedAction = class extends YTNode {
  constructor(data) {
    super();
    this.deleted_state_message = new Text(data.deletedStateMessage);
    this.target_item_id = data.targetItemId;
  }
};
__name(MarkChatItemAsDeletedAction, "MarkChatItemAsDeletedAction");
MarkChatItemAsDeletedAction.type = "MarkChatItemAsDeletedAction";
var MarkChatItemAsDeletedAction_default = MarkChatItemAsDeletedAction;

// dist/src/parser/classes/livechat/MarkChatItemsByAuthorAsDeletedAction.js
var MarkChatItemsByAuthorAsDeletedAction = class extends YTNode {
  constructor(data) {
    super();
    this.deleted_state_message = new Text(data.deletedStateMessage);
    this.external_channel_id = data.externalChannelId;
  }
};
__name(MarkChatItemsByAuthorAsDeletedAction, "MarkChatItemsByAuthorAsDeletedAction");
MarkChatItemsByAuthorAsDeletedAction.type = "MarkChatItemsByAuthorAsDeletedAction";
var MarkChatItemsByAuthorAsDeletedAction_default = MarkChatItemsByAuthorAsDeletedAction;

// dist/src/parser/classes/livechat/RemoveBannerForLiveChatCommand.js
var RemoveBannerForLiveChatCommand = class extends YTNode {
  constructor(data) {
    super();
    this.target_action_id = data.targetActionId;
  }
};
__name(RemoveBannerForLiveChatCommand, "RemoveBannerForLiveChatCommand");
RemoveBannerForLiveChatCommand.type = "RemoveBannerForLiveChatCommand";
var RemoveBannerForLiveChatCommand_default = RemoveBannerForLiveChatCommand;

// dist/src/parser/classes/livechat/RemoveChatItemAction.js
var RemoveChatItemAction = class extends YTNode {
  constructor(data) {
    super();
    this.target_item_id = data.targetItemId;
  }
};
__name(RemoveChatItemAction, "RemoveChatItemAction");
RemoveChatItemAction.type = "RemoveChatItemAction";
var RemoveChatItemAction_default = RemoveChatItemAction;

// dist/src/parser/classes/livechat/RemoveChatItemByAuthorAction.js
var RemoveChatItemByAuthorAction = class extends YTNode {
  constructor(data) {
    super();
    this.external_channel_id = data.externalChannelId;
  }
};
__name(RemoveChatItemByAuthorAction, "RemoveChatItemByAuthorAction");
RemoveChatItemByAuthorAction.type = "RemoveChatItemByAuthorAction";
var RemoveChatItemByAuthorAction_default = RemoveChatItemByAuthorAction;

// dist/src/parser/classes/livechat/ReplaceChatItemAction.js
var ReplaceChatItemAction = class extends YTNode {
  constructor(data) {
    super();
    this.target_item_id = data.targetItemId;
    this.replacement_item = parser_default.parseItem(data.replacementItem);
  }
};
__name(ReplaceChatItemAction, "ReplaceChatItemAction");
ReplaceChatItemAction.type = "ReplaceChatItemAction";
var ReplaceChatItemAction_default = ReplaceChatItemAction;

// dist/src/parser/classes/livechat/ReplayChatItemAction.js
var ReplayChatItemAction = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    this.actions = parser_default.parseArray((_a4 = data.actions) === null || _a4 === void 0 ? void 0 : _a4.map((action) => {
      delete action.clickTrackingParams;
      return action;
    }));
    this.video_offset_time_msec = data.videoOffsetTimeMsec;
  }
};
__name(ReplayChatItemAction, "ReplayChatItemAction");
ReplayChatItemAction.type = "ReplayChatItemAction";
var ReplayChatItemAction_default = ReplayChatItemAction;

// dist/src/parser/classes/livechat/ShowLiveChatActionPanelAction.js
var ShowLiveChatActionPanelAction = class extends YTNode {
  constructor(data) {
    super();
    this.panel_to_show = parser_default.parseItem(data.panelToShow, LiveChatActionPanel_default);
  }
};
__name(ShowLiveChatActionPanelAction, "ShowLiveChatActionPanelAction");
ShowLiveChatActionPanelAction.type = "ShowLiveChatActionPanelAction";
var ShowLiveChatActionPanelAction_default = ShowLiveChatActionPanelAction;

// dist/src/parser/classes/livechat/ShowLiveChatDialogAction.js
var ShowLiveChatDialogAction = class extends YTNode {
  constructor(data) {
    super();
    this.dialog = parser_default.parseItem(data.dialog);
  }
};
__name(ShowLiveChatDialogAction, "ShowLiveChatDialogAction");
ShowLiveChatDialogAction.type = "ShowLiveChatDialogAction";
var ShowLiveChatDialogAction_default = ShowLiveChatDialogAction;

// dist/src/parser/classes/livechat/ShowLiveChatTooltipCommand.js
var ShowLiveChatTooltipCommand = class extends YTNode {
  constructor(data) {
    super();
    this.tooltip = parser_default.parseItem(data.tooltip);
  }
};
__name(ShowLiveChatTooltipCommand, "ShowLiveChatTooltipCommand");
ShowLiveChatTooltipCommand.type = "ShowLiveChatTooltipCommand";
var ShowLiveChatTooltipCommand_default = ShowLiveChatTooltipCommand;

// dist/src/parser/classes/livechat/UpdateDateTextAction.js
var UpdateDateTextAction = class extends YTNode {
  constructor(data) {
    super();
    this.date_text = new Text(data.dateText).toString();
  }
};
__name(UpdateDateTextAction, "UpdateDateTextAction");
UpdateDateTextAction.type = "UpdateDateTextAction";
var UpdateDateTextAction_default = UpdateDateTextAction;

// dist/src/parser/classes/livechat/UpdateDescriptionAction.js
var UpdateDescriptionAction = class extends YTNode {
  constructor(data) {
    super();
    this.description = new Text(data.description);
  }
};
__name(UpdateDescriptionAction, "UpdateDescriptionAction");
UpdateDescriptionAction.type = "UpdateDescriptionAction";
var UpdateDescriptionAction_default = UpdateDescriptionAction;

// dist/src/parser/classes/livechat/UpdateLiveChatPollAction.js
var UpdateLiveChatPollAction = class extends YTNode {
  constructor(data) {
    super();
    this.poll_to_update = parser_default.parseItem(data.pollToUpdate);
  }
};
__name(UpdateLiveChatPollAction, "UpdateLiveChatPollAction");
UpdateLiveChatPollAction.type = "UpdateLiveChatPollAction";
var UpdateLiveChatPollAction_default = UpdateLiveChatPollAction;

// dist/src/parser/classes/livechat/UpdateTitleAction.js
var UpdateTitleAction = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
  }
};
__name(UpdateTitleAction, "UpdateTitleAction");
UpdateTitleAction.type = "UpdateTitleAction";
var UpdateTitleAction_default = UpdateTitleAction;

// dist/src/parser/classes/livechat/UpdateToggleButtonTextAction.js
var UpdateToggleButtonTextAction = class extends YTNode {
  constructor(data) {
    super();
    this.default_text = new Text(data.defaultText).toString();
    this.toggled_text = new Text(data.toggledText).toString();
    this.button_id = data.buttonId;
  }
};
__name(UpdateToggleButtonTextAction, "UpdateToggleButtonTextAction");
UpdateToggleButtonTextAction.type = "UpdateToggleButtonTextAction";
var UpdateToggleButtonTextAction_default = UpdateToggleButtonTextAction;

// dist/src/parser/classes/livechat/UpdateViewershipAction.js
var UpdateViewershipAction = class extends YTNode {
  constructor(data) {
    super();
    const view_count_renderer = data.viewCount.videoViewCountRenderer;
    this.view_count = new Text(view_count_renderer.viewCount);
    this.extra_short_view_count = new Text(view_count_renderer.extraShortViewCount);
    this.is_live = view_count_renderer.isLive;
  }
};
__name(UpdateViewershipAction, "UpdateViewershipAction");
UpdateViewershipAction.type = "UpdateViewershipAction";
var UpdateViewershipAction_default = UpdateViewershipAction;

// dist/src/parser/classes/LiveChatAuthorBadge.js
var LiveChatAuthorBadge = class extends MetadataBadge_default {
  constructor(data) {
    super(data);
    this.custom_thumbnail = Thumbnail.fromResponse(data.customThumbnail);
  }
};
__name(LiveChatAuthorBadge, "LiveChatAuthorBadge");
LiveChatAuthorBadge.type = "LiveChatAuthorBadge";
var LiveChatAuthorBadge_default = LiveChatAuthorBadge;

// dist/src/parser/classes/LiveChatDialog.js
var LiveChatDialog = class extends YTNode {
  constructor(data) {
    super();
    this.confirm_button = parser_default.parseItem(data.confirmButton, Button_default);
    this.dialog_messages = data.dialogMessages.map((el) => new Text(el));
  }
};
__name(LiveChatDialog, "LiveChatDialog");
LiveChatDialog.type = "LiveChatDialog";
var LiveChatDialog_default = LiveChatDialog;

// dist/src/parser/classes/LiveChatHeader.js
var LiveChatHeader = class extends YTNode {
  constructor(data) {
    super();
    this.overflow_menu = parser_default.parseItem(data.overflowMenu, Menu_default);
    this.collapse_button = parser_default.parseItem(data.collapseButton, Button_default);
    this.view_selector = parser_default.parseItem(data.viewSelector, SortFilterSubMenu_default);
  }
};
__name(LiveChatHeader, "LiveChatHeader");
LiveChatHeader.type = "LiveChatHeader";
var LiveChatHeader_default = LiveChatHeader;

// dist/src/parser/classes/LiveChatItemList.js
var LiveChatItemList = class extends YTNode {
  constructor(data) {
    super();
    this.max_items_to_display = data.maxItemsToDisplay;
    this.more_comments_below_button = parser_default.parseItem(data.moreCommentsBelowButton, Button_default);
  }
};
__name(LiveChatItemList, "LiveChatItemList");
LiveChatItemList.type = "LiveChatItemList";
var LiveChatItemList_default = LiveChatItemList;

// dist/src/parser/classes/LiveChatMessageInput.js
var LiveChatMessageInput = class extends YTNode {
  constructor(data) {
    super();
    this.author_name = new Text(data.authorName);
    this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
    this.send_button = parser_default.parseItem(data.sendButton, Button_default);
    this.target_id = data.targetId;
  }
};
__name(LiveChatMessageInput, "LiveChatMessageInput");
LiveChatMessageInput.type = "LiveChatMessageInput";
var LiveChatMessageInput_default = LiveChatMessageInput;

// dist/src/parser/classes/LiveChatParticipant.js
var LiveChatParticipant = class extends YTNode {
  constructor(data) {
    super();
    this.name = new Text(data.authorName);
    this.photo = Thumbnail.fromResponse(data.authorPhoto);
    this.badges = parser_default.parseArray(data.authorBadges);
  }
};
__name(LiveChatParticipant, "LiveChatParticipant");
LiveChatParticipant.type = "LiveChatParticipant";
var LiveChatParticipant_default = LiveChatParticipant;

// dist/src/parser/classes/LiveChatParticipantsList.js
var LiveChatParticipantsList = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.participants = parser_default.parseArray(data.participants, LiveChatParticipant_default);
  }
};
__name(LiveChatParticipantsList, "LiveChatParticipantsList");
LiveChatParticipantsList.type = "LiveChatParticipantsList";
var LiveChatParticipantsList_default = LiveChatParticipantsList;

// dist/src/parser/classes/menus/MenuNavigationItem.js
var MenuNavigationItem = class extends Button_default {
  constructor(data) {
    super(data);
  }
};
__name(MenuNavigationItem, "MenuNavigationItem");
MenuNavigationItem.type = "MenuNavigationItem";
var MenuNavigationItem_default = MenuNavigationItem;

// dist/src/parser/classes/menus/MenuServiceItem.js
var MenuServiceItem = class extends Button_default {
  constructor(data) {
    super(data);
  }
};
__name(MenuServiceItem, "MenuServiceItem");
MenuServiceItem.type = "MenuServiceItem";
var MenuServiceItem_default = MenuServiceItem;

// dist/src/parser/classes/menus/MenuServiceItemDownload.js
var MenuServiceItemDownload = class extends YTNode {
  constructor(data) {
    super();
    this.has_separator = !!data.hasSeparator;
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint || data.serviceEndpoint);
  }
};
__name(MenuServiceItemDownload, "MenuServiceItemDownload");
MenuServiceItemDownload.type = "MenuServiceItemDownload";
var MenuServiceItemDownload_default = MenuServiceItemDownload;

// dist/src/parser/classes/menus/MultiPageMenu.js
var MultiPageMenu = class extends YTNode {
  constructor(data) {
    super();
    this.header = parser_default.parse(data.header);
    this.sections = parser_default.parse(data.sections);
    this.style = data.style;
  }
};
__name(MultiPageMenu, "MultiPageMenu");
MultiPageMenu.type = "MultiPageMenu";
var MultiPageMenu_default = MultiPageMenu;

// dist/src/parser/classes/menus/MultiPageMenuNotificationSection.js
var MultiPageMenuNotificationSection = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parse(data.items);
  }
  get contents() {
    return this.items;
  }
};
__name(MultiPageMenuNotificationSection, "MultiPageMenuNotificationSection");
MultiPageMenuNotificationSection.type = "MultiPageMenuNotificationSection";
var MultiPageMenuNotificationSection_default = MultiPageMenuNotificationSection;

// dist/src/parser/classes/menus/MusicMenuItemDivider.js
var MusicMenuItemDivider = class extends YTNode {
  constructor(_data) {
    super();
  }
};
__name(MusicMenuItemDivider, "MusicMenuItemDivider");
MusicMenuItemDivider.type = "MusicMenuItemDivider";
var MusicMenuItemDivider_default = MusicMenuItemDivider;

// dist/src/parser/classes/menus/MusicMultiSelectMenu.js
var MusicMultiSelectMenu = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    if (Reflect.has(data, "title") && Reflect.has(data.title, "musicMenuTitleRenderer")) {
      this.title = new Text((_a4 = data.title.musicMenuTitleRenderer) === null || _a4 === void 0 ? void 0 : _a4.primaryText);
    }
    this.options = parser_default.parseArray(data.options, [MusicMultiSelectMenuItem_default, MusicMenuItemDivider_default]);
  }
};
__name(MusicMultiSelectMenu, "MusicMultiSelectMenu");
MusicMultiSelectMenu.type = "MusicMultiSelectMenu";
var MusicMultiSelectMenu_default = MusicMultiSelectMenu;

// dist/src/parser/classes/menus/SimpleMenuHeader.js
var SimpleMenuHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.buttons = parser_default.parse(data.buttons);
  }
};
__name(SimpleMenuHeader, "SimpleMenuHeader");
SimpleMenuHeader.type = "SimpleMenuHeader";
var SimpleMenuHeader_default = SimpleMenuHeader;

// dist/src/parser/classes/MerchandiseItem.js
var MerchandiseItem = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    this.description = data.description;
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.price = data.price;
    this.vendor_name = data.vendorName;
    this.button_text = data.buttonText;
    this.button_accessibility_text = data.buttonAccessibilityText;
    this.from_vendor_text = data.fromVendorText;
    this.additional_fees_text = data.additionalFeesText;
    this.region_format = data.regionFormat;
    this.endpoint = new NavigationEndpoint_default(data.buttonCommand);
  }
};
__name(MerchandiseItem, "MerchandiseItem");
MerchandiseItem.type = "MerchandiseItem";
var MerchandiseItem_default = MerchandiseItem;

// dist/src/parser/classes/MerchandiseShelf.js
var MerchandiseShelf = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    this.menu = parser_default.parseItem(data.actionButton);
    this.items = parser_default.parseArray(data.items);
  }
  get contents() {
    return this.items;
  }
};
__name(MerchandiseShelf, "MerchandiseShelf");
MerchandiseShelf.type = "MerchandiseShelf";
var MerchandiseShelf_default = MerchandiseShelf;

// dist/src/parser/classes/MetadataRow.js
var MetadataRow = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.contents = data.contents.map((content) => new Text(content));
  }
};
__name(MetadataRow, "MetadataRow");
MetadataRow.type = "MetadataRow";
var MetadataRow_default = MetadataRow;

// dist/src/parser/classes/MetadataRowContainer.js
var MetadataRowContainer = class extends YTNode {
  constructor(data) {
    super();
    this.rows = parser_default.parseArray(data.rows);
    this.collapsed_item_count = data.collapsedItemCount;
  }
};
__name(MetadataRowContainer, "MetadataRowContainer");
MetadataRowContainer.type = "MetadataRowContainer";
var MetadataRowContainer_default = MetadataRowContainer;

// dist/src/parser/classes/MetadataRowHeader.js
var MetadataRowHeader = class extends YTNode {
  constructor(data) {
    super();
    this.content = new Text(data.content);
    this.has_divider_line = data.hasDividerLine;
  }
};
__name(MetadataRowHeader, "MetadataRowHeader");
MetadataRowHeader.type = "MetadataRowHeader";
var MetadataRowHeader_default = MetadataRowHeader;

// dist/src/parser/classes/MetadataScreen.js
var MetadataScreen = class extends YTNode {
  constructor(data) {
    super();
    this.section_list = parser_default.parseItem(data);
  }
};
__name(MetadataScreen, "MetadataScreen");
MetadataScreen.type = "MetadataScreen";
var MetadataScreen_default = MetadataScreen;

// dist/src/parser/classes/MicroformatData.js
var MicroformatData = class extends YTNode {
  constructor(data) {
    super();
    this.url_canonical = data.urlCanonical;
    this.title = data.title;
    this.description = data.description;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.site_name = data.siteName;
    this.app_name = data.appName;
    this.android_package = data.androidPackage;
    this.ios_app_store_id = data.iosAppStoreId;
    this.ios_app_arguments = data.iosAppArguments;
    this.og_type = data.ogType;
    this.url_applinks_web = data.urlApplinksWeb;
    this.url_applinks_ios = data.urlApplinksIos;
    this.url_applinks_android = data.urlApplinksAndroid;
    this.url_twitter_ios = data.urlTwitterIos;
    this.url_twitter_android = data.urlTwitterAndroid;
    this.twitter_card_type = data.twitterCardType;
    this.twitter_site_handle = data.twitterSiteHandle;
    this.schema_dot_org_type = data.schemaDotOrgType;
    this.noindex = data.noindex;
    this.is_unlisted = data.unlisted;
    this.is_family_safe = data.familySafe;
    this.tags = data.tags;
    this.available_countries = data.availableCountries;
  }
};
__name(MicroformatData, "MicroformatData");
MicroformatData.type = "MicroformatData";
var MicroformatData_default = MicroformatData;

// dist/src/parser/classes/Mix.js
var Mix = class extends Playlist_default {
  constructor(data) {
    super(data);
  }
};
__name(Mix, "Mix");
Mix.type = "Mix";
var Mix_default = Mix;

// dist/src/parser/classes/Movie.js
var Movie = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c;
    super();
    const overlay_time_status = ((_a4 = data.thumbnailOverlays.find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)) === null || _a4 === void 0 ? void 0 : _a4.thumbnailOverlayTimeStatusRenderer.text) || "N/A";
    this.id = data.videoId;
    this.title = new Text(data.title);
    if (Reflect.has(data, "descriptionSnippet")) {
      this.description_snippet = new Text(data.descriptionSnippet);
    }
    this.top_metadata_items = new Text(data.topMetadataItems);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
    this.author = new Author_default(data.longBylineText, data.ownerBadges, (_c = (_b2 = data.channelThumbnailSupportedRenderers) === null || _b2 === void 0 ? void 0 : _b2.channelThumbnailWithLinkRenderer) === null || _c === void 0 ? void 0 : _c.thumbnail);
    this.duration = {
      text: data.lengthText ? new Text(data.lengthText).toString() : new Text(overlay_time_status).toString(),
      seconds: timeToSeconds(data.lengthText ? new Text(data.lengthText).toString() : new Text(overlay_time_status).toString())
    };
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.badges = parser_default.parseArray(data.badges);
    this.use_vertical_poster = data.useVerticalPoster;
    this.show_action_menu = data.showActionMenu;
    this.menu = parser_default.parseItem(data.menu, Menu_default);
  }
};
__name(Movie, "Movie");
Movie.type = "Movie";
var Movie_default = Movie;

// dist/src/parser/classes/MovingThumbnail.js
var MovingThumbnail = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    return (_a4 = data.movingThumbnailDetails) === null || _a4 === void 0 ? void 0 : _a4.thumbnails.map((thumbnail) => new Thumbnail(thumbnail)).sort((a, b) => b.width - a.width);
  }
};
__name(MovingThumbnail, "MovingThumbnail");
MovingThumbnail.type = "MovingThumbnail";
var MovingThumbnail_default = MovingThumbnail;

// dist/src/parser/classes/MusicCardShelfHeaderBasic.js
var MusicCardShelfHeaderBasic = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
  }
};
__name(MusicCardShelfHeaderBasic, "MusicCardShelfHeaderBasic");
MusicCardShelfHeaderBasic.type = "MusicCardShelfHeaderBasic";
var MusicCardShelfHeaderBasic_default = MusicCardShelfHeaderBasic;

// dist/src/parser/classes/MusicInlineBadge.js
var MusicInlineBadge = class extends YTNode {
  constructor(data) {
    super();
    this.icon_type = data.icon.iconType;
    this.label = data.accessibilityData.accessibilityData.label;
  }
};
__name(MusicInlineBadge, "MusicInlineBadge");
MusicInlineBadge.type = "MusicInlineBadge";
var MusicInlineBadge_default = MusicInlineBadge;

// dist/src/parser/classes/MusicPlayButton.js
var MusicPlayButton = class extends YTNode {
  constructor(data) {
    var _a4, _b2;
    super();
    this.endpoint = new NavigationEndpoint_default(data.playNavigationEndpoint);
    this.play_icon_type = data.playIcon.iconType;
    this.pause_icon_type = data.pauseIcon.iconType;
    if (Reflect.has(data, "accessibilityPlayData")) {
      this.play_label = (_a4 = data.accessibilityPlayData.accessibilityData) === null || _a4 === void 0 ? void 0 : _a4.label;
    }
    if (Reflect.has(data, "accessibilityPauseData")) {
      this.pause_label = (_b2 = data.accessibilityPauseData.accessibilityData) === null || _b2 === void 0 ? void 0 : _b2.label;
    }
    this.icon_color = data.iconColor;
  }
};
__name(MusicPlayButton, "MusicPlayButton");
MusicPlayButton.type = "MusicPlayButton";
var MusicPlayButton_default = MusicPlayButton;

// dist/src/parser/classes/MusicItemThumbnailOverlay.js
var MusicItemThumbnailOverlay = class extends YTNode {
  constructor(data) {
    super();
    this.content = parser_default.parseItem(data.content, MusicPlayButton_default);
    this.content_position = data.contentPosition;
    this.display_style = data.displayStyle;
  }
};
__name(MusicItemThumbnailOverlay, "MusicItemThumbnailOverlay");
MusicItemThumbnailOverlay.type = "MusicItemThumbnailOverlay";
var MusicItemThumbnailOverlay_default = MusicItemThumbnailOverlay;

// dist/src/parser/classes/MusicThumbnail.js
var MusicThumbnail = class extends YTNode {
  constructor(data) {
    super();
    this.contents = Thumbnail.fromResponse(data.thumbnail);
  }
};
__name(MusicThumbnail, "MusicThumbnail");
MusicThumbnail.type = "MusicThumbnail";
var MusicThumbnail_default = MusicThumbnail;

// dist/src/parser/classes/MusicCardShelf.js
var MusicCardShelf = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnail = parser_default.parseItem(data.thumbnail, MusicThumbnail_default);
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.buttons = parser_default.parseArray(data.buttons, Button_default);
    this.menu = parser_default.parseItem(data.menu, Menu_default);
    this.on_tap = new NavigationEndpoint_default(data.onTap);
    this.header = parser_default.parseItem(data.header, MusicCardShelfHeaderBasic_default);
    if (Reflect.has(data, "endIcon") && Reflect.has(data.endIcon, "iconType")) {
      this.end_icon_type = data.endIcon.iconType;
    }
    this.subtitle_badges = parser_default.parseArray(data.subtitleBadges, MusicInlineBadge_default);
    this.thumbnail_overlay = parser_default.parseItem(data.thumbnailOverlay, MusicItemThumbnailOverlay_default);
    if (Reflect.has(data, "contents")) {
      this.contents = parser_default.parseArray(data.contents);
    }
  }
};
__name(MusicCardShelf, "MusicCardShelf");
MusicCardShelf.type = "MusicCardShelf";
var MusicCardShelf_default = MusicCardShelf;

// dist/src/parser/classes/MusicCarouselShelfBasicHeader.js
var MusicCarouselShelfBasicHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    if (Reflect.has(data, "strapline")) {
      this.strapline = new Text(data.strapline);
    }
    if (Reflect.has(data, "thumbnail")) {
      this.thumbnail = parser_default.parseItem(data.thumbnail, MusicThumbnail_default);
    }
    if (Reflect.has(data, "moreContentButton")) {
      this.more_content = parser_default.parseItem(data.moreContentButton, Button_default);
    }
    if (Reflect.has(data, "endIcons")) {
      this.end_icons = parser_default.parseArray(data.endIcons, IconLink_default);
    }
  }
};
__name(MusicCarouselShelfBasicHeader, "MusicCarouselShelfBasicHeader");
MusicCarouselShelfBasicHeader.type = "MusicCarouselShelfBasicHeader";
var MusicCarouselShelfBasicHeader_default = MusicCarouselShelfBasicHeader;

// dist/src/parser/classes/MusicMultiRowListItem.js
var MusicMultiRowListItem = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnail = parser_exports.parseItem(data.thumbnail, MusicThumbnail_default);
    this.overlay = parser_exports.parseItem(data.overlay, MusicItemThumbnailOverlay_default);
    this.on_tap = new NavigationEndpoint_default(data.onTap);
    this.menu = parser_exports.parseItem(data.menu, Menu_default);
    this.subtitle = new Text(data.subtitle);
    this.title = new Text(data.title);
    if (Reflect.has(data, "secondTitle")) {
      this.second_title = new Text(data.secondTitle);
    }
    if (Reflect.has(data, "description")) {
      this.description = new Text(data.description);
    }
    if (Reflect.has(data, "displayStyle")) {
      this.display_style = data.displayStyle;
    }
  }
};
__name(MusicMultiRowListItem, "MusicMultiRowListItem");
MusicMultiRowListItem.type = "MusicMultiRowListItem";
var MusicMultiRowListItem_default = MusicMultiRowListItem;

// dist/src/parser/classes/MusicNavigationButton.js
var MusicNavigationButton = class extends YTNode {
  constructor(data) {
    super();
    this.button_text = new Text(data.buttonText).toString();
    this.endpoint = new NavigationEndpoint_default(data.clickCommand);
  }
};
__name(MusicNavigationButton, "MusicNavigationButton");
MusicNavigationButton.type = "MusicNavigationButton";
var MusicNavigationButton_default = MusicNavigationButton;

// dist/src/parser/classes/MusicResponsiveListItem.js
var import_tslib5 = require("tslib");

// dist/src/parser/classes/MusicResponsiveListItemFixedColumn.js
var MusicResponsiveListItemFixedColumn = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.text);
    this.display_priority = data.displayPriority;
  }
};
__name(MusicResponsiveListItemFixedColumn, "MusicResponsiveListItemFixedColumn");
MusicResponsiveListItemFixedColumn.type = "musicResponsiveListItemFlexColumnRenderer";
var MusicResponsiveListItemFixedColumn_default = MusicResponsiveListItemFixedColumn;

// dist/src/parser/classes/MusicResponsiveListItemFlexColumn.js
var MusicResponsiveListItemFlexColumn = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.text);
    this.display_priority = data.displayPriority;
  }
};
__name(MusicResponsiveListItemFlexColumn, "MusicResponsiveListItemFlexColumn");
MusicResponsiveListItemFlexColumn.type = "MusicResponsiveListItemFlexColumn";
var MusicResponsiveListItemFlexColumn_default = MusicResponsiveListItemFlexColumn;

// dist/src/parser/classes/MusicResponsiveListItem.js
var _MusicResponsiveListItem_instances;
var _MusicResponsiveListItem_playlist_item_data;
var _MusicResponsiveListItem_parseOther;
var _MusicResponsiveListItem_parseVideoOrSong;
var _MusicResponsiveListItem_parseSong;
var _MusicResponsiveListItem_parseVideo;
var _MusicResponsiveListItem_parseArtist;
var _MusicResponsiveListItem_parseLibraryArtist;
var _MusicResponsiveListItem_parseNonMusicTrack;
var _MusicResponsiveListItem_parseAlbum;
var _MusicResponsiveListItem_parsePlaylist;
var MusicResponsiveListItem = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c, _d, _e, _f;
    super();
    _MusicResponsiveListItem_instances.add(this);
    _MusicResponsiveListItem_playlist_item_data.set(this, void 0);
    this.flex_columns = parser_default.parseArray(data.flexColumns, MusicResponsiveListItemFlexColumn_default);
    this.fixed_columns = parser_default.parseArray(data.fixedColumns, MusicResponsiveListItemFixedColumn_default);
    (0, import_tslib5.__classPrivateFieldSet)(this, _MusicResponsiveListItem_playlist_item_data, {
      video_id: ((_a4 = data === null || data === void 0 ? void 0 : data.playlistItemData) === null || _a4 === void 0 ? void 0 : _a4.videoId) || null,
      playlist_set_video_id: ((_b2 = data === null || data === void 0 ? void 0 : data.playlistItemData) === null || _b2 === void 0 ? void 0 : _b2.playlistSetVideoId) || null
    }, "f");
    if (Reflect.has(data, "navigationEndpoint")) {
      this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    }
    let page_type = (_f = (_e = (_d = (_c = this.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.browseEndpointContextSupportedConfigs) === null || _e === void 0 ? void 0 : _e.browseEndpointContextMusicConfig) === null || _f === void 0 ? void 0 : _f.pageType;
    if (!page_type) {
      const is_non_music_track = this.flex_columns.find((col) => {
        var _a5, _b3, _c2, _d2;
        return ((_d2 = (_c2 = (_b3 = (_a5 = col.title.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b3 === void 0 ? void 0 : _b3.browseEndpointContextSupportedConfigs) === null || _c2 === void 0 ? void 0 : _c2.browseEndpointContextMusicConfig) === null || _d2 === void 0 ? void 0 : _d2.pageType) === "MUSIC_PAGE_TYPE_NON_MUSIC_AUDIO_TRACK_PAGE";
      });
      if (is_non_music_track) {
        page_type = "MUSIC_PAGE_TYPE_NON_MUSIC_AUDIO_TRACK_PAGE";
      }
    }
    switch (page_type) {
      case "MUSIC_PAGE_TYPE_ALBUM":
        this.item_type = "album";
        (0, import_tslib5.__classPrivateFieldGet)(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseAlbum).call(this);
        break;
      case "MUSIC_PAGE_TYPE_PLAYLIST":
        this.item_type = "playlist";
        (0, import_tslib5.__classPrivateFieldGet)(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parsePlaylist).call(this);
        break;
      case "MUSIC_PAGE_TYPE_ARTIST":
      case "MUSIC_PAGE_TYPE_USER_CHANNEL":
        this.item_type = "artist";
        (0, import_tslib5.__classPrivateFieldGet)(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseArtist).call(this);
        break;
      case "MUSIC_PAGE_TYPE_LIBRARY_ARTIST":
        this.item_type = "library_artist";
        (0, import_tslib5.__classPrivateFieldGet)(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseLibraryArtist).call(this);
        break;
      case "MUSIC_PAGE_TYPE_NON_MUSIC_AUDIO_TRACK_PAGE":
        this.item_type = "non_music_track";
        (0, import_tslib5.__classPrivateFieldGet)(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseNonMusicTrack).call(this);
        break;
      default:
        if (this.flex_columns[1]) {
          (0, import_tslib5.__classPrivateFieldGet)(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseVideoOrSong).call(this);
        } else {
          (0, import_tslib5.__classPrivateFieldGet)(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseOther).call(this);
        }
    }
    if (Reflect.has(data, "index")) {
      this.index = new Text(data.index);
    }
    if (Reflect.has(data, "thumbnail")) {
      this.thumbnail = parser_default.parseItem(data.thumbnail, MusicThumbnail_default);
    }
    if (Reflect.has(data, "badges")) {
      this.badges = parser_default.parseArray(data.badges);
    }
    if (Reflect.has(data, "menu")) {
      this.menu = parser_default.parseItem(data.menu, Menu_default);
    }
    if (Reflect.has(data, "overlay")) {
      this.overlay = parser_default.parseItem(data.overlay, MusicItemThumbnailOverlay_default);
    }
  }
  get thumbnails() {
    var _a4;
    return ((_a4 = this.thumbnail) === null || _a4 === void 0 ? void 0 : _a4.contents) || [];
  }
};
__name(MusicResponsiveListItem, "MusicResponsiveListItem");
_MusicResponsiveListItem_playlist_item_data = /* @__PURE__ */ new WeakMap(), _MusicResponsiveListItem_instances = /* @__PURE__ */ new WeakSet(), _MusicResponsiveListItem_parseOther = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseOther2() {
  this.title = this.flex_columns.first().title.toString();
  if (this.endpoint) {
    this.item_type = "endpoint";
  } else {
    this.item_type = "unknown";
  }
}, "_MusicResponsiveListItem_parseOther"), _MusicResponsiveListItem_parseVideoOrSong = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseVideoOrSong2() {
  var _a4, _b2;
  const is_video = (_b2 = (_a4 = this.flex_columns.at(1)) === null || _a4 === void 0 ? void 0 : _a4.title.runs) === null || _b2 === void 0 ? void 0 : _b2.some((run) => run.text.match(/(.*?) views/));
  if (is_video) {
    this.item_type = "video";
    (0, import_tslib5.__classPrivateFieldGet)(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseVideo).call(this);
  } else {
    this.item_type = "song";
    (0, import_tslib5.__classPrivateFieldGet)(this, _MusicResponsiveListItem_instances, "m", _MusicResponsiveListItem_parseSong).call(this);
  }
}, "_MusicResponsiveListItem_parseVideoOrSong"), _MusicResponsiveListItem_parseSong = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseSong2() {
  var _a4, _b2, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
  this.id = (0, import_tslib5.__classPrivateFieldGet)(this, _MusicResponsiveListItem_playlist_item_data, "f").video_id || ((_b2 = (_a4 = this.endpoint) === null || _a4 === void 0 ? void 0 : _a4.payload) === null || _b2 === void 0 ? void 0 : _b2.videoId);
  this.title = this.flex_columns.first().title.toString();
  const duration_text = ((_e = (_d = (_c = this.flex_columns.at(1)) === null || _c === void 0 ? void 0 : _c.title.runs) === null || _d === void 0 ? void 0 : _d.find((run) => /^\d+$/.test(run.text.replace(/:/g, "")))) === null || _e === void 0 ? void 0 : _e.text) || ((_g = (_f = this.fixed_columns.first()) === null || _f === void 0 ? void 0 : _f.title) === null || _g === void 0 ? void 0 : _g.toString());
  if (duration_text) {
    this.duration = {
      text: duration_text,
      seconds: timeToSeconds(duration_text)
    };
  }
  const album_run = ((_j = (_h = this.flex_columns.at(1)) === null || _h === void 0 ? void 0 : _h.title.runs) === null || _j === void 0 ? void 0 : _j.find((run) => isTextRun(run) && run.endpoint && run.endpoint.payload.browseId.startsWith("MPR"))) || ((_l = (_k = this.flex_columns.at(2)) === null || _k === void 0 ? void 0 : _k.title.runs) === null || _l === void 0 ? void 0 : _l.find((run) => isTextRun(run) && run.endpoint && run.endpoint.payload.browseId.startsWith("MPR")));
  if (album_run && isTextRun(album_run)) {
    this.album = {
      id: (_o = (_m = album_run.endpoint) === null || _m === void 0 ? void 0 : _m.payload) === null || _o === void 0 ? void 0 : _o.browseId,
      name: album_run.text,
      endpoint: album_run.endpoint
    };
  }
  const artist_runs = (_q = (_p = this.flex_columns.at(1)) === null || _p === void 0 ? void 0 : _p.title.runs) === null || _q === void 0 ? void 0 : _q.filter((run) => isTextRun(run) && run.endpoint && run.endpoint.payload.browseId.startsWith("UC"));
  if (artist_runs) {
    this.artists = artist_runs.map((run) => {
      var _a5, _b3;
      return {
        name: run.text,
        channel_id: isTextRun(run) ? (_b3 = (_a5 = run.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b3 === void 0 ? void 0 : _b3.browseId : void 0,
        endpoint: isTextRun(run) ? run.endpoint : void 0
      };
    });
  }
}, "_MusicResponsiveListItem_parseSong"), _MusicResponsiveListItem_parseVideo = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseVideo2() {
  var _a4, _b2, _c, _d, _e, _f, _g, _h, _j, _k;
  this.id = (0, import_tslib5.__classPrivateFieldGet)(this, _MusicResponsiveListItem_playlist_item_data, "f").video_id;
  this.title = this.flex_columns.first().title.toString();
  this.views = (_c = (_b2 = (_a4 = this.flex_columns.at(1)) === null || _a4 === void 0 ? void 0 : _a4.title.runs) === null || _b2 === void 0 ? void 0 : _b2.find((run) => run.text.match(/(.*?) views/))) === null || _c === void 0 ? void 0 : _c.toString();
  const author_runs = (_e = (_d = this.flex_columns.at(1)) === null || _d === void 0 ? void 0 : _d.title.runs) === null || _e === void 0 ? void 0 : _e.filter((run) => isTextRun(run) && run.endpoint && run.endpoint.payload.browseId.startsWith("UC"));
  if (author_runs) {
    this.authors = author_runs.map((run) => {
      var _a5, _b3;
      return {
        name: run.text,
        channel_id: isTextRun(run) ? (_b3 = (_a5 = run.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b3 === void 0 ? void 0 : _b3.browseId : void 0,
        endpoint: isTextRun(run) ? run.endpoint : void 0
      };
    });
  }
  const duration_text = ((_g = (_f = this.flex_columns[1].title.runs) === null || _f === void 0 ? void 0 : _f.find((run) => /^\d+$/.test(run.text.replace(/:/g, "")))) === null || _g === void 0 ? void 0 : _g.text) || ((_k = (_j = (_h = this.fixed_columns.first()) === null || _h === void 0 ? void 0 : _h.title.runs) === null || _j === void 0 ? void 0 : _j.find((run) => /^\d+$/.test(run.text.replace(/:/g, "")))) === null || _k === void 0 ? void 0 : _k.text);
  if (duration_text) {
    this.duration = {
      text: duration_text,
      seconds: timeToSeconds(duration_text)
    };
  }
}, "_MusicResponsiveListItem_parseVideo"), _MusicResponsiveListItem_parseArtist = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseArtist2() {
  var _a4, _b2, _c, _d, _e, _f;
  this.id = (_b2 = (_a4 = this.endpoint) === null || _a4 === void 0 ? void 0 : _a4.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId;
  this.name = this.flex_columns.first().title.toString();
  this.subtitle = (_c = this.flex_columns.at(1)) === null || _c === void 0 ? void 0 : _c.title;
  this.subscribers = ((_f = (_e = (_d = this.subtitle) === null || _d === void 0 ? void 0 : _d.runs) === null || _e === void 0 ? void 0 : _e.find((run) => /^(\d*\.)?\d+[M|K]? subscribers?$/i.test(run.text))) === null || _f === void 0 ? void 0 : _f.text) || "";
}, "_MusicResponsiveListItem_parseArtist"), _MusicResponsiveListItem_parseLibraryArtist = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseLibraryArtist2() {
  var _a4, _b2, _c, _d;
  this.name = this.flex_columns.first().title.toString();
  this.subtitle = (_a4 = this.flex_columns.at(1)) === null || _a4 === void 0 ? void 0 : _a4.title;
  this.song_count = ((_d = (_c = (_b2 = this.subtitle) === null || _b2 === void 0 ? void 0 : _b2.runs) === null || _c === void 0 ? void 0 : _c.find((run) => /^\d+(,\d+)? songs?$/i.test(run.text))) === null || _d === void 0 ? void 0 : _d.text) || "";
}, "_MusicResponsiveListItem_parseLibraryArtist"), _MusicResponsiveListItem_parseNonMusicTrack = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseNonMusicTrack2() {
  var _a4, _b2;
  this.id = (0, import_tslib5.__classPrivateFieldGet)(this, _MusicResponsiveListItem_playlist_item_data, "f").video_id || ((_b2 = (_a4 = this.endpoint) === null || _a4 === void 0 ? void 0 : _a4.payload) === null || _b2 === void 0 ? void 0 : _b2.videoId);
  this.title = this.flex_columns.first().title.toString();
}, "_MusicResponsiveListItem_parseNonMusicTrack"), _MusicResponsiveListItem_parseAlbum = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parseAlbum2() {
  var _a4, _b2, _c, _d, _e, _f, _g, _h, _j;
  this.id = (_b2 = (_a4 = this.endpoint) === null || _a4 === void 0 ? void 0 : _a4.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId;
  this.title = this.flex_columns.first().title.toString();
  const author_run = (_d = (_c = this.flex_columns.at(1)) === null || _c === void 0 ? void 0 : _c.title.runs) === null || _d === void 0 ? void 0 : _d.find((run) => isTextRun(run) && run.endpoint && run.endpoint.payload.browseId.startsWith("UC"));
  if (author_run && isTextRun(author_run)) {
    this.author = {
      name: author_run.text,
      channel_id: (_f = (_e = author_run.endpoint) === null || _e === void 0 ? void 0 : _e.payload) === null || _f === void 0 ? void 0 : _f.browseId,
      endpoint: author_run.endpoint
    };
  }
  this.year = (_j = (_h = (_g = this.flex_columns.at(1)) === null || _g === void 0 ? void 0 : _g.title.runs) === null || _h === void 0 ? void 0 : _h.find((run) => /^[12][0-9]{3}$/.test(run.text))) === null || _j === void 0 ? void 0 : _j.text;
}, "_MusicResponsiveListItem_parseAlbum"), _MusicResponsiveListItem_parsePlaylist = /* @__PURE__ */ __name(function _MusicResponsiveListItem_parsePlaylist2() {
  var _a4, _b2, _c, _d, _e, _f, _g, _h;
  this.id = (_b2 = (_a4 = this.endpoint) === null || _a4 === void 0 ? void 0 : _a4.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId;
  this.title = this.flex_columns.first().title.toString();
  const item_count_run = (_d = (_c = this.flex_columns.at(1)) === null || _c === void 0 ? void 0 : _c.title.runs) === null || _d === void 0 ? void 0 : _d.find((run) => run.text.match(/\d+ (song|songs)/));
  this.item_count = item_count_run ? item_count_run.text : void 0;
  const author_run = (_f = (_e = this.flex_columns.at(1)) === null || _e === void 0 ? void 0 : _e.title.runs) === null || _f === void 0 ? void 0 : _f.find((run) => isTextRun(run) && run.endpoint && run.endpoint.payload.browseId.startsWith("UC"));
  if (author_run && isTextRun(author_run)) {
    this.author = {
      name: author_run.text,
      channel_id: (_h = (_g = author_run.endpoint) === null || _g === void 0 ? void 0 : _g.payload) === null || _h === void 0 ? void 0 : _h.browseId,
      endpoint: author_run.endpoint
    };
  }
}, "_MusicResponsiveListItem_parsePlaylist");
MusicResponsiveListItem.type = "MusicResponsiveListItem";
var MusicResponsiveListItem_default = MusicResponsiveListItem;

// dist/src/parser/classes/MusicTwoRowItem.js
var MusicTwoRowItem = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    super();
    this.title = new Text(data.title);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.id = ((_b2 = (_a4 = this.endpoint) === null || _a4 === void 0 ? void 0 : _a4.payload) === null || _b2 === void 0 ? void 0 : _b2.browseId) || ((_d = (_c = this.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.videoId);
    this.subtitle = new Text(data.subtitle);
    this.badges = parser_default.parse(data.subtitleBadges);
    const page_type = (_h = (_g = (_f = (_e = this.endpoint) === null || _e === void 0 ? void 0 : _e.payload) === null || _f === void 0 ? void 0 : _f.browseEndpointContextSupportedConfigs) === null || _g === void 0 ? void 0 : _g.browseEndpointContextMusicConfig) === null || _h === void 0 ? void 0 : _h.pageType;
    switch (page_type) {
      case "MUSIC_PAGE_TYPE_ARTIST":
        this.item_type = "artist";
        break;
      case "MUSIC_PAGE_TYPE_PLAYLIST":
        this.item_type = "playlist";
        break;
      case "MUSIC_PAGE_TYPE_ALBUM":
        this.item_type = "album";
        break;
      default:
        if (((_k = (_j = this.endpoint) === null || _j === void 0 ? void 0 : _j.metadata) === null || _k === void 0 ? void 0 : _k.api_url) === "/next") {
          this.item_type = "endpoint";
        } else if ((_l = this.subtitle.runs) === null || _l === void 0 ? void 0 : _l[0]) {
          if (this.subtitle.runs[0].text !== "Song") {
            this.item_type = "video";
          } else {
            this.item_type = "song";
          }
        } else if (this.endpoint) {
          this.item_type = "endpoint";
        } else {
          this.item_type = "unknown";
        }
        break;
    }
    if (this.item_type == "artist") {
      this.subscribers = ((_o = (_m = this.subtitle.runs) === null || _m === void 0 ? void 0 : _m.find((run) => /^(\d*\.)?\d+[M|K]? subscribers?$/i.test(run.text))) === null || _o === void 0 ? void 0 : _o.text) || "";
    } else if (this.item_type == "playlist") {
      const item_count_run = (_p = this.subtitle.runs) === null || _p === void 0 ? void 0 : _p.find((run) => run.text.match(/\d+ songs|song/));
      this.item_count = item_count_run ? item_count_run.text : null;
    } else if (this.item_type == "album") {
      const artists = (_q = this.subtitle.runs) === null || _q === void 0 ? void 0 : _q.filter((run) => {
        var _a5, _b3;
        return (_b3 = (_a5 = run.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b3 === void 0 ? void 0 : _b3.browseId.startsWith("UC");
      });
      if (artists) {
        this.artists = artists.map((artist) => {
          var _a5, _b3;
          return {
            name: artist.text,
            channel_id: (_b3 = (_a5 = artist.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b3 === void 0 ? void 0 : _b3.browseId,
            endpoint: artist.endpoint
          };
        });
      }
      this.year = (_r = this.subtitle.runs) === null || _r === void 0 ? void 0 : _r.slice(-1)[0].text;
      if (isNaN(Number(this.year)))
        delete this.year;
    } else if (this.item_type == "video") {
      this.views = ((_t = (_s = this === null || this === void 0 ? void 0 : this.subtitle.runs) === null || _s === void 0 ? void 0 : _s.find((run) => run === null || run === void 0 ? void 0 : run.text.match(/(.*?) views/))) === null || _t === void 0 ? void 0 : _t.text) || "N/A";
      const author = (_u = this.subtitle.runs) === null || _u === void 0 ? void 0 : _u.find((run) => {
        var _a5, _b3, _c2;
        return (_c2 = (_b3 = (_a5 = run.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b3 === void 0 ? void 0 : _b3.browseId) === null || _c2 === void 0 ? void 0 : _c2.startsWith("UC");
      });
      if (author) {
        this.author = {
          name: author === null || author === void 0 ? void 0 : author.text,
          channel_id: (_w = (_v = author === null || author === void 0 ? void 0 : author.endpoint) === null || _v === void 0 ? void 0 : _v.payload) === null || _w === void 0 ? void 0 : _w.browseId,
          endpoint: author === null || author === void 0 ? void 0 : author.endpoint
        };
      }
    } else if (this.item_type == "song") {
      const artists = (_x = this.subtitle.runs) === null || _x === void 0 ? void 0 : _x.filter((run) => {
        var _a5, _b3;
        return (_b3 = (_a5 = run.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b3 === void 0 ? void 0 : _b3.browseId.startsWith("UC");
      });
      if (artists) {
        this.artists = artists.map((artist) => {
          var _a5, _b3;
          return {
            name: artist === null || artist === void 0 ? void 0 : artist.text,
            channel_id: (_b3 = (_a5 = artist === null || artist === void 0 ? void 0 : artist.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b3 === void 0 ? void 0 : _b3.browseId,
            endpoint: artist === null || artist === void 0 ? void 0 : artist.endpoint
          };
        });
      }
    }
    this.thumbnail = Thumbnail.fromResponse(data.thumbnailRenderer.musicThumbnailRenderer.thumbnail);
    this.thumbnail_overlay = parser_default.parseItem(data.thumbnailOverlay, MusicItemThumbnailOverlay_default);
    this.menu = parser_default.parseItem(data.menu, Menu_default);
  }
};
__name(MusicTwoRowItem, "MusicTwoRowItem");
MusicTwoRowItem.type = "MusicTwoRowItem";
var MusicTwoRowItem_default = MusicTwoRowItem;

// dist/src/parser/classes/MusicCarouselShelf.js
var MusicCarouselShelf = class extends YTNode {
  constructor(data) {
    super();
    this.header = parser_default.parseItem(data.header, MusicCarouselShelfBasicHeader_default);
    this.contents = parser_default.parseArray(data.contents, [MusicTwoRowItem_default, MusicResponsiveListItem_default, MusicMultiRowListItem_default, MusicNavigationButton_default]);
    if (Reflect.has(data, "numItemsPerColumn")) {
      this.num_items_per_column = parseInt(data.numItemsPerColumn);
    }
  }
};
__name(MusicCarouselShelf, "MusicCarouselShelf");
MusicCarouselShelf.type = "MusicCarouselShelf";
var MusicCarouselShelf_default = MusicCarouselShelf;

// dist/src/parser/classes/MusicDescriptionShelf.js
var MusicDescriptionShelf = class extends YTNode {
  constructor(data) {
    super();
    this.description = new Text(data.description);
    if (Reflect.has(data, "maxCollapsedLines")) {
      this.max_collapsed_lines = data.maxCollapsedLines;
    }
    if (Reflect.has(data, "maxExpandedLines")) {
      this.max_expanded_lines = data.maxExpandedLines;
    }
    this.footer = new Text(data.footer);
  }
};
__name(MusicDescriptionShelf, "MusicDescriptionShelf");
MusicDescriptionShelf.type = "MusicDescriptionShelf";
var MusicDescriptionShelf_default = MusicDescriptionShelf;

// dist/src/parser/classes/MusicDetailHeader.js
var MusicDetailHeader = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c, _d, _e, _f, _g, _h, _j;
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.subtitle = new Text(data.subtitle);
    this.second_subtitle = new Text(data.secondSubtitle);
    this.year = ((_b2 = (_a4 = this.subtitle.runs) === null || _a4 === void 0 ? void 0 : _a4.find((run) => /^[12][0-9]{3}$/.test(run.text))) === null || _b2 === void 0 ? void 0 : _b2.text) || "";
    this.song_count = ((_d = (_c = this.second_subtitle.runs) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.text) || "";
    this.total_duration = ((_f = (_e = this.second_subtitle.runs) === null || _e === void 0 ? void 0 : _e[2]) === null || _f === void 0 ? void 0 : _f.text) || "";
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail.croppedSquareThumbnailRenderer.thumbnail);
    this.badges = parser_default.parseArray(data.subtitleBadges);
    const author = (_g = this.subtitle.runs) === null || _g === void 0 ? void 0 : _g.find((run) => {
      var _a5, _b3;
      return (_b3 = (_a5 = run === null || run === void 0 ? void 0 : run.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b3 === void 0 ? void 0 : _b3.browseId.startsWith("UC");
    });
    if (author) {
      this.author = {
        name: author.text,
        channel_id: (_j = (_h = author.endpoint) === null || _h === void 0 ? void 0 : _h.payload) === null || _j === void 0 ? void 0 : _j.browseId,
        endpoint: author.endpoint
      };
    }
    this.menu = parser_default.parseItem(data.menu);
  }
};
__name(MusicDetailHeader, "MusicDetailHeader");
MusicDetailHeader.type = "MusicDetailHeader";
var MusicDetailHeader_default = MusicDetailHeader;

// dist/src/parser/classes/MusicDownloadStateBadge.js
var MusicDownloadStateBadge = class extends YTNode {
  constructor(data) {
    super();
    this.playlist_id = data.playlistId;
    this.supported_download_states = data.supportedDownloadStates;
  }
};
__name(MusicDownloadStateBadge, "MusicDownloadStateBadge");
MusicDownloadStateBadge.type = "MusicDownloadStateBadge";
var MusicDownloadStateBadge_default = MusicDownloadStateBadge;

// dist/src/parser/classes/MusicEditablePlaylistDetailHeader.js
var MusicEditablePlaylistDetailHeader = class extends YTNode {
  constructor(data) {
    super();
    this.header = parser_default.parseItem(data.header);
  }
};
__name(MusicEditablePlaylistDetailHeader, "MusicEditablePlaylistDetailHeader");
MusicEditablePlaylistDetailHeader.type = "MusicEditablePlaylistDetailHeader";
var MusicEditablePlaylistDetailHeader_default = MusicEditablePlaylistDetailHeader;

// dist/src/parser/classes/MusicElementHeader.js
var MusicElementHeader = class extends YTNode {
  constructor(data) {
    super();
    this.element = Reflect.has(data, "elementRenderer") ? parser_default.parseItem(data, Element_default) : null;
  }
};
__name(MusicElementHeader, "MusicElementHeader");
MusicElementHeader.type = "MusicElementHeader";
var MusicElementHeader_default = MusicElementHeader;

// dist/src/parser/classes/MusicHeader.js
var MusicHeader = class extends YTNode {
  constructor(data) {
    super();
    if (Reflect.has(data, "header")) {
      this.header = parser_default.parseItem(data.header);
    }
    if (Reflect.has(data, "title")) {
      this.title = new Text(data.title);
    }
  }
};
__name(MusicHeader, "MusicHeader");
MusicHeader.type = "MusicHeader";
var MusicHeader_default = MusicHeader;

// dist/src/parser/classes/MusicImmersiveHeader.js
var MusicImmersiveHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.thumbnail = parser_default.parseItem(data.thumbnail, MusicThumbnail_default);
  }
};
__name(MusicImmersiveHeader, "MusicImmersiveHeader");
MusicImmersiveHeader.type = "MusicImmersiveHeader";
var MusicImmersiveHeader_default = MusicImmersiveHeader;

// dist/src/parser/classes/MusicLargeCardItemCarousel.js
var ActionButton = class {
  constructor(data) {
    this.icon_name = data.iconName;
    this.endpoint = new NavigationEndpoint_default(data.onTap);
    this.a11y_text = data.a11yText;
    this.style = data.style;
  }
};
__name(ActionButton, "ActionButton");
ActionButton.type = "ActionButton";
var Panel2 = class {
  constructor(data) {
    this.image = data.image.image.sources;
    this.content_mode = data.image.contentMode;
    this.crop_options = data.image.cropOptions;
    this.image_aspect_ratio = data.imageAspectRatio;
    this.caption = data.caption;
    this.action_buttons = data.actionButtons.map((el) => new ActionButton(el));
  }
};
__name(Panel2, "Panel");
Panel2.type = "Panel";
var MusicLargeCardItemCarousel = class extends YTNode {
  constructor(data) {
    super();
    this.header = data.shelf.header;
    this.panels = data.shelf.panels.map((el) => new Panel2(el));
  }
};
__name(MusicLargeCardItemCarousel, "MusicLargeCardItemCarousel");
MusicLargeCardItemCarousel.type = "MusicLargeCardItemCarousel";
var MusicLargeCardItemCarousel_default = MusicLargeCardItemCarousel;

// dist/src/parser/classes/MusicPlaylistShelf.js
var MusicPlaylistShelf = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c;
    super();
    this.playlist_id = data.playlistId;
    this.contents = parser_default.parseArray(data.contents, MusicResponsiveListItem_default);
    this.collapsed_item_count = data.collapsedItemCount;
    this.continuation = ((_c = (_b2 = (_a4 = data.continuations) === null || _a4 === void 0 ? void 0 : _a4[0]) === null || _b2 === void 0 ? void 0 : _b2.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || null;
  }
};
__name(MusicPlaylistShelf, "MusicPlaylistShelf");
MusicPlaylistShelf.type = "MusicPlaylistShelf";
var MusicPlaylistShelf_default = MusicPlaylistShelf;

// dist/src/parser/classes/PlaylistPanelVideo.js
var PlaylistPanelVideo = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c, _d, _e;
    super();
    this.title = new Text(data.title);
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.selected = data.selected;
    this.video_id = data.videoId;
    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: timeToSeconds(new Text(data.lengthText).toString())
    };
    const album = (_a4 = new Text(data.longBylineText).runs) === null || _a4 === void 0 ? void 0 : _a4.find((run) => {
      var _a5, _b3, _c2;
      return (_c2 = (_b3 = (_a5 = run.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b3 === void 0 ? void 0 : _b3.browseId) === null || _c2 === void 0 ? void 0 : _c2.startsWith("MPR");
    });
    const artists = (_b2 = new Text(data.longBylineText).runs) === null || _b2 === void 0 ? void 0 : _b2.filter((run) => {
      var _a5, _b3, _c2;
      return (_c2 = (_b3 = (_a5 = run.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b3 === void 0 ? void 0 : _b3.browseId) === null || _c2 === void 0 ? void 0 : _c2.startsWith("UC");
    });
    this.author = new Text(data.shortBylineText).toString();
    if (album) {
      this.album = {
        id: (_d = (_c = album.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.browseId,
        name: album.text,
        year: (_e = new Text(data.longBylineText).runs) === null || _e === void 0 ? void 0 : _e.slice(-1)[0].text,
        endpoint: album.endpoint
      };
    }
    if (artists) {
      this.artists = artists.map((artist) => {
        var _a5, _b3;
        return {
          name: artist.text,
          channel_id: (_b3 = (_a5 = artist.endpoint) === null || _a5 === void 0 ? void 0 : _a5.payload) === null || _b3 === void 0 ? void 0 : _b3.browseId,
          endpoint: artist.endpoint
        };
      });
    }
    this.badges = parser_default.parseArray(data.badges);
    this.menu = parser_default.parseItem(data.menu);
    this.set_video_id = data.playlistSetVideoId;
  }
};
__name(PlaylistPanelVideo, "PlaylistPanelVideo");
PlaylistPanelVideo.type = "PlaylistPanelVideo";
var PlaylistPanelVideo_default = PlaylistPanelVideo;

// dist/src/parser/classes/PlaylistPanelVideoWrapper.js
var PlaylistPanelVideoWrapper = class extends YTNode {
  constructor(data) {
    super();
    this.primary = parser_default.parseItem(data.primaryRenderer, PlaylistPanelVideo_default);
    if (Reflect.has(data, "counterpart")) {
      this.counterpart = observe(data.counterpart.map((item) => parser_default.parseItem(item.counterpartRenderer, PlaylistPanelVideo_default)) || []);
    }
  }
};
__name(PlaylistPanelVideoWrapper, "PlaylistPanelVideoWrapper");
PlaylistPanelVideoWrapper.type = "PlaylistPanelVideoWrapper";
var PlaylistPanelVideoWrapper_default = PlaylistPanelVideoWrapper;

// dist/src/parser/classes/PlaylistPanel.js
var PlaylistPanel = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c, _d, _e, _f;
    super();
    this.title = data.title;
    this.title_text = new Text(data.titleText);
    this.contents = parser_default.parseArray(data.contents, [PlaylistPanelVideoWrapper_default, PlaylistPanelVideo_default, AutomixPreviewVideo_default]);
    this.playlist_id = data.playlistId;
    this.is_infinite = data.isInfinite;
    this.continuation = ((_c = (_b2 = (_a4 = data.continuations) === null || _a4 === void 0 ? void 0 : _a4[0]) === null || _b2 === void 0 ? void 0 : _b2.nextRadioContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || ((_f = (_e = (_d = data.continuations) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.nextContinuationData) === null || _f === void 0 ? void 0 : _f.continuation);
    this.is_editable = data.isEditable;
    this.preview_description = data.previewDescription;
    this.num_items_to_show = data.numItemsToShow;
  }
};
__name(PlaylistPanel, "PlaylistPanel");
PlaylistPanel.type = "PlaylistPanel";
var PlaylistPanel_default = PlaylistPanel;

// dist/src/parser/classes/MusicQueue.js
var MusicQueue = class extends YTNode {
  constructor(data) {
    super();
    this.content = parser_default.parseItem(data.content, PlaylistPanel_default);
  }
};
__name(MusicQueue, "MusicQueue");
MusicQueue.type = "MusicQueue";
var MusicQueue_default = MusicQueue;

// dist/src/parser/classes/MusicShelf.js
var MusicShelf = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c, _d;
    super();
    this.title = new Text(data.title);
    this.contents = parser_default.parseArray(data.contents, MusicResponsiveListItem_default);
    if (Reflect.has(data, "bottomEndpoint")) {
      this.endpoint = new NavigationEndpoint_default(data.bottomEndpoint);
    }
    if (Reflect.has(data, "continuations")) {
      this.continuation = ((_b2 = (_a4 = data.continuations) === null || _a4 === void 0 ? void 0 : _a4[0].nextContinuationData) === null || _b2 === void 0 ? void 0 : _b2.continuation) || ((_d = (_c = data.continuations) === null || _c === void 0 ? void 0 : _c[0].reloadContinuationData) === null || _d === void 0 ? void 0 : _d.continuation);
    }
    if (Reflect.has(data, "bottomText")) {
      this.bottom_text = new Text(data.bottomText);
    }
    if (Reflect.has(data, "bottomButton")) {
      this.bottom_button = parser_default.parseItem(data.bottomButton, Button_default);
    }
    if (Reflect.has(data, "subheaders")) {
      this.subheaders = parser_default.parseArray(data.subheaders);
    }
  }
};
__name(MusicShelf, "MusicShelf");
MusicShelf.type = "MusicShelf";
var MusicShelf_default = MusicShelf;

// dist/src/parser/classes/MusicSideAlignedItem.js
var MusicSideAlignedItem = class extends YTNode {
  constructor(data) {
    super();
    if (Reflect.has(data, "startItems")) {
      this.start_items = parser_default.parseArray(data.startItems);
    }
    if (Reflect.has(data, "endItems")) {
      this.end_items = parser_default.parseArray(data.endItems);
    }
  }
};
__name(MusicSideAlignedItem, "MusicSideAlignedItem");
MusicSideAlignedItem.type = "MusicSideAlignedItem";
var MusicSideAlignedItem_default = MusicSideAlignedItem;

// dist/src/parser/classes/MusicSortFilterButton.js
var MusicSortFilterButton = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title).toString();
    if (Reflect.has(data, "icon")) {
      this.icon_type = data.icon.iconType;
    }
    this.menu = parser_default.parseItem(data.menu, MusicMultiSelectMenu_default);
  }
};
__name(MusicSortFilterButton, "MusicSortFilterButton");
MusicSortFilterButton.type = "MusicSortFilterButton";
var MusicSortFilterButton_default = MusicSortFilterButton;

// dist/src/parser/classes/MusicTastebuilderShelfThumbnail.js
var MusicTastebuilderShelfThumbnail = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
};
__name(MusicTastebuilderShelfThumbnail, "MusicTastebuilderShelfThumbnail");
MusicTastebuilderShelfThumbnail.type = "MusicTastebuilderShelfThumbnail";
var MusicTastebuilderShelfThumbnail_default = MusicTastebuilderShelfThumbnail;

// dist/src/parser/classes/MusicTastebuilderShelf.js
var MusicTasteBuilderShelf = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnail = parser_default.parseItem(data.thumbnail, MusicTastebuilderShelfThumbnail_default);
    this.primary_text = new Text(data.primaryText);
    this.secondary_text = new Text(data.secondaryText);
    this.action_button = parser_default.parseItem(data.actionButton, Button_default);
    this.is_visible = data.isVisible;
  }
};
__name(MusicTasteBuilderShelf, "MusicTasteBuilderShelf");
MusicTasteBuilderShelf.type = "MusicTasteBuilderShelf";
var MusicTastebuilderShelf_default = MusicTasteBuilderShelf;

// dist/src/parser/classes/MusicVisualHeader.js
var MusicVisualHeader = class extends YTNode {
  constructor(data) {
    var _a4, _b2;
    super();
    this.title = new Text(data.title);
    this.thumbnail = data.thumbnail ? Thumbnail.fromResponse((_a4 = data.thumbnail.musicThumbnailRenderer) === null || _a4 === void 0 ? void 0 : _a4.thumbnail) : [];
    this.menu = parser_default.parseItem(data.menu, Menu_default);
    this.foreground_thumbnail = data.foregroundThumbnail ? Thumbnail.fromResponse((_b2 = data.foregroundThumbnail.musicThumbnailRenderer) === null || _b2 === void 0 ? void 0 : _b2.thumbnail) : [];
  }
};
__name(MusicVisualHeader, "MusicVisualHeader");
MusicVisualHeader.type = "MusicVisualHeader";
var MusicVisualHeader_default = MusicVisualHeader;

// dist/src/parser/classes/Notification.js
var Notification = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.video_thumbnails = Thumbnail.fromResponse(data.videoThumbnail);
    this.short_message = new Text(data.shortMessage);
    this.sent_time = new Text(data.sentTimeText);
    this.notification_id = data.notificationId;
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.record_click_endpoint = new NavigationEndpoint_default(data.recordClickEndpoint);
    this.menu = parser_default.parseItem(data.contextualMenu);
    this.read = data.read;
  }
};
__name(Notification, "Notification");
Notification.type = "Notification";
var Notification_default = Notification;

// dist/src/parser/classes/PageHeaderView.js
var PageHeaderView = class extends YTNode {
  constructor(data) {
    super();
    this.image = parser_default.parseItem(data.image, ContentPreviewImageView_default);
    this.title = parser_default.parseItem(data.title, DynamicTextView_default);
  }
};
__name(PageHeaderView, "PageHeaderView");
PageHeaderView.type = "PageHeaderView";
var PageHeaderView_default = PageHeaderView;

// dist/src/parser/classes/PageHeader.js
var PageHeader = class extends YTNode {
  constructor(data) {
    super();
    this.page_title = data.pageTitle;
    this.content = parser_default.parseItem(data.content, PageHeaderView_default);
  }
};
__name(PageHeader, "PageHeader");
PageHeader.type = "PageHeader";
var PageHeader_default = PageHeader;

// dist/src/parser/classes/PageIntroduction.js
var PageIntroduction = class extends YTNode {
  constructor(data) {
    super();
    this.header_text = new Text(data.headerText).toString();
    this.body_text = new Text(data.bodyText).toString();
    this.page_title = new Text(data.pageTitle).toString();
    this.header_icon_type = data.headerIcon.iconType;
  }
};
__name(PageIntroduction, "PageIntroduction");
PageIntroduction.type = "PageIntroduction";
var PageIntroduction_default = PageIntroduction;

// dist/src/parser/classes/PlayerErrorMessage.js
var PlayerErrorMessage = class extends YTNode {
  constructor(data) {
    super();
    this.subreason = new Text(data.subreason);
    this.reason = new Text(data.reason);
    this.proceed_button = parser_default.parseItem(data.proceedButton, Button_default);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    if (Reflect.has(data, "icon")) {
      this.icon_type = data.icon.iconType;
    }
  }
};
__name(PlayerErrorMessage, "PlayerErrorMessage");
PlayerErrorMessage.type = "PlayerErrorMessage";
var PlayerErrorMessage_default = PlayerErrorMessage;

// dist/src/parser/classes/PlayerLegacyDesktopYpcOffer.js
var PlayerLegacyDesktopYpcOffer = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.itemTitle;
    this.thumbnail = data.itemThumbnail;
    this.offer_description = data.offerDescription;
    this.offer_id = data.offerId;
  }
};
__name(PlayerLegacyDesktopYpcOffer, "PlayerLegacyDesktopYpcOffer");
PlayerLegacyDesktopYpcOffer.type = "PlayerLegacyDesktopYpcOffer";
var PlayerLegacyDesktopYpcOffer_default = PlayerLegacyDesktopYpcOffer;

// dist/src/parser/classes/YpcTrailer.js
var YpcTrailer = class extends YTNode {
  constructor(data) {
    super();
    this.video_message = data.fullVideoMessage;
    this.player_response = data.unserializedPlayerResponse;
  }
};
__name(YpcTrailer, "YpcTrailer");
YpcTrailer.type = "YpcTrailer";
var YpcTrailer_default = YpcTrailer;

// dist/src/parser/classes/PlayerLegacyDesktopYpcTrailer.js
var PlayerLegacyDesktopYpcTrailer = class extends YTNode {
  constructor(data) {
    super();
    this.video_id = data.trailerVideoId;
    this.title = data.itemTitle;
    this.thumbnail = data.itemThumbnail;
    this.offer_headline = data.offerHeadline;
    this.offer_description = data.offerDescription;
    this.offer_id = data.offerId;
    this.offer_button_text = data.offerButtonText;
    this.video_message = data.fullVideoMessage;
    this.trailer = parser_exports.parseItem(data.ypcTrailer, YpcTrailer_default);
  }
};
__name(PlayerLegacyDesktopYpcTrailer, "PlayerLegacyDesktopYpcTrailer");
PlayerLegacyDesktopYpcTrailer.type = "PlayerLegacyDesktopYpcTrailer";
var PlayerLegacyDesktopYpcTrailer_default = PlayerLegacyDesktopYpcTrailer;

// dist/src/parser/classes/PlayerMicroformat.js
var PlayerMicroformat = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    if (Reflect.has(data, "embed")) {
      this.embed = {
        iframe_url: data.embed.iframeUrl,
        flash_url: data.embed.flashUrl,
        flash_secure_url: data.embed.flashSecureUrl,
        width: data.embed.width,
        height: data.embed.height
      };
    }
    this.length_seconds = parseInt(data.lengthSeconds);
    this.channel = {
      id: data.externalChannelId,
      name: data.ownerChannelName,
      url: data.ownerProfileUrl
    };
    this.is_family_safe = !!data.isFamilySafe;
    this.is_unlisted = !!data.isUnlisted;
    this.has_ypc_metadata = !!data.hasYpcMetadata;
    this.view_count = parseInt(data.viewCount);
    this.category = data.category;
    this.publish_date = data.publishDate;
    this.upload_date = data.uploadDate;
    this.available_countries = data.availableCountries;
    this.start_timestamp = ((_a4 = data.liveBroadcastDetails) === null || _a4 === void 0 ? void 0 : _a4.startTimestamp) ? new Date(data.liveBroadcastDetails.startTimestamp) : null;
  }
};
__name(PlayerMicroformat, "PlayerMicroformat");
PlayerMicroformat.type = "PlayerMicroformat";
var PlayerMicroformat_default = PlayerMicroformat;

// dist/src/parser/classes/PlayerOverlayAutoplay.js
var PlayerOverlayAutoplay = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.video_id = data.videoId;
    this.video_title = new Text(data.videoTitle);
    this.short_view_count = new Text(data.shortViewCountText);
    this.prefer_immediate_redirect = data.preferImmediateRedirect;
    this.count_down_secs_for_fullscreen = data.countDownSecsForFullscreen;
    this.published = new Text(data.publishedTimeText);
    this.background = Thumbnail.fromResponse(data.background);
    this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
    this.author = new Author_default(data.byline);
    this.cancel_button = parser_default.parseItem(data.cancelButton, Button_default);
    this.next_button = parser_default.parseItem(data.nextButton, Button_default);
    this.close_button = parser_default.parseItem(data.closeButton, Button_default);
  }
};
__name(PlayerOverlayAutoplay, "PlayerOverlayAutoplay");
PlayerOverlayAutoplay.type = "PlayerOverlayAutoplay";
var PlayerOverlayAutoplay_default = PlayerOverlayAutoplay;

// dist/src/parser/classes/WatchNextEndScreen.js
var WatchNextEndScreen = class extends YTNode {
  constructor(data) {
    super();
    this.results = parser_default.parseArray(data.results, [EndScreenVideo_default, EndScreenPlaylist_default]);
    this.title = new Text(data.title).toString();
  }
};
__name(WatchNextEndScreen, "WatchNextEndScreen");
WatchNextEndScreen.type = "WatchNextEndScreen";
var WatchNextEndScreen_default = WatchNextEndScreen;

// dist/src/parser/classes/PlayerOverlay.js
var PlayerOverlay = class extends YTNode {
  constructor(data) {
    super();
    this.end_screen = parser_default.parseItem(data.endScreen, WatchNextEndScreen_default);
    this.autoplay = parser_default.parseItem(data.autoplay, PlayerOverlayAutoplay_default);
    this.share_button = parser_default.parseItem(data.shareButton, Button_default);
    this.add_to_menu = parser_default.parseItem(data.addToMenu, Menu_default);
    this.fullscreen_engagement = parser_default.parseItem(data.fullscreenEngagement);
    this.actions = parser_default.parseArray(data.actions);
    this.browser_media_session = parser_default.parseItem(data.browserMediaSession);
    this.decorated_player_bar = parser_default.parseItem(data.decoratedPlayerBarRenderer, DecoratedPlayerBar_default);
  }
};
__name(PlayerOverlay, "PlayerOverlay");
PlayerOverlay.type = "PlayerOverlay";
var PlayerOverlay_default = PlayerOverlay;

// dist/src/parser/classes/PlaylistHeader.js
var PlaylistHeader = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.playlistId;
    this.title = new Text(data.title);
    this.subtitle = data.subtitle ? new Text(data.subtitle) : null;
    this.stats = data.stats.map((stat) => new Text(stat));
    this.brief_stats = data.briefStats.map((stat) => new Text(stat));
    this.author = data.ownerText || data.ownerEndpoint ? new Author_default(Object.assign(Object.assign({}, data.ownerText), { navigationEndpoint: data.ownerEndpoint }), data.ownerBadges, null) : null;
    this.description = new Text(data.descriptionText);
    this.num_videos = new Text(data.numVideosText);
    this.view_count = new Text(data.viewCountText);
    this.can_share = data.shareData.canShare;
    this.can_delete = data.editableDetails.canDelete;
    this.is_editable = data.isEditable;
    this.privacy = data.privacy;
    this.save_button = parser_default.parseItem(data.saveButton);
    this.shuffle_play_button = parser_default.parseItem(data.shufflePlayButton);
    this.menu = parser_default.parseItem(data.moreActionsMenu);
    this.banner = parser_default.parseItem(data.playlistHeaderBanner);
  }
};
__name(PlaylistHeader, "PlaylistHeader");
PlaylistHeader.type = "PlaylistHeader";
var PlaylistHeader_default = PlaylistHeader;

// dist/src/parser/classes/PlaylistInfoCardContent.js
var PlaylistInfoCardContent = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.playlistTitle);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.video_count = new Text(data.playlistVideoCount);
    this.channel_name = new Text(data.channelName);
    this.endpoint = new NavigationEndpoint_default(data.action);
  }
};
__name(PlaylistInfoCardContent, "PlaylistInfoCardContent");
PlaylistInfoCardContent.type = "PlaylistInfoCardContent";
var PlaylistInfoCardContent_default = PlaylistInfoCardContent;

// dist/src/parser/classes/PlaylistMetadata.js
var PlaylistMetadata = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title;
    this.description = data.description || null;
  }
};
__name(PlaylistMetadata, "PlaylistMetadata");
PlaylistMetadata.type = "PlaylistMetadata";
var PlaylistMetadata_default = PlaylistMetadata;

// dist/src/parser/classes/PlaylistSidebar.js
var PlaylistSidebar = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parseArray(data.items);
  }
  get contents() {
    return this.items;
  }
};
__name(PlaylistSidebar, "PlaylistSidebar");
PlaylistSidebar.type = "PlaylistSidebar";
var PlaylistSidebar_default = PlaylistSidebar;

// dist/src/parser/classes/PlaylistSidebarPrimaryInfo.js
var PlaylistSidebarPrimaryInfo = class extends YTNode {
  constructor(data) {
    super();
    this.stats = data.stats.map((stat) => new Text(stat));
    this.thumbnail_renderer = parser_default.parseItem(data.thumbnailRenderer);
    this.title = new Text(data.title);
    this.menu = parser_default.parseItem(data.menu);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.description = new Text(data.description);
  }
};
__name(PlaylistSidebarPrimaryInfo, "PlaylistSidebarPrimaryInfo");
PlaylistSidebarPrimaryInfo.type = "PlaylistSidebarPrimaryInfo";
var PlaylistSidebarPrimaryInfo_default = PlaylistSidebarPrimaryInfo;

// dist/src/parser/classes/PlaylistSidebarSecondaryInfo.js
var PlaylistSidebarSecondaryInfo = class extends YTNode {
  constructor(data) {
    super();
    this.owner = parser_default.parseItem(data.videoOwner);
    this.button = parser_default.parseItem(data.button);
  }
};
__name(PlaylistSidebarSecondaryInfo, "PlaylistSidebarSecondaryInfo");
PlaylistSidebarSecondaryInfo.type = "PlaylistSidebarSecondaryInfo";
var PlaylistSidebarSecondaryInfo_default = PlaylistSidebarSecondaryInfo;

// dist/src/parser/classes/PlaylistVideo.js
var PlaylistVideo = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.videoId;
    this.index = new Text(data.index);
    this.title = new Text(data.title);
    this.author = new Author_default(data.shortBylineText);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = parser_default.parseArray(data.thumbnailOverlays);
    this.set_video_id = data === null || data === void 0 ? void 0 : data.setVideoId;
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.is_playable = data.isPlayable;
    this.menu = parser_default.parseItem(data.menu, Menu_default);
    this.video_info = new Text(data.videoInfo);
    this.accessibility_label = data.title.accessibility.accessibilityData.label;
    const upcoming = data.upcomingEventData && Number(`${data.upcomingEventData.startTime}000`);
    if (upcoming) {
      this.upcoming = new Date(upcoming);
    }
    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: parseInt(data.lengthSeconds)
    };
  }
  get is_live() {
    var _a4;
    return ((_a4 = this.thumbnail_overlays.firstOfType(ThumbnailOverlayTimeStatus_default)) === null || _a4 === void 0 ? void 0 : _a4.style) === "LIVE";
  }
  get is_upcoming() {
    var _a4;
    return ((_a4 = this.thumbnail_overlays.firstOfType(ThumbnailOverlayTimeStatus_default)) === null || _a4 === void 0 ? void 0 : _a4.style) === "UPCOMING";
  }
};
__name(PlaylistVideo, "PlaylistVideo");
PlaylistVideo.type = "PlaylistVideo";
var PlaylistVideo_default = PlaylistVideo;

// dist/src/parser/classes/PlaylistVideoList.js
var PlaylistVideoList = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.playlistId;
    this.is_editable = data.isEditable;
    this.can_reorder = data.canReorder;
    this.videos = parser_default.parseArray(data.contents);
  }
};
__name(PlaylistVideoList, "PlaylistVideoList");
PlaylistVideoList.type = "PlaylistVideoList";
var PlaylistVideoList_default = PlaylistVideoList;

// dist/src/parser/classes/Poll.js
var Poll = class extends YTNode {
  constructor(data) {
    super();
    this.choices = data.choices.map((choice) => ({
      text: new Text(choice.text),
      select_endpoint: choice.selectServiceEndpoint ? new NavigationEndpoint_default(choice.selectServiceEndpoint) : null,
      deselect_endpoint: choice.deselectServiceEndpoint ? new NavigationEndpoint_default(choice.deselectServiceEndpoint) : null,
      vote_ratio_if_selected: (choice === null || choice === void 0 ? void 0 : choice.voteRatioIfSelected) || null,
      vote_percentage_if_selected: new Text(choice.votePercentageIfSelected),
      vote_ratio_if_not_selected: (choice === null || choice === void 0 ? void 0 : choice.voteRatioIfSelected) || null,
      vote_percentage_if_not_selected: new Text(choice.votePercentageIfSelected),
      image: choice.image ? Thumbnail.fromResponse(choice.image) : null
    }));
    if (Reflect.has(data, "type"))
      this.poll_type = data.type;
    if (Reflect.has(data, "totalVotes"))
      this.total_votes = new Text(data.totalVotes);
    if (Reflect.has(data, "liveChatPollId"))
      this.live_chat_poll_id = data.liveChatPollId;
  }
};
__name(Poll, "Poll");
Poll.type = "Poll";
var Poll_default = Poll;

// dist/src/parser/classes/Post.js
var Post = class extends BackstagePost_default {
  constructor(data) {
    super(data);
  }
};
__name(Post, "Post");
Post.type = "Post";
var Post_default = Post;

// dist/src/parser/classes/PostMultiImage.js
var PostMultiImage = class extends YTNode {
  constructor(data) {
    super();
    this.images = parser_default.parseArray(data.images, BackstageImage_default);
  }
};
__name(PostMultiImage, "PostMultiImage");
PostMultiImage.type = "PostMultiImage";
var PostMultiImage_default = PostMultiImage;

// dist/src/parser/classes/ProfileColumn.js
var ProfileColumn = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parseArray(data.items);
  }
  get contents() {
    return this.items;
  }
};
__name(ProfileColumn, "ProfileColumn");
ProfileColumn.type = "ProfileColumn";
var ProfileColumn_default = ProfileColumn;

// dist/src/parser/classes/ProfileColumnStats.js
var ProfileColumnStats = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parseArray(data.items);
  }
  get contents() {
    return this.items;
  }
};
__name(ProfileColumnStats, "ProfileColumnStats");
ProfileColumnStats.type = "ProfileColumnStats";
var ProfileColumnStats_default = ProfileColumnStats;

// dist/src/parser/classes/ProfileColumnStatsEntry.js
var ProfileColumnStatsEntry = class extends YTNode {
  constructor(data) {
    super();
    this.label = new Text(data.label);
    this.value = new Text(data.value);
  }
};
__name(ProfileColumnStatsEntry, "ProfileColumnStatsEntry");
ProfileColumnStatsEntry.type = "ProfileColumnStatsEntry";
var ProfileColumnStatsEntry_default = ProfileColumnStatsEntry;

// dist/src/parser/classes/ProfileColumnUserInfo.js
var ProfileColumnUserInfo = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
  }
};
__name(ProfileColumnUserInfo, "ProfileColumnUserInfo");
ProfileColumnUserInfo.type = "ProfileColumnUserInfo";
var ProfileColumnUserInfo_default = ProfileColumnUserInfo;

// dist/src/parser/classes/Quiz.js
var Quiz = class extends YTNode {
  constructor(data) {
    super();
    this.choices = data.choices.map((choice) => ({
      text: new Text(choice.text),
      is_correct: choice.isCorrect
    }));
    this.total_votes = new Text(data.totalVotes);
  }
};
__name(Quiz, "Quiz");
Quiz.type = "Quiz";
var Quiz_default = Quiz;

// dist/src/parser/classes/RecognitionShelf.js
var RecognitionShelf = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.avatars = data.avatars.map((avatar) => new Thumbnail(avatar));
    this.button = parser_default.parseItem(data.button, Button_default);
    this.surface = data.surface;
  }
};
__name(RecognitionShelf, "RecognitionShelf");
RecognitionShelf.type = "RecognitionShelf";
var RecognitionShelf_default = RecognitionShelf;

// dist/src/parser/classes/ReelItem.js
var ReelItem = class extends YTNode {
  constructor(data) {
    super();
    this.id = data.videoId;
    this.title = new Text(data.headline);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.views = new Text(data.viewCountText);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.accessibility_label = data.accessibility.accessibilityData.label;
  }
};
__name(ReelItem, "ReelItem");
ReelItem.type = "ReelItem";
var ReelItem_default = ReelItem;

// dist/src/parser/classes/ReelShelf.js
var ReelShelf = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.items = parser_default.parseArray(data.items);
    if (Reflect.has(data, "endpoint")) {
      this.endpoint = new NavigationEndpoint_default(data.endpoint);
    }
  }
  get contents() {
    return this.items;
  }
};
__name(ReelShelf, "ReelShelf");
ReelShelf.type = "ReelShelf";
var ReelShelf_default = ReelShelf;

// dist/src/parser/classes/RelatedChipCloud.js
var RelatedChipCloud = class extends YTNode {
  constructor(data) {
    super();
    this.content = parser_default.parseItem(data.content);
  }
};
__name(RelatedChipCloud, "RelatedChipCloud");
RelatedChipCloud.type = "RelatedChipCloud";
var RelatedChipCloud_default = RelatedChipCloud;

// dist/src/parser/classes/RichGrid.js
var RichGrid = class extends YTNode {
  constructor(data) {
    super();
    this.header = parser_default.parseItem(data.header);
    this.contents = parser_default.parseArray(data.contents);
  }
};
__name(RichGrid, "RichGrid");
RichGrid.type = "RichGrid";
var RichGrid_default = RichGrid;

// dist/src/parser/classes/RichItem.js
var RichItem = class extends YTNode {
  constructor(data) {
    super();
    this.content = parser_default.parseItem(data.content);
  }
};
__name(RichItem, "RichItem");
RichItem.type = "RichItem";
var RichItem_default = RichItem;

// dist/src/parser/classes/RichListHeader.js
var RichListHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    if (Reflect.has(data, "titleStyle")) {
      this.title_style = data.titleStyle.style;
    }
    if (Reflect.has(data, "icon")) {
      this.icon_type = data.icon.iconType;
    }
  }
};
__name(RichListHeader, "RichListHeader");
RichListHeader.type = "RichListHeader";
var RichListHeader_default = RichListHeader;

// dist/src/parser/classes/RichMetadata.js
var RichMetadata = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.call_to_action = new Text(data.callToAction);
    if (Reflect.has(data, "callToActionIcon")) {
      this.icon_type = data.callToActionIcon.iconType;
    }
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
  }
};
__name(RichMetadata, "RichMetadata");
RichMetadata.type = "RichMetadata";
var RichMetadata_default = RichMetadata;

// dist/src/parser/classes/RichMetadataRow.js
var RichMetadataRow = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parseArray(data.contents);
  }
};
__name(RichMetadataRow, "RichMetadataRow");
RichMetadataRow.type = "RichMetadataRow";
var RichMetadataRow_default = RichMetadataRow;

// dist/src/parser/classes/RichSection.js
var RichSection = class extends YTNode {
  constructor(data) {
    super();
    this.content = parser_default.parseItem(data.content);
  }
};
__name(RichSection, "RichSection");
RichSection.type = "RichSection";
var RichSection_default = RichSection;

// dist/src/parser/classes/RichShelf.js
var RichShelf = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.contents = parser_default.parseArray(data.contents);
    if (Reflect.has(data, "endpoint")) {
      this.endpoint = new NavigationEndpoint_default(data.endpoint);
    }
  }
};
__name(RichShelf, "RichShelf");
RichShelf.type = "RichShelf";
var RichShelf_default = RichShelf;

// dist/src/parser/classes/SearchBox.js
var SearchBox = class extends YTNode {
  constructor(data) {
    super();
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
    this.search_button = parser_default.parseItem(data.searchButton, Button_default);
    this.clear_button = parser_default.parseItem(data.clearButton, Button_default);
    this.placeholder_text = new Text(data.placeholderText);
  }
};
__name(SearchBox, "SearchBox");
SearchBox.type = "SearchBox";
var SearchBox_default = SearchBox;

// dist/src/parser/classes/SearchFilter.js
var SearchFilter = class extends YTNode {
  constructor(data) {
    super();
    this.label = new Text(data.label);
    this.endpoint = new NavigationEndpoint_default(data.endpoint || data.navigationEndpoint);
    this.tooltip = data.tooltip;
    if (Reflect.has(data, "status")) {
      this.status = data.status;
    }
  }
  get disabled() {
    return this.status === "FILTER_STATUS_DISABLED";
  }
  get selected() {
    return this.status === "FILTER_STATUS_SELECTED";
  }
};
__name(SearchFilter, "SearchFilter");
SearchFilter.type = "SearchFilter";
var SearchFilter_default = SearchFilter;

// dist/src/parser/classes/SearchFilterGroup.js
var SearchFilterGroup = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.filters = parser_exports.parseArray(data.filters, SearchFilter_default);
  }
};
__name(SearchFilterGroup, "SearchFilterGroup");
SearchFilterGroup.type = "SearchFilterGroup";
var SearchFilterGroup_default = SearchFilterGroup;

// dist/src/parser/classes/SearchFilterOptionsDialog.js
var SearchFilterOptionsDialog = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.groups = parser_exports.parseArray(data.groups, SearchFilterGroup_default);
  }
};
__name(SearchFilterOptionsDialog, "SearchFilterOptionsDialog");
SearchFilterOptionsDialog.type = "SearchFilterOptionsDialog";
var SearchFilterOptionsDialog_default = SearchFilterOptionsDialog;

// dist/src/parser/classes/SearchHeader.js
var SearchHeader = class extends YTNode {
  constructor(data) {
    super();
    this.chip_bar = parser_exports.parseItem(data.chipBar, ChipCloud_default);
    this.search_filter_button = parser_exports.parseItem(data.searchFilterButton, Button_default);
  }
};
__name(SearchHeader, "SearchHeader");
SearchHeader.type = "SearchHeader";
var SearchHeader_default = SearchHeader;

// dist/src/parser/classes/SearchSubMenu.js
var SearchSubMenu = class extends YTNode {
  constructor(data) {
    super();
    if (Reflect.has(data, "title"))
      this.title = new Text(data.title);
    if (Reflect.has(data, "groups"))
      this.groups = parser_default.parseArray(data.groups, SearchFilterGroup_default);
    if (Reflect.has(data, "button"))
      this.button = parser_default.parseItem(data.button, ToggleButton_default);
  }
};
__name(SearchSubMenu, "SearchSubMenu");
SearchSubMenu.type = "SearchSubMenu";
var SearchSubMenu_default = SearchSubMenu;

// dist/src/parser/classes/SearchSuggestionsSection.js
var SearchSuggestionsSection = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parseArray(data.contents);
  }
};
__name(SearchSuggestionsSection, "SearchSuggestionsSection");
SearchSuggestionsSection.type = "SearchSuggestionsSection";
var SearchSuggestionsSection_default = SearchSuggestionsSection;

// dist/src/parser/classes/SecondarySearchContainer.js
var SecondarySearchContainer = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parseArray(data.contents);
  }
};
__name(SecondarySearchContainer, "SecondarySearchContainer");
SecondarySearchContainer.type = "SecondarySearchContainer";
var SecondarySearchContainer_default = SecondarySearchContainer;

// dist/src/parser/classes/SegmentedLikeDislikeButton.js
var SegmentedLikeDislikeButton = class extends YTNode {
  constructor(data) {
    super();
    this.like_button = parser_default.parseItem(data.likeButton, [ToggleButton_default, Button_default]);
    this.dislike_button = parser_default.parseItem(data.dislikeButton, [ToggleButton_default, Button_default]);
  }
};
__name(SegmentedLikeDislikeButton, "SegmentedLikeDislikeButton");
SegmentedLikeDislikeButton.type = "SegmentedLikeDislikeButton";
var SegmentedLikeDislikeButton_default = SegmentedLikeDislikeButton;

// dist/src/parser/classes/SettingBoolean.js
var SettingBoolean = class extends YTNode {
  constructor(data) {
    super();
    if (Reflect.has(data, "title")) {
      this.title = new Text(data.title);
    }
    if (Reflect.has(data, "summary")) {
      this.summary = new Text(data.summary);
    }
    if (Reflect.has(data, "enableServiceEndpoint")) {
      this.enable_endpoint = new NavigationEndpoint_default(data.enableServiceEndpoint);
    }
    if (Reflect.has(data, "disableServiceEndpoint")) {
      this.disable_endpoint = new NavigationEndpoint_default(data.disableServiceEndpoint);
    }
    this.item_id = data.itemId;
  }
};
__name(SettingBoolean, "SettingBoolean");
SettingBoolean.type = "SettingBoolean";
var SettingBoolean_default = SettingBoolean;

// dist/src/parser/classes/SettingsCheckbox.js
var SettingsCheckbox = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.help_text = new Text(data.helpText);
    this.enabled = data.enabled;
    this.disabled = data.disabled;
    this.id = data.id;
  }
};
__name(SettingsCheckbox, "SettingsCheckbox");
SettingsCheckbox.type = "SettingsCheckbox";
var SettingsCheckbox_default = SettingsCheckbox;

// dist/src/parser/classes/SettingsSwitch.js
var SettingsSwitch = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.enabled = data.enabled;
    this.enable_endpoint = new NavigationEndpoint_default(data.enableServiceEndpoint);
    this.disable_endpoint = new NavigationEndpoint_default(data.disableServiceEndpoint);
  }
};
__name(SettingsSwitch, "SettingsSwitch");
SettingsSwitch.type = "SettingsSwitch";
var SettingsSwitch_default = SettingsSwitch;

// dist/src/parser/classes/SettingsOptions.js
var SettingsOptions = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    if (Reflect.has(data, "text")) {
      this.text = new Text(data.text).toString();
    }
    if (Reflect.has(data, "options")) {
      this.options = parser_default.parseArray(data.options, [
        SettingsSwitch_default,
        Dropdown_default,
        CopyLink_default,
        SettingsCheckbox_default,
        ChannelOptions_default
      ]);
    }
  }
};
__name(SettingsOptions, "SettingsOptions");
SettingsOptions.type = "SettingsOptions";
var SettingsOptions_default = SettingsOptions;

// dist/src/parser/classes/SettingsSidebar.js
var SettingsSidebar = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.items = parser_default.parseArray(data.items, CompactLink_default);
  }
  get contents() {
    return this.items;
  }
};
__name(SettingsSidebar, "SettingsSidebar");
SettingsSidebar.type = "SettingsSidebar";
var SettingsSidebar_default = SettingsSidebar;

// dist/src/parser/classes/SharedPost.js
var SharedPost = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.content = new Text(data.content);
    this.published = new Text(data.publishedTimeText);
    this.menu = parseItem(data.actionMenu, Menu_default);
    this.original_post = parseItem(data.originalPost, BackstagePost_default);
    this.id = data.postId;
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.expand_button = parseItem(data.expandButton, Button_default);
    this.author = new Author_default(data.displayName, void 0);
  }
};
__name(SharedPost, "SharedPost");
SharedPost.type = "SharedPost";
var SharedPost_default = SharedPost;

// dist/src/parser/classes/Shelf.js
var Shelf = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    if (Reflect.has(data, "endpoint")) {
      this.endpoint = new NavigationEndpoint_default(data.endpoint);
    }
    this.content = parser_default.parseItem(data.content);
    if (Reflect.has(data, "icon")) {
      this.icon_type = data.icon.iconType;
    }
    if (Reflect.has(data, "menu")) {
      this.menu = parser_default.parseItem(data.menu);
    }
    if (Reflect.has(data, "playAllButton")) {
      this.play_all_button = parser_default.parseItem(data.playAllButton, Button_default);
    }
  }
};
__name(Shelf, "Shelf");
Shelf.type = "Shelf";
var Shelf_default = Shelf;

// dist/src/parser/classes/ShowingResultsFor.js
var ShowingResultsFor = class extends YTNode {
  constructor(data) {
    super();
    this.corrected_query = new Text(data.correctedQuery);
    this.original_query = new Text(data.originalQuery);
    this.corrected_query_endpoint = new NavigationEndpoint_default(data.correctedQueryEndpoint);
    this.original_query_endpoint = new NavigationEndpoint_default(data.originalQueryEndpoint);
    this.search_instead_for = new Text(data.searchInsteadFor);
    this.showing_results_for = new Text(data.showingResultsFor);
  }
};
__name(ShowingResultsFor, "ShowingResultsFor");
ShowingResultsFor.type = "ShowingResultsFor";
var ShowingResultsFor_default = ShowingResultsFor;

// dist/src/parser/classes/SimpleCardContent.js
var SimpleCardContent = class extends YTNode {
  constructor(data) {
    super();
    this.image = Thumbnail.fromResponse(data.image);
    this.title = new Text(data.title);
    this.display_domain = new Text(data.displayDomain);
    this.show_link_icon = data.showLinkIcon;
    this.call_to_action = new Text(data.callToAction);
    this.endpoint = new NavigationEndpoint_default(data.command);
  }
};
__name(SimpleCardContent, "SimpleCardContent");
SimpleCardContent.type = "SimpleCardContent";
var SimpleCardContent_default = SimpleCardContent;

// dist/src/parser/classes/SimpleCardTeaser.js
var SimpleCardTeaser = class extends YTNode {
  constructor(data) {
    super();
    this.message = new Text(data.message);
    this.prominent = data.prominent;
  }
};
__name(SimpleCardTeaser, "SimpleCardTeaser");
SimpleCardTeaser.type = "SimpleCardTeaser";
var SimpleCardTeaser_default = SimpleCardTeaser;

// dist/src/parser/classes/SimpleTextSection.js
var SimpleTextSection = class extends YTNode {
  constructor(data) {
    super();
    this.lines = data.lines.map((line) => new Text(line));
    this.style = data.layoutStyle;
  }
};
__name(SimpleTextSection, "SimpleTextSection");
SimpleTextSection.type = "SimpleTextSection";
var SimpleTextSection_default = SimpleTextSection;

// dist/src/parser/classes/SingleActionEmergencySupport.js
var SingleActionEmergencySupport = class extends YTNode {
  constructor(data) {
    super();
    this.action_text = new Text(data.actionText);
    this.nav_text = new Text(data.navigationText);
    this.details = new Text(data.detailsText);
    this.icon_type = data.icon.iconType;
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
  }
};
__name(SingleActionEmergencySupport, "SingleActionEmergencySupport");
SingleActionEmergencySupport.type = "SingleActionEmergencySupport";
var SingleActionEmergencySupport_default = SingleActionEmergencySupport;

// dist/src/parser/classes/Tab.js
var Tab = class extends YTNode {
  constructor(data) {
    super();
    this.title = data.title || "N/A";
    this.selected = !!data.selected;
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
    this.content = parser_default.parseItem(data.content, [SectionList_default, MusicQueue_default, RichGrid_default]);
  }
};
__name(Tab, "Tab");
Tab.type = "Tab";
var Tab_default = Tab;

// dist/src/parser/classes/SingleColumnBrowseResults.js
var SingleColumnBrowseResults = class extends YTNode {
  constructor(data) {
    super();
    this.tabs = parser_default.parseArray(data.tabs, Tab_default);
  }
};
__name(SingleColumnBrowseResults, "SingleColumnBrowseResults");
SingleColumnBrowseResults.type = "SingleColumnBrowseResults";
var SingleColumnBrowseResults_default = SingleColumnBrowseResults;

// dist/src/parser/classes/SingleColumnMusicWatchNextResults.js
var SingleColumnMusicWatchNextResults = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parse(data);
  }
};
__name(SingleColumnMusicWatchNextResults, "SingleColumnMusicWatchNextResults");
SingleColumnMusicWatchNextResults.type = "SingleColumnMusicWatchNextResults";
var SingleColumnMusicWatchNextResults_default = SingleColumnMusicWatchNextResults;

// dist/src/parser/classes/SingleHeroImage.js
var SingleHeroImage = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.style = data.style;
  }
};
__name(SingleHeroImage, "SingleHeroImage");
SingleHeroImage.type = "SingleHeroImage";
var SingleHeroImage_default = SingleHeroImage;

// dist/src/parser/classes/SlimOwner.js
var SlimOwner = class extends YTNode {
  constructor(data) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.title = new Text(data.title);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.subscribe_button = parser_default.parseItem(data.subscribeButton, SubscribeButton_default);
  }
};
__name(SlimOwner, "SlimOwner");
SlimOwner.type = "SlimOwner";
var SlimOwner_default = SlimOwner;

// dist/src/parser/classes/SlimVideoMetadata.js
var SlimVideoMetadata = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.collapsed_subtitle = new Text(data.collapsedSubtitle);
    this.expanded_subtitle = new Text(data.expandedSubtitle);
    this.owner = parser_default.parseItem(data.owner);
    this.description = new Text(data.description);
    this.video_id = data.videoId;
    this.date = new Text(data.dateText);
  }
};
__name(SlimVideoMetadata, "SlimVideoMetadata");
SlimVideoMetadata.type = "SlimVideoMetadata";
var SlimVideoMetadata_default = SlimVideoMetadata;

// dist/src/parser/classes/SubFeedOption.js
var SubFeedOption = class extends YTNode {
  constructor(data) {
    super();
    this.name = new Text(data.name);
    this.is_selected = data.isSelected;
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
  }
};
__name(SubFeedOption, "SubFeedOption");
SubFeedOption.type = "SubFeedOption";
var SubFeedOption_default = SubFeedOption;

// dist/src/parser/classes/SubFeedSelector.js
var SubFeedSelector = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.options = parser_default.parseArray(data.options, SubFeedOption_default);
  }
};
__name(SubFeedSelector, "SubFeedSelector");
SubFeedSelector.type = "SubFeedSelector";
var SubFeedSelector_default = SubFeedSelector;

// dist/src/parser/classes/Tabbed.js
var Tabbed = class extends YTNode {
  constructor(data) {
    super();
    this.contents = parser_default.parse(data);
  }
};
__name(Tabbed, "Tabbed");
Tabbed.type = "Tabbed";
var Tabbed_default = Tabbed;

// dist/src/parser/classes/TabbedSearchResults.js
var TabbedSearchResults = class extends YTNode {
  constructor(data) {
    super();
    this.tabs = parser_default.parseArray(data.tabs, Tab_default);
  }
};
__name(TabbedSearchResults, "TabbedSearchResults");
TabbedSearchResults.type = "TabbedSearchResults";
var TabbedSearchResults_default = TabbedSearchResults;

// dist/src/parser/classes/TextHeader.js
var TextHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.style = data.style;
  }
};
__name(TextHeader, "TextHeader");
TextHeader.type = "TextHeader";
var TextHeader_default = TextHeader;

// dist/src/parser/classes/ThumbnailLandscapePortrait.js
var ThumbnailLandscapePortrait = class extends YTNode {
  constructor(data) {
    super();
    this.landscape = Thumbnail.fromResponse(data.landscape);
    this.portrait = Thumbnail.fromResponse(data.portrait);
  }
};
__name(ThumbnailLandscapePortrait, "ThumbnailLandscapePortrait");
ThumbnailLandscapePortrait.type = "ThumbnailLandscapePortrait";
var ThumbnailLandscapePortrait_default = ThumbnailLandscapePortrait;

// dist/src/parser/classes/ThumbnailOverlayEndorsement.js
var ThumbnailOverlayEndorsement = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text(data.text).toString();
  }
};
__name(ThumbnailOverlayEndorsement, "ThumbnailOverlayEndorsement");
ThumbnailOverlayEndorsement.type = "ThumbnailOverlayEndorsement";
var ThumbnailOverlayEndorsement_default = ThumbnailOverlayEndorsement;

// dist/src/parser/classes/ThumbnailOverlayHoverText.js
var ThumbnailOverlayHoverText = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text(data.text);
    this.icon_type = data.icon.iconType;
  }
};
__name(ThumbnailOverlayHoverText, "ThumbnailOverlayHoverText");
ThumbnailOverlayHoverText.type = "ThumbnailOverlayHoverText";
var ThumbnailOverlayHoverText_default = ThumbnailOverlayHoverText;

// dist/src/parser/classes/ThumbnailOverlayInlineUnplayable.js
var ThumbnailOverlayInlineUnplayable = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text(data.text).toString();
    this.icon_type = data.icon.iconType;
  }
};
__name(ThumbnailOverlayInlineUnplayable, "ThumbnailOverlayInlineUnplayable");
ThumbnailOverlayInlineUnplayable.type = "ThumbnailOverlayInlineUnplayable";
var ThumbnailOverlayInlineUnplayable_default = ThumbnailOverlayInlineUnplayable;

// dist/src/parser/classes/ThumbnailOverlayLoadingPreview.js
var ThumbnailOverlayLoadingPreview = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text(data.text);
  }
};
__name(ThumbnailOverlayLoadingPreview, "ThumbnailOverlayLoadingPreview");
ThumbnailOverlayLoadingPreview.type = "ThumbnailOverlayLoadingPreview";
var ThumbnailOverlayLoadingPreview_default = ThumbnailOverlayLoadingPreview;

// dist/src/parser/classes/ThumbnailOverlayNowPlaying.js
var ThumbnailOverlayNowPlaying = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text(data.text).toString();
  }
};
__name(ThumbnailOverlayNowPlaying, "ThumbnailOverlayNowPlaying");
ThumbnailOverlayNowPlaying.type = "ThumbnailOverlayNowPlaying";
var ThumbnailOverlayNowPlaying_default = ThumbnailOverlayNowPlaying;

// dist/src/parser/classes/ThumbnailOverlayPinking.js
var ThumbnailOverlayPinking = class extends YTNode {
  constructor(data) {
    super();
    this.hack = data.hack;
  }
};
__name(ThumbnailOverlayPinking, "ThumbnailOverlayPinking");
ThumbnailOverlayPinking.type = "ThumbnailOverlayPinking";
var ThumbnailOverlayPinking_default = ThumbnailOverlayPinking;

// dist/src/parser/classes/ThumbnailOverlayPlaybackStatus.js
var ThumbnailOverlayPlaybackStatus = class extends YTNode {
  constructor(data) {
    super();
    this.texts = data.texts.map((text) => new Text(text));
  }
};
__name(ThumbnailOverlayPlaybackStatus, "ThumbnailOverlayPlaybackStatus");
ThumbnailOverlayPlaybackStatus.type = "ThumbnailOverlayPlaybackStatus";
var ThumbnailOverlayPlaybackStatus_default = ThumbnailOverlayPlaybackStatus;

// dist/src/parser/classes/ThumbnailOverlayResumePlayback.js
var ThumbnailOverlayResumePlayback = class extends YTNode {
  constructor(data) {
    super();
    this.percent_duration_watched = data.percentDurationWatched;
  }
};
__name(ThumbnailOverlayResumePlayback, "ThumbnailOverlayResumePlayback");
ThumbnailOverlayResumePlayback.type = "ThumbnailOverlayResumePlayback";
var ThumbnailOverlayResumePlayback_default = ThumbnailOverlayResumePlayback;

// dist/src/parser/classes/ThumbnailOverlaySidePanel.js
var ThumbnailOverlaySidePanel = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text(data.text);
    this.icon_type = data.icon.iconType;
  }
};
__name(ThumbnailOverlaySidePanel, "ThumbnailOverlaySidePanel");
ThumbnailOverlaySidePanel.type = "ThumbnailOverlaySidePanel";
var ThumbnailOverlaySidePanel_default = ThumbnailOverlaySidePanel;

// dist/src/parser/classes/ThumbnailOverlayToggleButton.js
var ThumbnailOverlayToggleButton = class extends YTNode {
  constructor(data) {
    super();
    if (Reflect.has(data, "isToggled")) {
      this.is_toggled = data.isToggled;
    }
    this.icon_type = {
      toggled: data.toggledIcon.iconType,
      untoggled: data.untoggledIcon.iconType
    };
    this.tooltip = {
      toggled: data.toggledTooltip,
      untoggled: data.untoggledTooltip
    };
    this.toggled_endpoint = new NavigationEndpoint_default(data.toggledServiceEndpoint);
    this.untoggled_endpoint = new NavigationEndpoint_default(data.untoggledServiceEndpoint);
  }
};
__name(ThumbnailOverlayToggleButton, "ThumbnailOverlayToggleButton");
ThumbnailOverlayToggleButton.type = "ThumbnailOverlayToggleButton";
var ThumbnailOverlayToggleButton_default = ThumbnailOverlayToggleButton;

// dist/src/parser/classes/TimedMarkerDecoration.js
var TimedMarkerDecoration = class extends YTNode {
  constructor(data) {
    super();
    this.visible_time_range_start_millis = data.visibleTimeRangeStartMillis;
    this.visible_time_range_end_millis = data.visibleTimeRangeEndMillis;
    this.decoration_time_millis = data.decorationTimeMillis;
    this.label = new Text(data.label);
    this.icon = data.icon;
  }
};
__name(TimedMarkerDecoration, "TimedMarkerDecoration");
TimedMarkerDecoration.type = "TimedMarkerDecoration";
var TimedMarkerDecoration_default = TimedMarkerDecoration;

// dist/src/parser/classes/TitleAndButtonListHeader.js
var TitleAndButtonListHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
  }
};
__name(TitleAndButtonListHeader, "TitleAndButtonListHeader");
TitleAndButtonListHeader.type = "TitleAndButtonListHeader";
var TitleAndButtonListHeader_default = TitleAndButtonListHeader;

// dist/src/parser/classes/ToggleMenuServiceItem.js
var ToggleMenuServiceItem = class extends YTNode {
  constructor(data) {
    super();
    this.text = new Text(data.defaultText);
    this.toggled_text = new Text(data.toggledText);
    this.icon_type = data.defaultIcon.iconType;
    this.toggled_icon_type = data.toggledIcon.iconType;
    this.default_endpoint = new NavigationEndpoint_default(data.defaultServiceEndpoint);
    this.toggled_endpoint = new NavigationEndpoint_default(data.toggledServiceEndpoint);
  }
};
__name(ToggleMenuServiceItem, "ToggleMenuServiceItem");
ToggleMenuServiceItem.type = "ToggleMenuServiceItem";
var ToggleMenuServiceItem_default = ToggleMenuServiceItem;

// dist/src/parser/classes/Tooltip.js
var Tooltip = class extends YTNode {
  constructor(data) {
    super();
    this.promo_config = {
      promo_id: data.promoConfig.promoId,
      impression_endpoints: data.promoConfig.impressionEndpoints.map((endpoint) => new NavigationEndpoint_default(endpoint)),
      accept: new NavigationEndpoint_default(data.promoConfig.acceptCommand),
      dismiss: new NavigationEndpoint_default(data.promoConfig.dismissCommand)
    };
    this.target_id = data.targetId;
    this.details = new Text(data.detailsText);
    this.suggested_position = data.suggestedPosition.type;
    this.dismiss_stratedy = data.dismissStrategy.type;
    this.dwell_time_ms = parseInt(data.dwellTimeMs);
  }
};
__name(Tooltip, "Tooltip");
Tooltip.type = "Tooltip";
var Tooltip_default = Tooltip;

// dist/src/parser/classes/TopicChannelDetails.js
var TopicChannelDetails = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    this.title = new Text(data.title);
    this.avatar = Thumbnail.fromResponse((_a4 = data.thumbnail) !== null && _a4 !== void 0 ? _a4 : data.avatar);
    this.subtitle = new Text(data.subtitle);
    this.subscribe_button = parser_default.parseItem(data.subscribeButton, SubscribeButton_default);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
  }
};
__name(TopicChannelDetails, "TopicChannelDetails");
TopicChannelDetails.type = "TopicChannelDetails";
var TopicChannelDetails_default = TopicChannelDetails;

// dist/src/parser/classes/TwoColumnBrowseResults.js
var TwoColumnBrowseResults = class extends YTNode {
  constructor(data) {
    super();
    this.tabs = parser_default.parse(data.tabs);
    this.secondary_contents = parser_default.parse(data.secondaryContents);
  }
};
__name(TwoColumnBrowseResults, "TwoColumnBrowseResults");
TwoColumnBrowseResults.type = "TwoColumnBrowseResults";
var TwoColumnBrowseResults_default = TwoColumnBrowseResults;

// dist/src/parser/classes/TwoColumnSearchResults.js
var TwoColumnSearchResults = class extends YTNode {
  constructor(data) {
    super();
    this.primary_contents = parser_default.parse(data.primaryContents);
    this.secondary_contents = parser_default.parse(data.secondaryContents);
  }
};
__name(TwoColumnSearchResults, "TwoColumnSearchResults");
TwoColumnSearchResults.type = "TwoColumnSearchResults";
var TwoColumnSearchResults_default = TwoColumnSearchResults;

// dist/src/parser/classes/TwoColumnWatchNextResults.js
var import_tslib6 = require("tslib");
var _TwoColumnWatchNextResults_instances;
var _TwoColumnWatchNextResults_parseAutoplaySet;
var TwoColumnWatchNextResults = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c, _d, _e;
    super();
    _TwoColumnWatchNextResults_instances.add(this);
    this.results = parser_default.parseArray((_a4 = data.results) === null || _a4 === void 0 ? void 0 : _a4.results.contents);
    this.secondary_results = parser_default.parseArray((_b2 = data.secondaryResults) === null || _b2 === void 0 ? void 0 : _b2.secondaryResults.results);
    this.conversation_bar = parser_default.parseItem(data === null || data === void 0 ? void 0 : data.conversationBar);
    const playlistData = (_c = data.playlist) === null || _c === void 0 ? void 0 : _c.playlist;
    if (playlistData) {
      this.playlist = {
        id: playlistData.playlistId,
        title: playlistData.title,
        author: ((_d = playlistData.shortBylineText) === null || _d === void 0 ? void 0 : _d.simpleText) ? new Text(playlistData.shortBylineText) : new Author_default(playlistData.longBylineText),
        contents: parser_default.parseArray(playlistData.contents),
        current_index: playlistData.currentIndex,
        is_infinite: !!playlistData.isInfinite,
        menu: parser_default.parseItem(playlistData.menu, Menu_default)
      };
    }
    const autoplayData = (_e = data.autoplay) === null || _e === void 0 ? void 0 : _e.autoplay;
    if (autoplayData) {
      this.autoplay = {
        sets: autoplayData.sets.map((set) => (0, import_tslib6.__classPrivateFieldGet)(this, _TwoColumnWatchNextResults_instances, "m", _TwoColumnWatchNextResults_parseAutoplaySet).call(this, set))
      };
      if (autoplayData.modifiedSets) {
        this.autoplay.modified_sets = autoplayData.modifiedSets.map((set) => (0, import_tslib6.__classPrivateFieldGet)(this, _TwoColumnWatchNextResults_instances, "m", _TwoColumnWatchNextResults_parseAutoplaySet).call(this, set));
      }
      if (autoplayData.countDownSecs) {
        this.autoplay.count_down_secs = autoplayData.countDownSecs;
      }
    }
  }
};
__name(TwoColumnWatchNextResults, "TwoColumnWatchNextResults");
_TwoColumnWatchNextResults_instances = /* @__PURE__ */ new WeakSet(), _TwoColumnWatchNextResults_parseAutoplaySet = /* @__PURE__ */ __name(function _TwoColumnWatchNextResults_parseAutoplaySet2(data) {
  const result = {
    autoplay_video: new NavigationEndpoint_default(data.autoplayVideo)
  };
  if (data.nextButtonVideo) {
    result.next_button_video = new NavigationEndpoint_default(data.nextButtonVideo);
  }
  return result;
}, "_TwoColumnWatchNextResults_parseAutoplaySet");
TwoColumnWatchNextResults.type = "TwoColumnWatchNextResults";
var TwoColumnWatchNextResults_default = TwoColumnWatchNextResults;

// dist/src/parser/classes/UniversalWatchCard.js
var UniversalWatchCard = class extends YTNode {
  constructor(data) {
    super();
    this.header = parser_default.parseItem(data.header);
    this.call_to_action = parser_default.parseItem(data.callToAction);
    this.sections = parser_default.parseArray(data.sections);
    if (Reflect.has(data, "collapsedLabel")) {
      this.collapsed_label = new Text(data.collapsedLabel);
    }
  }
};
__name(UniversalWatchCard, "UniversalWatchCard");
UniversalWatchCard.type = "UniversalWatchCard";
var UniversalWatchCard_default = UniversalWatchCard;

// dist/src/parser/classes/UpsellDialog.js
var UpsellDialog = class extends YTNode {
  constructor(data) {
    super();
    this.message_title = new Text(data.dialogMessageTitle);
    this.message_text = new Text(data.dialogMessageText);
    this.action_button = parser_default.parseItem(data.actionButton, Button_default);
    this.dismiss_button = parser_default.parseItem(data.dismissButton, Button_default);
    this.is_visible = data.isVisible;
  }
};
__name(UpsellDialog, "UpsellDialog");
UpsellDialog.type = "UpsellDialog";
var UpsellDialog_default = UpsellDialog;

// dist/src/parser/classes/VerticalList.js
var VerticalList = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parseArray(data.items);
    this.collapsed_item_count = data.collapsedItemCount;
    this.collapsed_state_button_text = new Text(data.collapsedStateButtonText);
  }
  get contents() {
    return this.items;
  }
};
__name(VerticalList, "VerticalList");
VerticalList.type = "VerticalList";
var VerticalList_default = VerticalList;

// dist/src/parser/classes/VerticalWatchCardList.js
var VerticalWatchCardList = class extends YTNode {
  constructor(data) {
    super();
    this.items = parser_default.parseArray(data.items);
    this.view_all_text = new Text(data.viewAllText);
    this.view_all_endpoint = new NavigationEndpoint_default(data.viewAllEndpoint);
  }
  get contents() {
    return this.items;
  }
};
__name(VerticalWatchCardList, "VerticalWatchCardList");
VerticalWatchCardList.type = "VerticalWatchCardList";
var VerticalWatchCardList_default = VerticalWatchCardList;

// dist/src/parser/classes/VideoInfoCardContent.js
var VideoInfoCardContent = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.videoTitle);
    this.channel_name = new Text(data.channelName);
    this.view_count = new Text(data.viewCountText);
    this.video_thumbnails = Thumbnail.fromResponse(data.videoThumbnail);
    this.duration = new Text(data.lengthString);
    this.endpoint = new NavigationEndpoint_default(data.action);
  }
};
__name(VideoInfoCardContent, "VideoInfoCardContent");
VideoInfoCardContent.type = "VideoInfoCardContent";
var VideoInfoCardContent_default = VideoInfoCardContent;

// dist/src/parser/classes/VideoOwner.js
var VideoOwner = class extends YTNode {
  constructor(data) {
    super();
    this.subscription_button = data.subscriptionButton;
    this.subscriber_count = new Text(data.subscriberCountText);
    this.author = new Author_default(Object.assign(Object.assign({}, data.title), { navigationEndpoint: data.navigationEndpoint }), data.badges, data.thumbnail);
  }
};
__name(VideoOwner, "VideoOwner");
VideoOwner.type = "VideoOwner";
var VideoOwner_default = VideoOwner;

// dist/src/parser/classes/VideoPrimaryInfo.js
var VideoPrimaryInfo = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c, _d;
    super();
    this.title = new Text(data.title);
    if (Reflect.has(data, "superTitleLink")) {
      this.super_title_link = new Text(data.superTitleLink);
    }
    this.view_count = new Text((_b2 = (_a4 = data.viewCount) === null || _a4 === void 0 ? void 0 : _a4.videoViewCountRenderer) === null || _b2 === void 0 ? void 0 : _b2.viewCount);
    this.short_view_count = new Text((_d = (_c = data.viewCount) === null || _c === void 0 ? void 0 : _c.videoViewCountRenderer) === null || _d === void 0 ? void 0 : _d.shortViewCount);
    this.badges = parser_default.parseArray(data.badges, MetadataBadge_default);
    this.published = new Text(data.dateText);
    this.relative_date = new Text(data.relativeDateText);
    this.menu = parser_default.parseItem(data.videoActions, Menu_default);
  }
};
__name(VideoPrimaryInfo, "VideoPrimaryInfo");
VideoPrimaryInfo.type = "VideoPrimaryInfo";
var VideoPrimaryInfo_default = VideoPrimaryInfo;

// dist/src/parser/classes/VideoSecondaryInfo.js
var VideoSecondaryInfo = class extends YTNode {
  constructor(data) {
    super();
    this.owner = parser_default.parseItem(data.owner, VideoOwner_default);
    this.description = new Text(data.description);
    if (Reflect.has(data, "attributedDescription")) {
      this.description = Text.fromAttributed(data.attributedDescription);
    }
    this.subscribe_button = parser_default.parseItem(data.subscribeButton, [SubscribeButton_default, Button_default]);
    this.metadata = parser_default.parseItem(data.metadataRowContainer, MetadataRowContainer_default);
    this.show_more_text = data.showMoreText;
    this.show_less_text = data.showLessText;
    this.default_expanded = data.defaultExpanded;
    this.description_collapsed_lines = data.descriptionCollapsedLines;
  }
};
__name(VideoSecondaryInfo, "VideoSecondaryInfo");
VideoSecondaryInfo.type = "VideoSecondaryInfo";
var VideoSecondaryInfo_default = VideoSecondaryInfo;

// dist/src/parser/classes/WatchCardCompactVideo.js
var WatchCardCompactVideo = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: timeToSeconds(data.lengthText.simpleText)
    };
    this.style = data.style;
  }
};
__name(WatchCardCompactVideo, "WatchCardCompactVideo");
WatchCardCompactVideo.type = "WatchCardCompactVideo";
var WatchCardCompactVideo_default = WatchCardCompactVideo;

// dist/src/parser/classes/WatchCardHeroVideo.js
var WatchCardHeroVideo = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.call_to_action_button = parser_default.parseItem(data.callToActionButton);
    this.hero_image = parser_default.parseItem(data.heroImage);
    this.label = ((_a4 = data.lengthText) === null || _a4 === void 0 ? void 0 : _a4.accessibility.accessibilityData.label) || "";
  }
};
__name(WatchCardHeroVideo, "WatchCardHeroVideo");
WatchCardHeroVideo.type = "WatchCardHeroVideo";
var WatchCardHeroVideo_default = WatchCardHeroVideo;

// dist/src/parser/classes/WatchCardRichHeader.js
var WatchCardRichHeader = class extends YTNode {
  constructor(data) {
    super();
    this.title = new Text(data.title);
    this.title_endpoint = new NavigationEndpoint_default(data.titleNavigationEndpoint);
    this.subtitle = new Text(data.subtitle);
    this.author = new Author_default(data, data.titleBadge ? [data.titleBadge] : null, data.avatar);
    this.author.name = this.title.toString();
    this.style = data.style;
  }
};
__name(WatchCardRichHeader, "WatchCardRichHeader");
WatchCardRichHeader.type = "WatchCardRichHeader";
var WatchCardRichHeader_default = WatchCardRichHeader;

// dist/src/parser/classes/WatchCardSectionSequence.js
var WatchCardSectionSequence = class extends YTNode {
  constructor(data) {
    super();
    this.lists = parser_default.parseArray(data.lists);
  }
};
__name(WatchCardSectionSequence, "WatchCardSectionSequence");
WatchCardSectionSequence.type = "WatchCardSectionSequence";
var WatchCardSectionSequence_default = WatchCardSectionSequence;

// dist/src/parser/classes/WatchNextTabbedResults.js
var WatchNextTabbedResults = class extends TwoColumnBrowseResults_default {
  constructor(data) {
    super(data);
  }
};
__name(WatchNextTabbedResults, "WatchNextTabbedResults");
WatchNextTabbedResults.type = "WatchNextTabbedResults";
var WatchNextTabbedResults_default = WatchNextTabbedResults;

// dist/src/parser/classes/ytkids/AnchoredSection.js
var AnchoredSection = class extends YTNode {
  constructor(data) {
    var _a4, _b2;
    super();
    this.title = data.title;
    this.content = parser_default.parseItem(data.content, SectionList_default);
    this.endpoint = new NavigationEndpoint_default(data.navigationEndpoint);
    this.category_assets = {
      asset_key: (_a4 = data.categoryAssets) === null || _a4 === void 0 ? void 0 : _a4.assetKey,
      background_color: (_b2 = data.categoryAssets) === null || _b2 === void 0 ? void 0 : _b2.backgroundColor
    };
    this.category_type = data.categoryType;
  }
};
__name(AnchoredSection, "AnchoredSection");
AnchoredSection.type = "AnchoredSection";
var AnchoredSection_default = AnchoredSection;

// dist/src/parser/classes/ytkids/KidsCategoryTab.js
var KidsCategoryTab = class extends YTNode {
  constructor(data) {
    var _a4, _b2;
    super();
    this.title = new Text(data.title);
    this.category_assets = {
      asset_key: (_a4 = data.categoryAssets) === null || _a4 === void 0 ? void 0 : _a4.assetKey,
      background_color: (_b2 = data.categoryAssets) === null || _b2 === void 0 ? void 0 : _b2.backgroundColor
    };
    this.category_type = data.categoryType;
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
  }
};
__name(KidsCategoryTab, "KidsCategoryTab");
KidsCategoryTab.type = "KidsCategoryTab";
var KidsCategoryTab_default = KidsCategoryTab;

// dist/src/parser/classes/ytkids/KidsCategoriesHeader.js
var KidsCategoriesHeader = class extends YTNode {
  constructor(data) {
    super();
    this.category_tabs = parser_default.parseArray(data.categoryTabs, KidsCategoryTab_default);
    this.privacy_button = parser_default.parseItem(data.privacyButtonRenderer, Button_default);
  }
};
__name(KidsCategoriesHeader, "KidsCategoriesHeader");
KidsCategoriesHeader.type = "kidsCategoriesHeader";
var KidsCategoriesHeader_default = KidsCategoriesHeader;

// dist/src/parser/classes/ytkids/KidsHomeScreen.js
var KidsHomeScreen = class extends YTNode {
  constructor(data) {
    super();
    this.anchors = parser_default.parseArray(data.anchors, AnchoredSection_default);
  }
};
__name(KidsHomeScreen, "KidsHomeScreen");
KidsHomeScreen.type = "kidsHomeScreen";
var KidsHomeScreen_default = KidsHomeScreen;

// dist/src/parser/generator.js
var generator_exports = {};
__export(generator_exports, {
  camelToSnake: () => camelToSnake,
  createRuntimeClass: () => createRuntimeClass,
  generateRuntimeClass: () => generateRuntimeClass,
  generateTypescriptClass: () => generateTypescriptClass,
  inferType: () => inferType,
  introspect: () => introspect,
  isIgnoredKey: () => isIgnoredKey,
  isMiscType: () => isMiscType,
  isRenderer: () => isRenderer,
  isRendererList: () => isRendererList,
  mergeKeyInfo: () => mergeKeyInfo,
  parse: () => parse2,
  toParser: () => toParser,
  toTypeDeclaration: () => toTypeDeclaration
});
var import_tslib7 = require("tslib");
var IGNORED_KEYS = /* @__PURE__ */ new Set([
  "trackingParams",
  "accessibility",
  "accessibilityData"
]);
var RENDERER_EXAMPLES = {};
function camelToSnake(str) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}
__name(camelToSnake, "camelToSnake");
function inferType(key, value) {
  let return_value = false;
  if (typeof value === "object" && value != null) {
    if (return_value = isRenderer(value)) {
      RENDERER_EXAMPLES[return_value] = Reflect.get(value, Reflect.ownKeys(value)[0]);
      return {
        type: "renderer",
        renderers: [return_value],
        optional: false
      };
    }
    if (return_value = isRendererList(value)) {
      for (const [key2, value2] of Object.entries(return_value)) {
        RENDERER_EXAMPLES[key2] = value2;
      }
      return {
        type: "renderer_list",
        renderers: Object.keys(return_value),
        optional: false
      };
    }
    if (return_value = isMiscType(key, value)) {
      return return_value;
    }
  }
  const primative_type = typeof value;
  if (primative_type === "object")
    return {
      type: "object",
      keys: Object.entries(value).map(([key2, value2]) => [key2, inferType(key2, value2)]),
      optional: false
    };
  return {
    type: "primative",
    typeof: [primative_type],
    optional: false
  };
}
__name(inferType, "inferType");
function isRendererList(value) {
  const arr = Array.isArray(value);
  const is_list = arr && value.every((item) => isRenderer(item));
  return is_list ? Object.fromEntries(value.map((item) => {
    const key = Reflect.ownKeys(item)[0].toString();
    return [sanitizeClassName(key), item[key]];
  })) : false;
}
__name(isRendererList, "isRendererList");
function isMiscType(key, value) {
  if ((key.endsWith("Endpoint") || key.endsWith("Command") || key === "endpoint") && typeof value === "object" && value !== null) {
    return {
      type: "misc",
      endpoint: new NavigationEndpoint_default(value),
      optional: false,
      misc_type: "NavigationEndpoint"
    };
  }
  if (typeof value === "object" && value !== null && (Reflect.has(value, "simpleText") || Reflect.has(value, "runs"))) {
    const textNode = new Text(value);
    return {
      type: "misc",
      misc_type: "Text",
      optional: false,
      endpoint: textNode.endpoint,
      text: textNode.toString()
    };
  }
  if (typeof value === "object" && value !== null && Reflect.has(value, "thumbnails") && Array.isArray(Reflect.get(value, "thumbnails"))) {
    return {
      type: "misc",
      misc_type: "Thumbnail",
      optional: false
    };
  }
  return false;
}
__name(isMiscType, "isMiscType");
function isRenderer(value) {
  const is_object = typeof value === "object";
  if (!is_object)
    return false;
  const keys = Reflect.ownKeys(value);
  if (keys.length === 1 && keys[0].toString().includes("Renderer")) {
    return sanitizeClassName(keys[0].toString());
  }
  return false;
}
__name(isRenderer, "isRenderer");
function introspectKeysFirstPass(classdata) {
  if (typeof classdata !== "object" || classdata === null) {
    throw new InnertubeError("Generator: Cannot introspect non-object", {
      classdata
    });
  }
  const keys = Reflect.ownKeys(classdata).filter((key) => !isIgnoredKey(key)).filter((key) => typeof key === "string");
  return keys.map((key) => {
    const value = Reflect.get(classdata, key);
    const inferred_type = inferType(key, value);
    return [key, inferred_type];
  });
}
__name(introspectKeysFirstPass, "introspectKeysFirstPass");
function introspectKeysSecondPass(key_info) {
  var _a4;
  const channel_nav = key_info.filter(([, value]) => {
    var _a5;
    if (value.type !== "misc")
      return false;
    if (!(value.misc_type === "NavigationEndpoint" || value.misc_type === "Text"))
      return false;
    return ((_a5 = value.endpoint) === null || _a5 === void 0 ? void 0 : _a5.metadata.page_type) === "WEB_PAGE_TYPE_CHANNEL";
  });
  const most_probable_match = channel_nav.sort(([, a], [, b]) => {
    if (a.type !== "misc" || b.type !== "misc")
      return 0;
    if (a.misc_type !== "Text" || b.misc_type !== "Text")
      return 0;
    return b.text.length - a.text.length;
  });
  const excluded_keys = /* @__PURE__ */ new Set();
  const cannonical_channel_nav = most_probable_match[0];
  let author;
  if (cannonical_channel_nav) {
    excluded_keys.add(cannonical_channel_nav[0]);
    const keys = key_info.map(([key]) => key);
    const badges = keys.filter((key) => key.endsWith("Badges") || key === "badges");
    const likely_badges = badges.filter((key) => key.startsWith("owner") || key.startsWith("author"));
    const cannonical_badges = (_a4 = likely_badges[0]) !== null && _a4 !== void 0 ? _a4 : badges[0];
    const badge_key_info = key_info.find(([key]) => key === cannonical_badges);
    const is_badges = badge_key_info ? badge_key_info[1].type === "renderer_list" && Reflect.has(badge_key_info[1].renderers, "MetadataBadge") : false;
    if (is_badges && cannonical_badges)
      excluded_keys.add(cannonical_badges);
    author = {
      type: "misc",
      misc_type: "Author",
      optional: false,
      params: [
        cannonical_channel_nav[0],
        is_badges ? cannonical_badges : void 0
      ]
    };
  }
  if (author) {
    key_info.push(["author", author]);
  }
  return key_info.filter(([key]) => !excluded_keys.has(key));
}
__name(introspectKeysSecondPass, "introspectKeysSecondPass");
function introspect2(classdata) {
  const key_info = introspectKeysFirstPass(classdata);
  return introspectKeysSecondPass(key_info);
}
__name(introspect2, "introspect2");
function introspect(classdata) {
  const key_info = introspect2(classdata);
  const dependencies = /* @__PURE__ */ new Map();
  for (const [, value] of key_info) {
    if (value.type === "renderer" || value.type === "renderer_list")
      for (const renderer of value.renderers) {
        const example = RENDERER_EXAMPLES[renderer];
        if (example)
          dependencies.set(renderer, example);
      }
  }
  const unimplemented_dependencies = Array.from(dependencies).filter(([classname]) => !hasParser(classname));
  return {
    key_info,
    unimplemented_dependencies
  };
}
__name(introspect, "introspect");
function isIgnoredKey(key) {
  return typeof key === "string" && IGNORED_KEYS.has(key);
}
__name(isIgnoredKey, "isIgnoredKey");
function createRuntimeClass(classname, key_info, logger) {
  var _a4, _key_info;
  logger({
    error_type: "class_not_found",
    classname,
    key_info
  });
  const node = (_a4 = /* @__PURE__ */ __name(class extends YTNode {
    static set key_info(key_info2) {
      (0, import_tslib7.__classPrivateFieldSet)(this, _a4, new Map(key_info2), "f", _key_info);
    }
    static get key_info() {
      return [...(0, import_tslib7.__classPrivateFieldGet)(this, _a4, "f", _key_info).entries()];
    }
    constructor(data) {
      super();
      const { key_info: key_info2, unimplemented_dependencies } = introspect(data);
      const { resolved_key_info, changed_keys } = mergeKeyInfo(node.key_info, key_info2);
      const did_change = changed_keys.length > 0;
      if (did_change) {
        node.key_info = resolved_key_info;
        logger({
          error_type: "class_changed",
          classname,
          key_info: node.key_info,
          changed_keys
        });
      }
      for (const [name, data2] of unimplemented_dependencies)
        generateRuntimeClass(name, data2, logger);
      for (const [key, value] of key_info2) {
        let snake_key = camelToSnake(key);
        if (value.type === "misc" && value.misc_type === "NavigationEndpoint")
          snake_key = "endpoint";
        Reflect.set(this, snake_key, parse2(key, value, data));
      }
    }
  }, "_a"), (0, import_tslib7.__setFunctionName)(_a4, "node"), _a4.type = classname, _key_info = { value: /* @__PURE__ */ new Map() }, _a4);
  node.key_info = key_info;
  Object.defineProperty(node, "name", { value: classname, writable: false });
  return node;
}
__name(createRuntimeClass, "createRuntimeClass");
function generateRuntimeClass(classname, classdata, logger) {
  const { key_info, unimplemented_dependencies } = introspect(classdata);
  const JITNode = createRuntimeClass(classname, key_info, logger);
  addRuntimeParser(classname, JITNode);
  for (const [name, data] of unimplemented_dependencies)
    generateRuntimeClass(name, data, logger);
  return JITNode;
}
__name(generateRuntimeClass, "generateRuntimeClass");
function generateTypescriptClass(classname, key_info) {
  const props = [];
  const constructor_lines = [
    "super();"
  ];
  for (const [key, value] of key_info) {
    let snake_key = camelToSnake(key);
    if (value.type === "misc" && value.misc_type === "NavigationEndpoint")
      snake_key = "endpoint";
    props.push(`${snake_key}${value.optional ? "?" : ""}: ${toTypeDeclaration(value)};`);
    constructor_lines.push(`this.${snake_key} = ${toParser(key, value)};`);
  }
  return `class ${classname} extends YTNode {
  static type = '${classname}';

  ${props.join("\n  ")}

  constructor(data: RawNode) {
    ${constructor_lines.join("\n    ")}
  }
}
`;
}
__name(generateTypescriptClass, "generateTypescriptClass");
function toTypeDeclaration(inference_type, indentation = 0) {
  switch (inference_type.type) {
    case "renderer": {
      return `${inference_type.renderers.map((type) => `YTNodes.${type}`).join(" | ")} | null`;
    }
    case "renderer_list": {
      return `ObservedArray<${inference_type.renderers.map((type) => `YTNodes.${type}`).join(" | ")}> | null`;
    }
    case "object": {
      return `{
${inference_type.keys.map(([key, value]) => `${" ".repeat((indentation + 2) * 2)}${camelToSnake(key)}${value.optional ? "?" : ""}: ${toTypeDeclaration(value, indentation + 1)}`).join(",\n")}
${" ".repeat((indentation + 1) * 2)}}`;
    }
    case "misc":
      switch (inference_type.misc_type) {
        case "Thumbnail":
          return "Thumbnail[]";
        default:
          return inference_type.misc_type;
      }
    case "primative":
      return inference_type.typeof.join(" | ");
    case "unknown":
      return "/* TODO: determine correct type */ unknown";
  }
}
__name(toTypeDeclaration, "toTypeDeclaration");
function toParser(key, inference_type, key_path = ["data"], indentation = 1) {
  let parser = "undefined";
  switch (inference_type.type) {
    case "renderer":
      {
        parser = `Parser.parseItem(${key_path.join(".")}.${key}, [ ${inference_type.renderers.map((type) => `YTNodes.${type}`).join(", ")} ])`;
      }
      break;
    case "renderer_list":
      {
        parser = `Parser.parse(${key_path.join(".")}.${key}, true, [ ${inference_type.renderers.map((type) => `YTNodes.${type}`).join(", ")} ])`;
      }
      break;
    case "object":
      {
        const new_keypath = [...key_path, key];
        parser = `{
${inference_type.keys.map(([key2, value]) => `${" ".repeat((indentation + 2) * 2)}${camelToSnake(key2)}: ${toParser(key2, value, new_keypath, indentation + 1)}`).join(",\n")}
${" ".repeat((indentation + 1) * 2)}}`;
      }
      break;
    case "misc":
      switch (inference_type.misc_type) {
        case "Thumbnail":
          parser = `Thumbnail.fromResponse(${key_path.join(".")}.${key})`;
          break;
        case "Author": {
          const author_parser = `new Author(${key_path.join(".")}.${inference_type.params[0]}, ${inference_type.params[1] ? `${key_path.join(".")}.${inference_type.params[1]}` : "undefined"})`;
          if (inference_type.optional)
            return `Reflect.has(${key_path.join(".")}, '${inference_type.params[0]}') ? ${author_parser} : undefined`;
          return author_parser;
        }
        default:
          parser = `new ${inference_type.misc_type}(${key_path.join(".")}.${key})`;
          break;
      }
      if (parser === "undefined")
        throw new Error("Unreachable code reached! Switch missing case!");
      break;
    case "primative":
    case "unknown":
      parser = `${key_path.join(".")}.${key}`;
      break;
  }
  if (inference_type.optional)
    return `Reflect.has(${key_path.join(".")}, '${key}') ? ${parser} : undefined`;
  return parser;
}
__name(toParser, "toParser");
function accessDataFromKeyPath(root, key_path) {
  let data = root;
  for (const key of key_path)
    data = data[key];
  return data;
}
__name(accessDataFromKeyPath, "accessDataFromKeyPath");
function hasDataFromKeyPath(root, key_path) {
  let data = root;
  for (const key of key_path)
    if (!Reflect.has(data, key))
      return false;
    else
      data = data[key];
  return true;
}
__name(hasDataFromKeyPath, "hasDataFromKeyPath");
function parse2(key, inference_type, data, key_path = ["data"]) {
  const should_optional = !inference_type.optional || hasDataFromKeyPath({ data }, [...key_path, key]);
  switch (inference_type.type) {
    case "renderer": {
      return should_optional ? parseItem(accessDataFromKeyPath({ data }, [...key_path, key]), inference_type.renderers.map((type) => getParserByName(type))) : void 0;
    }
    case "renderer_list": {
      return should_optional ? parse(accessDataFromKeyPath({ data }, [...key_path, key]), true, inference_type.renderers.map((type) => getParserByName(type))) : void 0;
    }
    case "object": {
      const obj = {};
      const new_key_path = [...key_path, key];
      for (const [key2, value] of inference_type.keys) {
        obj[key2] = should_optional ? parse2(key2, value, data, new_key_path) : void 0;
      }
      return obj;
    }
    case "misc":
      switch (inference_type.misc_type) {
        case "NavigationEndpoint":
          return should_optional ? new NavigationEndpoint_default(accessDataFromKeyPath({ data }, [...key_path, key])) : void 0;
        case "Text":
          return should_optional ? new Text(accessDataFromKeyPath({ data }, [...key_path, key])) : void 0;
        case "Thumbnail":
          return should_optional ? Thumbnail.fromResponse(accessDataFromKeyPath({ data }, [...key_path, key])) : void 0;
        case "Author": {
          const author_should_optional = !inference_type.optional || hasDataFromKeyPath({ data }, [...key_path, inference_type.params[0]]);
          return author_should_optional ? new Author_default(accessDataFromKeyPath({ data }, [...key_path, inference_type.params[0]]), inference_type.params[1] ? accessDataFromKeyPath({ data }, [...key_path, inference_type.params[1]]) : void 0) : void 0;
        }
      }
      throw new Error("Unreachable code reached! Switch missing case!");
    case "primative":
    case "unknown":
      return accessDataFromKeyPath({ data }, [...key_path, key]);
  }
}
__name(parse2, "parse");
function mergeKeyInfo(key_info, new_key_info) {
  const changed_keys = /* @__PURE__ */ new Map();
  const current_keys = new Set(key_info.map(([key]) => key));
  const new_keys = new Set(new_key_info.map(([key]) => key));
  const added_keys = new_key_info.filter(([key]) => !current_keys.has(key));
  const removed_keys = key_info.filter(([key]) => !new_keys.has(key));
  const common_keys = key_info.filter(([key]) => new_keys.has(key));
  const new_key_map = new Map(new_key_info);
  for (const [key, type] of common_keys) {
    const new_type = new_key_map.get(key);
    if (!new_type)
      continue;
    if (type.type !== new_type.type) {
      changed_keys.set(key, {
        type: "unknown",
        optional: true
      });
      continue;
    }
    switch (type.type) {
      case "object":
        {
          if (new_type.type !== "object")
            continue;
          const { resolved_key_info: resolved_key_info2 } = mergeKeyInfo(type.keys, new_type.keys);
          const resolved_key = {
            type: "object",
            keys: resolved_key_info2,
            optional: type.optional || new_type.optional
          };
          const did_change = JSON.stringify(resolved_key) !== JSON.stringify(type);
          if (did_change)
            changed_keys.set(key, resolved_key);
        }
        break;
      case "renderer":
        {
          if (new_type.type !== "renderer")
            continue;
          const union_map = Object.assign(Object.assign({}, type.renderers), new_type.renderers);
          const either_optional = type.optional || new_type.optional;
          const resolved_key = {
            type: "renderer",
            renderers: union_map,
            optional: either_optional
          };
          const did_change = JSON.stringify(Object.assign(Object.assign({}, resolved_key), { renderers: Object.keys(resolved_key.renderers) })) !== JSON.stringify(Object.assign(Object.assign({}, type), { renderers: Object.keys(type.renderers) }));
          if (did_change)
            changed_keys.set(key, resolved_key);
        }
        break;
      case "renderer_list":
        {
          if (new_type.type !== "renderer_list")
            continue;
          const union_map = Object.assign(Object.assign({}, type.renderers), new_type.renderers);
          const either_optional = type.optional || new_type.optional;
          const resolved_key = {
            type: "renderer_list",
            renderers: union_map,
            optional: either_optional
          };
          const did_change = JSON.stringify(Object.assign(Object.assign({}, resolved_key), { renderers: Object.keys(resolved_key.renderers) })) !== JSON.stringify(Object.assign(Object.assign({}, type), { renderers: Object.keys(type.renderers) }));
          if (did_change)
            changed_keys.set(key, resolved_key);
        }
        break;
      case "misc":
        {
          if (new_type.type !== "misc")
            continue;
          if (type.misc_type !== new_type.misc_type) {
            changed_keys.set(key, {
              type: "unknown",
              optional: true
            });
          }
          switch (type.misc_type) {
            case "Author":
              {
                if (new_type.misc_type !== "Author")
                  break;
                const had_optional_param = type.params[1] || new_type.params[1];
                const either_optional = type.optional || new_type.optional;
                const resolved_key = {
                  type: "misc",
                  misc_type: "Author",
                  optional: either_optional,
                  params: [new_type.params[0], had_optional_param]
                };
                const did_change = JSON.stringify(resolved_key) !== JSON.stringify(type);
                if (did_change)
                  changed_keys.set(key, resolved_key);
              }
              break;
          }
        }
        break;
      case "primative":
        {
          if (new_type.type !== "primative")
            continue;
          const resolved_key = {
            type: "primative",
            typeof: Array.from(/* @__PURE__ */ new Set([...new_type.typeof, ...type.typeof])),
            optional: type.optional || new_type.optional
          };
          const did_change = JSON.stringify(resolved_key) !== JSON.stringify(type);
          if (did_change)
            changed_keys.set(key, resolved_key);
        }
        break;
    }
  }
  for (const [key, type] of added_keys) {
    changed_keys.set(key, Object.assign(Object.assign({}, type), { optional: true }));
  }
  for (const [key, type] of removed_keys) {
    changed_keys.set(key, Object.assign(Object.assign({}, type), { optional: true }));
  }
  const unchanged_keys = key_info.filter(([key]) => !changed_keys.has(key));
  const resolved_key_info_map = new Map([...unchanged_keys, ...changed_keys]);
  const resolved_key_info = [...resolved_key_info_map.entries()];
  return {
    resolved_key_info,
    changed_keys: [...changed_keys.entries()]
  };
}
__name(mergeKeyInfo, "mergeKeyInfo");

// dist/src/parser/continuations.js
var ItemSectionContinuation = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c;
    super();
    this.contents = parseArray(data.contents);
    if (Array.isArray(data.continuations)) {
      this.continuation = (_c = (_b2 = (_a4 = data.continuations) === null || _a4 === void 0 ? void 0 : _a4.at(0)) === null || _b2 === void 0 ? void 0 : _b2.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation;
    }
  }
};
__name(ItemSectionContinuation, "ItemSectionContinuation");
ItemSectionContinuation.type = "itemSectionContinuation";
var NavigateAction = class extends YTNode {
  constructor(data) {
    super();
    this.endpoint = new NavigationEndpoint_default(data.endpoint);
  }
};
__name(NavigateAction, "NavigateAction");
NavigateAction.type = "navigateAction";
var ShowMiniplayerCommand = class extends YTNode {
  constructor(data) {
    super();
    this.miniplayer_command = new NavigationEndpoint_default(data.miniplayerCommand);
    this.show_premium_branding = data.showPremiumBranding;
  }
};
__name(ShowMiniplayerCommand, "ShowMiniplayerCommand");
ShowMiniplayerCommand.type = "showMiniplayerCommand";
var ReloadContinuationItemsCommand = class extends YTNode {
  constructor(data) {
    super();
    this.target_id = data.targetId;
    this.contents = parse(data.continuationItems, true);
    this.slot = data === null || data === void 0 ? void 0 : data.slot;
  }
};
__name(ReloadContinuationItemsCommand, "ReloadContinuationItemsCommand");
ReloadContinuationItemsCommand.type = "reloadContinuationItemsCommand";
var SectionListContinuation = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c, _d, _e, _f;
    super();
    this.contents = parse(data.contents, true);
    this.continuation = ((_c = (_b2 = (_a4 = data.continuations) === null || _a4 === void 0 ? void 0 : _a4[0]) === null || _b2 === void 0 ? void 0 : _b2.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || ((_f = (_e = (_d = data.continuations) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.reloadContinuationData) === null || _f === void 0 ? void 0 : _f.continuation) || null;
  }
};
__name(SectionListContinuation, "SectionListContinuation");
SectionListContinuation.type = "sectionListContinuation";
var MusicPlaylistShelfContinuation = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    this.contents = parse(data.contents, true);
    this.continuation = ((_a4 = data.continuations) === null || _a4 === void 0 ? void 0 : _a4[0].nextContinuationData.continuation) || null;
  }
};
__name(MusicPlaylistShelfContinuation, "MusicPlaylistShelfContinuation");
MusicPlaylistShelfContinuation.type = "musicPlaylistShelfContinuation";
var MusicShelfContinuation = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c, _d;
    super();
    this.contents = parseArray(data.contents);
    this.continuation = ((_b2 = (_a4 = data.continuations) === null || _a4 === void 0 ? void 0 : _a4[0].nextContinuationData) === null || _b2 === void 0 ? void 0 : _b2.continuation) || ((_d = (_c = data.continuations) === null || _c === void 0 ? void 0 : _c[0].reloadContinuationData) === null || _d === void 0 ? void 0 : _d.continuation) || null;
  }
};
__name(MusicShelfContinuation, "MusicShelfContinuation");
MusicShelfContinuation.type = "musicShelfContinuation";
var GridContinuation = class extends YTNode {
  constructor(data) {
    var _a4;
    super();
    this.items = parse(data.items, true);
    this.continuation = ((_a4 = data.continuations) === null || _a4 === void 0 ? void 0 : _a4[0].nextContinuationData.continuation) || null;
  }
  get contents() {
    return this.items;
  }
};
__name(GridContinuation, "GridContinuation");
GridContinuation.type = "gridContinuation";
var PlaylistPanelContinuation = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c, _d, _e, _f;
    super();
    this.contents = parseArray(data.contents);
    this.continuation = ((_c = (_b2 = (_a4 = data.continuations) === null || _a4 === void 0 ? void 0 : _a4[0]) === null || _b2 === void 0 ? void 0 : _b2.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || ((_f = (_e = (_d = data.continuations) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.nextRadioContinuationData) === null || _f === void 0 ? void 0 : _f.continuation) || null;
  }
};
__name(PlaylistPanelContinuation, "PlaylistPanelContinuation");
PlaylistPanelContinuation.type = "playlistPanelContinuation";
var Continuation = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c;
    super();
    this.continuation_type = data.type;
    this.timeout_ms = (_a4 = data.continuation) === null || _a4 === void 0 ? void 0 : _a4.timeoutMs;
    this.time_until_last_message_ms = (_b2 = data.continuation) === null || _b2 === void 0 ? void 0 : _b2.timeUntilLastMessageMsec;
    this.token = (_c = data.continuation) === null || _c === void 0 ? void 0 : _c.continuation;
  }
};
__name(Continuation, "Continuation");
Continuation.type = "continuation";
var LiveChatContinuation = class extends YTNode {
  constructor(data) {
    var _a4, _b2, _c, _d, _e, _f, _g, _h;
    super();
    this.actions = parse((_a4 = data.actions) === null || _a4 === void 0 ? void 0 : _a4.map((action) => {
      delete action.clickTrackingParams;
      return action;
    }), true) || observe([]);
    this.action_panel = parseItem(data.actionPanel);
    this.item_list = parseItem(data.itemList, LiveChatItemList_default);
    this.header = parseItem(data.header, LiveChatHeader_default);
    this.participants_list = parseItem(data.participantsList, LiveChatParticipantsList_default);
    this.popout_message = parseItem(data.popoutMessage, Message_default);
    this.emojis = ((_b2 = data.emojis) === null || _b2 === void 0 ? void 0 : _b2.map((emoji) => ({
      emoji_id: emoji.emojiId,
      shortcuts: emoji.shortcuts,
      search_terms: emoji.searchTerms,
      image: Thumbnail.fromResponse(emoji.image),
      is_custom_emoji: emoji.isCustomEmoji
    }))) || [];
    let continuation, type;
    if ((_c = data.continuations) === null || _c === void 0 ? void 0 : _c[0].timedContinuationData) {
      type = "timed";
      continuation = (_d = data.continuations) === null || _d === void 0 ? void 0 : _d[0].timedContinuationData;
    } else if ((_e = data.continuations) === null || _e === void 0 ? void 0 : _e[0].invalidationContinuationData) {
      type = "invalidation";
      continuation = (_f = data.continuations) === null || _f === void 0 ? void 0 : _f[0].invalidationContinuationData;
    } else if ((_g = data.continuations) === null || _g === void 0 ? void 0 : _g[0].liveChatReplayContinuationData) {
      type = "replay";
      continuation = (_h = data.continuations) === null || _h === void 0 ? void 0 : _h[0].liveChatReplayContinuationData;
    }
    this.continuation = new Continuation({ continuation, type });
    this.viewer_name = data.viewerName;
  }
};
__name(LiveChatContinuation, "LiveChatContinuation");
LiveChatContinuation.type = "liveChatContinuation";

// dist/src/parser/parser.js
var IGNORED_LIST = /* @__PURE__ */ new Set([
  "AdSlot",
  "DisplayAd",
  "SearchPyv",
  "MealbarPromo",
  "PrimetimePromo",
  "BackgroundPromo",
  "PromotedSparklesWeb",
  "RunAttestationCommand",
  "CompactPromotedVideo",
  "BrandVideoShelf",
  "BrandVideoSingleton",
  "StatementBanner",
  "GuideSigninPromo",
  "AdsEngagementPanelContent"
]);
var RUNTIME_NODES = new Map(Object.entries(nodes_exports));
var DYNAMIC_NODES = /* @__PURE__ */ new Map();
var MEMO = null;
var ERROR_HANDLER = /* @__PURE__ */ __name((_a4) => {
  var { classname } = _a4, context = (0, import_tslib8.__rest)(_a4, ["classname"]);
  switch (context.error_type) {
    case "parse":
      if (context.error instanceof Error) {
        console.warn(new InnertubeError(`Something went wrong at ${classname}!
This is a bug, please report it at ${Platform.shim.info.bugs_url}`, {
          stack: context.error.stack
        }));
      }
      break;
    case "typecheck":
      console.warn(new ParsingError(`Type mismatch, got ${classname} expected ${Array.isArray(context.expected) ? context.expected.join(" | ") : context.expected}.`, context.classdata));
      break;
    case "mutation_data_missing":
      console.warn(new InnertubeError(`Mutation data required for processing MusicMultiSelectMenuItems, but none found.
This is a bug, please report it at ${Platform.shim.info.bugs_url}`));
      break;
    case "mutation_data_invalid":
      console.warn(new InnertubeError(`Mutation data missing or invalid for ${context.failed} out of ${context.total} MusicMultiSelectMenuItems. The titles of the failed items are: ${context.titles.join(", ")}.
This is a bug, please report it at ${Platform.shim.info.bugs_url}`));
      break;
    case "class_not_found":
      console.warn(new InnertubeError(`${classname} not found!
This is a bug, want to help us fix it? Follow the instructions at ${Platform.shim.info.repo_url}/blob/main/docs/updating-the-parser.md or report it at ${Platform.shim.info.bugs_url}!
Introspected and JIT generated this class in the meantime:
${generateTypescriptClass(classname, context.key_info)}`));
      break;
    case "class_changed":
      console.warn(`${classname} changed!
The following keys where altered: ${context.changed_keys.map(([key]) => camelToSnake(key)).join(", ")}
The class has changed to:
${generateTypescriptClass(classname, context.key_info)}`);
      break;
    default:
      console.warn("Unreachable code reached at ParserErrorHandler");
      break;
  }
}, "ERROR_HANDLER");
function setParserErrorHandler(handler) {
  ERROR_HANDLER = handler;
}
__name(setParserErrorHandler, "setParserErrorHandler");
function _clearMemo() {
  MEMO = null;
}
__name(_clearMemo, "_clearMemo");
function _createMemo() {
  MEMO = new Memo();
}
__name(_createMemo, "_createMemo");
function _addToMemo(classname, result) {
  if (!MEMO)
    return;
  const list = MEMO.get(classname);
  if (!list)
    return MEMO.set(classname, [result]);
  list.push(result);
}
__name(_addToMemo, "_addToMemo");
function _getMemo() {
  if (!MEMO)
    throw new Error("Parser#getMemo() called before Parser#createMemo()");
  return MEMO;
}
__name(_getMemo, "_getMemo");
function shouldIgnore(classname) {
  return IGNORED_LIST.has(classname);
}
__name(shouldIgnore, "shouldIgnore");
function sanitizeClassName(input) {
  return (input.charAt(0).toUpperCase() + input.slice(1)).replace(/Renderer|Model/g, "").replace(/Radio/g, "Mix").trim();
}
__name(sanitizeClassName, "sanitizeClassName");
function getParserByName(classname) {
  const ParserConstructor = RUNTIME_NODES.get(classname);
  if (!ParserConstructor) {
    const error = new Error(`Module not found: ${classname}`);
    error.code = "MODULE_NOT_FOUND";
    throw error;
  }
  return ParserConstructor;
}
__name(getParserByName, "getParserByName");
function hasParser(classname) {
  return RUNTIME_NODES.has(classname);
}
__name(hasParser, "hasParser");
function addRuntimeParser(classname, ParserConstructor) {
  RUNTIME_NODES.set(classname, ParserConstructor);
  DYNAMIC_NODES.set(classname, ParserConstructor);
}
__name(addRuntimeParser, "addRuntimeParser");
function getDynamicParsers() {
  return Object.fromEntries(DYNAMIC_NODES);
}
__name(getDynamicParsers, "getDynamicParsers");
function parseResponse(data) {
  var _a4, _b2, _c;
  const parsed_data = {};
  _createMemo();
  const contents = parse(data.contents);
  const contents_memo = _getMemo();
  if (contents) {
    parsed_data.contents = contents;
    parsed_data.contents_memo = contents_memo;
  }
  _clearMemo();
  _createMemo();
  const on_response_received_actions = data.onResponseReceivedActions ? parseRR(data.onResponseReceivedActions) : null;
  const on_response_received_actions_memo = _getMemo();
  if (on_response_received_actions) {
    parsed_data.on_response_received_actions = on_response_received_actions;
    parsed_data.on_response_received_actions_memo = on_response_received_actions_memo;
  }
  _clearMemo();
  _createMemo();
  const on_response_received_endpoints = data.onResponseReceivedEndpoints ? parseRR(data.onResponseReceivedEndpoints) : null;
  const on_response_received_endpoints_memo = _getMemo();
  if (on_response_received_endpoints) {
    parsed_data.on_response_received_endpoints = on_response_received_endpoints;
    parsed_data.on_response_received_endpoints_memo = on_response_received_endpoints_memo;
  }
  _clearMemo();
  _createMemo();
  const on_response_received_commands = data.onResponseReceivedCommands ? parseRR(data.onResponseReceivedCommands) : null;
  const on_response_received_commands_memo = _getMemo();
  if (on_response_received_commands) {
    parsed_data.on_response_received_commands = on_response_received_commands;
    parsed_data.on_response_received_commands_memo = on_response_received_commands_memo;
  }
  _clearMemo();
  _createMemo();
  const continuation_contents = data.continuationContents ? parseLC(data.continuationContents) : null;
  const continuation_contents_memo = _getMemo();
  if (continuation_contents) {
    parsed_data.continuation_contents = continuation_contents;
    parsed_data.continuation_contents_memo = continuation_contents_memo;
  }
  _clearMemo();
  _createMemo();
  const actions = data.actions ? parseActions(data.actions) : null;
  const actions_memo = _getMemo();
  if (actions) {
    parsed_data.actions = actions;
    parsed_data.actions_memo = actions_memo;
  }
  _clearMemo();
  _createMemo();
  const live_chat_item_context_menu_supported_renderers = data.liveChatItemContextMenuSupportedRenderers ? parseItem(data.liveChatItemContextMenuSupportedRenderers) : null;
  const live_chat_item_context_menu_supported_renderers_memo = _getMemo();
  if (live_chat_item_context_menu_supported_renderers) {
    parsed_data.live_chat_item_context_menu_supported_renderers = live_chat_item_context_menu_supported_renderers;
    parsed_data.live_chat_item_context_menu_supported_renderers_memo = live_chat_item_context_menu_supported_renderers_memo;
  }
  _clearMemo();
  _createMemo();
  const header = data.header ? parse(data.header) : null;
  const header_memo = _getMemo();
  if (header) {
    parsed_data.header = header;
    parsed_data.header_memo = header_memo;
  }
  _clearMemo();
  _createMemo();
  const sidebar = data.sidebar ? parseItem(data.sidebar) : null;
  const sidebar_memo = _getMemo();
  if (sidebar) {
    parsed_data.sidebar = sidebar;
    parsed_data.sidebar_memo = sidebar_memo;
  }
  _clearMemo();
  applyMutations(contents_memo, (_b2 = (_a4 = data.frameworkUpdates) === null || _a4 === void 0 ? void 0 : _a4.entityBatchUpdate) === null || _b2 === void 0 ? void 0 : _b2.mutations);
  const continuation = data.continuation ? parseC(data.continuation) : null;
  if (continuation) {
    parsed_data.continuation = continuation;
  }
  const metadata = parse(data.metadata);
  if (metadata) {
    parsed_data.metadata = metadata;
  }
  const microformat = parseItem(data.microformat);
  if (microformat) {
    parsed_data.microformat = microformat;
  }
  const overlay = parseItem(data.overlay);
  if (overlay) {
    parsed_data.overlay = overlay;
  }
  const alerts = parseArray(data.alerts, [Alert_default, AlertWithButton_default]);
  if (alerts.length) {
    parsed_data.alerts = alerts;
  }
  const refinements = data.refinements;
  if (refinements) {
    parsed_data.refinements = refinements;
  }
  const estimated_results = data.estimatedResults ? parseInt(data.estimatedResults) : null;
  if (estimated_results) {
    parsed_data.estimated_results = estimated_results;
  }
  const player_overlays = parse(data.playerOverlays);
  if (player_overlays) {
    parsed_data.player_overlays = player_overlays;
  }
  const playback_tracking = data.playbackTracking ? {
    videostats_watchtime_url: data.playbackTracking.videostatsWatchtimeUrl.baseUrl,
    videostats_playback_url: data.playbackTracking.videostatsPlaybackUrl.baseUrl
  } : null;
  if (playback_tracking) {
    parsed_data.playback_tracking = playback_tracking;
  }
  const playability_status = data.playabilityStatus ? {
    status: data.playabilityStatus.status,
    reason: data.playabilityStatus.reason || "",
    embeddable: !!data.playabilityStatus.playableInEmbed || false,
    audio_only_playablility: parseItem(data.playabilityStatus.audioOnlyPlayability, AudioOnlyPlayability_default),
    error_screen: parseItem(data.playabilityStatus.errorScreen)
  } : null;
  if (playability_status) {
    parsed_data.playability_status = playability_status;
  }
  const streaming_data = data.streamingData ? {
    expires: new Date(Date.now() + parseInt(data.streamingData.expiresInSeconds) * 1e3),
    formats: parseFormats(data.streamingData.formats),
    adaptive_formats: parseFormats(data.streamingData.adaptiveFormats),
    dash_manifest_url: data.streamingData.dashManifestUrl || null,
    hls_manifest_url: data.streamingData.hlsManifestUrl || null
  } : void 0;
  if (streaming_data) {
    parsed_data.streaming_data = streaming_data;
  }
  const current_video_endpoint = data.currentVideoEndpoint ? new NavigationEndpoint_default(data.currentVideoEndpoint) : null;
  if (current_video_endpoint) {
    parsed_data.current_video_endpoint = current_video_endpoint;
  }
  const endpoint = data.endpoint ? new NavigationEndpoint_default(data.endpoint) : null;
  if (endpoint) {
    parsed_data.endpoint = endpoint;
  }
  const captions = parseItem(data.captions, PlayerCaptionsTracklist_default);
  if (captions) {
    parsed_data.captions = captions;
  }
  const video_details = data.videoDetails ? new VideoDetails(data.videoDetails) : null;
  if (video_details) {
    parsed_data.video_details = video_details;
  }
  const annotations = parseArray(data.annotations, PlayerAnnotationsExpanded_default);
  if (annotations.length) {
    parsed_data.annotations = annotations;
  }
  const storyboards = parseItem(data.storyboards, [PlayerStoryboardSpec_default, PlayerLiveStoryboardSpec_default]);
  if (storyboards) {
    parsed_data.storyboards = storyboards;
  }
  const endscreen = parseItem(data.endscreen, Endscreen_default);
  if (endscreen) {
    parsed_data.endscreen = endscreen;
  }
  const cards = parseItem(data.cards, CardCollection_default);
  if (cards) {
    parsed_data.cards = cards;
  }
  const engagement_panels = (_c = data.engagementPanels) === null || _c === void 0 ? void 0 : _c.map((e) => {
    const item = parseItem(e, EngagementPanelSectionList_default);
    return item;
  });
  if (engagement_panels) {
    parsed_data.engagement_panels = engagement_panels;
  }
  _createMemo();
  const items = parse(data.items);
  if (items) {
    parsed_data.items = items;
    parsed_data.items_memo = _getMemo();
  }
  _clearMemo();
  return parsed_data;
}
__name(parseResponse, "parseResponse");
function parseItem(data, validTypes) {
  if (!data)
    return null;
  const keys = Object.keys(data);
  if (!keys.length)
    return null;
  const classname = sanitizeClassName(keys[0]);
  if (!shouldIgnore(classname)) {
    try {
      const has_target_class = hasParser(classname);
      const TargetClass = has_target_class ? getParserByName(classname) : generateRuntimeClass(classname, data[keys[0]], ERROR_HANDLER);
      if (validTypes) {
        if (Array.isArray(validTypes)) {
          if (!validTypes.some((type) => type.type === TargetClass.type)) {
            ERROR_HANDLER({
              classdata: data[keys[0]],
              classname,
              error_type: "typecheck",
              expected: validTypes.map((type) => type.type)
            });
            return null;
          }
        } else if (TargetClass.type !== validTypes.type) {
          ERROR_HANDLER({
            classdata: data[keys[0]],
            classname,
            error_type: "typecheck",
            expected: validTypes.type
          });
          return null;
        }
      }
      const result = new TargetClass(data[keys[0]]);
      _addToMemo(classname, result);
      return result;
    } catch (err) {
      ERROR_HANDLER({
        classname,
        classdata: data[keys[0]],
        error: err,
        error_type: "parse"
      });
      return null;
    }
  }
  return null;
}
__name(parseItem, "parseItem");
function parseArray(data, validTypes) {
  if (Array.isArray(data)) {
    const results = [];
    for (const item of data) {
      const result = parseItem(item, validTypes);
      if (result) {
        results.push(result);
      }
    }
    return observe(results);
  } else if (!data) {
    return observe([]);
  }
  throw new ParsingError("Expected array but got a single item");
}
__name(parseArray, "parseArray");
function parse(data, requireArray, validTypes) {
  if (!data)
    return null;
  if (Array.isArray(data)) {
    const results = [];
    for (const item of data) {
      const result = parseItem(item, validTypes);
      if (result) {
        results.push(result);
      }
    }
    const res = observe(results);
    return requireArray ? res : new SuperParsedResult(res);
  } else if (requireArray) {
    throw new ParsingError("Expected array but got a single item");
  }
  return new SuperParsedResult(parseItem(data, validTypes));
}
__name(parse, "parse");
function parseC(data) {
  if (data.timedContinuationData)
    return new Continuation({ continuation: data.timedContinuationData, type: "timed" });
  return null;
}
__name(parseC, "parseC");
function parseLC(data) {
  if (data.itemSectionContinuation)
    return new ItemSectionContinuation(data.itemSectionContinuation);
  if (data.sectionListContinuation)
    return new SectionListContinuation(data.sectionListContinuation);
  if (data.liveChatContinuation)
    return new LiveChatContinuation(data.liveChatContinuation);
  if (data.musicPlaylistShelfContinuation)
    return new MusicPlaylistShelfContinuation(data.musicPlaylistShelfContinuation);
  if (data.musicShelfContinuation)
    return new MusicShelfContinuation(data.musicShelfContinuation);
  if (data.gridContinuation)
    return new GridContinuation(data.gridContinuation);
  if (data.playlistPanelContinuation)
    return new PlaylistPanelContinuation(data.playlistPanelContinuation);
  return null;
}
__name(parseLC, "parseLC");
function parseRR(actions) {
  return observe(actions.map((action) => {
    if (action.navigateAction)
      return new NavigateAction(action.navigateAction);
    if (action.showMiniplayerCommand)
      return new ShowMiniplayerCommand(action.showMiniplayerCommand);
    if (action.reloadContinuationItemsCommand)
      return new ReloadContinuationItemsCommand(action.reloadContinuationItemsCommand);
    if (action.appendContinuationItemsAction)
      return new AppendContinuationItemsAction_default(action.appendContinuationItemsAction);
  }).filter((item) => item));
}
__name(parseRR, "parseRR");
function parseActions(data) {
  if (Array.isArray(data)) {
    return parse(data.map((action) => {
      delete action.clickTrackingParams;
      return action;
    }));
  }
  return new SuperParsedResult(parseItem(data));
}
__name(parseActions, "parseActions");
function parseFormats(formats) {
  return (formats === null || formats === void 0 ? void 0 : formats.map((format) => new Format(format))) || [];
}
__name(parseFormats, "parseFormats");
function applyMutations(memo, mutations) {
  const music_multi_select_menu_items = memo.getType(MusicMultiSelectMenuItem_default);
  if (music_multi_select_menu_items.length > 0 && !mutations) {
    ERROR_HANDLER({
      error_type: "mutation_data_missing",
      classname: "MusicMultiSelectMenuItem"
    });
  } else {
    const missing_or_invalid_mutations = [];
    for (const menu_item of music_multi_select_menu_items) {
      const mutation = mutations.find((mutation2) => {
        var _a4, _b2;
        return ((_b2 = (_a4 = mutation2.payload) === null || _a4 === void 0 ? void 0 : _a4.musicFormBooleanChoice) === null || _b2 === void 0 ? void 0 : _b2.id) === menu_item.form_item_entity_key;
      });
      const choice = mutation === null || mutation === void 0 ? void 0 : mutation.payload.musicFormBooleanChoice;
      if ((choice === null || choice === void 0 ? void 0 : choice.selected) !== void 0 && (choice === null || choice === void 0 ? void 0 : choice.opaqueToken)) {
        menu_item.selected = choice.selected;
      } else {
        missing_or_invalid_mutations.push(`'${menu_item.title}'`);
      }
    }
    if (missing_or_invalid_mutations.length > 0) {
      ERROR_HANDLER({
        error_type: "mutation_data_invalid",
        classname: "MusicMultiSelectMenuItem",
        total: music_multi_select_menu_items.length,
        failed: missing_or_invalid_mutations.length,
        titles: missing_or_invalid_mutations
      });
    }
  }
}
__name(applyMutations, "applyMutations");

// dist/src/parser/youtube/index.js
var youtube_exports = {};
__export(youtube_exports, {
  AccountInfo: () => AccountInfo_default,
  Analytics: () => Analytics_default,
  Channel: () => Channel2,
  ChannelListContinuation: () => ChannelListContinuation,
  Comments: () => Comments_default,
  FilteredChannelList: () => FilteredChannelList,
  Guide: () => Guide_default,
  HashtagFeed: () => HashtagFeed,
  History: () => History_default,
  HomeFeed: () => HomeFeed,
  ItemMenu: () => ItemMenu_default,
  Library: () => Library_default,
  LiveChat: () => LiveChat_default2,
  NotificationsMenu: () => NotificationsMenu_default,
  Playlist: () => Playlist_default2,
  Search: () => Search_default,
  Settings: () => Settings_default,
  SmoothedQueue: () => SmoothedQueue_default,
  TimeWatched: () => TimeWatched_default,
  VideoInfo: () => VideoInfo_default
});

// dist/src/parser/youtube/AccountInfo.js
var import_tslib9 = require("tslib");
var _AccountInfo_page;
var AccountInfo = class {
  constructor(response) {
    _AccountInfo_page.set(this, void 0);
    (0, import_tslib9.__classPrivateFieldSet)(this, _AccountInfo_page, parser_default.parseResponse(response.data), "f");
    if (!(0, import_tslib9.__classPrivateFieldGet)(this, _AccountInfo_page, "f").contents)
      throw new InnertubeError("Page contents not found");
    const account_section_list = (0, import_tslib9.__classPrivateFieldGet)(this, _AccountInfo_page, "f").contents.array().as(AccountSectionList_default).first();
    if (!account_section_list)
      throw new InnertubeError("Account section list not found");
    this.contents = account_section_list.contents;
    this.footers = account_section_list.footers;
  }
  get page() {
    return (0, import_tslib9.__classPrivateFieldGet)(this, _AccountInfo_page, "f");
  }
};
__name(AccountInfo, "AccountInfo");
_AccountInfo_page = /* @__PURE__ */ new WeakMap();
var AccountInfo_default = AccountInfo;

// dist/src/parser/youtube/Analytics.js
var import_tslib10 = require("tslib");
var _Analytics_page;
var Analytics = class {
  constructor(response) {
    var _a4;
    _Analytics_page.set(this, void 0);
    (0, import_tslib10.__classPrivateFieldSet)(this, _Analytics_page, parser_default.parseResponse(response.data), "f");
    this.sections = (_a4 = (0, import_tslib10.__classPrivateFieldGet)(this, _Analytics_page, "f").contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(Element_default).map((el) => el.model).flatMap((el) => !el ? [] : el);
  }
  get page() {
    return (0, import_tslib10.__classPrivateFieldGet)(this, _Analytics_page, "f");
  }
};
__name(Analytics, "Analytics");
_Analytics_page = /* @__PURE__ */ new WeakMap();
var Analytics_default = Analytics;

// dist/src/parser/youtube/Channel.js
var import_tslib14 = require("tslib");

// dist/src/core/mixins/TabbedFeed.js
var import_tslib12 = require("tslib");

// dist/src/core/mixins/Feed.js
var import_tslib11 = require("tslib");
var _Feed_instances;
var _Feed_page;
var _Feed_continuation;
var _Feed_actions;
var _Feed_memo;
var _Feed_isParsed;
var Feed = class {
  constructor(actions, response, already_parsed = false) {
    _Feed_instances.add(this);
    _Feed_page.set(this, void 0);
    _Feed_continuation.set(this, void 0);
    _Feed_actions.set(this, void 0);
    _Feed_memo.set(this, void 0);
    if ((0, import_tslib11.__classPrivateFieldGet)(this, _Feed_instances, "m", _Feed_isParsed).call(this, response) || already_parsed) {
      (0, import_tslib11.__classPrivateFieldSet)(this, _Feed_page, response, "f");
    } else {
      (0, import_tslib11.__classPrivateFieldSet)(this, _Feed_page, parser_default.parseResponse(response.data), "f");
    }
    const memo = concatMemos(...[
      (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_page, "f").contents_memo,
      (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_page, "f").continuation_contents_memo,
      (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_page, "f").on_response_received_commands_memo,
      (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_page, "f").on_response_received_endpoints_memo,
      (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_page, "f").on_response_received_actions_memo,
      (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_page, "f").sidebar_memo,
      (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_page, "f").header_memo
    ]);
    if (!memo)
      throw new InnertubeError("No memo found in feed");
    (0, import_tslib11.__classPrivateFieldSet)(this, _Feed_memo, memo, "f");
    (0, import_tslib11.__classPrivateFieldSet)(this, _Feed_actions, actions, "f");
  }
  static getVideosFromMemo(memo) {
    return memo.getType(Video_default, GridVideo_default, ReelItem_default, CompactVideo_default, PlaylistVideo_default, PlaylistPanelVideo_default, WatchCardCompactVideo_default);
  }
  static getPlaylistsFromMemo(memo) {
    return memo.getType(Playlist_default, GridPlaylist_default);
  }
  get videos() {
    return Feed.getVideosFromMemo((0, import_tslib11.__classPrivateFieldGet)(this, _Feed_memo, "f"));
  }
  get posts() {
    return (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_memo, "f").getType(BackstagePost_default, Post_default, SharedPost_default);
  }
  get channels() {
    return (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_memo, "f").getType(Channel_default, GridChannel_default);
  }
  get playlists() {
    return Feed.getPlaylistsFromMemo((0, import_tslib11.__classPrivateFieldGet)(this, _Feed_memo, "f"));
  }
  get memo() {
    return (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_memo, "f");
  }
  get page_contents() {
    var _a4;
    const tab_content = (_a4 = (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_memo, "f").getType(Tab_default)) === null || _a4 === void 0 ? void 0 : _a4.first().content;
    const reload_continuation_items = (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_memo, "f").getType(ReloadContinuationItemsCommand).first();
    const append_continuation_items = (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_memo, "f").getType(AppendContinuationItemsAction_default).first();
    return tab_content || reload_continuation_items || append_continuation_items;
  }
  get shelves() {
    return (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_memo, "f").getType(Shelf_default, RichShelf_default, ReelShelf_default);
  }
  getShelf(title) {
    return this.shelves.get({ title });
  }
  get secondary_contents() {
    var _a4, _b2;
    if (!((_a4 = (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_page, "f").contents) === null || _a4 === void 0 ? void 0 : _a4.is_node))
      return void 0;
    const node = (_b2 = (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_page, "f").contents) === null || _b2 === void 0 ? void 0 : _b2.item();
    if (!node.is(TwoColumnBrowseResults_default, TwoColumnSearchResults_default))
      return void 0;
    return node.secondary_contents;
  }
  get actions() {
    return (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_actions, "f");
  }
  get page() {
    return (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_page, "f");
  }
  get has_continuation() {
    return ((0, import_tslib11.__classPrivateFieldGet)(this, _Feed_memo, "f").get("ContinuationItem") || []).length > 0;
  }
  getContinuationData() {
    return (0, import_tslib11.__awaiter)(this, void 0, void 0, function* () {
      if ((0, import_tslib11.__classPrivateFieldGet)(this, _Feed_continuation, "f")) {
        if ((0, import_tslib11.__classPrivateFieldGet)(this, _Feed_continuation, "f").length > 1)
          throw new InnertubeError("There are too many continuations, you'll need to find the correct one yourself in this.page");
        if ((0, import_tslib11.__classPrivateFieldGet)(this, _Feed_continuation, "f").length === 0)
          throw new InnertubeError("There are no continuations");
        const response = yield (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_continuation, "f")[0].endpoint.call((0, import_tslib11.__classPrivateFieldGet)(this, _Feed_actions, "f"), { parse: true });
        return response;
      }
      (0, import_tslib11.__classPrivateFieldSet)(this, _Feed_continuation, (0, import_tslib11.__classPrivateFieldGet)(this, _Feed_memo, "f").getType(ContinuationItem_default), "f");
      if ((0, import_tslib11.__classPrivateFieldGet)(this, _Feed_continuation, "f"))
        return this.getContinuationData();
    });
  }
  getContinuation() {
    return (0, import_tslib11.__awaiter)(this, void 0, void 0, function* () {
      const continuation_data = yield this.getContinuationData();
      if (!continuation_data)
        throw new InnertubeError("Could not get continuation data");
      return new Feed(this.actions, continuation_data, true);
    });
  }
};
__name(Feed, "Feed");
_Feed_page = /* @__PURE__ */ new WeakMap(), _Feed_continuation = /* @__PURE__ */ new WeakMap(), _Feed_actions = /* @__PURE__ */ new WeakMap(), _Feed_memo = /* @__PURE__ */ new WeakMap(), _Feed_instances = /* @__PURE__ */ new WeakSet(), _Feed_isParsed = /* @__PURE__ */ __name(function _Feed_isParsed2(response) {
  return !("data" in response);
}, "_Feed_isParsed");
var Feed_default = Feed;

// dist/src/core/mixins/TabbedFeed.js
var _TabbedFeed_tabs;
var _TabbedFeed_actions;
var TabbedFeed = class extends Feed_default {
  constructor(actions, data, already_parsed = false) {
    var _a4;
    super(actions, data, already_parsed);
    _TabbedFeed_tabs.set(this, void 0);
    _TabbedFeed_actions.set(this, void 0);
    (0, import_tslib12.__classPrivateFieldSet)(this, _TabbedFeed_actions, actions, "f");
    (0, import_tslib12.__classPrivateFieldSet)(this, _TabbedFeed_tabs, (_a4 = this.page.contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(Tab_default), "f");
  }
  get tabs() {
    var _a4, _b2;
    return (_b2 = (_a4 = (0, import_tslib12.__classPrivateFieldGet)(this, _TabbedFeed_tabs, "f")) === null || _a4 === void 0 ? void 0 : _a4.map((tab) => tab.title.toString())) !== null && _b2 !== void 0 ? _b2 : [];
  }
  getTabByName(title) {
    var _a4;
    return (0, import_tslib12.__awaiter)(this, void 0, void 0, function* () {
      const tab = (_a4 = (0, import_tslib12.__classPrivateFieldGet)(this, _TabbedFeed_tabs, "f")) === null || _a4 === void 0 ? void 0 : _a4.find((tab2) => tab2.title.toLowerCase() === title.toLowerCase());
      if (!tab)
        throw new InnertubeError(`Tab "${title}" not found`);
      if (tab.selected)
        return this;
      const response = yield tab.endpoint.call((0, import_tslib12.__classPrivateFieldGet)(this, _TabbedFeed_actions, "f"));
      return new TabbedFeed((0, import_tslib12.__classPrivateFieldGet)(this, _TabbedFeed_actions, "f"), response, false);
    });
  }
  getTabByURL(url) {
    var _a4;
    return (0, import_tslib12.__awaiter)(this, void 0, void 0, function* () {
      const tab = (_a4 = (0, import_tslib12.__classPrivateFieldGet)(this, _TabbedFeed_tabs, "f")) === null || _a4 === void 0 ? void 0 : _a4.find((tab2) => {
        var _a5;
        return ((_a5 = tab2.endpoint.metadata.url) === null || _a5 === void 0 ? void 0 : _a5.split("/").pop()) === url;
      });
      if (!tab)
        throw new InnertubeError(`Tab "${url}" not found`);
      if (tab.selected)
        return this;
      const response = yield tab.endpoint.call((0, import_tslib12.__classPrivateFieldGet)(this, _TabbedFeed_actions, "f"));
      return new TabbedFeed((0, import_tslib12.__classPrivateFieldGet)(this, _TabbedFeed_actions, "f"), response, false);
    });
  }
  hasTabWithURL(url) {
    var _a4, _b2;
    return (_b2 = (_a4 = (0, import_tslib12.__classPrivateFieldGet)(this, _TabbedFeed_tabs, "f")) === null || _a4 === void 0 ? void 0 : _a4.some((tab) => {
      var _a5;
      return ((_a5 = tab.endpoint.metadata.url) === null || _a5 === void 0 ? void 0 : _a5.split("/").pop()) === url;
    })) !== null && _b2 !== void 0 ? _b2 : false;
  }
  get title() {
    var _a4, _b2, _c;
    return (_c = (_b2 = (_a4 = this.page.contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(Tab_default)) === null || _b2 === void 0 ? void 0 : _b2.find((tab) => tab.selected)) === null || _c === void 0 ? void 0 : _c.title.toString();
  }
};
__name(TabbedFeed, "TabbedFeed");
_TabbedFeed_tabs = /* @__PURE__ */ new WeakMap(), _TabbedFeed_actions = /* @__PURE__ */ new WeakMap();
var TabbedFeed_default = TabbedFeed;

// dist/src/core/mixins/FilterableFeed.js
var import_tslib13 = require("tslib");
var _FilterableFeed_chips;
var FilterableFeed = class extends Feed_default {
  constructor(actions, data, already_parsed = false) {
    super(actions, data, already_parsed);
    _FilterableFeed_chips.set(this, void 0);
  }
  get filter_chips() {
    var _a4, _b2;
    if ((0, import_tslib13.__classPrivateFieldGet)(this, _FilterableFeed_chips, "f"))
      return (0, import_tslib13.__classPrivateFieldGet)(this, _FilterableFeed_chips, "f") || [];
    if (((_a4 = this.memo.getType(FeedFilterChipBar_default)) === null || _a4 === void 0 ? void 0 : _a4.length) > 1)
      throw new InnertubeError("There are too many feed filter chipbars, you'll need to find the correct one yourself in this.page");
    if (((_b2 = this.memo.getType(FeedFilterChipBar_default)) === null || _b2 === void 0 ? void 0 : _b2.length) === 0)
      throw new InnertubeError("There are no feed filter chipbars");
    (0, import_tslib13.__classPrivateFieldSet)(this, _FilterableFeed_chips, this.memo.getType(ChipCloudChip_default), "f");
    return (0, import_tslib13.__classPrivateFieldGet)(this, _FilterableFeed_chips, "f") || [];
  }
  get filters() {
    return this.filter_chips.map((chip) => chip.text.toString()) || [];
  }
  getFilteredFeed(filter) {
    var _a4;
    return (0, import_tslib13.__awaiter)(this, void 0, void 0, function* () {
      let target_filter;
      if (typeof filter === "string") {
        if (!this.filters.includes(filter))
          throw new InnertubeError("Filter not found", { available_filters: this.filters });
        target_filter = this.filter_chips.find((chip) => chip.text.toString() === filter);
      } else if (filter.type === "ChipCloudChip") {
        target_filter = filter;
      } else {
        throw new InnertubeError("Invalid filter");
      }
      if (!target_filter)
        throw new InnertubeError("Filter not found");
      if (target_filter.is_selected)
        return this;
      const response = yield (_a4 = target_filter.endpoint) === null || _a4 === void 0 ? void 0 : _a4.call(this.actions, { parse: true });
      if (!response)
        throw new InnertubeError("Failed to get filtered feed");
      return new Feed_default(this.actions, response, true);
    });
  }
};
__name(FilterableFeed, "FilterableFeed");
_FilterableFeed_chips = /* @__PURE__ */ new WeakMap();
var FilterableFeed_default = FilterableFeed;

// dist/src/parser/youtube/Channel.js
var Channel2 = class extends TabbedFeed_default {
  constructor(actions, data, already_parsed = false) {
    var _a4, _b2, _c, _d, _e, _f;
    super(actions, data, already_parsed);
    this.header = (_b2 = (_a4 = this.page.header) === null || _a4 === void 0 ? void 0 : _a4.item()) === null || _b2 === void 0 ? void 0 : _b2.as(C4TabbedHeader_default, CarouselHeader_default, InteractiveTabbedHeader_default, PageHeader_default);
    const metadata = (_c = this.page.metadata) === null || _c === void 0 ? void 0 : _c.item().as(ChannelMetadata_default);
    const microformat = (_d = this.page.microformat) === null || _d === void 0 ? void 0 : _d.as(MicroformatData_default);
    if (this.page.alerts) {
      const alert = this.page.alerts.first();
      if ((alert === null || alert === void 0 ? void 0 : alert.alert_type) === "ERROR") {
        throw new ChannelError(alert.text.toString());
      }
    }
    if (!metadata && !this.page.contents)
      throw new InnertubeError("Invalid channel", this);
    this.metadata = Object.assign(Object.assign({}, metadata), microformat || {});
    this.subscribe_button = (_e = this.page.header_memo) === null || _e === void 0 ? void 0 : _e.getType(SubscribeButton_default).first();
    this.current_tab = (_f = this.page.contents) === null || _f === void 0 ? void 0 : _f.item().as(TwoColumnBrowseResults_default).tabs.array().filterType(Tab_default, ExpandableTab_default).get({ selected: true });
  }
  applyFilter(filter) {
    var _a4;
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      let target_filter;
      const filter_chipbar = this.memo.getType(FeedFilterChipBar_default).first();
      if (typeof filter === "string") {
        target_filter = filter_chipbar === null || filter_chipbar === void 0 ? void 0 : filter_chipbar.contents.get({ text: filter });
        if (!target_filter)
          throw new InnertubeError(`Filter ${filter} not found`, { available_filters: this.filters });
      } else if (filter instanceof ChipCloudChip_default) {
        target_filter = filter;
      }
      if (!target_filter)
        throw new InnertubeError("Invalid filter", filter);
      const page = yield (_a4 = target_filter.endpoint) === null || _a4 === void 0 ? void 0 : _a4.call(this.actions, { parse: true });
      if (!page)
        throw new InnertubeError("No page returned", { filter: target_filter });
      return new FilteredChannelList(this.actions, page, true);
    });
  }
  applySort(sort) {
    var _a4, _b2;
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const sort_filter_sub_menu = this.memo.getType(SortFilterSubMenu_default).first();
      if (!sort_filter_sub_menu)
        throw new InnertubeError("No sort filter sub menu found");
      const target_sort = (_a4 = sort_filter_sub_menu === null || sort_filter_sub_menu === void 0 ? void 0 : sort_filter_sub_menu.sub_menu_items) === null || _a4 === void 0 ? void 0 : _a4.find((item) => item.title === sort);
      if (!target_sort)
        throw new InnertubeError(`Sort filter ${sort} not found`, { available_sort_filters: this.sort_filters });
      if (target_sort.selected)
        return this;
      const page = yield (_b2 = target_sort.endpoint) === null || _b2 === void 0 ? void 0 : _b2.call(this.actions, { parse: true });
      return new Channel2(this.actions, page, true);
    });
  }
  applyContentTypeFilter(content_type_filter) {
    var _a4, _b2, _c, _d;
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const sub_menu = (_c = (_b2 = (_a4 = this.current_tab) === null || _a4 === void 0 ? void 0 : _a4.content) === null || _b2 === void 0 ? void 0 : _b2.as(SectionList_default).sub_menu) === null || _c === void 0 ? void 0 : _c.as(ChannelSubMenu_default);
      if (!sub_menu)
        throw new InnertubeError("Sub menu not found");
      const item = sub_menu.content_type_sub_menu_items.find((item2) => item2.title === content_type_filter);
      if (!item)
        throw new InnertubeError(`Sub menu item ${content_type_filter} not found`, { available_filters: this.content_type_filters });
      if (item.selected)
        return this;
      const page = yield (_d = item.endpoint) === null || _d === void 0 ? void 0 : _d.call(this.actions, { parse: true });
      return new Channel2(this.actions, page, true);
    });
  }
  get filters() {
    var _a4, _b2;
    return ((_b2 = (_a4 = this.memo.getType(FeedFilterChipBar_default)) === null || _a4 === void 0 ? void 0 : _a4[0]) === null || _b2 === void 0 ? void 0 : _b2.contents.filterType(ChipCloudChip_default).map((chip) => chip.text)) || [];
  }
  get sort_filters() {
    var _a4;
    const sort_filter_sub_menu = this.memo.getType(SortFilterSubMenu_default).first();
    return ((_a4 = sort_filter_sub_menu === null || sort_filter_sub_menu === void 0 ? void 0 : sort_filter_sub_menu.sub_menu_items) === null || _a4 === void 0 ? void 0 : _a4.map((item) => item.title)) || [];
  }
  get content_type_filters() {
    var _a4, _b2, _c;
    const sub_menu = (_c = (_b2 = (_a4 = this.current_tab) === null || _a4 === void 0 ? void 0 : _a4.content) === null || _b2 === void 0 ? void 0 : _b2.as(SectionList_default).sub_menu) === null || _c === void 0 ? void 0 : _c.as(ChannelSubMenu_default);
    return (sub_menu === null || sub_menu === void 0 ? void 0 : sub_menu.content_type_sub_menu_items.map((item) => item.title)) || [];
  }
  getHome() {
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("featured");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getVideos() {
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("videos");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getShorts() {
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("shorts");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getLiveStreams() {
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("streams");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getReleases() {
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("releases");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getPodcasts() {
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("podcasts");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getPlaylists() {
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("playlists");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getCommunity() {
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("community");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getChannels() {
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("channels");
      return new Channel2(this.actions, tab.page, true);
    });
  }
  getAbout() {
    var _a4;
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const tab = yield this.getTabByURL("about");
      return (_a4 = tab.memo.getType(ChannelAboutFullMetadata_default)) === null || _a4 === void 0 ? void 0 : _a4[0];
    });
  }
  search(query) {
    var _a4, _b2;
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const tab = (_a4 = this.memo.getType(ExpandableTab_default)) === null || _a4 === void 0 ? void 0 : _a4[0];
      if (!tab)
        throw new InnertubeError("Search tab not found", this);
      const page = yield (_b2 = tab.endpoint) === null || _b2 === void 0 ? void 0 : _b2.call(this.actions, { query, parse: true });
      return new Channel2(this.actions, page, true);
    });
  }
  get has_home() {
    return this.hasTabWithURL("featured");
  }
  get has_videos() {
    return this.hasTabWithURL("videos");
  }
  get has_shorts() {
    return this.hasTabWithURL("shorts");
  }
  get has_live_streams() {
    return this.hasTabWithURL("streams");
  }
  get has_releases() {
    return this.hasTabWithURL("releases");
  }
  get has_podcasts() {
    return this.hasTabWithURL("podcasts");
  }
  get has_playlists() {
    return this.hasTabWithURL("playlists");
  }
  get has_community() {
    return this.hasTabWithURL("community");
  }
  get has_channels() {
    return this.hasTabWithURL("channels");
  }
  get has_about() {
    return this.hasTabWithURL("about");
  }
  get has_search() {
    var _a4;
    return ((_a4 = this.memo.getType(ExpandableTab_default)) === null || _a4 === void 0 ? void 0 : _a4.length) > 0;
  }
  getContinuation() {
    const _super = Object.create(null, {
      getContinuationData: { get: () => super.getContinuationData }
    });
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const page = yield _super.getContinuationData.call(this);
      if (!page)
        throw new InnertubeError("Could not get continuation data");
      return new ChannelListContinuation(this.actions, page, true);
    });
  }
};
__name(Channel2, "Channel");
var ChannelListContinuation = class extends Feed_default {
  constructor(actions, data, already_parsed = false) {
    var _a4, _b2;
    super(actions, data, already_parsed);
    this.contents = ((_a4 = this.page.on_response_received_actions) === null || _a4 === void 0 ? void 0 : _a4.first()) || ((_b2 = this.page.on_response_received_endpoints) === null || _b2 === void 0 ? void 0 : _b2.first());
  }
  getContinuation() {
    const _super = Object.create(null, {
      getContinuationData: { get: () => super.getContinuationData }
    });
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const page = yield _super.getContinuationData.call(this);
      if (!page)
        throw new InnertubeError("Could not get continuation data");
      return new ChannelListContinuation(this.actions, page, true);
    });
  }
};
__name(ChannelListContinuation, "ChannelListContinuation");
var FilteredChannelList = class extends FilterableFeed_default {
  constructor(actions, data, already_parsed = false) {
    super(actions, data, already_parsed);
    this.applied_filter = this.memo.getType(ChipCloudChip_default).get({ is_selected: true });
    if (this.page.on_response_received_actions && this.page.on_response_received_actions.length > 1) {
      this.page.on_response_received_actions.shift();
    }
    this.contents = this.page.on_response_received_actions.first();
  }
  applyFilter(filter) {
    const _super = Object.create(null, {
      getFilteredFeed: { get: () => super.getFilteredFeed }
    });
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const feed = yield _super.getFilteredFeed.call(this, filter);
      return new FilteredChannelList(this.actions, feed.page, true);
    });
  }
  getContinuation() {
    const _super = Object.create(null, {
      getContinuationData: { get: () => super.getContinuationData }
    });
    return (0, import_tslib14.__awaiter)(this, void 0, void 0, function* () {
      const page = yield _super.getContinuationData.call(this);
      if (!(page === null || page === void 0 ? void 0 : page.on_response_received_actions_memo))
        throw new InnertubeError("Unexpected continuation data", page);
      page.on_response_received_actions_memo.set("FeedFilterChipBar", this.memo.getType(FeedFilterChipBar_default));
      page.on_response_received_actions_memo.set("ChipCloudChip", this.memo.getType(ChipCloudChip_default));
      return new FilteredChannelList(this.actions, page, true);
    });
  }
};
__name(FilteredChannelList, "FilteredChannelList");

// dist/src/parser/youtube/Comments.js
var import_tslib15 = require("tslib");
var _Comments_page;
var _Comments_actions;
var _Comments_continuation;
var Comments = class {
  constructor(actions, data, already_parsed = false) {
    var _a4, _b2, _c;
    _Comments_page.set(this, void 0);
    _Comments_actions.set(this, void 0);
    _Comments_continuation.set(this, void 0);
    (0, import_tslib15.__classPrivateFieldSet)(this, _Comments_page, already_parsed ? data : parser_default.parseResponse(data), "f");
    (0, import_tslib15.__classPrivateFieldSet)(this, _Comments_actions, actions, "f");
    const contents = (0, import_tslib15.__classPrivateFieldGet)(this, _Comments_page, "f").on_response_received_endpoints;
    if (!contents)
      throw new InnertubeError("Comments page did not have any content.");
    const header_node = contents.at(0);
    const body_node = contents.at(1);
    this.header = (_a4 = header_node === null || header_node === void 0 ? void 0 : header_node.contents) === null || _a4 === void 0 ? void 0 : _a4.firstOfType(CommentsHeader_default);
    const threads = ((_b2 = body_node === null || body_node === void 0 ? void 0 : body_node.contents) === null || _b2 === void 0 ? void 0 : _b2.filterType(CommentThread_default)) || [];
    this.contents = observe(threads.map((thread) => {
      var _a5;
      (_a5 = thread.comment) === null || _a5 === void 0 ? void 0 : _a5.setActions((0, import_tslib15.__classPrivateFieldGet)(this, _Comments_actions, "f"));
      thread.setActions((0, import_tslib15.__classPrivateFieldGet)(this, _Comments_actions, "f"));
      return thread;
    }));
    (0, import_tslib15.__classPrivateFieldSet)(this, _Comments_continuation, (_c = body_node === null || body_node === void 0 ? void 0 : body_node.contents) === null || _c === void 0 ? void 0 : _c.firstOfType(ContinuationItem_default), "f");
  }
  applySort(sort) {
    var _a4, _b2, _c, _d;
    return (0, import_tslib15.__awaiter)(this, void 0, void 0, function* () {
      if (!this.header)
        throw new InnertubeError("Page header is missing. Cannot apply sort option.");
      let button;
      if (sort === "TOP_COMMENTS") {
        button = (_b2 = (_a4 = this.header.sort_menu) === null || _a4 === void 0 ? void 0 : _a4.sub_menu_items) === null || _b2 === void 0 ? void 0 : _b2.at(0);
      } else if (sort === "NEWEST_FIRST") {
        button = (_d = (_c = this.header.sort_menu) === null || _c === void 0 ? void 0 : _c.sub_menu_items) === null || _d === void 0 ? void 0 : _d.at(1);
      }
      if (!button)
        throw new InnertubeError("Could not find target button.");
      if (button.selected)
        return this;
      const response = yield button.endpoint.call((0, import_tslib15.__classPrivateFieldGet)(this, _Comments_actions, "f"), { parse: true });
      return new Comments((0, import_tslib15.__classPrivateFieldGet)(this, _Comments_actions, "f"), response, true);
    });
  }
  createComment(text) {
    var _a4;
    return (0, import_tslib15.__awaiter)(this, void 0, void 0, function* () {
      if (!this.header)
        throw new InnertubeError("Page header is missing. Cannot create comment.");
      const button = (_a4 = this.header.create_renderer) === null || _a4 === void 0 ? void 0 : _a4.as(CommentSimplebox_default).submit_button;
      if (!button)
        throw new InnertubeError("Could not find target button. You are probably not logged in.");
      if (!button.endpoint)
        throw new InnertubeError("Button does not have an endpoint.");
      const response = yield button.endpoint.call((0, import_tslib15.__classPrivateFieldGet)(this, _Comments_actions, "f"), { commentText: text });
      return response;
    });
  }
  getContinuation() {
    return (0, import_tslib15.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib15.__classPrivateFieldGet)(this, _Comments_continuation, "f"))
        throw new InnertubeError("Continuation not found");
      const data = yield (0, import_tslib15.__classPrivateFieldGet)(this, _Comments_continuation, "f").endpoint.call((0, import_tslib15.__classPrivateFieldGet)(this, _Comments_actions, "f"), { parse: true });
      const page = Object.assign({}, (0, import_tslib15.__classPrivateFieldGet)(this, _Comments_page, "f"));
      if (!page.on_response_received_endpoints || !data.on_response_received_endpoints)
        throw new InnertubeError("Invalid reponse format, missing on_response_received_endpoints.");
      page.on_response_received_endpoints.pop();
      page.on_response_received_endpoints.push(data.on_response_received_endpoints[0]);
      return new Comments((0, import_tslib15.__classPrivateFieldGet)(this, _Comments_actions, "f"), page, true);
    });
  }
  get has_continuation() {
    return !!(0, import_tslib15.__classPrivateFieldGet)(this, _Comments_continuation, "f");
  }
  get page() {
    return (0, import_tslib15.__classPrivateFieldGet)(this, _Comments_page, "f");
  }
};
__name(Comments, "Comments");
_Comments_page = /* @__PURE__ */ new WeakMap(), _Comments_actions = /* @__PURE__ */ new WeakMap(), _Comments_continuation = /* @__PURE__ */ new WeakMap();
var Comments_default = Comments;

// dist/src/parser/youtube/Guide.js
var import_tslib16 = require("tslib");
var _Guide_page;
var Guide = class {
  constructor(data) {
    _Guide_page.set(this, void 0);
    (0, import_tslib16.__classPrivateFieldSet)(this, _Guide_page, parser_exports.parseResponse(data), "f");
    this.contents = (0, import_tslib16.__classPrivateFieldGet)(this, _Guide_page, "f").items.array().as(GuideSection_default, GuideSubscriptionsSection_default);
  }
  get page() {
    return (0, import_tslib16.__classPrivateFieldGet)(this, _Guide_page, "f");
  }
};
__name(Guide, "Guide");
_Guide_page = /* @__PURE__ */ new WeakMap();
var Guide_default = Guide;

// dist/src/parser/youtube/History.js
var import_tslib17 = require("tslib");
var History = class extends Feed_default {
  constructor(actions, data, already_parsed = false) {
    super(actions, data, already_parsed);
    this.sections = this.memo.getType(ItemSection_default);
    this.feed_actions = this.memo.getType(BrowseFeedActions_default).first();
  }
  getContinuation() {
    return (0, import_tslib17.__awaiter)(this, void 0, void 0, function* () {
      const response = yield this.getContinuationData();
      if (!response)
        throw new Error("No continuation data found");
      return new History(this.actions, response, true);
    });
  }
};
__name(History, "History");
var History_default = History;

// dist/src/parser/youtube/HomeFeed.js
var import_tslib18 = require("tslib");
var HomeFeed = class extends FilterableFeed_default {
  constructor(actions, data, already_parsed = false) {
    super(actions, data, already_parsed);
    this.header = this.memo.getType(FeedTabbedHeader_default).first();
    this.contents = this.memo.getType(RichGrid_default).first() || this.page.on_response_received_actions.first();
  }
  applyFilter(filter) {
    const _super = Object.create(null, {
      getFilteredFeed: { get: () => super.getFilteredFeed }
    });
    return (0, import_tslib18.__awaiter)(this, void 0, void 0, function* () {
      const feed = yield _super.getFilteredFeed.call(this, filter);
      return new HomeFeed(this.actions, feed.page, true);
    });
  }
  getContinuation() {
    const _super = Object.create(null, {
      getContinuation: { get: () => super.getContinuation }
    });
    var _a4;
    return (0, import_tslib18.__awaiter)(this, void 0, void 0, function* () {
      const feed = yield _super.getContinuation.call(this);
      feed.page.header = this.page.header;
      (_a4 = feed.page.header_memo) === null || _a4 === void 0 ? void 0 : _a4.set(this.header.type, [this.header]);
      return new HomeFeed(this.actions, feed.page, true);
    });
  }
};
__name(HomeFeed, "HomeFeed");

// dist/src/parser/youtube/HashtagFeed.js
var import_tslib19 = require("tslib");
var HashtagFeed = class extends FilterableFeed_default {
  constructor(actions, response) {
    super(actions, response);
    if (!this.page.contents_memo)
      throw new InnertubeError("Unexpected response", this.page);
    const tab = this.page.contents_memo.getType(Tab_default).first();
    if (!tab.content)
      throw new InnertubeError("Content tab has no content", tab);
    if (this.page.header) {
      this.header = this.page.header.item().as(HashtagHeader_default, PageHeader_default);
    }
    this.contents = tab.content.as(RichGrid_default);
  }
  applyFilter(filter) {
    const _super = Object.create(null, {
      getFilteredFeed: { get: () => super.getFilteredFeed }
    });
    return (0, import_tslib19.__awaiter)(this, void 0, void 0, function* () {
      const response = yield _super.getFilteredFeed.call(this, filter);
      return new HashtagFeed(this.actions, response.page);
    });
  }
};
__name(HashtagFeed, "HashtagFeed");

// dist/src/parser/youtube/ItemMenu.js
var import_tslib20 = require("tslib");
var _ItemMenu_page;
var _ItemMenu_actions;
var _ItemMenu_items;
var ItemMenu = class {
  constructor(data, actions) {
    _ItemMenu_page.set(this, void 0);
    _ItemMenu_actions.set(this, void 0);
    _ItemMenu_items.set(this, void 0);
    (0, import_tslib20.__classPrivateFieldSet)(this, _ItemMenu_page, data, "f");
    (0, import_tslib20.__classPrivateFieldSet)(this, _ItemMenu_actions, actions, "f");
    const menu = data === null || data === void 0 ? void 0 : data.live_chat_item_context_menu_supported_renderers;
    if (!menu || !menu.is(Menu_default))
      throw new InnertubeError('Response did not have a "live_chat_item_context_menu_supported_renderers" property. The call may have failed.');
    (0, import_tslib20.__classPrivateFieldSet)(this, _ItemMenu_items, menu.as(Menu_default).items, "f");
  }
  selectItem(item) {
    return (0, import_tslib20.__awaiter)(this, void 0, void 0, function* () {
      let endpoint;
      if (item instanceof Button_default) {
        if (!item.endpoint)
          throw new InnertubeError("Item does not have an endpoint.");
        endpoint = item.endpoint;
      } else {
        const button = (0, import_tslib20.__classPrivateFieldGet)(this, _ItemMenu_items, "f").find((button2) => {
          if (!button2.is(MenuServiceItem_default)) {
            return false;
          }
          const menuServiceItem = button2.as(MenuServiceItem_default);
          return menuServiceItem.icon_type === item;
        });
        if (!button || !button.is(MenuServiceItem_default))
          throw new InnertubeError(`Button "${item}" not found.`);
        endpoint = button.endpoint;
      }
      if (!endpoint)
        throw new InnertubeError("Target button does not have an endpoint.");
      const response = yield endpoint.call((0, import_tslib20.__classPrivateFieldGet)(this, _ItemMenu_actions, "f"), { parse: true });
      return response;
    });
  }
  items() {
    return (0, import_tslib20.__classPrivateFieldGet)(this, _ItemMenu_items, "f");
  }
  page() {
    return (0, import_tslib20.__classPrivateFieldGet)(this, _ItemMenu_page, "f");
  }
};
__name(ItemMenu, "ItemMenu");
_ItemMenu_page = /* @__PURE__ */ new WeakMap(), _ItemMenu_actions = /* @__PURE__ */ new WeakMap(), _ItemMenu_items = /* @__PURE__ */ new WeakMap();
var ItemMenu_default = ItemMenu;

// dist/src/parser/youtube/Library.js
var import_tslib22 = require("tslib");

// dist/src/parser/youtube/Playlist.js
var import_tslib21 = require("tslib");
var _Playlist_instances;
var _Playlist_getStat;
var Playlist2 = class extends Feed_default {
  constructor(actions, data, already_parsed = false) {
    var _a4, _b2, _c, _d;
    super(actions, data, already_parsed);
    _Playlist_instances.add(this);
    const header = this.memo.getType(PlaylistHeader_default).first();
    const primary_info = this.memo.getType(PlaylistSidebarPrimaryInfo_default).first();
    const secondary_info = this.memo.getType(PlaylistSidebarSecondaryInfo_default).first();
    if (!primary_info && !secondary_info)
      throw new InnertubeError("This playlist does not exist");
    this.info = Object.assign(Object.assign({}, (_a4 = this.page.metadata) === null || _a4 === void 0 ? void 0 : _a4.item().as(PlaylistMetadata_default)), {
      subtitle: header ? header.subtitle : null,
      author: (_c = (_b2 = secondary_info === null || secondary_info === void 0 ? void 0 : secondary_info.owner) === null || _b2 === void 0 ? void 0 : _b2.as(VideoOwner_default).author) !== null && _c !== void 0 ? _c : header === null || header === void 0 ? void 0 : header.author,
      thumbnails: (_d = primary_info === null || primary_info === void 0 ? void 0 : primary_info.thumbnail_renderer) === null || _d === void 0 ? void 0 : _d.as(PlaylistVideoThumbnail_default, PlaylistCustomThumbnail_default).thumbnail,
      total_items: (0, import_tslib21.__classPrivateFieldGet)(this, _Playlist_instances, "m", _Playlist_getStat).call(this, 0, primary_info),
      views: (0, import_tslib21.__classPrivateFieldGet)(this, _Playlist_instances, "m", _Playlist_getStat).call(this, 1, primary_info),
      last_updated: (0, import_tslib21.__classPrivateFieldGet)(this, _Playlist_instances, "m", _Playlist_getStat).call(this, 2, primary_info),
      can_share: header === null || header === void 0 ? void 0 : header.can_share,
      can_delete: header === null || header === void 0 ? void 0 : header.can_delete,
      is_editable: header === null || header === void 0 ? void 0 : header.is_editable,
      privacy: header === null || header === void 0 ? void 0 : header.privacy
    });
    this.menu = primary_info === null || primary_info === void 0 ? void 0 : primary_info.menu;
    this.endpoint = primary_info === null || primary_info === void 0 ? void 0 : primary_info.endpoint;
    this.messages = this.memo.getType(Message_default);
  }
  get items() {
    return this.videos;
  }
  getContinuation() {
    return (0, import_tslib21.__awaiter)(this, void 0, void 0, function* () {
      const page = yield this.getContinuationData();
      if (!page)
        throw new InnertubeError("Could not get continuation data");
      return new Playlist2(this.actions, page, true);
    });
  }
};
__name(Playlist2, "Playlist");
_Playlist_instances = /* @__PURE__ */ new WeakSet(), _Playlist_getStat = /* @__PURE__ */ __name(function _Playlist_getStat2(index, primary_info) {
  var _a4;
  if (!primary_info || !primary_info.stats)
    return "N/A";
  return ((_a4 = primary_info.stats[index]) === null || _a4 === void 0 ? void 0 : _a4.toString()) || "N/A";
}, "_Playlist_getStat");
var Playlist_default2 = Playlist2;

// dist/src/parser/youtube/Library.js
var _Library_instances;
var _Library_getAll;
var Library = class extends Feed_default {
  constructor(actions, data) {
    super(actions, data);
    _Library_instances.add(this);
    if (!this.page.contents_memo)
      throw new InnertubeError("Page contents not found");
    const stats = this.page.contents_memo.getType(ProfileColumnStats_default).first();
    const user_info = this.page.contents_memo.getType(ProfileColumnUserInfo_default).first();
    this.profile = { stats, user_info };
    const shelves = this.page.contents_memo.getType(Shelf_default);
    this.sections = shelves.map((shelf) => {
      var _a4;
      return {
        type: shelf.icon_type,
        title: shelf.title,
        contents: ((_a4 = shelf.content) === null || _a4 === void 0 ? void 0 : _a4.key("items").array()) || [],
        getAll: () => (0, import_tslib22.__classPrivateFieldGet)(this, _Library_instances, "m", _Library_getAll).call(this, shelf)
      };
    });
  }
  get history() {
    return this.sections.find((section) => section.type === "WATCH_HISTORY");
  }
  get watch_later() {
    return this.sections.find((section) => section.type === "WATCH_LATER");
  }
  get liked_videos() {
    return this.sections.find((section) => section.type === "LIKE");
  }
  get playlists_section() {
    return this.sections.find((section) => section.type === "PLAYLISTS");
  }
  get clips() {
    return this.sections.find((section) => section.type === "CONTENT_CUT");
  }
};
__name(Library, "Library");
_Library_instances = /* @__PURE__ */ new WeakSet(), _Library_getAll = /* @__PURE__ */ __name(function _Library_getAll2(shelf) {
  var _a4;
  return (0, import_tslib22.__awaiter)(this, void 0, void 0, function* () {
    if (!((_a4 = shelf.menu) === null || _a4 === void 0 ? void 0 : _a4.as(Menu_default).hasKey("top_level_buttons")))
      throw new InnertubeError(`The ${shelf.title.text} shelf doesn't have more items`);
    const button = shelf.menu.as(Menu_default).top_level_buttons.firstOfType(Button_default);
    if (!button)
      throw new InnertubeError("Did not find target button.");
    const page = yield button.as(Button_default).endpoint.call(this.actions, { parse: true });
    switch (shelf.icon_type) {
      case "LIKE":
      case "WATCH_LATER":
        return new Playlist_default2(this.actions, page, true);
      case "WATCH_HISTORY":
        return new History_default(this.actions, page, true);
      case "CONTENT_CUT":
        return new Feed_default(this.actions, page, true);
      default:
        throw new InnertubeError("Target shelf not implemented.");
    }
  });
}, "_Library_getAll");
var Library_default = Library;

// dist/src/parser/youtube/LiveChat.js
var import_tslib25 = require("tslib");

// dist/src/utils/EventEmitterLike.js
var import_tslib23 = require("tslib");
var _EventEmitterLike_legacy_listeners;
var EventEmitterLike = class extends EventTarget {
  constructor() {
    super();
    _EventEmitterLike_legacy_listeners.set(this, /* @__PURE__ */ new Map());
  }
  emit(type, ...args) {
    const event = new Platform.shim.CustomEvent(type, { detail: args });
    this.dispatchEvent(event);
  }
  on(type, listener) {
    const wrapper = /* @__PURE__ */ __name((ev) => {
      if (ev instanceof Platform.shim.CustomEvent) {
        listener(...ev.detail);
      } else {
        listener(ev);
      }
    }, "wrapper");
    (0, import_tslib23.__classPrivateFieldGet)(this, _EventEmitterLike_legacy_listeners, "f").set(listener, wrapper);
    this.addEventListener(type, wrapper);
  }
  once(type, listener) {
    const wrapper = /* @__PURE__ */ __name((ev) => {
      if (ev instanceof Platform.shim.CustomEvent) {
        listener(...ev.detail);
      } else {
        listener(ev);
      }
      this.off(type, listener);
    }, "wrapper");
    (0, import_tslib23.__classPrivateFieldGet)(this, _EventEmitterLike_legacy_listeners, "f").set(listener, wrapper);
    this.addEventListener(type, wrapper);
  }
  off(type, listener) {
    const wrapper = (0, import_tslib23.__classPrivateFieldGet)(this, _EventEmitterLike_legacy_listeners, "f").get(listener);
    if (wrapper) {
      this.removeEventListener(type, wrapper);
      (0, import_tslib23.__classPrivateFieldGet)(this, _EventEmitterLike_legacy_listeners, "f").delete(listener);
    }
  }
};
__name(EventEmitterLike, "EventEmitterLike");
_EventEmitterLike_legacy_listeners = /* @__PURE__ */ new WeakMap();
var EventEmitterLike_default = EventEmitterLike;

// dist/src/parser/youtube/SmoothedQueue.js
var import_tslib24 = require("tslib");
var _SmoothedQueue_last_update_time;
var _SmoothedQueue_estimated_update_interval;
var _SmoothedQueue_callback;
var _SmoothedQueue_action_queue;
var _SmoothedQueue_next_update_id;
var _SmoothedQueue_poll_response_delay_queue;
function flattenQueue(queue) {
  const nodes = [];
  for (const group of queue) {
    if (Array.isArray(group)) {
      for (const node of group) {
        nodes.push(node);
      }
    } else {
      nodes.push(group);
    }
  }
  return nodes;
}
__name(flattenQueue, "flattenQueue");
var DelayQueue = class {
  constructor() {
    this.front = [];
    this.back = [];
  }
  isEmpty() {
    return !this.front.length && !this.back.length;
  }
  clear() {
    this.front = [];
    this.back = [];
  }
  getValues() {
    return this.front.concat(this.back.reverse());
  }
};
__name(DelayQueue, "DelayQueue");
var SmoothedQueue = class {
  constructor() {
    _SmoothedQueue_last_update_time.set(this, void 0);
    _SmoothedQueue_estimated_update_interval.set(this, void 0);
    _SmoothedQueue_callback.set(this, void 0);
    _SmoothedQueue_action_queue.set(this, void 0);
    _SmoothedQueue_next_update_id.set(this, void 0);
    _SmoothedQueue_poll_response_delay_queue.set(this, void 0);
    (0, import_tslib24.__classPrivateFieldSet)(this, _SmoothedQueue_last_update_time, null, "f");
    (0, import_tslib24.__classPrivateFieldSet)(this, _SmoothedQueue_estimated_update_interval, null, "f");
    (0, import_tslib24.__classPrivateFieldSet)(this, _SmoothedQueue_callback, null, "f");
    (0, import_tslib24.__classPrivateFieldSet)(this, _SmoothedQueue_action_queue, [], "f");
    (0, import_tslib24.__classPrivateFieldSet)(this, _SmoothedQueue_next_update_id, null, "f");
    (0, import_tslib24.__classPrivateFieldSet)(this, _SmoothedQueue_poll_response_delay_queue, new DelayQueue(), "f");
  }
  enqueueActionGroup(group) {
    if ((0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_last_update_time, "f") !== null) {
      const delay = Date.now() - (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_last_update_time, "f");
      (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_poll_response_delay_queue, "f").back.push(delay);
      if (5 < (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_poll_response_delay_queue, "f").front.length + (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_poll_response_delay_queue, "f").back.length) {
        if (!(0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_poll_response_delay_queue, "f").front.length) {
          (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_poll_response_delay_queue, "f").front = (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_poll_response_delay_queue, "f").back;
          (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_poll_response_delay_queue, "f").front.reverse();
          (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_poll_response_delay_queue, "f").back = [];
        }
        (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_poll_response_delay_queue, "f").front.pop();
      }
      (0, import_tslib24.__classPrivateFieldSet)(this, _SmoothedQueue_estimated_update_interval, Math.max(...(0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_poll_response_delay_queue, "f").getValues()), "f");
    }
    (0, import_tslib24.__classPrivateFieldSet)(this, _SmoothedQueue_last_update_time, Date.now(), "f");
    (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_action_queue, "f").push(group);
    if ((0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_next_update_id, "f") === null) {
      (0, import_tslib24.__classPrivateFieldSet)(this, _SmoothedQueue_next_update_id, setTimeout(this.emitSmoothedActions.bind(this)), "f");
    }
  }
  emitSmoothedActions() {
    (0, import_tslib24.__classPrivateFieldSet)(this, _SmoothedQueue_next_update_id, null, "f");
    if ((0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_action_queue, "f").length) {
      let delay = 1e4;
      if ((0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_estimated_update_interval, "f") !== null && (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_last_update_time, "f") !== null) {
        delay = (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_estimated_update_interval, "f") - Date.now() + (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_last_update_time, "f");
      }
      delay = (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_action_queue, "f").length < delay / 80 ? 1 : Math.ceil((0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_action_queue, "f").length / (delay / 80));
      const actions = flattenQueue((0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_action_queue, "f").splice(0, delay));
      if ((0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_callback, "f")) {
        (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_callback, "f").call(this, actions);
      }
      if ((0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_action_queue, "f") !== null) {
        delay == 1 ? (delay = (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_estimated_update_interval, "f") / (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_action_queue, "f").length, delay *= Math.random() + 0.5, delay = Math.min(1e3, delay), delay = Math.max(80, delay)) : delay = 80;
        (0, import_tslib24.__classPrivateFieldSet)(this, _SmoothedQueue_next_update_id, setTimeout(this.emitSmoothedActions.bind(this), delay), "f");
      }
    }
  }
  clear() {
    if ((0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_next_update_id, "f") !== null) {
      clearTimeout((0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_next_update_id, "f"));
      (0, import_tslib24.__classPrivateFieldSet)(this, _SmoothedQueue_next_update_id, null, "f");
    }
    (0, import_tslib24.__classPrivateFieldSet)(this, _SmoothedQueue_action_queue, [], "f");
  }
  set callback(cb) {
    (0, import_tslib24.__classPrivateFieldSet)(this, _SmoothedQueue_callback, cb, "f");
  }
  get callback() {
    return (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_callback, "f");
  }
  get action_queue() {
    return (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_action_queue, "f");
  }
  get estimated_update_interval() {
    return (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_estimated_update_interval, "f");
  }
  get last_update_time() {
    return (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_last_update_time, "f");
  }
  get next_update_id() {
    return (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_next_update_id, "f");
  }
  get poll_response_delay_queue() {
    return (0, import_tslib24.__classPrivateFieldGet)(this, _SmoothedQueue_poll_response_delay_queue, "f");
  }
};
__name(SmoothedQueue, "SmoothedQueue");
_SmoothedQueue_last_update_time = /* @__PURE__ */ new WeakMap(), _SmoothedQueue_estimated_update_interval = /* @__PURE__ */ new WeakMap(), _SmoothedQueue_callback = /* @__PURE__ */ new WeakMap(), _SmoothedQueue_action_queue = /* @__PURE__ */ new WeakMap(), _SmoothedQueue_next_update_id = /* @__PURE__ */ new WeakMap(), _SmoothedQueue_poll_response_delay_queue = /* @__PURE__ */ new WeakMap();
var SmoothedQueue_default = SmoothedQueue;

// dist/src/parser/youtube/LiveChat.js
var _LiveChat_instances;
var _LiveChat_actions;
var _LiveChat_video_id;
var _LiveChat_channel_id;
var _LiveChat_continuation;
var _LiveChat_mcontinuation;
var _LiveChat_retry_count;
var _LiveChat_pollLivechat;
var _LiveChat_emitSmoothedActions;
var _LiveChat_pollMetadata;
var _LiveChat_wait;
var LiveChat2 = class extends EventEmitterLike_default {
  constructor(video_info) {
    var _a4, _b2;
    super();
    _LiveChat_instances.add(this);
    _LiveChat_actions.set(this, void 0);
    _LiveChat_video_id.set(this, void 0);
    _LiveChat_channel_id.set(this, void 0);
    _LiveChat_continuation.set(this, void 0);
    _LiveChat_mcontinuation.set(this, void 0);
    _LiveChat_retry_count.set(this, 0);
    this.running = false;
    this.is_replay = false;
    (0, import_tslib25.__classPrivateFieldSet)(this, _LiveChat_video_id, video_info.basic_info.id, "f");
    (0, import_tslib25.__classPrivateFieldSet)(this, _LiveChat_channel_id, video_info.basic_info.channel_id, "f");
    (0, import_tslib25.__classPrivateFieldSet)(this, _LiveChat_actions, video_info.actions, "f");
    (0, import_tslib25.__classPrivateFieldSet)(this, _LiveChat_continuation, (_a4 = video_info.livechat) === null || _a4 === void 0 ? void 0 : _a4.continuation, "f");
    this.is_replay = ((_b2 = video_info.livechat) === null || _b2 === void 0 ? void 0 : _b2.is_replay) || false;
    this.smoothed_queue = new SmoothedQueue_default();
    this.smoothed_queue.callback = (actions) => (0, import_tslib25.__awaiter)(this, void 0, void 0, function* () {
      if (!actions.length) {
        yield (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 2e3);
      } else if (actions.length < 10) {
        yield (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_instances, "m", _LiveChat_emitSmoothedActions).call(this, actions);
      } else if (this.is_replay) {
        (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_instances, "m", _LiveChat_emitSmoothedActions).call(this, actions);
        yield (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 2e3);
      } else {
        (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_instances, "m", _LiveChat_emitSmoothedActions).call(this, actions);
      }
      if (this.running) {
        (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_instances, "m", _LiveChat_pollLivechat).call(this);
      }
    });
  }
  on(type, listener) {
    super.on(type, listener);
  }
  once(type, listener) {
    super.once(type, listener);
  }
  start() {
    if (!this.running) {
      this.running = true;
      (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_instances, "m", _LiveChat_pollLivechat).call(this);
      (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_instances, "m", _LiveChat_pollMetadata).call(this);
    }
  }
  stop() {
    this.smoothed_queue.clear();
    this.running = false;
  }
  sendMessage(text) {
    return (0, import_tslib25.__awaiter)(this, void 0, void 0, function* () {
      const response = yield (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_actions, "f").execute("/live_chat/send_message", {
        params: encodeMessageParams((0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_channel_id, "f"), (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_video_id, "f")),
        richMessage: { textSegments: [{ text }] },
        clientMessageId: Platform.shim.uuidv4(),
        client: "ANDROID",
        parse: true
      });
      if (!response.actions)
        throw new InnertubeError("Unexpected response from send_message", response);
      return response.actions.array().as(AddChatItemAction_default);
    });
  }
  applyFilter(filter) {
    var _a4, _b2, _c, _d, _e, _f, _g;
    if (!this.initial_info)
      throw new InnertubeError("Cannot apply filter before initial info is retrieved.");
    const menu_items = (_c = (_b2 = (_a4 = this.initial_info) === null || _a4 === void 0 ? void 0 : _a4.header) === null || _b2 === void 0 ? void 0 : _b2.view_selector) === null || _c === void 0 ? void 0 : _c.sub_menu_items;
    if (filter === "TOP_CHAT") {
      if ((_d = menu_items === null || menu_items === void 0 ? void 0 : menu_items.at(0)) === null || _d === void 0 ? void 0 : _d.selected)
        return;
      (0, import_tslib25.__classPrivateFieldSet)(this, _LiveChat_continuation, (_e = menu_items === null || menu_items === void 0 ? void 0 : menu_items.at(0)) === null || _e === void 0 ? void 0 : _e.continuation, "f");
    } else {
      if ((_f = menu_items === null || menu_items === void 0 ? void 0 : menu_items.at(1)) === null || _f === void 0 ? void 0 : _f.selected)
        return;
      (0, import_tslib25.__classPrivateFieldSet)(this, _LiveChat_continuation, (_g = menu_items === null || menu_items === void 0 ? void 0 : menu_items.at(1)) === null || _g === void 0 ? void 0 : _g.continuation, "f");
    }
  }
  getItemMenu(item) {
    return (0, import_tslib25.__awaiter)(this, void 0, void 0, function* () {
      if (!item.hasKey("menu_endpoint") || !item.key("menu_endpoint").isInstanceof(NavigationEndpoint_default))
        throw new InnertubeError("This item does not have a menu.", item);
      const response = yield item.key("menu_endpoint").instanceof(NavigationEndpoint_default).call((0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_actions, "f"), { parse: true });
      if (!response)
        throw new InnertubeError("Could not retrieve item menu.", item);
      return new ItemMenu_default(response, (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_actions, "f"));
    });
  }
  selectButton(button) {
    return (0, import_tslib25.__awaiter)(this, void 0, void 0, function* () {
      const response = yield button.endpoint.call((0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_actions, "f"), { parse: true });
      return response;
    });
  }
};
__name(LiveChat2, "LiveChat");
_LiveChat_actions = /* @__PURE__ */ new WeakMap(), _LiveChat_video_id = /* @__PURE__ */ new WeakMap(), _LiveChat_channel_id = /* @__PURE__ */ new WeakMap(), _LiveChat_continuation = /* @__PURE__ */ new WeakMap(), _LiveChat_mcontinuation = /* @__PURE__ */ new WeakMap(), _LiveChat_retry_count = /* @__PURE__ */ new WeakMap(), _LiveChat_instances = /* @__PURE__ */ new WeakSet(), _LiveChat_pollLivechat = /* @__PURE__ */ __name(function _LiveChat_pollLivechat2() {
  (() => (0, import_tslib25.__awaiter)(this, void 0, void 0, function* () {
    var _a4, _b2;
    try {
      const response = yield (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_actions, "f").execute(this.is_replay ? "live_chat/get_live_chat_replay" : "live_chat/get_live_chat", { continuation: (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_continuation, "f"), parse: true });
      const contents = response.continuation_contents;
      if (!contents) {
        this.emit("error", new InnertubeError("Unexpected live chat incremental continuation response", response));
        this.emit("end");
        this.stop();
      }
      if (!(contents instanceof LiveChatContinuation)) {
        this.stop();
        this.emit("end");
        return;
      }
      (0, import_tslib25.__classPrivateFieldSet)(this, _LiveChat_continuation, contents.continuation.token, "f");
      if (contents.header) {
        this.initial_info = contents;
        this.emit("start", contents);
        if (this.running)
          (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_instances, "m", _LiveChat_pollLivechat2).call(this);
      } else {
        this.smoothed_queue.enqueueActionGroup(contents.actions);
      }
      (0, import_tslib25.__classPrivateFieldSet)(this, _LiveChat_retry_count, 0, "f");
    } catch (err) {
      this.emit("error", err);
      if (((0, import_tslib25.__classPrivateFieldSet)(this, _LiveChat_retry_count, (_b2 = (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_retry_count, "f"), _a4 = _b2++, _b2), "f"), _a4) < 10) {
        yield (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 2e3);
        (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_instances, "m", _LiveChat_pollLivechat2).call(this);
      } else {
        this.emit("error", new InnertubeError("Reached retry limit for incremental continuation requests", err));
        this.emit("end");
        this.stop();
      }
    }
  }))();
}, "_LiveChat_pollLivechat"), _LiveChat_emitSmoothedActions = /* @__PURE__ */ __name(function _LiveChat_emitSmoothedActions2(action_queue) {
  return (0, import_tslib25.__awaiter)(this, void 0, void 0, function* () {
    const base = 1e4;
    let delay = action_queue.length < base / 80 ? 1 : Math.ceil(action_queue.length / (base / 80));
    const emit_delay_ms = delay == 1 ? (delay = base / action_queue.length, delay *= Math.random() + 0.5, delay = Math.min(1e3, delay), delay = Math.max(80, delay)) : delay = 80;
    for (const action of action_queue) {
      yield (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, emit_delay_ms);
      this.emit("chat-update", action);
    }
  });
}, "_LiveChat_emitSmoothedActions"), _LiveChat_pollMetadata = /* @__PURE__ */ __name(function _LiveChat_pollMetadata2() {
  (() => (0, import_tslib25.__awaiter)(this, void 0, void 0, function* () {
    var _a4, _b2, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    try {
      const payload = { videoId: (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_video_id, "f") };
      if ((0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_mcontinuation, "f")) {
        payload.continuation = (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_mcontinuation, "f");
      }
      const response = yield (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_actions, "f").execute("/updated_metadata", payload);
      const data = parser_default.parseResponse(response.data);
      (0, import_tslib25.__classPrivateFieldSet)(this, _LiveChat_mcontinuation, (_a4 = data.continuation) === null || _a4 === void 0 ? void 0 : _a4.token, "f");
      this.metadata = {
        title: ((_b2 = data.actions) === null || _b2 === void 0 ? void 0 : _b2.array().firstOfType(UpdateTitleAction_default)) || ((_c = this.metadata) === null || _c === void 0 ? void 0 : _c.title),
        description: ((_d = data.actions) === null || _d === void 0 ? void 0 : _d.array().firstOfType(UpdateDescriptionAction_default)) || ((_e = this.metadata) === null || _e === void 0 ? void 0 : _e.description),
        views: ((_f = data.actions) === null || _f === void 0 ? void 0 : _f.array().firstOfType(UpdateViewershipAction_default)) || ((_g = this.metadata) === null || _g === void 0 ? void 0 : _g.views),
        likes: ((_h = data.actions) === null || _h === void 0 ? void 0 : _h.array().firstOfType(UpdateToggleButtonTextAction_default)) || ((_j = this.metadata) === null || _j === void 0 ? void 0 : _j.likes),
        date: ((_k = data.actions) === null || _k === void 0 ? void 0 : _k.array().firstOfType(UpdateDateTextAction_default)) || ((_l = this.metadata) === null || _l === void 0 ? void 0 : _l.date)
      };
      this.emit("metadata-update", this.metadata);
      yield (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 5e3);
      if (this.running)
        (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_instances, "m", _LiveChat_pollMetadata2).call(this);
    } catch (err) {
      yield (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_instances, "m", _LiveChat_wait).call(this, 2e3);
      if (this.running)
        (0, import_tslib25.__classPrivateFieldGet)(this, _LiveChat_instances, "m", _LiveChat_pollMetadata2).call(this);
    }
  }))();
}, "_LiveChat_pollMetadata"), _LiveChat_wait = /* @__PURE__ */ __name(function _LiveChat_wait2(ms) {
  return (0, import_tslib25.__awaiter)(this, void 0, void 0, function* () {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));
  });
}, "_LiveChat_wait");
var LiveChat_default2 = LiveChat2;

// dist/src/parser/youtube/NotificationsMenu.js
var import_tslib26 = require("tslib");
var _NotificationsMenu_page;
var _NotificationsMenu_actions;
var NotificationsMenu = class {
  constructor(actions, response) {
    _NotificationsMenu_page.set(this, void 0);
    _NotificationsMenu_actions.set(this, void 0);
    (0, import_tslib26.__classPrivateFieldSet)(this, _NotificationsMenu_actions, actions, "f");
    (0, import_tslib26.__classPrivateFieldSet)(this, _NotificationsMenu_page, parser_default.parseResponse(response.data), "f");
    this.header = (0, import_tslib26.__classPrivateFieldGet)(this, _NotificationsMenu_page, "f").actions_memo.getType(SimpleMenuHeader_default).first();
    this.contents = (0, import_tslib26.__classPrivateFieldGet)(this, _NotificationsMenu_page, "f").actions_memo.getType(Notification_default);
  }
  getContinuation() {
    return (0, import_tslib26.__awaiter)(this, void 0, void 0, function* () {
      const continuation = (0, import_tslib26.__classPrivateFieldGet)(this, _NotificationsMenu_page, "f").actions_memo.getType(ContinuationItem_default).first();
      if (!continuation)
        throw new InnertubeError("Continuation not found");
      const response = yield continuation.endpoint.call((0, import_tslib26.__classPrivateFieldGet)(this, _NotificationsMenu_actions, "f"), { parse: false });
      return new NotificationsMenu((0, import_tslib26.__classPrivateFieldGet)(this, _NotificationsMenu_actions, "f"), response);
    });
  }
  get page() {
    return (0, import_tslib26.__classPrivateFieldGet)(this, _NotificationsMenu_page, "f");
  }
};
__name(NotificationsMenu, "NotificationsMenu");
_NotificationsMenu_page = /* @__PURE__ */ new WeakMap(), _NotificationsMenu_actions = /* @__PURE__ */ new WeakMap();
var NotificationsMenu_default = NotificationsMenu;

// dist/src/parser/youtube/Search.js
var import_tslib27 = require("tslib");
var Search = class extends Feed_default {
  constructor(actions, data, already_parsed = false) {
    var _a4, _b2, _c, _d, _e, _f;
    super(actions, data, already_parsed);
    const contents = ((_a4 = this.page.contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(SectionList_default).first().contents) || ((_b2 = this.page.on_response_received_commands) === null || _b2 === void 0 ? void 0 : _b2.first().contents);
    if (!contents)
      throw new InnertubeError("No contents found in search response");
    if (this.page.header)
      this.header = this.page.header.item().as(SearchHeader_default);
    this.results = (_c = contents.find((content) => content.is(ItemSection_default) && content.contents && content.contents.length > 0)) === null || _c === void 0 ? void 0 : _c.as(ItemSection_default).contents;
    this.refinements = this.page.refinements || [];
    this.estimated_results = this.page.estimated_results;
    this.sub_menu = (_d = this.page.contents_memo) === null || _d === void 0 ? void 0 : _d.getType(SearchSubMenu_default).first();
    this.watch_card = (_e = this.page.contents_memo) === null || _e === void 0 ? void 0 : _e.getType(UniversalWatchCard_default).first();
    this.refinement_cards = (_f = this.results) === null || _f === void 0 ? void 0 : _f.firstOfType(HorizontalCardList_default);
  }
  selectRefinementCard(card) {
    var _a4, _b2;
    return (0, import_tslib27.__awaiter)(this, void 0, void 0, function* () {
      let target_card;
      if (typeof card === "string") {
        if (!this.refinement_cards)
          throw new InnertubeError("No refinement cards found.");
        target_card = (_b2 = (_a4 = this.refinement_cards) === null || _a4 === void 0 ? void 0 : _a4.cards.get({ query: card })) === null || _b2 === void 0 ? void 0 : _b2.as(SearchRefinementCard_default);
        if (!target_card)
          throw new InnertubeError(`Refinement card "${card}" not found`, { available_cards: this.refinement_card_queries });
      } else if (card.type === "SearchRefinementCard") {
        target_card = card;
      } else {
        throw new InnertubeError("Invalid refinement card!");
      }
      const page = yield target_card.endpoint.call(this.actions, { parse: true });
      return new Search(this.actions, page, true);
    });
  }
  get refinement_card_queries() {
    var _a4;
    return ((_a4 = this.refinement_cards) === null || _a4 === void 0 ? void 0 : _a4.cards.as(SearchRefinementCard_default).map((card) => card.query)) || [];
  }
  getContinuation() {
    return (0, import_tslib27.__awaiter)(this, void 0, void 0, function* () {
      const response = yield this.getContinuationData();
      if (!response)
        throw new InnertubeError("Could not get continuation data");
      return new Search(this.actions, response, true);
    });
  }
};
__name(Search, "Search");
var Search_default = Search;

// dist/src/parser/youtube/Settings.js
var import_tslib28 = require("tslib");
var _Settings_page;
var _Settings_actions;
var Settings = class {
  constructor(actions, response) {
    var _a4, _b2, _c, _d;
    _Settings_page.set(this, void 0);
    _Settings_actions.set(this, void 0);
    (0, import_tslib28.__classPrivateFieldSet)(this, _Settings_actions, actions, "f");
    (0, import_tslib28.__classPrivateFieldSet)(this, _Settings_page, parser_default.parseResponse(response.data), "f");
    this.sidebar = (_a4 = (0, import_tslib28.__classPrivateFieldGet)(this, _Settings_page, "f").sidebar) === null || _a4 === void 0 ? void 0 : _a4.as(SettingsSidebar_default);
    if (!(0, import_tslib28.__classPrivateFieldGet)(this, _Settings_page, "f").contents)
      throw new InnertubeError("Page contents not found");
    const tab = (0, import_tslib28.__classPrivateFieldGet)(this, _Settings_page, "f").contents.item().as(TwoColumnBrowseResults_default).tabs.array().as(Tab_default).get({ selected: true });
    if (!tab)
      throw new InnertubeError("Target tab not found");
    const contents = (_b2 = tab.content) === null || _b2 === void 0 ? void 0 : _b2.as(SectionList_default).contents.as(ItemSection_default);
    this.introduction = (_d = (_c = contents === null || contents === void 0 ? void 0 : contents.shift()) === null || _c === void 0 ? void 0 : _c.contents) === null || _d === void 0 ? void 0 : _d.firstOfType(PageIntroduction_default);
    this.sections = contents === null || contents === void 0 ? void 0 : contents.map((el) => {
      var _a5;
      return {
        title: ((_a5 = el.header) === null || _a5 === void 0 ? void 0 : _a5.title.toString()) || null,
        contents: el.contents
      };
    });
  }
  selectSidebarItem(target_item) {
    return (0, import_tslib28.__awaiter)(this, void 0, void 0, function* () {
      if (!this.sidebar)
        throw new InnertubeError("Sidebar not available");
      let item;
      if (typeof target_item === "string") {
        item = this.sidebar.items.get({ title: target_item });
        if (!item)
          throw new InnertubeError(`Item "${target_item}" not found`, { available_items: this.sidebar_items });
      } else if (target_item === null || target_item === void 0 ? void 0 : target_item.is(CompactLink_default)) {
        item = target_item;
      } else {
        throw new InnertubeError("Invalid item", { target_item });
      }
      const response = yield item.endpoint.call((0, import_tslib28.__classPrivateFieldGet)(this, _Settings_actions, "f"), { parse: false });
      return new Settings((0, import_tslib28.__classPrivateFieldGet)(this, _Settings_actions, "f"), response);
    });
  }
  getSettingOption(name) {
    var _a4;
    if (!this.sections)
      throw new InnertubeError("Sections not available");
    for (const section of this.sections) {
      if (!section.contents)
        continue;
      for (const el of section.contents) {
        const options = el.as(SettingsOptions_default).options;
        if (options) {
          for (const option of options) {
            if (option.is(SettingsSwitch_default) && ((_a4 = option.title) === null || _a4 === void 0 ? void 0 : _a4.toString()) === name)
              return option;
          }
        }
      }
    }
    throw new InnertubeError(`Option "${name}" not found`, { available_options: this.setting_options });
  }
  get setting_options() {
    if (!this.sections)
      throw new InnertubeError("Sections not available");
    let options = [];
    for (const section of this.sections) {
      if (!section.contents)
        continue;
      for (const el of section.contents) {
        if (el.as(SettingsOptions_default).options)
          options = options.concat(el.as(SettingsOptions_default).options);
      }
    }
    return options.map((opt) => {
      var _a4;
      return (_a4 = opt.title) === null || _a4 === void 0 ? void 0 : _a4.toString();
    }).filter((el) => el);
  }
  get sidebar_items() {
    if (!this.sidebar)
      throw new InnertubeError("Sidebar not available");
    return this.sidebar.items.map((item) => item.title.toString());
  }
  get page() {
    return (0, import_tslib28.__classPrivateFieldGet)(this, _Settings_page, "f");
  }
};
__name(Settings, "Settings");
_Settings_page = /* @__PURE__ */ new WeakMap(), _Settings_actions = /* @__PURE__ */ new WeakMap();
var Settings_default = Settings;

// dist/src/parser/youtube/TimeWatched.js
var import_tslib29 = require("tslib");
var _TimeWatched_page;
var TimeWatched = class {
  constructor(response) {
    var _a4;
    _TimeWatched_page.set(this, void 0);
    (0, import_tslib29.__classPrivateFieldSet)(this, _TimeWatched_page, parser_default.parseResponse(response.data), "f");
    if (!(0, import_tslib29.__classPrivateFieldGet)(this, _TimeWatched_page, "f").contents)
      throw new InnertubeError("Page contents not found");
    const tab = (0, import_tslib29.__classPrivateFieldGet)(this, _TimeWatched_page, "f").contents.item().as(SingleColumnBrowseResults_default).tabs.get({ selected: true });
    if (!tab)
      throw new InnertubeError("Could not find target tab.");
    this.contents = (_a4 = tab.content) === null || _a4 === void 0 ? void 0 : _a4.as(SectionList_default).contents.as(ItemSection_default);
  }
  get page() {
    return (0, import_tslib29.__classPrivateFieldGet)(this, _TimeWatched_page, "f");
  }
};
__name(TimeWatched, "TimeWatched");
_TimeWatched_page = /* @__PURE__ */ new WeakMap();
var TimeWatched_default = TimeWatched;

// dist/src/parser/youtube/VideoInfo.js
var import_tslib37 = require("tslib");

// dist/src/core/mixins/index.js
var mixins_exports = {};
__export(mixins_exports, {
  Feed: () => Feed_default,
  FilterableFeed: () => FilterableFeed_default,
  MediaInfo: () => MediaInfo_default,
  TabbedFeed: () => TabbedFeed_default
});

// dist/src/core/mixins/MediaInfo.js
var import_tslib36 = require("tslib");

// dist/src/utils/FormatUtils.js
var FormatUtils_exports = {};
__export(FormatUtils_exports, {
  chooseFormat: () => chooseFormat,
  download: () => download,
  toDash: () => toDash
});
var import_tslib35 = require("tslib");

// dist/src/utils/DashManifest.js
var import_tslib34 = require("tslib");

// dist/src/utils/DashUtils.js
var import_tslib30 = require("tslib");
var XML_CHARACTER_MAP = {
  "&": "&amp;",
  '"': "&quot;",
  "'": "&apos;",
  "<": "&lt;",
  ">": "&gt;"
};
function escapeXMLString(str) {
  return str.replace(/([&"<>'])/g, (_, item) => {
    return XML_CHARACTER_MAP[item];
  });
}
__name(escapeXMLString, "escapeXMLString");
function normalizeTag(tag) {
  if (tag === "mpd")
    return "MPD";
  if (tag === "base-url")
    return "BaseURL";
  const sections = tag.split("-");
  return sections.map((section) => section.charAt(0).toUpperCase() + section.slice(1)).join("");
}
__name(normalizeTag, "normalizeTag");
function createElement(tagNameOrFunction, props, ...children) {
  const normalizedChildren = children.flat().map((child) => typeof child === "string" ? createTextElement(child) : child);
  if (typeof tagNameOrFunction === "function") {
    return tagNameOrFunction(Object.assign(Object.assign({}, props), { children: normalizedChildren }));
  }
  return {
    type: normalizeTag(tagNameOrFunction),
    props: Object.assign(Object.assign({}, props), { children: normalizedChildren })
  };
}
__name(createElement, "createElement");
function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: { nodeValue: text }
  };
}
__name(createTextElement, "createTextElement");
function renderElementToString(element) {
  return (0, import_tslib30.__awaiter)(this, void 0, void 0, function* () {
    if (element.type === "TEXT_ELEMENT")
      return escapeXMLString(typeof element.props.nodeValue === "string" ? element.props.nodeValue : "");
    let dom = `<${element.type}`;
    if (element.props) {
      const properties = Object.keys(element.props).filter((key) => !["children", "nodeValue"].includes(key) && element.props[key] !== void 0).map((name) => `${name}="${escapeXMLString(`${element.props[name]}`)}"`);
      if (properties.length > 0)
        dom += ` ${properties.join(" ")}`;
    }
    if (element.props.children) {
      const children = yield Promise.all((yield Promise.all(element.props.children.flat())).flat().filter((child) => !!child).map((child) => renderElementToString(child)));
      if (children.length > 0) {
        dom += `>${children.join("")}</${element.type}>`;
        return dom;
      }
    }
    return `${dom}/>`;
  });
}
__name(renderElementToString, "renderElementToString");
function renderToString(root) {
  return (0, import_tslib30.__awaiter)(this, void 0, void 0, function* () {
    const dom = yield renderElementToString(yield root);
    return `<?xml version="1.0" encoding="utf-8"?>${dom}`;
  });
}
__name(renderToString, "renderToString");
function Fragment(props) {
  return props.children;
}
__name(Fragment, "Fragment");

// dist/src/utils/StreamingInfo.js
var import_tslib33 = require("tslib");

// dist/src/utils/Cache.js
var import_tslib31 = require("tslib");
var _UniversalCache_cache;
var UniversalCache = class {
  constructor(persistent, persistent_directory) {
    _UniversalCache_cache.set(this, void 0);
    (0, import_tslib31.__classPrivateFieldSet)(this, _UniversalCache_cache, new Platform.shim.Cache(persistent, persistent_directory), "f");
  }
  get cache_dir() {
    return (0, import_tslib31.__classPrivateFieldGet)(this, _UniversalCache_cache, "f").cache_dir;
  }
  get(key) {
    return (0, import_tslib31.__classPrivateFieldGet)(this, _UniversalCache_cache, "f").get(key);
  }
  set(key, value) {
    return (0, import_tslib31.__classPrivateFieldGet)(this, _UniversalCache_cache, "f").set(key, value);
  }
  remove(key) {
    return (0, import_tslib31.__classPrivateFieldGet)(this, _UniversalCache_cache, "f").remove(key);
  }
};
__name(UniversalCache, "UniversalCache");
_UniversalCache_cache = /* @__PURE__ */ new WeakMap();
var Cache_default = UniversalCache;

// dist/src/utils/HTTPClient.js
var import_tslib32 = require("tslib");
var _HTTPClient_instances;
var _HTTPClient_session;
var _HTTPClient_cookie;
var _HTTPClient_fetch;
var _HTTPClient_adjustContext;
var HTTPClient = class {
  constructor(session, cookie, fetch) {
    _HTTPClient_instances.add(this);
    _HTTPClient_session.set(this, void 0);
    _HTTPClient_cookie.set(this, void 0);
    _HTTPClient_fetch.set(this, void 0);
    (0, import_tslib32.__classPrivateFieldSet)(this, _HTTPClient_session, session, "f");
    (0, import_tslib32.__classPrivateFieldSet)(this, _HTTPClient_cookie, cookie, "f");
    (0, import_tslib32.__classPrivateFieldSet)(this, _HTTPClient_fetch, fetch || Platform.shim.fetch, "f");
  }
  get fetch_function() {
    return (0, import_tslib32.__classPrivateFieldGet)(this, _HTTPClient_fetch, "f");
  }
  fetch(input, init) {
    return (0, import_tslib32.__awaiter)(this, void 0, void 0, function* () {
      const innertube_url = URLS.API.PRODUCTION_1 + (0, import_tslib32.__classPrivateFieldGet)(this, _HTTPClient_session, "f").api_version;
      const baseURL = (init === null || init === void 0 ? void 0 : init.baseURL) || innertube_url;
      const request_url = typeof input === "string" ? !baseURL.endsWith("/") && !input.startsWith("/") ? new URL(`${baseURL}/${input}`) : new URL(baseURL + input) : input instanceof URL ? input : new URL(input.url, baseURL);
      const headers = (init === null || init === void 0 ? void 0 : init.headers) || (input instanceof Platform.shim.Request ? input.headers : new Platform.shim.Headers()) || new Platform.shim.Headers();
      const body = (init === null || init === void 0 ? void 0 : init.body) || (input instanceof Platform.shim.Request ? input.body : void 0);
      const request_headers = new Platform.shim.Headers(headers);
      request_headers.set("Accept", "*/*");
      request_headers.set("Accept-Language", "*");
      request_headers.set("X-Goog-Visitor-Id", (0, import_tslib32.__classPrivateFieldGet)(this, _HTTPClient_session, "f").context.client.visitorData || "");
      request_headers.set("X-Origin", request_url.origin);
      request_headers.set("X-Youtube-Client-Version", (0, import_tslib32.__classPrivateFieldGet)(this, _HTTPClient_session, "f").context.client.clientVersion || "");
      if (Platform.shim.server) {
        request_headers.set("User-Agent", getRandomUserAgent("desktop"));
        request_headers.set("origin", request_url.origin);
      }
      request_url.searchParams.set("key", (0, import_tslib32.__classPrivateFieldGet)(this, _HTTPClient_session, "f").key);
      request_url.searchParams.set("prettyPrint", "false");
      request_url.searchParams.set("alt", "json");
      const content_type = request_headers.get("Content-Type");
      let request_body = body;
      let is_web_kids = false;
      const is_innertube_req = baseURL === innertube_url || baseURL === URLS.YT_UPLOAD;
      if (content_type === "application/json" && is_innertube_req && typeof body === "string") {
        const json = JSON.parse(body);
        const n_body = Object.assign(Object.assign({}, json), {
          context: JSON.parse(JSON.stringify((0, import_tslib32.__classPrivateFieldGet)(this, _HTTPClient_session, "f").context))
        });
        (0, import_tslib32.__classPrivateFieldGet)(this, _HTTPClient_instances, "m", _HTTPClient_adjustContext).call(this, n_body.context, n_body.client);
        request_headers.set("x-youtube-client-version", n_body.context.client.clientVersion);
        delete n_body.client;
        if (Platform.shim.server) {
          if (n_body.context.client.clientName === "ANDROID" || n_body.context.client.clientName === "ANDROID_MUSIC") {
            request_headers.set("User-Agent", CLIENTS.ANDROID.USER_AGENT);
          } else if (n_body.context.client.clientName === "iOS") {
            request_headers.set("User-Agent", CLIENTS.iOS.USER_AGENT);
          }
        }
        is_web_kids = n_body.context.client.clientName === "WEB_KIDS";
        request_body = JSON.stringify(n_body);
      }
      if ((0, import_tslib32.__classPrivateFieldGet)(this, _HTTPClient_session, "f").logged_in && is_innertube_req && !is_web_kids) {
        const oauth = (0, import_tslib32.__classPrivateFieldGet)(this, _HTTPClient_session, "f").oauth;
        if (oauth.validateCredentials()) {
          yield oauth.refreshIfRequired();
          request_headers.set("authorization", `Bearer ${oauth.credentials.access_token}`);
          request_url.searchParams.delete("key");
        }
        if ((0, import_tslib32.__classPrivateFieldGet)(this, _HTTPClient_cookie, "f")) {
          const papisid = getStringBetweenStrings((0, import_tslib32.__classPrivateFieldGet)(this, _HTTPClient_cookie, "f"), "PAPISID=", ";");
          if (papisid) {
            request_headers.set("authorization", yield generateSidAuth(papisid));
            request_headers.set("x-goog-authuser", (0, import_tslib32.__classPrivateFieldGet)(this, _HTTPClient_session, "f").account_index.toString());
          }
          request_headers.set("cookie", (0, import_tslib32.__classPrivateFieldGet)(this, _HTTPClient_cookie, "f"));
        }
      }
      const request = new Platform.shim.Request(request_url, input instanceof Platform.shim.Request ? input : init);
      const response = yield (0, import_tslib32.__classPrivateFieldGet)(this, _HTTPClient_fetch, "f").call(this, request, {
        body: request_body,
        headers: request_headers,
        credentials: "include",
        redirect: input instanceof Platform.shim.Request ? input.redirect : (init === null || init === void 0 ? void 0 : init.redirect) || "follow"
      });
      if (response.ok) {
        return response;
      }
      throw new InnertubeError(`Request to ${response.url} failed with status ${response.status}`, yield response.text());
    });
  }
};
__name(HTTPClient, "HTTPClient");
_HTTPClient_session = /* @__PURE__ */ new WeakMap(), _HTTPClient_cookie = /* @__PURE__ */ new WeakMap(), _HTTPClient_fetch = /* @__PURE__ */ new WeakMap(), _HTTPClient_instances = /* @__PURE__ */ new WeakSet(), _HTTPClient_adjustContext = /* @__PURE__ */ __name(function _HTTPClient_adjustContext2(ctx, client) {
  if (client === "ANDROID" || client === "YTMUSIC_ANDROID" || client === "YTMUSIC_ANDROID" || client === "YTSTUDIO_ANDROID") {
    ctx.client.androidSdkVersion = CLIENTS.ANDROID.SDK_VERSION;
    ctx.client.userAgent = CLIENTS.ANDROID.USER_AGENT;
    ctx.client.osName = "Android";
    ctx.client.osVersion = "10";
    ctx.client.platform = "MOBILE";
  }
  switch (client) {
    case "iOS":
      ctx.client.deviceModel = CLIENTS.iOS.DEVICE_MODEL;
      ctx.client.clientVersion = CLIENTS.iOS.VERSION;
      ctx.client.clientName = CLIENTS.iOS.NAME;
      ctx.client.platform = "MOBILE";
      break;
    case "YTMUSIC":
      ctx.client.clientVersion = CLIENTS.YTMUSIC.VERSION;
      ctx.client.clientName = CLIENTS.YTMUSIC.NAME;
      break;
    case "ANDROID":
      ctx.client.clientVersion = CLIENTS.ANDROID.VERSION;
      ctx.client.clientFormFactor = "SMALL_FORM_FACTOR";
      ctx.client.clientName = CLIENTS.ANDROID.NAME;
      break;
    case "YTMUSIC_ANDROID":
      ctx.client.clientVersion = CLIENTS.YTMUSIC_ANDROID.VERSION;
      ctx.client.clientFormFactor = "SMALL_FORM_FACTOR";
      ctx.client.clientName = CLIENTS.YTMUSIC_ANDROID.NAME;
      break;
    case "YTSTUDIO_ANDROID":
      ctx.client.clientVersion = CLIENTS.YTSTUDIO_ANDROID.VERSION;
      ctx.client.clientFormFactor = "SMALL_FORM_FACTOR";
      ctx.client.clientName = CLIENTS.YTSTUDIO_ANDROID.NAME;
      break;
    case "TV_EMBEDDED":
      ctx.client.clientName = CLIENTS.TV_EMBEDDED.NAME;
      ctx.client.clientVersion = CLIENTS.TV_EMBEDDED.VERSION;
      ctx.client.clientScreen = "EMBED";
      ctx.thirdParty = { embedUrl: URLS.YT_BASE };
      break;
    case "YTKIDS":
      ctx.client.clientVersion = CLIENTS.WEB_KIDS.VERSION;
      ctx.client.clientName = CLIENTS.WEB_KIDS.NAME;
      ctx.client.kidsAppInfo = {
        categorySettings: {
          enabledCategories: [
            "approved_for_you",
            "black_joy",
            "camp",
            "collections",
            "earth",
            "explore",
            "favorites",
            "gaming",
            "halloween",
            "hero",
            "learning",
            "move",
            "music",
            "reading",
            "shared_by_parents",
            "shows",
            "soccer",
            "sports",
            "spotlight",
            "winter"
          ]
        },
        contentSettings: {
          corpusPreference: "KIDS_CORPUS_PREFERENCE_YOUNGER",
          kidsNoSearchMode: "YT_KIDS_NO_SEARCH_MODE_OFF"
        }
      };
      break;
    default:
      break;
  }
}, "_HTTPClient_adjustContext");
var HTTPClient_default = HTTPClient;

// dist/src/utils/StreamingInfo.js
function getFormatGroupings(formats) {
  var _a4, _b2, _c;
  const group_info = /* @__PURE__ */ new Map();
  const has_multiple_audio_tracks = formats.some((fmt) => !!fmt.audio_track);
  for (const format of formats) {
    if ((!format.index_range || !format.init_range) && !format.is_type_otf) {
      continue;
    }
    const mime_type = format.mime_type.split(";")[0];
    const just_codec = (_a4 = getStringBetweenStrings(format.mime_type, 'codecs="', '"')) === null || _a4 === void 0 ? void 0 : _a4.split(".")[0];
    const color_info = format.color_info ? Object.values(format.color_info).join("-") : "";
    const audio_track_id = ((_b2 = format.audio_track) === null || _b2 === void 0 ? void 0 : _b2.id) || "";
    const group_id = `${mime_type}-${just_codec}-${color_info}-${audio_track_id}`;
    if (!group_info.has(group_id)) {
      group_info.set(group_id, []);
    }
    (_c = group_info.get(group_id)) === null || _c === void 0 ? void 0 : _c.push(format);
  }
  return {
    groups: Array.from(group_info.values()),
    has_multiple_audio_tracks
  };
}
__name(getFormatGroupings, "getFormatGroupings");
function hoistCodecsIfPossible(formats, hoisted) {
  if (formats.length > 1 && new Set(formats.map((format) => getStringBetweenStrings(format.mime_type, 'codecs="', '"'))).size === 1) {
    hoisted.push("codecs");
    return getStringBetweenStrings(formats[0].mime_type, 'codecs="', '"');
  }
}
__name(hoistCodecsIfPossible, "hoistCodecsIfPossible");
function hoistNumberAttributeIfPossible(formats, property, hoisted) {
  if (formats.length > 1 && new Set(formats.map((format) => format.fps)).size === 1) {
    hoisted.push(property);
    return Number(formats[0][property]);
  }
}
__name(hoistNumberAttributeIfPossible, "hoistNumberAttributeIfPossible");
function hoistAudioChannelsIfPossible(formats, hoisted) {
  if (formats.length > 1 && new Set(formats.map((format) => format.audio_channels || 2)).size === 1) {
    hoisted.push("AudioChannelConfiguration");
    return formats[0].audio_channels;
  }
}
__name(hoistAudioChannelsIfPossible, "hoistAudioChannelsIfPossible");
function getOTFSegmentTemplate(url, actions) {
  var _a4;
  return (0, import_tslib33.__awaiter)(this, void 0, void 0, function* () {
    const response = yield actions.session.http.fetch_function(`${url}&rn=0&sq=0`, {
      method: "GET",
      headers: Constants_exports.STREAM_HEADERS,
      redirect: "follow"
    });
    const resolved_url = response.url.replace("&rn=0", "").replace("&sq=0", "");
    const response_text = yield response.text();
    const segment_duration_strings = (_a4 = getStringBetweenStrings(response_text, "Segment-Durations-Ms:", "\r\n")) === null || _a4 === void 0 ? void 0 : _a4.split(",");
    if (!segment_duration_strings) {
      throw new InnertubeError("Failed to extract the segment durations from this OTF stream", { url });
    }
    const segment_durations = [];
    for (const segment_duration_string of segment_duration_strings) {
      const trimmed_segment_duration = segment_duration_string.trim();
      if (trimmed_segment_duration.length === 0) {
        continue;
      }
      let repeat_count;
      const repeat_count_string = getStringBetweenStrings(trimmed_segment_duration, "(r=", ")");
      if (repeat_count_string) {
        repeat_count = parseInt(repeat_count_string);
      }
      segment_durations.push({
        duration: parseInt(trimmed_segment_duration),
        repeat_count
      });
    }
    return {
      init_url: `${resolved_url}&sq=0`,
      media_url: `${resolved_url}&sq=$Number$`,
      timeline: segment_durations
    };
  });
}
__name(getOTFSegmentTemplate, "getOTFSegmentTemplate");
function getSegmentInfo(format, url_transformer, actions, player, cpn) {
  const url = new URL(format.decipher(player));
  url.searchParams.set("cpn", cpn || "");
  const transformed_url = url_transformer(url).toString();
  if (format.is_type_otf) {
    if (!actions)
      throw new InnertubeError("Unable to get segment durations for this OTF stream without an Actions instance", { format });
    const info2 = {
      is_oft: true,
      getSegmentTemplate() {
        return getOTFSegmentTemplate(transformed_url, actions);
      }
    };
    return info2;
  }
  if (!format.index_range || !format.init_range)
    throw new InnertubeError("Index and init ranges not available", { format });
  const info = {
    is_oft: false,
    base_url: transformed_url,
    index_range: format.index_range,
    init_range: format.init_range
  };
  return info;
}
__name(getSegmentInfo, "getSegmentInfo");
function getAudioRepresentation(format, hoisted, url_transformer, actions, player, cpn) {
  const url = new URL(format.decipher(player));
  url.searchParams.set("cpn", cpn || "");
  const rep = {
    uid: format.audio_track ? `${format.itag}-${format.audio_track.id}` : format.itag.toString(),
    bitrate: format.bitrate,
    codecs: !hoisted.includes("codecs") ? getStringBetweenStrings(format.mime_type, 'codecs="', '"') : void 0,
    audio_sample_rate: !hoisted.includes("audio_sample_rate") ? format.audio_sample_rate : void 0,
    channels: !hoisted.includes("AudioChannelConfiguration") ? format.audio_channels || 2 : void 0,
    segment_info: getSegmentInfo(format, url_transformer, actions, player, cpn)
  };
  return rep;
}
__name(getAudioRepresentation, "getAudioRepresentation");
function getTrackRole(format) {
  const { audio_track } = format;
  if (!audio_track)
    return;
  if (audio_track.audio_is_default)
    return "main";
  if (format.is_dubbed)
    return "dub";
  if (format.is_descriptive)
    return "description";
  return "alternate";
}
__name(getTrackRole, "getTrackRole");
function getAudioSet(formats, url_transformer, actions, player, cpn) {
  var _a4;
  const first_format = formats[0];
  const { audio_track } = first_format;
  const hoisted = [];
  const set = {
    mime_type: first_format.mime_type.split(";")[0],
    language: (_a4 = first_format.language) !== null && _a4 !== void 0 ? _a4 : void 0,
    codecs: hoistCodecsIfPossible(formats, hoisted),
    audio_sample_rate: hoistNumberAttributeIfPossible(formats, "audio_sample_rate", hoisted),
    track_name: audio_track === null || audio_track === void 0 ? void 0 : audio_track.display_name,
    track_role: getTrackRole(first_format),
    channels: hoistAudioChannelsIfPossible(formats, hoisted),
    representations: formats.map((format) => getAudioRepresentation(format, hoisted, url_transformer, actions, player, cpn))
  };
  return set;
}
__name(getAudioSet, "getAudioSet");
var COLOR_PRIMARIES = {
  BT709: "1",
  BT2020: "9"
};
var COLOR_TRANSFER_CHARACTERISTICS = {
  BT709: "1",
  BT2020_10: "14",
  SMPTEST2084: "16",
  ARIB_STD_B67: "18"
};
var COLOR_MATRIX_COEFFICIENTS = {
  BT709: "1",
  BT2020_NCL: "14"
};
function getColorInfo(format) {
  const color_info = format.color_info;
  const primaries = (color_info === null || color_info === void 0 ? void 0 : color_info.primaries) ? COLOR_PRIMARIES[color_info.primaries] : void 0;
  const transfer_characteristics = (color_info === null || color_info === void 0 ? void 0 : color_info.transfer_characteristics) ? COLOR_TRANSFER_CHARACTERISTICS[color_info.transfer_characteristics] : void 0;
  const matrix_coefficients = (color_info === null || color_info === void 0 ? void 0 : color_info.matrix_coefficients) ? COLOR_MATRIX_COEFFICIENTS[color_info.matrix_coefficients] : void 0;
  if ((color_info === null || color_info === void 0 ? void 0 : color_info.matrix_coefficients) && !matrix_coefficients) {
    const url = new URL(format.url);
    const anonymisedFormat = JSON.parse(JSON.stringify(format));
    anonymisedFormat.url = "REDACTED";
    anonymisedFormat.signature_cipher = "REDACTED";
    anonymisedFormat.cipher = "REDACTED";
    console.warn(`YouTube.js toDash(): Unknown matrix coefficients "${color_info.matrix_coefficients}", the DASH manifest is still usuable without this.
Please report it at ${Platform.shim.info.bugs_url} so we can add support for it.
Innertube client: ${url.searchParams.get("c")}
format:`, anonymisedFormat);
  }
  const info = {
    primaries,
    transfer_characteristics,
    matrix_coefficients
  };
  return info;
}
__name(getColorInfo, "getColorInfo");
function getVideoRepresentation(format, url_transformer, hoisted, player, actions, cpn) {
  const rep = {
    uid: format.itag.toString(),
    bitrate: format.bitrate,
    width: format.width,
    height: format.height,
    codecs: !hoisted.includes("codecs") ? getStringBetweenStrings(format.mime_type, 'codecs="', '"') : void 0,
    fps: !hoisted.includes("fps") ? format.fps : void 0,
    segment_info: getSegmentInfo(format, url_transformer, actions, player, cpn)
  };
  return rep;
}
__name(getVideoRepresentation, "getVideoRepresentation");
function getVideoSet(formats, url_transformer, player, actions, cpn) {
  const first_format = formats[0];
  const color_info = getColorInfo(first_format);
  const hoisted = [];
  const set = {
    mime_type: first_format.mime_type.split(";")[0],
    color_info,
    codecs: hoistCodecsIfPossible(formats, hoisted),
    fps: hoistNumberAttributeIfPossible(formats, "fps", hoisted),
    representations: formats.map((format) => getVideoRepresentation(format, url_transformer, hoisted, player, actions, cpn))
  };
  return set;
}
__name(getVideoSet, "getVideoSet");
function getStoryboardInfo(storyboards) {
  var _a4;
  const mime_info = /* @__PURE__ */ new Map();
  for (const storyboard of storyboards.boards) {
    const extension = new URL(storyboard.template_url).pathname.split(".").pop();
    const mime_type = `image/${extension === "jpg" ? "jpeg" : extension}`;
    if (!mime_info.has(mime_type)) {
      mime_info.set(mime_type, []);
    }
    (_a4 = mime_info.get(mime_type)) === null || _a4 === void 0 ? void 0 : _a4.push(storyboard);
  }
  return mime_info;
}
__name(getStoryboardInfo, "getStoryboardInfo");
function getStoryboardMimeType(actions, board, transform_url, probable_mime_type, shared_response) {
  return (0, import_tslib33.__awaiter)(this, void 0, void 0, function* () {
    const url = board.template_url;
    const req_url = transform_url(new URL(url.replace("$M", "0")));
    const res_promise = shared_response.response ? shared_response.response : actions.session.http.fetch_function(req_url, {
      method: "HEAD",
      headers: Constants_exports.STREAM_HEADERS
    });
    shared_response.response = res_promise;
    const res = yield res_promise;
    return res.headers.get("Content-Type") || probable_mime_type;
  });
}
__name(getStoryboardMimeType, "getStoryboardMimeType");
function getStoryboardBitrate(actions, board, shared_response) {
  return (0, import_tslib33.__awaiter)(this, void 0, void 0, function* () {
    const url = board.template_url;
    const response_promises = [];
    const request_limit = Math.min(board.storyboard_count, 10);
    for (let i = 0; i < request_limit; i++) {
      const req_url = new URL(url.replace("$M", i.toString()));
      const response_promise = i === 0 && shared_response.response ? shared_response.response : actions.session.http.fetch_function(req_url, {
        method: "HEAD",
        headers: Constants_exports.STREAM_HEADERS
      });
      if (i === 0)
        shared_response.response = response_promise;
      response_promises.push(response_promise);
    }
    const responses = yield Promise.all(response_promises);
    const content_lengths = [];
    for (const response of responses) {
      content_lengths.push(parseInt(response.headers.get("Content-Length") || "0"));
    }
    const bandwidth = Math.ceil(Math.max(...content_lengths) / (board.rows * board.columns) * 8);
    return bandwidth;
  });
}
__name(getStoryboardBitrate, "getStoryboardBitrate");
function getImageRepresentation(duration, actions, board, transform_url, shared_response) {
  const url = board.template_url;
  const template_url = new URL(url.replace("$M", "$Number$"));
  const rep = {
    uid: `thumbnails_${board.thumbnail_width}x${board.thumbnail_height}`,
    getBitrate() {
      return getStoryboardBitrate(actions, board, shared_response);
    },
    sheet_width: board.thumbnail_width * board.columns,
    sheet_height: board.thumbnail_height * board.rows,
    thumbnail_height: board.thumbnail_height,
    thumbnail_width: board.thumbnail_width,
    rows: board.rows,
    columns: board.columns,
    template_duration: duration / board.storyboard_count,
    template_url: transform_url(template_url).toString(),
    getURL(n) {
      return template_url.toString().replace("$Number$", n.toString());
    }
  };
  return rep;
}
__name(getImageRepresentation, "getImageRepresentation");
function getImageSets(duration, actions, storyboards, transform_url) {
  const mime_info = getStoryboardInfo(storyboards);
  const shared_response = {};
  return Array.from(mime_info.entries()).map(([type, boards]) => ({
    probable_mime_type: type,
    getMimeType() {
      return getStoryboardMimeType(actions, boards[0], transform_url, type, shared_response);
    },
    representations: boards.map((board) => getImageRepresentation(duration, actions, board, transform_url, shared_response))
  }));
}
__name(getImageSets, "getImageSets");
function getStreamingInfo(streaming_data, url_transformer = (url) => url, format_filter, cpn, player, actions, storyboards) {
  if (!streaming_data)
    throw new InnertubeError("Streaming data not available");
  const formats = format_filter ? streaming_data.adaptive_formats.filter((fmt) => !format_filter(fmt)) : streaming_data.adaptive_formats;
  const duration = formats[0].approx_duration_ms / 1e3;
  const { groups, has_multiple_audio_tracks } = getFormatGroupings(formats);
  const { video_groups, audio_groups } = groups.reduce((acc, formats2) => {
    if (formats2[0].has_audio) {
      if (has_multiple_audio_tracks && !formats2[0].audio_track)
        return acc;
      acc.audio_groups.push(formats2);
      return acc;
    }
    acc.video_groups.push(formats2);
    return acc;
  }, {
    video_groups: [],
    audio_groups: []
  });
  const audio_sets = audio_groups.map((formats2) => getAudioSet(formats2, url_transformer, actions, player, cpn));
  const video_sets = video_groups.map((formats2) => getVideoSet(formats2, url_transformer, player, actions, cpn));
  const image_sets = storyboards && actions ? getImageSets(duration, actions, storyboards, url_transformer) : [];
  const info = {
    duration,
    audio_sets,
    video_sets,
    image_sets
  };
  return info;
}
__name(getStreamingInfo, "getStreamingInfo");

// dist/src/utils/DashManifest.js
function OTFSegmentInfo({ info }) {
  return (0, import_tslib34.__awaiter)(this, void 0, void 0, function* () {
    if (!info.is_oft)
      return null;
    const template = yield info.getSegmentTemplate();
    return createElement(
      "segment-template",
      { startNumber: "1", timescale: "1000", initialization: template.init_url, media: template.media_url },
      createElement("segment-timeline", null, template.timeline.map((segment_duration) => createElement("s", { d: segment_duration.duration, r: segment_duration.repeat_count })))
    );
  });
}
__name(OTFSegmentInfo, "OTFSegmentInfo");
function SegmentInfo({ info }) {
  if (info.is_oft) {
    return createElement(OTFSegmentInfo, { info });
  }
  return createElement(
    Fragment,
    null,
    createElement("base-url", null, info.base_url),
    createElement(
      "segment-base",
      { indexRange: `${info.index_range.start}-${info.index_range.end}` },
      createElement("initialization", { range: `${info.init_range.start}-${info.init_range.end}` })
    )
  );
}
__name(SegmentInfo, "SegmentInfo");
function DashManifest({ streamingData, transformURL, rejectFormat, cpn, player, actions, storyboards }) {
  const { duration, audio_sets, video_sets, image_sets } = getStreamingInfo(streamingData, transformURL, rejectFormat, cpn, player, actions, storyboards);
  return createElement(
    "mpd",
    { xmlns: "urn:mpeg:dash:schema:mpd:2011", minBufferTime: "PT1.500S", profiles: "urn:mpeg:dash:profile:isoff-main:2011", type: "static", mediaPresentationDuration: `PT${duration}S`, "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation": "urn:mpeg:dash:schema:mpd:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd" },
    createElement(
      "period",
      null,
      audio_sets.map((set, index) => createElement(
        "adaptation-set",
        { id: index, mimeType: set.mime_type, startWithSAP: "1", subsegmentAlignment: "true", lang: set.language, codecs: set.codecs, audioSamplingRate: set.audio_sample_rate },
        set.track_role && createElement("role", { schemeIdUri: "urn:mpeg:dash:role:2011", value: set.track_role }),
        set.track_name && createElement("label", { id: index }, set.track_name),
        set.channels && createElement("audio-channel-configuration", { schemeIdUri: "urn:mpeg:dash:23003:3:audio_channel_configuration:2011", value: set.channels }),
        set.representations.map((rep) => createElement(
          "representation",
          { id: rep.uid, bandwidth: rep.bitrate, codecs: rep.codecs, audioSamplingRate: rep.audio_sample_rate },
          rep.channels && createElement("audio-channel-configuration", { schemeIdUri: "urn:mpeg:dash:23003:3:audio_channel_configuration:2011", value: rep.channels }),
          createElement(SegmentInfo, { info: rep.segment_info })
        ))
      )),
      video_sets.map((set, index) => createElement(
        "adaptation-set",
        { id: index + audio_sets.length, mimeType: set.mime_type, startWithSAP: "1", subsegmentAlignment: "true", codecs: set.codecs, maxPlayoutRate: "1", frameRate: set.fps },
        set.color_info.primaries && createElement("essential-property", { schemeIdUri: "urn:mpeg:mpegB:cicp:ColourPrimaries", value: set.color_info.primaries }),
        set.color_info.transfer_characteristics && createElement("essential-property", { schemeIdUri: "urn:mpeg:mpegB:cicp:TransferCharacteristics", value: set.color_info.transfer_characteristics }),
        set.color_info.matrix_coefficients && createElement("essential-property", { schemeIdUri: "urn:mpeg:mpegB:cicp:MatrixCoefficients", value: set.color_info.matrix_coefficients }),
        set.representations.map((rep) => createElement(
          "representation",
          { id: rep.uid, bandwidth: rep.bitrate, width: rep.width, height: rep.height, codecs: rep.codecs, frameRate: rep.fps },
          createElement(SegmentInfo, { info: rep.segment_info })
        ))
      )),
      image_sets.map((set, index) => (0, import_tslib34.__awaiter)(this, void 0, void 0, function* () {
        return createElement("adaptation-set", { id: index + audio_sets.length + video_sets.length, mimeType: yield set.getMimeType(), contentType: "image" }, set.representations.map((rep) => (0, import_tslib34.__awaiter)(this, void 0, void 0, function* () {
          return createElement(
            "representation",
            { id: `thumbnails_${rep.thumbnail_width}x${rep.thumbnail_height}`, bandwidth: yield rep.getBitrate(), width: rep.sheet_width, height: rep.sheet_height },
            createElement("essential-property", { schemeIdUri: "http://dashif.org/thumbnail_tile", value: `${rep.columns}x${rep.rows}` }),
            createElement("segment-template", { media: rep.template_url, duration: rep.template_duration, startNumber: "0" })
          );
        })));
      }))
    )
  );
}
__name(DashManifest, "DashManifest");
function toDash(streaming_data, url_transformer = (url) => url, format_filter, cpn, player, actions, storyboards) {
  if (!streaming_data)
    throw new InnertubeError("Streaming data not available");
  return renderToString(createElement(DashManifest, { streamingData: streaming_data, transformURL: url_transformer, rejectFormat: format_filter, cpn, player, actions, storyboards }));
}
__name(toDash, "toDash");

// dist/src/utils/FormatUtils.js
function download(options, actions, playability_status, streaming_data, player, cpn) {
  return (0, import_tslib35.__awaiter)(this, void 0, void 0, function* () {
    if ((playability_status === null || playability_status === void 0 ? void 0 : playability_status.status) === "UNPLAYABLE")
      throw new InnertubeError("Video is unplayable", { error_type: "UNPLAYABLE" });
    if ((playability_status === null || playability_status === void 0 ? void 0 : playability_status.status) === "LOGIN_REQUIRED")
      throw new InnertubeError("Video is login required", { error_type: "LOGIN_REQUIRED" });
    if (!streaming_data)
      throw new InnertubeError("Streaming data not available.", { error_type: "NO_STREAMING_DATA" });
    const opts = Object.assign({ quality: "360p", type: "video+audio", format: "mp4", range: void 0 }, options);
    const format = chooseFormat(opts, streaming_data);
    const format_url = format.decipher(player);
    if (opts.type === "video+audio" && !options.range) {
      const response = yield actions.session.http.fetch_function(`${format_url}&cpn=${cpn}`, {
        method: "GET",
        headers: STREAM_HEADERS,
        redirect: "follow"
      });
      if (!response.ok)
        throw new InnertubeError("The server responded with a non 2xx status code", { error_type: "FETCH_FAILED", response });
      const body = response.body;
      if (!body)
        throw new InnertubeError("Could not get ReadableStream from fetch Response.", { error_type: "FETCH_FAILED", response });
      return body;
    }
    const chunk_size = 1048576 * 10;
    let chunk_start = options.range ? options.range.start : 0;
    let chunk_end = options.range ? options.range.end : chunk_size;
    let must_end = false;
    let cancel;
    const readable_stream = new Platform.shim.ReadableStream({
      start() {
      },
      pull: (controller) => (0, import_tslib35.__awaiter)(this, void 0, void 0, function* () {
        if (must_end) {
          controller.close();
          return;
        }
        if (chunk_end >= (format.content_length ? format.content_length : 0) || options.range) {
          must_end = true;
        }
        return new Promise((resolve, reject) => (0, import_tslib35.__awaiter)(this, void 0, void 0, function* () {
          var _a4, e_1, _b2, _c;
          try {
            cancel = new AbortController();
            const response = yield actions.session.http.fetch_function(`${format_url}&cpn=${cpn}&range=${chunk_start}-${chunk_end || ""}`, {
              method: "GET",
              headers: Object.assign(
                {},
                STREAM_HEADERS
              ),
              signal: cancel.signal
            });
            const body = response.body;
            if (!body)
              throw new InnertubeError("Could not get ReadableStream from fetch Response.", { error_type: "FETCH_FAILED", response });
            try {
              for (var _d = true, _e = (0, import_tslib35.__asyncValues)(streamToIterable(body)), _f; _f = yield _e.next(), _a4 = _f.done, !_a4; _d = true) {
                _c = _f.value;
                _d = false;
                const chunk = _c;
                controller.enqueue(chunk);
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (!_d && !_a4 && (_b2 = _e.return))
                  yield _b2.call(_e);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
            chunk_start = chunk_end + 1;
            chunk_end += chunk_size;
            resolve();
          } catch (e) {
            reject(e);
          }
        }));
      }),
      cancel(reason) {
        return (0, import_tslib35.__awaiter)(this, void 0, void 0, function* () {
          cancel.abort(reason);
        });
      }
    }, {
      highWaterMark: 1,
      size(chunk) {
        return chunk.byteLength;
      }
    });
    return readable_stream;
  });
}
__name(download, "download");
function chooseFormat(options, streaming_data) {
  if (!streaming_data)
    throw new InnertubeError("Streaming data not available");
  const formats = [
    ...streaming_data.formats || [],
    ...streaming_data.adaptive_formats || []
  ];
  const requires_audio = options.type ? options.type.includes("audio") : true;
  const requires_video = options.type ? options.type.includes("video") : true;
  const language = options.language || "original";
  const quality = options.quality || "best";
  let best_width = -1;
  const is_best = ["best", "bestefficiency"].includes(quality);
  const use_most_efficient = quality !== "best";
  let candidates = formats.filter((format) => {
    if (requires_audio && !format.has_audio)
      return false;
    if (requires_video && !format.has_video)
      return false;
    if (options.format !== "any" && !format.mime_type.includes(options.format || "mp4"))
      return false;
    if (!is_best && format.quality_label !== quality)
      return false;
    if (best_width < format.width)
      best_width = format.width;
    return true;
  });
  if (!candidates.length)
    throw new InnertubeError("No matching formats found", { options });
  if (is_best && requires_video)
    candidates = candidates.filter((format) => format.width === best_width);
  if (requires_audio && !requires_video) {
    const audio_only = candidates.filter((format) => {
      if (language !== "original") {
        return !format.has_video && format.language === language;
      }
      return !format.has_video && format.is_original;
    });
    if (audio_only.length > 0) {
      candidates = audio_only;
    }
  }
  if (use_most_efficient) {
    candidates.sort((a, b) => a.bitrate - b.bitrate);
  } else {
    candidates.sort((a, b) => b.bitrate - a.bitrate);
  }
  return candidates[0];
}
__name(chooseFormat, "chooseFormat");

// dist/src/core/mixins/MediaInfo.js
var _MediaInfo_page;
var _MediaInfo_actions;
var _MediaInfo_cpn;
var _MediaInfo_playback_tracking;
var MediaInfo = class {
  constructor(data, actions, cpn) {
    var _a4, _b2;
    _MediaInfo_page.set(this, void 0);
    _MediaInfo_actions.set(this, void 0);
    _MediaInfo_cpn.set(this, void 0);
    _MediaInfo_playback_tracking.set(this, void 0);
    (0, import_tslib36.__classPrivateFieldSet)(this, _MediaInfo_actions, actions, "f");
    const info = parser_default.parseResponse(data[0].data);
    const next = ((_a4 = data === null || data === void 0 ? void 0 : data[1]) === null || _a4 === void 0 ? void 0 : _a4.data) ? parser_default.parseResponse(data[1].data) : void 0;
    (0, import_tslib36.__classPrivateFieldSet)(this, _MediaInfo_page, [info, next], "f");
    (0, import_tslib36.__classPrivateFieldSet)(this, _MediaInfo_cpn, cpn, "f");
    if (((_b2 = info.playability_status) === null || _b2 === void 0 ? void 0 : _b2.status) === "ERROR")
      throw new InnertubeError("This video is unavailable", info.playability_status);
    this.streaming_data = info.streaming_data;
    this.playability_status = info.playability_status;
    (0, import_tslib36.__classPrivateFieldSet)(this, _MediaInfo_playback_tracking, info.playback_tracking, "f");
  }
  toDash(url_transformer, format_filter, options = { include_thumbnails: false }) {
    var _a4;
    return (0, import_tslib36.__awaiter)(this, void 0, void 0, function* () {
      let storyboards;
      if (options.include_thumbnails && ((_a4 = (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_page, "f")[0].storyboards) === null || _a4 === void 0 ? void 0 : _a4.is(PlayerStoryboardSpec_default))) {
        storyboards = (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_page, "f")[0].storyboards;
      }
      return toDash(this.streaming_data, url_transformer, format_filter, (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_cpn, "f"), (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_actions, "f").session.player, (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_actions, "f"), storyboards);
    });
  }
  getStreamingInfo(url_transformer, format_filter) {
    var _a4;
    return getStreamingInfo(this.streaming_data, url_transformer, format_filter, this.cpn, (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_actions, "f").session.player, (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_actions, "f"), ((_a4 = (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_page, "f")[0].storyboards) === null || _a4 === void 0 ? void 0 : _a4.is(PlayerStoryboardSpec_default)) ? (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_page, "f")[0].storyboards : void 0);
  }
  chooseFormat(options) {
    return chooseFormat(options, this.streaming_data);
  }
  download(options = {}) {
    return (0, import_tslib36.__awaiter)(this, void 0, void 0, function* () {
      return download(options, (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_actions, "f"), this.playability_status, this.streaming_data, (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_actions, "f").session.player, this.cpn);
    });
  }
  addToWatchHistory(client_name = CLIENTS.WEB.NAME, client_version = CLIENTS.WEB.VERSION, replacement = "https://www.") {
    return (0, import_tslib36.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_playback_tracking, "f"))
        throw new InnertubeError("Playback tracking not available");
      const url_params = {
        cpn: (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_cpn, "f"),
        fmt: 251,
        rtn: 0,
        rt: 0
      };
      const url = (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_playback_tracking, "f").videostats_playback_url.replace("https://s.", replacement);
      const response = yield (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_actions, "f").stats(url, {
        client_name,
        client_version
      }, url_params);
      return response;
    });
  }
  get actions() {
    return (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_actions, "f");
  }
  get cpn() {
    return (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_cpn, "f");
  }
  get page() {
    return (0, import_tslib36.__classPrivateFieldGet)(this, _MediaInfo_page, "f");
  }
};
__name(MediaInfo, "MediaInfo");
_MediaInfo_page = /* @__PURE__ */ new WeakMap(), _MediaInfo_actions = /* @__PURE__ */ new WeakMap(), _MediaInfo_cpn = /* @__PURE__ */ new WeakMap(), _MediaInfo_playback_tracking = /* @__PURE__ */ new WeakMap();
var MediaInfo_default = MediaInfo;

// dist/src/parser/youtube/VideoInfo.js
var _VideoInfo_watch_next_continuation;
var VideoInfo = class extends MediaInfo_default {
  constructor(data, actions, cpn) {
    var _a4, _b2, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17;
    super(data, actions, cpn);
    _VideoInfo_watch_next_continuation.set(this, void 0);
    const [info, next] = this.page;
    if (info.microformat && !((_a4 = info.microformat) === null || _a4 === void 0 ? void 0 : _a4.is(PlayerMicroformat_default, MicroformatData_default)))
      throw new InnertubeError("Invalid microformat", info.microformat);
    this.basic_info = Object.assign(Object.assign(Object.assign({}, info.video_details), {
      embed: ((_b2 = info.microformat) === null || _b2 === void 0 ? void 0 : _b2.is(PlayerMicroformat_default)) ? (_c = info.microformat) === null || _c === void 0 ? void 0 : _c.embed : null,
      channel: ((_d = info.microformat) === null || _d === void 0 ? void 0 : _d.is(PlayerMicroformat_default)) ? (_e = info.microformat) === null || _e === void 0 ? void 0 : _e.channel : null,
      is_unlisted: (_f = info.microformat) === null || _f === void 0 ? void 0 : _f.is_unlisted,
      is_family_safe: (_g = info.microformat) === null || _g === void 0 ? void 0 : _g.is_family_safe,
      category: ((_h = info.microformat) === null || _h === void 0 ? void 0 : _h.is(PlayerMicroformat_default)) ? (_j = info.microformat) === null || _j === void 0 ? void 0 : _j.category : null,
      has_ypc_metadata: ((_k = info.microformat) === null || _k === void 0 ? void 0 : _k.is(PlayerMicroformat_default)) ? (_l = info.microformat) === null || _l === void 0 ? void 0 : _l.has_ypc_metadata : null,
      start_timestamp: ((_m = info.microformat) === null || _m === void 0 ? void 0 : _m.is(PlayerMicroformat_default)) ? info.microformat.start_timestamp : null,
      view_count: ((_o = info.microformat) === null || _o === void 0 ? void 0 : _o.is(PlayerMicroformat_default)) && isNaN((_p = info.video_details) === null || _p === void 0 ? void 0 : _p.view_count) ? info.microformat.view_count : (_q = info.video_details) === null || _q === void 0 ? void 0 : _q.view_count
    }), { like_count: void 0, is_liked: void 0, is_disliked: void 0 });
    this.annotations = info.annotations;
    this.storyboards = info.storyboards;
    this.endscreen = info.endscreen;
    this.captions = info.captions;
    this.cards = info.cards;
    if (this.streaming_data) {
      const default_audio_track = this.streaming_data.adaptive_formats.find((format) => {
        var _a5;
        return (_a5 = format.audio_track) === null || _a5 === void 0 ? void 0 : _a5.audio_is_default;
      });
      if (default_audio_track) {
        this.streaming_data.formats.forEach((format) => format.language = default_audio_track.language);
      } else if (typeof ((_r = this.captions) === null || _r === void 0 ? void 0 : _r.default_audio_track_index) !== "undefined" && ((_s = this.captions) === null || _s === void 0 ? void 0 : _s.audio_tracks) && this.captions.caption_tracks) {
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
    const two_col = (_t = next === null || next === void 0 ? void 0 : next.contents) === null || _t === void 0 ? void 0 : _t.item().as(TwoColumnWatchNextResults_default);
    const results = two_col === null || two_col === void 0 ? void 0 : two_col.results;
    const secondary_results = two_col === null || two_col === void 0 ? void 0 : two_col.secondary_results;
    if (results && secondary_results) {
      if (((_u = info.microformat) === null || _u === void 0 ? void 0 : _u.is(PlayerMicroformat_default)) && ((_v = info.microformat) === null || _v === void 0 ? void 0 : _v.category) === "Gaming") {
        const row = (_y = (_x = (_w = results.firstOfType(VideoSecondaryInfo_default)) === null || _w === void 0 ? void 0 : _w.metadata) === null || _x === void 0 ? void 0 : _x.rows) === null || _y === void 0 ? void 0 : _y.firstOfType(RichMetadataRow_default);
        if (row === null || row === void 0 ? void 0 : row.is(RichMetadataRow_default)) {
          this.game_info = {
            title: (_0 = (_z = row === null || row === void 0 ? void 0 : row.contents) === null || _z === void 0 ? void 0 : _z.firstOfType(RichMetadata_default)) === null || _0 === void 0 ? void 0 : _0.title,
            release_year: (_2 = (_1 = row === null || row === void 0 ? void 0 : row.contents) === null || _1 === void 0 ? void 0 : _1.firstOfType(RichMetadata_default)) === null || _2 === void 0 ? void 0 : _2.subtitle
          };
        }
      }
      this.primary_info = results.firstOfType(VideoPrimaryInfo_default);
      this.secondary_info = results.firstOfType(VideoSecondaryInfo_default);
      this.merchandise = results.firstOfType(MerchandiseShelf_default);
      this.related_chip_cloud = (_3 = secondary_results.firstOfType(RelatedChipCloud_default)) === null || _3 === void 0 ? void 0 : _3.content.as(ChipCloud_default);
      if (two_col === null || two_col === void 0 ? void 0 : two_col.playlist) {
        this.playlist = two_col.playlist;
      }
      this.watch_next_feed = ((_4 = secondary_results.firstOfType(ItemSection_default)) === null || _4 === void 0 ? void 0 : _4.contents) || secondary_results;
      if (this.watch_next_feed && Array.isArray(this.watch_next_feed) && ((_5 = this.watch_next_feed.at(-1)) === null || _5 === void 0 ? void 0 : _5.is(ContinuationItem_default)))
        (0, import_tslib37.__classPrivateFieldSet)(this, _VideoInfo_watch_next_continuation, (_6 = this.watch_next_feed.pop()) === null || _6 === void 0 ? void 0 : _6.as(ContinuationItem_default), "f");
      this.player_overlays = (_7 = next === null || next === void 0 ? void 0 : next.player_overlays) === null || _7 === void 0 ? void 0 : _7.item().as(PlayerOverlay_default);
      if (two_col === null || two_col === void 0 ? void 0 : two_col.autoplay) {
        this.autoplay = two_col.autoplay;
      }
      const segmented_like_dislike_button = (_9 = (_8 = this.primary_info) === null || _8 === void 0 ? void 0 : _8.menu) === null || _9 === void 0 ? void 0 : _9.top_level_buttons.firstOfType(SegmentedLikeDislikeButton_default);
      if (((_10 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _10 === void 0 ? void 0 : _10.is(ToggleButton_default)) && ((_11 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button) === null || _11 === void 0 ? void 0 : _11.is(ToggleButton_default))) {
        this.basic_info.like_count = (_12 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _12 === void 0 ? void 0 : _12.like_count;
        this.basic_info.is_liked = (_13 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button) === null || _13 === void 0 ? void 0 : _13.is_toggled;
        this.basic_info.is_disliked = (_14 = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button) === null || _14 === void 0 ? void 0 : _14.is_toggled;
      }
      const comments_entry_point = (_15 = results.get({ target_id: "comments-entry-point" })) === null || _15 === void 0 ? void 0 : _15.as(ItemSection_default);
      this.comments_entry_point_header = (_16 = comments_entry_point === null || comments_entry_point === void 0 ? void 0 : comments_entry_point.contents) === null || _16 === void 0 ? void 0 : _16.firstOfType(CommentsEntryPointHeader_default);
      this.livechat = (_17 = next === null || next === void 0 ? void 0 : next.contents_memo) === null || _17 === void 0 ? void 0 : _17.getType(LiveChat_default).first();
    }
  }
  selectFilter(target_filter) {
    var _a4, _b2, _c, _d;
    return (0, import_tslib37.__awaiter)(this, void 0, void 0, function* () {
      if (!this.related_chip_cloud)
        throw new InnertubeError("Chip cloud not found, cannot apply filter");
      let cloud_chip;
      if (typeof target_filter === "string") {
        const filter = (_b2 = (_a4 = this.related_chip_cloud) === null || _a4 === void 0 ? void 0 : _a4.chips) === null || _b2 === void 0 ? void 0 : _b2.get({ text: target_filter });
        if (!filter)
          throw new InnertubeError("Invalid filter", { available_filters: this.filters });
        cloud_chip = filter;
      } else if (target_filter === null || target_filter === void 0 ? void 0 : target_filter.is(ChipCloudChip_default)) {
        cloud_chip = target_filter;
      } else {
        throw new InnertubeError("Invalid cloud chip", target_filter);
      }
      if (cloud_chip.is_selected)
        return this;
      const response = yield (_c = cloud_chip.endpoint) === null || _c === void 0 ? void 0 : _c.call(this.actions, { parse: true });
      const data = (_d = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints) === null || _d === void 0 ? void 0 : _d.get({ target_id: "watch-next-feed" });
      this.watch_next_feed = data === null || data === void 0 ? void 0 : data.contents;
      return this;
    });
  }
  addToWatchHistory() {
    const _super = Object.create(null, {
      addToWatchHistory: { get: () => super.addToWatchHistory }
    });
    return (0, import_tslib37.__awaiter)(this, void 0, void 0, function* () {
      return _super.addToWatchHistory.call(this);
    });
  }
  getWatchNextContinuation() {
    var _a4, _b2, _c, _d, _e;
    return (0, import_tslib37.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib37.__classPrivateFieldGet)(this, _VideoInfo_watch_next_continuation, "f"))
        throw new InnertubeError("Watch next feed continuation not found");
      const response = yield (_a4 = (0, import_tslib37.__classPrivateFieldGet)(this, _VideoInfo_watch_next_continuation, "f")) === null || _a4 === void 0 ? void 0 : _a4.endpoint.call(this.actions, { parse: true });
      const data = (_b2 = response === null || response === void 0 ? void 0 : response.on_response_received_endpoints) === null || _b2 === void 0 ? void 0 : _b2.get({ type: "appendContinuationItemsAction" });
      if (!data)
        throw new InnertubeError("AppendContinuationItemsAction not found");
      this.watch_next_feed = data === null || data === void 0 ? void 0 : data.contents;
      if ((_d = (_c = this.watch_next_feed) === null || _c === void 0 ? void 0 : _c.at(-1)) === null || _d === void 0 ? void 0 : _d.is(ContinuationItem_default)) {
        (0, import_tslib37.__classPrivateFieldSet)(this, _VideoInfo_watch_next_continuation, (_e = this.watch_next_feed.pop()) === null || _e === void 0 ? void 0 : _e.as(ContinuationItem_default), "f");
      } else {
        (0, import_tslib37.__classPrivateFieldSet)(this, _VideoInfo_watch_next_continuation, void 0, "f");
      }
      return this;
    });
  }
  like() {
    var _a4, _b2;
    return (0, import_tslib37.__awaiter)(this, void 0, void 0, function* () {
      const segmented_like_dislike_button = (_b2 = (_a4 = this.primary_info) === null || _a4 === void 0 ? void 0 : _a4.menu) === null || _b2 === void 0 ? void 0 : _b2.top_level_buttons.firstOfType(SegmentedLikeDislikeButton_default);
      const button = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button;
      if (!button)
        throw new InnertubeError("Like button not found", { video_id: this.basic_info.id });
      if (!button.is(ToggleButton_default))
        throw new InnertubeError("Like button is not a toggle button. This action is likely disabled for this video.", { video_id: this.basic_info.id });
      if (button.is_toggled)
        throw new InnertubeError("This video is already liked", { video_id: this.basic_info.id });
      const response = yield button.endpoint.call(this.actions);
      return response;
    });
  }
  dislike() {
    var _a4, _b2;
    return (0, import_tslib37.__awaiter)(this, void 0, void 0, function* () {
      const segmented_like_dislike_button = (_b2 = (_a4 = this.primary_info) === null || _a4 === void 0 ? void 0 : _a4.menu) === null || _b2 === void 0 ? void 0 : _b2.top_level_buttons.firstOfType(SegmentedLikeDislikeButton_default);
      const button = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button;
      if (!button)
        throw new InnertubeError("Dislike button not found", { video_id: this.basic_info.id });
      if (!button.is(ToggleButton_default))
        throw new InnertubeError("Dislike button is not a toggle button. This action is likely disabled for this video.", { video_id: this.basic_info.id });
      if (button.is_toggled)
        throw new InnertubeError("This video is already disliked", { video_id: this.basic_info.id });
      const response = yield button.endpoint.call(this.actions);
      return response;
    });
  }
  removeRating() {
    var _a4, _b2;
    return (0, import_tslib37.__awaiter)(this, void 0, void 0, function* () {
      let button;
      const segmented_like_dislike_button = (_b2 = (_a4 = this.primary_info) === null || _a4 === void 0 ? void 0 : _a4.menu) === null || _b2 === void 0 ? void 0 : _b2.top_level_buttons.firstOfType(SegmentedLikeDislikeButton_default);
      const like_button = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.like_button;
      const dislike_button = segmented_like_dislike_button === null || segmented_like_dislike_button === void 0 ? void 0 : segmented_like_dislike_button.dislike_button;
      if (!(like_button === null || like_button === void 0 ? void 0 : like_button.is(ToggleButton_default)) || !(dislike_button === null || dislike_button === void 0 ? void 0 : dislike_button.is(ToggleButton_default)))
        throw new InnertubeError("Like/Dislike button is not a toggle button. This action is likely disabled for this video.", { video_id: this.basic_info.id });
      if (like_button === null || like_button === void 0 ? void 0 : like_button.is_toggled) {
        button = like_button;
      } else if (dislike_button === null || dislike_button === void 0 ? void 0 : dislike_button.is_toggled) {
        button = dislike_button;
      }
      if (!button)
        throw new InnertubeError("This video is not liked/disliked", { video_id: this.basic_info.id });
      const response = yield button.toggled_endpoint.call(this.actions);
      return response;
    });
  }
  getLiveChat() {
    if (!this.livechat)
      throw new InnertubeError("Live Chat is not available", { video_id: this.basic_info.id });
    return new LiveChat_default2(this);
  }
  getTrailerInfo() {
    var _a4, _b2;
    if (this.has_trailer) {
      const player_response = (_b2 = (_a4 = this.playability_status.error_screen) === null || _a4 === void 0 ? void 0 : _a4.as(PlayerLegacyDesktopYpcTrailer_default).trailer) === null || _b2 === void 0 ? void 0 : _b2.player_response;
      if (player_response) {
        return new VideoInfo([{ data: player_response }], this.actions, this.cpn);
      }
    }
    return null;
  }
  get filters() {
    var _a4, _b2;
    return ((_b2 = (_a4 = this.related_chip_cloud) === null || _a4 === void 0 ? void 0 : _a4.chips) === null || _b2 === void 0 ? void 0 : _b2.map((chip) => {
      var _a5;
      return (_a5 = chip.text) === null || _a5 === void 0 ? void 0 : _a5.toString();
    })) || [];
  }
  get wn_has_continuation() {
    return !!(0, import_tslib37.__classPrivateFieldGet)(this, _VideoInfo_watch_next_continuation, "f");
  }
  get autoplay_video_endpoint() {
    var _a4, _b2, _c;
    return ((_c = (_b2 = (_a4 = this.autoplay) === null || _a4 === void 0 ? void 0 : _a4.sets) === null || _b2 === void 0 ? void 0 : _b2[0]) === null || _c === void 0 ? void 0 : _c.autoplay_video) || null;
  }
  get has_trailer() {
    var _a4;
    return !!((_a4 = this.playability_status.error_screen) === null || _a4 === void 0 ? void 0 : _a4.is(PlayerLegacyDesktopYpcTrailer_default));
  }
  get music_tracks() {
    var _a4, _b2, _c, _d, _e, _f;
    const description_content = (_b2 = (_a4 = this.page[1]) === null || _a4 === void 0 ? void 0 : _a4.engagement_panels) === null || _b2 === void 0 ? void 0 : _b2.filter((panel) => {
      var _a5;
      return (_a5 = panel.content) === null || _a5 === void 0 ? void 0 : _a5.is(StructuredDescriptionContent_default);
    });
    if (description_content !== void 0 && description_content.length > 0) {
      const music_section = (_e = (_d = (_c = description_content[0].content) === null || _c === void 0 ? void 0 : _c.as(StructuredDescriptionContent_default)) === null || _d === void 0 ? void 0 : _d.items) === null || _e === void 0 ? void 0 : _e.filterType(VideoDescriptionMusicSection_default);
      if (music_section !== void 0 && music_section.length > 0) {
        return (_f = music_section[0].carousel_lockups) === null || _f === void 0 ? void 0 : _f.map((lookup) => {
          var _a5, _b3, _c2, _d2, _e2, _f2, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
          let song;
          let artist;
          let album;
          let license;
          let videoId;
          let channelId;
          song = (_b3 = (_a5 = lookup.video_lockup) === null || _a5 === void 0 ? void 0 : _a5.title) === null || _b3 === void 0 ? void 0 : _b3.toString();
          videoId = (_c2 = lookup.video_lockup) === null || _c2 === void 0 ? void 0 : _c2.endpoint.payload.videoId;
          for (let i = 0; i < lookup.info_rows.length; i++) {
            const info_row = lookup.info_rows[i];
            if (info_row.info_row_expand_status_key === void 0) {
              if (song === void 0) {
                song = ((_d2 = info_row.default_metadata) === null || _d2 === void 0 ? void 0 : _d2.toString()) || ((_e2 = info_row.expanded_metadata) === null || _e2 === void 0 ? void 0 : _e2.toString());
                if (videoId === void 0) {
                  const endpoint = ((_f2 = info_row.default_metadata) === null || _f2 === void 0 ? void 0 : _f2.endpoint) || ((_g = info_row.expanded_metadata) === null || _g === void 0 ? void 0 : _g.endpoint);
                  videoId = (_h = endpoint === null || endpoint === void 0 ? void 0 : endpoint.payload) === null || _h === void 0 ? void 0 : _h.videoId;
                }
              } else {
                album = ((_j = info_row.default_metadata) === null || _j === void 0 ? void 0 : _j.toString()) || ((_k = info_row.expanded_metadata) === null || _k === void 0 ? void 0 : _k.toString());
              }
            } else {
              if (((_l = info_row.info_row_expand_status_key) === null || _l === void 0 ? void 0 : _l.indexOf("structured-description-music-section-artists-row-state-id")) !== -1) {
                artist = ((_m = info_row.default_metadata) === null || _m === void 0 ? void 0 : _m.toString()) || ((_o = info_row.expanded_metadata) === null || _o === void 0 ? void 0 : _o.toString());
                if (channelId === void 0) {
                  const endpoint = ((_p = info_row.default_metadata) === null || _p === void 0 ? void 0 : _p.endpoint) || ((_q = info_row.expanded_metadata) === null || _q === void 0 ? void 0 : _q.endpoint);
                  channelId = (_r = endpoint === null || endpoint === void 0 ? void 0 : endpoint.payload) === null || _r === void 0 ? void 0 : _r.browseId;
                }
              }
              if (((_s = info_row.info_row_expand_status_key) === null || _s === void 0 ? void 0 : _s.indexOf("structured-description-music-section-licenses-row-state-id")) !== -1) {
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
};
__name(VideoInfo, "VideoInfo");
_VideoInfo_watch_next_continuation = /* @__PURE__ */ new WeakMap();
var VideoInfo_default = VideoInfo;

// dist/src/parser/ytmusic/index.js
var ytmusic_exports = {};
__export(ytmusic_exports, {
  Album: () => Album_default,
  Artist: () => Artist_default,
  Explore: () => Explore_default,
  HomeFeed: () => HomeFeed_default,
  Library: () => Library_default2,
  LibraryContinuation: () => LibraryContinuation,
  Playlist: () => Playlist_default3,
  Recap: () => Recap_default,
  Search: () => Search_default2,
  TrackInfo: () => TrackInfo_default
});

// dist/src/parser/ytmusic/Album.js
var import_tslib38 = require("tslib");
var _Album_page;
var Album = class {
  constructor(response) {
    var _a4, _b2, _c;
    _Album_page.set(this, void 0);
    (0, import_tslib38.__classPrivateFieldSet)(this, _Album_page, parser_default.parseResponse(response.data), "f");
    this.header = (_a4 = (0, import_tslib38.__classPrivateFieldGet)(this, _Album_page, "f").header) === null || _a4 === void 0 ? void 0 : _a4.item().as(MusicDetailHeader_default);
    this.url = ((_b2 = (0, import_tslib38.__classPrivateFieldGet)(this, _Album_page, "f").microformat) === null || _b2 === void 0 ? void 0 : _b2.as(MicroformatData_default).url_canonical) || null;
    if (!(0, import_tslib38.__classPrivateFieldGet)(this, _Album_page, "f").contents_memo)
      throw new Error("No contents found in the response");
    this.contents = (_c = (0, import_tslib38.__classPrivateFieldGet)(this, _Album_page, "f").contents_memo.getType(MusicShelf_default)) === null || _c === void 0 ? void 0 : _c.first().contents;
    this.sections = (0, import_tslib38.__classPrivateFieldGet)(this, _Album_page, "f").contents_memo.getType(MusicCarouselShelf_default) || [];
  }
  get page() {
    return (0, import_tslib38.__classPrivateFieldGet)(this, _Album_page, "f");
  }
};
__name(Album, "Album");
_Album_page = /* @__PURE__ */ new WeakMap();
var Album_default = Album;

// dist/src/parser/ytmusic/Artist.js
var import_tslib39 = require("tslib");
var _Artist_page;
var _Artist_actions;
var Artist = class {
  constructor(response, actions) {
    var _a4, _b2, _c;
    _Artist_page.set(this, void 0);
    _Artist_actions.set(this, void 0);
    (0, import_tslib39.__classPrivateFieldSet)(this, _Artist_page, parser_default.parseResponse(response.data), "f");
    (0, import_tslib39.__classPrivateFieldSet)(this, _Artist_actions, actions, "f");
    this.header = (_a4 = this.page.header) === null || _a4 === void 0 ? void 0 : _a4.item().as(MusicImmersiveHeader_default, MusicVisualHeader_default, MusicHeader_default);
    const music_shelf = ((_b2 = (0, import_tslib39.__classPrivateFieldGet)(this, _Artist_page, "f").contents_memo) === null || _b2 === void 0 ? void 0 : _b2.getType(MusicShelf_default)) || [];
    const music_carousel_shelf = ((_c = (0, import_tslib39.__classPrivateFieldGet)(this, _Artist_page, "f").contents_memo) === null || _c === void 0 ? void 0 : _c.getType(MusicCarouselShelf_default)) || [];
    this.sections = [...music_shelf, ...music_carousel_shelf];
  }
  getAllSongs() {
    var _a4, _b2;
    return (0, import_tslib39.__awaiter)(this, void 0, void 0, function* () {
      const music_shelves = this.sections.filter((section) => section.type === "MusicShelf");
      if (!music_shelves.length)
        throw new InnertubeError("Could not find any node of type MusicShelf.");
      const shelf = music_shelves.find((shelf2) => shelf2.title.toString() === "Songs");
      if (!shelf)
        throw new InnertubeError("Could not find target shelf (Songs).");
      if (!shelf.endpoint)
        throw new InnertubeError("Target shelf (Songs) did not have an endpoint.");
      const page = yield shelf.endpoint.call((0, import_tslib39.__classPrivateFieldGet)(this, _Artist_actions, "f"), { client: "YTMUSIC", parse: true });
      const contents = (_b2 = (_a4 = page.contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(MusicPlaylistShelf_default)) === null || _b2 === void 0 ? void 0 : _b2.first();
      return contents;
    });
  }
  get page() {
    return (0, import_tslib39.__classPrivateFieldGet)(this, _Artist_page, "f");
  }
};
__name(Artist, "Artist");
_Artist_page = /* @__PURE__ */ new WeakMap(), _Artist_actions = /* @__PURE__ */ new WeakMap();
var Artist_default = Artist;

// dist/src/parser/ytmusic/Explore.js
var import_tslib40 = require("tslib");
var _Explore_page;
var Explore = class {
  constructor(response) {
    var _a4, _b2, _c;
    _Explore_page.set(this, void 0);
    (0, import_tslib40.__classPrivateFieldSet)(this, _Explore_page, parser_default.parseResponse(response.data), "f");
    const tab = (_a4 = (0, import_tslib40.__classPrivateFieldGet)(this, _Explore_page, "f").contents) === null || _a4 === void 0 ? void 0 : _a4.item().as(SingleColumnBrowseResults_default).tabs.get({ selected: true });
    if (!tab)
      throw new InnertubeError("Could not find target tab.");
    const section_list = (_b2 = tab.content) === null || _b2 === void 0 ? void 0 : _b2.as(SectionList_default);
    if (!section_list)
      throw new InnertubeError("Target tab did not have any content.");
    this.top_buttons = ((_c = section_list.contents.firstOfType(Grid_default)) === null || _c === void 0 ? void 0 : _c.items.as(MusicNavigationButton_default)) || [];
    this.sections = section_list.contents.filterType(MusicCarouselShelf_default);
  }
  get page() {
    return (0, import_tslib40.__classPrivateFieldGet)(this, _Explore_page, "f");
  }
};
__name(Explore, "Explore");
_Explore_page = /* @__PURE__ */ new WeakMap();
var Explore_default = Explore;

// dist/src/parser/ytmusic/HomeFeed.js
var import_tslib41 = require("tslib");
var _HomeFeed_page;
var _HomeFeed_actions;
var _HomeFeed_continuation;
var HomeFeed2 = class {
  constructor(response, actions) {
    var _a4, _b2, _c, _d, _e, _f;
    _HomeFeed_page.set(this, void 0);
    _HomeFeed_actions.set(this, void 0);
    _HomeFeed_continuation.set(this, void 0);
    (0, import_tslib41.__classPrivateFieldSet)(this, _HomeFeed_actions, actions, "f");
    (0, import_tslib41.__classPrivateFieldSet)(this, _HomeFeed_page, parser_default.parseResponse(response.data), "f");
    const tab = (_a4 = (0, import_tslib41.__classPrivateFieldGet)(this, _HomeFeed_page, "f").contents) === null || _a4 === void 0 ? void 0 : _a4.item().as(SingleColumnBrowseResults_default).tabs.get({ selected: true });
    if (!tab)
      throw new InnertubeError("Could not find Home tab.");
    if (tab.content === null) {
      if (!(0, import_tslib41.__classPrivateFieldGet)(this, _HomeFeed_page, "f").continuation_contents)
        throw new InnertubeError("Continuation did not have any content.");
      (0, import_tslib41.__classPrivateFieldSet)(this, _HomeFeed_continuation, (0, import_tslib41.__classPrivateFieldGet)(this, _HomeFeed_page, "f").continuation_contents.as(SectionListContinuation).continuation, "f");
      this.sections = (_b2 = (0, import_tslib41.__classPrivateFieldGet)(this, _HomeFeed_page, "f").continuation_contents.as(SectionListContinuation).contents) === null || _b2 === void 0 ? void 0 : _b2.as(MusicCarouselShelf_default);
      return;
    }
    this.header = (_d = (_c = tab.content) === null || _c === void 0 ? void 0 : _c.as(SectionList_default).header) === null || _d === void 0 ? void 0 : _d.as(ChipCloud_default);
    (0, import_tslib41.__classPrivateFieldSet)(this, _HomeFeed_continuation, (_e = tab.content) === null || _e === void 0 ? void 0 : _e.as(SectionList_default).continuation, "f");
    this.sections = (_f = tab.content) === null || _f === void 0 ? void 0 : _f.as(SectionList_default).contents.as(MusicCarouselShelf_default, MusicTastebuilderShelf_default);
  }
  getContinuation() {
    return (0, import_tslib41.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib41.__classPrivateFieldGet)(this, _HomeFeed_continuation, "f"))
        throw new InnertubeError("Continuation not found.");
      const response = yield (0, import_tslib41.__classPrivateFieldGet)(this, _HomeFeed_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation: (0, import_tslib41.__classPrivateFieldGet)(this, _HomeFeed_continuation, "f")
      });
      return new HomeFeed2(response, (0, import_tslib41.__classPrivateFieldGet)(this, _HomeFeed_actions, "f"));
    });
  }
  applyFilter(target_filter) {
    var _a4, _b2;
    return (0, import_tslib41.__awaiter)(this, void 0, void 0, function* () {
      let cloud_chip;
      if (typeof target_filter === "string") {
        cloud_chip = (_b2 = (_a4 = this.header) === null || _a4 === void 0 ? void 0 : _a4.chips) === null || _b2 === void 0 ? void 0 : _b2.as(ChipCloudChip_default).get({ text: target_filter });
        if (!cloud_chip)
          throw new InnertubeError("Could not find filter with given name.", { available_filters: this.filters });
      } else if (target_filter === null || target_filter === void 0 ? void 0 : target_filter.is(ChipCloudChip_default)) {
        cloud_chip = target_filter;
      }
      if (!cloud_chip)
        throw new InnertubeError("Invalid filter", { available_filters: this.filters });
      if (cloud_chip === null || cloud_chip === void 0 ? void 0 : cloud_chip.is_selected)
        return this;
      if (!cloud_chip.endpoint)
        throw new InnertubeError("Selected filter does not have an endpoint.");
      const response = yield cloud_chip.endpoint.call((0, import_tslib41.__classPrivateFieldGet)(this, _HomeFeed_actions, "f"), { client: "YTMUSIC" });
      return new HomeFeed2(response, (0, import_tslib41.__classPrivateFieldGet)(this, _HomeFeed_actions, "f"));
    });
  }
  get filters() {
    var _a4, _b2;
    return ((_b2 = (_a4 = this.header) === null || _a4 === void 0 ? void 0 : _a4.chips) === null || _b2 === void 0 ? void 0 : _b2.as(ChipCloudChip_default).map((chip) => chip.text)) || [];
  }
  get has_continuation() {
    return !!(0, import_tslib41.__classPrivateFieldGet)(this, _HomeFeed_continuation, "f");
  }
  get page() {
    return (0, import_tslib41.__classPrivateFieldGet)(this, _HomeFeed_page, "f");
  }
};
__name(HomeFeed2, "HomeFeed");
_HomeFeed_page = /* @__PURE__ */ new WeakMap(), _HomeFeed_actions = /* @__PURE__ */ new WeakMap(), _HomeFeed_continuation = /* @__PURE__ */ new WeakMap();
var HomeFeed_default = HomeFeed2;

// dist/src/parser/ytmusic/Library.js
var import_tslib42 = require("tslib");
var _Library_page;
var _Library_actions;
var _Library_continuation;
var _LibraryContinuation_page;
var _LibraryContinuation_actions;
var _LibraryContinuation_continuation;
var Library2 = class {
  constructor(response, actions) {
    var _a4, _b2, _c, _d, _e;
    _Library_page.set(this, void 0);
    _Library_actions.set(this, void 0);
    _Library_continuation.set(this, void 0);
    (0, import_tslib42.__classPrivateFieldSet)(this, _Library_page, parser_default.parseResponse(response.data), "f");
    (0, import_tslib42.__classPrivateFieldSet)(this, _Library_actions, actions, "f");
    const section_list = (_a4 = (0, import_tslib42.__classPrivateFieldGet)(this, _Library_page, "f").contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(SectionList_default).first();
    this.header = (_b2 = section_list === null || section_list === void 0 ? void 0 : section_list.header) === null || _b2 === void 0 ? void 0 : _b2.as(MusicSideAlignedItem_default);
    this.contents = (_c = section_list === null || section_list === void 0 ? void 0 : section_list.contents) === null || _c === void 0 ? void 0 : _c.as(Grid_default, MusicShelf_default);
    (0, import_tslib42.__classPrivateFieldSet)(this, _Library_continuation, (_e = (_d = this.contents) === null || _d === void 0 ? void 0 : _d.find((list) => list.continuation)) === null || _e === void 0 ? void 0 : _e.continuation, "f");
  }
  applySort(sort_by) {
    var _a4, _b2, _c, _d, _e, _f, _g, _h, _j, _k;
    return (0, import_tslib42.__awaiter)(this, void 0, void 0, function* () {
      let target_item;
      if (typeof sort_by === "string") {
        const button = (_a4 = (0, import_tslib42.__classPrivateFieldGet)(this, _Library_page, "f").contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(MusicSortFilterButton_default).first();
        const options = (_b2 = button === null || button === void 0 ? void 0 : button.menu) === null || _b2 === void 0 ? void 0 : _b2.options.filter((item) => item instanceof MusicMultiSelectMenuItem_default);
        target_item = options === null || options === void 0 ? void 0 : options.find((item) => item.title === sort_by);
        if (!target_item)
          throw new InnertubeError(`Sort option "${sort_by}" not found`, { available_filters: options.map((item) => item.title) });
      } else if (sort_by instanceof MusicMultiSelectMenuItem_default) {
        target_item = sort_by;
      }
      if (!target_item)
        throw new InnertubeError("Invalid sort option");
      if (target_item.selected)
        return this;
      const cmd = (_f = (_e = (_d = (_c = target_item.endpoint) === null || _c === void 0 ? void 0 : _c.payload) === null || _d === void 0 ? void 0 : _d.commands) === null || _e === void 0 ? void 0 : _e.find((cmd2) => cmd2.browseSectionListReloadEndpoint)) === null || _f === void 0 ? void 0 : _f.browseSectionListReloadEndpoint;
      if (!cmd)
        throw new InnertubeError("Failed to find sort option command");
      const response = yield (0, import_tslib42.__classPrivateFieldGet)(this, _Library_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation: cmd.continuation.reloadContinuationData.continuation,
        parse: true
      });
      const previously_selected_item = (_h = (_g = (0, import_tslib42.__classPrivateFieldGet)(this, _Library_page, "f").contents_memo) === null || _g === void 0 ? void 0 : _g.getType(MusicMultiSelectMenuItem_default)) === null || _h === void 0 ? void 0 : _h.find((item) => item.selected);
      if (previously_selected_item)
        previously_selected_item.selected = false;
      target_item.selected = true;
      this.contents = (_k = (_j = response.continuation_contents) === null || _j === void 0 ? void 0 : _j.as(SectionListContinuation).contents) === null || _k === void 0 ? void 0 : _k.as(Grid_default, MusicShelf_default);
      return this;
    });
  }
  applyFilter(filter) {
    var _a4, _b2, _c, _d;
    return (0, import_tslib42.__awaiter)(this, void 0, void 0, function* () {
      let target_chip;
      const chip_cloud = (_a4 = (0, import_tslib42.__classPrivateFieldGet)(this, _Library_page, "f").contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(ChipCloud_default).first();
      if (typeof filter === "string") {
        target_chip = chip_cloud === null || chip_cloud === void 0 ? void 0 : chip_cloud.chips.get({ text: filter });
        if (!target_chip)
          throw new InnertubeError(`Filter "${filter}" not found`, { available_filters: this.filters });
      } else if (filter instanceof ChipCloudChip_default) {
        target_chip = filter;
      }
      if (!target_chip)
        throw new InnertubeError("Invalid filter", filter);
      const target_cmd = new NavigationEndpoint_default((_d = (_c = (_b2 = target_chip.endpoint) === null || _b2 === void 0 ? void 0 : _b2.payload) === null || _c === void 0 ? void 0 : _c.commands) === null || _d === void 0 ? void 0 : _d[0]);
      const response = yield target_cmd.call((0, import_tslib42.__classPrivateFieldGet)(this, _Library_actions, "f"), { client: "YTMUSIC" });
      return new Library2(response, (0, import_tslib42.__classPrivateFieldGet)(this, _Library_actions, "f"));
    });
  }
  getContinuation() {
    return (0, import_tslib42.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib42.__classPrivateFieldGet)(this, _Library_continuation, "f"))
        throw new InnertubeError("No continuation available");
      const page = yield (0, import_tslib42.__classPrivateFieldGet)(this, _Library_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation: (0, import_tslib42.__classPrivateFieldGet)(this, _Library_continuation, "f")
      });
      return new LibraryContinuation(page, (0, import_tslib42.__classPrivateFieldGet)(this, _Library_actions, "f"));
    });
  }
  get has_continuation() {
    return !!(0, import_tslib42.__classPrivateFieldGet)(this, _Library_continuation, "f");
  }
  get sort_options() {
    var _a4, _b2;
    const button = (_a4 = (0, import_tslib42.__classPrivateFieldGet)(this, _Library_page, "f").contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(MusicSortFilterButton_default).first();
    const options = (_b2 = button === null || button === void 0 ? void 0 : button.menu) === null || _b2 === void 0 ? void 0 : _b2.options.filter((item) => item instanceof MusicMultiSelectMenuItem_default);
    return options.map((item) => item.title);
  }
  get filters() {
    var _a4, _b2;
    return ((_b2 = (_a4 = (0, import_tslib42.__classPrivateFieldGet)(this, _Library_page, "f").contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(ChipCloud_default)) === null || _b2 === void 0 ? void 0 : _b2.first().chips.map((chip) => chip.text)) || [];
  }
  get page() {
    return (0, import_tslib42.__classPrivateFieldGet)(this, _Library_page, "f");
  }
};
__name(Library2, "Library");
_Library_page = /* @__PURE__ */ new WeakMap(), _Library_actions = /* @__PURE__ */ new WeakMap(), _Library_continuation = /* @__PURE__ */ new WeakMap();
var LibraryContinuation = class {
  constructor(response, actions) {
    _LibraryContinuation_page.set(this, void 0);
    _LibraryContinuation_actions.set(this, void 0);
    _LibraryContinuation_continuation.set(this, void 0);
    (0, import_tslib42.__classPrivateFieldSet)(this, _LibraryContinuation_page, parser_default.parseResponse(response.data), "f");
    (0, import_tslib42.__classPrivateFieldSet)(this, _LibraryContinuation_actions, actions, "f");
    if (!(0, import_tslib42.__classPrivateFieldGet)(this, _LibraryContinuation_page, "f").continuation_contents)
      throw new InnertubeError("No continuation contents found");
    this.contents = (0, import_tslib42.__classPrivateFieldGet)(this, _LibraryContinuation_page, "f").continuation_contents.as(MusicShelfContinuation, GridContinuation);
    (0, import_tslib42.__classPrivateFieldSet)(this, _LibraryContinuation_continuation, this.contents.continuation || null, "f");
  }
  getContinuation() {
    return (0, import_tslib42.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib42.__classPrivateFieldGet)(this, _LibraryContinuation_continuation, "f"))
        throw new InnertubeError("No continuation available");
      const response = yield (0, import_tslib42.__classPrivateFieldGet)(this, _LibraryContinuation_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation: (0, import_tslib42.__classPrivateFieldGet)(this, _LibraryContinuation_continuation, "f")
      });
      return new LibraryContinuation(response, (0, import_tslib42.__classPrivateFieldGet)(this, _LibraryContinuation_actions, "f"));
    });
  }
  get has_continuation() {
    return !!(0, import_tslib42.__classPrivateFieldGet)(this, _LibraryContinuation_continuation, "f");
  }
  get page() {
    return (0, import_tslib42.__classPrivateFieldGet)(this, _LibraryContinuation_page, "f");
  }
};
__name(LibraryContinuation, "LibraryContinuation");
_LibraryContinuation_page = /* @__PURE__ */ new WeakMap(), _LibraryContinuation_actions = /* @__PURE__ */ new WeakMap(), _LibraryContinuation_continuation = /* @__PURE__ */ new WeakMap();
var Library_default2 = Library2;

// dist/src/parser/ytmusic/Playlist.js
var import_tslib43 = require("tslib");
var _Playlist_instances2;
var _Playlist_page;
var _Playlist_actions;
var _Playlist_continuation;
var _Playlist_last_fetched_suggestions;
var _Playlist_suggestions_continuation;
var _Playlist_fetchSuggestions;
var Playlist3 = class {
  constructor(response, actions) {
    var _a4, _b2, _c, _d, _e, _f, _g;
    _Playlist_instances2.add(this);
    _Playlist_page.set(this, void 0);
    _Playlist_actions.set(this, void 0);
    _Playlist_continuation.set(this, void 0);
    _Playlist_last_fetched_suggestions.set(this, void 0);
    _Playlist_suggestions_continuation.set(this, void 0);
    (0, import_tslib43.__classPrivateFieldSet)(this, _Playlist_actions, actions, "f");
    (0, import_tslib43.__classPrivateFieldSet)(this, _Playlist_page, parser_default.parseResponse(response.data), "f");
    (0, import_tslib43.__classPrivateFieldSet)(this, _Playlist_last_fetched_suggestions, null, "f");
    (0, import_tslib43.__classPrivateFieldSet)(this, _Playlist_suggestions_continuation, null, "f");
    if ((0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_page, "f").continuation_contents) {
      const data = (_a4 = (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_page, "f").continuation_contents) === null || _a4 === void 0 ? void 0 : _a4.as(MusicPlaylistShelfContinuation);
      this.items = data.contents;
      (0, import_tslib43.__classPrivateFieldSet)(this, _Playlist_continuation, data.continuation, "f");
    } else {
      if (((_b2 = (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_page, "f").header) === null || _b2 === void 0 ? void 0 : _b2.item().type) === "MusicEditablePlaylistDetailHeader") {
        this.header = (_d = (_c = (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_page, "f").header) === null || _c === void 0 ? void 0 : _c.item().as(MusicEditablePlaylistDetailHeader_default).header) === null || _d === void 0 ? void 0 : _d.as(MusicDetailHeader_default);
      } else {
        this.header = (_e = (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_page, "f").header) === null || _e === void 0 ? void 0 : _e.item().as(MusicDetailHeader_default);
      }
      this.items = ((_f = (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_page, "f").contents_memo) === null || _f === void 0 ? void 0 : _f.getType(MusicPlaylistShelf_default).first().contents) || null;
      (0, import_tslib43.__classPrivateFieldSet)(this, _Playlist_continuation, ((_g = (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_page, "f").contents_memo) === null || _g === void 0 ? void 0 : _g.getType(MusicPlaylistShelf_default).first().continuation) || null, "f");
    }
  }
  getContinuation() {
    return (0, import_tslib43.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_continuation, "f"))
        throw new InnertubeError("Continuation not found.");
      const response = yield (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation: (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_continuation, "f")
      });
      return new Playlist3(response, (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_actions, "f"));
    });
  }
  getRelated() {
    var _a4, _b2, _c, _d, _e;
    return (0, import_tslib43.__awaiter)(this, void 0, void 0, function* () {
      let section_continuation = (_b2 = (_a4 = (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_page, "f").contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(SectionList_default)) === null || _b2 === void 0 ? void 0 : _b2[0].continuation;
      while (section_continuation) {
        const data = yield (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_actions, "f").execute("/browse", {
          client: "YTMUSIC",
          continuation: section_continuation,
          parse: true
        });
        const section_list = (_c = data.continuation_contents) === null || _c === void 0 ? void 0 : _c.as(SectionListContinuation);
        const sections = (_d = section_list === null || section_list === void 0 ? void 0 : section_list.contents) === null || _d === void 0 ? void 0 : _d.as(MusicCarouselShelf_default, MusicShelf_default);
        const related = (_e = sections === null || sections === void 0 ? void 0 : sections.matchCondition((section) => section.is(MusicCarouselShelf_default))) === null || _e === void 0 ? void 0 : _e.as(MusicCarouselShelf_default);
        if (related)
          return related;
        section_continuation = section_list === null || section_list === void 0 ? void 0 : section_list.continuation;
      }
      throw new InnertubeError("Target section not found.");
    });
  }
  getSuggestions(refresh = true) {
    return (0, import_tslib43.__awaiter)(this, void 0, void 0, function* () {
      const require_fetch = refresh || !(0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_last_fetched_suggestions, "f");
      const fetch_promise = require_fetch ? (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_instances2, "m", _Playlist_fetchSuggestions).call(this) : Promise.resolve(null);
      const fetch_result = yield fetch_promise;
      if (fetch_result) {
        (0, import_tslib43.__classPrivateFieldSet)(this, _Playlist_last_fetched_suggestions, fetch_result.items, "f");
        (0, import_tslib43.__classPrivateFieldSet)(this, _Playlist_suggestions_continuation, fetch_result.continuation, "f");
      }
      return (fetch_result === null || fetch_result === void 0 ? void 0 : fetch_result.items) || (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_last_fetched_suggestions, "f");
    });
  }
  get page() {
    return (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_page, "f");
  }
  get has_continuation() {
    return !!(0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_continuation, "f");
  }
};
__name(Playlist3, "Playlist");
_Playlist_page = /* @__PURE__ */ new WeakMap(), _Playlist_actions = /* @__PURE__ */ new WeakMap(), _Playlist_continuation = /* @__PURE__ */ new WeakMap(), _Playlist_last_fetched_suggestions = /* @__PURE__ */ new WeakMap(), _Playlist_suggestions_continuation = /* @__PURE__ */ new WeakMap(), _Playlist_instances2 = /* @__PURE__ */ new WeakSet(), _Playlist_fetchSuggestions = /* @__PURE__ */ __name(function _Playlist_fetchSuggestions2() {
  var _a4, _b2, _c, _d, _e;
  return (0, import_tslib43.__awaiter)(this, void 0, void 0, function* () {
    const continuation = (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_suggestions_continuation, "f") || ((_b2 = (_a4 = (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_page, "f").contents_memo) === null || _a4 === void 0 ? void 0 : _a4.get("SectionList")) === null || _b2 === void 0 ? void 0 : _b2[0].as(SectionList_default).continuation);
    if (continuation) {
      const page = yield (0, import_tslib43.__classPrivateFieldGet)(this, _Playlist_actions, "f").execute("/browse", {
        client: "YTMUSIC",
        continuation,
        parse: true
      });
      const section_list = (_c = page.continuation_contents) === null || _c === void 0 ? void 0 : _c.as(SectionListContinuation);
      const sections = (_d = section_list === null || section_list === void 0 ? void 0 : section_list.contents) === null || _d === void 0 ? void 0 : _d.as(MusicCarouselShelf_default, MusicShelf_default);
      const suggestions = (_e = sections === null || sections === void 0 ? void 0 : sections.matchCondition((section) => section.is(MusicShelf_default))) === null || _e === void 0 ? void 0 : _e.as(MusicShelf_default);
      return {
        items: (suggestions === null || suggestions === void 0 ? void 0 : suggestions.contents) || [],
        continuation: (suggestions === null || suggestions === void 0 ? void 0 : suggestions.continuation) || null
      };
    }
    return {
      items: [],
      continuation: null
    };
  });
}, "_Playlist_fetchSuggestions");
var Playlist_default3 = Playlist3;

// dist/src/parser/ytmusic/Recap.js
var import_tslib44 = require("tslib");
var _Recap_page;
var _Recap_actions;
var Recap = class {
  constructor(response, actions) {
    var _a4, _b2, _c, _d, _e, _f, _g;
    _Recap_page.set(this, void 0);
    _Recap_actions.set(this, void 0);
    (0, import_tslib44.__classPrivateFieldSet)(this, _Recap_page, parser_default.parseResponse(response.data), "f");
    (0, import_tslib44.__classPrivateFieldSet)(this, _Recap_actions, actions, "f");
    const header = (_a4 = (0, import_tslib44.__classPrivateFieldGet)(this, _Recap_page, "f").header) === null || _a4 === void 0 ? void 0 : _a4.item();
    this.header = (header === null || header === void 0 ? void 0 : header.is(MusicElementHeader_default)) ? (_d = (_c = (_b2 = (0, import_tslib44.__classPrivateFieldGet)(this, _Recap_page, "f").header) === null || _b2 === void 0 ? void 0 : _b2.item().as(MusicElementHeader_default).element) === null || _c === void 0 ? void 0 : _c.model) === null || _d === void 0 ? void 0 : _d.as(HighlightsCarousel_default) : (_e = (0, import_tslib44.__classPrivateFieldGet)(this, _Recap_page, "f").header) === null || _e === void 0 ? void 0 : _e.item().as(MusicHeader_default);
    const tab = (_f = (0, import_tslib44.__classPrivateFieldGet)(this, _Recap_page, "f").contents) === null || _f === void 0 ? void 0 : _f.item().as(SingleColumnBrowseResults_default).tabs.firstOfType(Tab_default);
    if (!tab)
      throw new InnertubeError("Target tab not found");
    this.sections = (_g = tab.content) === null || _g === void 0 ? void 0 : _g.as(SectionList_default).contents.as(ItemSection_default, MusicCarouselShelf_default, Message_default);
  }
  getPlaylist() {
    return (0, import_tslib44.__awaiter)(this, void 0, void 0, function* () {
      if (!this.header)
        throw new InnertubeError("Header not found");
      if (!this.header.is(HighlightsCarousel_default))
        throw new InnertubeError("Recap playlist not available, check back later.");
      const endpoint = this.header.panels[0].text_on_tap_endpoint;
      const response = yield endpoint.call((0, import_tslib44.__classPrivateFieldGet)(this, _Recap_actions, "f"), { client: "YTMUSIC" });
      return new Playlist_default3(response, (0, import_tslib44.__classPrivateFieldGet)(this, _Recap_actions, "f"));
    });
  }
  get page() {
    return (0, import_tslib44.__classPrivateFieldGet)(this, _Recap_page, "f");
  }
};
__name(Recap, "Recap");
_Recap_page = /* @__PURE__ */ new WeakMap(), _Recap_actions = /* @__PURE__ */ new WeakMap();
var Recap_default = Recap;

// dist/src/parser/ytmusic/Search.js
var import_tslib45 = require("tslib");
var _Search_page;
var _Search_actions;
var _Search_continuation;
var _SearchContinuation_actions;
var _SearchContinuation_page;
var Search2 = class {
  constructor(response, actions, is_filtered) {
    var _a4, _b2, _c;
    _Search_page.set(this, void 0);
    _Search_actions.set(this, void 0);
    _Search_continuation.set(this, void 0);
    (0, import_tslib45.__classPrivateFieldSet)(this, _Search_actions, actions, "f");
    (0, import_tslib45.__classPrivateFieldSet)(this, _Search_page, parser_default.parseResponse(response.data), "f");
    if (!(0, import_tslib45.__classPrivateFieldGet)(this, _Search_page, "f").contents || !(0, import_tslib45.__classPrivateFieldGet)(this, _Search_page, "f").contents_memo)
      throw new InnertubeError("Response did not contain any contents.");
    const tab = (0, import_tslib45.__classPrivateFieldGet)(this, _Search_page, "f").contents.item().as(TabbedSearchResults_default).tabs.get({ selected: true });
    if (!tab)
      throw new InnertubeError("Could not find target tab.");
    const tab_content = (_a4 = tab.content) === null || _a4 === void 0 ? void 0 : _a4.as(SectionList_default);
    if (!tab_content)
      throw new InnertubeError("Target tab did not have any content.");
    this.header = (_b2 = tab_content.header) === null || _b2 === void 0 ? void 0 : _b2.as(ChipCloud_default);
    this.contents = tab_content.contents.as(MusicShelf_default, MusicCardShelf_default, ItemSection_default);
    if (is_filtered) {
      (0, import_tslib45.__classPrivateFieldSet)(this, _Search_continuation, (_c = this.contents.firstOfType(MusicShelf_default)) === null || _c === void 0 ? void 0 : _c.continuation, "f");
    }
  }
  getMore(shelf) {
    return (0, import_tslib45.__awaiter)(this, void 0, void 0, function* () {
      if (!shelf || !shelf.endpoint)
        throw new InnertubeError("Cannot retrieve more items for this shelf because it does not have an endpoint.");
      const response = yield shelf.endpoint.call((0, import_tslib45.__classPrivateFieldGet)(this, _Search_actions, "f"), { client: "YTMUSIC" });
      if (!response)
        throw new InnertubeError("Endpoint did not return any data");
      return new Search2(response, (0, import_tslib45.__classPrivateFieldGet)(this, _Search_actions, "f"), true);
    });
  }
  getContinuation() {
    return (0, import_tslib45.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib45.__classPrivateFieldGet)(this, _Search_continuation, "f"))
        throw new InnertubeError("Continuation not found.");
      const response = yield (0, import_tslib45.__classPrivateFieldGet)(this, _Search_actions, "f").execute("/search", {
        continuation: (0, import_tslib45.__classPrivateFieldGet)(this, _Search_continuation, "f"),
        client: "YTMUSIC"
      });
      return new SearchContinuation((0, import_tslib45.__classPrivateFieldGet)(this, _Search_actions, "f"), response);
    });
  }
  applyFilter(target_filter) {
    var _a4, _b2;
    return (0, import_tslib45.__awaiter)(this, void 0, void 0, function* () {
      let cloud_chip;
      if (typeof target_filter === "string") {
        cloud_chip = (_b2 = (_a4 = this.header) === null || _a4 === void 0 ? void 0 : _a4.chips) === null || _b2 === void 0 ? void 0 : _b2.as(ChipCloudChip_default).get({ text: target_filter });
        if (!cloud_chip)
          throw new InnertubeError("Could not find filter with given name.", { available_filters: this.filters });
      } else if (target_filter === null || target_filter === void 0 ? void 0 : target_filter.is(ChipCloudChip_default)) {
        cloud_chip = target_filter;
      }
      if (!cloud_chip)
        throw new InnertubeError("Invalid filter", { available_filters: this.filters });
      if (cloud_chip === null || cloud_chip === void 0 ? void 0 : cloud_chip.is_selected)
        return this;
      if (!cloud_chip.endpoint)
        throw new InnertubeError("Selected filter does not have an endpoint.");
      const response = yield cloud_chip.endpoint.call((0, import_tslib45.__classPrivateFieldGet)(this, _Search_actions, "f"), { client: "YTMUSIC" });
      return new Search2(response, (0, import_tslib45.__classPrivateFieldGet)(this, _Search_actions, "f"), true);
    });
  }
  get filters() {
    var _a4, _b2;
    return ((_b2 = (_a4 = this.header) === null || _a4 === void 0 ? void 0 : _a4.chips) === null || _b2 === void 0 ? void 0 : _b2.as(ChipCloudChip_default).map((chip) => chip.text)) || [];
  }
  get has_continuation() {
    return !!(0, import_tslib45.__classPrivateFieldGet)(this, _Search_continuation, "f");
  }
  get did_you_mean() {
    var _a4;
    return (_a4 = (0, import_tslib45.__classPrivateFieldGet)(this, _Search_page, "f").contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(DidYouMean_default).first();
  }
  get showing_results_for() {
    var _a4;
    return (_a4 = (0, import_tslib45.__classPrivateFieldGet)(this, _Search_page, "f").contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(ShowingResultsFor_default).first();
  }
  get message() {
    var _a4;
    return (_a4 = (0, import_tslib45.__classPrivateFieldGet)(this, _Search_page, "f").contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(Message_default).first();
  }
  get songs() {
    var _a4;
    return (_a4 = this.contents) === null || _a4 === void 0 ? void 0 : _a4.filterType(MusicShelf_default).find((section) => section.title.toString() === "Songs");
  }
  get videos() {
    var _a4;
    return (_a4 = this.contents) === null || _a4 === void 0 ? void 0 : _a4.filterType(MusicShelf_default).find((section) => section.title.toString() === "Videos");
  }
  get albums() {
    var _a4;
    return (_a4 = this.contents) === null || _a4 === void 0 ? void 0 : _a4.filterType(MusicShelf_default).find((section) => section.title.toString() === "Albums");
  }
  get artists() {
    var _a4;
    return (_a4 = this.contents) === null || _a4 === void 0 ? void 0 : _a4.filterType(MusicShelf_default).find((section) => section.title.toString() === "Artists");
  }
  get playlists() {
    var _a4;
    return (_a4 = this.contents) === null || _a4 === void 0 ? void 0 : _a4.filterType(MusicShelf_default).find((section) => section.title.toString() === "Community playlists");
  }
  get results() {
    var _a4, _b2;
    return (_b2 = (_a4 = this.contents) === null || _a4 === void 0 ? void 0 : _a4.firstOfType(MusicShelf_default)) === null || _b2 === void 0 ? void 0 : _b2.contents;
  }
  get sections() {
    var _a4;
    return (_a4 = this.contents) === null || _a4 === void 0 ? void 0 : _a4.filterType(MusicShelf_default);
  }
  get page() {
    return (0, import_tslib45.__classPrivateFieldGet)(this, _Search_page, "f");
  }
};
__name(Search2, "Search");
_Search_page = /* @__PURE__ */ new WeakMap(), _Search_actions = /* @__PURE__ */ new WeakMap(), _Search_continuation = /* @__PURE__ */ new WeakMap();
var Search_default2 = Search2;
var SearchContinuation = class {
  constructor(actions, response) {
    var _a4, _b2;
    _SearchContinuation_actions.set(this, void 0);
    _SearchContinuation_page.set(this, void 0);
    (0, import_tslib45.__classPrivateFieldSet)(this, _SearchContinuation_actions, actions, "f");
    (0, import_tslib45.__classPrivateFieldSet)(this, _SearchContinuation_page, parser_default.parseResponse(response.data), "f");
    this.header = (_a4 = (0, import_tslib45.__classPrivateFieldGet)(this, _SearchContinuation_page, "f").header) === null || _a4 === void 0 ? void 0 : _a4.item().as(MusicHeader_default);
    this.contents = (_b2 = (0, import_tslib45.__classPrivateFieldGet)(this, _SearchContinuation_page, "f").continuation_contents) === null || _b2 === void 0 ? void 0 : _b2.as(MusicShelfContinuation);
  }
  getContinuation() {
    var _a4;
    return (0, import_tslib45.__awaiter)(this, void 0, void 0, function* () {
      if (!((_a4 = this.contents) === null || _a4 === void 0 ? void 0 : _a4.continuation))
        throw new InnertubeError("Continuation not found.");
      const response = yield (0, import_tslib45.__classPrivateFieldGet)(this, _SearchContinuation_actions, "f").execute("/search", {
        continuation: this.contents.continuation,
        client: "YTMUSIC"
      });
      return new SearchContinuation((0, import_tslib45.__classPrivateFieldGet)(this, _SearchContinuation_actions, "f"), response);
    });
  }
  get has_continuation() {
    var _a4;
    return !!((_a4 = this.contents) === null || _a4 === void 0 ? void 0 : _a4.continuation);
  }
  get page() {
    return (0, import_tslib45.__classPrivateFieldGet)(this, _SearchContinuation_page, "f");
  }
};
__name(SearchContinuation, "SearchContinuation");
_SearchContinuation_actions = /* @__PURE__ */ new WeakMap(), _SearchContinuation_page = /* @__PURE__ */ new WeakMap();

// dist/src/parser/ytmusic/TrackInfo.js
var import_tslib46 = require("tslib");
var TrackInfo = class extends MediaInfo_default {
  constructor(data, actions, cpn) {
    var _a4, _b2, _c, _d, _e, _f, _g, _h, _j;
    super(data, actions, cpn);
    const [info, next] = this.page;
    if (!((_a4 = info.microformat) === null || _a4 === void 0 ? void 0 : _a4.is(MicroformatData_default)))
      throw new InnertubeError("Invalid microformat", info.microformat);
    this.basic_info = Object.assign(Object.assign({}, info.video_details), {
      description: (_b2 = info.microformat) === null || _b2 === void 0 ? void 0 : _b2.description,
      is_unlisted: (_c = info.microformat) === null || _c === void 0 ? void 0 : _c.is_unlisted,
      is_family_safe: (_d = info.microformat) === null || _d === void 0 ? void 0 : _d.is_family_safe,
      url_canonical: (_e = info.microformat) === null || _e === void 0 ? void 0 : _e.url_canonical,
      tags: (_f = info.microformat) === null || _f === void 0 ? void 0 : _f.tags
    });
    this.storyboards = info.storyboards;
    this.endscreen = info.endscreen;
    if (next) {
      const tabbed_results = (_h = (_g = next.contents_memo) === null || _g === void 0 ? void 0 : _g.getType(WatchNextTabbedResults_default)) === null || _h === void 0 ? void 0 : _h[0];
      this.tabs = tabbed_results === null || tabbed_results === void 0 ? void 0 : tabbed_results.tabs.array().as(Tab_default);
      this.current_video_endpoint = next.current_video_endpoint;
      this.player_overlays = (_j = next.player_overlays) === null || _j === void 0 ? void 0 : _j.item().as(PlayerOverlay_default);
    }
  }
  getTab(title_or_page_type) {
    var _a4, _b2;
    return (0, import_tslib46.__awaiter)(this, void 0, void 0, function* () {
      if (!this.tabs)
        throw new InnertubeError("Could not find any tab");
      const target_tab = this.tabs.get({ title: title_or_page_type }) || this.tabs.matchCondition((tab) => {
        var _a5, _b3;
        return ((_b3 = (_a5 = tab.endpoint.payload.browseEndpointContextSupportedConfigs) === null || _a5 === void 0 ? void 0 : _a5.browseEndpointContextMusicConfig) === null || _b3 === void 0 ? void 0 : _b3.pageType) === title_or_page_type;
      }) || ((_a4 = this.tabs) === null || _a4 === void 0 ? void 0 : _a4[0]);
      if (!target_tab)
        throw new InnertubeError(`Tab "${title_or_page_type}" not found`, { available_tabs: this.available_tabs });
      if (target_tab.content)
        return target_tab.content;
      const page = yield target_tab.endpoint.call(this.actions, { client: "YTMUSIC", parse: true });
      if (((_b2 = page.contents) === null || _b2 === void 0 ? void 0 : _b2.item().type) === "Message")
        return page.contents.item().as(Message_default);
      if (!page.contents)
        throw new InnertubeError("Page contents was empty", page);
      return page.contents.item().as(SectionList_default).contents;
    });
  }
  getUpNext(automix = true) {
    var _a4, _b2;
    return (0, import_tslib46.__awaiter)(this, void 0, void 0, function* () {
      const music_queue = yield this.getTab("Up next");
      if (!music_queue || !music_queue.content)
        throw new InnertubeError("Music queue was empty, the video id is probably invalid.", music_queue);
      const playlist_panel = music_queue.content.as(PlaylistPanel_default);
      if (!playlist_panel.playlist_id && automix) {
        const automix_preview_video = playlist_panel.contents.firstOfType(AutomixPreviewVideo_default);
        if (!automix_preview_video)
          throw new InnertubeError("Automix item not found");
        const page = yield (_a4 = automix_preview_video.playlist_video) === null || _a4 === void 0 ? void 0 : _a4.endpoint.call(this.actions, {
          videoId: this.basic_info.id,
          client: "YTMUSIC",
          parse: true
        });
        if (!page || !page.contents_memo)
          throw new InnertubeError("Could not fetch automix");
        return (_b2 = page.contents_memo.getType(PlaylistPanel_default)) === null || _b2 === void 0 ? void 0 : _b2[0];
      }
      return playlist_panel;
    });
  }
  getRelated() {
    return (0, import_tslib46.__awaiter)(this, void 0, void 0, function* () {
      const tab = yield this.getTab("MUSIC_PAGE_TYPE_TRACK_RELATED");
      return tab;
    });
  }
  getLyrics() {
    return (0, import_tslib46.__awaiter)(this, void 0, void 0, function* () {
      const tab = yield this.getTab("MUSIC_PAGE_TYPE_TRACK_LYRICS");
      return tab.firstOfType(MusicDescriptionShelf_default);
    });
  }
  addToWatchHistory() {
    const _super = Object.create(null, {
      addToWatchHistory: { get: () => super.addToWatchHistory }
    });
    return (0, import_tslib46.__awaiter)(this, void 0, void 0, function* () {
      return _super.addToWatchHistory.call(this, CLIENTS.YTMUSIC.NAME, CLIENTS.YTMUSIC.VERSION, "https://music.");
    });
  }
  get available_tabs() {
    return this.tabs ? this.tabs.map((tab) => tab.title) : [];
  }
};
__name(TrackInfo, "TrackInfo");
var TrackInfo_default = TrackInfo;

// dist/src/parser/ytkids/index.js
var ytkids_exports = {};
__export(ytkids_exports, {
  Channel: () => Channel_default2,
  HomeFeed: () => HomeFeed_default2,
  Search: () => Search_default3,
  VideoInfo: () => VideoInfo_default2
});

// dist/src/parser/ytkids/Channel.js
var import_tslib47 = require("tslib");
var Channel3 = class extends Feed_default {
  constructor(actions, data, already_parsed = false) {
    var _a4, _b2;
    super(actions, data, already_parsed);
    this.header = (_a4 = this.page.header) === null || _a4 === void 0 ? void 0 : _a4.item().as(C4TabbedHeader_default);
    this.contents = this.memo.getType(ItemSection_default).first() || ((_b2 = this.page.continuation_contents) === null || _b2 === void 0 ? void 0 : _b2.as(ItemSectionContinuation));
  }
  getContinuation() {
    var _a4;
    return (0, import_tslib47.__awaiter)(this, void 0, void 0, function* () {
      const response = yield this.actions.execute("/browse", {
        continuation: (_a4 = this.contents) === null || _a4 === void 0 ? void 0 : _a4.continuation,
        client: "YTKIDS"
      });
      return new Channel3(this.actions, response);
    });
  }
  get has_continuation() {
    var _a4;
    return !!((_a4 = this.contents) === null || _a4 === void 0 ? void 0 : _a4.continuation);
  }
};
__name(Channel3, "Channel");
var Channel_default2 = Channel3;

// dist/src/parser/ytkids/HomeFeed.js
var import_tslib48 = require("tslib");
var HomeFeed3 = class extends Feed_default {
  constructor(actions, data, already_parsed = false) {
    var _a4, _b2;
    super(actions, data, already_parsed);
    this.header = (_a4 = this.page.header) === null || _a4 === void 0 ? void 0 : _a4.item().as(KidsCategoriesHeader_default);
    this.contents = (_b2 = this.page.contents) === null || _b2 === void 0 ? void 0 : _b2.item().as(KidsHomeScreen_default);
  }
  selectCategoryTab(tab) {
    var _a4;
    return (0, import_tslib48.__awaiter)(this, void 0, void 0, function* () {
      let target_tab;
      if (typeof tab === "string") {
        target_tab = (_a4 = this.header) === null || _a4 === void 0 ? void 0 : _a4.category_tabs.find((t) => t.title.toString() === tab);
      } else if (tab === null || tab === void 0 ? void 0 : tab.is(KidsCategoryTab_default)) {
        target_tab = tab;
      }
      if (!target_tab)
        throw new InnertubeError(`Tab "${tab}" not found`);
      const page = yield target_tab.endpoint.call(this.actions, { client: "YTKIDS", parse: true });
      page.header = this.page.header;
      page.header_memo = this.page.header_memo;
      return new HomeFeed3(this.actions, page, true);
    });
  }
  get categories() {
    var _a4;
    return ((_a4 = this.header) === null || _a4 === void 0 ? void 0 : _a4.category_tabs.map((tab) => tab.title.toString())) || [];
  }
};
__name(HomeFeed3, "HomeFeed");
var HomeFeed_default2 = HomeFeed3;

// dist/src/parser/ytkids/Search.js
var Search3 = class extends Feed_default {
  constructor(actions, data) {
    super(actions, data);
    this.estimated_results = this.page.estimated_results;
    const item_section = this.memo.getType(ItemSection_default).first();
    if (!item_section)
      throw new InnertubeError("No item section found in search response.");
    this.contents = item_section.contents;
  }
};
__name(Search3, "Search");
var Search_default3 = Search3;

// dist/src/parser/ytkids/VideoInfo.js
var import_tslib49 = require("tslib");
var VideoInfo2 = class extends MediaInfo_default {
  constructor(data, actions, cpn) {
    var _a4, _b2, _c, _d, _e;
    super(data, actions, cpn);
    const [info, next] = this.page;
    this.basic_info = info.video_details;
    this.captions = info.captions;
    const two_col = (_a4 = next === null || next === void 0 ? void 0 : next.contents) === null || _a4 === void 0 ? void 0 : _a4.item().as(TwoColumnWatchNextResults_default);
    const results = two_col === null || two_col === void 0 ? void 0 : two_col.results;
    const secondary_results = two_col === null || two_col === void 0 ? void 0 : two_col.secondary_results;
    if (results && secondary_results) {
      this.slim_video_metadata = (_c = (_b2 = results.firstOfType(ItemSection_default)) === null || _b2 === void 0 ? void 0 : _b2.contents) === null || _c === void 0 ? void 0 : _c.firstOfType(SlimVideoMetadata_default);
      this.watch_next_feed = ((_d = secondary_results.firstOfType(ItemSection_default)) === null || _d === void 0 ? void 0 : _d.contents) || secondary_results;
      this.current_video_endpoint = next === null || next === void 0 ? void 0 : next.current_video_endpoint;
      this.player_overlays = (_e = next === null || next === void 0 ? void 0 : next.player_overlays) === null || _e === void 0 ? void 0 : _e.item().as(PlayerOverlay_default);
    }
  }
  addToWatchHistory() {
    const _super = Object.create(null, {
      addToWatchHistory: { get: () => super.addToWatchHistory }
    });
    return (0, import_tslib49.__awaiter)(this, void 0, void 0, function* () {
      return _super.addToWatchHistory.call(this);
    });
  }
};
__name(VideoInfo2, "VideoInfo");
var VideoInfo_default2 = VideoInfo2;

// dist/src/parser/index.js
var parser_default = parser_exports;

// dist/src/parser/classes/misc/Author.js
var _Author_nav_text;
var Author = class {
  constructor(item, badges, thumbs, id) {
    var _a4, _b2, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12;
    _Author_nav_text.set(this, void 0);
    (0, import_tslib50.__classPrivateFieldSet)(this, _Author_nav_text, new Text(item), "f");
    this.id = id || ((_e = (_d = (_c = (_b2 = (_a4 = (0, import_tslib50.__classPrivateFieldGet)(this, _Author_nav_text, "f")) === null || _a4 === void 0 ? void 0 : _a4.runs) === null || _b2 === void 0 ? void 0 : _b2[0]) === null || _c === void 0 ? void 0 : _c.endpoint) === null || _d === void 0 ? void 0 : _d.payload) === null || _e === void 0 ? void 0 : _e.browseId) || ((_h = (_g = (_f = (0, import_tslib50.__classPrivateFieldGet)(this, _Author_nav_text, "f")) === null || _f === void 0 ? void 0 : _f.endpoint) === null || _g === void 0 ? void 0 : _g.payload) === null || _h === void 0 ? void 0 : _h.browseId) || "N/A";
    this.name = ((_j = (0, import_tslib50.__classPrivateFieldGet)(this, _Author_nav_text, "f")) === null || _j === void 0 ? void 0 : _j.text) || "N/A";
    this.thumbnails = thumbs ? Thumbnail.fromResponse(thumbs) : [];
    this.endpoint = ((_m = (_l = (_k = (0, import_tslib50.__classPrivateFieldGet)(this, _Author_nav_text, "f")) === null || _k === void 0 ? void 0 : _k.runs) === null || _l === void 0 ? void 0 : _l[0]) === null || _m === void 0 ? void 0 : _m.endpoint) || ((_o = (0, import_tslib50.__classPrivateFieldGet)(this, _Author_nav_text, "f")) === null || _o === void 0 ? void 0 : _o.endpoint);
    this.badges = Array.isArray(badges) ? parser_default.parseArray(badges) : observe([]);
    this.is_moderator = (_p = this.badges) === null || _p === void 0 ? void 0 : _p.some((badge) => badge.icon_type == "MODERATOR");
    this.is_verified = (_q = this.badges) === null || _q === void 0 ? void 0 : _q.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED");
    this.is_verified_artist = (_r = this.badges) === null || _r === void 0 ? void 0 : _r.some((badge) => badge.style == "BADGE_STYLE_TYPE_VERIFIED_ARTIST");
    this.url = ((_w = (_v = (_u = (_t = (_s = (0, import_tslib50.__classPrivateFieldGet)(this, _Author_nav_text, "f")) === null || _s === void 0 ? void 0 : _s.runs) === null || _t === void 0 ? void 0 : _t[0]) === null || _u === void 0 ? void 0 : _u.endpoint) === null || _v === void 0 ? void 0 : _v.metadata) === null || _w === void 0 ? void 0 : _w.api_url) === "/browse" && `${URLS.YT_BASE}${((_1 = (_0 = (_z = (_y = (_x = (0, import_tslib50.__classPrivateFieldGet)(this, _Author_nav_text, "f")) === null || _x === void 0 ? void 0 : _x.runs) === null || _y === void 0 ? void 0 : _y[0]) === null || _z === void 0 ? void 0 : _z.endpoint) === null || _0 === void 0 ? void 0 : _0.payload) === null || _1 === void 0 ? void 0 : _1.canonicalBaseUrl) || `/u/${(_6 = (_5 = (_4 = (_3 = (_2 = (0, import_tslib50.__classPrivateFieldGet)(this, _Author_nav_text, "f")) === null || _2 === void 0 ? void 0 : _2.runs) === null || _3 === void 0 ? void 0 : _3[0]) === null || _4 === void 0 ? void 0 : _4.endpoint) === null || _5 === void 0 ? void 0 : _5.payload) === null || _6 === void 0 ? void 0 : _6.browseId}`}` || `${URLS.YT_BASE}${((_9 = (_8 = (_7 = (0, import_tslib50.__classPrivateFieldGet)(this, _Author_nav_text, "f")) === null || _7 === void 0 ? void 0 : _7.endpoint) === null || _8 === void 0 ? void 0 : _8.payload) === null || _9 === void 0 ? void 0 : _9.canonicalBaseUrl) || `/u/${(_12 = (_11 = (_10 = (0, import_tslib50.__classPrivateFieldGet)(this, _Author_nav_text, "f")) === null || _10 === void 0 ? void 0 : _10.endpoint) === null || _11 === void 0 ? void 0 : _11.payload) === null || _12 === void 0 ? void 0 : _12.browseId}`}`;
  }
  get best_thumbnail() {
    return this.thumbnails[0];
  }
};
__name(Author, "Author");
_Author_nav_text = /* @__PURE__ */ new WeakMap();
var Author_default = Author;

// dist/src/utils/user-agents.js
var user_agents_default = {
  "desktop": [
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.61",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
  ],
  "mobile": [
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 12; SM-G990U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; SM-G998B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/108.1  Mobile/15E148 Safari/605.1.15",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15G77 ChannelId(73) NebulaSDK/1.8.100112 Nebula PSDType(1) AlipayDefined(nt:4G,ws:320|504|2.0) AliApp(AP/10.1.30.300) AlipayClient/10.1.30.300 Alipay Language/zh-Hans",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 13; SM-N981U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (Linux; Android 13; SM-A515F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 12; M2010J19SG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/109.0.5414.83 Mobile/15E148 Safari/604.1",
    "Mozilla/5.0 (Linux; Android 11; M2102J20SG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Mobile/15E148 Safari/604.1"
  ]
};

// dist/src/utils/Utils.js
var _a;
var _Platform_shim;
var Platform = class {
  static load(platform) {
    (0, import_tslib51.__classPrivateFieldSet)(Platform, _a, platform, "f", _Platform_shim);
  }
  static get shim() {
    if (!(0, import_tslib51.__classPrivateFieldGet)(Platform, _a, "f", _Platform_shim)) {
      throw new Error("Platform is not loaded");
    }
    return (0, import_tslib51.__classPrivateFieldGet)(Platform, _a, "f", _Platform_shim);
  }
};
__name(Platform, "Platform");
_a = Platform;
_Platform_shim = { value: void 0 };
var InnertubeError = class extends Error {
  constructor(message, info) {
    super(message);
    if (info) {
      this.info = info;
    }
    this.date = new Date();
    this.version = Platform.shim.info.version;
  }
};
__name(InnertubeError, "InnertubeError");
var ParsingError = class extends InnertubeError {
};
__name(ParsingError, "ParsingError");
var MissingParamError = class extends InnertubeError {
};
__name(MissingParamError, "MissingParamError");
var OAuthError = class extends InnertubeError {
};
__name(OAuthError, "OAuthError");
var PlayerError = class extends Error {
};
__name(PlayerError, "PlayerError");
var SessionError = class extends Error {
};
__name(SessionError, "SessionError");
var ChannelError = class extends Error {
};
__name(ChannelError, "ChannelError");
function deepCompare(obj1, obj2) {
  const keys = Reflect.ownKeys(obj1);
  return keys.some((key) => {
    const is_text = obj2[key] instanceof Text;
    if (!is_text && typeof obj2[key] === "object") {
      return JSON.stringify(obj1[key]) === JSON.stringify(obj2[key]);
    }
    return obj1[key] === (is_text ? obj2[key].toString() : obj2[key]);
  });
}
__name(deepCompare, "deepCompare");
function getStringBetweenStrings(data, start_string, end_string) {
  const regex = new RegExp(`${escapeStringRegexp(start_string)}(.*?)${escapeStringRegexp(end_string)}`, "s");
  const match = data.match(regex);
  return match ? match[1] : void 0;
}
__name(getStringBetweenStrings, "getStringBetweenStrings");
function escapeStringRegexp(input) {
  return input.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
__name(escapeStringRegexp, "escapeStringRegexp");
function getRandomUserAgent(type) {
  const available_agents = user_agents_default[type];
  const random_index = Math.floor(Math.random() * available_agents.length);
  return available_agents[random_index];
}
__name(getRandomUserAgent, "getRandomUserAgent");
function generateSidAuth(sid) {
  return (0, import_tslib51.__awaiter)(this, void 0, void 0, function* () {
    const youtube = "https://www.youtube.com";
    const timestamp = Math.floor(new Date().getTime() / 1e3);
    const input = [timestamp, sid, youtube].join(" ");
    const gen_hash = yield Platform.shim.sha1Hash(input);
    return ["SAPISIDHASH", [timestamp, gen_hash].join("_")].join(" ");
  });
}
__name(generateSidAuth, "generateSidAuth");
function generateRandomString(length) {
  const result = [];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  for (let i = 0; i < length; i++) {
    result.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
  }
  return result.join("");
}
__name(generateRandomString, "generateRandomString");
function timeToSeconds(time) {
  const params = time.split(":").map((param) => parseInt(param.replace(/\D/g, "")));
  switch (params.length) {
    case 1:
      return params[0];
    case 2:
      return params[0] * 60 + params[1];
    case 3:
      return params[0] * 3600 + params[1] * 60 + params[2];
    default:
      throw new Error("Invalid time string");
  }
}
__name(timeToSeconds, "timeToSeconds");
function concatMemos(...iterables) {
  const memo = new Memo();
  for (const iterable of iterables) {
    if (!iterable)
      continue;
    for (const item of iterable) {
      memo.set(...item);
    }
  }
  return memo;
}
__name(concatMemos, "concatMemos");
function throwIfMissing(params) {
  for (const [key, value] of Object.entries(params)) {
    if (!value)
      throw new MissingParamError(`${key} is missing`);
  }
}
__name(throwIfMissing, "throwIfMissing");
function hasKeys(params, ...keys) {
  for (const key of keys) {
    if (!Reflect.has(params, key) || params[key] === void 0)
      return false;
  }
  return true;
}
__name(hasKeys, "hasKeys");
function streamToIterable(stream) {
  return (0, import_tslib51.__asyncGenerator)(this, arguments, /* @__PURE__ */ __name(function* streamToIterable_1() {
    const reader = stream.getReader();
    try {
      while (true) {
        const { done, value } = yield (0, import_tslib51.__await)(reader.read());
        if (done) {
          return yield (0, import_tslib51.__await)(void 0);
        }
        yield yield (0, import_tslib51.__await)(value);
      }
    } finally {
      reader.releaseLock();
    }
  }, "streamToIterable_1"));
}
__name(streamToIterable, "streamToIterable");
var debugFetch = /* @__PURE__ */ __name((input, init) => {
  const url = typeof input === "string" ? new URL(input) : input instanceof URL ? input : new URL(input.url);
  const headers = (init === null || init === void 0 ? void 0 : init.headers) ? new Headers(init.headers) : input instanceof Request ? input.headers : new Headers();
  const arr_headers = [...headers];
  const body_contents = (init === null || init === void 0 ? void 0 : init.body) ? typeof init.body === "string" ? headers.get("content-type") === "application/json" ? JSON.stringify(JSON.parse(init.body), null, 2) : init.body : "    <binary>" : "    (none)";
  const headers_serialized = arr_headers.length > 0 ? `${arr_headers.map(([key, value]) => `    ${key}: ${value}`).join("\n")}` : "    (none)";
  console.log(`YouTube.js Fetch:
  url: ${url.toString()}
  method: ${(init === null || init === void 0 ? void 0 : init.method) || "GET"}
  headers:
${headers_serialized}
' + 
    '  body:
${body_contents}`);
  return Platform.shim.fetch(input, init);
}, "debugFetch");
function u8ToBase64(u8) {
  return btoa(String.fromCharCode.apply(null, Array.from(u8)));
}
__name(u8ToBase64, "u8ToBase64");
function base64ToU8(base64) {
  return new Uint8Array(atob(base64).split("").map((char) => char.charCodeAt(0)));
}
__name(base64ToU8, "base64ToU8");
function isTextRun(run) {
  return !("emoji" in run);
}
__name(isTextRun, "isTextRun");

// dist/src/platform/node.js
var import_crypto = __toESM(require("crypto"), 1);
var import_path = __toESM(require("path"), 1);
var import_os = __toESM(require("os"), 1);
var import_promises = __toESM(require("fs/promises"), 1);
var import_fs = require("fs");

// dist/src/platform/polyfills/node-custom-event.js
var import_tslib52 = require("tslib");
var _CustomEvent_detail;
var CustomEvent = class extends Event {
  constructor(type, options) {
    var _a4;
    super(type, options);
    _CustomEvent_detail.set(this, void 0);
    (0, import_tslib52.__classPrivateFieldSet)(this, _CustomEvent_detail, (_a4 = options === null || options === void 0 ? void 0 : options.detail) !== null && _a4 !== void 0 ? _a4 : null, "f");
  }
  get detail() {
    return (0, import_tslib52.__classPrivateFieldGet)(this, _CustomEvent_detail, "f");
  }
};
__name(CustomEvent, "CustomEvent");
_CustomEvent_detail = /* @__PURE__ */ new WeakMap();
var node_custom_event_default = CustomEvent;

// dist/src/platform/node.js
var import_url = require("url");

// dist/src/platform/jsruntime/jinter.js
var import_jintr = require("jintr");
function evaluate(code, env) {
  const runtime = new import_jintr.Jinter(code);
  for (const [key, value] of Object.entries(env)) {
    runtime.scope.set(key, value);
  }
  return runtime.interpret();
}
__name(evaluate, "evaluate");

// dist/src/Innertube.js
var import_tslib63 = require("tslib");

// dist/src/core/Session.js
var import_tslib56 = require("tslib");

// dist/src/core/Actions.js
var import_tslib53 = require("tslib");
var _Actions_instances;
var _Actions_session;
var _Actions_wrap;
var _Actions_isBrowse;
var _Actions_needsLogin;
var Actions = class {
  constructor(session) {
    _Actions_instances.add(this);
    _Actions_session.set(this, void 0);
    (0, import_tslib53.__classPrivateFieldSet)(this, _Actions_session, session, "f");
  }
  get session() {
    return (0, import_tslib53.__classPrivateFieldGet)(this, _Actions_session, "f");
  }
  stats(url, client, params) {
    return (0, import_tslib53.__awaiter)(this, void 0, void 0, function* () {
      const s_url = new URL(url);
      s_url.searchParams.set("ver", "2");
      s_url.searchParams.set("c", client.client_name.toLowerCase());
      s_url.searchParams.set("cbrver", client.client_version);
      s_url.searchParams.set("cver", client.client_version);
      for (const key of Object.keys(params)) {
        s_url.searchParams.set(key, params[key]);
      }
      const response = yield (0, import_tslib53.__classPrivateFieldGet)(this, _Actions_session, "f").http.fetch(s_url);
      return response;
    });
  }
  execute(endpoint, args) {
    var _a4, _b2;
    return (0, import_tslib53.__awaiter)(this, void 0, void 0, function* () {
      let data;
      if (args && !args.protobuf) {
        data = Object.assign({}, args);
        if (Reflect.has(data, "browseId")) {
          if ((0, import_tslib53.__classPrivateFieldGet)(this, _Actions_instances, "m", _Actions_needsLogin).call(this, data.browseId) && !(0, import_tslib53.__classPrivateFieldGet)(this, _Actions_session, "f").logged_in)
            throw new InnertubeError("You must be signed in to perform this operation.");
        }
        if (Reflect.has(data, "override_endpoint"))
          delete data.override_endpoint;
        if (Reflect.has(data, "parse"))
          delete data.parse;
        if (Reflect.has(data, "request"))
          delete data.request;
        if (Reflect.has(data, "clientActions"))
          delete data.clientActions;
        if (Reflect.has(data, "settingItemIdForClient"))
          delete data.settingItemIdForClient;
        if (Reflect.has(data, "action")) {
          data.actions = [data.action];
          delete data.action;
        }
        if (Reflect.has(data, "boolValue")) {
          data.newValue = { boolValue: data.boolValue };
          delete data.boolValue;
        }
        if (Reflect.has(data, "token")) {
          data.continuation = data.token;
          delete data.token;
        }
        if ((data === null || data === void 0 ? void 0 : data.client) === "YTMUSIC") {
          data.isAudioOnly = true;
        }
      } else if (args) {
        data = args.serialized_data;
      }
      const target_endpoint = Reflect.has(args || {}, "override_endpoint") ? args === null || args === void 0 ? void 0 : args.override_endpoint : endpoint;
      const response = yield (0, import_tslib53.__classPrivateFieldGet)(this, _Actions_session, "f").http.fetch(target_endpoint, {
        method: "POST",
        body: (args === null || args === void 0 ? void 0 : args.protobuf) ? data : JSON.stringify(data || {}),
        headers: {
          "Content-Type": (args === null || args === void 0 ? void 0 : args.protobuf) ? "application/x-protobuf" : "application/json"
        }
      });
      if (args === null || args === void 0 ? void 0 : args.parse) {
        let parsed_response = parser_default.parseResponse(yield response.json());
        if ((0, import_tslib53.__classPrivateFieldGet)(this, _Actions_instances, "m", _Actions_isBrowse).call(this, parsed_response) && ((_b2 = (_a4 = parsed_response.on_response_received_actions) === null || _a4 === void 0 ? void 0 : _a4.first()) === null || _b2 === void 0 ? void 0 : _b2.type) === "navigateAction") {
          const navigate_action = parsed_response.on_response_received_actions.firstOfType(NavigateAction);
          if (navigate_action) {
            parsed_response = yield navigate_action.endpoint.call(this, { parse: true });
          }
        }
        return parsed_response;
      }
      return (0, import_tslib53.__classPrivateFieldGet)(this, _Actions_instances, "m", _Actions_wrap).call(this, response);
    });
  }
};
__name(Actions, "Actions");
_Actions_session = /* @__PURE__ */ new WeakMap(), _Actions_instances = /* @__PURE__ */ new WeakSet(), _Actions_wrap = /* @__PURE__ */ __name(function _Actions_wrap2(response) {
  return (0, import_tslib53.__awaiter)(this, void 0, void 0, function* () {
    return {
      success: response.ok,
      status_code: response.status,
      data: JSON.parse(yield response.text())
    };
  });
}, "_Actions_wrap"), _Actions_isBrowse = /* @__PURE__ */ __name(function _Actions_isBrowse2(response) {
  return "on_response_received_actions" in response;
}, "_Actions_isBrowse"), _Actions_needsLogin = /* @__PURE__ */ __name(function _Actions_needsLogin2(id) {
  return [
    "FElibrary",
    "FEhistory",
    "FEsubscriptions",
    "FEmusic_listening_review",
    "FEmusic_library_landing",
    "SPaccount_overview",
    "SPaccount_notifications",
    "SPaccount_privacy",
    "SPtime_watched"
  ].includes(id);
}, "_Actions_needsLogin");
var Actions_default = Actions;

// dist/src/core/Player.js
var import_tslib54 = require("tslib");
var _Player_nsig_sc;
var _Player_sig_sc;
var _Player_sig_sc_timestamp;
var _Player_player_id;
var Player = class {
  constructor(signature_timestamp, sig_sc, nsig_sc, player_id) {
    _Player_nsig_sc.set(this, void 0);
    _Player_sig_sc.set(this, void 0);
    _Player_sig_sc_timestamp.set(this, void 0);
    _Player_player_id.set(this, void 0);
    (0, import_tslib54.__classPrivateFieldSet)(this, _Player_nsig_sc, nsig_sc, "f");
    (0, import_tslib54.__classPrivateFieldSet)(this, _Player_sig_sc, sig_sc, "f");
    (0, import_tslib54.__classPrivateFieldSet)(this, _Player_sig_sc_timestamp, signature_timestamp, "f");
    (0, import_tslib54.__classPrivateFieldSet)(this, _Player_player_id, player_id, "f");
  }
  static create(cache, fetch = Platform.shim.fetch) {
    return (0, import_tslib54.__awaiter)(this, void 0, void 0, function* () {
      const url = new URL("/iframe_api", URLS.YT_BASE);
      const res = yield fetch(url);
      if (res.status !== 200)
        throw new PlayerError("Failed to request player id");
      const js = yield res.text();
      const player_id = getStringBetweenStrings(js, "player\\/", "\\/");
      if (!player_id)
        throw new PlayerError("Failed to get player id");
      if (cache) {
        const cached_player = yield Player.fromCache(cache, player_id);
        if (cached_player)
          return cached_player;
      }
      const player_url = new URL(`/s/player/${player_id}/player_ias.vflset/en_US/base.js`, URLS.YT_BASE);
      const player_res = yield fetch(player_url, {
        headers: {
          "user-agent": getRandomUserAgent("desktop")
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
      throw new PlayerError("No valid URL to decipher");
    const args = new URLSearchParams(url);
    const url_components = new URL(args.get("url") || url);
    if (signature_cipher || cipher) {
      const signature = Platform.shim.eval((0, import_tslib54.__classPrivateFieldGet)(this, _Player_sig_sc, "f"), {
        sig: args.get("s")
      });
      if (typeof signature !== "string")
        throw new PlayerError("Failed to decipher signature");
      const sp = args.get("sp");
      sp ? url_components.searchParams.set(sp, signature) : url_components.searchParams.set("signature", signature);
    }
    const n = url_components.searchParams.get("n");
    if (n) {
      const nsig = Platform.shim.eval((0, import_tslib54.__classPrivateFieldGet)(this, _Player_nsig_sc, "f"), {
        nsig: n
      });
      if (typeof nsig !== "string")
        throw new PlayerError("Failed to decipher nsig");
      if (nsig.startsWith("enhanced_except_")) {
        console.warn('Warning:\nCould not transform nsig, download may be throttled.\nChanging the InnerTube client to "ANDROID" might help!');
      }
      url_components.searchParams.set("n", nsig);
    }
    const client = url_components.searchParams.get("c");
    switch (client) {
      case "WEB":
        url_components.searchParams.set("cver", CLIENTS.WEB.VERSION);
        break;
      case "WEB_REMIX":
        url_components.searchParams.set("cver", CLIENTS.YTMUSIC.VERSION);
        break;
      case "WEB_KIDS":
        url_components.searchParams.set("cver", CLIENTS.WEB_KIDS.VERSION);
        break;
      case "ANDROID":
        url_components.searchParams.set("cver", CLIENTS.ANDROID.VERSION);
        break;
      case "ANDROID_MUSIC":
        url_components.searchParams.set("cver", CLIENTS.YTMUSIC_ANDROID.VERSION);
        break;
      case "TVHTML5_SIMPLY_EMBEDDED_PLAYER":
        url_components.searchParams.set("cver", CLIENTS.TV_EMBEDDED.VERSION);
        break;
    }
    return url_components.toString();
  }
  static fromCache(cache, player_id) {
    return (0, import_tslib54.__awaiter)(this, void 0, void 0, function* () {
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
    return (0, import_tslib54.__awaiter)(this, void 0, void 0, function* () {
      const player = new Player(sig_timestamp, sig_sc, nsig_sc, player_id);
      yield player.cache(cache);
      return player;
    });
  }
  cache(cache) {
    return (0, import_tslib54.__awaiter)(this, void 0, void 0, function* () {
      if (!cache)
        return;
      const encoder = new TextEncoder();
      const sig_buf = encoder.encode((0, import_tslib54.__classPrivateFieldGet)(this, _Player_sig_sc, "f"));
      const nsig_buf = encoder.encode((0, import_tslib54.__classPrivateFieldGet)(this, _Player_nsig_sc, "f"));
      const buffer = new ArrayBuffer(12 + sig_buf.byteLength + nsig_buf.byteLength);
      const view = new DataView(buffer);
      view.setUint32(0, Player.LIBRARY_VERSION, true);
      view.setUint32(4, (0, import_tslib54.__classPrivateFieldGet)(this, _Player_sig_sc_timestamp, "f"), true);
      view.setUint32(8, sig_buf.byteLength, true);
      new Uint8Array(buffer).set(sig_buf, 12);
      new Uint8Array(buffer).set(nsig_buf, 12 + sig_buf.byteLength);
      yield cache.set((0, import_tslib54.__classPrivateFieldGet)(this, _Player_player_id, "f"), new Uint8Array(buffer));
    });
  }
  static extractSigTimestamp(data) {
    return parseInt(getStringBetweenStrings(data, "signatureTimestamp:", ",") || "0");
  }
  static extractSigSourceCode(data) {
    var _a4, _b2, _c;
    const calls = getStringBetweenStrings(data, 'function(a){a=a.split("")', 'return a.join("")}');
    const obj_name = (_c = (_b2 = (_a4 = calls === null || calls === void 0 ? void 0 : calls.split(/\.|\[/)) === null || _a4 === void 0 ? void 0 : _a4[0]) === null || _b2 === void 0 ? void 0 : _b2.replace(";", "")) === null || _c === void 0 ? void 0 : _c.trim();
    const functions = getStringBetweenStrings(data, `var ${obj_name}={`, "};");
    if (!functions || !calls)
      console.warn(new PlayerError("Failed to extract signature decipher algorithm"));
    return `function descramble_sig(a) { a = a.split(""); let ${obj_name}={${functions}}${calls} return a.join("") } descramble_sig(sig);`;
  }
  static extractNSigSourceCode(data) {
    const sc = `function descramble_nsig(a) { let b=a.split("")${getStringBetweenStrings(data, 'b=a.split("")', '}return b.join("")}')}} return b.join(""); } descramble_nsig(nsig)`;
    if (!sc)
      console.warn(new PlayerError("Failed to extract n-token decipher algorithm"));
    return sc;
  }
  get url() {
    return new URL(`/s/player/${(0, import_tslib54.__classPrivateFieldGet)(this, _Player_player_id, "f")}/player_ias.vflset/en_US/base.js`, URLS.YT_BASE).toString();
  }
  get sts() {
    return (0, import_tslib54.__classPrivateFieldGet)(this, _Player_sig_sc_timestamp, "f");
  }
  get nsig_sc() {
    return (0, import_tslib54.__classPrivateFieldGet)(this, _Player_nsig_sc, "f");
  }
  get sig_sc() {
    return (0, import_tslib54.__classPrivateFieldGet)(this, _Player_sig_sc, "f");
  }
  static get LIBRARY_VERSION() {
    return 2;
  }
};
__name(Player, "Player");
_Player_nsig_sc = /* @__PURE__ */ new WeakMap(), _Player_sig_sc = /* @__PURE__ */ new WeakMap(), _Player_sig_sc_timestamp = /* @__PURE__ */ new WeakMap(), _Player_player_id = /* @__PURE__ */ new WeakMap();
var Player_default = Player;

// dist/src/core/OAuth.js
var import_tslib55 = require("tslib");
var _OAuth_instances;
var _OAuth_identity;
var _OAuth_session;
var _OAuth_credentials;
var _OAuth_polling_interval;
var _OAuth_loadCachedCredentials;
var _OAuth_getUserCode;
var _OAuth_startPolling;
var _OAuth_refreshAccessToken;
var _OAuth_getClientIdentity;
var OAuth = class {
  constructor(session) {
    _OAuth_instances.add(this);
    _OAuth_identity.set(this, void 0);
    _OAuth_session.set(this, void 0);
    _OAuth_credentials.set(this, void 0);
    _OAuth_polling_interval.set(this, 5);
    (0, import_tslib55.__classPrivateFieldSet)(this, _OAuth_session, session, "f");
  }
  init(credentials) {
    return (0, import_tslib55.__awaiter)(this, void 0, void 0, function* () {
      (0, import_tslib55.__classPrivateFieldSet)(this, _OAuth_credentials, credentials, "f");
      if (this.validateCredentials()) {
        if (!this.has_access_token_expired)
          (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").emit("auth", {
            credentials: (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f"),
            status: "SUCCESS"
          });
      } else if (!(yield (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_instances, "m", _OAuth_loadCachedCredentials).call(this))) {
        yield (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_instances, "m", _OAuth_getUserCode).call(this);
      }
    });
  }
  cacheCredentials() {
    var _a4;
    return (0, import_tslib55.__awaiter)(this, void 0, void 0, function* () {
      const encoder = new TextEncoder();
      const data = encoder.encode(JSON.stringify((0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f")));
      yield (_a4 = (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").cache) === null || _a4 === void 0 ? void 0 : _a4.set("youtubei_oauth_credentials", data.buffer);
    });
  }
  removeCache() {
    var _a4;
    return (0, import_tslib55.__awaiter)(this, void 0, void 0, function* () {
      yield (_a4 = (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").cache) === null || _a4 === void 0 ? void 0 : _a4.remove("youtubei_oauth_credentials");
    });
  }
  refreshIfRequired() {
    return (0, import_tslib55.__awaiter)(this, void 0, void 0, function* () {
      if (this.has_access_token_expired) {
        yield (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_instances, "m", _OAuth_refreshAccessToken).call(this);
      }
    });
  }
  revokeCredentials() {
    return (0, import_tslib55.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f"))
        return;
      yield this.removeCache();
      return (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").http.fetch_function(new URL(`/o/oauth2/revoke?token=${encodeURIComponent((0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f").access_token)}`, URLS.YT_BASE), {
        method: "post"
      });
    });
  }
  get credentials() {
    return (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f");
  }
  get has_access_token_expired() {
    const timestamp = (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f") ? new Date((0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f").expires).getTime() : -Infinity;
    return new Date().getTime() > timestamp;
  }
  validateCredentials() {
    return (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f") && Reflect.has((0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f"), "access_token") && Reflect.has((0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f"), "refresh_token") && Reflect.has((0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f"), "expires") || false;
  }
};
__name(OAuth, "OAuth");
_OAuth_identity = /* @__PURE__ */ new WeakMap(), _OAuth_session = /* @__PURE__ */ new WeakMap(), _OAuth_credentials = /* @__PURE__ */ new WeakMap(), _OAuth_polling_interval = /* @__PURE__ */ new WeakMap(), _OAuth_instances = /* @__PURE__ */ new WeakSet(), _OAuth_loadCachedCredentials = /* @__PURE__ */ __name(function _OAuth_loadCachedCredentials2() {
  var _a4;
  return (0, import_tslib55.__awaiter)(this, void 0, void 0, function* () {
    const data = yield (_a4 = (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").cache) === null || _a4 === void 0 ? void 0 : _a4.get("youtubei_oauth_credentials");
    if (!data)
      return false;
    const decoder = new TextDecoder();
    const credentials = JSON.parse(decoder.decode(data));
    (0, import_tslib55.__classPrivateFieldSet)(this, _OAuth_credentials, {
      access_token: credentials.access_token,
      refresh_token: credentials.refresh_token,
      expires: new Date(credentials.expires)
    }, "f");
    (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").emit("auth", {
      credentials: (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f"),
      status: "SUCCESS"
    });
    return true;
  });
}, "_OAuth_loadCachedCredentials"), _OAuth_getUserCode = /* @__PURE__ */ __name(function _OAuth_getUserCode2() {
  return (0, import_tslib55.__awaiter)(this, void 0, void 0, function* () {
    (0, import_tslib55.__classPrivateFieldSet)(this, _OAuth_identity, yield (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_instances, "m", _OAuth_getClientIdentity).call(this), "f");
    const data = {
      client_id: (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_identity, "f").client_id,
      scope: OAUTH.SCOPE,
      device_id: Platform.shim.uuidv4(),
      device_model: OAUTH.MODEL_NAME
    };
    const response = yield (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").http.fetch_function(new URL("/o/oauth2/device/code", URLS.YT_BASE), {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const response_data = yield response.json();
    (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").emit("auth-pending", response_data);
    (0, import_tslib55.__classPrivateFieldSet)(this, _OAuth_polling_interval, response_data.interval, "f");
    (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_instances, "m", _OAuth_startPolling).call(this, response_data.device_code);
  });
}, "_OAuth_getUserCode"), _OAuth_startPolling = /* @__PURE__ */ __name(function _OAuth_startPolling2(device_code) {
  const poller = setInterval(() => (0, import_tslib55.__awaiter)(this, void 0, void 0, function* () {
    const data = Object.assign(Object.assign({}, (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_identity, "f")), { code: device_code, grant_type: OAUTH.GRANT_TYPE });
    try {
      const response = yield (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").http.fetch_function(new URL("/o/oauth2/token", URLS.YT_BASE), {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const response_data = yield response.json();
      if (response_data.error) {
        switch (response_data.error) {
          case "access_denied":
            (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").emit("auth-error", new OAuthError("Access was denied.", { status: "ACCESS_DENIED" }));
            break;
          case "expired_token":
            (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").emit("auth-error", new OAuthError("The device code has expired, restarting auth flow.", { status: "DEVICE_CODE_EXPIRED" }));
            clearInterval(poller);
            (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_instances, "m", _OAuth_getUserCode).call(this);
            break;
          default:
            break;
        }
        return;
      }
      const expiration_date = new Date(new Date().getTime() + response_data.expires_in * 1e3);
      (0, import_tslib55.__classPrivateFieldSet)(this, _OAuth_credentials, {
        access_token: response_data.access_token,
        refresh_token: response_data.refresh_token,
        expires: expiration_date
      }, "f");
      (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").emit("auth", {
        credentials: (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f"),
        status: "SUCCESS"
      });
      clearInterval(poller);
    } catch (err) {
      clearInterval(poller);
      return (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").emit("auth-error", new OAuthError("Could not obtain user code.", { status: "FAILED", error: err }));
    }
  }), (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_polling_interval, "f") * 1e3);
}, "_OAuth_startPolling"), _OAuth_refreshAccessToken = /* @__PURE__ */ __name(function _OAuth_refreshAccessToken2() {
  return (0, import_tslib55.__awaiter)(this, void 0, void 0, function* () {
    if (!(0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f"))
      return;
    (0, import_tslib55.__classPrivateFieldSet)(this, _OAuth_identity, yield (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_instances, "m", _OAuth_getClientIdentity).call(this), "f");
    const data = Object.assign(Object.assign({}, (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_identity, "f")), { refresh_token: (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f").refresh_token, grant_type: "refresh_token" });
    const response = yield (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").http.fetch_function(new URL("/o/oauth2/token", URLS.YT_BASE), {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const response_data = yield response.json();
    const expiration_date = new Date(new Date().getTime() + response_data.expires_in * 1e3);
    (0, import_tslib55.__classPrivateFieldSet)(this, _OAuth_credentials, {
      access_token: response_data.access_token,
      refresh_token: response_data.refresh_token || (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f").refresh_token,
      expires: expiration_date
    }, "f");
    (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").emit("update-credentials", {
      credentials: (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_credentials, "f"),
      status: "SUCCESS"
    });
  });
}, "_OAuth_refreshAccessToken"), _OAuth_getClientIdentity = /* @__PURE__ */ __name(function _OAuth_getClientIdentity2() {
  var _a4;
  return (0, import_tslib55.__awaiter)(this, void 0, void 0, function* () {
    const response = yield (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").http.fetch_function(new URL("/tv", URLS.YT_BASE), { headers: OAUTH.HEADERS });
    const response_data = yield response.text();
    const url_body = (_a4 = OAUTH.REGEX.AUTH_SCRIPT.exec(response_data)) === null || _a4 === void 0 ? void 0 : _a4[1];
    if (!url_body)
      throw new OAuthError("Could not obtain script url.", { status: "FAILED" });
    const script = yield (0, import_tslib55.__classPrivateFieldGet)(this, _OAuth_session, "f").http.fetch(url_body, { baseURL: URLS.YT_BASE });
    const client_identity = (yield script.text()).replace(/\n/g, "").match(OAUTH.REGEX.CLIENT_IDENTITY);
    const groups = client_identity === null || client_identity === void 0 ? void 0 : client_identity.groups;
    if (!groups)
      throw new OAuthError("Could not obtain client identity.", { status: "FAILED" });
    return groups;
  });
}, "_OAuth_getClientIdentity");
var OAuth_default = OAuth;

// dist/src/core/Session.js
var _a2;
var _Session_api_version;
var _Session_key;
var _Session_context;
var _Session_account_index;
var _Session_player;
var _Session_retrieveSessionData;
var _Session_generateSessionData;
var ClientType;
(function(ClientType2) {
  ClientType2["WEB"] = "WEB";
  ClientType2["KIDS"] = "WEB_KIDS";
  ClientType2["MUSIC"] = "WEB_REMIX";
  ClientType2["IOS"] = "iOS";
  ClientType2["ANDROID"] = "ANDROID";
  ClientType2["ANDROID_MUSIC"] = "ANDROID_MUSIC";
  ClientType2["ANDROID_CREATOR"] = "ANDROID_CREATOR";
  ClientType2["TV_EMBEDDED"] = "TVHTML5_SIMPLY_EMBEDDED_PLAYER";
})(ClientType || (ClientType = {}));
var Session = class extends EventEmitterLike_default {
  constructor(context, api_key, api_version, account_index, player, cookie, fetch, cache) {
    super();
    _Session_api_version.set(this, void 0);
    _Session_key.set(this, void 0);
    _Session_context.set(this, void 0);
    _Session_account_index.set(this, void 0);
    _Session_player.set(this, void 0);
    (0, import_tslib56.__classPrivateFieldSet)(this, _Session_context, context, "f");
    (0, import_tslib56.__classPrivateFieldSet)(this, _Session_account_index, account_index, "f");
    (0, import_tslib56.__classPrivateFieldSet)(this, _Session_key, api_key, "f");
    (0, import_tslib56.__classPrivateFieldSet)(this, _Session_api_version, api_version, "f");
    (0, import_tslib56.__classPrivateFieldSet)(this, _Session_player, player, "f");
    this.http = new HTTPClient_default(this, cookie, fetch);
    this.actions = new Actions_default(this);
    this.oauth = new OAuth_default(this);
    this.logged_in = !!cookie;
    this.cache = cache;
  }
  on(type, listener) {
    super.on(type, listener);
  }
  once(type, listener) {
    super.once(type, listener);
  }
  static create(options = {}) {
    return (0, import_tslib56.__awaiter)(this, void 0, void 0, function* () {
      const { context, api_key, api_version, account_index } = yield Session.getSessionData(options.lang, options.location, options.account_index, options.visitor_data, options.enable_safety_mode, options.generate_session_locally, options.device_category, options.client_type, options.timezone, options.fetch, options.on_behalf_of_user);
      return new Session(context, api_key, api_version, account_index, options.retrieve_player === false ? void 0 : yield Player_default.create(options.cache, options.fetch), options.cookie, options.fetch, options.cache);
    });
  }
  static getSessionData(lang = "", location = "", account_index = 0, visitor_data = "", enable_safety_mode = false, generate_session_locally = false, device_category = "desktop", client_name = ClientType.WEB, tz = Intl.DateTimeFormat().resolvedOptions().timeZone, fetch = Platform.shim.fetch, on_behalf_of_user) {
    return (0, import_tslib56.__awaiter)(this, void 0, void 0, function* () {
      let session_data;
      const session_args = { lang, location, time_zone: tz, device_category, client_name, enable_safety_mode, visitor_data, on_behalf_of_user };
      if (generate_session_locally) {
        session_data = (0, import_tslib56.__classPrivateFieldGet)(this, _a2, "m", _Session_generateSessionData).call(this, session_args);
      } else {
        try {
          session_data = yield (0, import_tslib56.__classPrivateFieldGet)(this, _a2, "m", _Session_retrieveSessionData).call(this, session_args, fetch);
        } catch (err) {
          session_data = (0, import_tslib56.__classPrivateFieldGet)(this, _a2, "m", _Session_generateSessionData).call(this, session_args);
        }
      }
      return Object.assign(Object.assign({}, session_data), { account_index });
    });
  }
  signIn(credentials) {
    return (0, import_tslib56.__awaiter)(this, void 0, void 0, function* () {
      return new Promise((resolve, reject) => (0, import_tslib56.__awaiter)(this, void 0, void 0, function* () {
        const error_handler = /* @__PURE__ */ __name((err) => reject(err), "error_handler");
        this.once("auth", (data) => {
          this.off("auth-error", error_handler);
          if (data.status === "SUCCESS") {
            this.logged_in = true;
            resolve();
          }
          reject(data);
        });
        this.once("auth-error", error_handler);
        try {
          yield this.oauth.init(credentials);
          if (this.oauth.validateCredentials()) {
            yield this.oauth.refreshIfRequired();
            this.logged_in = true;
            resolve();
          }
        } catch (err) {
          reject(err);
        }
      }));
    });
  }
  signOut() {
    return (0, import_tslib56.__awaiter)(this, void 0, void 0, function* () {
      if (!this.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const response = yield this.oauth.revokeCredentials();
      this.logged_in = false;
      return response;
    });
  }
  get key() {
    return (0, import_tslib56.__classPrivateFieldGet)(this, _Session_key, "f");
  }
  get api_version() {
    return (0, import_tslib56.__classPrivateFieldGet)(this, _Session_api_version, "f");
  }
  get client_version() {
    return (0, import_tslib56.__classPrivateFieldGet)(this, _Session_context, "f").client.clientVersion;
  }
  get client_name() {
    return (0, import_tslib56.__classPrivateFieldGet)(this, _Session_context, "f").client.clientName;
  }
  get account_index() {
    return (0, import_tslib56.__classPrivateFieldGet)(this, _Session_account_index, "f");
  }
  get context() {
    return (0, import_tslib56.__classPrivateFieldGet)(this, _Session_context, "f");
  }
  get player() {
    return (0, import_tslib56.__classPrivateFieldGet)(this, _Session_player, "f");
  }
  get lang() {
    return (0, import_tslib56.__classPrivateFieldGet)(this, _Session_context, "f").client.hl;
  }
};
__name(Session, "Session");
_a2 = Session, _Session_api_version = /* @__PURE__ */ new WeakMap(), _Session_key = /* @__PURE__ */ new WeakMap(), _Session_context = /* @__PURE__ */ new WeakMap(), _Session_account_index = /* @__PURE__ */ new WeakMap(), _Session_player = /* @__PURE__ */ new WeakMap(), _Session_retrieveSessionData = /* @__PURE__ */ __name(function _Session_retrieveSessionData2(options, fetch = Platform.shim.fetch) {
  return (0, import_tslib56.__awaiter)(this, void 0, void 0, function* () {
    const url = new URL("/sw.js_data", URLS.YT_BASE);
    let visitor_id = generateRandomString(11);
    if (options.visitor_data) {
      const decoded_visitor_data = decodeVisitorData(options.visitor_data);
      visitor_id = decoded_visitor_data.id;
    }
    const res = yield fetch(url, {
      headers: {
        "accept-language": options.lang || "en-US",
        "user-agent": getRandomUserAgent("desktop"),
        "accept": "*/*",
        "referer": "https://www.youtube.com/sw.js",
        "cookie": `PREF=tz=${options.time_zone.replace("/", ".")};VISITOR_INFO1_LIVE=${visitor_id};`
      }
    });
    if (!res.ok)
      throw new SessionError(`Failed to retrieve session data: ${res.status}`);
    const text = yield res.text();
    const data = JSON.parse(text.replace(/^\)\]\}'/, ""));
    const ytcfg = data[0][2];
    const api_version = `v${ytcfg[0][0][6]}`;
    const [[device_info], api_key] = ytcfg;
    const context = {
      client: {
        hl: device_info[0],
        gl: options.location || device_info[2],
        remoteHost: device_info[3],
        screenDensityFloat: 1,
        screenHeightPoints: 1080,
        screenPixelDensity: 1,
        screenWidthPoints: 1920,
        visitorData: device_info[13],
        clientName: options.client_name,
        clientVersion: device_info[16],
        osName: device_info[17],
        osVersion: device_info[18],
        platform: options.device_category.toUpperCase(),
        clientFormFactor: "UNKNOWN_FORM_FACTOR",
        userInterfaceTheme: "USER_INTERFACE_THEME_LIGHT",
        timeZone: device_info[79] || options.time_zone,
        browserName: device_info[86],
        browserVersion: device_info[87],
        originalUrl: URLS.YT_BASE,
        deviceMake: device_info[11],
        deviceModel: device_info[12],
        utcOffsetMinutes: -new Date().getTimezoneOffset()
      },
      user: {
        enableSafetyMode: options.enable_safety_mode,
        lockedSafetyMode: false,
        onBehalfOfUser: options.on_behalf_of_user
      }
    };
    return { context, api_key, api_version };
  });
}, "_Session_retrieveSessionData"), _Session_generateSessionData = /* @__PURE__ */ __name(function _Session_generateSessionData2(options) {
  let visitor_id = generateRandomString(11);
  if (options.visitor_data) {
    const decoded_visitor_data = decodeVisitorData(options.visitor_data);
    visitor_id = decoded_visitor_data.id;
  }
  const context = {
    client: {
      hl: options.lang || "en",
      gl: options.location || "US",
      screenDensityFloat: 1,
      screenHeightPoints: 1080,
      screenPixelDensity: 1,
      screenWidthPoints: 1920,
      visitorData: encodeVisitorData(visitor_id, Math.floor(Date.now() / 1e3)),
      clientName: options.client_name,
      clientVersion: CLIENTS.WEB.VERSION,
      osName: "Windows",
      osVersion: "10.0",
      platform: options.device_category.toUpperCase(),
      clientFormFactor: "UNKNOWN_FORM_FACTOR",
      userInterfaceTheme: "USER_INTERFACE_THEME_LIGHT",
      timeZone: options.time_zone,
      originalUrl: URLS.YT_BASE,
      deviceMake: "",
      deviceModel: "",
      utcOffsetMinutes: -new Date().getTimezoneOffset()
    },
    user: {
      enableSafetyMode: options.enable_safety_mode,
      lockedSafetyMode: false,
      onBehalfOfUser: options.on_behalf_of_user
    }
  };
  return { context, api_key: CLIENTS.WEB.API_KEY, api_version: CLIENTS.WEB.API_VERSION };
}, "_Session_generateSessionData");
var Session_default = Session;

// dist/src/core/clients/index.js
var clients_exports = {};
__export(clients_exports, {
  Kids: () => Kids_default,
  Music: () => Music_default,
  Studio: () => Studio_default
});

// dist/src/core/clients/Kids.js
var import_tslib57 = require("tslib");

// dist/src/core/endpoints/index.js
var endpoints_exports = {};
__export(endpoints_exports, {
  Account: () => account_exports,
  Browse: () => browse_exports,
  BrowseEndpoint: () => BrowseEndpoint_exports,
  Channel: () => channel_exports,
  Comment: () => comment_exports,
  GetNotificationMenuEndpoint: () => GetNotificationMenuEndpoint_exports,
  GuideEndpoint: () => GuideEndpoint_exports,
  Like: () => like_exports,
  Music: () => music_exports,
  NextEndpoint: () => NextEndpoint_exports,
  Notification: () => notification_exports,
  PlayerEndpoint: () => PlayerEndpoint_exports,
  Playlist: () => playlist_exports,
  ResolveURLEndpoint: () => ResolveURLEndpoint_exports,
  SearchEndpoint: () => SearchEndpoint_exports,
  Subscription: () => subscription_exports,
  Upload: () => upload_exports
});

// dist/src/core/endpoints/BrowseEndpoint.js
var BrowseEndpoint_exports = {};
__export(BrowseEndpoint_exports, {
  PATH: () => PATH,
  build: () => build
});
var PATH = "/browse";
function build(opts) {
  return Object.assign({
    browseId: opts.browse_id,
    params: opts.params,
    continuation: opts.continuation,
    client: opts.client
  });
}
__name(build, "build");

// dist/src/core/endpoints/GetNotificationMenuEndpoint.js
var GetNotificationMenuEndpoint_exports = {};
__export(GetNotificationMenuEndpoint_exports, {
  PATH: () => PATH2,
  build: () => build2
});
var PATH2 = "/notification/get_notification_menu";
function build2(opts) {
  return Object.assign({
    notificationsMenuRequestType: opts.notifications_menu_request_type
  });
}
__name(build2, "build");

// dist/src/core/endpoints/GuideEndpoint.js
var GuideEndpoint_exports = {};
__export(GuideEndpoint_exports, {
  PATH: () => PATH3
});
var PATH3 = "/guide";

// dist/src/core/endpoints/NextEndpoint.js
var NextEndpoint_exports = {};
__export(NextEndpoint_exports, {
  PATH: () => PATH4,
  build: () => build3
});
var PATH4 = "/next";
function build3(opts) {
  return Object.assign({
    videoId: opts.video_id,
    playlistId: opts.playlist_id,
    params: opts.params,
    playlistIndex: opts.playlist_index,
    client: opts.client,
    continuation: opts.continuation
  });
}
__name(build3, "build");

// dist/src/core/endpoints/PlayerEndpoint.js
var PlayerEndpoint_exports = {};
__export(PlayerEndpoint_exports, {
  PATH: () => PATH5,
  build: () => build4
});
var PATH5 = "/player";
function build4(opts) {
  const is_android = opts.client === "ANDROID" || opts.client === "YTMUSIC_ANDROID" || opts.client === "YTSTUDIO_ANDROID";
  return Object.assign({ playbackContext: {
    contentPlaybackContext: Object.assign({ vis: 0, splay: false, referer: opts.playlist_id ? `https://www.youtube.com/watch?v=${opts.video_id}&list=${opts.playlist_id}` : `https://www.youtube.com/watch?v=${opts.video_id}`, currentUrl: opts.playlist_id ? `/watch?v=${opts.video_id}&list=${opts.playlist_id}` : `/watch?v=${opts.video_id}`, autonavState: "STATE_ON", autoCaptionsDefaultOn: false, html5Preference: "HTML5_PREF_WANTS", lactMilliseconds: "-1" }, {
      signatureTimestamp: opts.sts
    })
  }, attestationRequest: {
    omitBotguardData: true
  }, racyCheckOk: true, contentCheckOk: true, videoId: opts.video_id }, {
    client: opts.client,
    playlistId: opts.playlist_id,
    params: is_android ? "2AMBCgIQBg" : opts.params
  });
}
__name(build4, "build");

// dist/src/core/endpoints/ResolveURLEndpoint.js
var ResolveURLEndpoint_exports = {};
__export(ResolveURLEndpoint_exports, {
  PATH: () => PATH6,
  build: () => build5
});
var PATH6 = "/navigation/resolve_url";
function build5(opts) {
  return Object.assign({
    url: opts.url
  });
}
__name(build5, "build");

// dist/src/core/endpoints/SearchEndpoint.js
var SearchEndpoint_exports = {};
__export(SearchEndpoint_exports, {
  PATH: () => PATH7,
  build: () => build6
});
var PATH7 = "/search";
function build6(opts) {
  return Object.assign({
    query: opts.query,
    params: opts.params,
    continuation: opts.continuation,
    client: opts.client
  });
}
__name(build6, "build");

// dist/src/core/endpoints/account/index.js
var account_exports = {};
__export(account_exports, {
  AccountListEndpoint: () => AccountListEndpoint_exports
});

// dist/src/core/endpoints/account/AccountListEndpoint.js
var AccountListEndpoint_exports = {};
__export(AccountListEndpoint_exports, {
  PATH: () => PATH8,
  build: () => build7
});
var PATH8 = "/account/accounts_list";
function build7() {
  return {
    client: "ANDROID"
  };
}
__name(build7, "build");

// dist/src/core/endpoints/browse/index.js
var browse_exports = {};
__export(browse_exports, {
  EditPlaylistEndpoint: () => EditPlaylistEndpoint_exports
});

// dist/src/core/endpoints/browse/EditPlaylistEndpoint.js
var EditPlaylistEndpoint_exports = {};
__export(EditPlaylistEndpoint_exports, {
  PATH: () => PATH9,
  build: () => build8
});
var PATH9 = "/browse/edit_playlist";
function build8(opts) {
  return {
    playlistId: opts.playlist_id,
    actions: opts.actions.map((action) => Object.assign({ action: action.action }, {
      addedVideoId: action.added_video_id,
      setVideoId: action.set_video_id,
      movedSetVideoIdPredecessor: action.moved_set_video_id_predecessor
    }))
  };
}
__name(build8, "build");

// dist/src/core/endpoints/channel/index.js
var channel_exports = {};
__export(channel_exports, {
  EditDescriptionEndpoint: () => EditDescriptionEndpoint_exports,
  EditNameEndpoint: () => EditNameEndpoint_exports
});

// dist/src/core/endpoints/channel/EditNameEndpoint.js
var EditNameEndpoint_exports = {};
__export(EditNameEndpoint_exports, {
  PATH: () => PATH10,
  build: () => build9
});
var PATH10 = "/channel/edit_name";
function build9(options) {
  return {
    givenName: options.given_name,
    client: "ANDROID"
  };
}
__name(build9, "build");

// dist/src/core/endpoints/channel/EditDescriptionEndpoint.js
var EditDescriptionEndpoint_exports = {};
__export(EditDescriptionEndpoint_exports, {
  PATH: () => PATH11,
  build: () => build10
});
var PATH11 = "/channel/edit_description";
function build10(options) {
  return {
    givenDescription: options.given_description,
    client: "ANDROID"
  };
}
__name(build10, "build");

// dist/src/core/endpoints/comment/index.js
var comment_exports = {};
__export(comment_exports, {
  CreateCommentEndpoint: () => CreateCommentEndpoint_exports,
  PerformCommentActionEndpoint: () => PerformCommentActionEndpoint_exports
});

// dist/src/core/endpoints/comment/PerformCommentActionEndpoint.js
var PerformCommentActionEndpoint_exports = {};
__export(PerformCommentActionEndpoint_exports, {
  PATH: () => PATH12,
  build: () => build11
});
var PATH12 = "/comment/perform_comment_action";
function build11(options) {
  return Object.assign({ actions: options.actions }, {
    client: options.client
  });
}
__name(build11, "build");

// dist/src/core/endpoints/comment/CreateCommentEndpoint.js
var CreateCommentEndpoint_exports = {};
__export(CreateCommentEndpoint_exports, {
  PATH: () => PATH13,
  build: () => build12
});
var PATH13 = "/comment/create_comment";
function build12(options) {
  return Object.assign({ commentText: options.comment_text, createCommentParams: options.create_comment_params }, {
    client: options.client
  });
}
__name(build12, "build");

// dist/src/core/endpoints/like/index.js
var like_exports = {};
__export(like_exports, {
  DislikeEndpoint: () => DislikeEndpoint_exports,
  LikeEndpoint: () => LikeEndpoint_exports,
  RemoveLikeEndpoint: () => RemoveLikeEndpoint_exports
});

// dist/src/core/endpoints/like/LikeEndpoint.js
var LikeEndpoint_exports = {};
__export(LikeEndpoint_exports, {
  PATH: () => PATH14,
  build: () => build13
});
var PATH14 = "/like/like";
function build13(options) {
  return Object.assign({ target: {
    videoId: options.target.video_id
  } }, {
    client: options.client
  });
}
__name(build13, "build");

// dist/src/core/endpoints/like/DislikeEndpoint.js
var DislikeEndpoint_exports = {};
__export(DislikeEndpoint_exports, {
  PATH: () => PATH15,
  build: () => build14
});
var PATH15 = "/like/dislike";
function build14(options) {
  return Object.assign({ target: {
    videoId: options.target.video_id
  } }, {
    client: options.client
  });
}
__name(build14, "build");

// dist/src/core/endpoints/like/RemoveLikeEndpoint.js
var RemoveLikeEndpoint_exports = {};
__export(RemoveLikeEndpoint_exports, {
  PATH: () => PATH16,
  build: () => build15
});
var PATH16 = "/like/removelike";
function build15(options) {
  return Object.assign({ target: {
    videoId: options.target.video_id
  } }, {
    client: options.client
  });
}
__name(build15, "build");

// dist/src/core/endpoints/music/index.js
var music_exports = {};
__export(music_exports, {
  GetSearchSuggestionsEndpoint: () => GetSearchSuggestionsEndpoint_exports
});

// dist/src/core/endpoints/music/GetSearchSuggestionsEndpoint.js
var GetSearchSuggestionsEndpoint_exports = {};
__export(GetSearchSuggestionsEndpoint_exports, {
  PATH: () => PATH17,
  build: () => build16
});
var PATH17 = "/music/get_search_suggestions";
function build16(opts) {
  return {
    input: opts.input,
    client: "YTMUSIC"
  };
}
__name(build16, "build");

// dist/src/core/endpoints/notification/index.js
var notification_exports = {};
__export(notification_exports, {
  GetUnseenCountEndpoint: () => GetUnseenCountEndpoint_exports,
  ModifyChannelPreferenceEndpoint: () => ModifyChannelPreferenceEndpoint_exports
});

// dist/src/core/endpoints/notification/GetUnseenCountEndpoint.js
var GetUnseenCountEndpoint_exports = {};
__export(GetUnseenCountEndpoint_exports, {
  PATH: () => PATH18
});
var PATH18 = "/notification/get_unseen_count";

// dist/src/core/endpoints/notification/ModifyChannelPreferenceEndpoint.js
var ModifyChannelPreferenceEndpoint_exports = {};
__export(ModifyChannelPreferenceEndpoint_exports, {
  PATH: () => PATH19,
  build: () => build17
});
var PATH19 = "/notification/modify_channel_preference";
function build17(options) {
  return Object.assign({ params: options.params }, {
    client: options.client
  });
}
__name(build17, "build");

// dist/src/core/endpoints/playlist/index.js
var playlist_exports = {};
__export(playlist_exports, {
  CreateEndpoint: () => CreateEndpoint_exports,
  DeleteEndpoint: () => DeleteEndpoint_exports
});

// dist/src/core/endpoints/playlist/CreateEndpoint.js
var CreateEndpoint_exports = {};
__export(CreateEndpoint_exports, {
  PATH: () => PATH20,
  build: () => build18
});
var PATH20 = "/playlist/create";
function build18(opts) {
  return {
    title: opts.title,
    ids: opts.ids
  };
}
__name(build18, "build");

// dist/src/core/endpoints/playlist/DeleteEndpoint.js
var DeleteEndpoint_exports = {};
__export(DeleteEndpoint_exports, {
  PATH: () => PATH21,
  build: () => build19
});
var PATH21 = "/playlist/delete";
function build19(opts) {
  return {
    playlistId: opts.playlist_id
  };
}
__name(build19, "build");

// dist/src/core/endpoints/subscription/index.js
var subscription_exports = {};
__export(subscription_exports, {
  SubscribeEndpoint: () => SubscribeEndpoint_exports,
  UnsubscribeEndpoint: () => UnsubscribeEndpoint_exports
});

// dist/src/core/endpoints/subscription/SubscribeEndpoint.js
var SubscribeEndpoint_exports = {};
__export(SubscribeEndpoint_exports, {
  PATH: () => PATH22,
  build: () => build20
});
var PATH22 = "/subscription/subscribe";
function build20(options) {
  return Object.assign({ channelIds: options.channel_ids }, {
    client: options.client,
    params: options.params
  });
}
__name(build20, "build");

// dist/src/core/endpoints/subscription/UnsubscribeEndpoint.js
var UnsubscribeEndpoint_exports = {};
__export(UnsubscribeEndpoint_exports, {
  PATH: () => PATH23,
  build: () => build21
});
var PATH23 = "/subscription/unsubscribe";
function build21(options) {
  return Object.assign({ channelIds: options.channel_ids }, {
    client: options.client,
    params: options.params
  });
}
__name(build21, "build");

// dist/src/core/endpoints/upload/index.js
var upload_exports = {};
__export(upload_exports, {
  CreateVideoEndpoint: () => CreateVideoEndpoint_exports
});

// dist/src/core/endpoints/upload/CreateVideoEndpoint.js
var CreateVideoEndpoint_exports = {};
__export(CreateVideoEndpoint_exports, {
  PATH: () => PATH24,
  build: () => build22
});
var PATH24 = "/upload/createvideo";
function build22(opts) {
  return Object.assign({ resourceId: {
    scottyResourceId: {
      id: opts.resource_id.scotty_resource_id.id
    }
  }, frontendUploadId: opts.frontend_upload_id, initialMetadata: {
    title: {
      newTitle: opts.initial_metadata.title.new_title
    },
    description: {
      newDescription: opts.initial_metadata.description.new_description,
      shouldSegment: opts.initial_metadata.description.should_segment
    },
    privacy: {
      newPrivacy: opts.initial_metadata.privacy.new_privacy
    },
    draftState: {
      isDraft: !!opts.initial_metadata.draft_state.is_draft
    }
  } }, {
    client: opts.client
  });
}
__name(build22, "build");

// dist/src/core/clients/Kids.js
var _Kids_session;
var Kids = class {
  constructor(session) {
    _Kids_session.set(this, void 0);
    (0, import_tslib57.__classPrivateFieldSet)(this, _Kids_session, session, "f");
  }
  search(query) {
    return (0, import_tslib57.__awaiter)(this, void 0, void 0, function* () {
      const response = yield (0, import_tslib57.__classPrivateFieldGet)(this, _Kids_session, "f").actions.execute(SearchEndpoint_exports.PATH, SearchEndpoint_exports.build({ client: "YTKIDS", query }));
      return new Search_default3((0, import_tslib57.__classPrivateFieldGet)(this, _Kids_session, "f").actions, response);
    });
  }
  getInfo(video_id) {
    var _a4;
    return (0, import_tslib57.__awaiter)(this, void 0, void 0, function* () {
      const player_payload = PlayerEndpoint_exports.build({
        sts: (_a4 = (0, import_tslib57.__classPrivateFieldGet)(this, _Kids_session, "f").player) === null || _a4 === void 0 ? void 0 : _a4.sts,
        client: "YTKIDS",
        video_id
      });
      const next_payload = NextEndpoint_exports.build({
        video_id,
        client: "YTKIDS"
      });
      const player_response = (0, import_tslib57.__classPrivateFieldGet)(this, _Kids_session, "f").actions.execute(PlayerEndpoint_exports.PATH, player_payload);
      const next_response = (0, import_tslib57.__classPrivateFieldGet)(this, _Kids_session, "f").actions.execute(NextEndpoint_exports.PATH, next_payload);
      const response = yield Promise.all([player_response, next_response]);
      const cpn = generateRandomString(16);
      return new VideoInfo_default2(response, (0, import_tslib57.__classPrivateFieldGet)(this, _Kids_session, "f").actions, cpn);
    });
  }
  getChannel(channel_id) {
    return (0, import_tslib57.__awaiter)(this, void 0, void 0, function* () {
      const response = yield (0, import_tslib57.__classPrivateFieldGet)(this, _Kids_session, "f").actions.execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        browse_id: channel_id,
        client: "YTKIDS"
      }));
      return new Channel_default2((0, import_tslib57.__classPrivateFieldGet)(this, _Kids_session, "f").actions, response);
    });
  }
  getHomeFeed() {
    return (0, import_tslib57.__awaiter)(this, void 0, void 0, function* () {
      const response = yield (0, import_tslib57.__classPrivateFieldGet)(this, _Kids_session, "f").actions.execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        browse_id: "FEkids_home",
        client: "YTKIDS"
      }));
      return new HomeFeed_default2((0, import_tslib57.__classPrivateFieldGet)(this, _Kids_session, "f").actions, response);
    });
  }
};
__name(Kids, "Kids");
_Kids_session = /* @__PURE__ */ new WeakMap();
var Kids_default = Kids;

// dist/src/core/clients/Music.js
var import_tslib58 = require("tslib");
var _Music_instances;
var _Music_session;
var _Music_actions;
var _Music_fetchInfoFromVideoId;
var _Music_fetchInfoFromListItem;
var Music = class {
  constructor(session) {
    _Music_instances.add(this);
    _Music_session.set(this, void 0);
    _Music_actions.set(this, void 0);
    (0, import_tslib58.__classPrivateFieldSet)(this, _Music_session, session, "f");
    (0, import_tslib58.__classPrivateFieldSet)(this, _Music_actions, session.actions, "f");
  }
  getInfo(target) {
    if (target instanceof MusicTwoRowItem_default) {
      return (0, import_tslib58.__classPrivateFieldGet)(this, _Music_instances, "m", _Music_fetchInfoFromListItem).call(this, target);
    } else if (typeof target === "string") {
      return (0, import_tslib58.__classPrivateFieldGet)(this, _Music_instances, "m", _Music_fetchInfoFromVideoId).call(this, target);
    }
    throw new InnertubeError("Invalid target, expected either a video id or a valid MusicTwoRowItem", target);
  }
  search(query, filters = {}) {
    return (0, import_tslib58.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ query });
      const response = yield (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f").execute(SearchEndpoint_exports.PATH, SearchEndpoint_exports.build({
        query,
        client: "YTMUSIC",
        params: filters.type && filters.type !== "all" ? encodeMusicSearchFilters(filters) : void 0
      }));
      return new Search_default2(response, (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f"), Reflect.has(filters, "type") && filters.type !== "all");
    });
  }
  getHomeFeed() {
    return (0, import_tslib58.__awaiter)(this, void 0, void 0, function* () {
      const response = yield (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        browse_id: "FEmusic_home",
        client: "YTMUSIC"
      }));
      return new HomeFeed_default(response, (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f"));
    });
  }
  getExplore() {
    return (0, import_tslib58.__awaiter)(this, void 0, void 0, function* () {
      const response = yield (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        client: "YTMUSIC",
        browse_id: "FEmusic_explore"
      }));
      return new Explore_default(response);
    });
  }
  getLibrary() {
    return (0, import_tslib58.__awaiter)(this, void 0, void 0, function* () {
      const response = yield (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        client: "YTMUSIC",
        browse_id: "FEmusic_library_landing"
      }));
      return new Library_default2(response, (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f"));
    });
  }
  getArtist(artist_id) {
    return (0, import_tslib58.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ artist_id });
      if (!artist_id.startsWith("UC") && !artist_id.startsWith("FEmusic_library_privately_owned_artist"))
        throw new InnertubeError("Invalid artist id", artist_id);
      const response = yield (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        client: "YTMUSIC",
        browse_id: artist_id
      }));
      return new Artist_default(response, (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f"));
    });
  }
  getAlbum(album_id) {
    return (0, import_tslib58.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ album_id });
      if (!album_id.startsWith("MPR") && !album_id.startsWith("FEmusic_library_privately_owned_release"))
        throw new InnertubeError("Invalid album id", album_id);
      const response = yield (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        client: "YTMUSIC",
        browse_id: album_id
      }));
      return new Album_default(response);
    });
  }
  getPlaylist(playlist_id) {
    return (0, import_tslib58.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ playlist_id });
      if (!playlist_id.startsWith("VL")) {
        playlist_id = `VL${playlist_id}`;
      }
      const response = yield (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        client: "YTMUSIC",
        browse_id: playlist_id
      }));
      return new Playlist_default3(response, (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f"));
    });
  }
  getUpNext(video_id, automix = true) {
    var _a4, _b2, _c;
    return (0, import_tslib58.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      const response = yield (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f").execute(NextEndpoint_exports.PATH, Object.assign(Object.assign({}, NextEndpoint_exports.build({ video_id, client: "YTMUSIC" })), { parse: true }));
      const tabs = (_a4 = response.contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(Tab_default);
      const tab = tabs === null || tabs === void 0 ? void 0 : tabs.first();
      if (!tab)
        throw new InnertubeError("Could not find target tab.");
      const music_queue = (_b2 = tab.content) === null || _b2 === void 0 ? void 0 : _b2.as(MusicQueue_default);
      if (!music_queue || !music_queue.content)
        throw new InnertubeError("Music queue was empty, the given id is probably invalid.", music_queue);
      const playlist_panel = music_queue.content.as(PlaylistPanel_default);
      if (!playlist_panel.playlist_id && automix) {
        const automix_preview_video = playlist_panel.contents.firstOfType(AutomixPreviewVideo_default);
        if (!automix_preview_video)
          throw new InnertubeError("Automix item not found");
        const page = yield (_c = automix_preview_video.playlist_video) === null || _c === void 0 ? void 0 : _c.endpoint.call((0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f"), {
          videoId: video_id,
          client: "YTMUSIC",
          parse: true
        });
        if (!page || !page.contents_memo)
          throw new InnertubeError("Could not fetch automix");
        return page.contents_memo.getType(PlaylistPanel_default).first();
      }
      return playlist_panel;
    });
  }
  getRelated(video_id) {
    var _a4;
    return (0, import_tslib58.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      const response = yield (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f").execute(NextEndpoint_exports.PATH, Object.assign(Object.assign({}, NextEndpoint_exports.build({ video_id, client: "YTMUSIC" })), { parse: true }));
      const tabs = (_a4 = response.contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(Tab_default);
      const tab = tabs === null || tabs === void 0 ? void 0 : tabs.matchCondition((tab2) => {
        var _a5, _b2;
        return ((_b2 = (_a5 = tab2.endpoint.payload.browseEndpointContextSupportedConfigs) === null || _a5 === void 0 ? void 0 : _a5.browseEndpointContextMusicConfig) === null || _b2 === void 0 ? void 0 : _b2.pageType) === "MUSIC_PAGE_TYPE_TRACK_RELATED";
      });
      if (!tab)
        throw new InnertubeError("Could not find target tab.");
      const page = yield tab.endpoint.call((0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f"), { client: "YTMUSIC", parse: true });
      if (!page.contents)
        throw new InnertubeError("Unexpected response", page);
      const shelves = page.contents.item().as(SectionList_default).contents.as(MusicCarouselShelf_default, MusicDescriptionShelf_default);
      return shelves;
    });
  }
  getLyrics(video_id) {
    var _a4;
    return (0, import_tslib58.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      const response = yield (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f").execute(NextEndpoint_exports.PATH, Object.assign(Object.assign({}, NextEndpoint_exports.build({ video_id, client: "YTMUSIC" })), { parse: true }));
      const tabs = (_a4 = response.contents_memo) === null || _a4 === void 0 ? void 0 : _a4.getType(Tab_default);
      const tab = tabs === null || tabs === void 0 ? void 0 : tabs.matchCondition((tab2) => {
        var _a5, _b2;
        return ((_b2 = (_a5 = tab2.endpoint.payload.browseEndpointContextSupportedConfigs) === null || _a5 === void 0 ? void 0 : _a5.browseEndpointContextMusicConfig) === null || _b2 === void 0 ? void 0 : _b2.pageType) === "MUSIC_PAGE_TYPE_TRACK_LYRICS";
      });
      if (!tab)
        throw new InnertubeError("Could not find target tab.");
      const page = yield tab.endpoint.call((0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f"), { client: "YTMUSIC", parse: true });
      if (!page.contents)
        throw new InnertubeError("Unexpected response", page);
      if (page.contents.item().type === "Message")
        throw new InnertubeError(page.contents.item().as(Message_default).text.toString(), video_id);
      const section_list = page.contents.item().as(SectionList_default).contents;
      return section_list.firstOfType(MusicDescriptionShelf_default);
    });
  }
  getRecap() {
    return (0, import_tslib58.__awaiter)(this, void 0, void 0, function* () {
      const response = yield (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        client: "YTMUSIC_ANDROID",
        browse_id: "FEmusic_listening_review"
      }));
      return new Recap_default(response, (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f"));
    });
  }
  getSearchSuggestions(query) {
    return (0, import_tslib58.__awaiter)(this, void 0, void 0, function* () {
      const response = yield (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f").execute(GetSearchSuggestionsEndpoint_exports.PATH, Object.assign(Object.assign({}, GetSearchSuggestionsEndpoint_exports.build({ input: query })), { parse: true }));
      if (!response.contents_memo)
        throw new InnertubeError("Unexpected response", response);
      const search_suggestions_section = response.contents_memo.getType(SearchSuggestionsSection_default).first();
      return search_suggestions_section.contents;
    });
  }
};
__name(Music, "Music");
_Music_session = /* @__PURE__ */ new WeakMap(), _Music_actions = /* @__PURE__ */ new WeakMap(), _Music_instances = /* @__PURE__ */ new WeakSet(), _Music_fetchInfoFromVideoId = /* @__PURE__ */ __name(function _Music_fetchInfoFromVideoId2(video_id) {
  var _a4;
  return (0, import_tslib58.__awaiter)(this, void 0, void 0, function* () {
    const player_payload = PlayerEndpoint_exports.build({
      video_id,
      sts: (_a4 = (0, import_tslib58.__classPrivateFieldGet)(this, _Music_session, "f").player) === null || _a4 === void 0 ? void 0 : _a4.sts,
      client: "YTMUSIC"
    });
    const next_payload = NextEndpoint_exports.build({
      video_id,
      client: "YTMUSIC"
    });
    const player_response = (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f").execute(PlayerEndpoint_exports.PATH, player_payload);
    const next_response = (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f").execute(NextEndpoint_exports.PATH, next_payload);
    const response = yield Promise.all([player_response, next_response]);
    const cpn = generateRandomString(16);
    return new TrackInfo_default(response, (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f"), cpn);
  });
}, "_Music_fetchInfoFromVideoId"), _Music_fetchInfoFromListItem = /* @__PURE__ */ __name(function _Music_fetchInfoFromListItem2(list_item) {
  var _a4;
  return (0, import_tslib58.__awaiter)(this, void 0, void 0, function* () {
    if (!list_item)
      throw new InnertubeError("List item cannot be undefined");
    if (!list_item.endpoint)
      throw new Error("This item does not have an endpoint.");
    const player_response = list_item.endpoint.call((0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f"), {
      client: "YTMUSIC",
      playbackContext: {
        contentPlaybackContext: Object.assign({
          signatureTimestamp: (_a4 = (0, import_tslib58.__classPrivateFieldGet)(this, _Music_session, "f").player) === null || _a4 === void 0 ? void 0 : _a4.sts
        })
      }
    });
    const next_response = list_item.endpoint.call((0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f"), {
      client: "YTMUSIC",
      enablePersistentPlaylistPanel: true,
      override_endpoint: "/next"
    });
    const cpn = generateRandomString(16);
    const response = yield Promise.all([player_response, next_response]);
    return new TrackInfo_default(response, (0, import_tslib58.__classPrivateFieldGet)(this, _Music_actions, "f"), cpn);
  });
}, "_Music_fetchInfoFromListItem");
var Music_default = Music;

// dist/src/core/clients/Studio.js
var import_tslib59 = require("tslib");
var _Studio_instances;
var _Studio_session;
var _Studio_getInitialUploadData;
var _Studio_uploadVideo;
var _Studio_setVideoMetadata;
var Studio = class {
  constructor(session) {
    _Studio_instances.add(this);
    _Studio_session.set(this, void 0);
    (0, import_tslib59.__classPrivateFieldSet)(this, _Studio_session, session, "f");
  }
  setThumbnail(video_id, buffer) {
    return (0, import_tslib59.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib59.__classPrivateFieldGet)(this, _Studio_session, "f").logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      if (!video_id || !buffer)
        throw new MissingParamError("One or more parameters are missing.");
      const payload = encodeCustomThumbnailPayload(video_id, buffer);
      const response = yield (0, import_tslib59.__classPrivateFieldGet)(this, _Studio_session, "f").actions.execute("/video_manager/metadata_update", {
        protobuf: true,
        serialized_data: payload
      });
      return response;
    });
  }
  updateVideoMetadata(video_id, metadata) {
    return (0, import_tslib59.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib59.__classPrivateFieldGet)(this, _Studio_session, "f").logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const payload = encodeVideoMetadataPayload(video_id, metadata);
      const response = yield (0, import_tslib59.__classPrivateFieldGet)(this, _Studio_session, "f").actions.execute("/video_manager/metadata_update", {
        protobuf: true,
        serialized_data: payload
      });
      return response;
    });
  }
  upload(file, metadata = {}) {
    return (0, import_tslib59.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib59.__classPrivateFieldGet)(this, _Studio_session, "f").logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const initial_data = yield (0, import_tslib59.__classPrivateFieldGet)(this, _Studio_instances, "m", _Studio_getInitialUploadData).call(this);
      const upload_result = yield (0, import_tslib59.__classPrivateFieldGet)(this, _Studio_instances, "m", _Studio_uploadVideo).call(this, initial_data.upload_url, file);
      if (upload_result.status !== "STATUS_SUCCESS")
        throw new InnertubeError("Could not process video.");
      const response = yield (0, import_tslib59.__classPrivateFieldGet)(this, _Studio_instances, "m", _Studio_setVideoMetadata).call(this, initial_data, upload_result, metadata);
      return response;
    });
  }
};
__name(Studio, "Studio");
_Studio_session = /* @__PURE__ */ new WeakMap(), _Studio_instances = /* @__PURE__ */ new WeakSet(), _Studio_getInitialUploadData = /* @__PURE__ */ __name(function _Studio_getInitialUploadData2() {
  return (0, import_tslib59.__awaiter)(this, void 0, void 0, function* () {
    const frontend_upload_id = `innertube_android:${Platform.shim.uuidv4()}:0:v=3,api=1,cf=3`;
    const payload = {
      frontendUploadId: frontend_upload_id,
      deviceDisplayName: "Pixel 6 Pro",
      fileId: `goog-edited-video://generated?videoFileUri=content://media/external/video/media/${Platform.shim.uuidv4()}`,
      mp4MoovAtomRelocationStatus: "UNSUPPORTED",
      transcodeResult: "DISABLED",
      connectionType: "WIFI"
    };
    const response = yield (0, import_tslib59.__classPrivateFieldGet)(this, _Studio_session, "f").http.fetch("/upload/youtubei", {
      baseURL: URLS.YT_UPLOAD,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "x-goog-upload-command": "start",
        "x-goog-upload-protocol": "resumable"
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok)
      throw new InnertubeError("Could not get initial upload data");
    return {
      frontend_upload_id,
      upload_id: response.headers.get("x-guploader-uploadid"),
      upload_url: response.headers.get("x-goog-upload-url"),
      scotty_resource_id: response.headers.get("x-goog-upload-header-scotty-resource-id"),
      chunk_granularity: response.headers.get("x-goog-upload-chunk-granularity")
    };
  });
}, "_Studio_getInitialUploadData"), _Studio_uploadVideo = /* @__PURE__ */ __name(function _Studio_uploadVideo2(upload_url, file) {
  return (0, import_tslib59.__awaiter)(this, void 0, void 0, function* () {
    const response = yield (0, import_tslib59.__classPrivateFieldGet)(this, _Studio_session, "f").http.fetch_function(upload_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "x-goog-upload-command": "upload, finalize",
        "x-goog-upload-file-name": `file-${Date.now()}`,
        "x-goog-upload-offset": "0"
      },
      body: file
    });
    if (!response.ok)
      throw new InnertubeError("Could not upload video");
    const data = yield response.json();
    return data;
  });
}, "_Studio_uploadVideo"), _Studio_setVideoMetadata = /* @__PURE__ */ __name(function _Studio_setVideoMetadata2(initial_data, upload_result, metadata) {
  return (0, import_tslib59.__awaiter)(this, void 0, void 0, function* () {
    const response = yield (0, import_tslib59.__classPrivateFieldGet)(this, _Studio_session, "f").actions.execute(CreateVideoEndpoint_exports.PATH, CreateVideoEndpoint_exports.build({
      resource_id: {
        scotty_resource_id: {
          id: upload_result.scottyResourceId
        }
      },
      frontend_upload_id: initial_data.frontend_upload_id,
      initial_metadata: {
        title: {
          new_title: metadata.title || new Date().toDateString()
        },
        description: {
          new_description: metadata.description || "",
          should_segment: true
        },
        privacy: {
          new_privacy: metadata.privacy || "PRIVATE"
        },
        draft_state: {
          is_draft: metadata.is_draft
        }
      },
      client: "ANDROID"
    }));
    return response;
  });
}, "_Studio_setVideoMetadata");
var Studio_default = Studio;

// dist/src/core/managers/index.js
var managers_exports = {};
__export(managers_exports, {
  AccountManager: () => AccountManager_default,
  InteractionManager: () => InteractionManager_default,
  PlaylistManager: () => PlaylistManager_default
});

// dist/src/core/managers/AccountManager.js
var import_tslib60 = require("tslib");
var _AccountManager_actions;
var AccountManager = class {
  constructor(actions) {
    _AccountManager_actions.set(this, void 0);
    (0, import_tslib60.__classPrivateFieldSet)(this, _AccountManager_actions, actions, "f");
    this.channel = {
      editName: (new_name) => {
        if (!(0, import_tslib60.__classPrivateFieldGet)(this, _AccountManager_actions, "f").session.logged_in)
          throw new InnertubeError("You must be signed in to perform this operation.");
        return (0, import_tslib60.__classPrivateFieldGet)(this, _AccountManager_actions, "f").execute(channel_exports.EditNameEndpoint.PATH, channel_exports.EditNameEndpoint.build({
          given_name: new_name
        }));
      },
      editDescription: (new_description) => {
        if (!(0, import_tslib60.__classPrivateFieldGet)(this, _AccountManager_actions, "f").session.logged_in)
          throw new InnertubeError("You must be signed in to perform this operation.");
        return (0, import_tslib60.__classPrivateFieldGet)(this, _AccountManager_actions, "f").execute(channel_exports.EditDescriptionEndpoint.PATH, channel_exports.EditDescriptionEndpoint.build({
          given_description: new_description
        }));
      },
      getBasicAnalytics: () => this.getAnalytics()
    };
  }
  getInfo() {
    return (0, import_tslib60.__awaiter)(this, void 0, void 0, function* () {
      if (!(0, import_tslib60.__classPrivateFieldGet)(this, _AccountManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const response = yield (0, import_tslib60.__classPrivateFieldGet)(this, _AccountManager_actions, "f").execute(account_exports.AccountListEndpoint.PATH, account_exports.AccountListEndpoint.build());
      return new AccountInfo_default(response);
    });
  }
  getTimeWatched() {
    return (0, import_tslib60.__awaiter)(this, void 0, void 0, function* () {
      const response = yield (0, import_tslib60.__classPrivateFieldGet)(this, _AccountManager_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        browse_id: "SPtime_watched",
        client: "ANDROID"
      }));
      return new TimeWatched_default(response);
    });
  }
  getSettings() {
    return (0, import_tslib60.__awaiter)(this, void 0, void 0, function* () {
      const response = yield (0, import_tslib60.__classPrivateFieldGet)(this, _AccountManager_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        browse_id: "SPaccount_overview"
      }));
      return new Settings_default((0, import_tslib60.__classPrivateFieldGet)(this, _AccountManager_actions, "f"), response);
    });
  }
  getAnalytics() {
    var _a4;
    return (0, import_tslib60.__awaiter)(this, void 0, void 0, function* () {
      const info = yield this.getInfo();
      const response = yield (0, import_tslib60.__classPrivateFieldGet)(this, _AccountManager_actions, "f").execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        browse_id: "FEanalytics_screen",
        params: encodeChannelAnalyticsParams((_a4 = info.footers) === null || _a4 === void 0 ? void 0 : _a4.endpoint.payload.browseId),
        client: "ANDROID"
      }));
      return new Analytics_default(response);
    });
  }
};
__name(AccountManager, "AccountManager");
_AccountManager_actions = /* @__PURE__ */ new WeakMap();
var AccountManager_default = AccountManager;

// dist/src/core/managers/PlaylistManager.js
var import_tslib61 = require("tslib");
var _PlaylistManager_actions;
var PlaylistManager = class {
  constructor(actions) {
    _PlaylistManager_actions.set(this, void 0);
    (0, import_tslib61.__classPrivateFieldSet)(this, _PlaylistManager_actions, actions, "f");
  }
  create(title, video_ids) {
    return (0, import_tslib61.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ title, video_ids });
      if (!(0, import_tslib61.__classPrivateFieldGet)(this, _PlaylistManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const response = yield (0, import_tslib61.__classPrivateFieldGet)(this, _PlaylistManager_actions, "f").execute(CreateEndpoint_exports.PATH, CreateEndpoint_exports.build({
        ids: video_ids,
        title
      }));
      return {
        success: response.success,
        status_code: response.status_code,
        playlist_id: response.data.playlistId,
        data: response.data
      };
    });
  }
  delete(playlist_id) {
    return (0, import_tslib61.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ playlist_id });
      if (!(0, import_tslib61.__classPrivateFieldGet)(this, _PlaylistManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const response = yield (0, import_tslib61.__classPrivateFieldGet)(this, _PlaylistManager_actions, "f").execute(DeleteEndpoint_exports.PATH, DeleteEndpoint_exports.build({
        playlist_id
      }));
      return {
        playlist_id,
        success: response.success,
        status_code: response.status_code,
        data: response.data
      };
    });
  }
  addVideos(playlist_id, video_ids) {
    return (0, import_tslib61.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ playlist_id, video_ids });
      if (!(0, import_tslib61.__classPrivateFieldGet)(this, _PlaylistManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const response = yield (0, import_tslib61.__classPrivateFieldGet)(this, _PlaylistManager_actions, "f").execute(EditPlaylistEndpoint_exports.PATH, EditPlaylistEndpoint_exports.build({
        actions: video_ids.map((id) => ({
          action: "ACTION_ADD_VIDEO",
          added_video_id: id
        })),
        playlist_id
      }));
      return {
        playlist_id,
        action_result: response.data.actions
      };
    });
  }
  removeVideos(playlist_id, video_ids) {
    return (0, import_tslib61.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ playlist_id, video_ids });
      if (!(0, import_tslib61.__classPrivateFieldGet)(this, _PlaylistManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const info = yield (0, import_tslib61.__classPrivateFieldGet)(this, _PlaylistManager_actions, "f").execute(BrowseEndpoint_exports.PATH, Object.assign(Object.assign({}, BrowseEndpoint_exports.build({ browse_id: `VL${playlist_id}` })), { parse: true }));
      const playlist = new Playlist_default2((0, import_tslib61.__classPrivateFieldGet)(this, _PlaylistManager_actions, "f"), info, true);
      if (!playlist.info.is_editable)
        throw new InnertubeError("This playlist cannot be edited.", playlist_id);
      const payload = { playlist_id, actions: [] };
      const getSetVideoIds = /* @__PURE__ */ __name((pl) => (0, import_tslib61.__awaiter)(this, void 0, void 0, function* () {
        const videos = pl.videos.filter((video) => video_ids.includes(video.key("id").string()));
        videos.forEach((video) => payload.actions.push({
          action: "ACTION_REMOVE_VIDEO",
          set_video_id: video.key("set_video_id").string()
        }));
        if (payload.actions.length < video_ids.length) {
          const next = yield pl.getContinuation();
          return getSetVideoIds(next);
        }
      }), "getSetVideoIds");
      yield getSetVideoIds(playlist);
      if (!payload.actions.length)
        throw new InnertubeError("Given video ids were not found in this playlist.", video_ids);
      const response = yield (0, import_tslib61.__classPrivateFieldGet)(this, _PlaylistManager_actions, "f").execute(EditPlaylistEndpoint_exports.PATH, EditPlaylistEndpoint_exports.build(payload));
      return {
        playlist_id,
        action_result: response.data.actions
      };
    });
  }
  moveVideo(playlist_id, moved_video_id, predecessor_video_id) {
    return (0, import_tslib61.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ playlist_id, moved_video_id, predecessor_video_id });
      if (!(0, import_tslib61.__classPrivateFieldGet)(this, _PlaylistManager_actions, "f").session.logged_in)
        throw new InnertubeError("You must be signed in to perform this operation.");
      const info = yield (0, import_tslib61.__classPrivateFieldGet)(this, _PlaylistManager_actions, "f").execute(BrowseEndpoint_exports.PATH, Object.assign(Object.assign({}, BrowseEndpoint_exports.build({ browse_id: `VL${playlist_id}` })), { parse: true }));
      const playlist = new Playlist_default2((0, import_tslib61.__classPrivateFieldGet)(this, _PlaylistManager_actions, "f"), info, true);
      if (!playlist.info.is_editable)
        throw new InnertubeError("This playlist cannot be edited.", playlist_id);
      const payload = { playlist_id, actions: [] };
      let set_video_id_0, set_video_id_1;
      const getSetVideoIds = /* @__PURE__ */ __name((pl) => (0, import_tslib61.__awaiter)(this, void 0, void 0, function* () {
        const video_0 = pl.videos.find((video) => moved_video_id === video.key("id").string());
        const video_1 = pl.videos.find((video) => predecessor_video_id === video.key("id").string());
        set_video_id_0 = set_video_id_0 || (video_0 === null || video_0 === void 0 ? void 0 : video_0.key("set_video_id").string());
        set_video_id_1 = set_video_id_1 || (video_1 === null || video_1 === void 0 ? void 0 : video_1.key("set_video_id").string());
        if (!set_video_id_0 || !set_video_id_1) {
          const next = yield pl.getContinuation();
          return getSetVideoIds(next);
        }
      }), "getSetVideoIds");
      yield getSetVideoIds(playlist);
      payload.actions.push({
        action: "ACTION_MOVE_VIDEO_AFTER",
        set_video_id: set_video_id_0,
        moved_set_video_id_predecessor: set_video_id_1
      });
      const response = yield (0, import_tslib61.__classPrivateFieldGet)(this, _PlaylistManager_actions, "f").execute(EditPlaylistEndpoint_exports.PATH, EditPlaylistEndpoint_exports.build(payload));
      return {
        playlist_id,
        action_result: response.data.actions
      };
    });
  }
};
__name(PlaylistManager, "PlaylistManager");
_PlaylistManager_actions = /* @__PURE__ */ new WeakMap();
var PlaylistManager_default = PlaylistManager;

// dist/src/core/managers/InteractionManager.js
var import_tslib62 = require("tslib");
var _InteractionManager_actions;
var InteractionManager = class {
  constructor(actions) {
    _InteractionManager_actions.set(this, void 0);
    (0, import_tslib62.__classPrivateFieldSet)(this, _InteractionManager_actions, actions, "f");
  }
  like(video_id) {
    return (0, import_tslib62.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      if (!(0, import_tslib62.__classPrivateFieldGet)(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield (0, import_tslib62.__classPrivateFieldGet)(this, _InteractionManager_actions, "f").execute(LikeEndpoint_exports.PATH, LikeEndpoint_exports.build({
        client: "ANDROID",
        target: { video_id }
      }));
      return action;
    });
  }
  dislike(video_id) {
    return (0, import_tslib62.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      if (!(0, import_tslib62.__classPrivateFieldGet)(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield (0, import_tslib62.__classPrivateFieldGet)(this, _InteractionManager_actions, "f").execute(DislikeEndpoint_exports.PATH, DislikeEndpoint_exports.build({
        client: "ANDROID",
        target: { video_id }
      }));
      return action;
    });
  }
  removeRating(video_id) {
    return (0, import_tslib62.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      if (!(0, import_tslib62.__classPrivateFieldGet)(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield (0, import_tslib62.__classPrivateFieldGet)(this, _InteractionManager_actions, "f").execute(RemoveLikeEndpoint_exports.PATH, RemoveLikeEndpoint_exports.build({
        client: "ANDROID",
        target: { video_id }
      }));
      return action;
    });
  }
  subscribe(channel_id) {
    return (0, import_tslib62.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ channel_id });
      if (!(0, import_tslib62.__classPrivateFieldGet)(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield (0, import_tslib62.__classPrivateFieldGet)(this, _InteractionManager_actions, "f").execute(SubscribeEndpoint_exports.PATH, SubscribeEndpoint_exports.build({
        client: "ANDROID",
        channel_ids: [channel_id],
        params: "EgIIAhgA"
      }));
      return action;
    });
  }
  unsubscribe(channel_id) {
    return (0, import_tslib62.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ channel_id });
      if (!(0, import_tslib62.__classPrivateFieldGet)(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield (0, import_tslib62.__classPrivateFieldGet)(this, _InteractionManager_actions, "f").execute(UnsubscribeEndpoint_exports.PATH, UnsubscribeEndpoint_exports.build({
        client: "ANDROID",
        channel_ids: [channel_id],
        params: "CgIIAhgA"
      }));
      return action;
    });
  }
  comment(video_id, text) {
    return (0, import_tslib62.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ video_id, text });
      if (!(0, import_tslib62.__classPrivateFieldGet)(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const action = yield (0, import_tslib62.__classPrivateFieldGet)(this, _InteractionManager_actions, "f").execute(CreateCommentEndpoint_exports.PATH, CreateCommentEndpoint_exports.build({
        comment_text: text,
        create_comment_params: encodeCommentParams(video_id),
        client: "ANDROID"
      }));
      return action;
    });
  }
  translate(text, target_language, args = {}) {
    return (0, import_tslib62.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ text, target_language });
      const target_action = encodeCommentActionParams(22, Object.assign({ text, target_language }, args));
      const response = yield (0, import_tslib62.__classPrivateFieldGet)(this, _InteractionManager_actions, "f").execute(PerformCommentActionEndpoint_exports.PATH, PerformCommentActionEndpoint_exports.build({
        client: "ANDROID",
        actions: [target_action]
      }));
      const mutation = response.data.frameworkUpdates.entityBatchUpdate.mutations[0].payload.commentEntityPayload;
      return {
        success: response.success,
        status_code: response.status_code,
        translated_content: mutation.translatedContent.content,
        data: response.data
      };
    });
  }
  setNotificationPreferences(channel_id, type) {
    return (0, import_tslib62.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ channel_id, type });
      if (!(0, import_tslib62.__classPrivateFieldGet)(this, _InteractionManager_actions, "f").session.logged_in)
        throw new Error("You must be signed in to perform this operation.");
      const pref_types = {
        PERSONALIZED: 1,
        ALL: 2,
        NONE: 3
      };
      if (!Object.keys(pref_types).includes(type.toUpperCase()))
        throw new Error(`Invalid notification preference type: ${type}`);
      const action = yield (0, import_tslib62.__classPrivateFieldGet)(this, _InteractionManager_actions, "f").execute(ModifyChannelPreferenceEndpoint_exports.PATH, ModifyChannelPreferenceEndpoint_exports.build({
        client: "WEB",
        params: encodeNotificationPref(channel_id, pref_types[type.toUpperCase()])
      }));
      return action;
    });
  }
};
__name(InteractionManager, "InteractionManager");
_InteractionManager_actions = /* @__PURE__ */ new WeakMap();
var InteractionManager_default = InteractionManager;

// dist/src/Innertube.js
var _Innertube_session;
var Innertube = class {
  constructor(session) {
    _Innertube_session.set(this, void 0);
    (0, import_tslib63.__classPrivateFieldSet)(this, _Innertube_session, session, "f");
  }
  static create(config = {}) {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      return new Innertube(yield Session_default.create(config));
    });
  }
  getInfo(target, client) {
    var _a4, _b2, _c, _d, _e;
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ target });
      let next_payload;
      if (target instanceof NavigationEndpoint_default) {
        next_payload = NextEndpoint_exports.build({
          video_id: (_a4 = target.payload) === null || _a4 === void 0 ? void 0 : _a4.videoId,
          playlist_id: (_b2 = target.payload) === null || _b2 === void 0 ? void 0 : _b2.playlistId,
          params: (_c = target.payload) === null || _c === void 0 ? void 0 : _c.params,
          playlist_index: (_d = target.payload) === null || _d === void 0 ? void 0 : _d.index
        });
      } else if (typeof target === "string") {
        next_payload = NextEndpoint_exports.build({
          video_id: target
        });
      } else {
        throw new InnertubeError("Invalid target, expected either a video id or a valid NavigationEndpoint", target);
      }
      if (!next_payload.videoId)
        throw new InnertubeError("Video id cannot be empty", next_payload);
      const player_payload = PlayerEndpoint_exports.build({
        video_id: next_payload.videoId,
        playlist_id: next_payload === null || next_payload === void 0 ? void 0 : next_payload.playlistId,
        client,
        sts: (_e = (0, import_tslib63.__classPrivateFieldGet)(this, _Innertube_session, "f").player) === null || _e === void 0 ? void 0 : _e.sts
      });
      const player_response = this.actions.execute(PlayerEndpoint_exports.PATH, player_payload);
      const next_response = this.actions.execute(NextEndpoint_exports.PATH, next_payload);
      const response = yield Promise.all([player_response, next_response]);
      const cpn = generateRandomString(16);
      return new VideoInfo_default(response, this.actions, cpn);
    });
  }
  getBasicInfo(video_id, client) {
    var _a4;
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      const response = yield this.actions.execute(PlayerEndpoint_exports.PATH, PlayerEndpoint_exports.build({
        video_id,
        client,
        sts: (_a4 = (0, import_tslib63.__classPrivateFieldGet)(this, _Innertube_session, "f").player) === null || _a4 === void 0 ? void 0 : _a4.sts
      }));
      const cpn = generateRandomString(16);
      return new VideoInfo_default([response], this.actions, cpn);
    });
  }
  search(query, filters = {}) {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ query });
      const response = yield this.actions.execute(SearchEndpoint_exports.PATH, SearchEndpoint_exports.build({
        query,
        params: filters ? encodeSearchFilters(filters) : void 0
      }));
      return new Search_default(this.actions, response);
    });
  }
  getSearchSuggestions(query) {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ query });
      const url = new URL(`${URLS.YT_SUGGESTIONS}search`);
      url.searchParams.set("q", query);
      url.searchParams.set("hl", (0, import_tslib63.__classPrivateFieldGet)(this, _Innertube_session, "f").context.client.hl);
      url.searchParams.set("gl", (0, import_tslib63.__classPrivateFieldGet)(this, _Innertube_session, "f").context.client.gl);
      url.searchParams.set("ds", "yt");
      url.searchParams.set("client", "youtube");
      url.searchParams.set("xssi", "t");
      url.searchParams.set("oe", "UTF");
      const response = yield (0, import_tslib63.__classPrivateFieldGet)(this, _Innertube_session, "f").http.fetch(url);
      const response_data = yield response.text();
      const data = JSON.parse(response_data.replace(")]}'", ""));
      const suggestions = data[1].map((suggestion) => suggestion[0]);
      return suggestions;
    });
  }
  getComments(video_id, sort_by) {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ video_id });
      const response = yield this.actions.execute(NextEndpoint_exports.PATH, NextEndpoint_exports.build({
        continuation: encodeCommentsSectionParams(video_id, {
          sort_by: sort_by || "TOP_COMMENTS"
        })
      }));
      return new Comments_default(this.actions, response.data);
    });
  }
  getHomeFeed() {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({ browse_id: "FEwhat_to_watch" }));
      return new HomeFeed(this.actions, response);
    });
  }
  getGuide() {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(GuideEndpoint_exports.PATH);
      return new Guide_default(response.data);
    });
  }
  getLibrary() {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({ browse_id: "FElibrary" }));
      return new Library_default(this.actions, response);
    });
  }
  getHistory() {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({ browse_id: "FEhistory" }));
      return new History_default(this.actions, response);
    });
  }
  getTrending() {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(BrowseEndpoint_exports.PATH, Object.assign(Object.assign({}, BrowseEndpoint_exports.build({ browse_id: "FEtrending" })), { parse: true }));
      return new TabbedFeed_default(this.actions, response);
    });
  }
  getSubscriptionsFeed() {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(BrowseEndpoint_exports.PATH, Object.assign(Object.assign({}, BrowseEndpoint_exports.build({ browse_id: "FEsubscriptions" })), { parse: true }));
      return new Feed_default(this.actions, response);
    });
  }
  getChannel(id) {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ id });
      const response = yield this.actions.execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({ browse_id: id }));
      return new Channel2(this.actions, response);
    });
  }
  getNotifications() {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(GetNotificationMenuEndpoint_exports.PATH, GetNotificationMenuEndpoint_exports.build({
        notifications_menu_request_type: "NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX"
      }));
      return new NotificationsMenu_default(this.actions, response);
    });
  }
  getUnseenNotificationsCount() {
    var _a4, _b2, _c, _d;
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(GetUnseenCountEndpoint_exports.PATH);
      return ((_a4 = response.data) === null || _a4 === void 0 ? void 0 : _a4.unseenCount) || ((_d = (_c = (_b2 = response.data) === null || _b2 === void 0 ? void 0 : _b2.actions) === null || _c === void 0 ? void 0 : _c[0].updateNotificationsUnseenCountAction) === null || _d === void 0 ? void 0 : _d.unseenCount) || 0;
    });
  }
  getPlaylist(id) {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ id });
      if (!id.startsWith("VL")) {
        id = `VL${id}`;
      }
      const response = yield this.actions.execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({ browse_id: id }));
      return new Playlist_default2(this.actions, response);
    });
  }
  getHashtag(hashtag) {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      throwIfMissing({ hashtag });
      const response = yield this.actions.execute(BrowseEndpoint_exports.PATH, BrowseEndpoint_exports.build({
        browse_id: "FEhashtag",
        params: encodeHashtag(hashtag)
      }));
      return new HashtagFeed(this.actions, response);
    });
  }
  getStreamingData(video_id, options = {}) {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      const info = yield this.getBasicInfo(video_id);
      return info.chooseFormat(options);
    });
  }
  download(video_id, options) {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      const info = yield this.getBasicInfo(video_id, options === null || options === void 0 ? void 0 : options.client);
      return info.download(options);
    });
  }
  resolveURL(url) {
    return (0, import_tslib63.__awaiter)(this, void 0, void 0, function* () {
      const response = yield this.actions.execute(ResolveURLEndpoint_exports.PATH, Object.assign(Object.assign({}, ResolveURLEndpoint_exports.build({ url })), { parse: true }));
      return response.endpoint;
    });
  }
  call(endpoint, args) {
    return endpoint.call(this.actions, args);
  }
  get music() {
    return new Music_default((0, import_tslib63.__classPrivateFieldGet)(this, _Innertube_session, "f"));
  }
  get studio() {
    return new Studio_default((0, import_tslib63.__classPrivateFieldGet)(this, _Innertube_session, "f"));
  }
  get kids() {
    return new Kids_default((0, import_tslib63.__classPrivateFieldGet)(this, _Innertube_session, "f"));
  }
  get account() {
    return new AccountManager_default((0, import_tslib63.__classPrivateFieldGet)(this, _Innertube_session, "f").actions);
  }
  get playlist() {
    return new PlaylistManager_default((0, import_tslib63.__classPrivateFieldGet)(this, _Innertube_session, "f").actions);
  }
  get interact() {
    return new InteractionManager_default((0, import_tslib63.__classPrivateFieldGet)(this, _Innertube_session, "f").actions);
  }
  get actions() {
    return (0, import_tslib63.__classPrivateFieldGet)(this, _Innertube_session, "f").actions;
  }
  get session() {
    return (0, import_tslib63.__classPrivateFieldGet)(this, _Innertube_session, "f");
  }
};
__name(Innertube, "Innertube");
_Innertube_session = /* @__PURE__ */ new WeakMap();
var Innertube_default = Innertube;

// dist/src/types/index.js
var types_exports = {};

// dist/src/platform/lib.js
var lib_default = Innertube_default;

// dist/src/platform/node.js
var import_meta = {};
var _a3;
var _b;
var _Cache_instances;
var _Cache_persistent_directory;
var _Cache_persistent;
var _Cache_createCache;
var meta_url = import_meta.url;
var is_cjs = !meta_url;
var __dirname__ = is_cjs ? __dirname : import_path.default.dirname((0, import_url.fileURLToPath)(meta_url));
var package_json = JSON.parse((0, import_fs.readFileSync)(import_path.default.resolve(__dirname__, is_cjs ? "../package.json" : "../../package.json"), "utf-8"));
var repo_url = (_a3 = package_json.homepage) === null || _a3 === void 0 ? void 0 : _a3.split("#")[0];
var Cache = class {
  constructor(persistent = false, persistent_directory) {
    _Cache_instances.add(this);
    _Cache_persistent_directory.set(this, void 0);
    _Cache_persistent.set(this, void 0);
    (0, import_tslib64.__classPrivateFieldSet)(this, _Cache_persistent_directory, persistent_directory || Cache.default_persistent_directory, "f");
    (0, import_tslib64.__classPrivateFieldSet)(this, _Cache_persistent, persistent, "f");
  }
  static get temp_directory() {
    return `${import_os.default.tmpdir()}/youtubei.js`;
  }
  static get default_persistent_directory() {
    return import_path.default.resolve(__dirname__, "..", "..", ".cache", "youtubei.js");
  }
  get cache_dir() {
    return (0, import_tslib64.__classPrivateFieldGet)(this, _Cache_persistent, "f") ? (0, import_tslib64.__classPrivateFieldGet)(this, _Cache_persistent_directory, "f") : Cache.temp_directory;
  }
  get(key) {
    return (0, import_tslib64.__awaiter)(this, void 0, void 0, function* () {
      yield (0, import_tslib64.__classPrivateFieldGet)(this, _Cache_instances, "m", _Cache_createCache).call(this);
      const file = import_path.default.resolve(this.cache_dir, key);
      try {
        const stat = yield import_promises.default.stat(file);
        if (stat.isFile()) {
          const data = yield import_promises.default.readFile(file);
          return data.buffer;
        }
        throw new Error("An unexpected file was found in place of the cache key");
      } catch (e) {
        if ((e === null || e === void 0 ? void 0 : e.code) === "ENOENT")
          return void 0;
        throw e;
      }
    });
  }
  set(key, value) {
    return (0, import_tslib64.__awaiter)(this, void 0, void 0, function* () {
      yield (0, import_tslib64.__classPrivateFieldGet)(this, _Cache_instances, "m", _Cache_createCache).call(this);
      const file = import_path.default.resolve(this.cache_dir, key);
      yield import_promises.default.writeFile(file, new Uint8Array(value));
    });
  }
  remove(key) {
    return (0, import_tslib64.__awaiter)(this, void 0, void 0, function* () {
      yield (0, import_tslib64.__classPrivateFieldGet)(this, _Cache_instances, "m", _Cache_createCache).call(this);
      const file = import_path.default.resolve(this.cache_dir, key);
      try {
        yield import_promises.default.unlink(file);
      } catch (e) {
        if ((e === null || e === void 0 ? void 0 : e.code) === "ENOENT")
          return;
        throw e;
      }
    });
  }
};
__name(Cache, "Cache");
_Cache_persistent_directory = /* @__PURE__ */ new WeakMap(), _Cache_persistent = /* @__PURE__ */ new WeakMap(), _Cache_instances = /* @__PURE__ */ new WeakSet(), _Cache_createCache = /* @__PURE__ */ __name(function _Cache_createCache2() {
  return (0, import_tslib64.__awaiter)(this, void 0, void 0, function* () {
    const dir = this.cache_dir;
    try {
      const cwd = yield import_promises.default.stat(dir);
      if (!cwd.isDirectory())
        throw new Error("An unexpected file was found in place of the cache directory");
    } catch (e) {
      if ((e === null || e === void 0 ? void 0 : e.code) === "ENOENT")
        yield import_promises.default.mkdir(dir, { recursive: true });
      else
        throw e;
    }
  });
}, "_Cache_createCache");
Platform.load({
  runtime: "node",
  info: {
    version: package_json.version,
    bugs_url: ((_b = package_json.bugs) === null || _b === void 0 ? void 0 : _b.url) || `${repo_url}/issues`,
    repo_url
  },
  server: true,
  Cache,
  sha1Hash: (data) => (0, import_tslib64.__awaiter)(void 0, void 0, void 0, function* () {
    return import_crypto.default.createHash("sha1").update(data).digest("hex");
  }),
  uuidv4() {
    return import_crypto.default.randomUUID();
  },
  eval: evaluate,
  fetch: import_undici.fetch,
  Request: import_undici.Request,
  Response: import_undici.Response,
  Headers: import_undici.Headers,
  FormData: import_undici.FormData,
  File: import_undici.File,
  ReadableStream: import_web.ReadableStream,
  CustomEvent: node_custom_event_default
});
var node_default = lib_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Actions,
  AppendContinuationItemsAction,
  ClientType,
  Clients,
  Constants,
  Continuation,
  Endpoints,
  EventEmitter,
  FormatUtils,
  Generator,
  GridContinuation,
  HTTPClient,
  Helpers,
  Innertube,
  ItemSectionContinuation,
  LiveChatContinuation,
  Managers,
  Misc,
  Mixins,
  MusicPlaylistShelfContinuation,
  MusicShelfContinuation,
  NavigateAction,
  OAuth,
  Parser,
  Platform,
  Player,
  PlaylistPanelContinuation,
  Proto,
  ReloadContinuationItemsCommand,
  SectionListContinuation,
  Session,
  ShowMiniplayerCommand,
  Types,
  UniversalCache,
  Utils,
  YT,
  YTKids,
  YTMusic,
  YTNodes
});
//# sourceMappingURL=node.cjs.map
