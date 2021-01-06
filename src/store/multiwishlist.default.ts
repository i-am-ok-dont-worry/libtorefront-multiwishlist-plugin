import { Multiwishlist } from '../types';

export const MultiwishlistDefaultState: MultiwishlistModuleState = {
    list: {
        start: 0,
        perPage: 50,
        total: 0,
        items: []
    },
    current: null
};

export interface MultiwishlistModuleState {
    list: {
        start: number,
        perPage: number,
        total: number,
        items:  Multiwishlist[]
    },
    current: Multiwishlist
}
