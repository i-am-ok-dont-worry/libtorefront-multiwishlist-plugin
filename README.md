## Multiwishlist plugin
The wishlist extension provides functionality for listing and maintaining 
items a customer would like to have, for example products intended for 
buying or desired as gifts.

## Usage
To use plugin add a dependency to the LSF lib:
```javascript
const LSF = new LibStorefront({
    plugins: [
        MultiwishlistPlugin
    ]
});
```

and get `MultiwishlistService` registered by lib:
```javascript
LSF.get(MultiwishlistService)
```

## Model
Plugin adds new type `Multiwishlist`:
```javascript
interface Multiwishlist {
    wishlist_id?: number,
    customer_id?: number,
    shared?: number,
    sharing_code?: number,
    updated_at?: string,
    name: string,
    type?: number,
    items?: MultiwishlistItem[]
}
```

## Service
Plugin registers the [MultiwishlistService](https://gitlab.grupakmk.pl/internal/frontend/api/addons/libstorefront-addons/libstorefront-multiwishlist-plugin/-/blob/master/src/service/index.ts) which serves as a plugin entry point.
Service exposes methods:
* `createMultiwishlist (wishlist: Multiwishlist, setAsCurrent?: boolean): Promise<Multiwishlist>` - creates a new wishlist on behalf of currently logged user
* `getMultiwishlists ({ pageSize, currentPage, sortBy, sortDir }: { pageSize?: number, currentPage?: number, sortBy?: string, sortDir?: 'asc'|'desc' } = {}): Promise<Multiwishlist[]>` - returns list of wishlists
* `getSingleMultiwishlist (wishlistId: string, setAsCurrent?: boolean): Promise<Multiwishlist>` - returns details of single wishlist
* `deleteMultiwishlist (wishlistId: string): Promise<void>` - removes a wishlist
* `addProductToWishlist (product: Product, wishlist: Multiwishlist): Promise<void>` - adds product to a wishlist
* `removeProductFromWishlist (item: MultiwishlistItem): Promise<void>` - removes product from a wishlist

## Redux store
Plugin adds new state branch called `multiwishlist` to the original Libstorefront Redux store.
Default multiwishlist state:
```javascript
{
    items:  Multiwishlist[]
    current: Multiwishlist
}
```

## Build plugin
Run `npm run build` to build plugin.
Output can be found in `/dist` catalog.

## Test plugin
Plugin can be tested in isolation. To run plugin integration test:
```shell script
npm run test:integration
```
