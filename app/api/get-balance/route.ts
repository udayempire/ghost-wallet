import {
    clusterApiUrl,
    Connection,
    PublicKey,
    LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import { NextRequest,NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const { searchParams } = new URL(request.url);
    const publicKey = searchParams.get("publicKey");

    if(!publicKey){
        return NextResponse.json(
            {error: "Public Key is required"},
            { status:400 }
        );
    }
    try{
        const connection = new Connection(clusterApiUrl("mainnet-beta"),"confirmed");
        const wallet = new PublicKey(publicKey);
        const balance = await connection.getBalance(wallet);
        const balanceInSol = balance / LAMPORTS_PER_SOL;

        return NextResponse.json(
            {balance: balanceInSol},
            { status: 200 }
        )
    }catch(error){
        console.error("Error while fetching balance",error);
        return NextResponse.json(
            {error:"Failed to fetch Balance"},
            {status:500}
        )
    }
}