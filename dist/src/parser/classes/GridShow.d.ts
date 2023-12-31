import { YTNode, type ObservedArray } from '../helpers.js';
import type { RawNode } from '../index.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import ShowCustomThumbnail from './ShowCustomThumbnail.js';
import ThumbnailOverlayBottomPanel from './ThumbnailOverlayBottomPanel.js';
export default class GridShow extends YTNode {
    static type: string;
    title: Text;
    thumbnail_renderer: ShowCustomThumbnail | null;
    endpoint: NavigationEndpoint;
    long_byline_text: Text;
    thumbnail_overlays: ObservedArray<ThumbnailOverlayBottomPanel> | null;
    author: Author;
    constructor(data: RawNode);
}
