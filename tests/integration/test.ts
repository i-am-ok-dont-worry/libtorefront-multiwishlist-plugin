import { LibStorefront } from '@grupakmk/libstorefront';
import {MultiwishlistPlugin} from "../../src";
import {MultiwishlistService} from "../../src/service";
import {Multiwishlist} from "../../src/types";

console.warn('Test suite initialized');

const LSF = new LibStorefront({
    plugins: [
        MultiwishlistPlugin
    ]
}, 'http://localhost:9001');

(async () => {
    const service = LSF.get(MultiwishlistService);
    const res = await LSF.UserService.login('test@grupakmk.pl', 'Testowe2!');
    const wishlist = {
        name: 'nowa',
        type: 0
    };
    // const wishlists = await service.getSingleMultiwishlist(6, true);
    const response = await service.removeProductFromWishlist({ item_id: 9 });
    // await service.deleteMultiwishlist(25);
    debugger;
})();
