"use client";
import React from "react";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useStoreUserEffect } from "@/hooks/useStoreUserEffect";
import {BarLoader} from 'react-spinners'
const Header = () => {

 const {isLoading} =  useStoreUserEffect()

  return (
    <header className="fixed top-0 w-full border-b bg-white/95 background-blur z-50 supports-backdrop-filter:bg-white/60>">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
      {/* <SignedOut>
        <SignInButton />
        <SignUpButton>
         
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
      </nav>
    {isLoading && <BarLoader width={"100%"} color="#36d7b7"/>}

    </header>
  );
};

export default Header;
