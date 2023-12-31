import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
class SettingsSwitch extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.subtitle = new Text(data.subtitle);
        this.enabled = data.enabled;
        this.enable_endpoint = new NavigationEndpoint(data.enableServiceEndpoint);
        this.disable_endpoint = new NavigationEndpoint(data.disableServiceEndpoint);
    }
}
SettingsSwitch.type = 'SettingsSwitch';
export default SettingsSwitch;
//# sourceMappingURL=SettingsSwitch.js.map