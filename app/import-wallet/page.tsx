"use client";
import ClientImport from "./ClientImport";
import { Suspense } from "react";
export default function ImportWallet() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ClientImport />
        </Suspense>
    );
}
