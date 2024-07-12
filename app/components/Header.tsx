'use client'
import React from 'react';
import clsx from 'clsx';
import { usePathname } from "next/navigation";
import Link from 'next/link'
import { useMediaQuery } from "@mui/material";

const Header = () => {

    const pathname = usePathname()
    const matches = useMediaQuery('(max-width: 768px)')

    return (
        <div className="fixed z-50 mt-[50px] text-offwhite">
            <div className="fixed ml-[74px]">
                <h1 className="text-2xl tracking-wide">the dak0k0 chronicles</h1>
            </div>
            <div className="fixed ml-[40vw]">
                <div className="flex flex-row-reverse w-[60vw] text-xl">
                    <div className="flex pr-[120px]">
                        blog
                    </div>
                    <div className="flex pr-[120px]">
                        sustainability
                    </div>
                    <div className="flex pr-[120px]">
                        technology
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;