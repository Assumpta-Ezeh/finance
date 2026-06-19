export default function Footer() {
  return (
    <div className="bg-linear-to-tl from-gray-100 via-transparent to-transparent">
      <div className="w-full h-fit max-w-5xl mx-auto px-4 flex flex-col md:grid grid-cols-2 gap-10 pt-15">
        <div className="flex flex-col">
            <div className="md:pt-15">
                <p className="text-xs w-70">Let us handle all your finances and guarantee secure transactions</p>
            </div>
            <div className="flex gap-15 md:gap-3 pt-10">
                        <div className="w-7 h-7 p-1.5 flex justify-center items-center border-0 rounded-full bg-sky-700">
                            <a href="#">
                            <img src={"Instagram-white5.png"} className="w-4 h-4 mt-1"></img>
                        </a>
                        </div>
                       <div className="p-1.5 w-7 h-7 flex justify-center items-center border-0 rounded-full bg-blue-900">
                         <a href="#">
                            <img src={"Facebook-white1.png"} className="w-1.5 h-3 mt-1"></img>
                        </a>
                       </div>
                        <div className="p-1.5 border-0 rounded-full bg-blue-400">
                            <a href="#">
                            <img src={"twitter-logo1.png"} className="w-4 h-4"></img>
                        </a>
                        </div>
                        <div className="p-1.5 border-0 rounded-full bg-red-600">
                            <a href="#">
                            <img src={"youtube1.png"} className="w-4 h-4"></img>
                        </a>
                        </div>
                    </div>
        </div>
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
                <div className="flex flex-col">
                    <h4 className="font-bold tracking-wider">About</h4>
                    <span className="mt-7 text-[0.8em] tracking-wide">Partnership</span>
                    <span className="mt-2 text-[0.8em] tracking-wide">Terms of Use</span>
                    <span className="mt-2 text-[0.8em] tracking-wide">Privacy</span>
                </div>
                <div className="flex flex-col">
                    <h4 className="font-bold tracking-wider">Product</h4>
                    <span className="mt-7 text-[0.8em] tracking-wide">About</span>
                    <span className="mt-2 text-[0.8em] tracking-wide">Features</span>
                    <span className="mt-2 text-[0.8em] tracking-wide">Support</span>
                </div>
                <div className="flex flex-col">
                    <h4 className="font-bold tracking-wider">Resources</h4>
                    <span className="mt-7 text-[0.8em] tracking-wide">Career</span>
                    <span className="mt-2 text-[0.8em] tracking-wide">blog</span>
                    <span className="mt-2 text-[0.8em] tracking-wide">Legal</span>
                </div>
                <div className="flex flex-col">
                    <h4 className="font-bold tracking-wider">Contact</h4>
                    <span className="mt-7 text-[0.8em] tracking-wide">+123 456 789</span>
                    <span className="mt-2 text-[0.8em] tracking-wide">Los Angeles, CA</span>
                </div>
                </div>
        </div>
      </div>
      <div className="bg-white py-10">
            <div className="w-90 md:w-full h-12 bg-black flex justify-center max-w-5xl mx-auto">
                <span className="text-xs text-white flex justify-center items-center">@ 2025, All Rights Reserved.</span>
            </div>
        </div>
    </div>
  );
}