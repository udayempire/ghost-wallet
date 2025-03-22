import { Appbar } from "@/components/Appbar";
import { Password } from "@/components/Password";

export default function loginWallet() {

    return (
        <div>
            <Appbar />
            <div>
                <section
                    id="password"
                    className="md:h-screen flex flex-col gap-14"
                    style={{
                        background:
                            "linear-gradient(166deg, rgba(43, 39, 39, 1), rgba(0, 0, 0, 1))",
                    }}
                >
                    <div className="flex justify-center items-center h-screen">
                        <Password />
                    </div>
                </section>
            </div>



        </div>
    )
}