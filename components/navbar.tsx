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
      "At Cash 1, we provide the financial assistance that you need when money is a little tight. For 21 years, Cash 1 has provided excellent customer service as well as professional, honest services. Our loans have helped a multitude of clients make crucial payments and stay out of debt.",
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
const advancedcash: { title: string; href: string; description: string }[] = [
  {
    title: "All Locations",
    href: "/cashone/all-locations",
    description:
      "At Cash Advance, we provide the financial assistance that you need when money is a little tight. For 21 years, Cash Advance has provided excellent customer service as well as professional, honest services. Our loans have helped a multitude of clients make crucial payments and stay out of debt.",
  },
  {
    title: "Nashville",
    href: "/advance-cash/nasville",
    description:
      "4811 Nolensville Pike, Nashville, Tennessee 37211, United States",
  },
  {
    title: "Cookeville",
    href: "/advance-cash/cookeville",
    description:
      "740 South Willow Avenue, Cookeville, Tennessee 38501, United States",
  },
  {
    title: "Lebanon",
    href: "/advance-cash/lebanon",
    description:
      "502 West Main Street, Lebanon, Tennessee 37087, United States",
  },
  {
    title: "KingsPort",
    href: "/advance-cash/kingsport",
    description:
      "1440 East Stone Drive, Kingsport, Tennessee 37660, United States",
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
<<<<<<< HEAD
              <ListItem href="/cash-city/all-locations" title="All Locations">
=======
              <ListItem href="/docs" title="All Locations">
>>>>>>> 94e83cd56a7c2fac1b6eb7d40a26ddf9611bb79a
              At Cash City, we provide the financial assistance that you need when money is a little tight. For 21 years, Cash City has provided excellent customer service as well as professional, honest services. Our loans have helped a multitude of clients make crucial payments and stay out of debt.
              </ListItem>
              <ListItem href="/cash-city/ashland" title="Ashland City">
              327 Frey Street, Ashland City, Tennessee 37015, United States
              </ListItem>
              <ListItem href="/cash-city/madison" title="Clarksville">
              1987 Madison Street, Clarksville, Tennessee 37043, United States
              </ListItem>
              <ListItem href="/cash-city/columbia" title="Columbia">
              1600 Carmack Boulevard, Columbia, Tennessee 38401, United States
              </ListItem>
              <ListItem href="/cash-city/dickson" title="Dickson">
              1640 Highway 46 S, Dickson, Tennessee 37055, United States
              </ListItem>
              <ListItem href="/cash-city/franklin" title="Franklin">
              595 Hillsboro Rd, Franklin, Tennessee 37064, United States
              </ListItem>
              <ListItem href="/cash-city/hohenwald" title="Hohenwald">
              554 East Main Street, Hohenwald, Tennessee 38462, United States
              </ListItem>
              <ListItem href="/cash-city/lebanon" title="Lebanon">
              214 West Main Street, Lebanon, Tennessee 37087, United States
              </ListItem>
              <ListItem href="/cash-city/murfreesoboro" title="Murfresboro">
              1155 Northwest Broad Street, Murfreesboro, Tennessee 37129, United States
              </ListItem>
              <ListItem href="/cash-city/madison" title="Madison">
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
          <NavigationMenuTrigger>Advance Cash</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {advancedcash.map((component) => (
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
      </NavigationMenuList>
    </NavigationMenu>
          </nav>
          <Link href={'/login'}>
         <Button className="w-[9rem]" variant={'default'}>
          
            Customer Portal
          </Button>
          </Link>
          <div className="ml-2 ">
          <ModeToggle/>
          </div>
          
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
