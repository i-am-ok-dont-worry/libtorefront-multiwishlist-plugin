import { Multiwishlist } from '../types';

export const MultiwishlistDefaultState: MultiwishlistModuleState = {
    items: [],
    current: null
};

export interface MultiwishlistModuleState {
    items:  Multiwishlist[],
    current: Multiwishlist
}
