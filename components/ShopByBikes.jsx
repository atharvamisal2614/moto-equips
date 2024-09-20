import { MdOutlineDirectionsBike } from "react-icons/md";
import Image from "next/image";
import ShopNow from "./ShopNow";

function ShopByBikes(){
    return(
  <>
        <section className="text-gray-700 body-font py-20">
        <div className="flex items-center justify-center space-x-4">
  <MdOutlineDirectionsBike className="text-7xl text-gray-700"/> 
  <h1 className="text-4xl font-bold text-gray-700 tracking-widerst font-playfair">SHOP BY BIKES</h1>
</div>

  <div className="container px-5 py-3 mx-auto">
    <div className="flex flex-wrap -m-4 ">
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidden ">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block"  src="/bikes/benelli.png"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">BENELLI</h2>
          <p className="mt-1 text-3xl">₹22,599.00</p>
        </div>
        
        <ShopNow />
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block"  src="/bikes/bmw.webp"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">BMW</h2>
          <p className="mt-1 text-3xl">₹21,599.00</p>
        </div>
         <ShopNow />
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block"  src="/bikes/harley.jpg"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">HARLEY DEVIDSON</h2>
          <p className="mt-1 text-3xl">₹17,899.00</p>
        </div>
         <ShopNow />
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block"  src="/bikes/hero.webp"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">HERO</h2>
          <p className="mt-1 text-3xl">₹20,000.00</p>
        </div>
         <ShopNow />
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block"  src="/bikes/honda.webp"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">HONDA</h2>
          <p className="mt-1 text-3xl">₹24,349.00</p>
        </div>
         <ShopNow />
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block"  src="/bikes/jawa.jpg"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">JAWA</h2>
          <p className="mt-1 text-3xl">₹25,299.00</p>
        </div>
         <ShopNow />
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block"  src="/bikes/kawasaki.webp"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">KAWASAKI</h2>
          <p className="mt-1 text-3xl">₹23,599.00</p>
        </div>
         <ShopNow />
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block"  src="/bikes/ktm.webp"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">KTM</h2>
          <p className="mt-1 text-3xl">₹24,799.00</p>
        </div>
         <ShopNow />
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block"  src="/bikes/mahindra.jpeg"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">MAHINDRA</h2>
          <p className="mt-1 text-3xl">₹26,599.00</p>
        </div>
         <ShopNow />
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/bikes/royalenfield.webp"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">ROYAL ENFIELD</h2>
          <p className="mt-1 text-3xl">₹23,199.00</p>
          
        <ShopNow />
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/bikes/suzuki.webp"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">SUZUKI</h2>
          <p className="mt-1 text-3xl">₹22,299.00</p>
          
        <ShopNow />
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/bikes/triumph.jpg"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">TRIUMPH</h2>
          <p className="mt-1 text-3xl">₹25,999.00</p>
        </div>
        
        <ShopNow />
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/bikes/tvs.webp"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">TVS</h2>
          <p className="mt-1 text-3xl">₹22,199.00</p>
        </div>
         <ShopNow />
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/bikes/yamaha.jpg"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">YAMAHA</h2>
          <p className="mt-1 text-3xl">₹26,199.00</p>
        </div>
        
        <ShopNow />
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/bikes/yezdi.jpg"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">YEZDI</h2>
          <p className="mt-1 text-3xl">₹20,599.00</p>
        </div>
        
        <ShopNow />
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a className="block relative  rounded overflow-hidde">
          <Image width={1000} height={1000} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/bikes/hasqvarna.jpg"/>
        </a>
        <div className="mt-4">
          
          <h2 className="text-gray-900 title-font text-lg font-medium tracking-wider">HASQVARNA</h2>
          <p className="mt-1 text-3xl">₹23,899.00</p>
        </div>
        
        <ShopNow />
      </div>
    </div>
  </div>
</section>
</>
    )

}
export default ShopByBikes;