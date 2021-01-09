import { Multiwishlist, MultiwishlistItem } from '../types';

export namespace MultiwishlistActions {
    const SN_MULTIWISHLIST = 'multiwishlist';

    export const SET_MULTIWISHLIST = SN_MULTIWISHLIST + '/SET_MULTIWISHLIST';
    export const setMultiwishlist = (wishlists: { items: Multiwishlist[] }) => ({
        type: SET_MULTIWISHLIST,
        payload: wishlists
    });

    export const SET_CURRENT = SN_MULTIWISHLIST + '/SET_CURRENT';
    export const setCurrent = (wishlist: Multiwishlist) => ({
        type: SET_CURRENT,
        payload: wishlist
    });

    export const DELETE_MULTIWISHLIST = SN_MULTIWISHLIST + '/DELETE';
    export const deleteMultiwishlist = (wishlistId: number) => ({
        type: DELETE_MULTIWISHLIST,
        payload: wishlistId
    });

    export const ADD_PRODUCT = SN_MULTIWISHLIST + '/ADD_PRODUCT';
    export const addProductToWishlist = (product: MultiwishlistItem, wishlist: Multiwishlist) => ({
        type: ADD_PRODUCT,
        payload: {
            product,
            wishlist
        }
    });

    export const REMOVE_PRODUCT = SN_MULTIWISHLIST + '/REMOVE_PRODUCT';
    export const removeProductFromWishlist = (product: MultiwishlistItem) => ({
        type: REMOVE_PRODUCT,
        payload: product
    });
}
