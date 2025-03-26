import Link from "next/link"
export const Footer=()=>{
    return (
        <div className="flex flex-col "> 
        <div className="border-t border-neutral-400 p-4 flex flex-col md:flex-row items-center justify-between ">
        <div className="mb-4 md:mb-0">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-yellow-500">Ghost Wallet</span>
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center space-x-6">
          <Link href="#" className="text-sm text-neutral-300 hover:text-white transition-colors duration-300">Terms</Link>
          <Link href="#" className="text-sm text-neutral-300 hover:text-white transition-colors duration-300">Privacy</Link>
          <Link href="#" className="text-sm text-neutral-300 hover:text-white transition-colors duration-300">Cookies</Link>
          <Link href="#FAQs" className="text-sm text-neutral-300 hover:text-white transition-colors duration-300">FAQs</Link>
        </div>
        
        <Link href="https://udayempire.tech" className="mt-4 md:mt-0 text-sm text-neutral-300 hover:text-white transition-colors duration-300">
          © 2025 Developed by UE
        </Link>
      </div>
        </div>
    )
}