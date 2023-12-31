import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
export default class HeatMarker extends YTNode {
    static type: string;
    time_range_start_millis: number;
    marker_duration_millis: number;
    heat_marker_intensity_score_normalized: number;
    constructor(data: RawNode);
}
