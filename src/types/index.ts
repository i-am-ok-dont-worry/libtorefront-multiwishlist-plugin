import { Product } from '@grupakmk/libstorefront';

export interface Multiwishlist {
    wishlist_id?: string,
    customer_id?: number,
    shared?: number,
    sharing_code?: number,
    updated_at?: string,
    name?: string,
    type?: number,
    items?: MultiwishlistItem[]
}

export interface MultiwishlistItem extends Product {
    item_id?: string,
    product_id?: string,
    added_at?: string
}
