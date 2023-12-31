import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class SearchSuggestion extends YTNode {
    constructor(data) {
        super();
        this.suggestion = new Text(data.suggestion);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        if (Reflect.has(data, 'icon')) {
            this.icon_type = data.icon.iconType;
        }
        if (Reflect.has(data, 'serviceEndpoint')) {
            this.service_endpoint = new NavigationEndpoint(data.serviceEndpoint);
        }
    }
}
SearchSuggestion.type = 'SearchSuggestion';
export default SearchSuggestion;
//# sourceMappingURL=SearchSuggestion.js.map