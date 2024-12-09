import ArticleSimilar from "@/components/ArticleSimilar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import ThreeProduct from "@/components/ThreeProduct";

export default function Home() {
  return (
    <div >
      {/* <Navbar/> */}
      <Product/>
      <ArticleSimilar/>
      <ThreeProduct/>
      <Banner/>
      <Footer/>
      
    </div>
  );
}
