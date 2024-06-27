import Landing from "./landing";
import Products from "./products"
import BestProducts from "./best-products";
import WinterSale from "./winterSale";
import Subsceibe from "./subscribe";
import Testmonial from "./testmonial";
import Footer from "./footer";

export default function Home() {

    return(
        <div className="dark:bg-gray-900 overflow-hidden dark:text-gray-100 list-none">
            <Landing />
            <Products />
            <BestProducts />
            <WinterSale />
            <Subsceibe />
            <Products />
            <Testmonial />
            <Footer />
        </div>
    );
}