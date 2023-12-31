import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
export default class DefaultPromoPanel extends YTNode {
    static type: string;
    title: Text;
    description: Text;
    endpoint: NavigationEndpoint;
    large_form_factor_background_thumbnail: YTNode;
    small_form_factor_background_thumbnail: YTNode;
    scrim_color_values: number[];
    min_panel_display_duration_ms: number;
    min_video_play_duration_ms: number;
    scrim_duration: number;
    metadata_order: string;
    panel_layout: string;
    constructor(data: RawNode);
}
