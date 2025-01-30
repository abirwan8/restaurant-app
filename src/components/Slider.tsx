"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

const SLIDER_DATA = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      image: "/images/slide1.png",
    },
    {
      id: 2,
      title: "we deliver your order wherever you are in NY",
      image: "/images/slide2.png",
    },
    {
      id: 3,
      title: "the best pizza to share with your family",
      image: "/images/slide3.jpg",
    },
  ];

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(2);

    useEffect(()=>{
        const interval = setInterval(
           ()=>setCurrentSlide((prev) => (prev === SLIDER_DATA.length - 1 ? 0 : prev + 1)),
            4000
        );

        return () => clearInterval(interval);
    },[currentSlide])

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-6rem)]">
        {/* Text Container */}
        <div className="flex-1 lg:w-1/2 flex justify-center items-center flex-col gap-4 text-emerald-700 font-bold bg-emerald-700/10">
            <h1 className="text-4xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-6xl">{SLIDER_DATA[currentSlide].title}</h1>
            <button className="bg-emerald-700 text-white py-4 px-8 rounded">Order Now</button>
        </div>

        {/* Image Container */}
        <div className="w-full flex-1 relative">
            <Image src={SLIDER_DATA[currentSlide].image} alt="slider" fill className="object-cover" />
        </div>
    </div>
  )
}
