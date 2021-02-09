import { LibStorefront } from '@grupakmk/libstorefront';
import {MultiwishlistPlugin} from "../../src";
import {MultiwishlistService} from "../../src/service";
import {Multiwishlist} from "../../src/types";

console.warn('Test suite initialized');

const LSF = new LibStorefront({
    plugins: [
        MultiwishlistPlugin
    ]
// }, 'https://api.meringer.staging.grupakmk.pl');
}, 'http://localhost:9001');

(async () => {
    const service = LSF.get(MultiwishlistService);
    const res = await LSF.UserService.login('joanna.kocur@grupakmk.pl', 'Haslodotestowania3!');
    const wishlist = {
        name: 'nowanowanowadshfjdshfjhdfjd',
    };
    // const wishlists = await service.getMultiwishlists(true);
    const wishlists = await service.getSingleMultiwishlist(23, true);
    // const response = await service.removeProductFromWishlist({ item_id: 9 });
    // const newWishlist = await service.createMultiwishlist(wishlist);
    // await service.deleteMultiwishlist(25);
    debugger;
})();
