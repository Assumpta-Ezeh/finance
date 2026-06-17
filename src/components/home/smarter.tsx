import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Smarter() {
  return (
   <div className="w-full h-fit max-w-5xl mx-auto px-4 pt-10">
     <div className="w-full h-fit bg-linear-to-tl from-gray-100 via-transparent to-transparent">
           <div className="pt-20 grid grid-cols-2 justify-between items-center gap-5">
           <div>
            <h4 className="text-4xl font-normal w-sm">Sell Smarter With Fast Secure Payments</h4>
                <p className="text-black/75 text-sm w-110 mt-5">
                    Make Every Transaction Count With A Payment System That's Built For Speed And Security.
                </p>
                <div className="flex flex-col gap-2 mt-5">
                    <div className="flex gap-2 items-center">
                        <ChevronRight size={20}/>
                        <span>Instant Payment Insights</span>
                    </div>
                    <div className="flex gap-2 items-center">
                         <ChevronRight size={20}/>
                        <span>Track Payments Instantly</span>
                    </div>
                </div>
                <Button className="px-8 py-5 mt-5"><Link href="/details" className="text-white text-xs">See Details</Link></Button>
           </div>
           <div>
            <img src="chart.png" alt="" className="w-110 h-95"/>
           </div>
        </div>
    </div>
   </div>
  );
}
   