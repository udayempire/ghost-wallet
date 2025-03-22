import Link from "next/link";
export const Appbar = () => {
  return (
    <div>
      <Link href={"/"} className="cursor-pointer flex justify-center items-center text-2xl bg-neutral-900 text-white h-16">
        Ghost Wallet
      </Link>
    </div>
  );
};
