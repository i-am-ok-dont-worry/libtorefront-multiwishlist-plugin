import { Task, TaskQueue, URLTransform } from '@grupakmk/libstorefront';
import { inject, injectable } from 'inversify';
import { Multiwishlist } from '../types';
import qs from 'query-string';

@injectable()
export class MultiwishlistDao {

    public getMultiwishlists ({ customerId, pageSize, currentPage, sortBy, sortDir }, token: string): Promise<Task> {
        const query = {
            pageSize: pageSize || 50,
            currentPage: currentPage || 0,
            token,
            ...(sortBy && { sortBy, sortDir: sortDir || 'asc' })
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

    public getMultiwishlist (wishlistId: string, token: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/multiwishlist/single/' + wishlistId + '?token=' + token || ''),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public createMultiwishlist (wishlist: Multiwishlist, token: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/multiwishlist' + '?token=' + token),
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(wishlist)
            },
            silent: true
        });
    }

    public updateMultiwishlist (wishlistId: string, wishlist: Multiwishlist, token: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/multiwishlist/' + wishlistId + '?token=' + token),
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(wishlist)
            },
            silent: true
        });
    }

    public deleteMultiwishlist (wishlistId: string, token: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/multiwishlist/' + wishlistId + '?token=' + token),
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
