import PropTypes from "prop-types";
import "./Steps.css";

const Steps = ({ className = "" }) => {
  return (
    <div className={`steps ${className}`}>
      <div className="steps-header-container">
        <h3 className="upload-your-property">
          Upload your property in 4 simple steps
        </h3>
        <div className="upload-steps-illustration">
          <div className="basic-details-container">
            <img
              className="image-29-icon"
              loading="lazy"
              alt=""
              src="/image-29@2x.png"
            />
            <div className="add-your-properties-container">
              <span>{`Add your properties `}</span>
              <span className="basic-details">Basic Details</span>
            </div>
          </div>
          <div className="step-illustrations">
            <img
              className="image-30-icon"
              loading="lazy"
              alt=""
              src="/image-30@2x.png"
            />
            <div className="add-property-location-container">
              <span>Add property</span>
              <b>{` `}</b>
              <span className="location">Location</span>
            </div>
          </div>
          <div className="step-illustrations1">
            <div className="image-31-parent">
              <img
                className="image-31-icon"
                loading="lazy"
                alt=""
                src="/image-30@2x.png"
              />
              <div className="add-property-features-container">
                <span>{`Add property `}</span>
                <span className="features-and-amenities">
                  Features and amenities
                </span>
              </div>
            </div>
          </div>
          <div className="step-illustrations2">
            <img
              className="image-32-icon"
              loading="lazy"
              alt=""
              src="/image-30@2x.png"
            />
            <div className="add-price-details-container">
              <span>Add</span>
              <span className="price-details1"> Price details</span>
            </div>
          </div>
          <div className="step-illustrations3">
            <img
              className="image-33-icon"
              loading="lazy"
              alt=""
              src="/image-30@2x.png"
            />
            <div className="add-your-best-container">
              <span>Add your best</span>
              <span className="property-shots"> Property Shots</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Steps.propTypes = {
  className: PropTypes.string,
};

export default Steps;
