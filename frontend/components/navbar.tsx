import {
  ChevronDown,
  CircleUserRound,
  Search,
  ShoppingCart,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

import Link from "next/link";
import Logo from "./logo";

const navigation = [
  {
    label: "Shop",
    href: "/products",
    items: [
      {
        label: "Products",
        href: "/products",
      },
    ],
  },
  {
    label: "On Sale",
    href: "/products",
  },
  {
    label: "New Arrivals",
    href: "/products",
  },
  {
    label: "Brands",
    href: "/products",
  },
];

const Navbar = () => {
  return (
    <header className="bg-background sticky top-0 z-50 h-16 space-y-4 px-8 py-4">
      <nav className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-1 items-center justify-center gap-4 text-sm md:text-base">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger
                aria-label="Shop"
                className="flex cursor-pointer items-center gap-1"
              >
                Shop <ChevronDown className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/products">Products</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <Link href="/products">On Sale</Link>
          </li>
          <li>
            <Link href="/products">New Arrivals</Link>
          </li>
          <li>
            <Link href="/products">Brands</Link>
          </li>
        </ul>

        <div className="flex items-center justify-end gap-4 md:flex-1 md:gap-8">
          {/* Search Bar */}
          <div className="relative hidden w-full max-w-2xl md:block">
            <Input
              type="text"
              placeholder="Search for products..."
              className="hidden rounded-full pl-10 md:block"
            />
            <Search className="top-1/2 left-2 size-5 -translate-y-1/2 md:absolute" />
          </div>
          <Search className="size-5 md:hidden" />

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <ShoppingCart className="size-5" />
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1">
                <CircleUserRound className="size-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/logout">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      <Separator />
    </header>
  );
};
export default Navbar;
