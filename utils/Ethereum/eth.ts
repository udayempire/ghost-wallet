import { Wallet, HDNodeWallet, Mnemonic } from "ethers";

interface createSolWalletProps {
  mnemonic: string;
}
export function createEthWallet({ mnemonic }: createSolWalletProps) {
  const phrase = Mnemonic.fromPhrase(mnemonic);

  const rootNode = HDNodeWallet.fromMnemonic(phrase);

  //deriving eth bip44 path manually
  const derivedNode = rootNode.derivePath(`44'/60'/0'/0/0`); //eth v6+ removed m/ as it is added automatically
  const privateKey = derivedNode.privateKey;
  const publicKey = derivedNode.publicKey;

  //Wallet from private key
  const wallet = new Wallet(privateKey);
  console.log(wallet);
  console.log("Private Key:", privateKey);
  console.log("Public Key:", publicKey);
  console.log("ethAddress:", wallet.address);

  return {
    mnemonic,
    address: wallet.address,
    wallet,
  };
}
