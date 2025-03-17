interface keyPairProps{
    privateKey:string,
    publicKey:string,
}
export const KeyPairCard = ({privateKey,publicKey}:keyPairProps) => {
  return (
    <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700/30 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Solana Wallet</h2>
          <div className="flex items-center">
            <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full mr-2">
              Active
            </div>
            <span className="text-neutral-400 text-sm">Main Account</span>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 flex">
          <button className="flex items-center justify-center bg-neutral-700 hover:bg-neutral-600 rounded-lg p-2 mr-2 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
              <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"></path>
            </svg>
          </button>
          <button className="flex items-center justify-center bg-neutral-700 hover:bg-neutral-600 rounded-lg p-2 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-neutral-700/30 rounded-lg p-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div>
            <p className="text-sm text-neutral-400 mb-1">Public Key</p>
            <div className="flex items-center">
              <p className="font-mono text-sm text-white">
                {publicKey}
              </p>
              <button className="ml-2 text-indigo-400 hover:text-indigo-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-700/30 rounded-lg p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div>
            <p className="text-sm text-neutral-400 mb-1">
              Private Key (Hidden)
            </p>
            <div className="flex items-center">
              <p className="font-mono text-sm text-white">{privateKey}</p>
              <button className="ml-2 text-indigo-400 hover:text-indigo-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
