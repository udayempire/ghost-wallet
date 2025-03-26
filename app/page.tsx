"use client"
import { Appbar } from "@/components/Appbar";
import { Banner } from "@/components/Banner";
import { ChooseNetwork } from "@/components/ChooseNetwork";
import { ExampleSeed } from "@/components/ExampleSeed";
import { FAQs } from "@/components/FAQs";
import { Footer } from "@/components/Footer";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { WalletCreation } from "@/components/walletCreationDetails";
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();
  function handelOpenWallet() {
    const walletData = localStorage.getItem("walletData");
    if (!walletData) {
      alert("First create or import an account you jerk")
      return
    }
    router.push("/walletDashboard?network=solana")
  }
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
                  onClick={() => {
                    router.push("/#selectNetwork")
                  }}

                >Create New Wallet</PulsatingButton>
                <PulsatingButton
                  onClick={() => {
                    router.push("/import-wallet")
                  }}
                >Import Existing Wallet</PulsatingButton>
                {/* TO DO - Create a button component and add href(optional) into it and remove use client in this page */}
                <PulsatingButton onClick={handelOpenWallet}>Open Your Wallet</PulsatingButton>
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
        {/* Info About Wallets  */}
        <section
          id="wallet-creation"
          className="  dark:bg-neutral-900"
        >
          <WalletCreation/>
        </section>
        <section id="selectNetwork">
          <ChooseNetwork />
        </section>
        <section id="FAQs" className="flex flex-col">
          <div className="flex flex-col text-center gap-2 mt-10">
            <h1 className="font-bold text-zinc-200 text-4xl">Frequently Asked Questions</h1>
            <p className="font-semibold text-zinc-300">Get answers to the most common questions about our Ghost Wallet</p>
          </div>
          <div className="flex justify-center items-center  mt-8 mb-8 ">
            <div className="  rounded-lg w-full max-w-3xl ">
              <FAQs />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
