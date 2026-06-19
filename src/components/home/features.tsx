import { ArrowUpRight } from "lucide-react";


const data : FeatureCardProps[] = [
    {
        title: "Secure Account Login",
        desc: " Protect Your Financial Data With Secure Account Login, Featuring Encryption And 2-Factor Athentication For Peace Of Mind.",
        color: "bg-blue-50"
    },
    {
        title: "Credit Score Monitoring",
        desc: "Stay On Top Of Your Financial Health With Real-Time Creit Score Monitoring And Personalized Improvement Tips.",
        color: "bg-yellow-50"
    },
    {
        title: "Real-Time Balance",
        desc: "Get Instant Access To Your Account Balance Anytime, Anywhere, So You Always Know Where Your Money Stands.",
        color: "bg-pink-50"
    },
]

export function Features() {
  return (
    <div className="w-full h-fit max-w-5xl mx-auto px-4 pt-10">
      <div className="flex flex-col items-center pt-5 md:pt-20">
        <h4 className="font-extrabold text-3xl md:text-4xl tracking-tight">Our Features</h4>
        <div className=" w-full flex flex-col md:grid grid-cols-3 gap-5 pt-10">
      {
        data.map((card,i)=> (
            <FeatureCard key={i} title={card.title} desc={card.desc} color={card.color}/>
        ))
      }
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  color: "bg-blue-50" | "bg-yellow-50" | "bg-pink-50";
  title: string;
  desc: string;
}

export const FeatureCard = ({ title, desc, color }: FeatureCardProps) => {
  return (
    <div className={`md:py-10 px-5 py-5 border-0 rounded-xl ${color}`}>
      <div className="flex justify-between items-center gap-5">
        <span className="font-bold  text-xl md:text-2xl tracking-tight">{title}</span>
        <div className="border rounded-full p-1 bg-gray-200 ">
          <ArrowUpRight></ArrowUpRight>
        </div>
      </div>
      <p className=" text-black/70 text-xs w-70 :md:text-sm pt-5">{desc}</p>
    </div>
  );
};
