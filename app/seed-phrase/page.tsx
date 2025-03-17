"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { getSeedPhrase } from "@/utils/generateSeedPhrase";
import { createSolWallet } from "@/utils/Solana/sol";
import { createEthWallet } from "@/utils/Ethereum/eth";
import { encryptData } from "@/utils/crypto";
import { setPasswordCookie } from "@/utils/passwordCookie";

export default function SeedPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const network = searchParams.get("network") || "ethereum";
  const formatedNetwork = network.charAt(0).toUpperCase() + network.slice(1);
  //use a function seed phrase based on network here
  const [seedPhrase, setSeedPhrase] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  interface WalletDataProps {
    mnemonic: string;
    password: string;
    wallets: Record<string, unknown>;
  }

  //generating the seedphrase when page mounts
  useEffect(() => {
    const seedPhrase = getSeedPhrase();
    setSeedPhrase(seedPhrase)
  }, []);
  const seedPhraseArr = seedPhrase.split(" ");

  // Handling the next page(continue button)
  const handleContinue = () => {
    if (!password && !confirmPassword) {
      alert("Please enter the password to continue");
      return;
    }
    if (!isSaved) {
      alert("Please confirm the checkbox");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    };
    const walletData: WalletDataProps= 
    { mnemonic:seedPhrase,
      password:password,
      wallets:{} 
    };

    if(network == "solana"){
      walletData.wallets.solWallet = createSolWallet({mnemonic:seedPhrase})
      console.log("Generated Solana wallet:", walletData.wallets.solWallet);
    }
    if(network == "ethereum"){
      walletData.wallets.ethWallet = createEthWallet({mnemonic:seedPhrase})
      console.log("Generated Eth wallet:", walletData.wallets.EthWallet);
    }
    //Encrypting the walletData Object using the user's password as the key
    const encryptedData = encryptData(walletData,password);
    console.log("EncryptedData:",encryptedData)

    //saving the encrypted data in localStorage
    localStorage.setItem("walletData",encryptedData);
    //saving password
    setPasswordCookie(password)
    console.log("Encrypted wallet data saved in localStorage.");
    console.log(localStorage.getItem("walletData")
)
    //Navigate to walletDashboard
    router.push(`/walletDashboard?network=${network}`);
  };
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(29,40,42,1) 100%)",
      }}
    >
      <div className=" w-full max-w-2xl mx-auto p-4 py-12">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <div
              id="networkBadge"
              className="flex items-center bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M6.44 18.77h11.66c.43 0 .68-.47.43-.83l-2.5-3.66c-.2-.3-.63-.3-.83 0l-1.76 2.58c-.2.3-.63.3-.83 0L10.17 13c-.2-.3-.63-.3-.83 0l-3.44 5.01c-.2.36.05.76.54.76z"></path>
                <path d="M6.44 13h11.66c.43 0 .68-.47.43-.83l-2.5-3.66c-.2-.3-.63-.3-.83 0l-1.76 2.58c-.2.3-.63.3-.83 0L10.17 7.2c-.2-.3-.63-.3-.83 0l-3.44 5c-.2.37.05.8.54.8z"></path>
              </svg>
              <span>{formatedNetwork} Network</span>
            </div>
          </div>
          <h2 className="text-3xl text-zinc-200 font-bold mb-2">
            Your Recovery Seed Phrase
          </h2>
          <p className="text-neutral-300 mb-2">
            This 12-word phrase is the only way to recover your wallet.
          </p>
          <div className="flex items-center justify-center text-amber-400 bg-red-400/30 px-4 py-2 rounded-lg mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-sm">
              Write these words down and store them in a safe place
            </span>
          </div>
        </div>

        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700/30 mb-8">
          <div className="grid grid-cols-3 gap-3">
            {seedPhraseArr.map((eachSeedWord, index) => (
              <div
                key={index}
                className="flex items-center p-2 bg-neutral-700/30 rounded"
              >
                <span className="text-neutral-500 text-sm mr-2">1.</span>
                <span className="text-white">{eachSeedWord}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between">
            <button className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
                <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"></path>
              </svg>
              <span className="cursor-pointer">Copy to clipboard</span>
            </button>
            {/* <button className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Generate new</span>
            </button> */}
          </div>
        </div>

        <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700/30 mb-8">
          <h3 className="text-xl text-zinc-200 font-semibold mb-4">
            Set Your Wallet Password
          </h3>
          <p className="text-neutral-400 mb-4">
            This password will be used to unlock your wallet.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-neutral-700 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="confirmPassword"
                className="w-full bg-neutral-700 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center mb-4">
              <input
                id="confirm-seed"
                type="checkbox"
                checked={isSaved}
                onChange={(e) => setIsSaved(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-neutral-300 rounded"
              />
              <label className="ml-2 block text-sm text-neutral-300">
                I have written down my seed phrase and stored it securely
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border-2 border-neutral-400 rounded-lg text-neutral-300 hover:border-neutral-500 roundedtransition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            Back
          </Link>
          <button
            onClick={() => {
              handleContinue();
            }}
            className="inline-flex items-center px-6 py-2 bg-indigo-600 rounded-lg text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            Continue
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
