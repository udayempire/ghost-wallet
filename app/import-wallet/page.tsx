"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { encryptData } from "@/utils/crypto";
import { setPasswordCookie } from "@/utils/passwordCookie";
import { createEthWallet } from "@/utils/Ethereum/eth";
import { createSolWallet } from "@/utils/Solana/sol";
import { useSearchParams } from "next/navigation";

export default function ImportWallet() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const network = searchParams.get("network") || "ethereum";
    // const formatedNetwork = network.charAt(0).toUpperCase() + network.slice(1);
    // Assuming a 12-word seed phrase.
    const [seedWords, setSeedWords] = useState(Array(12).fill(""));
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isImported, setIsImported] = useState(false); // user confirms seed phrase is correct

    interface WalletDataProps {
        mnemonic: string;
        password: string;
        wallets: Record<string, unknown>;
    }

    // Update a specific word in the array
    const handleWordChange = (index: number, value: string) => {
        const newSeedWords = [...seedWords];
        newSeedWords[index] = value;
        setSeedWords(newSeedWords);
    };

    const handleImport = () => {
        // Validate that every word is filled
        if (seedWords.some((word) => word.trim() === "")) {
            alert("Please fill in all seed words.");
            return;
        }
        // Validate password
        if (!password || !confirmPassword) {
            alert("Please enter and confirm your password.");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (!isImported) {
            alert("Please confirm that you've checked your seed phrase.");
            return;
        }

        // Join seed words to create the full seed phrase
        const seedPhrase = seedWords.join(" ");

        // You might decrypt wallet data or recreate wallet objects from the seed phrase.
        // For example, if your walletData is created like this:
        const walletData: WalletDataProps =
        {
            mnemonic: seedPhrase,
            password: password,
            wallets: {}
        };
        if (network == "solana") {
            walletData.wallets.solWallet = createSolWallet({ mnemonic: seedPhrase })
            walletData.wallets.ethWallet = createEthWallet({ mnemonic: seedPhrase })
        }
        if (network == "ethereum") {
            walletData.wallets.ethWallet = createEthWallet({ mnemonic: seedPhrase })
            walletData.wallets.solWallet = createSolWallet({ mnemonic: seedPhrase })
        }
        //Encrypting the walletData Object using the user's password as the key
        const encryptedData = encryptData(walletData, password);
        //saving the encrypted data in localStorage
        localStorage.setItem("walletData", encryptedData);
        //saving password
        setPasswordCookie(password)
        console.log("Encrypted wallet data saved in localStorage.");
        //Navigate to walletDashboard
        router.push(`/walletDashboard?network=${network}`);
    };

    return (
        <div
            style={{
                background:
                    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 50%, rgba(29,40,42,1) 100%)",
            }}
            className="min-h-screen flex items-center justify-center p-4"
        >
            <div className="w-full max-w-2xl mx-auto bg-neutral-800 rounded-xl p-8">
                <h2 className="text-3xl text-zinc-200 font-bold mb-4 text-center">
                    Import Your Wallet
                </h2>
                <p className="text-neutral-300 mb-6 text-center">
                    Enter your 12-word seed phrase below.
                </p>

                {/* Seed Phrase Input Boxes */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                    {seedWords.map((word, index) => (
                        <input
                            key={index}
                            type="text"
                            value={word}
                            onChange={(e) => handleWordChange(index, e.target.value)}
                            placeholder={`Word ${index + 1}`}
                            className="p-2 bg-neutral-700 border border-neutral-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    ))}
                </div>

                {/* Password Section */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-neutral-300 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-neutral-300 mb-1">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full bg-neutral-700 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="flex items-center mb-6">
                    <input
                        id="confirm-seed"
                        type="checkbox"
                        checked={isImported}
                        onChange={(e) => setIsImported(e.target.checked)}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-neutral-300 rounded"
                    />
                    <label htmlFor="confirm-seed" className="ml-2 text-sm text-neutral-300">
                        I have double-checked my seed phrase.
                    </label>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <Link
                        href="/"
                        className="inline-flex items-center px-4 py-2 border-2 border-neutral-400 rounded-lg text-neutral-300 hover:border-neutral-500"
                    >
                        Back
                    </Link>
                    <button
                        onClick={handleImport}
                        className="inline-flex items-center px-6 py-2 bg-indigo-600 rounded-lg text-white font-medium hover:bg-indigo-700 transition-colors"
                    >
                        Import Wallet
                    </button>
                </div>
            </div>
        </div>
    );
}
