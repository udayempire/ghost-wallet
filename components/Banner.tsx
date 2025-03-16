export const Banner = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-neutral-800 bg-opacity-70 backdrop-blur-lg rounded-xl border border-neutral-700">
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-[#FF6F00]">2+</p>
        <p className="text-gray-300 text-sm">Supported Chains</p>
      </div>
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-[#3949AB]">100%</p>
        <p className="text-gray-300 text-sm">Non-custodial</p>
      </div>
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-[#00BFA5]">512-bit</p>
        <p className="text-gray-300 text-sm">Encryption</p>
      </div>
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold text-[#FF6F00]">24/7</p>
        <p className="text-gray-300 text-sm">Wallet Access</p>
      </div>
    </div>
  );
};
