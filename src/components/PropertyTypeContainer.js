import PropTypes from "prop-types";
import "./PropertyTypeContainer.css";

const PropertyTypeContainer = ({ className = "" }) => {
  return (
    <div className={`property-type-container ${className}`}>
      <div className="property-type-content">
        <div className="label17">
          <div className="property-type-blank">*</div>
          <div className="title17">Property For :</div>
        </div>
        <div className="component-1042">
          <div className="component-85-group">
            <div className="component-85-container">
              <input className="component-855" type="radio" name="transactionType" />
              <div className="allowed4">Rent</div>
            </div>
          </div>
          <div className="component-85-container">
            <input className="component-855" type="radio" name="transactionType" />
            <div className="allowed4">Sale</div>
          </div>
        </div>

        <div className="component-85-parent1">
          <div className="component-856">
            <div className="radio2" />
          </div>
          <div className="allowed5">Allowed</div>
        </div>
      </div>
    </div>
  );
};

PropertyTypeContainer.propTypes = {
  className: PropTypes.string,
};

export default PropertyTypeContainer;
