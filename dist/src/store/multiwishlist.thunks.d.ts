import { Product } from '@grupakmk/libstorefront';
import { Multiwishlist, MultiwishlistItem } from "../types";
export declare namespace MultiwishlistThunks {
    const getMultiwishlists: (withItems?: boolean) => (dispatch: any, getState: any) => Promise<any>;
    const getMultiwishlist: ({ wishlistId, setAsCurrent }: {
        wishlistId: any;
        setAsCurrent?: boolean;
    }) => (dispatch: any, getState: any) => Promise<any>;
    const createWishlist: ({ wishlist, setAsCurrent }: {
        wishlist: any;
        setAsCurrent?: boolean;
    }) => (dispatch: any) => Promise<any>;
    const deleteWishlist: (wishlistId: any) => (dispatch: any, getState: any) => Promise<void>;
    const addProductToWishlist: (product: Product, wishlist: Multiwishlist) => (dispatch: any) => Promise<void>;
    const removeProductFromWishlist: (product: MultiwishlistItem) => (dispatch: any) => Promise<void>;
}
