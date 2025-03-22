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
export const Password = () => {
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
                                <Input id="password" type="password" className="text-zinc-200 border-neutral-700/30" placeholder="Enter your Password" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button>Unlock</Button>
                </CardFooter>
            </Card>
        </div>
    )
}