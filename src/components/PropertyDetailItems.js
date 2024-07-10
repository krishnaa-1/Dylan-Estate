import PropTypes from "prop-types";
import "./PropertyDetailItems.css";

const PropertyDetailItems = ({
  className = "",
  title,
  inputPrefix,
  placeholder,
}) => {
  return (
    <div className={`property-detail-items ${className}`}>
      <div className="label19">
        <div className="title19">{title}</div>
        <div className="property-on-floor">*</div>
      </div>
      <div className="property-detail-area-fields">
        <div className="area">
          <div className="input11">
            <img className="input-prefix-icon11" alt="" src={inputPrefix} />
            <input
              className="placeholder8"
              placeholder={placeholder}
              type="text"
            />
            <img
              className="input-suffix-icon11"
              alt=""
              src="/inputsuffix@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyDetailItems.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  inputPrefix: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PropertyDetailItems;
