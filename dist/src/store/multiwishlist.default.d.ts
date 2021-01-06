import { Multiwishlist } from '../types';
export declare const MultiwishlistDefaultState: MultiwishlistModuleState;
export interface MultiwishlistModuleState {
    list: {
        start: number;
        perPage: number;
        total: number;
        items: Multiwishlist[];
    };
    current: Multiwishlist;
}
