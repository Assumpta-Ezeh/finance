import Hero from "@/components/home/hero";
import NavBar from "@/components/shared/navbar";
import { Ellipsis, EllipsisVertical } from "lucide-react";
import Image from "next/image";

export default function Pay() {
  return (
    <div className="bg-white">  

    <div className="w-full h-120 max-w-6xl mx-auto px-4 ">
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
            <div></div>
        </div>
        <div></div>
    </div>
    </div>
  );
}
