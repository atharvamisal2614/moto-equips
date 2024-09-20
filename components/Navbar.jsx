import Image from "next/image";
function Navbar(){
    return(
        <>
            

            <header className=" body-font bg-gray-700 md:sticky md:top-0 md:z-10">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="cursor-pointer flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src='/bg-remove.png' alt="logo" width={80} height={80} />
      <span className="font-playfair ml-3 text-xl text-white">Moto Equips</span>
    </a>
    <nav className=" cursor-pointer text-gray-100 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-semibold space-x-10">
      <a className="mr-5 hover:text-gray-300">BIKES</a>
      <a className="mr-5 hover:text-gray-300">ACCESSORIES</a>
      <a className="mr-5 hover:text-gray-300">RIDING GEARS</a>
      <a className="mr-5 hover:text-gray-300">LUGGAGE & TOURS</a>
      <a className="mr-5 hover:text-gray-300">HELMET</a>
      <a className="mr-5 hover:text-gray-300">COMBOS</a>
      <a className="mr-5 hover:text-gray-300">APPEARAL</a>
      <a className="mr-5 hover:text-gray-300">PARTS</a>
    </nav>
    <button className="text-gray-100 inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0 font-semibold">Get Started
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
        </>
    )
}
export default Navbar;