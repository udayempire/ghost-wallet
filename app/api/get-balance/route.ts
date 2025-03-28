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
            try {
                //Validate Solana wallet address
                if (!PublicKey.isOnCurve(publicKey)) {
                    return NextResponse.json(
                        { error: "Invalid Solana Address" },
                        { status: 400 }
                    );
                }
                const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
                const wallet = new PublicKey(publicKey);
                const solBalance = await connection.getBalance(wallet);
                balance = solBalance / LAMPORTS_PER_SOL;
            } catch (err) {
                console.error(err);
                return NextResponse.json(
                    { error: "Failed to fetch Balance" },
                    { status: 500 }
                )
            }
        } else if (network.toLowerCase() == "ethereum") {
            //Validate Ethereum Wallet Address
            try {
                if (!ethers.isAddress(publicKey)) {
                    return NextResponse.json(
                        { error: "Invalid Ethereum wallet address" },
                        {status: 400}
                    )
                }
                const provider = new ethers.JsonRpcProvider('https://ethereum-rpc.publicnode.com');
                const ethBalance = await provider.getBalance(publicKey);
                console.log(ethBalance)
                balance = ethers.formatEther(ethBalance);
            }catch(err){
                console.error(err);
                return NextResponse.json(
                    { error: "Failed to fetch Balance" },
                    { status: 500 }
                )
            }
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
            { error: "Interval Server Error" },
            { status: 500 }
        );
    }
}