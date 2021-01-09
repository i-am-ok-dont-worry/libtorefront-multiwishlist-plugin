import { Multiwishlist, MultiwishlistItem } from '../types';
export declare namespace MultiwishlistActions {
    const SET_MULTIWISHLIST: string;
    const setMultiwishlist: (wishlists: {
        items: Multiwishlist[];
    }) => {
        type: string;
        payload: {
            items: Multiwishlist[];
        };
    };
    const SET_CURRENT: string;
    const setCurrent: (wishlist: Multiwishlist) => {
        type: string;
        payload: Multiwishlist;
    };
    const DELETE_MULTIWISHLIST: string;
    const deleteMultiwishlist: (wishlistId: number) => {
        type: string;
        payload: number;
    };
    const ADD_PRODUCT: string;
    const addProductToWishlist: (product: MultiwishlistItem, wishlist: Multiwishlist) => {
        type: string;
        payload: {
            product: MultiwishlistItem;
            wishlist: Multiwishlist;
        };
    };
    const REMOVE_PRODUCT: string;
    const removeProductFromWishlist: (product: MultiwishlistItem) => {
        type: string;
        payload: MultiwishlistItem;
    };
}
