import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import type { Product } from "../models/Product";
import ProductListSkeleton from "../components/ProductListSkeleton";

function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loadingDone, setLoadingDone] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      console.log('useEffect called');
      if(loadingDone) return;
      console.log('load products');
      fetch("https://dummyjson.com/products?limit=10")
          .then((response) => response.json()) // parse the response
          .then((data) => {
              setProducts(data.products);
          }).catch((error) => {
              console.error("Failed to load products:", error);
              setError("Failed to load products");
          }).finally(() => {
            setTimeout(() => {
              setLoadingDone(true);
            }, 3000); // simulate loading time
          }); // set the products
    }, [loadingDone]);

    // Utiliser le composant ProductList pour afficher les products
    return (
      <>
        {/* approche avec expression conditionnelle imbriquée (ternaire) - plsu otpi. / moins lisible ? 1 seule instruction... */}
        { error ? <div className="text-red-500">Error: {error}</div> : 
          loadingDone ? <ProductList products={products} />  :   
          <ProductListSkeleton />
        }
      </>
    );
}
export default Products;