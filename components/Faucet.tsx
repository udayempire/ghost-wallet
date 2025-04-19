"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { useSearchParams, usePathname } from "next/navigation";
import { JSX, useState } from "react";
import axios from "axios";

export const Faucet = () => {
    const [publicKey, setPublicKey] = useState<string>('');
    const [amount, setAmount] = useState<number>();
    const [ rpcUrl, setRpcUrl ] = useState<string>();
    const [response, setResponse] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const requestAirdrop = async () => {
        if (!publicKey) {
            setResponse('Invalid Public Key');
            return;
        }
        if (!amount) {
            setResponse('Invalid Amount');
            return;
        }
        setLoading(true);
        setResponse('')
        try {
            const res = await axios.post('/api/airdrop', {
                publicKey,
                amount,
                rpcUrl
            });
            if (!res) {
                setResponse("an error occured");
                return;
            }
            setResponse(`Airdrop Successful`);
            return;
        } catch (err) {
            console.error(err);
            setResponse('Unexpected Error')
        } finally {
            setLoading(false)
        }
    }
    const statusComponents: Record<string, JSX.Element> = {
        "Invalid Public Key": <p className="text-red-800">Please enter a valid wallet address.</p>,
        "Invalid Amount": <p className="text-red-800">Enter a positive amount.</p>,
        "Amount exceeds maximum of 10 SOL": <p className="text-red-800">Max is 10 SOL per request.</p>,
        "Unexpected Error": <p className="text-red-800">You&apos;ve either reached your airdrop limit today or the airdrop faucet has run dry.</p>,
        "Airdrop Successful": <p className="text-green-700">Airdrop requested for {amount} SOL! Check your wallet.</p>
    };

    return (
        <div>
            <h1 className=" md:w-4xl text-zinc-300 font-semibold text-3xl md:text-5xl text-center">Airdrop Yourself<span className="text-purple-500"> Solana</span> Tokens</h1>
            <p className="text-center bg-yellow-600 text-zinc-100 rounded-md py-2 mt-8 ">Note:- This Tokens dont hold any value and are only used for developing version</p>
            <div className="mt-20 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h2 className="text-zinc-200 font-semibold text-xl">Enter your Wallet Address</h2>
                    <Input className="border-2 border-zinc-600 text-zinc-100" placeholder="Enter wallet address"
                        onChange={(e) => { setPublicKey(e.target.value) }} value={publicKey}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-zinc-200 font-semibold text-xl">Enter the amount</h2>
                    <Input className="border-2 border-zinc-600 text-zinc-100" placeholder="Enter Amount"
                        onChange={(e) => { setAmount(Number(e.target.value)) }} value={amount}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-zinc-200 font-semibold text-xl">Enter custom RPC URL (Optional)</h2>
                    <Input className="border-2 border-zinc-600 text-zinc-100" placeholder="You can enter your custom rpc url or leave it empty"
                        onChange={(e) => { setRpcUrl(e.target.value) }} value={rpcUrl}
                    />
                </div>
                <Button onClick={() => { requestAirdrop() }} className="bg-green-400 text-neutral-700 hover:bg-green-500  font-semibold cursor-pointer">{loading ? "Requesting..." : "Request Airdrop"}</Button>
                {loading && (
                    <div className="mt-4 p-4 bg-zinc-200 rounded-sm font-medium text-md">
                        <p className="text-yellow-600">Loading… Please wait!</p>
                    </div>
                )}
                {/* Response message */}
                {!loading && response && (
                    <div className="mt-4 p-4 bg-zinc-300 rounded-sm font-medium text-md">
                        {statusComponents[response] ?? null}
                    </div>
                )}
            </div>

        </div>
    )
}