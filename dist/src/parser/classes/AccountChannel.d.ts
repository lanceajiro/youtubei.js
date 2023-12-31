import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
export default class AccountChannel extends YTNode {
    static type: string;
    title: Text;
    endpoint: NavigationEndpoint;
    constructor(data: RawNode);
}
