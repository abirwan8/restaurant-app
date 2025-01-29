"use client";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import CartIcon from "./CartIcon";

const LINKS = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Menu", href: "/menu" },
  { id: 3, label: "Working Hour", href: "/" },
  { id: 4, label: "Contact", href: "/" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  const user = false;
  return (
    <>
      <div>
        <div className="flex items-center gap-4">
            <Link href="/" onClick={() => setOpen(false)}>
                <CartIcon />
            </Link>

            {!user ? (
            <Link href="/login" onClick={() => setOpen(false)} className="bg-emerald-700 text-white py-1 px-2 text-sm rounded">
                Login
            </Link>
            ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
                Orders
            </Link>
            )}

            
            {!open ? 
                <HiOutlineMenuAlt3 onClick={() => setOpen(true)} className="text-2xl" /> 
            : 
                <IoClose onClick={() => setOpen(false)} className="text-2xl" />
            }
        </div>
     
        {open && (
          <div className="bg-emerald-700 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center gap-8 text-xl z-10">
            {LINKS.map((link) => (
              <Link href={link.href} key={link.id} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
