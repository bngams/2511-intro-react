import { ShoppingCart } from "lucide-react";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

function CartIconButton() {

  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
      onClick={handleClick}
    >
      <ShoppingCart size={32} />
      <span className="text-[32px] font-bold">{cartContext.cart.items.length}</span>
      <span className="text-[24px]">({cartContext.cart.totalPrice.toFixed(2)})</span>
    </div>
  );

}

export default CartIconButton;