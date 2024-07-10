import PropTypes from "prop-types";
import "./AdditionalFeaturesCheckbox.css";

const AdditionalFeaturesCheckbox = ({
  className = "",
  airConditioning,
  securityPersonnelGatedSec,
}) => {
  return (
    <div className={`additional-features-checkbox ${className}`}>
      <div className="checkbox-parent">
        <div className="checkbox">
          <div className="checkbox-child" />
        </div>
        <div className="air-conditioning">{airConditioning}</div>
      </div>
      <div className="additional-features-security-c">
        <div className="checkbox1">
          <div className="checkbox-item" />
        </div>
        <div className="security-personnel-gated">
          {securityPersonnelGatedSec}
        </div>
      </div>
    </div>
  );
};

AdditionalFeaturesCheckbox.propTypes = {
  className: PropTypes.string,
  airConditioning: PropTypes.string,
  securityPersonnelGatedSec: PropTypes.string,
};

export default AdditionalFeaturesCheckbox;
