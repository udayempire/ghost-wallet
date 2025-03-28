"use client"
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { decryptData } from "@/utils/crypto";
import { setPasswordCookie } from "@/utils/passwordCookie";

export const Password = () => {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [walletData, setWalletData] = useState("");
    const [loading, setLoading] = useState(true);
    const [passwordFailed, setPasswordFailed] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem("walletData");
        if (data) {
            setWalletData(data);
        } else {
            console.warn("walletData is missing in localStorage");
        }
        setLoading(false); // Done loading
    }, []);
    // Show loading until walletData is fetched
    if (loading) {
        return <div>Loading wallet data...</div>;
    }
    function checkPassword() {
        try {
            decryptData(walletData, password);
            setPasswordCookie(password)
            router.push("/walletDashboard?network=ethereum");
        } catch (e) {
            console.error(e);
            setPasswordFailed(true)
        }
    }
    return (
        <div className="flex ">
            <Card className="md:w-sm bg-zinc-800 border-neutral-700/30">
                <h1 className="text-zinc-200 font-semibold flex justify-center text-xl">Welcome Back</h1>
                <CardHeader>
                    <CardTitle className="text-zinc-200 flex justify-center text-2xl">Enter The Password</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center">
                            <div className="flex flex-col space-y-1.5 gap-6 mt-4">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="password" className="text-zinc-200 text-lg">Password</Label>
                                    <Input onChange={(e) => setPassword(e.target.value)} id="password" type="password" className="text-zinc-200 border-neutral-700/30 h-10 border-2 text-md" placeholder="Enter your Password" />
                                </div>
                                {passwordFailed && (
                                    <div className="text-red-500 text-sm gap-1 flex flex-col">
                                        <p className="underline">Please Enter Correct Password</p>
                                        <p className="">Note: We can never recover your password as its saved only on your device.</p>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col space-y-1.5">
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button className="cursor-pointer w-full bg-zinc-200 text-zinc-800 hover:bg-zinc-300" onClick={() => checkPassword()}>Unlock</Button>
                </CardFooter>
            </Card>
        </div>
    )
}