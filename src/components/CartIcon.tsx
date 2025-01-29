import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function CartIcon() {
  return (
    <Link href="" className="flex items-center">
      <div className="text-2xl">
        <IoCartOutline />
      </div>
      <span className="bg-red-500 text-white text-[10px] py-0 px-1 rounded-full">3</span>
    </Link>
  );
}
