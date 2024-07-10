import PropTypes from "prop-types";
import "./NonVeg.css";

const NonVeg = ({ className = "", nonVeg, allowed, allowed1 }) => {
  return (
    <div className={`non-veg ${className}`}>
      <div className="non-veg-option">
        <div className="non-veg-label">*</div>
        <div className="non-veg1">{nonVeg}</div>
      </div>
      <div className="component-1043">
        <div className="component-85-parent6">
          <input className="component-8511" type="radio" name="allowed" />
          <div className="allowed10">{allowed}</div>
        </div>
        <div className="component-85-parent6">
          <input className="component-8511" type="radio" name="allowed" />
          <div className="allowed10">{allowed1}</div>
        </div>
      </div>
    </div>
  );
};

NonVeg.propTypes = {
  className: PropTypes.string,
  nonVeg: PropTypes.string,
  allowed: PropTypes.string,
  allowed1: PropTypes.string,
};

export default NonVeg;
