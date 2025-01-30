import { featuredProducts } from "@/data/data"
import Image from "next/image"
import { IoCartOutline } from "react-icons/io5";

export default function Featured() {
  return (
    <div className="w-screen overflow-x-scroll text-emerald-700">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* Single Item */}

        {featuredProducts.map((product) => (
          <div key={product.id} className="w-screen md:w-[50vw] xl:w-[33vw] xl:h-[90vh] h-[60vh] flex flex-col items-center justify-around px-4 py-8 hover:bg-emerald-700/10 transition-all duration-300">
          {/* Image Container */}

          {product.img && (
            <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
              <Image src={product.img} alt={product.title} fill className="object-contain" />
            </div>
          )}

          {/* Text Container */}
          <div className="flex flex-1 flex-col gap-4 items-center justify-center text-center">
            <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{product.title}</h1>
            <p className="p-4 2xl:p-8">{product.desc}</p>
            <span className="text-xl font-bold">${product.price}</span>
            <button className="bg-emerald-700 text-white py-2 px-4 rounded flex items-center gap-2"><IoCartOutline className="text-xl" />Add to Cart</button>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
