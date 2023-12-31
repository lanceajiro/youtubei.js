import { YTNode } from '../helpers.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
class ShowingResultsFor extends YTNode {
    constructor(data) {
        super();
        this.corrected_query = new Text(data.correctedQuery);
        this.original_query = new Text(data.originalQuery);
        this.corrected_query_endpoint = new NavigationEndpoint(data.correctedQueryEndpoint);
        this.original_query_endpoint = new NavigationEndpoint(data.originalQueryEndpoint);
        this.search_instead_for = new Text(data.searchInsteadFor);
        this.showing_results_for = new Text(data.showingResultsFor);
    }
}
ShowingResultsFor.type = 'ShowingResultsFor';
export default ShowingResultsFor;
//# sourceMappingURL=ShowingResultsFor.js.map