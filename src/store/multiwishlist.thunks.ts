import { AbstractStore, HttpStatus, IOCContainer, Logger, Product, StoreViewHandler } from '@grupakmk/libstorefront';
import { MultiwishlistDao } from '../dao';
import { MultiwishlistActions } from './multiwishlist.actions';
import { Multiwishlist, MultiwishlistItem } from "../types";

export namespace MultiwishlistThunks {
    export const getMultiwishlists = (withItems?: boolean) => async (dispatch, getState) => {
        try {
            const userState = IOCContainer.get(AbstractStore).getState().user;
            const storeCode = StoreViewHandler.currentStoreView().general.store_code;
            if (!userState || !userState.token) { throw new Error('Cannot fetch multiwishlist for unauthorized user'); }
            const response = await IOCContainer.get(MultiwishlistDao).getMultiwishlists(userState.current.id, withItems, storeCode, userState.token);

            if (response && response.code === HttpStatus.OK) {
                const items = response.result;
                await dispatch(MultiwishlistActions.setMultiwishlist({ items }));

                return items;
            } else {
                throw new Error('Empty list');
            }
        } catch (e) {
            Logger.warn(`Unable to fetch multiwishlists`, 'multiwishlist', e.message);
            return null;
        }
    };

    export const getMultiwishlist = ({ wishlistId, setAsCurrent = false }) => async (dispatch, getState) => {
        try {
            if (!wishlistId) { throw new Error('Wishlist id is undefined'); }
            const userState = IOCContainer.get(AbstractStore).getState().user;
            const storeCode = StoreViewHandler.currentStoreView().general.store_code;

            if (!userState.token) { throw new Error('Cannot fetch multiwishlist for unauthorized user'); }
            const response = await IOCContainer.get(MultiwishlistDao).getMultiwishlist(wishlistId, storeCode, userState.token);

            if (response && response.code === HttpStatus.OK) {
                const wishlist = response.result instanceof Array ? response.result[0] : response.result;
                if (setAsCurrent) {
                    await dispatch(MultiwishlistActions.setCurrent(wishlist));
                }

                return wishlist;
            } else {
                throw new Error('Multiwishlist not found');
            }
        } catch (e) {
            Logger.error('Cannot fetch multiwishlist: ', 'multiwishlist', e.message);
        }
    };

    export const createWishlist = ({ wishlist, setAsCurrent = false }) => async (dispatch) => {
        const userState = IOCContainer.get(AbstractStore).getState().user;
        const storeCode = StoreViewHandler.currentStoreView().general.store_code;
        if (!userState.current || !userState.token) { throw new Error('Cannot create multiwishlist for unauthorized user'); }
        const response = await IOCContainer.get(MultiwishlistDao).createMultiwishlist({ ...wishlist, customer_id: userState.current.id }, storeCode, userState.token);

        if (response && response.code === HttpStatus.OK && setAsCurrent) {
            await dispatch(MultiwishlistActions.setCurrent(response.result));
        }

        return response.result;
    };

    export const deleteWishlist = (wishlistId) => async (dispatch, getState) => {
      try {
          if (!wishlistId) { throw new Error('Wishlist id is undefined'); }
          const userState = IOCContainer.get(AbstractStore).getState().user;
          const storeCode = StoreViewHandler.currentStoreView().general.store_code;
          const result = await IOCContainer.get(MultiwishlistDao).deleteMultiwishlist(wishlistId, storeCode, userState.token);
          await dispatch(MultiwishlistActions.deleteMultiwishlist(wishlistId));
      } catch (e) {
          Logger.error('Unable to delete wishlist', 'multiwishlist', e.message);
      }
    };

    export const addProductToWishlist = (product: Product, wishlist: Multiwishlist) => async (dispatch) => {
      try {
          if (!wishlist || !wishlist.hasOwnProperty('wishlist_id')) { throw new Error('Wishlist is undefined'); }
          if (!product || !product.hasOwnProperty('id')) { throw new Error('Product is not valid'); }
          const userState = IOCContainer.get(AbstractStore).getState().user;
          const storeCode = StoreViewHandler.currentStoreView().general.store_code;

          if (!userState.current || !userState.token) { throw new Error('Cannot create multiwishlist for unauthorized user'); }
          const response = await IOCContainer.get(MultiwishlistDao).addProductToWishlist(wishlist.wishlist_id, product.id, storeCode, userState.token);

          if (response && response.code === HttpStatus.OK) {
              await dispatch(MultiwishlistActions.addProductToWishlist(product, response.result instanceof Array ? response.result[0] : response.result));
          }
      } catch (e) {
        Logger.warn('Cannot add product to wishlist: ', 'multiwishlist', e.message);
      }
    };

    export const removeProductFromWishlist = (product: MultiwishlistItem) => async (dispatch) => {
      try {
          if (!product || !product.hasOwnProperty('item_id')) { throw new Error('Product is not valid'); }
          const userState = IOCContainer.get(AbstractStore).getState().user;
          const storeCode = StoreViewHandler.currentStoreView().general.store_code;

          if (!userState.current || !userState.token) { throw new Error('Cannot create multiwishlist for unauthorized user'); }
          const response = await IOCContainer.get(MultiwishlistDao).removeProductFromWishlist(product.item_id, storeCode, userState.token);

          if (response && response.code === HttpStatus.OK) {
              await dispatch(MultiwishlistActions.removeProductFromWishlist(product));
          }
      } catch (e) {
          if (e instanceof Error) {
              Logger.warn('Cannot remove product from wishlist: ', 'multiwishlist', e.message);
          } else {
              throw e;
          }
      }
    };
}
