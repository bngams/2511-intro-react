import type { NavItem } from "./models/NavItem";
import About from "./pages/About";
import Home from "./pages/Home";
import { lazy } from "react";

const ProductsLazy = lazy(() => import("./features/products/pages/Products"));
const CartLazy = lazy(() => import("./features/cart/pages/Cart"));

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
        component: ProductsLazy,
        label: 'Products',
    },
    {
        path: '/cart',
        component: CartLazy,
        label: 'Cart',
    }
];