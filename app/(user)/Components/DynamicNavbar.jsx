"use client"
import Partner_Navbar from "@/app/(Partner)/Component/Partner_Navbar";
import { usePathname } from "next/navigation";
import Navbar_User from "./Navbar_User";

function DynamicNavbar() {
    const pathname = usePathname();
    const ispartnerpath = pathname.startsWith("/partner")
    return (
        <div>
            {ispartnerpath ? <Partner_Navbar /> : <Navbar_User />}

        </div>
    )
}

export default DynamicNavbar