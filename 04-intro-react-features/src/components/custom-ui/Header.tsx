import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { NavLink } from "react-router";

export default function Header() { 
    return (   
        <NavigationMenu className="w-full">
            <NavigationMenuList>
            <NavigationMenuItem >
                <NavLink to="/">Home</NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavLink to="/about">About</NavLink>
            </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu> 
    );
}