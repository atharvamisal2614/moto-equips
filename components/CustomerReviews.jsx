import Image from "next/image";
import { FaCommentDots } from "react-icons/fa";
import { RiStarFill } from "react-icons/ri";

function CustomerReviews() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center justify-center space-x-4">
          <FaCommentDots className="text-7xl text-gray-700" />
          <h1 className="font-playfair text-4xl font-bold text-gray-700 tracking-wider">
            Hear from our Customers
          </h1>
        </div>

        <div className="flex flex-wrap -m-4 mt-20">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
                I recently purchased a set of Kawasaki crash guards and
                saddlebags from this site, and I couldn't be more impressed! The
                quality is outstanding, and the installation was super easy,
                even for someone like me who's not particularly handy. The crash
                guards have already saved my bike once during a low-speed fall,
                and the saddlebags are perfect for weekend trips. Highly
                recommend this site for any bike accessories you need!
              </p>

              {/* 5 Star Rating */}
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, index) => (
                  <RiStarFill key={index} className="text-xl" />
                ))}
              </div>

              <a className="inline-flex items-center">
                {/* <Image alt="testimonial" src="/mahindra.jpg" width={1000} height={1000} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/> */}
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Holden Caulfield
                  </span>
                  <span className="text-gray-500 text-sm">Bikes Lover</span>
                </span>
              </a>
            </div>
          </div>

          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
                I ordered a BMW top case and a touring windshield for my
                long-distance trips, and the difference is night and day. The
                top case is spacious and fits perfectly, with a sleek design
                that complements my bike's look. The windshield has greatly
                reduced wind noise and fatigue on those long rides. Amazing
                customer service too—my order arrived ahead of schedule!
                Definitely my go-to for all future bike accessory purchases.
              </p>

              {/* 5 Star Rating */}
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, index) => (
                  <RiStarFill key={index} className="text-xl" />
                ))}
              </div>

              <a className="inline-flex items-center">
                {/* <Image alt="testimonial" src="/mahindra.jpg" width={1000} height={1000} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/> */}
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Alper Kamu
                  </span>
                  <span className="text-gray-500 text-sm">Biker and Traveller</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
