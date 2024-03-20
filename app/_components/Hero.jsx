import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Search } from "lucide-react";
import React from "react";


function Hero() {
  return (
    <div className="flex flex-col items-center  justify-center pt-14 pb-7">
      <h2 className=" text-4xl font-bold text-center  ">
        Find Home <span className="text-lime-500 ">Service/Repair</span> 
      </h2>
      <h2 className="text-4xl font-bold text-center mt-1 " >Near You !</h2>
      <h2 className="text-center text-[16px] text-zinc-400 mt-2">Explore Best Home Service And Repair Near You !</h2>

      <div className="mt-6 flex gap-2">
        <Input placeholder="Search" className="md:w-[250px] rounded-full" />
        <Button className="bg-lime-500 rounded-full h-[45px]">
            <Search className="w-5 h-5"/>
        </Button>
      </div>
    </div>
  );
}

export default Hero;
