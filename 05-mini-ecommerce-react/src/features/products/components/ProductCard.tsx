import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "../models/Product";
import { CartContext } from "@/features/cart/contexts/CartContext";
import React, { useContext } from "react";
import { Badge } from "@/components/ui/badge";

//ProductCard(props: {product: Product})
function ProductCard({ product, children } : {product: Product, children?: React.ReactNode}) {

    const customSlotSpecialOffer = React.Children.toArray(children).find(child => child.props?.slot === "offer-title");

    const { addToCart, cart } = useContext(CartContext);

    const addProductToCart = () => {
        console.log('Adding product to cart', product);
        addToCart(product);
    }

    // Find the quantity of this product in the cart
    const cartItem = cart.items.find(item => item.product.id === product.id);
    const quantityInCart = cartItem?.quantity || 0;

    return (
        <Card className="relative">
          {quantityInCart > 0 && (
            <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
              In cart: {quantityInCart}
            </Badge>
          )}
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{product.price} €</CardDescription>
            {customSlotSpecialOffer}
          </CardHeader>
          <CardContent className="flex justify-center flex-col">
            <div className="flex justify-center">
              <img className="max-w-[250px] max-h-[250px]" src={product.thumbnail} alt={product.title} />
            </div>
            <button onClick={addProductToCart}>Add to cart</button>
          </CardContent>
        </Card>
    );
}

export default ProductCard;