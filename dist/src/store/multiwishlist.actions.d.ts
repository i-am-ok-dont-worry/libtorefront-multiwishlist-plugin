import { Multiwishlist } from '../types';
export declare namespace MultiwishlistActions {
    const SET_MULTIWISHLIST: string;
    const setMultiwishlist: (wishlists: {
        items: Multiwishlist[];
        total: number;
        start: number;
        perPage: number;
    }) => {
        type: string;
        payload: {
            items: Multiwishlist[];
            total: number;
            start: number;
            perPage: number;
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
}
