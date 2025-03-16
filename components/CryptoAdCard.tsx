import Link from "next/link"
interface cryptoAdCardProps{
    name:string
    usersCount:string,
    highlight1:string,
    highlight2:string,
    highlight3:string,
    buttonStyle:string
}
export const CryptoAdCard=({name,usersCount,highlight1,highlight2,highlight3,buttonStyle}:cryptoAdCardProps)=>{
    return <div className="group relative">
    <div className="bg-neutral-800 border-2 border-neutral-700 group-hover:border-blue-500 rounded-xl overflow-hidden transition-all duration-300">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-full p-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M12 2L4 12.09L12 16L20 12.09L12 2Z"
                fill="currentColor"
              ></path>
              <path
                d="M12 16V22L20 12.09L12 16Z"
                fill="currentColor"
                fillOpacity="0.6"
              ></path>
              <path
                d="M12 16V22L4 12.09L12 16Z"
                fill="currentColor"
                fillOpacity="0.6"
              ></path>
            </svg>
          </div>
          {/* change below to current prices */}
          <span className="text-sm text-red-400 bg-neutral-700/50 px-3 py-1 rounded-full cursor-defa">
            {usersCount}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-white">{name}</h3>
        <div className="mb-4 text-neutral-300 space-y-2">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-400 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p>{highlight1}</p>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-400 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p>{highlight2}</p>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-400 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p>{highlight3}</p>
          </div>
        </div>
        <Link
          href={`/seed-phrase?network=${name.toLowerCase()}`}
          className={buttonStyle}
        >
          <span>Create {name} Wallet</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  </div>
}