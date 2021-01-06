import { Task, TaskQueue } from '@grupakmk/libstorefront';
import { Multiwishlist } from '../types';
export declare class MultiwishlistDao {
    private taskQueue;
    getMultiwishlists({ customerId, pageSize, currentPage, sortBy, sortDir }: {
        customerId: any;
        pageSize: any;
        currentPage: any;
        sortBy: any;
        sortDir: any;
    }, token: string): Promise<Task>;
    getMultiwishlist(wishlistId: string, token: string): Promise<Task>;
    createMultiwishlist(wishlist: Multiwishlist, token: string): Promise<Task>;
    updateMultiwishlist(wishlistId: string, wishlist: Multiwishlist, token: string): Promise<Task>;
    deleteMultiwishlist(wishlistId: string, token: string): Promise<Task>;
    constructor(taskQueue: TaskQueue);
}
