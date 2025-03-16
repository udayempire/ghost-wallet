import { CryptoAdCard } from "./CryptoAdCard";
import { advertData } from "@/utils/advertData";
export const ChooseNetwork = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-200">
          Choose Your Network
        </h2>
        <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
          Select the blockchain network you want to create your wallet on. You
          can add more networks to your wallet later.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* <CryptoAdCard /> */}
        {advertData.map((data,index)=>(
            <CryptoAdCard 
                key={index} 
                name={data.name} 
                usersCount={data.usersCount} 
                highlight1={data.highlight1} 
                highlight2={data.highlight2} 
                highlight3={data.highlight3}
                buttonStyle={data.buttonStyle}
            />
        ))}
    
      </div>

      <div className="mt-8 text-center pb-4">
        <p className="text-neutral-400 mb-4 ">More networks coming soon</p>
        <div className="flex justify-center space-x-4">
          <div className="bg-neutral-800 px-4 py-2 rounded-lg text-neutral-500 flex items-center cursor-pointer hover:bg-neutral-900 hover:text-neutral-400 transition-all duration-300 transform group-hover:scale-[1.02]">
            <span>Bitcoin</span>
          </div>
          <div className="bg-neutral-800 px-4 py-2 rounded-lg text-neutral-500 flex items-center cursor-pointer hover:bg-neutral-900 hover:text-neutral-400 transition-all duration-300 transform group-hover:scale-[1.02]">
            <span>Cardano</span>
          </div>
          <div className="bg-neutral-800 px-4 py-2 rounded-lg text-neutral-500 flex items-center cursor-pointer hover:bg-neutral-900 hover:text-neutral-400 transition-all duration-300 transform group-hover:scale-[1.02]">
            <span>Avalanche</span>
          </div>
        </div>
      </div>
    </div>
  );
};
