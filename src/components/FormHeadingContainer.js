import PropTypes from "prop-types";
import "./FormHeadingContainer.css";

const FormHeadingContainer = ({ className = "" }) => {
  return (
    <div className={`form-heading-container ${className}`}>
      <div className="form-sections-headings1">
        <div className="form-heading-items">
          <a className="property-details5">PROPERTY DETAILS</a>
        </div>
      </div>
      <div className="component-1252">
        <a className="location-details1">LOCATION DETAILS</a>
      </div>
      <div className="component-1261">
        <div className="features-amenities1">{`FEATURES & AMENITIES`}</div>
      </div>
      <button className="component-1271">
        <div className="price-details2">PRICE DETAILS</div>
      </button>
      <div className="component-1281">
        <a className="property-images1">PROPERTY IMAGES</a>
      </div>
    </div>
  );
};

FormHeadingContainer.propTypes = {
  className: PropTypes.string,
};

export default FormHeadingContainer;
