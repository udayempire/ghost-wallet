"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export const NetworkTab = () => {
  const [selected, setSelected] = useState("ethereum");
  const router = useRouter();

  return (
    <div className="mb-8 border-b border-neutral-700">
      <div className="flex flex-wrap -mb-px">
        {/* Ethereum Button */}
        <button
          onClick={() => {
            setSelected("ethereum");
            router.push("/walletDashboard?network=ethereum");
          }}
          className={`mr-2 inline-block py-4 px-4 text-sm font-medium text-center border-b-2 rounded-t-lg ${
            selected === "ethereum"
              ? "border-indigo-500 text-indigo-400"
              : "text-neutral-400 border-transparent hover:text-neutral-300 hover:border-neutral-400"
          }`}
        >
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 1.3l-6 9 6 3.5 6-3.5-6-9z"></path>
              <path d="M10 14.5l-6-3.5 6 8.2 6-8.2-6 3.5z" opacity="0.6"></path>
            </svg>
            Ethereum
          </div>
        </button>

        {/* Solana Button */}
        <button
          onClick={() => {
            setSelected("solana");
            router.push("/walletDashboard?network=solana");
          }}
          className={`mr-2 inline-block py-4 px-4 text-sm font-medium text-center border-b-2 rounded-t-lg ${
            selected === "solana"
              ? "border-indigo-500 text-indigo-400"
              : "text-neutral-400 border-transparent hover:text-neutral-300 hover:border-neutral-400"
          }`}
        >
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M6.44 18.77h11.66c.43 0 .68-.47.43-.83l-2.5-3.66c-.2-.3-.63-.3-.83 0l-1.76 2.58c-.2.3-.63.3-.83 0L10.17 13c-.2-.3-.63-.3-.83 0l-3.44 5.01c-.2.36.05.76.54.76z"></path>
              <path d="M6.44 13h11.66c.43 0 .68-.47.43-.83l-2.5-3.66c-.2-.3-.63-.3-.83 0l-1.76 2.58c-.2.3-.63.3-.83 0L10.17 7.2c-.2-.3-.63-.3-.83 0l-3.44 5c-.2.37.05.8.54.8z"></path>
            </svg>
            Solana
          </div>
        </button>

        {/* Add Network (Static) */}
        <button className="inline-block py-4 px-4 text-sm font-medium text-center text-neutral-400 border-b-2 border-transparent hover:text-neutral-300 hover:border-neutral-400 rounded-t-lg">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Add Network
          </div>
        </button>
      </div>
    </div>
  );
};
