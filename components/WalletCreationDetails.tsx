export const WalletCreationDetails = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-200 dark:text-white">
                    Create Your Wallet
                </h2>
                <p className="text-lg text-neutral-300 dark:text-neutral-300 max-w-3xl mx-auto">
                    Generate a secure crypto wallet across multiple blockchains with a
                    single seed phrase.
                </p>
            </div>

            {/* Wallet Creation Steps */}
            <div className="mb-20">
                <div className="flex flex-wrap mb-8">
                    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                        <div className="h-full bg-neutral-800 dark:bg-neutral-800 rounded-xl shadow-lg p-8 border-2 border-[#3949AB] dark:border-neutral-700 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-[#3949AB]"></div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-[#3949AB] bg-opacity-10 rounded-full flex items-center justify-center text-[#3949AB] font-bold text-xl">
                                    1
                                </div>
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                                    Step 1
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-neutral-200 dark:text-white">
                                Generate Seed Phrase
                            </h3>
                            <p className="text-neutral-300 mb-6">
                                Your seed phrase is the master key to all your blockchain accounts.
                                Keep it safe and never share it.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-[#00BFA5] mt-0.5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm text-neutral-200 dark:text-neutral-400">
                                        Choose between 12 or 24 words
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-[#00BFA5] mt-0.5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm text-neutral-200 dark:text-neutral-400">
                                        Generated completely locally
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-[#00BFA5] mt-0.5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm text-neutral-200 dark:text-neutral-400">
                                        BIP-39 compliant wordlist
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                        <div className="h-full bg-neutral-800 dark:bg-neutral-800 rounded-xl shadow-lg p-8 border-2 border-[#00BFA5] dark:border-neutral-700 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-[#00BFA5]"></div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-[#00BFA5] bg-opacity-10 rounded-full flex items-center justify-center text-[#00BFA5] font-bold text-xl">
                                    2
                                </div>
                                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs rounded-full">
                                    Step 2
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-neutral-200 dark:text-white">
                                Backup Your Seed
                            </h3>
                            <p className="text-neutral-300 dark:text-neutral-400 mb-6">
                                Securely backup your seed phrase offline. This is essential for
                                wallet recovery in the future.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-[#00BFA5] mt-0.5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm text-neutral-200 dark:text-neutral-400">
                                        Write on paper (recommended)
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-[#00BFA5] mt-0.5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm text-neutral-200 dark:text-neutral-400">
                                        Store in a secure location
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-[#00BFA5] mt-0.5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm text-neutral-200 dark:text-neutral-400">
                                        Never store digitally or take photos
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4">
                        <div className="h-full bg-neutral-800 dark:bg-neutral-800 rounded-xl shadow-lg p-8 border-2 border-[#FF6F00] dark:border-neutral-700 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-[#FF6F00]"></div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-[#FF6F00] bg-opacity-10 rounded-full flex items-center justify-center text-[#FF6F00] font-bold text-xl">
                                    3
                                </div>
                                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded-full">
                                    Step 3
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-neutral-200 dark:text-white">
                                Create Blockchain Accounts
                            </h3>
                            <p className="text-neutral-300 dark:text-neutral-400 mb-6">
                                Generate multiple accounts across different blockchains from your
                                single seed phrase.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-[#00BFA5] mt-0.5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm text-neutral-200 dark:text-neutral-400">
                                        Derive addresses for each blockchain
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-[#00BFA5] mt-0.5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm text-neutral-200 dark:text-neutral-400">
                                        Name and organize your accounts
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-[#00BFA5] mt-0.5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm text-neutral-200 dark:text-neutral-400">
                                        Create multiple addresses per chain
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}