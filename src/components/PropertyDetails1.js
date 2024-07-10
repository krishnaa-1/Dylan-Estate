import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PropertyDetails1.css";
import { useNavigate } from "react-router-dom";

const PropertyDetails1 = ({ className = "" }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

 
  const handleContinue = () => {
    console.log("Continue button clicked");
    // Perform any necessary actions before navigating
    navigate("/sellers-photo-details1");// Replace "/next-page" with your actual route
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`property-details11 ${className}`}>
      <div className="form-sections-headings-container">
        <div className="form-sections-headings4">
          <div className="property-details-wrapper3">
            <a className="property-details12">PROPERTY DETAILS</a>
          </div>
        </div>
        <div className="component-1255">
          <div className="location-details-wrapper1">
            <div className="location-details4">LOCATION DETAILS</div>
          </div>
        </div>
        <div className="component-1264">
          <div className="features-amenities-frame">
            <div className="features-amenities4">{`FEATURES & AMENITIES`}</div>
          </div>
        </div>
        <div className="component-1274">
          <div className="price-details-container">
            <div className="price-details5">PRICE DETAILS</div>
          </div>
        </div>
        <div className="component-1284">
          <div className="property-images-wrapper">
            <div className="property-images4">PROPERTY IMAGES</div>
          </div>
        </div>
      </div>
      <div className="property-details-inner3">
        <div className="rectangle-parent7">
          <div className="frame-child23" />
          <div className="frame-child24" />
        </div>
      </div>
      <div className="photo-details">
        <div className="photos-details-final">
          <div className="title34">{`Add Photos / videos to attract more tenants! `}</div>
          <div className="upload-instruction">
            <div className="title35">
              Add Photos of living room, bedroom, bathroom, floor, doors,
              kitchen, balcony, location map, neighborhood, etc
            </div>
            <div className="upload-container">
              <div className="nested-upload-container">
                <div className="nested-upload-container1">
                  <div className="nested-upload-container2">
                    <img
                      className="nested-upload-container3"
                      alt=""
                      src="/frame-22.svg"
                    />
                  </div>
                  <button className="nested-upload-container4">
                    <img
                      className="nested-upload-container5"
                      alt=""
                      src="/frame-32.svg"
                    />
                    <div className="nested-upload-container6">
                      <div className="title36">Add Photos Now</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="or">OR</div>
            <div className="we-can-upload">{`We can upload them for you! You can email the pictures and videos to us at Dylanestate.com `}</div>
          </div>
          <div className="accepted-formats-are-jpg-container">
            <p className="accepted-formats-are-jpg">{`Accepted formats are .jpg, .gif, .bmp & .png. `}</p>
            <p className="maximum-size-allowed">
              Maximum size allowed is 20 MB. Minimum dimension allowed 600*400
              Pixel
            </p>
          </div>
          <div className="field7">
            <div className="input24">
              <img
                className="input-prefix-icon22"
                alt=""
                src="/inputprefix1@2x.png"
              />
              <div className="placeholder46" />
              <img
                className="input-suffix-icon22"
                alt=""
                src="/inputsuffix1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-group">
        <div className="need-help-call-9999999999-wrapper">
          <div className="need-help-call-9999999999-container">
            <span>{`Need Help? `}</span>
            <span className="call-9999999999">Call 9999999999</span>
          </div>
        </div>
        <button className="buttons" onClick={() => setShowPopup(true)}>
        <b className="view-properties" style={{ color: 'white' }}>SAVE & POST</b>
        </button>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <section className="item">
              <div className="nested-item">
                <div className="vertical-form-iteminput">
                  <div className="label">
                    <div className="label-wrapper">
                      <div className="title">POST PROPERTY ON DYLAN ESTATE?</div>
                      <div className="div">*</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="component-94-parent">
                <div className="component-94">
                  <a className="continue-button" onClick={handleContinue}>
                    Continue
                  </a>
                </div>
                <div className="by-continuing-you-container">
                  <span className="by-continuing-you">{`By continuing you agree to our `}</span>
                  <span className="terms-and-conditions">{`Terms and Conditions & Privacy Policy`}</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

PropertyDetails1.propTypes = {
  className: PropTypes.string,
};

export default PropertyDetails1;
