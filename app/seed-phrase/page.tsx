"use client";

import { Suspense } from "react";
import ClientSeed from "./ClientSeed";

export default function SeedPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientSeed/>
    </Suspense>
  );
}
