import NAVBARS from "../components/NAVBARS";
import FrameComponent1 from "../components/FrameComponent1";
import { useNavigate } from "react-router-dom";
import "./SellersFlowLOCATIONDetail.css";

const SellersFlowLOCATIONDetail = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    console.log("Navigating to the next page"); // Debugging log
    navigate("/sellers-flow-property-features-and-amenities");
  };

  return (
    <div className="sellers-flow-location-detail">
      <NAVBARS />
      <section className="sellers-flow-location-detail-inner">
        <div className="frame-container">
          <img className="frame-icon2" alt="" src="/frame-21.svg" />
          <div className="property-details-frame">
            <form className="property-details1">
              <div className="form-sections-headings-parent">
                <div className="form-sections-headings">
                  <div className="location-detail-headers">
                    <a className="property-details2">PROPERTY DETAILS</a>
                  </div>
                </div>
                <div className="component-1251">
                  <div className="location-details-wrapper">
                    <div className="location-details">LOCATION DETAILS</div>
                  </div>
                </div>
                <div className="component-126">
                  <div className="features-amenities">{`FEATURES & AMENITIES`}</div>
                </div>
                <button className="component-127" type="button">
                  <div className="price-details">PRICE DETAILS</div>
                </button>
                <div className="component-128">
                  <a className="property-images">PROPERTY IMAGES</a>
                </div>
              </div>
              <div className="property-details-child">
                <div className="group-div">
                  <div className="frame-child5" />
                  <div className="frame-child6" />
                </div>
              </div>
              <div className="property-location-wrapper">
                <div className="property-location">
                  <div className="frame-div">
                    <div className="label-parent">
                      <div className="label7">
                        <div className="title7">Building/ Society Name</div>
                        <div className="empty-title">*</div>
                      </div>
                      <div className="apartment-name">
                        <div className="input2">
                          <img
                            className="input-prefix-icon2"
                            alt=""
                            src="/inputprefix@2x.png"
                          />
                          <div className="placeholder2">
                           <input
                          className="placeholder8"
                          placeholder="Enter Apartment Name"
                          type="text"
                        />
                          </div>
                          <img
                            className="vector-icon"
                            alt=""
                            src="/input-icon.svg"
                          />
                          <img
                            className="input-suffix-icon2"
                            alt=""
                            src="/inputsuffix@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="label-group">
                      <div className="label8">
                        <div className="title8">Locality / Area</div>
                        <div className="empty-locality-title">*</div>
                      </div>
                      <div className="locality">
                        <div className="input3">
                          <img
                            className="input-prefix-icon3"
                            alt=""
                            src="/inputprefix@2x.png"
                          />
                          <div className="placeholder4">
                          <input
                          className="placeholder8"
                          placeholder="Enter Apartment Name"
                          type="text"
                        />
                          </div>
                          <img
                            className="vector-icon1"
                            alt=""
                            src="/input-icon.svg"
                          />
                          <img
                            className="input-suffix-icon3"
                            alt=""
                            src="/inputsuffix@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent1">
                    <FrameComponent1
                      title="Landmark / Street Name"
                      placeholder="Prominent Landmark"
                    />
                    <FrameComponent1
                      title="City"
                      placeholder="Mumbai, Maharashtra"
                    />
                  </div>
                  <div className="frame-parent2">
                    <div className="label-wrapper">
                      <div className="label9">
                        <div className="title9">Mark Locality on Map</div>
                      </div>
                    </div>
                    <div className="seller-pinning-address">
                      <img
                        className="map-maker-shanti-nagar-mira"
                        alt=""
                        src="/-map-maker-shanti-nagar-mira-road-east-mirabhayandhar-thane-maharashtra-india-standard@2x.png"
                      />
                      <div className="input4">
                        <img
                          className="input-prefix-icon4"
                          alt=""
                          src="/inputprefix@2x.png"
                        />
                        <div className="placeholder6">
                          <img
                            className="frame-icon3"
                            alt=""
                            src="/frame-3.svg"
                          />
                          <input
                          className="placeholder8"
                          placeholder="Search your society or nearest landmark"
                          type="text"
                        />
                        </div>
                        <img
                          className="input-suffix-icon4"
                          alt=""
                          src="/inputsuffix@2x.png"
                        />
                      </div>
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
                  <b className="view-properties" style={{ color: 'white' }}>NEXT</b>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellersFlowLOCATIONDetail;
