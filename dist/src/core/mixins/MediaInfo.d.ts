import type { ApiResponse } from '../Actions.js';
import type Actions from '../Actions.js';
import type { DownloadOptions, FormatFilter, FormatOptions, URLTransformer } from '../../types/FormatUtils.js';
import type Format from '../../parser/classes/misc/Format.js';
import type { INextResponse, IPlayerResponse } from '../../parser/index.js';
import type { DashOptions } from '../../types/DashOptions.js';
export default class MediaInfo {
    #private;
    streaming_data: import("../../parser/index.js").IStreamingData | undefined;
    playability_status: import("../../parser/index.js").IPlayabilityStatus;
    constructor(data: [ApiResponse, ApiResponse?], actions: Actions, cpn: string);
    /**
     * Generates a DASH manifest from the streaming data.
     * @param url_transformer - Function to transform the URLs.
     * @param format_filter - Function to filter the formats.
     * @param options - Additional options to customise the manifest generation
     * @returns DASH manifest
     */
    toDash(url_transformer?: URLTransformer, format_filter?: FormatFilter, options?: DashOptions): Promise<string>;
    /**
     * Get a cleaned up representation of the adaptive_formats
     */
    getStreamingInfo(url_transformer?: URLTransformer, format_filter?: FormatFilter): import("../../utils/StreamingInfo.js").StreamingInfo;
    /**
     * Selects the format that best matches the given options.
     * @param options - Options
     */
    chooseFormat(options: FormatOptions): Format;
    /**
     * Downloads the video.
     * @param options - Download options.
     */
    download(options?: DownloadOptions): Promise<ReadableStream<Uint8Array>>;
    /**
     * Adds video to the watch history.
     */
    addToWatchHistory(client_name?: string, client_version?: string, replacement?: string): Promise<Response>;
    /**
     * Actions instance.
     */
    get actions(): Actions;
    /**
     * Content Playback Nonce.
     */
    get cpn(): string;
    /**
     * Original parsed InnerTube response.
     */
    get page(): [IPlayerResponse, INextResponse?];
}
