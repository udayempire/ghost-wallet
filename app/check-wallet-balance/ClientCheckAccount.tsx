"use client";
import { Appbar } from "@/components/Appbar";
import { NetworkTab } from "@/components/NetworkTab";
import { useSearchParams } from "next/navigation";
import { CheckBalance } from "@/components/CheckBalance";

export default function ClientCheckAccount() {
    const searchParams = useSearchParams();
    const network = searchParams.get("network") || "";
    return (
        <div>
            <Appbar />
            <div>
                <section
                    id="checkCryptoBalance"
                    className="md:h-screen flex flex-col gap-14"
                    style={{
                        background:
                            "linear-gradient(166deg, rgba(43, 39, 39, 1), rgba(0, 0, 0, 1))",
                    }}
                >
                    <NetworkTab currentTab={network} />
                    <div>
                        <div>
                            <div className=" flex justify-center w-full">
                                <div className="flex justify-center items-center px-4  max-w-4xl">
                                    <CheckBalance />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

