import { YTNode, type ObservedArray } from '../helpers.js';
import { type RawNode } from '../index.js';
import Button from './Button.js';
import Menu from './menus/Menu.js';
import Text from './misc/Text.js';
import MusicCardShelfHeaderBasic from './MusicCardShelfHeaderBasic.js';
import MusicInlineBadge from './MusicInlineBadge.js';
import MusicItemThumbnailOverlay from './MusicItemThumbnailOverlay.js';
import MusicThumbnail from './MusicThumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
export default class MusicCardShelf extends YTNode {
    static type: string;
    thumbnail: MusicThumbnail | null;
    title: Text;
    subtitle: Text;
    buttons: ObservedArray<Button>;
    menu: Menu | null;
    on_tap: NavigationEndpoint;
    header: MusicCardShelfHeaderBasic | null;
    end_icon_type?: string;
    subtitle_badges: ObservedArray<MusicInlineBadge>;
    thumbnail_overlay: MusicItemThumbnailOverlay | null;
    contents?: ObservedArray<YTNode>;
    constructor(data: RawNode);
}
