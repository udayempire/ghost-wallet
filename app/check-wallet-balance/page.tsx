import { Suspense } from "react";
import ClientCheckAccount from "./ClientCheckAccount";

export default function checkWalletBalance() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ClientCheckAccount />
        </Suspense>
    )

}