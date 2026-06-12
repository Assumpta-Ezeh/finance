import Link from "next/link";
import { Button } from "../ui/button";

export default function NavBar() {
    return(
        <div className="flex justify-between max-w-6xl mx-auto p-4 items-center">
            <div>
               <div className="w-fit -fit py-1.5 px-1.5 border rounded-full bg-black/90">
                <img src="logo1.png" alt="" className="w-2 h-2"/>
                </div> 
            </div>
            <div className="flex gap-5 text-black/85 text-xs">
                <span><Link href="/">Home</Link></span>
                <span><Link href="/how">How It works</Link></span>
                <span><Link href="/service">Services</Link></span>
                <span><Link href="/connect">Connect</Link></span>
            </div>
            <div className="flex gap-5 items-center">
                <span>
                    <Link href="/login" className="text-xs text-black/85">Login</Link>
                </span>
                <Button className="text-xs px-5 border "><Link href="/signup">Signup</Link></Button>
            </div>
        </div>
    )
}