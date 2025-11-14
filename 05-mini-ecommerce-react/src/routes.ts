import Products from "./features/products/pages/Products";
import Cart from "./features/cart/pages/Cart";
import type { NavItem } from "./models/NavItem";
import About from "./pages/About";
import Home from "./pages/Home";

export const mainNavItems: NavItem[] = [
    {
        path: '/home',
        component: Home,
        label: 'Home',
    },
    {
        path: '/about',
        component: About,
        label: 'About',
    },
    {
        path: '/products',
        component: Products,
        label: 'Products',
    },
    {
        path: '/cart',
        component: Cart,
        label: 'Cart',
    }
];