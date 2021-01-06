import { Multiwishlist } from '../types';

export namespace MultiwishlistActions {
    const SN_MULTIWISHLIST = 'multiwishlist';

    export const SET_MULTIWISHLIST = SN_MULTIWISHLIST + '/SET_MULTIWISHLIST';
    export const setMultiwishlist = (wishlists: { items: Multiwishlist[], total: number, start: number, perPage: number }) => ({
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
}
