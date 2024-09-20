import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import Carousel from "@/components/Caresoul";
import Icons from "@/components/Icons";
import ShopByBikes from "@/components/ShopByBikes";
import TopBox from "@/components/TopBox";
import Lights from "@/components/Lights";
import Blog from "@/components/Blog";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
  <>
    <Navbar />
    <Carousel />
    <Icons />
    <ShopByBikes />
    <TopBox />
    <Lights />
    <Blog />
    <CustomerReviews />
    <Footer />
  </>
  );
}
