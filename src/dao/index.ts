import { Task, TaskQueue, URLTransform } from '@grupakmk/libstorefront';
import { inject, injectable } from 'inversify';
import { Multiwishlist } from '../types';
import qs from 'query-string';

@injectable()
export class MultiwishlistDao {

    public getMultiwishlists (customerId, withItems: boolean, storeCode, token: string): Promise<Task> {
        const query = {
            token,
            storeCode,
            withItems
        };
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/multiwishlist/' + customerId + '?' + qs.stringify(query)),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public getMultiwishlist (wishlistId, storeCode: string, token: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/multiwishlist/single/' + wishlistId + '?' + qs.stringify({ token, storeCode })),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public createMultiwishlist (wishlist: Multiwishlist, storeCode: string, token: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/multiwishlist' + '?' + qs.stringify({ token, storeCode })),
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(wishlist)
            },
            silent: true
        });
    }

    public deleteMultiwishlist (wishlistId: string, storeCode: string, token: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/multiwishlist/' + wishlistId + '?' + qs.stringify({ token, storeCode })),
            payload: {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public addProductToWishlist (wishlistId: string, productId: string|number, storeCode: string, token: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/multiwishlist/' + wishlistId + '/add/' + productId + '?' + qs.stringify({ token, storeCode })),
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public removeProductFromWishlist (itemId: string, storeCode: string, token: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/multiwishlist/remove/' + itemId + '?' + qs.stringify({ token, storeCode })),
            payload: {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public constructor (@inject(TaskQueue) private taskQueue: TaskQueue) {}
}
