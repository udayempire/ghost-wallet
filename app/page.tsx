import { Appbar } from "@/components/Appbar";
import { Banner } from "@/components/Banner";
import { PulsatingButton } from "@/components/magicui/pulsating-button";

export default function Home() {
  return (
    <div>
      <Appbar />
      <div className="">
        <section
          id="hero"
          className="h-screen flex flex-col gap-28"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(29,40,42,1) 100%)",
          }}
        >
          <div className="grid grid-cols-2 items-center mt-32  place-items-center px-10">
            <div className="">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-zinc-400">
                <span className="text-yellow-500">Multi-Chain Wallet</span> for
                the Modern Crypto Users
              </h1>
              <p className="text-zinc-400">
                Create and manage wallets across Solana, Ethereum, and more with
                a secure, intuitive platform. Generate keys, store assets, and
                send transactions effortlessly.
              </p>
              <div className="flex gap-8 mt-10">
                <PulsatingButton>Create Wallet</PulsatingButton>
                <PulsatingButton>Learn More</PulsatingButton>
              </div>
            </div>
            <div>Hi</div>
          </div>
          <div className="px-8">
            <Banner />
          </div>
        </section>
      </div>
    </div>
  );
}
