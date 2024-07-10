import NAVBARS from "../components/NAVBARS";
import PropertyDetails1 from "../components/PropertyDetails1";
import "./SellersPhotoDetails.css";

const SellersPhotoDetails = () => {
  return (
    <div className="sellers-photo-details">
      <NAVBARS />
      <section className="property-details3">
        <PropertyDetails1 />
      </section>
    </div>
  );
};

export default SellersPhotoDetails;
