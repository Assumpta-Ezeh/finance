import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
    return(
        <div className=" grid grid-cols-2 justify-between items-center w-full h-120 max-w-6xl mx-auto px-4 gap-10">
            <div>
                <h4 className="text-black text-5xl tracking-tight font-bold leading-tight max-w-md">
                    Invest Intelligently, Live Independently
                </h4>
                <p className="text-black text-xs tracking-wide max-w-md  pt-2">
                    Your all-in-one solution to smarter money management. Track spending, set goals, and make informed decisions with clarity and ease.
                </p>
                <div className="flex gap-1 py-4">
                    <Button className="border  hover:border-black px-4 hover:bg-transparent text-white text-xs tracking-wide hover:text-black"><Link href="/get" className="">Get Started</Link></Button>
                    <Button variant={'outline'} ><Link href="">See Details</Link></Button>
                </div>
            </div>
            <div className=" bg-gray-200" ></div>
        </div>
    )
}