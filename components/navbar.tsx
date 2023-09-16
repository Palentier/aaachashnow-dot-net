"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "All Locations",
    href: "/cashone/all-locations",
    description:
      "2170 Wilma Rudolph Boulevard, Clarksville, Tennessee 37040, United States",
  },
  {
    title: "Clarksville",
    href: "/cashone/clarksville",
    description:
      "149 West Jackson Street, Cookeville, Tennessee 38501, United States",
  },
  {
    title: "Cookeville",
    href: "/cashone/cookeville",
    description:
      "149 West Jackson Street, Cookeville, Tennessee 38501, United States",
  },
  {
    title: "Gallatin",
    href: "/cashone/gallatin",
    description:
      "640a Nashville Pike, Gallatin, Tennessee 37066, United States",
  },
  {
    title: "Lafayette",
    href: "/cashone/lafayette",
    description:
      "115 Public Sq, Lafayette, Tennessee 37083, United States",
  },
  {
    title: "Sevierville",
    href: "/cashone/sevierville",
    description:
      "741 Dolly Parton Parkway, Sevierville, Tennessee 37862, United States",
  },
  {
    title: "Tazewell",
    href: "/cashone/tazewell",
    description:
      "1611 North Broad Street, Tazewell, Tennessee 37879, United States",
  },
  
]
 

export default function Navbar() {
  return(
   
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-primary-foreground mb-4 md:mb-0">
            <span className="ml-3 text-xl text-primary">AAA Cash Now</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cash City</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="All Locations">
                Transfer, sync, and manage your favorites
              </ListItem>
              <ListItem href="/docs" title="Ashland City">
              327 Frey Street, Ashland City, Tennessee 37015, United States
              </ListItem>
              <ListItem href="/docs" title="Clarksville">
              1987 Madison Street, Clarksville, Tennessee 37043, United States
              </ListItem>
              <ListItem href="/docs" title="Columbia">
              1600 Carmack Boulevard, Columbia, Tennessee 38401, United States
              </ListItem>
              <ListItem href="/docs/trasnferring" title="Dickson">
              1640 Highway 46 S, Dickson, Tennessee 37055, United States
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Franklin">
              595 Hillsboro Rd, Franklin, Tennessee 37064, United States
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Hohenwald">
              554 East Main Street, Hohenwald, Tennessee 38462, United States
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Lebanon">
              214 West Main Street, Lebanon, Tennessee 37087, United States
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Murfresboro">
              1155 Northwest Broad Street, Murfreesboro, Tennessee 37129, United States
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Madison">
              214 Gallatin Pike, Madison, Tennessee 37115, United States
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cash 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/discord" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Join our Discord
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
          </nav>
          <Link href={'/login'}>
         <Button className="w-[6rem]" variant={'default'}>
          
            Login
          </Button>
          </Link>
          <ModeToggle/>
        </div>
  )
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"