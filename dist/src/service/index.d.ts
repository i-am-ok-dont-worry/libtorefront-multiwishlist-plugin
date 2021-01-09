import { Multiwishlist, MultiwishlistItem } from '../types';
import { AbstractStore, LibstorefrontInnerState, Product } from '@grupakmk/libstorefront';
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
    getMultiwishlists(withItems?: boolean): Promise<Multiwishlist[]>;
    /**
     * Returns single wishlist details
     * @param {string} wishlistId
     * @param {boolean} setAsCurrent - If true wishlist will be set as current in a state
     */
    getSingleMultiwishlist(wishlistId: string, setAsCurrent?: boolean): Promise<Multiwishlist>;
    /**
     * Removes existing wishlist and does state cleanup
     * @param {string} wishlistId
     */
    deleteMultiwishlist(wishlistId: string): Promise<void>;
    /**
     * Adds product to a wishlist
     * @param {Product} product
     * @returns {Multiwishlist} Mutated wishlist
     */
    addProductToWishlist(product: Product, wishlist: Multiwishlist): Promise<void>;
    /**
     * Removes product from a wishlist
     * @param {MultiwishlistItem} item
     * @returns {Promise<void>}
     */
    removeProductFromWishlist(item: MultiwishlistItem): Promise<void>;
    constructor(store: AbstractStore<LibstorefrontInnerState>);
}
