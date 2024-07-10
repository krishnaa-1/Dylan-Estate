import NAVBARS from "../components/NAVBARS";
import PropertyContainer from "../components/PropertyContainer";
import "./BuyersrentersDashboard1.css";

const BuyersrentersDashboard1 = () => {
  return (
    <div className="buyersrenters-dashboard">
      <main className="nav-bars-parent">
        <NAVBARS />
        <section className="property-container-wrapper">
          <PropertyContainer />
        </section>
      </main>
    </div>
  );
};

export default BuyersrentersDashboard1;
