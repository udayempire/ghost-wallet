import { generateMnemonic } from "bip39";

export const getSeedPhrase = ()=>{
    const mnemonic = generateMnemonic();
    return mnemonic
}
