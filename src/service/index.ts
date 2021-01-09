import {Multiwishlist, MultiwishlistItem} from '../types';
import {AbstractStore, LibstorefrontInnerState, Product} from '@grupakmk/libstorefront';
import { injectable, inject } from 'inversify';
import { MultiwishlistThunks } from '../store/multiwishlist.thunks';

@injectable()
export class MultiwishlistService {

    /**
     * Creates a new wishlist for a customer
     * @param {Multiwishlist} wishlist
     * @param {boolean} setAsCurrent - Sets new wishlist as current
     * @returns {Promise<Multiwishlist>}
     */
    public createMultiwishlist (wishlist: Multiwishlist, setAsCurrent?: boolean): Promise<Multiwishlist> {
        return this.store.dispatch(MultiwishlistThunks.createWishlist({ wishlist, setAsCurrent }));
    }

    /**
     * Returns list of wishlists for customer
     * @param {number} pageSize
     * @param {number} currentPage
     * @param {string} sortBy - Field by which sort results
     * @param {asc|desc} sortDir - Sorting direction
     */
    public getMultiwishlists (withItems?: boolean): Promise<Multiwishlist[]> {
        return this.store.dispatch(MultiwishlistThunks.getMultiwishlists(withItems));
    }

    /**
     * Returns single wishlist details
     * @param {string} wishlistId
     * @param {boolean} setAsCurrent - If true wishlist will be set as current in a state
     */
    public getSingleMultiwishlist (wishlistId: string, setAsCurrent?: boolean): Promise<Multiwishlist> {
        return this.store.dispatch(MultiwishlistThunks.getMultiwishlist({ wishlistId, setAsCurrent }));
    }

    /**
     * Removes existing wishlist and does state cleanup
     * @param {string} wishlistId
     */
    public deleteMultiwishlist (wishlistId: string): Promise<void> {
        return this.store.dispatch(MultiwishlistThunks.deleteWishlist(wishlistId));
    }

    /**
     * Adds product to a wishlist
     * @param {Product} product
     * @returns {Multiwishlist} Mutated wishlist
     */
    public addProductToWishlist (product: Product, wishlist: Multiwishlist): Promise<void> {
        return this.store.dispatch(MultiwishlistThunks.addProductToWishlist(product, wishlist));
    }

    /**
     * Removes product from a wishlist
     * @param {MultiwishlistItem} item
     * @returns {Promise<void>}
     */
    public removeProductFromWishlist (item: MultiwishlistItem): Promise<void> {
        return this.store.dispatch(MultiwishlistThunks.removeProductFromWishlist(item));
    }

    public constructor(@inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>) {}

}
