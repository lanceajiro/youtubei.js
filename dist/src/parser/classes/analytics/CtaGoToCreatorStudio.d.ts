import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
export default class CtaGoToCreatorStudio extends YTNode {
    static type: string;
    title: string;
    use_new_specs: boolean;
    constructor(data: RawNode);
}
