export const ExampleSeed = () => {
  return (
    <div className=" relative">
      <div className="relative z-10 bg-neutral-800 p-6 rounded-xl shadow-2xl border border-neutral-700 transform hover:-translate-y-2 transition-transform duration-300">
        <div className="absolute -top-3 -left-3 w-20 h-20 bg-blue-500 rounded-lg -z-10 opacity-50 blur-lg"></div>
        <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-zinc-500 rounded-lg -z-10 opacity-50 blur-lg"></div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-zinc-300">
            Multi-Chain Wallet
          </h3>
          <div className="flex space-x-2">
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="p-4 bg-neutral-700 rounded-lg">
            <p className="text-sm text-gray-300 mb-1">Example Mnemonic Seed Phrase</p>
            <p className="font-mono text-xs sm:text-sm bg-neutral-800 p-2 rounded border border-neutral-600 text-white">
              debate dice liberty sword journey cube rapid guard tackle swim
              cancel strategy
            </p>
          </div>
          <div className="p-4 bg-neutral-700 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-gray-300">Connected Chains</p>
              <div className="flex space-x-1">
                <div className="w-4 h-4 rounded-full bg-[#00BFA5]"></div>
                <div className="w-4 h-4 rounded-full bg-[#3949AB]"></div>
                <div className="w-4 h-4 rounded-full bg-[#FF6F00]"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2 p-2 bg-neutral-800 rounded border border-neutral-600">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-white">Ethereum</span>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-neutral-800 rounded border border-neutral-600">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span className="text-xs text-white">Solana</span>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-zinc-200 cursor-pointer hover:bg-zinc-300 text-black py-3 px-6 rounded transition-colors duration-300 flex justify-center items-center space-x-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <span>Access Your Wallet</span>
        </button>
      </div>

      {/* <!-- Decorative elements --> */}
      <div className="absolute top-1/12 -right-4 w-32 h-32 bg-orange-600 rounded-full opacity-20 blur-sm"></div>
      <div className="absolute bottom-1/12 -left-4 w-60 h-48 bg-yellow-200 rounded-full opacity-20 blur-sm"></div>
    </div>
  );
};
