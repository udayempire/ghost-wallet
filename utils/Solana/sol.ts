import { generateMnemonic,mnemonicToSeedSync } from 'bip39';
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import bs58 from 'bs58'


export const createWallet  = (accountIndex:number, mnemonic?:string)=>{
    //generate or use exisiting menemonic
    const usedMnemonic = mnemonic || generateMnemonic();
    const seed =  mnemonicToSeedSync(usedMnemonic)

    //Dynamic Derivation Path
    const path = `m/44'/501'/1'/${accountIndex}'/0'` //Derivation Path
    const derivedSeed =  derivePath(path,seed.toString('hex')).key; //32 byte BIP44(as selected in path) derived private key
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey; //generating Uint8Array(64) where first 32 bytes are publickey and rest is private key   
    const keyPair = Keypair.fromSecretKey(secret);

    //storing in localstorage
    localStorage.setItem(`mnemonic-${accountIndex}`, usedMnemonic);
    localStorage.setItem(`secretKey-${accountIndex}`,bs58.encode(secret));
    return {
        mnemonic: usedMnemonic,
        publicKey: keyPair.publicKey.toBase58(),
        keyPair
    }
}

export const restoreWallet = (accountIndex:number)=>{
    const encoded =localStorage.getItem(`secretKey-${accountIndex}`);
    if(!encoded){
        console.error("No account Found");
        return null
    }
    const secretKey = bs58.decode(encoded);
    const keypair = Keypair.fromSecretKey(secretKey);
    return {
        publicKey: keypair.publicKey.toBase58(),
        keypair,
    }
}
