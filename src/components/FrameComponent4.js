import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`frame-parent31 ${className}`}>
      <div className="card-column-wrapper">
        <div className="card-column">
          <div className="card-items">
            <img className="frame-icon31" alt="" src="/frame18.svg" />
            <img className="card-details-icon" alt="" src="/card-details.svg" />
          </div>
        </div>
      </div>
      <div className="card-row-copy">
        <div className="card-column-copy-wrapper">
          <div className="card-column-copy">
            <div className="modern-luxury">{`Modern & Luxury 2BHK Flat For Rent`}</div>
            <div className="frame-parent32">
              <img className="frame-icon32" alt="" src="/frame19.svg" />
              <div className="kashimira-mira-road">
                Kashimira, Mira Road East, Mumbai
              </div>
            </div>
          </div>
        </div>
        <div className="rent-parent">
          <div className="rent">
            <img className="rent-value-icon" alt="" src="/rent-value.svg" />
            <div className="lac">60.50 Lac</div>
          </div>
          <div className="area1">
            <img className="area-value-icon" alt="" src="/area-value.svg" />
            <div className="sq-ft1">1850 Sq. ft.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
