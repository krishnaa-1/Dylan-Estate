import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import AmenitiesRows from "./AmenitiesRows";
import PropTypes from "prop-types";
import "./Breadcrumb.css";

const Breadcrumb = ({ className = "" }) => {
  return (
    <div className={`breadcrumb ${className}`}>
      <img className="location-icon" alt="" src="/location.svg" />
      <div className="property-title">
        <div className="property-details-one">
          <div className="property-details-two">
            <div className="property-details-three">
              <div className="property-details-four">
                <div className="property-details-five">
                  <div className="bhk-flat-apartment-for-rent-parent">
                    <div className="bhk-flat-container">
                      <p className="bhk-flat">{`1 BHK Flat / Apartment For Rent in Gokul Village Chs 2 `}</p>
                      <p className="sqft">{`(545 Sq.ft.) `}</p>
                    </div>
                    <div className="locality-pincode">
                      <img className="pincode-icon" alt="" src="/frame-3.svg" />
                      <div className="gokul-village-chs">
                        Gokul village chs 2 Shanti Park, near st. Xaviours High
                        school
                      </div>
                    </div>
                  </div>
                  <div className="favorite-icon">
                    <div className="default">
                      <div className="favorite" />
                      <img
                        className="favorite-background-icon"
                        alt=""
                        src="/favorite-background.svg"
                      />
                    </div>
                    <div className="component-32">
                      <div className="component-32-child" />
                      <img className="frame-icon12" alt="" src="/frame1.svg" />
                    </div>
                  </div>
                </div>
                <div className="property-highlighters">
                  <div className="frame-parent15">
                    <div className="frame-wrapper7">
                      <img
                        className="frame-icon13"
                        alt=""
                        src="/frame2@2x.png"
                      />
                    </div>
                    <div className="highlight-two-details-parent">
                      <div className="highlight-two-details">
                        <img
                          className="highlight-two-icon"
                          alt=""
                          src="/frame-22.svg"
                        />
                      </div>
                      <div className="highlight-three-details">
                        <img
                          className="highlight-three-icon"
                          alt=""
                          src="/frame-32.svg"
                        />
                        <div className="title-wrapper">
                          <div className="title40">Add Photos Now</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-wrapper8">
                      <img
                        className="frame-icon14"
                        alt=""
                        src="/frame3@2x.png"
                      />
                    </div>
                  </div>
                  <div className="highlight-four-details">
                    <div className="highlight-four-icon">
                      <div className="property-id">{`Property ID : `}</div>
                      <div className="highlight-four-id">99999999</div>
                    </div>
                    <div className="reject-button-background-parent">
                      <div className="reject-button-background">
                        <div className="reject-this-property">
                          Reject this property
                        </div>
                      </div>
                      <img
                        className="reject-icon"
                        alt=""
                        src="/reject-icon.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="overview-amenities">
                <div className="property-overview">
                  <div className="overview">
                    <div className="property-overview1">Property Overview</div>
                    <div className="society">
                      <div className="society-name">
                        <div className="society1">{`Society  : `}</div>
                        <div className="gokul-village">Gokul Village</div>
                      </div>
                    </div>
                  </div>
                  <div className="property-info-cards">
                    <div className="bedrooms-card-parent">
                      <div className="bedrooms-card">
                        <div className="bedrooms-card-details">
                          <img
                            className="bedrooms-card-icon"
                            alt=""
                            src="/bedrooms-card-icon.svg"
                          />
                          <div className="two-2">Two (2)</div>
                        </div>
                        <div className="bedrooms-wrapper">
                          <div className="bedrooms">Bedrooms</div>
                        </div>
                      </div>
                      <div className="card-one">
                        <div className="card-one-info">
                          <img
                            className="floors-card-values"
                            alt=""
                            src="/floors-card-values.svg"
                          />
                          <div className="floors-card-info">
                            <div className="ground">Ground</div>
                          </div>
                        </div>
                        <div className="floors-card-title">
                          <div className="property-on-floor3">
                            Property on Floor
                          </div>
                        </div>
                      </div>
                      <div className="card-one1">
                        <div className="frame-parent16">
                          <img
                            className="frame-icon15"
                            alt=""
                            src="/frame4.svg"
                          />
                          <div className="no-balcony-wrapper">
                            <div className="no-balcony">No Balcony</div>
                          </div>
                        </div>
                        <div className="balcony-wrapper">
                          <div className="balcony">Balcony</div>
                        </div>
                      </div>
                      <div className="card-one2">
                        <div className="frame-parent17">
                          <img
                            className="frame-icon16"
                            alt=""
                            src="/frame5.svg"
                          />
                          <div className="normal-tiles-white-wrapper">
                            <div className="normal-tiles-white">
                              Normal tiles white
                            </div>
                          </div>
                        </div>
                        <div className="flooring-wrapper">
                          <div className="flooring">Flooring</div>
                        </div>
                      </div>
                      <div className="card-one3">
                        <div className="frame-parent18">
                          <img
                            className="frame-icon17"
                            alt=""
                            src="/frame6.svg"
                          />
                          <div className="yes-wrapper">
                            <div className="yes">Yes</div>
                          </div>
                        </div>
                        <div className="pets-allowed-wrapper">
                          <div className="pets-allowed">Pets Allowed</div>
                        </div>
                      </div>
                      <div className="card-one4">
                        <div className="frame-parent19">
                          <img
                            className="frame-icon18"
                            alt=""
                            src="/frame7.svg"
                          />
                          <div className="years-wrapper">
                            <div className="years">5 Years</div>
                          </div>
                        </div>
                        <div className="property-age-wrapper">
                          <div className="property-age">Property Age</div>
                        </div>
                      </div>
                    </div>
                    <div className="card-two">
                      <div className="bathroom-card">
                        <div className="bathroom-card-details">
                          <img
                            className="bathroom-card-icon"
                            alt=""
                            src="/bathroom-card-icon.svg"
                          />
                          <div className="one1">One(1)</div>
                        </div>
                        <div className="bathrooms-wrapper">
                          <div className="bathrooms">Bathrooms</div>
                        </div>
                      </div>
                      <div className="total-floors-card">
                        <img
                          className="total-floors-icon"
                          alt=""
                          src="/floors-card-values.svg"
                        />
                        <div className="total-floors-details">
                          <div className="floor-count-value">
                            <div className="floor-count">4</div>
                            <div className="total-floors">Total Floors</div>
                          </div>
                        </div>
                      </div>
                      <div className="card-two-info">
                        <div className="furnishing-card-values">
                          <img
                            className="furnishing-card-values-two"
                            alt=""
                            src="/furnishing-card-values-two.svg"
                          />
                          <div className="furnishing-card-info">
                            <div className="semi-furnished">Semi-furnished</div>
                          </div>
                        </div>
                        <div className="furnishing-card-title">
                          <div className="furnishing2">Furnishing</div>
                        </div>
                      </div>
                      <div className="card-two-info1">
                        <div className="frame-parent20">
                          <img
                            className="frame-icon19"
                            alt=""
                            src="/frame8.svg"
                          />
                          <div className="immediate-wrapper">
                            <div className="immediate">Immediate</div>
                          </div>
                        </div>
                        <div className="availability-wrapper">
                          <div className="availability">Availability</div>
                        </div>
                      </div>
                      <div className="card-two-info2">
                        <div className="frame-parent21">
                          <img
                            className="frame-icon20"
                            alt=""
                            src="/frame9.svg"
                          />
                          <div className="allowed-wrapper">
                            <div className="allowed18">Allowed</div>
                          </div>
                        </div>
                        <div className="non-veg-wrapper">
                          <div className="non-veg2">{`Non- Veg `}</div>
                        </div>
                      </div>
                      <div className="card-two-info3">
                        <div className="frame-parent22">
                          <img
                            className="frame-icon21"
                            alt=""
                            src="/frame10.svg"
                          />
                          <div className="flats-apartments-wrapper">
                            <div className="flats-apartments">{`Flats & Apartments`}</div>
                          </div>
                        </div>
                        <div className="property-type-wrapper">
                          <div className="property-type1">Property Type</div>
                        </div>
                      </div>
                    </div>
                    <div className="property-info1">
                      <div className="sqft-block">
                        <div className="sqft-value">
                          <img
                            className="sqft-placeholder-icon"
                            alt=""
                            src="/sqft-placeholder.svg"
                          />
                          <div className="sqft-number">580</div>
                        </div>
                        <div className="sqft-label">
                          <div className="sq-ft">Sq. Ft.</div>
                        </div>
                      </div>
                      <div className="info-blocks">
                        <div className="block-labels-parent">
                          <img
                            className="block-labels-icon"
                            alt=""
                            src="/block-labels.svg"
                          />
                          <div className="facing-details">
                            <div className="east">East</div>
                          </div>
                        </div>
                        <div className="facing-label">
                          <div className="facing">Facing</div>
                        </div>
                      </div>
                      <div className="info-blocks1">
                        <div className="frame-parent23">
                          <img
                            className="frame-icon22"
                            alt=""
                            src="/frame11.svg"
                          />
                          <div className="any-family">
                            Any (Family / Bachelor)
                          </div>
                        </div>
                        <div className="tenant-preference-wrapper">
                          <div className="tenant-preference">
                            Tenant Preference
                          </div>
                        </div>
                      </div>
                      <div className="water-supply2">
                        <div className="municipal-corporation-bmc">
                          Municipal Corporation (BMC)
                        </div>
                        <div className="water-placeholder-parent">
                          <img
                            className="water-placeholder-icon"
                            alt=""
                            src="/water-placeholder.svg"
                          />
                          <div className="water-details">
                            <div className="water-supply3">Water Supply</div>
                          </div>
                        </div>
                      </div>
                      <div className="info-blocks2">
                        <div className="frame-parent24">
                          <img
                            className="frame-icon23"
                            alt=""
                            src="/frame12.svg"
                          />
                          <div className="no-rare-powercut">
                            No/ Rare Powercut
                          </div>
                        </div>
                        <div className="electricity-status-wrapper">
                          <div className="electricity-status">
                            Electricity Status
                          </div>
                        </div>
                      </div>
                      <div className="info-blocks3">
                        <div className="frame-parent25">
                          <img
                            className="frame-icon24"
                            alt=""
                            src="/frame13@2x.png"
                          />
                          <div className="yes-container">
                            <div className="yes1">yes</div>
                          </div>
                        </div>
                        <div className="gated-security-wrapper">
                          <div className="gated-security">Gated Security</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="amenities-container-wrapper">
                <div className="amenities-container">
                  <div className="amenities">Amenities</div>
                  <div className="amenities-list">
                    <div className="instance-parent1">
                      <div className="amenity-items-parent">
                        <div className="amenity-items">
                          <div className="power-backup">
                            <img
                              className="frame-icon25"
                              alt=""
                              src="/frame14@2x.png"
                            />
                          </div>
                        </div>
                        <div className="parking">
                          <div className="security1">24/7 Security</div>
                        </div>
                      </div>
                      <FrameComponent3
                        frame="/frame-4.svg"
                        cCTVCamera="CCTV Camera"
                      />
                      <FrameComponent2
                        group33405="/group-33405@2x.png"
                        lift="Lift"
                      />
                      <FrameComponent3
                        frame="/frame-5.svg"
                        cCTVCamera="Reserved Parking"
                        propOverflow="unset"
                      />
                      <div className="checkbox24">
                        <div className="checkbox-child22" />
                      </div>
                      <div className="checkbox25">
                        <div className="checkbox-child23" />
                      </div>
                      <div className="checkbox26">
                        <div className="checkbox-child24" />
                      </div>
                      <div className="checkbox27">
                        <div className="checkbox-child25" />
                      </div>
                      <AmenitiesRows
                        frame="/frame-6.svg"
                        regularWaterSupply="Regular water supply"
                      />
                      <AmenitiesRows
                        frame="/frame-7.svg"
                        regularWaterSupply="Power Back up-Partial "
                        propWidth="135px"
                      />
                      <AmenitiesRows
                        frame="/frame-7.svg"
                        regularWaterSupply="Power Back up-Full "
                        propWidth="unset"
                      />
                      <AmenitiesRows
                        frame="/group-33422@2x.png"
                        regularWaterSupply="Maintenance staff"
                        propWidth="unset"
                      />
                    </div>
                    <div className="intercom-safety">
                      <FrameComponent2
                        group33405="/frame-17.svg"
                        lift="Intercom"
                        propWidth="unset"
                      />
                      <div className="checkbox28">
                        <div className="checkbox-child26" />
                      </div>
                      <FrameComponent3
                        frame="/frame-18.svg"
                        cCTVCamera="Fire Safety"
                        propOverflow="unset"
                      />
                      <div className="checkbox29">
                        <div className="checkbox-child27" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="component-47">
                <div className="description">Description</div>
                <div className="spread-over-510-sqft-this-hom-parent">
                  <div className="spread-over-510-container">
                    <p className="spread-over-510">{`Spread over 510 sqft. this home is an ideal place to live in.  Access to bus station & medical stores is very easy & convenient from this house.  `}</p>
                    <p className="blank-line">&nbsp;</p>
                    <p className="if-you-are">{`If you are a frequent traveller, then you'll be happy to note that train station is less than 10 minutes from this house.  With PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch your favourite movies running & never worry about missing a show because of traffic. `}</p>
                    <p className="blank-line1">&nbsp;</p>
                    <p className="never-miss-out">
                      Never miss out on lifestyle as Rassaz Mall......
                    </p>
                  </div>
                  <b className="show-more">Show more</b>
                </div>
              </div>
            </div>
          </div>
          <div className="price-details-parent">
            <div className="price-details6">
              <div className="month-parent">
                <div className="month">
                  <span>
                    <b>₹ 20,000</b>
                    <span className="span">{` `}</span>
                    <span className="span1">{`/ `}</span>
                  </span>
                  <span className="month1">
                    <span>Month</span>
                  </span>
                </div>
                <div className="deposit-info">
                  <div className="negotiable">(Rent-Negotiable)</div>
                </div>
              </div>
              <div className="parent">
                <b className="b">₹ 20,000</b>
                <div className="deposit-wrapper">
                  <div className="deposit">(Deposit)</div>
                </div>
              </div>
            </div>
            <div className="form-swipe">
              <div className="component-44">
                <div className="contact-info">
                  <div className="contact-details">
                    <b className="send-an-inquiry">
                      Send an Inquiry for this property?
                    </b>
                    <div className="contact-person">
                      Contact Person : Melvin Lasrado
                    </div>
                  </div>
                </div>
                <div className="input-fields">
                  <div className="text-field-parent">
                    <div className="text-field1">
                      <div className="label34">Label</div>
                      <div className="text-field2">
                        <div className="text-frame">
                          <div className="text-value">First Text Value</div>
                          <div className="cursor">
                            <div className="cursor-child" />
                          </div>
                        </div>
                        <img className="email-icon" alt="" src="/email.svg" />
                        <img
                          className="name-input-icon"
                          alt=""
                          src="/name-input.svg"
                        />
                        <div className="placeholder48">+91-9999999999</div>
                      </div>
                    </div>
                    <div className="text-field3">
                      <div className="label35">Label</div>
                      <div className="text-field4">
                        <div className="text-frame1">
                          <div className="text-value1">First Text Value</div>
                          <div className="cursor1">
                            <div className="cursor-item" />
                          </div>
                        </div>
                        <img className="email-icon1" alt="" src="/email.svg" />
                        <div className="text-field5">
                          <div className="label36">Label</div>
                          <div className="text-field6">
                            <div className="text-frame2">
                              <div className="text-value2">
                                First Text Value
                              </div>
                              <div className="cursor2">
                                <div className="cursor-inner" />
                              </div>
                            </div>
                            <img
                              className="email-icon2"
                              alt=""
                              src="/email.svg"
                            />
                            <div className="placeholder49">Name</div>
                          </div>
                        </div>
                        <div className="text-field7">
                          <div className="text-frame3">
                            <div className="text-value3">First Text Value</div>
                            <div className="cursor3">
                              <div className="cursor-child1" />
                            </div>
                          </div>
                          <img
                            className="email-icon3"
                            alt=""
                            src="/email.svg"
                          />
                          <div className="placeholder50">*</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-field8">
                      <div className="text-frame4">
                        <div className="text-value4">First Text Value</div>
                        <div className="cursor4">
                          <div className="cursor-child2" />
                        </div>
                      </div>
                      <img className="email-icon4" alt="" src="/email.svg" />
                      <div className="text-field9">
                        <div className="label37">Label</div>
                        <div className="text-field10">
                          <div className="text-frame5">
                            <div className="text-value5">First Text Value</div>
                            <div className="cursor5">
                              <div className="cursor-child3" />
                            </div>
                          </div>
                          <img
                            className="email-icon5"
                            alt=""
                            src="/email.svg"
                          />
                          <div className="placeholder51">Email</div>
                        </div>
                      </div>
                      <div className="text-field11">
                        <div className="text-frame6">
                          <div className="text-value6">First Text Value</div>
                          <div className="cursor6">
                            <div className="cursor-child4" />
                          </div>
                        </div>
                        <img className="email-icon6" alt="" src="/email.svg" />
                        <div className="placeholder52">*</div>
                      </div>
                    </div>
                    <div className="name-fields">
                      <div className="text-field12">
                        <div className="text-frame7">
                          <div className="text-value7">First Text Value</div>
                          <div className="cursor7">
                            <div className="cursor-child5" />
                          </div>
                        </div>
                        <img className="email-icon7" alt="" src="/email1.svg" />
                        <div className="placeholder53">+91</div>
                      </div>
                      <div className="text-field13">
                        <div className="text-frame8">
                          <div className="text-value8">First Text Value</div>
                          <div className="cursor8">
                            <div className="cursor-child6" />
                          </div>
                        </div>
                        <img className="email-icon8" alt="" src="/email.svg" />
                        <div className="text-field14">
                          <div className="label38">Label</div>
                          <div className="text-field15">
                            <div className="text-frame9">
                              <div className="text-value9">
                                First Text Value
                              </div>
                              <div className="cursor9">
                                <div className="cursor-child7" />
                              </div>
                            </div>
                            <img
                              className="email-icon9"
                              alt=""
                              src="/email.svg"
                            />
                            <div className="placeholder54">999-999-9999</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inquiry-buttons">
                  <div className="i-would-like-more-information-wrapper">
                    <div className="i-would-like">
                      I would like more information about Sector 5, shanti
                      nagar, anubhav society
                    </div>
                  </div>
                </div>
                <div className="inquiry-buttons1">
                  <div className="buttons7">
                    <b className="view-properties7">SEND INQUIRY</b>
                  </div>
                </div>
              </div>
              <div className="component-45">
                <div className="booking-content-parent">
                  <div className="booking-content">
                    <div className="booking-header">
                      <b className="book-a-visit">
                        Book a Visit to the property
                      </b>
                      <div className="schedule-a-visit">{`(Schedule a visit to the property with us from your options ) `}</div>
                    </div>
                  </div>
                  <div className="calendar">
                    <img
                      className="date-selector-icon"
                      alt=""
                      src="/date-selector@2x.png"
                    />
                    <div className="date-component">
                      <div className="component-37">
                        <b className="monday">Monday</b>
                        <div className="empty-weekdays">20</div>
                        <div className="may">May</div>
                      </div>
                      <div className="component-38">
                        <b className="monday1">Tuesday</b>
                        <div className="div96">21</div>
                        <div className="may1">May</div>
                      </div>
                      <div className="component-39">
                        <b className="monday2">Wednesday</b>
                        <div className="div97">22</div>
                        <div className="may2">May</div>
                      </div>
                      <div className="component-40">
                        <b className="monday3">Thursday</b>
                        <div className="div98">23</div>
                        <div className="may3">May</div>
                      </div>
                      <div className="component-41">
                        <b className="monday4">Friday</b>
                        <div className="div99">24</div>
                        <div className="may4">May</div>
                      </div>
                    </div>
                    <img
                      className="date-selector-icon1"
                      alt=""
                      src="/date-selector@2x.png"
                    />
                  </div>
                </div>
                <div className="time-component">
                  <div className="time-selector">
                    <div className="component-34">
                      <b className="am">11:00 am</b>
                    </div>
                    <div className="component-35">
                      <b className="am1">12:00 am</b>
                    </div>
                    <div className="component-36">
                      <b className="am2">1:00 pm</b>
                    </div>
                    <div className="component-341">
                      <b className="am3">2:00 pm</b>
                    </div>
                    <div className="component-351">
                      <b className="am4">4:00 pm</b>
                    </div>
                    <div className="component-361">
                      <b className="am5">5:00 pm</b>
                    </div>
                    <div className="component-342">
                      <b className="am6">6:00 pm</b>
                    </div>
                    <div className="component-352">
                      <b className="am7">7:00 pm</b>
                    </div>
                    <div className="component-362">
                      <b className="am8">8:00 pm</b>
                    </div>
                  </div>
                </div>
                <div className="booking-button">
                  <div className="buttons8">
                    <b className="view-properties8">Schedule a Visit</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  className: PropTypes.string,
};

export default Breadcrumb;
