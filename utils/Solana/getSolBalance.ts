import {
    clusterApiUrl,
    Connection,
    PublicKey,
    LAMPORTS_PER_SOL,
} from "@solana/web3.js";

export  async function getSolBalance() {
    try{
        const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
        const wallet = new PublicKey("7EcDhSYGxXyscszYEp35KHN8vvw3svAuLKTzXwCFLtV");
        const balance = await connection.getBalance(wallet);
        const balanceInSol = balance / LAMPORTS_PER_SOL;
        return balanceInSol;
    }catch(e){
        console.error(e);
        console.log("cannot retrieve the balance of this user")
        return 0;
    }
}
