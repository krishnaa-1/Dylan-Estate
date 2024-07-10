import VerticalFormItemInput from "./VerticalFormItemInput";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./PropertyDetails.css";

const PropertyDetails = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    console.log("Navigating to the next page"); // Debugging log
    navigate("/sellers-photo-details");
  };
  return (
    <div className={`property-details9 ${className}`}>
      <div className="form-sections-headings-group">
        <div className="form-sections-headings3">
          <div className="property-details-wrapper2">
            <a className="property-details10">PROPERTY DETAILS</a>
          </div>
        </div>
        <div className="component-1254">
          <div className="location-details-frame">
            <div className="location-details3">LOCATION DETAILS</div>
          </div>
        </div>
        <div className="component-1263">
          <div className="features-amenities-container">
            <div className="features-amenities3">{`FEATURES & AMENITIES`}</div>
          </div>
        </div>
        <div className="component-1273">
          <div className="price-details-wrapper">
            <div className="price-details4">PRICE DETAILS</div>
          </div>
        </div>
        <div className="component-1283">
          <div className="property-images3">PROPERTY IMAGES</div>
        </div>
      </div>
      <div className="property-details-inner2">
        <div className="rectangle-parent6">
          <div className="frame-child21" />
          <div className="frame-child22" />
        </div>
      </div>
      <div className="price-details-final-wrapper">
        <div className="price-details-final">
          <div className="vertical-form-iteminput-container">
            <VerticalFormItemInput title="Rent" />
          </div>
          <div className="vertical-form-iteminput-parent1">
            <div className="vertical-form-iteminput17">
              <div className="label31">
                <div className="title31">Maintenance</div>
                <div className="div94">*</div>
              </div>
              <div className="maintainance">
                <div className="input19">
                  <img
                    className="input-prefix-icon18"
                    alt=""
                    src="/inputprefix@2x.png"
                  />
                  <select className="placeholder8 ">
                    <option value="maintenance">Maintenance</option>
                    <option value="extermination">Extra Maintenance</option>
                  </select>
                  
                  <img
                    className="input-suffix-icon18"
                    alt=""
                    src="/inputsuffix@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="vertical-form-iteminput18">
              <div className="label32">
                <div className="title32">{`Maintenance `}</div>
                <div className="div95">*</div>
              </div>
              <div className="maintainance-parent">
                <div className="maintainance1">
                  <div className="input20">
                    <img
                      className="input-prefix-icon19"
                      alt=""
                      src="/inputprefix@2x.png"
                    />
                    <div className="placeholder38">
                      <div className="placeholder39">₹</div>
                      <input
                        className="placeholder8"
                        placeholder="Maintenance"
                        type="text"
                      />
                    </div>
                    <img
                      className="input-suffix-icon19"
                      alt=""
                      src="/inputsuffix@2x.png"
                    />
                  </div>
                </div>
                <div className="maintainance2">
                  <div className="input21">
                    <img
                      className="input-prefix-icon20"
                      alt=""
                      src="/inputprefix@2x.png"
                    />
                    <div className="placeholder41">
                      <input
                        className="placeholder8"
                        placeholder="Monthly"
                        type="text"
                      />
                    </div>
                    <img
                      className="vector-icon5"
                      alt=""
                      src="/input-icon.svg"
                    />
                    <img
                      className="input-suffix-icon20"
                      alt=""
                      src="/inputsuffix@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical-form-iteminput19">
            <div className="label33">
              <div className="title33">
                Additional Pricing details to convey to agent?
              </div>
            </div>
            <div className="field5">
              <div className="input22">
                <div className="placeholder43">
                  <input
                    className="placeholder8"
                    placeholder="Do you have any concerns regarding pricing of your property? Add your concerns here or call us. "
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="field6">
            <div className="input23">
              <img
                className="input-prefix-icon21"
                alt=""
                src="/inputprefix1@2x.png"
              />
              <div className="placeholder45" />
              <img
                className="input-suffix-icon21"
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
            <span className="call-9999999999">Call 9999999999</span>
          </div>
        </div>
        <button className="buttons" onClick={handleNextClick}>
          <b className="view-properties"style={{ color: 'white' }}>NEXT</b>
        </button>
      </div>
    </div>
  );
};

PropertyDetails.propTypes = {
  className: PropTypes.string,
};

export default PropertyDetails;
