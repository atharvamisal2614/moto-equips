import Image from "next/image"
function Footer(){
return(
    <>
        <footer className="bg-gray-700 body-font">
  <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-50">
        <Image src='/bg-remove.png' alt="logo" width={80} height={80} />
        <span className="ml-3 text-xl font-playfair text-white">Moto Equips</span>
      </a>
      <p className="mt-2 text-sm text-gray-100">We are best bike accesseries brand.</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center space-y-5">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">ACCESSORIES</h2>
        <nav className="list-none mb-10 cursor-pointer">
          <li>
            <a className="text-gray-100 hover:text-gray-300">Helmet</a>
          </li>
          <li>
            <a className="text-gray-100 hover:text-gray-300">Cover</a>
          </li>
          <li>
            <a className="text-gray-100 hover:text-gray-300">Head Lights</a>
          </li>
          <li>
            <a className="text-gray-100 hover:text-gray-300">Mirrors</a>
          </li>
          <li>
            <a className="text-gray-100 hover:text-gray-300">Know More...</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">RIDING GEARS</h2>
        <nav className="list-none mb-10 cursor-pointer">
          <li>
            <a className="text-gray-100 hover:text-gray-300">Hub gear</a>
          </li>
          <li>
            <a className="text-gray-100 hover:text-gray-300">Stepless hub gear</a>
          </li>
          <li>
            <a className="text-gray-100 hover:text-gray-300">Derailleur gear</a>
          </li>
          <li>
            <a className="text-gray-100 hover:text-gray-300">Riding Jackets</a>
          </li>
          <li>
            <a className="text-gray-100 hover:text-gray-300">Know More...</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">LUGGAGE</h2>
        <nav className="list-none mb-10 cursor-pointer">
          <li>
            <a className="text-gray-100 hover:text-gray-300">Saddle Bags</a>
          </li>
          <li>
            <a className="text-gray-100 hover:text-gray-300">Tank Bags</a>
          </li>
          <li>
            <a className="text-gray-100 hover:text-gray-300">Frame Bags</a>
          </li>
          <li>
            <a className="text-gray-100 hover:text-gray-300">Thigh Bag</a>
          </li>
          <li>
            <a className="text-gray-100 hover:text-gray-300">Know More...</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-50 tracking-widest text-sm mb-3">HELMET</h2>
        <nav className="list-none mb-10 cursor-pointer">
          <li>
            <a className="text-gray-100 hover:text-gray-300">Full Face Helmets</a>
          </li>
          <li>
            <a className="text-gray-100 hover:text-gray-300">Open Face Helmets</a>
          </li>
          <li>
            <a className="text-gray-100 hover:text-gray-300">Modular Helmets</a>
          </li>
          <li>
            <a className="text-gray-100 hover:text-gray-300">Offroad Helmets</a>
          </li>
          <li>
            <a className="text-gray-100 hover:text-gray-300">Know More...</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-700">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-100 text-sm text-center sm:text-left">© 2024 Moto Equips —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-100 ml-1" target="_blank">@knyttneve</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-100">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-100">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-100">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-100">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    </>
)
}
export default Footer