'use client';

import React, { ReactNode, useEffect, useRef, useState} from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/ui-elements/styles/constants';
import { SideNavItem } from '@/ui-elements/styles/types';
import { Icon } from "@iconify/react";
import { motion, useCycle } from "framer-motion";
import MobilePage from "./MobilePage"
import { useWindowSize } from "rooks";

function useWidth() {
    const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
    return innerWidth
}

function useHeight() {
    const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
    return innerHeight
}

const sidebar = {
    open: {
        clipPath: `polygon(0 0, 0 100%, 100% 100%, 100% 0)`,
        delay: 0.2,
        transition: {
            type: "spring",
            bounce: 0.75,
        }
    },
    closed: {
        clipPath: `polygon(0 0, 0 0, 100% 0, 100% 0)`,
        transition: {
            type: "spring",
            duration: 0.2
        }
    }
}

const variants = {
    open: {
        transition: { staggerChildren: 0 }
    },
    closed: {
        transition: { staggerChildren: 0.01, staggerDirection: -1}
    }
}

const MobileContent = () => {
    const pathname = usePathname();
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const [isOpen, toggleOpen] = useCycle(false, true);


    return (
        <div>
            <motion.nav 
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                className={`inset-0 z-50 w-full md:hidden ${
                    isOpen ? "" : "pointer-events-none"
                }`}
                ref={containerRef}
            >
                <div className="fixed z-1 bg-palette-blue h-[6.25vh] w-screen top-0"></div>
                <motion.div
                    className="fixed inset-0 right-0 w-full bg-black"
                    variants={sidebar}
                />

                <motion.ul
                    className="absolute grid w-full gap-3 px-10 pt-[37.5vh]"
                    variants={variants}
                >

                    {SIDENAV_ITEMS.map( (item, idx) => {
                        const isLastItem = idx === SIDENAV_ITEMS.length - 1;

                        return(
                            <div key={idx}>
                                <CustomMenuItem>
                                    <Link
                                        href={item.path}
                                        onClick={() => toggleOpen()}
                                        className={`flex w-full text-2xl text-palette-beige justify-center ${
                                            item.path === pathname ? "font-bold" : ""
                                        }`}
                                    >
                                        {item.title}
                                    </Link>
                                </CustomMenuItem>
                            </div>
                        )
                    })}

                </motion.ul>
                <div className="h-[14vh] w-[calc(100vw-86px)] relative top-0 z-[-1]">
                    <Link href="/" className="text-palette-beige text-2xl tracking-widest absolute left-[9vw] top-[calc(10vh)]">
                        <p className="leading-6">the dak0k0<br/>chronicles</p>
                    </Link>
                </div>
                <MenuToggle toggle={toggleOpen}/>
            </motion.nav>
            
            <MobilePage isOpen={isOpen}/>
        </div>
    )
}

export default MobileContent

const MenuToggle = ({ toggle }: { toggle: any}) => (
    <button 
        onClick={toggle}
        className="pointer-events-auto fixed right-[9vw] top-[calc(10vh)] z-0 mix-blend-exclusion"
    >
        <svg width="46" height="46" viewBox="0 0 46 46">
            <Path
                variants={{
                    closed: { d: "M 8 9.154 L 38 9.154", stroke:"white"},
                    open: { d: "M 11 35 L 35 11", stroke:"#f5f5dc"},
                }}
                strokeWidth="3"                
            />
            <Path
                d="M 8 23 L 38 23"
                variants={{
                    closed: { opacity: 1, stroke:"white"},
                    open: { opacity: 0 }
                }}
                transition={{duration: 0.1}}
                strokeWidth="3"
            />
            <Path
                variants={{
                    closed: { d: "M 8 36.846 L 38 36.846", stroke:"white"},
                    open: { d: "M 11 11 L 35 35", stroke:"#f5f5dc"}
                }}
                strokeWidth="3"
            />
        </svg>
            
    </button>
)

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="4"
        stroke="hsl(0,0%,18%)"
        strokeLinecap="round"
        {...props}
    />
)

const MenuItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.75
        }
    },
    closed: {
        y: -250,
        opacity: 0,
        transition: {
            y: { stiffness: 1000, duration: 0.2},
        }
    }
}

const CustomMenuItem = ({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <motion.li variants={MenuItemVariants} className={className}>
            {children}
        </motion.li>
    )
}

const useDimensions = (ref: any) => {
    const dimensions = useRef({width: 0, height: 0})

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth;
            dimensions.current.height = ref.current.offsetHeight
        }
    }, [ref]);

    return dimensions.current;
}