import { Task, TaskQueue } from '@grupakmk/libstorefront';
import { Multiwishlist } from '../types';
export declare class MultiwishlistDao {
    private taskQueue;
    getMultiwishlists(customerId: any, withItems: boolean, storeCode: any, token: string): Promise<Task>;
    getMultiwishlist(wishlistId: any, storeCode: string, token: string): Promise<Task>;
    createMultiwishlist(wishlist: Multiwishlist, storeCode: string, token: string): Promise<Task>;
    deleteMultiwishlist(wishlistId: string, storeCode: string, token: string): Promise<Task>;
    addProductToWishlist(wishlistId: string, productId: string | number, storeCode: string, token: string): Promise<Task>;
    removeProductFromWishlist(itemId: string, storeCode: string, token: string): Promise<Task>;
    constructor(taskQueue: TaskQueue);
}
