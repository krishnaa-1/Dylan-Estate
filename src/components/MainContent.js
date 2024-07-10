import NonVeg from "./NonVeg";
import AdditionalFeaturesCheckbox from "./AdditionalFeaturesCheckbox";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./MainContent.css";

const MainContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    console.log("Navigating to the next page"); // Debugging log
    navigate("/sellers-flow-price-details");
  };
  return (
    <section className={`main-content ${className}`}>
      <div className="frame-parent8">
        <img className="frame-icon9" alt="" src="/frame-21.svg" />
        <div className="property-details-container1">
          <div className="property-details7">
            <div className="details-headings">
              <div className="form-sections-headings2">
                <div className="heading-names">
                  <div className="property-details8">PROPERTY DETAILS</div>
                </div>
              </div>
              <div className="component-1253">
                <div className="location-details-container">
                  <div className="location-details2">LOCATION DETAILS</div>
                </div>
              </div>
              <div className="component-1262">
                <div className="features-amenities-wrapper">
                  <div className="features-amenities2">{`FEATURES & AMENITIES`}</div>
                </div>
              </div>
              <button className="component-1272">
                <div className="price-details3">PRICE DETAILS</div>
              </button>
              <div className="component-1282">
                <div className="property-images2">PROPERTY IMAGES</div>
              </div>
            </div>
            <div className="property-details-inner1">
              <div className="rectangle-parent5">
                <div className="frame-child20" />
                <div className="separator-shape" />
              </div>
            </div>
            <div className="property-amenities-final-wrapper">
              <div className="property-amenities-final">
                <div className="general-features">
                  <div className="general-features-title">
                    <div className="general-features1">General Features</div>
                  </div>
                </div>
                <NonVeg
                  nonVeg="Non- Veg"
                  allowed="Allowed"
                  allowed1="Not Allowed"
                />
                <div className="electricity">
                  <NonVeg nonVeg="Pets Allowed" allowed="Yes" allowed1="No" />
                  <div className="frame-parent9">
                    <div className="frame-wrapper3">
                      <div className="empty-label-parent">
                        <div className="empty-label">*</div>
                        <div className="electricity1">Electricity</div>
                      </div>
                    </div>
                    <div className="component-1044">
                      <div className="component-85-parent8">
                        <div className="component-85-parent6">
                          <input
                            className="component-8511"
                            type="radio"
                            name="allowed23"
                          />
                          <div className="allowed10">Rare/No Powercut</div>
                        </div>
                      </div>
                      <div className="component-85-parent6">
                        <input
                          className="component-8511"
                          type="radio"
                          name="allowed23"
                        />
                        <div className="allowed10">Frequent Powercut</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="water-supply">
                  <div className="water-supply-option-parent">
                    <div className="water-supply-option">
                      <div className="water-supply-label">
                        <div className="water-supply-empty">*</div>
                        <div className="water-supply1">Water Supply</div>
                      </div>
                    </div>
                    <div className="component-1045">
                      <div className="water-supply-radio">
                        <div className="component-85-parent6">
                          <input
                            className="component-8511"
                            type="radio"
                            name="allowed213"
                          />
                          <div className="allowed10">Municipal Corporation</div>
                        </div>
                      </div>
                      <div className="component-85-parent6">
                        <input
                          className="component-8511"
                          type="radio"
                          name="allowed213"
                        />
                        <div className="allowed10">Borewell</div>
                      </div>
                      <div className="component-85-parent6">
                        <input
                          className="component-8511"
                          type="radio"
                          name="allowed213"
                        />
                        <div className="allowed10">Both</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="amenity-separator" />
                <div className="furnishing">
                  <div className="furnishing-option-parent">
                    <div className="furnishing-option">
                      <div className="furnishing-label">
                        <div className="furnishing-empty-label">*</div>
                        <div className="furnishing1">Furnishing</div>
                      </div>
                    </div>
                    <div className="furnishing-options-parent">
                      <div className="furnishing-options">
                        <div className="component-85-parent6">
                          <input
                            className="component-8511"
                            type="radio"
                            name="allowed2113"
                          />
                          <div className="allowed10">Fully Furnished</div>
                        </div>
                        <div className="checkbox-group">
                          <div className="checkbox5">
                            <div className="checkbox-child3" />
                          </div>
                        </div>
                      </div>
                      <div className="furnishing-options1">
                        <div className="component-85-parent6">
                          <input
                            className="component-8511"
                            type="radio"
                            name="allowed2113"
                          />
                          <div className="allowed10">Semi Furnished</div>
                        </div>
                        <div className="checkbox-parent1">
                          <div className="checkbox7">
                            <div className="checkbox-child5" />
                          </div>
                        </div>
                      </div>
                      <div className="furnishing-options2">
                        <div className="component-85-parent6">
                          <input
                            className="component-8511"
                            type="radio"
                            name="allowed2113"
                          />
                          <div className="allowed10">Unfurnished</div>
                        </div>
                        <div className="checkbox-parent3">
                          <div className="checkbox9">
                            <div className="checkbox-child7" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="amenity-separator1" />
                <div className="additional-features-content-wrapper">
                  <div className="additional-features-content">
                    <div className="additional-features-title">
                      <div className="additional-features">
                        Additional Features
                      </div>
                    </div>
                    <div className="additional-features-checkbox-parent">
                      <div className="component-85-parent6">
                        <input
                          className="component-8511"
                          type="radio"
                                            />
                        <div className="allowed10">Air Conditioning</div>
                      </div>
                      <div className="component-85-parent6">
                        <input
                          className="component-8511"
                          type="radio"
                         
                        />
                        <div className="allowed10">Ceiling Fans</div>
                      </div>
                      <div className="component-85-parent6">
                        <input
                          className="component-8511"
                          type="radio"
                       
                        />
                        <div className="allowed10">Washing machine</div>
                      </div>
                      <div className="component-85-parent6">
                        <input
                          className="component-8511"
                          type="radio"
                     
                        />
                        <div className="allowed10">Microwave</div>
                      </div>
                      <div className="component-85-parent6">
                        <input
                          className="component-8511"
                          type="radio"
                
                        />
                        <div className="allowed10">Refrigerator</div>
                      </div>
                      <div className="component-85-parent6">
                        <input
                          className="component-8511"
                          type="radio"

                        />
                        <div className="allowed10">oven</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="amenity-separator2" />
                <div className="tiles-content-wrapper">
                  <div className="tiles-content">
                    <div className="tiles-title">
                      <div className="tiles">Tiles</div>
                    </div>
                    <div className="tiles-checkbox-parent">
                      <div className="tiles-checkbox">
                        <div className="component-85-parent6">
                          <input
                            className="component-8511"
                            type="radio"
                            name="allowed21113"
                          />
                          <div className="allowed10">Normal White Tiles</div>
                        </div>
                      </div>
                      <div className="tiles-checkbox1">
                        <div className="component-85-parent6">
                          <input
                            className="component-8511"
                            type="radio"
                            name="allowed21113"
                          />
                          <div className="allowed10">Marble</div>
                        </div>
                      </div>
                      <div className="tiles-checkbox2">
                        <div className="component-85-parent6">
                          <input
                            className="component-8511"
                            type="radio"
                            name="allowed21113"
                          />
                          <div className="allowed10">Vitrified Tiles</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="amenity-separator3" />
                <div className="amenity-separator4" />
                <div className="safety-content-parent">
                  <div className="safety-content">
                    <div className="safety-title">
                      <div className="safety-label">
                        <div className="safety-placeholder">*</div>
                        <div className="safety">Safety</div>
                      </div>
                    </div>
                    <div className="safety-checkbox-parent">
                      <div className="safety-checkbox">
                        <div className="component-85-parent6">
                          <input
                            className="component-8511"
                            type="radio"
                            name="allowed213"
                          />
                          <div className="allowed10">24/7 Security personnel (Gated Security)</div>
                        </div>
                      </div>
                      <div className="safety-checkbox1">
                      <div className="component-85-parent6">
                          <input
                            className="component-8511"
                            type="radio"
                            name="allowed213"
                          />
                          <div className="allowed10">
                          Security Systems- CCTV</div>
                        </div>
                        <div className="checkbox-parent13">
                          <div className="checkbox19">
                            <div className="checkbox-child17" />
                          </div>
                          <div className="security-personnel-gated8">
                            24/7 Security personnel (Gated Security)
                          </div>
                        </div>
                      </div>
                      <div className="frame-parent10">
                        <div className="checkbox-parent14">
                          <div className="checkbox20">
                            <div className="checkbox-child18" />
                          </div>
                          <div className="air-conditioning9">
                            Vitrified Tiles
                          </div>
                        </div>
                        <div className="checkbox-parent15">
                          <div className="checkbox21">
                            <div className="checkbox-child19" />
                          </div>
                          <div className="security-personnel-gated9">
                            24/7 Security personnel (Gated Security)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="society-amenities-options">
                    <div className="society-amenities-title">
                      <div className="society-amenities">SOCIETY AMENITIES</div>
                    </div>
                    <div className="society-amenities-checkbox">
                      <div className="instance-container">
                        <div className="frame-parent11">
                          <div className="intercom-container-wrapper">
                            <img
                              className="intercom-container-icon"
                              alt=""
                              src="/frame-31@2x.png"
                            />
                          </div>
                          <div className="security-wrapper">
                            <div className="security">24/7 Security</div>
                          </div>
                        </div>
                        <input
                            className="component-8511"
                            type="radio"
                            name="allowed313"
                          />
                      </div>
                      <FrameComponent3
                        shoppingCenterContainer="/frame-4.svg"
                        cCTVCamera="CCTV Camera"
                      />
                      <FrameComponent2
                        group33405="/group-33405@2x.png"
                        lift="Lift"
                      />
                      <FrameComponent3
                        shoppingCenterContainer="/frame-5.svg"
                        cCTVCamera="Reserved Parking"
                        propWidth="135px"
                      />
                    </div>
                    <div className="society-amenities-checkbox1">
                      <FrameComponent3
                        shoppingCenterContainer="/frame-6.svg"
                        cCTVCamera="Regular water supply"
                        propWidth="unset"
                      />
                      <FrameComponent3
                        shoppingCenterContainer="/frame-7.svg"
                        cCTVCamera="Power Back up-Partial "
                        propWidth="135px"
                      />
                      <FrameComponent3
                        shoppingCenterContainer="/frame-7.svg"
                        cCTVCamera="Power Back up-Full "
                        propWidth="135px"
                      />
                      <FrameComponent3
                        shoppingCenterContainer="/group-33422@2x.png"
                        cCTVCamera="Maintenance staff"
                        propWidth="135px"
                      />
                    </div>
                    <div className="society-amenities-checkbox2">
                      <FrameComponent3
                        shoppingCenterContainer="/frame-9.svg"
                        cCTVCamera="Garden/ Park"
                        propWidth="135px"
                      />
                      <FrameComponent3
                        shoppingCenterContainer="/frame-10.svg"
                        cCTVCamera="Kids Play area"
                        propWidth="135px"
                      />
                      <FrameComponent2
                        group33405="/frame-11.svg"
                        lift="Sport"
                      />
                      <FrameComponent3
                        shoppingCenterContainer="/frame-12.svg"
                        cCTVCamera="Property Gym"
                        propWidth="135px"
                      />
                    </div>
                    <div className="society-amenities-checkbox3">
                      <FrameComponent3
                        shoppingCenterContainer="/frame-13.svg"
                        cCTVCamera="Community Hall"
                        propWidth="135px"
                      />
                      <FrameComponent2
                        group33405="/frame-14.svg"
                        lift="Shopping center"
                      />
                      <FrameComponent3
                        shoppingCenterContainer="/frame-13.svg"
                        cCTVCamera="Club House"
                        propWidth="135px"
                      />
                      <FrameComponent3
                        shoppingCenterContainer="/frame-16.svg"
                        cCTVCamera="Swimming pool"
                        propWidth="135px"
                      />
                    </div>
                    <div className="society-amenities-checkbox4">
                      <FrameComponent2
                        group33405="/frame-17.svg"
                        lift="Intercom"
                      />
                      <FrameComponent3
                        shoppingCenterContainer="/frame-18.svg"
                        cCTVCamera="Fire Safety"
                        propWidth="135px"
                      />
                      <FrameComponent3
                        shoppingCenterContainer="/frame-13.svg"
                        cCTVCamera="Club House"
                        propWidth="135px"
                      />
                      <FrameComponent3
                        shoppingCenterContainer="/frame-16.svg"
                        cCTVCamera="Swimming pool"
                        propWidth="135px"
                      />
                    </div>
                  </div>
                </div>
                <div className="amenity-separator5" />
                <div className="field4">
                  <div className="input17">
                    <img
                      className="input-prefix-icon16"
                      alt=""
                      src="/inputprefix1@2x.png"
                    />
                    <div className="placeholder31" />
                    <img
                      className="input-suffix-icon16"
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
                <b className="view-properties" style={{ color: 'white' }}>NEXT</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
