import { YTNode } from '../helpers.js';
import Thumbnail from './misc/Thumbnail.js';
class ContentPreviewImageView extends YTNode {
    constructor(data) {
        super();
        this.image = data.image.sources.map((x) => new Thumbnail(x)).sort((a, b) => b.width - a.width);
        this.style = data.style;
    }
}
ContentPreviewImageView.type = 'ContentPreviewImageView';
export default ContentPreviewImageView;
//# sourceMappingURL=ContentPreviewImageView.js.map