"use client"

import * as React from "react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  //NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  //NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavigationMenuHome() {
  return (
    <div className="relative">
      <NavigationMenu
        className="absolute top-0 left-1/2 pt-4 bg-[#F35F31] transform -translate-x-1/2 rounded-lg"
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/console/guest/add">
              <NavigationMenuLink className="mx-3 text-lg hover:font-bold hover:text-[#fcbe93]">
                Guest
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/docs">
              <NavigationMenuLink className="mx-3 text-lg hover:font-bold hover:text-[#fcbe93]">
                Docs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/console">
              <NavigationMenuLink className="mx-3 text-lg hover:font-bold hover:text-[#fcbe93]">
                Console
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug ">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
