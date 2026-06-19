import Hero from "@/components/home/hero";
import NavBar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronRight, Ellipsis, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AccordionBasic } from "@/components/home/accordion";

export default function Pay() {
  return (
    <div className="bg-white">  

    <div className="w-full h-fit max-w-5xl mx-auto px-4 md:pt-10">
        <div className="grid grid-cols gap-3 md:flex justify-center items-center">
            <div className="flex gap-0.5 items-center">
                <img src="drop-icon.png" alt="" className="w-7 h-7"/>
                <span className="text-2xl text-black/55 font-extrabold">Dropbox</span>
            </div>
            <div className="flex gap-0.5 items-center">
                <img src="airbnb.png" alt="" className="w-7 h-7"/>
                <span className="text-black/55 text-xl font-bold">airbnb</span>
            </div>
            <div>
                <span className="text-black/55 text-3xl font-extrabold tracking-tighter">GitHub</span>
            </div>
            <div>
                <span className="text-black/55 text-3xl font-extrabold tracking-wider">NETFLIX</span>
            </div>
            <div>
                <span className="text-black/55 text-3xl font-extrabold tracking-tighter">HBO</span>
            </div>
        </div>
        <div className="flex flex-col justify-center md:grid grid-cols-2 md:justify-between items-center gap-10 mt-15">
            <div className="w-80 h-70 md:w-100 md:h-90 p-5  md:p-10 bg-black/15 border rounded-4xl grid justify-center">
            <div className="w-60 h-30 md:w-70 md:h-40 bg-white rounded-4xl p-5">
                <div className="flex justify-between items-center">
                    <img src="wifi.png" alt="" className="w-4 h-4" />
                    <div className="flex gap-0.5 items-center">
                        <img src="payon-icon.png" alt="" className="md:w-3.5 md:h-3.5 w-3 h-3"/>
                        <h6 className="text-sm">Payon</h6>
                    </div>
                </div>
                <div className="md:mt-15">
                    <h5 className="mt-5 text-xs">Savings Card</h5>
                <span className="mt-1 font-bold text-xl md:text-2xl">$16,058.<span className="text-black/55 font-bold text-xl md:text-2xl">94</span></span>
                </div>
            </div>
            <div className="grid justify-center">
                <span className="text-sm flex justify-center gap-1">Better <span className="font-bold">Integration</span> </span>
                <div className="flex justify-evenly gap-4">
                    <div className="bg-white md:w-10 md:h-10 w-7 h-7 p-2 border rounded-sm flex items-center">
                        <img src="up-icon.png" alt="" className="md:w-5 md:h-5 w-3.5 h-3.5" />
                    </div>
                    <div className="bg-white md:w-10 md:h-10 w-7 h-7 p-2 border rounded-sm flex items-center">
                        <img src="down-icon.png" alt="" className="md:w-5 md:h-5 w-3.5 h-3.5" />
                    </div >
                    <div className="bg-white md:w-10 md:h-10 w-7 h-7 p-2 border rounded-sm flex items-center">
                        <img src="mail-icon.png" alt="" className="md:w-5 md:h-5 w-3.5 h-3.5" />
                    </div>
                    <div className="bg-white md:w-10 md:h-10 w-7 h-7 p-2 border rounded-sm flex items-center">
                        <img src="plus-icon1.png" alt="" className="md:w-5 md:h-5 w-3.5 h-3.5" />
                    </div>
                    <div className="bg-white md:w-10 md:h-10 w-7 h-7 p-2 border rounded-sm flex items-center">
                        <Ellipsis size={30} className="fill-black/50"/>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <h4 className="text-2xl md:text-4xl font-bold w-80 md:w-100">Streamline Sales With Seamless Payments</h4>
                <p className="text-black/75 text-xs md:text-sm w-90 md:w-110 mt-5">
                    Deliver A Fricionless Buying Experience With Secure, Responsive, And Fully Integrated Payment Tools.
                </p>
                <div className="flex flex-col gap-2 mt-5">
                    <div className="flex gap-2 items-center">
                        <ChevronRight size={20}/>
                        <span>Real-Time Payment Tracking</span>
                    </div>
                    <div className="flex gap-2 items-center">
                         <ChevronRight size={20}/>
                        <span>Accept Payments Quickly And Securely</span>
                    </div>
                    <div className="flex gap-2 items-center">
                         <ChevronRight size={20}/>
                        <span>Effortless Integration With Your Platform</span>
                    </div>
                </div>
                <Button className="px-5 py-5 mt-5"><Link href="/create" className="text-white text-xs">Create Account</Link></Button>
            </div>
        </div>
     
    </div>
    </div>
  );
}
