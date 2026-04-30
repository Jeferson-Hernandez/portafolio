'use client'

import Link from "next/link";
import { IoGameController } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <nav className="fixed inset-0 flex items-center justify-between py-2 px-4 md:w-3xl h-14 md:mx-auto bg-dark/80 backdrop-blur-xs z-10">
            <Link href="/" className="flex items-center font-bold gap-2">
                <IoGameController className="w-5 h-5" />
                <span className="text-lg">Jeferson Hernandez</span>
            </Link>
            <div className="hidden md:flex gap-3">
                <Link href="/analisis-projects">Analisis Proyectos</Link>
                <Link href="/dev-projects">Desarrollo Proyectos</Link>
                <Link href="https://github.com/jeferson-hernandez">Código</Link>
            </div>
            <div className="relative flex md:hidden rounded gap-2">
                <button onClick={() => setMenuToggle(!menuToggle)} className="w-10 h-10 bg-blue grid items-center justify-center rounded-lg">
                    <FaBars className="w-5 h-5" />
                </button>
                {
                    menuToggle && (
                        <ul className="absolute top-12 right-1 w-50 h-fit rounded-lg p-3 bg-blue md:hidden">
                            <li className="py-2">
                                <Link href="/analisis-projects">Analisis Proyectos</Link>
                            </li>
                            <li className="py-2">
                                <Link href="/dev-projects">Desarrollo Proyectos</Link>
                            </li>
                            <li className="py-2">
                                <Link href="https://github.com/jeferson-hernandez">Código</Link>
                            </li>
                        </ul>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar;