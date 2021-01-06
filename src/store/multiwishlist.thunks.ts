import { AbstractStore, HttpStatus, IOCContainer, Logger } from '@grupakmk/libstorefront';
import { MultiwishlistDao } from '../dao';
import { MultiwishlistActions } from './multiwishlist.actions';

export namespace MultiwishlistThunks {
    export const getMultiwishlists = ({ pageSize, currentPage, sortBy, sortDir }) => async (dispatch, getState) => {
        try {
            const userState = IOCContainer.get(AbstractStore).getState().user;
            if (!userState || !userState.token) { throw new Error('Cannot fetch multiwishlist for unauthorized user'); }
            const response = await IOCContainer.get(MultiwishlistDao).getMultiwishlists({
                customerId: userState.current.id,
                pageSize,
                currentPage,
                sortBy,
                sortDir
            }, userState.token);

            if (response && response.code === HttpStatus.OK) {
                const { items, total } = response.result;
                await dispatch(MultiwishlistActions.setMultiwishlist({
                    items,
                    total,
                    perPage: pageSize,
                    start: currentPage
                }));

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

            if (!userState.token) { throw new Error('Cannot fetch multiwishlist for unauthorized user'); }
            const response = await IOCContainer.get(MultiwishlistDao).getMultiwishlist(wishlistId, userState.token);

            if (response && response.code === HttpStatus.OK) {
                if (setAsCurrent) {
                    await dispatch(MultiwishlistActions.setCurrent(response.result));
                }

                return response.result;
            } else {
                throw new Error('Multiwishlist not found');
            }
        } catch (e) {
            Logger.error('Cannot fetch multiwishlist: ', 'multiwishlist', e.message);
        }
    };

    export const createWishlist = ({ wishlist, setAsCurrent = false }) => async (dispatch, getState) => {
        const userState = IOCContainer.get(AbstractStore).getState().user;
        if (!userState.current || !userState.token) { throw new Error('Cannot create multiwishlist for unauthorized user'); }
        const response = await IOCContainer.get(MultiwishlistDao).createMultiwishlist({ ...wishlist, customer_id: userState.current.id }, userState.token);

        if (response && response.code === HttpStatus.OK && setAsCurrent) {
            await dispatch(MultiwishlistActions.setCurrent(response.result));
        }

        return response;
    };

    export const deleteWishlist = (wishlistId) => async (dispatch, getState) => {
      try {
          if (!wishlistId) { throw new Error('Wishlist id is undefined'); }
          const userState = IOCContainer.get(AbstractStore).getState().user;
          const result = await IOCContainer.get(MultiwishlistDao).deleteMultiwishlist(wishlistId, userState.token);
          await dispatch(MultiwishlistActions.deleteMultiwishlist(wishlistId));
      } catch (e) {
          Logger.error('Unable to delete wishlist', 'multiwishlist', e.message);
      }
    };
}
