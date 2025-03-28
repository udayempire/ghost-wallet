"use client";
import { Appbar } from "@/components/Appbar";
import { KeyPairCard } from "@/components/KeyPairCard";
import { NetworkTab } from "@/components/NetworkTab";
import { decryptData } from "@/utils/crypto";
import { getPasswordCookie } from "@/utils/passwordCookie";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios"
import { CheckBalance } from "@/components/CheckBalance";

export default function ClientCheckAccount() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const network = searchParams.get("network") || "";
    const formatedNetwork = network.charAt(0).toUpperCase() + network.slice(1);

    //for solana network
    if (network == "solana") {
        return (
            <div>
                <Appbar />
                <div>
                    <section
                        id="walletDashboard"
                        className="h-screen flex flex-col gap-4 "
                        style={{
                            background:
                                "linear-gradient(166deg, rgba(43, 39, 39, 1), rgba(0, 0, 0, 1))",
                        }}
                    >
                        <NetworkTab currentTab={network} />
                        <div>
                            <div>
                                <div className="flex justify-center items-center p-4 mt-10">
                                    <CheckBalance />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <Appbar />
                <div>
                    <section
                        id="walletDashboard"
                        className="md:h-screen flex flex-col gap-14"
                        style={{
                            background:
                                "linear-gradient(166deg, rgba(43, 39, 39, 1), rgba(0, 0, 0, 1))",
                        }}
                    >
                        <NetworkTab currentTab={network} />
                        <div>
                            <div>
                                <div className=" flex justify-center">
                                    <div className="w-full md:max-w-4xl">
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
}
