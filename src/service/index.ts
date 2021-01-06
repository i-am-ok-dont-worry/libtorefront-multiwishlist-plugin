import { Multiwishlist } from '../types';
import { AbstractStore, LibstorefrontInnerState } from '@grupakmk/libstorefront';
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
    public getMultiwishlists ({ pageSize, currentPage, sortBy, sortDir }: { pageSize?: number, currentPage?: number, sortBy?: string, sortDir?: 'asc'|'desc' } = {}): Promise<Multiwishlist[]> {
        return this.store.dispatch(MultiwishlistThunks.getMultiwishlists({ pageSize, currentPage, sortBy, sortDir }));
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
     * Updates wishlist
     * @param {string} wishlistId
     */
    public updateMultiwishlist (wishlistId: string, wishlist: Multiwishlist): Promise<Multiwishlist> {
        return Promise.reject('Method not implemented');
    }

    /**
     * Removes existing wishlist and does state cleanup
     * @param {string} wishlistId
     */
    public deleteMultiwishlist (wishlistId: string): Promise<void> {
        return this.store.dispatch(MultiwishlistThunks.deleteWishlist(wishlistId));
    }

    public constructor(@inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>) {}

}
