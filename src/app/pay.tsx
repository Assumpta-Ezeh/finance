import Hero from "@/components/home/hero";
import NavBar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronRight, Ellipsis, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Pay() {
  return (
    <div className="bg-white">  

    <div className="w-full h-fit max-w-6xl mx-auto px-4 ">
        <div className="flex justify-around items-center">
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
        <div className="grid grid-cols-2 justify-between items-center gap-10 mt-15">
            <div className="w-100 h-90 p-10 bg-black/15 border rounded-4xl grid justify-center">
            <div className="w-70 h-40 bg-white rounded-4xl p-5">
                <div className="flex justify-between items-center">
                    <img src="wifi.png" alt="" className="w-4 h-4" />
                    <div className="flex gap-0.5 items-center">
                        <img src="payon-icon.png" alt="" className="w-3.5 h-3.5"/>
                        <h6 className="text-sm">Payon</h6>
                    </div>
                </div>
                <div className="mt-15">
                    <h5 className="mt-5 text-xs">Savings Card</h5>
                <span className="mt-1 font-bold text-2xl">$16,058.<span className="text-black/55 font-bold text-2xl">94</span></span>
                </div>
            </div>
            <div className="grid justify-center">
                <span className="text-sm flex justify-center gap-1">Better <span className="font-bold">Integration</span> </span>
                <div className="flex justify-evenly gap-4">
                    <div className="bg-white w-10 h-10 p-2 border rounded-sm flex items-center">
                        <img src="up-icon.png" alt="" className="w-5 h-5" />
                    </div>
                    <div className="bg-white w-10 h-10 p-2 border rounded-sm flex items-center">
                        <img src="down-icon.png" alt="" className="w-5 h-5" />
                    </div >
                    <div className="bg-white w-10 h-10 p-2 border rounded-sm flex items-center">
                        <img src="mail-icon.png" alt="" className="w-5 h-5" />
                    </div>
                    <div className="bg-white w-10 h-10 p-2 border rounded-sm flex items-center">
                        <img src="plus-icon1.png" alt="" className="w-5 h-5" />
                    </div>
                    <div className="bg-white w-10 h-10 p-2 border rounded-sm flex items-center">
                        <Ellipsis size={30} className="fill-black/50"/>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <h4 className="text-4xl font-normal w-sm">Streamline Sales With Seamless Payments</h4>
                <p className="text-black/75 text-sm w-110 mt-5">
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
        <div className="pt-20 grid grid-cols-2 justify-between items-center gap-10">
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
        </div>
        <div className="flex flex-col items-center pt-20">
            <h4 className="font-extrabold text-4xl tracking-tight">Our Features</h4>
            <div className="flex gap-15 pt-10">
                <div className="py-10 px-5 bg-blue-50 w-fit h-fit border-0 rounded-xl">
                    <div className="flex justify-between items-center gap-5">
                        <span className="font-bold w-50 text-xl tracking-tight">Secure Account Login</span>
                        <div className="border rounded-full p-1 bg-gray-200 -mt-5"><ArrowUpRight></ArrowUpRight></div>
                    </div>
                    <p className="text-xs text-black/70 w-50 pt-5">
                        Protect Your Financial Data With Secure Account Login, Featuring Encryption And 2-Factor Athentication For Peace Of Mind.
                    </p>
                </div>
                <div className="py-10 px-5 bg-yellow-50 w-fit h-fit border-0 rounded-xl">
                     <div className="flex justify-between items-center gap-5">
                        <span className="font-bold w-50 text-xl tracking-tight">Credit Score Monitoring</span>
                        <div className="border rounded-full p-1 bg-gray-200 -mt-5"><ArrowUpRight></ArrowUpRight></div>
                    </div>
                    <p className="text-xs text-black/70 w-50 pt-5">
                        Stay On Top Of Your Financial Health With Real-Time Creit Score Monitoring And Personalized Improvement Tips.
                    </p>
                </div>
                <div className="py-10 px-10 bg-pink-50 w-fit h-fit border-0 rounded-xl">
                     <div className="flex justify-between items-center gap-5">
                        <span className="font-bold w-40 text-xl tracking-tight">Real-Time Balance</span>
                        <div className="border rounded-full p-1 bg-gray-200 -mt-5"><ArrowUpRight></ArrowUpRight></div>
                    </div>
                    <p className="text-xs text-black/70 w-50 pt-5">
                        Get Instant Access To Your Account Balance Anytime, Anywhere, So You Always Know Where Your Money Stands.
                    </p>
                </div>
            </div>
        </div>
        <div className=" flex flex-col py-10">
            <div className="flex flex-col items-center">
                <h4 className="text-3xl font-bold">Frequently Asked Questions</h4>
                <span className="text-xs">These Are the questions we hear more often.</span>
            </div>
            <div className="pt-5 grid grid-cols-2 justify-between items-center gap-10">
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
    </div>
  );
}
