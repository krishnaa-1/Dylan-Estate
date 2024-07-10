import NAVBARS from "../components/NAVBARS";
import PropertyDetails from "../components/PropertyDetails";
import "./SellersFlowPriceDetails.css";

const SellersFlowPriceDetails = () => {
  return (
    <div className="sellers-flow-price-details">
      <NAVBARS />
      <section className="frame-section">
        <PropertyDetails />
      </section>
    </div>
  );
};

export default SellersFlowPriceDetails;
