import {
    clusterApiUrl,
    Connection,
    PublicKey,
    LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import { NextRequest, NextResponse } from "next/server";
import { ethers } from 'ethers';
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const network = searchParams.get("network");
    const publicKey = searchParams.get("publicKey");
    
    if (!network || !publicKey) {
        return NextResponse.json(
            { error: "Chain and addresses are required" },
            { status: 400 },
        );
    }
    try {
        let balance;
        if (network.toLowerCase() == "solana") {
            const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
            const wallet = new PublicKey(publicKey);
            const solBalance = await connection.getBalance(wallet);
            balance = solBalance / LAMPORTS_PER_SOL;
        } else if (network.toLowerCase() == "ethereum") {
            const provider = new ethers.JsonRpcProvider('https://ethereum-rpc.publicnode.com');
            const ethBalance = await provider.getBalance(publicKey);
            console.log(ethBalance)
            balance = ethers.formatEther(ethBalance);
        } else {
            return NextResponse.json(
                { error: "Unsupported chain" },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { balance },
            { status: 200 }
        )
    } catch (error) {
        console.error("Error while fetching data", error);
        return NextResponse.json(
            { error: "Failed to fetch balance" },
            { status: 500 }
        );
    }
}