
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDatilsCard from "../../components/ProductDatailsCard";
import './styles.css';
export default function ProductDetail(){
    return (
        <>
        <HeaderClient />
        <main>
          <section id="product-details-section" className="dsc-container">
            <ProductDatilsCard />
            <div className="dsc-btn-page-container">
                <ButtonPrimary />
                <ButtonInverse />
            </div>
          </section>
        </main>
      </>
    )
}