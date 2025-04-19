import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Connection, LAMPORTS_PER_SOL, clusterApiUrl, PublicKey } from "@solana/web3.js";

const bodySchema = z.object({
    publicKey: z.string().nonempty(),
    amount: z.number(),
    rpcUrl: z.string().optional()
})
export async function POST(request: NextRequest) {
    const json = await request.json();
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
        return NextResponse.json({
            error: "Invalid request  body"
        }, {
            status: 400
        })
    }
    const { rpcUrl, publicKey, amount } = parsed.data;
    try {
        if (!publicKey) {
            return NextResponse.json(
                { error: 'Public key is required' },
                { status: 400 }
            )
        }
        //custom rpc url if provided
        const endpoint = rpcUrl && typeof rpcUrl === "string" && rpcUrl.trim() !== '' ? rpcUrl : clusterApiUrl('devnet');
        const connection = new Connection(endpoint, 'confirmed');
        const pubKey = new PublicKey(publicKey); //validates the publickey genuinity

        const airdropSignature = await connection.requestAirdrop(
            pubKey,
            amount*LAMPORTS_PER_SOL
        )
        const latestBlockhash = await connection.getLatestBlockhash();
        await connection.confirmTransaction({
            blockhash: latestBlockhash.blockhash,
            lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
            signature: airdropSignature,
        });
        return NextResponse.json(
            {
                success: true, signature: airdropSignature, rpcUrl: endpoint
            }
        )
    } catch (err) {
        return NextResponse.json(
            { error: 'Airdrop failed', details: err },
            { status: 500 }
        );
    }
}