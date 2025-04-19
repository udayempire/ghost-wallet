import { Appbar } from "@/components/Appbar";
import { Faucet } from "@/components/Faucet";

export default function SolFaucet() {
    return (
        <div>
            <Appbar />
            <div>
                <section
                    id="Airdrop Sol"
                    className="h-screen flex flex-col gap-14"
                    style={{
                        background:
                            "linear-gradient(166deg, rgba(43, 39, 39, 1), rgba(0, 0, 0, 1))",
                    }}
                >
                <div>
                    <div>
                        <div className=" flex justify-center w-full mt-20">
                            <div className="flex justify-center items-center px-4  max-w-4xl">
                                <Faucet />
                            </div>
                        </div>
                    </div>
                </div>
                </section>


            </div>

        </div>
    )
}