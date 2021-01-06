export declare namespace MultiwishlistThunks {
    const getMultiwishlists: ({ pageSize, currentPage, sortBy, sortDir }: {
        pageSize: any;
        currentPage: any;
        sortBy: any;
        sortDir: any;
    }) => (dispatch: any, getState: any) => Promise<any>;
    const getMultiwishlist: ({ wishlistId, setAsCurrent }: {
        wishlistId: any;
        setAsCurrent?: boolean;
    }) => (dispatch: any, getState: any) => Promise<any>;
    const createWishlist: ({ wishlist, setAsCurrent }: {
        wishlist: any;
        setAsCurrent?: boolean;
    }) => (dispatch: any, getState: any) => Promise<import("@grupakmk/libstorefront").Task>;
    const deleteWishlist: (wishlistId: any) => (dispatch: any, getState: any) => Promise<void>;
}
