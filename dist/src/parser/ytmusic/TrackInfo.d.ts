import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type Endscreen from '../classes/Endscreen.js';
import Message from '../classes/Message.js';
import type MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import MusicDescriptionShelf from '../classes/MusicDescriptionShelf.js';
import type MusicQueue from '../classes/MusicQueue.js';
import PlayerOverlay from '../classes/PlayerOverlay.js';
import PlaylistPanel from '../classes/PlaylistPanel.js';
import type RichGrid from '../classes/RichGrid.js';
import SectionList from '../classes/SectionList.js';
import Tab from '../classes/Tab.js';
import type NavigationEndpoint from '../classes/NavigationEndpoint.js';
import type PlayerLiveStoryboardSpec from '../classes/PlayerLiveStoryboardSpec.js';
import type PlayerStoryboardSpec from '../classes/PlayerStoryboardSpec.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import { MediaInfo } from '../../core/mixins/index.js';
declare class TrackInfo extends MediaInfo {
    basic_info: {
        description: string;
        is_unlisted: boolean;
        is_family_safe: boolean;
        url_canonical: string;
        tags: string[];
        id?: string | undefined;
        channel_id?: string | undefined;
        title?: string | undefined;
        duration?: number | undefined;
        keywords?: string[] | undefined;
        is_owner_viewing?: boolean | undefined;
        short_description?: string | undefined;
        thumbnail?: import("../misc.js").Thumbnail[] | undefined;
        allow_ratings?: boolean | undefined;
        view_count?: number | undefined;
        author?: string | undefined;
        is_private?: boolean | undefined;
        is_live?: boolean | undefined;
        is_live_content?: boolean | undefined;
        is_upcoming?: boolean | undefined;
        is_crawlable?: boolean | undefined;
        is_post_live_dvr?: boolean | undefined;
    };
    storyboards?: PlayerStoryboardSpec | PlayerLiveStoryboardSpec;
    endscreen?: Endscreen;
    tabs?: ObservedArray<Tab>;
    current_video_endpoint?: NavigationEndpoint;
    player_overlays?: PlayerOverlay;
    constructor(data: [ApiResponse, ApiResponse?], actions: Actions, cpn: string);
    /**
     * Retrieves contents of the given tab.
     */
    getTab(title_or_page_type: string): Promise<ObservedArray<YTNode> | SectionList | MusicQueue | RichGrid | Message>;
    /**
     * Retrieves up next.
     */
    getUpNext(automix?: boolean): Promise<PlaylistPanel>;
    /**
     * Retrieves related content.
     */
    getRelated(): Promise<ObservedArray<MusicCarouselShelf | MusicDescriptionShelf>>;
    /**
     * Retrieves lyrics.
     */
    getLyrics(): Promise<MusicDescriptionShelf | undefined>;
    /**
     * Adds the song to the watch history.
     */
    addToWatchHistory(): Promise<Response>;
    get available_tabs(): string[];
}
export default TrackInfo;
