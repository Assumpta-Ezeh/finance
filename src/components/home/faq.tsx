import Link from "next/link";
import { Button } from "../ui/button";
import { AccordionBasic } from "./accordion";

export function Faq() {
    return (
        <div className="w-full h-fit max-w-5xl mx-auto px-4 pt-10">
              <div className=" flex flex-col py-10">
            <div className="flex flex-col items-center">
                <h4 className="text-3xl font-bold">Frequently Asked Questions</h4>
                <span className="text-xs pt-2">These Are the questions we hear more often.</span>
            </div>
            <div className="pt-12 flex justify-between items-center gap-5">
                <div className="flex-1">
                    <AccordionBasic/>
                </div>
                <div className="bg-black/10 border-0 rounded-xl py-22 px-7 flex flex-col items-center w-fit h-fit">
                    <span className="font-bold text[1em] w-50 text-center ">Don't see the answer you need?</span>
                    <p className="text-[0.7em] w-50 pt-2 flex text-center">That's ok. Just drop a message and we will get back to you ASAP.</p>
                    <div className="pt-5">
                        <Button className="px-4 py-5 border-0 rounded-sm"><Link href="/contact" className="text-white text-xs">Contact Us</Link></Button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}