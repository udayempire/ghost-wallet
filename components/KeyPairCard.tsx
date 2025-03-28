import { useState } from "react";

interface keyPairProps {
  privateKey: string;
  publicKey: string;
  walletName: string;
  balance: number | null | string;
}

export const KeyPairCard = ({
  privateKey,
  publicKey,
  walletName,
  balance,
}: keyPairProps) => {
  const [isPrivateKeyVisible, setIsPrivateKeyVisible] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = async (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 3000);
      } catch (error) {
        console.error(error);
        setCopySuccess("Failed to copy")
        setTimeout(() => setCopySuccess(""), 5000);
      }
    } else {
      try{
        // Fallback method for unsupported browsers (especially on mobile)
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy"); // Deprecated, but works on older browsers
        document.body.removeChild(textArea);
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 3000);
      }catch(error){
        console.error(error);
        setCopySuccess("Failed to copy")
        setTimeout(() => setCopySuccess(""), 5000);
      }
    }
  }

  return (
    <div className="bg-zinc-800 rounded-xl p-6 border border-neutral-700/30 mb-6 max-w-full md:max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          <h2 className="text-3xl text-zinc-200 font-bold mb-2 sm:mb-0">
            {walletName} Wallet
          </h2>
          <div className="flex items-center">
            <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full mr-2">
              Active
            </div>
            <span className="text-neutral-400 text-sm">Main Account</span>
          </div>
        </div>
      </div>

      {/* Balance */}
      <div className="mb-10 text-zinc-200 flex flex-col items-center gap-2">
        <p className="text-md md:text-lg text-neutral-400">Current Balance</p>
        <h1 className="text-4xl md:text-5xl text-center text-zinc-200">
          {balance} {walletName.slice(0, 3).toUpperCase()}
        </h1>
      </div>

      {/* Public Key */}
      <div className="bg-neutral-700/30 rounded-lg p-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="w-full">
            <p className="text-sm text-neutral-400 mb-1">Public Key</p>
            <div className="flex items-center justify-between break-all">
              <p className="font-mono text-md text-white">{publicKey}</p>
              <button
                onClick={() => copyToClipboard(publicKey)}
                className="ml-2 text-indigo-400 hover:text-indigo-300 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
              </button>
            </div>
            {copySuccess && (
              <p className="text-sm font-semibold text-green-400 mt-1">{copySuccess}</p>
            )}
          </div>
        </div>
      </div>

      {/* Private Key */}
      <div className="bg-neutral-700/30 rounded-lg p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="w-full">
            <p className="text-sm text-neutral-400 mb-1">Private Key (Hidden)</p>
            <div className="flex items-center justify-between break-all">
              {!isPrivateKeyVisible ? (
                <p className="font-mono text-md text-white">
                  ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
                </p>
              ) : (
                <p className="font-mono text-md text-white">{privateKey}</p>
              )}
              <button
                onClick={() => setIsPrivateKeyVisible(!isPrivateKeyVisible)}
                className="ml-2 text-indigo-400 hover:text-indigo-300 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


