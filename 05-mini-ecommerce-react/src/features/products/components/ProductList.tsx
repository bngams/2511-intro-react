import ProductCard from "./ProductCard";
import type { Product } from "../models/Product";

function ProductList({ products } : { products: Product[] }) {
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {products.map((p) => (
                <ProductCard key={p.id} product={p}>
                    <h3 slot="offer-title" className="text-center mb-2">Special Offer!</h3>
                    <p slot="special" className="text-center mb-2">Special ...!</p>
                </ProductCard>
            ))}
        </div>
    );
}
export default ProductList;