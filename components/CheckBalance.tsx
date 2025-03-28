"use client"
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CheckBalance = () => {
    return (
        <div>
            <h1 className="text-zinc-300 font-semibold text-5xl text-center">Check your <span className="text-purple-500">Solana</span> Wallet Balance</h1>
            <div className="mt-20 flex flex-col gap-4">
                <h2 className="text-zinc-200 font-semibold text-xl">Enter your Wallet Address</h2>
                <Input className="border-2 border-zinc-600 text-zinc-100" placeholder="Enter wallet address" />
                <Button className="bg-green-400 text-neutral-700 hover:bg-green-500  font-semibold cursor-pointer">Show Balance</Button>
            </div>
        </div>
    )
}