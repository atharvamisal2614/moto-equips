import Image from "next/image";
import { PiHeadlightsFill } from "react-icons/pi";
import ShopNow from "./ShopNow";
function Lights(){
    return(
        <section className="text-gray-600 body-font py-24">
        <div className="flex items-center justify-center space-x-4">
  <PiHeadlightsFill className="text-7xl text-gray-700"/> 
  <h1 className="font-playfair text-4xl font-bold text-gray-700 tracking-widerst">SHOP OUR TOP LIGHTS</h1>
</div>

  <div className="container px-3 py-3 mx-auto">
    <div className="flex flex-wrap -m-4 ">
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidden ">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block"  src="/2led.png"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">TWO LED LIGHTS</h2>
          <p className="mt-1 text-3xl">₹6599.00</p>
        </div>
        
        <ShopNow />
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block"  src="/3led.png"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">THREE LED LIGHTS</h2>
          <p className="mt-1 text-3xl">₹8599.00</p>
        </div>
         <ShopNow />
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block"  src="/benzlight.png"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">BENZ LIGHTS</h2>
          <p className="mt-1 text-3xl">₹7599.00</p>
        </div>
         <ShopNow />
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block"  src="/singlelight.png"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">SINGLE LIGHT</h2>
          <p className="mt-1 text-3xl">₹9999.00</p>
        </div>
         <ShopNow />
      </div>      
      <button className="flex mx-auto mt-16 text-white bg-gray-700 hover:bg-gray-800 border-0 py-2 px-8 focus:outline-none rounded text-lg">
          Explore More
        </button>
    </div>
  </div>
</section>
    )
}
export default Lights;