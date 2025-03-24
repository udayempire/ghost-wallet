"use client"
import { Appbar } from "@/components/Appbar";
import { Banner } from "@/components/Banner";
import { ChooseNetwork } from "@/components/ChooseNetwork";
import { ExampleSeed } from "@/components/ExampleSeed";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { useRouter } from "next/navigation"

export default function Home() {
  const router =useRouter();
  return (
    <div>
      <Appbar />
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(29,40,42,1) 100%)",
        }}
      >
        <section
          id="hero"
          className="md:h-screen flex flex-col gap-14"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(29,40,42,1) 100%)",
          }}
        >
          <div className="grid md:grid-cols-2  gap-8 items-center mt-14 md:mt-32  place-items-center px-10">
            <div className="">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-zinc-400">
                <span className="text-yellow-500">Multi-Chain Wallet</span> for
                the Modern Crypto Users
              </h1>
              <p className="text-zinc-400">
                Create and manage wallets across Solana, Ethereum, and more with
                a secure, intuitive platform. Generate keys, store assets, and
                send transactions effortlessly.
              </p>
              <div className="flex gap-8 mt-10">
                <PulsatingButton
                onClick={()=>{
                  router.push("/#selectNetwork")
                }}
                
                >Create New Wallet</PulsatingButton>
                {/* TO DO - Create a button component and add href(optional) into it and remove use client in this page */}
                <PulsatingButton onClick={()=>{
                  router.push("/walletDashboard?network=ethereum")
                }}>Open Your Wallet</PulsatingButton> 
              </div>
            </div>
            <div>
              <ExampleSeed />
            </div>
          </div>
          <div className="px-8">
            <Banner />
          </div>
        </section>
        <section id="selectNetwork">
          <ChooseNetwork />
        </section>
      </div>
    </div>
  );
}
