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
        if (!password) {
            alert("please enter a password");
            return
        }
        try {
            decryptData(walletData, password);
            setPasswordCookie(password)
            router.push("/walletDashboard");
        } catch (e) {
            console.error(e);
            alert("Incorrect Password");
        }
    }
    return (
        <div className="flex ">
            <Card className="w-[350px] bg-zinc-800 border-neutral-700/30">
                <CardHeader>
                    <CardTitle className="text-zinc-200">Enter The Password</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password" className="text-zinc-200">Password</Label>
                                <Input onChange={(e) => setPassword(e.target.value)} id="password" type="password" className="text-zinc-200 border-neutral-700/30" placeholder="Enter your Password" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button className="cursor-pointer" onClick={() => checkPassword()}>Unlock</Button>
                </CardFooter>
            </Card>
        </div>
    )
}