"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export const CheckBalance = () => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const network = searchParams.get("network") || "";
    const formatedNetwork = network.charAt(0).toUpperCase() + network.slice(1);
    const [response, setResponse] = useState<string | number>()
    const [walletAddress, setWalletAddress] = useState("")
    const [currentPath, setCurrentPath] = useState(pathName);

    useEffect(() => {
        setCurrentPath(network);
        setWalletAddress("")
        setResponse("")
    }, [network, currentPath])


    const fetchBalance = async () => {
        if (!walletAddress) {
            setResponse("Empty Input")
            return;
        }
        try {
            const apiResponse = await axios.get(`api/get-balance?network=${network}&publicKey=${walletAddress}`);
            const data = apiResponse.data;
            setResponse(data.balance);
        } catch (err) {
            console.error(err)
            setResponse("Incorrect walletAddress")
        }
    }
    console.log("response:", response)

    return (
        <div>
            <h1 className=" md:w-4xl text-zinc-300 font-semibold text-3xl md:text-5xl text-center">Check your <span className="text-purple-500">{formatedNetwork}</span> Wallet Balance</h1>
            <div className="mt-20 flex flex-col gap-5">
                <h2 className="text-zinc-200 font-semibold text-xl">Enter your Wallet Address</h2>
                <Input className="border-2 border-zinc-600 text-zinc-100" placeholder="Enter wallet address"
                    onChange={(e) => { setWalletAddress(e.target.value) }} value={walletAddress}
                />
                <Button onClick={() => { fetchBalance() }} className="bg-green-400 text-neutral-700 hover:bg-green-500  font-semibold cursor-pointer">Show Balance</Button>
                {response !== "" && (
                    <div className="mt-8 p-4 bg-zinc-200 rounded-sm font-medium text-md">
                        {/* if no wallet address given by user  */}
                        {response == "Empty Input" && <p className=" text-red-600">Please Enter the {formatedNetwork} Wallet Address !</p>}

                        {/* if incorrect  wallet Address  */}
                        {response == "Incorrect walletAddress" && <p className=" text-red-600">Invalid wallet address. Doublecheck the {formatedNetwork} address and the selected blockchain, and please try again.</p>}

                        {/* if Everything is correct  */}
                        {response !== "" && response !== "Empty Input" && response !== "Incorrect walletAddress" &&
                            <div className="flex justify-between items-center">
                                <span>Current Balance</span>
                                <span>{response} {network.slice(0, 3).toUpperCase()}</span>
                            </div>
                        }
                    </div>
                )}
            </div>

        </div>
    )
}