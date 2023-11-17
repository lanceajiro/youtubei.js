import { InnertubeError } from '../../../utils/Utils.js';
export default class Format {
    constructor(data) {
        var _a, _b, _c, _d, _e, _f;
        this.itag = data.itag;
        this.mime_type = data.mimeType;
        this.is_type_otf = data.type === 'FORMAT_STREAM_TYPE_OTF';
        this.bitrate = data.bitrate;
        this.average_bitrate = data.averageBitrate;
        this.width = data.width;
        this.height = data.height;
        this.init_range = data.initRange ? {
            start: parseInt(data.initRange.start),
            end: parseInt(data.initRange.end)
        } : undefined;
        this.index_range = data.indexRange ? {
            start: parseInt(data.indexRange.start),
            end: parseInt(data.indexRange.end)
        } : undefined;
        this.last_modified = new Date(Math.floor(parseInt(data.lastModified) / 1000));
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
            primaries: (_a = data.colorInfo.primaries) === null || _a === void 0 ? void 0 : _a.replace('COLOR_PRIMARIES_', ''),
            transfer_characteristics: (_b = data.colorInfo.transferCharacteristics) === null || _b === void 0 ? void 0 : _b.replace('COLOR_TRANSFER_CHARACTERISTICS_', ''),
            matrix_coefficients: (_c = data.colorInfo.matrixCoefficients) === null || _c === void 0 ? void 0 : _c.replace('COLOR_MATRIX_COEFFICIENTS_', '')
        } : undefined;
        if (this.has_audio) {
            const args = new URLSearchParams(this.cipher || this.signature_cipher);
            const url_components = new URLSearchParams(args.get('url') || this.url);
            const xtags = (_d = url_components.get('xtags')) === null || _d === void 0 ? void 0 : _d.split(':');
            const audio_content = (_e = xtags === null || xtags === void 0 ? void 0 : xtags.find((x) => x.startsWith('acont='))) === null || _e === void 0 ? void 0 : _e.split('=')[1];
            this.language = ((_f = xtags === null || xtags === void 0 ? void 0 : xtags.find((x) => x.startsWith('lang='))) === null || _f === void 0 ? void 0 : _f.split('=')[1]) || null;
            this.is_dubbed = audio_content === 'dubbed';
            this.is_descriptive = audio_content === 'descriptive';
            this.is_original = audio_content === 'original' || (!this.is_dubbed && !this.is_descriptive);
            if (Reflect.has(data, 'audioTrack')) {
                this.audio_track = {
                    audio_is_default: data.audioTrack.audioIsDefault,
                    display_name: data.audioTrack.displayName,
                    id: data.audioTrack.id
                };
            }
        }
    }
    /**
     * Deciphers the streaming url of the format.
     * @returns Deciphered URL.
     */
    decipher(player) {
        if (!player)
            throw new InnertubeError('Cannot decipher format, this session appears to have no valid player.');
        return player.decipher(this.url, this.signature_cipher, this.cipher);
    }
}
//# sourceMappingURL=Format.js.map