import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
    return(
        <div className=" md:grid md:grid-cols-2 justify-between items-center w-full h-120 max-w-5xl mx-auto px-4 gap-10">
            <div>
                <h4 className="text-black text-3xl md:text-5xl tracking-tight font-bold leading-tight md:max-w-md">
                    Invest Intelligently, Live Independently
                </h4>
                <p className="text-black text-[0.7em] md:text-xs tracking-wide md:max-w-md  pt-2">
                    Your all-in-one solution to smarter money management. Track spending, set goals, and make informed decisions with clarity and ease.
                </p>
                <div className="flex gap-3 md:gap-1 py-4">
                    <Button className="border  hover:border-black px-4 hover:bg-transparent text-white text-xs tracking-wide hover:text-black"><Link href="/get" className="">Get Started</Link></Button>
                    <Button variant={'outline'} className="px-5 hover:bg-black  hover:text-white"><Link href="">See Details</Link></Button>
                </div>
            </div>
            <div className="" >
                <img src="phone.png" alt="" className="w-70 h-50 md:w-125 md:h-110"/>
            </div>
        </div>
    )
}