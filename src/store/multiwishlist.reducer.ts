import { Reducer } from '@grupakmk/libstorefront/dist/src/state-management/types/reducer';
import { MultiwishlistDefaultState, MultiwishlistModuleState } from './multiwishlist.default';
import { AnyAction } from '@grupakmk/libstorefront/dist/src/state-management/types/action';
import { MultiwishlistActions } from './multiwishlist.actions';

export const multiwishlistReducer: Reducer<MultiwishlistModuleState, AnyAction> = (state: MultiwishlistModuleState, action) => {
    switch (action.type) {
        case MultiwishlistActions.SET_MULTIWISHLIST: {
            const { items, start, perPage, total } = action.payload;
            return { ...state, list: { ...state.list, items, perPage, start, total } };
        }
        case MultiwishlistActions.SET_CURRENT: {
            return { ...state, current: action.payload };
        }
        case MultiwishlistActions.DELETE_MULTIWISHLIST: {
            const lists = state.list.items.filter(({ wishlist_id}) => wishlist_id !== action.payload);
            const isCurrent = state.current.wishlist_id === action.payload;
            return {
                ...state,
                list: {
                    ...state.list,
                    items: lists
                },
                current: isCurrent ? null : state.current
            };
        }
        default: return state || MultiwishlistDefaultState;
    }
}
