import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import InfoPanelContent from './InfoPanelContent.js';
import Menu from './menus/Menu.js';
import Text from './misc/Text.js';
class InfoPanelContainer extends YTNode {
    constructor(data) {
        var _a;
        super();
        this.title = new Text(data.title);
        this.menu = Parser.parseItem(data.menu, Menu);
        this.content = Parser.parseItem(data.content, InfoPanelContent);
        this.background = data.background;
        if (Reflect.has(data, 'icon')) {
            this.icon_type = (_a = data.icon) === null || _a === void 0 ? void 0 : _a.iconType;
        }
    }
}
InfoPanelContainer.type = 'InfoPanelContainer';
export default InfoPanelContainer;
//# sourceMappingURL=InfoPanelContainer.js.map