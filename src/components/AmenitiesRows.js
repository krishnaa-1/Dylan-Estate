import { useMemo } from "react";
import PropTypes from "prop-types";
import "./AmenitiesRows.css";

const AmenitiesRows = ({
  className = "",
  frame,
  regularWaterSupply,
  propWidth,
}) => {
  const amenitiesRowsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`amenities-rows ${className}`} style={amenitiesRowsStyle}>
      <div className="frame-parent14">
        <div className="frame-wrapper6">
          <img className="frame-icon11" alt="" src={frame} />
        </div>
        <div className="backup-types">
          <div className="regular-water-supply">{regularWaterSupply}</div>
        </div>
      </div>
      <div className="checkbox23">
        <div className="checkbox-child21" />
      </div>
    </div>
  );
};

AmenitiesRows.propTypes = {
  className: PropTypes.string,
  frame: PropTypes.string,
  regularWaterSupply: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default AmenitiesRows;
