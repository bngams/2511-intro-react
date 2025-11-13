import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

function Products() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        console.log('load products');
        fetch("https://dummyjson.com/products?limit=10")
            .then((response) => response.json()) // parse the response
            .then((data) => setProducts(data.products)); // set the products
    }, []);

    // Utiliser le composant ProductList pour afficher les products
    return (
      <ProductList products={products} />
    );
}
export default Products;