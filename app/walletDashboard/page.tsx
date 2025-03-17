"use client"
import { Appbar } from "@/components/Appbar";
import { KeyPairCard } from "@/components/KeyPairCard";
import { NetworkTab } from "@/components/NetworkTab";
import { decryptData } from "@/utils/crypto";
import { getPasswordCookie } from "@/utils/passwordCookie";
import { useEffect, useState } from "react";
export default function WalletDashBoard() {
  const [walletData,setWalletData]=useState<string>("")
  const password = getPasswordCookie() ;

  // Loading state for walletData
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem("walletData");
    if (data) {
      setWalletData(data);
    } else {
      console.warn("walletData is missing in localStorage");
    }
    setLoading(false); // Done loading
  }, []);

  // Show loading until walletData is fetched
  if (loading) {
    return <div>Loading wallet data...</div>;
  }

  // Check if walletData or password are missing
  if (!password) {
    console.error("Password Missing");
    return <div>Password Missing</div>;
  }
  if (!walletData){
    console.error("WalletDetails not found")
    return <div>Wallet Details Not found</div>
  }
  const decryptedData = decryptData(walletData ,"123456");

  return (
    <div>
      <Appbar />
      <div>
        <section
          id="walletDashboard"
          className="md:h-screen flex flex-col gap-14"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(29,40,42,1) 100%)",
          }}
        >
          <NetworkTab />
          <div>
            <div>
              <div className="lg:col-span-2">
                <KeyPairCard privateKey={decryptedData.wallets.ethWallet.privateKey} publicKey={decryptedData.wallets.ethWallet.address} />
                {/* <!-- Balance and actions -->
                <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700/30">
                  <h3 className="text-xl font-bold mb-4">
                    Balance &amp; Transactions
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                    <div className="bg-neutral-700/30 rounded-lg p-4 mb-4 sm:mb-0 sm:mr-4 flex-1">
                      <p className="text-sm text-neutral-400 mb-1">
                        SOL Balance
                      </p>
                      <p className="text-2xl font-bold">12.458 SOL</p>
                      <p className="text-sm text-neutral-400">
                        ≈ $1,245.80 USD
                      </p>
                    </div>
                    <div className="bg-neutral-700/30 rounded-lg p-4 flex-1">
                      <p className="text-sm text-neutral-400 mb-1">
                        SPL Tokens
                      </p>
                      <p className="text-2xl font-bold">7</p>
                      <p className="text-sm text-neutral-400">
                        View all tokens
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <button className="bg-indigo-600 hover:bg-indigo-700 rounded-lg p-3 text-center transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mx-auto mb-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"></path>
                      </svg>
                      <span className="text-sm">Send</span>
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 rounded-lg p-3 text-center transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mx-auto mb-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
                      </svg>
                      <span className="text-sm">Receive</span>
                    </button>
                    <button className="bg-neutral-700 hover:bg-neutral-600 rounded-lg p-3 text-center transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mx-auto mb-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                        <path
                          fillRule="evenodd"
                          d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-sm">Buy</span>
                    </button>
                    <button className="bg-neutral-700 hover:bg-neutral-600 rounded-lg p-3 text-center transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mx-auto mb-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-sm">Swap</span>
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
