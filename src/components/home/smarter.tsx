import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Smarter() {
  return (
   <div className="w-full h-fit max-w-5xl mx-auto px-4 pt-10">
     <div className="w-full h-fit bg-linear-to-tl from-gray-100 via-transparent to-transparent">
           <div className="pt-5 md:pt-20 flex flex-col md:grid grid-cols-2 justify-center md:justify-between items-center gap-5 px-4">
           <div>
            <h4 className="text-3xl md:text-4xl font-normal max-w-sm">Sell Smarter With Fast Secure Payments</h4>
                <p className="text-black/75 text-sm w-90 md:max-w-110 mt-5">
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
            <img src="chart.png" alt="" className="md:w-110 md:h-95 w-70 h-65"/>
           </div>
        </div>
    </div>
   </div>
  );
}
   