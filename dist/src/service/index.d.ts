import { Multiwishlist } from '../types';
import { AbstractStore, LibstorefrontInnerState } from '@grupakmk/libstorefront';
export declare class MultiwishlistService {
    private store;
    /**
     * Creates a new wishlist for a customer
     * @param {Multiwishlist} wishlist
     * @param {boolean} setAsCurrent - Sets new wishlist as current
     * @returns {Promise<Multiwishlist>}
     */
    createMultiwishlist(wishlist: Multiwishlist, setAsCurrent?: boolean): Promise<Multiwishlist>;
    /**
     * Returns list of wishlists for customer
     * @param {number} pageSize
     * @param {number} currentPage
     * @param {string} sortBy - Field by which sort results
     * @param {asc|desc} sortDir - Sorting direction
     */
    getMultiwishlists({ pageSize, currentPage, sortBy, sortDir }?: {
        pageSize?: number;
        currentPage?: number;
        sortBy?: string;
        sortDir?: 'asc' | 'desc';
    }): Promise<Multiwishlist[]>;
    /**
     * Returns single wishlist details
     * @param {string} wishlistId
     * @param {boolean} setAsCurrent - If true wishlist will be set as current in a state
     */
    getSingleMultiwishlist(wishlistId: string, setAsCurrent?: boolean): Promise<Multiwishlist>;
    /**
     * Updates wishlist
     * @param {string} wishlistId
     */
    updateMultiwishlist(wishlistId: string, wishlist: Multiwishlist): Promise<Multiwishlist>;
    /**
     * Removes existing wishlist and does state cleanup
     * @param {string} wishlistId
     */
    deleteMultiwishlist(wishlistId: string): Promise<void>;
    constructor(store: AbstractStore<LibstorefrontInnerState>);
}
