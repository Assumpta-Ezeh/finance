import Link from "next/link";
import { Button } from "../ui/button";

export function Cta() {
    return (
        <div className="w-full h-fit max-w-5xl mx-auto px-4 md:pt-10">
               <div className=" border-0 rounded-4xl px-15 w-90 h-60 md:w-full md:h-70 bg-black mt-10 py-10 flex flex-col items-center">
            <h4 className="text-white text-center text-xl md:text-3xl font-bold w-80 md:w-130">Take Full Control of Your Financial Future Starting Today</h4>
            <p className="text-white text-center text-xs md:text-sm pt-5 w-70 md:w-90">Start Taking Charge of Your Finances and Build a Better Tomorrow</p>
            <div className="pt-7">
                 <Button className="px-4 py-5 border-0 rounded-sm bg-white"><Link href="/contactus" className="text-black text-xs">Contact Us</Link></Button>
             </div>
        </div>
        </div>
    )
}