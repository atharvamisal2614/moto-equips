import Image from "next/image";
import ShopNow from "./ShopNow";

function Icons() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="text-center mb-20">
          <h1 className="font-playfair sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Your Ultimate Biking Destination
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
          Whether you are an avid cyclist or a weekend rider, our comprehensive range of bikes, accessories, and riding gear has everything you need for a perfect ride. From helmets and apparel to luggage for tours and spare parts, we offer high-quality products designed to enhance safety, comfort, and performance. Explore exclusive combos and trusted brands to elevate your biking experience. Get ready to ride with confidence and style!
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-gray-900 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {/* Block 1 */}
          <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
              <Image src="/bike-icon.jpg" alt="bikeicon" width={1000} height={1000} />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            Bikes
              </h2>
              <p className="leading-relaxed text-base">
              Explore our wide range of bikes, from mountain bikes to road cycles, designed for every adventure.
              </p>
             <ShopNow />
            </div>
          </div>

          {/* Block 2 */}
          <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
            <Image src="/accesseries.png" alt="bikeicon" width={1000} height={1000} />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              ACCESSORIES
              </h2>
              <p className="leading-relaxed text-base">
              Enhance your ride with essential accessories, from lights to locks, for safety and convenience.
              </p>
             <ShopNow />
            </div>
          </div>

          {/* Block 3 */}
          <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
            <Image src="/riding-gear.webp" alt="bikeicon" width={1000} height={1000} />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              RIDING GEARS
              </h2>
              <p className="leading-relaxed text-base">
              Stay protected and comfortable with our high-quality riding gear, including gloves, jackets, and boots.
              </p>
             <ShopNow />
            </div>
          </div>

          {/* Block 4 */}
          <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
            <Image src="/luggage-og.webp" alt="bikeicon" width={1000} height={1000} />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              LUGGAGE & TOURS
              </h2>
              <p className="leading-relaxed text-base">
              Travel with ease using our versatile luggage options, perfect for long tours and weekend trips.
              </p>
             <ShopNow />
            </div>
          </div>

          {/* Block 5 */}
          <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
            <Image src="/helmet.webp" alt="bikeicon" width={1000} height={1000} />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              HELMET
              </h2>
              <p className="leading-relaxed text-base">
              Choose from a variety of helmets, ensuring the best protection and style for every rider.
              </p>
             <ShopNow />
            </div>
          </div>

          <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
            <Image src="/combo.png" alt="bikeicon" width={1000} height={1000} />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              COMBOS
              </h2>
              <p className="leading-relaxed text-base">
              Get more value with our exclusive combos, bundling popular products at unbeatable prices.
              </p>
             <ShopNow />
            </div>
          </div>

          <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
            <Image src="/appearal.webp" alt="bikeicon" width={1000} height={1000} />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              APPAREL
              </h2>
              <p className="leading-relaxed text-base">
              Ride in style with our selection of apparel, offering comfort and performance for every biking adventure.
              </p>
             <ShopNow />
            </div>
          </div>

          <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
            <Image src="/parts.webp" alt="bikeicon" width={1000} height={1000} />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              PARTS
              </h2>
              <p className="leading-relaxed text-base">
              Find all the bike parts you need for maintenance, upgrades, or repairs, from trusted brands and suppliers.
              </p>
             <ShopNow />
            </div>
          </div>
        </div>
        <button className="flex mx-auto mt-16 text-white bg-gray-700 hover:bg-gray-800 border-0 py-2 px-8 focus:outline-none rounded text-lg">
          Explore More
        </button>
      </div>
    </section>
  );
}

export default Icons;
