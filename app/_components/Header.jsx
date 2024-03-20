"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import Link from "next/link";


function Header() {
  const { data } = useSession();

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <div className="p-5 flex justify-between">
      <div className=" items-center gap-8  flex">
        <Link href={"/"} className="font-bold text-xl text-lime-500 hover:text-lime-600">
          Service App
        </Link>
        <div className="md:flex hidden items-center gap-6 ">
          <h2 className="cursor-pointer hover:text-lime-500 ">Home</h2>
          <h2 className="cursor-pointer hover:text-lime-500">About</h2>
          <h2 className="cursor-pointer hover:text-lime-500 ">Services</h2>
        </div>
      </div>

      <div>
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                className="rounded-full"
                src={data?.user?.image}
                alt="user"
                width={40}
                height={40}
              />
            </DropdownMenuTrigger>


            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Bookings</DropdownMenuItem>
              <DropdownMenuItem onClick={()=> signOut()}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            onClick={() => signIn("descope", { callbackUrl: "/" })}
            className="bg-lime-500 hover:bg-lime-600 text-white"
          >
            Login / Sign up
          </Button>
        )}
      </div>
    </div>
  );
}

export default Header;
