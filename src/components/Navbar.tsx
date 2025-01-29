import Menu from "@/components/Menu"
import Link from "next/link"
import CartIcon from "./CartIcon";

export default function Navbar() {
    const user = false;
  return (
    <div className="h-12 text-emerald-700 p-4 flex justify-between items-center border-b border-emerald-700">
        {/* Left Link */}
        <div className="hidden md:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/">Menu</Link>
            <Link href="/">Contact</Link>
        </div>
        
        {/* Logo */}
        <div className="uppercase font-bold text-lg">
            <Link href="/">
                Massimo
            </Link>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
            <Menu />
        </div>

        {/* Right Link */}
        <div className="hidden md:flex gap-4">
            <CartIcon />
            {!user ? (
                 <Link href="/login" className="bg-emerald-700 text-white py-1 px-2 text-sm rounded">
                 Login
             </Link>
            ) : (
                <Link href="/orders">Order</Link>
            )}
        </div>
    </div>
  )
}
