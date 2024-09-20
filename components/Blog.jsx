import Image from "next/image"
import { MdArticle } from "react-icons/md";
function Blog(){
    return(
        <section className="text-gray-700 body-font">
         <div className="flex items-center justify-center space-x-4">
  <MdArticle className="text-7xl text-gray-700"/> 
  <h1 className="font-playfair text-4xl font-bold text-gray-700 tracking-widerst">Blogs and Articles</h1>
</div>
  <div className="container px-5 py-14 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 hover:border-red-300 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" src="/bikes/kawasaki.webp" alt="blog" width={1000} height={1000}/>
          <div className="p-6">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">KAWASAKI</h1>
            <p className="leading-relaxed mb-3">Kawasaki accessories include high-performance exhausts, frame sliders, windshields, and custom seat options. Riders can also find protective gear, luggage systems, and other enhancements to make their ride more comfortable and functional, while still maintaining Kawasaki's signature sleek and aggressive look....</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-gray-800 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 hover:border-red-300 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" src="/bikes/bmw.webp" alt="blog" width={1000} height={1000}/>
          <div className="p-6">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">BMW</h1>
            <p className="leading-relaxed mb-3">BMW accessories are crafted with a focus on adventure, touring, and premium quality. BMW provides riders with advanced navigation tools, comfortable luggage systems, and specialized rider apparel designed for long-distance journeys. Additionally, BMW offers performance upgrades, including suspension systems and wind deflectors, ensuring that riders experience both luxury and practicality on every ride....</p>
            <div className="flex items-center flex-wrap">
              <a className="text-gray-800 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 hover:border-red-300  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image className=" w-full object-cover object-center" src="/bikes/yamaha.jpg" alt="blog" width={1000} height={1000}/>
          <div className="p-6">
            
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">YAMAHA</h1>
            <p className="leading-relaxed mb-3">Yamaha accessories are versatile, catering to sport, touring, and off-road enthusiasts alike. Yamaha offers a wide variety of products, such as performance exhausts, handlebar grips, protective guards, and custom bodywork. Whether you're looking to enhance performance or improve comfort, Yamaha's accessories provide both style and functionality for every type of rider....

.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-gray-800 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-gray-700 hover:bg-gray-800 border-0 py-2 px-8 focus:outline-none rounded text-lg">
          Explore More
        </button>
  </div>
</section>
    )
}
export default Blog