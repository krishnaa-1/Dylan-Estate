import PropTypes from "prop-types";
import "./PropertyType.css";

const PropertyType = ({ className = "" }) => {
  return (
    <div className={`property-type ${className}`}>
      <div className="property-type-info-container">
        <div className="label18">
          <div className="property-type-info">*</div>
          <div className="title18">Property Type :</div>
        </div>
        <div className="component-130">
          <div className="component-85-parent2">
            <input className="component-857" type="radio" name="propertyType" />
            <div className="allowed6">Residential</div>
          </div>
          <div className="component-85-parent3">
            <input className="component-858" type="radio" name="propertyType" />
            <div className="allowed7">Commercial</div>
          </div>
          <div className="component-85-parent4">
            <input className="component-858" type="radio" name="propertyType" />
            <div className="allowed7">Land / Plot</div>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyType.propTypes = {
  className: PropTypes.string,
};

export default PropertyType;
