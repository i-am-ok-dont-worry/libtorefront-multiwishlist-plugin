import { createLibstorefrontModule, HookType, LibStorefront } from '@grupakmk/libstorefront';
import { LibstorefrontPlugin } from '@grupakmk/libstorefront/dist/config/types/libstorefront-plugin';
import { MultiwishlistDao } from './dao';
import { MultiwishlistService } from './service';
import { multiwishlistReducer } from './store/multiwishlist.reducer';
import { MultiwishlistDefaultState } from './store/multiwishlist.default';

/**
 * The wishlist extension provides functionality for listing and maintaining items a customer would like to
 * have, for example products intended for buying or desired as gifts.
 */
export const MultiwishlistPlugin = ((libstorefront: LibStorefront) => {
    libstorefront.getIOCContainer().bind<MultiwishlistDao>(MultiwishlistDao).to(MultiwishlistDao);
    libstorefront.getIOCContainer().bind<MultiwishlistService>(MultiwishlistService).to(MultiwishlistService);
    libstorefront.listenTo(HookType.AfterCoreModulesRegistered, (lsf: LibStorefront) => {
       lsf.registerModule(createLibstorefrontModule('multiwishlist', multiwishlistReducer, MultiwishlistDefaultState));
    });
}) as LibstorefrontPlugin;
