import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PhotosDetailsFINAL.css";
import { useNavigate } from "react-router-dom";

const PhotosDetailsFINAL = ({ className = "" }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handlePrevClick = () => {
    console.log("Navigating to the prev page"); // Debugging log
    navigate("/sellers-flow-property-detail1");
  };

  const handleNextClick = () => {
    navigate("/preview");
  };

  return (
    <div className={`photos-details-final1 ${className}`}>
      <h2 className="title37">Thank you for listing your property with us,</h2>
      <div className="title38">
        Your listing will be reviewed and will go live within 24 hours.
      </div>
      <div className="title39">
        <p className="we-will-now">{`We will now manage your listing and get in touch with you after finding the best suitable tenant as per your preference. `}</p>
      </div>
      <div className="dylan-estates">-Dylan Estates</div>
      <div className="field8">
        <div className="input25">
          <img
            className="input-prefix-icon23"
            alt=""
            src="/inputprefix1@2x.png"
          />
          <div className="placeholder47" />
          <img
            className="input-suffix-icon23"
            alt=""
            src="/inputsuffix1@2x.png"
          />
        </div>
      </div>
      <div className="button-container">
        <button
          className="buttons5"
          onClick={handlePrevClick}
          aria-label="Edit Property Listing"
        >
          <div className="view-properties5">Edit Property Listing</div>
        </button>
        <div
          className="buttons5"
          onClick={handleNextClick}
          aria-label="Preview Property Listing"
        >
          <div className="view-properties6">Preview Property Listing</div>
        </div>
      </div>

       </div>
  );
};

PhotosDetailsFINAL.propTypes = {
  className: PropTypes.string,
};

export default PhotosDetailsFINAL;
