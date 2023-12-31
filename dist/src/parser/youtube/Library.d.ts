import type Actions from '../../core/Actions.js';
import Feed from '../../core/mixins/Feed.js';
import History from './History.js';
import Playlist from './Playlist.js';
import ProfileColumnStats from '../classes/ProfileColumnStats.js';
import ProfileColumnUserInfo from '../classes/ProfileColumnUserInfo.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';
import type { ApiResponse } from '../../core/Actions.js';
declare class Library extends Feed<IBrowseResponse> {
    #private;
    profile: {
        stats?: ProfileColumnStats;
        user_info?: ProfileColumnUserInfo;
    };
    sections: {
        type: string | undefined;
        title: import("../misc.js").Text;
        contents: any[];
        getAll: () => Promise<History | Playlist | Feed<import("../types/ParsedResponse.js").IParsedResponse>>;
    }[];
    constructor(actions: Actions, data: ApiResponse | IBrowseResponse);
    get history(): {
        type: string | undefined;
        title: import("../misc.js").Text;
        contents: any[];
        getAll: () => Promise<History | Playlist | Feed<import("../types/ParsedResponse.js").IParsedResponse>>;
    } | undefined;
    get watch_later(): {
        type: string | undefined;
        title: import("../misc.js").Text;
        contents: any[];
        getAll: () => Promise<History | Playlist | Feed<import("../types/ParsedResponse.js").IParsedResponse>>;
    } | undefined;
    get liked_videos(): {
        type: string | undefined;
        title: import("../misc.js").Text;
        contents: any[];
        getAll: () => Promise<History | Playlist | Feed<import("../types/ParsedResponse.js").IParsedResponse>>;
    } | undefined;
    get playlists_section(): {
        type: string | undefined;
        title: import("../misc.js").Text;
        contents: any[];
        getAll: () => Promise<History | Playlist | Feed<import("../types/ParsedResponse.js").IParsedResponse>>;
    } | undefined;
    get clips(): {
        type: string | undefined;
        title: import("../misc.js").Text;
        contents: any[];
        getAll: () => Promise<History | Playlist | Feed<import("../types/ParsedResponse.js").IParsedResponse>>;
    } | undefined;
}
export default Library;
