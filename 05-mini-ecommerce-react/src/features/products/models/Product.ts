export type GenericProduct = {
    id: number;
    title: string;
};

export type Product = GenericProduct & {
    thumbnail: string;
    price: number;
    discountPercentage?: number;
    status?: 'in-stock' | 'out-of-stock';
};