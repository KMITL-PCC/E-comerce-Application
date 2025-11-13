"use client";
import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserButton } from "@clerk/nextjs";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/clerk-react";

const userIcon = () => {
  return (
    <>
      <SignedOut>
        <DropdownMenu>
          <DropdownMenuTrigger className="j flex cursor-pointer items-center gap-1">
            <CircleUserRound className="size-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <SignInButton>
                <div className="w-full text-center">Login</div>
              </SignInButton>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignUpButton>
                <div className="w-full text-center">Register</div>
              </SignUpButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SignedOut>
      <UserButton />
    </>
  );
};

export default userIcon;
