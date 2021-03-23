import { Reducer } from '@grupakmk/libstorefront/dist/src/state-management/types/reducer';
import { MultiwishlistDefaultState, MultiwishlistModuleState } from './multiwishlist.default';
import { AnyAction } from '@grupakmk/libstorefront/dist/src/state-management/types/action';
import { MultiwishlistActions } from './multiwishlist.actions';
import uniqBy from 'lodash/uniqBy';

export const multiwishlistReducer: Reducer<MultiwishlistModuleState, AnyAction> = (state: MultiwishlistModuleState, action) => {
    switch (action.type) {
        case MultiwishlistActions.SET_MULTIWISHLIST: {
            const { items } = action.payload;
            return { ...state, items };
        }
        case MultiwishlistActions.SET_CURRENT: {
            return { ...state, current: action.payload };
        }
        case MultiwishlistActions.DELETE_MULTIWISHLIST: {
            const lists = state.items.filter(({ wishlist_id }) => wishlist_id !== action.payload);
            const isCurrent = state.current && state.current.wishlist_id === action.payload;
            return {
                ...state,
                items: lists,
                current: isCurrent ? null : state.current
            };
        }
        case MultiwishlistActions.ADD_PRODUCT: {
            const { product, wishlist } = action.payload;
            if (!wishlist.items) { wishlist.items = []; }
            wishlist.items = uniqBy([...wishlist.items, { ...product, product_id: String(product.id) }], 'product_id');

            return {
                ...state,
                current: (state.current && wishlist.wishlist_id === state.current.wishlist_id) ? wishlist : state.current,
                items: state.items.map(w => w.wishlist_id === wishlist.wishlist_id ? wishlist : w)
            };
        }
        case MultiwishlistActions.REMOVE_PRODUCT: {
            const product = action.payload;
            const wishlists = state.items.map(w => w.items.filter(({ item_id }) => item_id !== product.item_id));
            const current = state.current ? state.current.items.filter(({ item_id }) => item_id !== product.item_id) : null;

            return {
                ...state,
                items: wishlists,
                current
            };
        }
        default: return state || MultiwishlistDefaultState;
    }
}
