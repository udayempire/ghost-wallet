import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
export const FAQs = () => {
    return (
        <div className=" flex">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="">
                    <AccordionTrigger>What is a seed phrase and why is it important?</AccordionTrigger>
                    <AccordionContent>
                        A seed phrase (also called a recovery phrase or mnemonic) is a series of 12 or 24 words that represents your private key in a human-readable format. Its extremely important because its the master key to all accounts derived from it. If you lose your seed phrase and cant access your wallet, you will permanently lose access to your funds. Always keep your seed phrase secure, private, and backed up in multiple safe locations.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>How does a multi-chain wallet work?</AccordionTrigger>
                    <AccordionContent>
                        A multi-chain wallet allows you to manage assets across different blockchains from a single interface. Using a single seed phrase, our wallet can derive different key pairs for various blockchains (Ethereum, Solana, etc.) using blockchain-specific derivation paths. This means you can access, send, and receive assets on multiple networks without needing separate wallets for each blockchain.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Is my private key stored on your servers?</AccordionTrigger>
                    <AccordionContent>
                        No, our wallet is non-custodial, which means your private keys and seed phrases never leave your device. All cryptographic operations happen locally in your browser, and we have no access to your funds or keys. This gives you full control over your crypto assets but also means you&apos;re responsible for securing your seed phrase.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Which of the blockhains do you use?</AccordionTrigger>
                    <AccordionContent>
                        Our wallet currently supports Solana and Ethereum we will add more later.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Which of the blockhains do you use?</AccordionTrigger>
                    <AccordionContent>
                        Our wallet currently supports Solana and Ethereum we will add more later.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>What happens if I lose my device?</AccordionTrigger>
                    <AccordionContent>
                        If you lose your device, you can recover full access to your wallet and funds using your backed-up seed phrase. Simply install the wallet on a new device and use the &quot;Import Existing Wallet&quot; option with your seed phrase. This will restore all your accounts across all supported blockchains. This is why properly backing up your seed phrase is so crucial.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>Are there any fees to use this wallet?</AccordionTrigger>
                    <AccordionContent>
                        The wallet itself is free to use. However, you will need to pay the standard network transaction fees (gas fees) for the blockchain you are using. These fees go directly to the network validators/miners and vary depending on network congestion. Our wallet provides options to customize these fees and shows estimated costs before you confirm any transaction.
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
    )
}