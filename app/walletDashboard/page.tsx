import { Suspense } from "react";
import ClientWallet from "./ClientWallet";

export default function WalletDashBoard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientWallet/>
    </Suspense>
  )


}

