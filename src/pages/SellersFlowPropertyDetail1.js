import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormHeadingContainer from "../components/FormHeadingContainer";
import PropertyTypeContainer from "../components/PropertyTypeContainer";
import PropertyDetailItems from "../components/PropertyDetailItems";
import VerticalFormItemInput1 from "../components/VerticalFormItemInput1";
import VerticalFormItemInput from "../components/VerticalFormItemInput";
import "./SellersFlowPropertyDetail1.css";

const SellersFlowPropertyDetail1 = () => {
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useState("");

  const handleNextClick = () => {
    navigate("/sellers-flow-location-detail");
  };

  const handlePropertyTypeChange = (type) => {
    setPropertyType(type);
  };

  return (
    <div className="sellers-flow-property-detail1">
      <header className="nav-bars1">
        <div className="logo-container">
          <div className="logo2">
            <div className="logo3">
              <div className="search-parent">
                <div className="search">
                  <img
                    className="search-icon"
                    alt=""
                    src="/left-logo-divider.svg"
                  />
                  <div className="search-input">
                    <img
                      className="search-button-icon"
                      loading="lazy"
                      alt=""
                      src="/vector-3.svg"
                    />
                    <div className="profile">
                      <div className="profile-icon">
                        <div className="profile-image" />
                        <div className="profile-dropdown" />
                      </div>
                      <div className="profile-icon1">
                        <div className="profile-icon-child" />
                        <div className="profile-icon-item" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page-title">
                  <a className="dylan-estate1">Dylan Estate</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="component-551">
          <b className="home6">ABOUT US</b>
        </div>
        <div className="component-52-parent">
          <div className="component-522">
            <a className="home7">PROPERTIES</a>
          </div>
          <div className="component-523">
            <b className="home8">MY DASHBOARD/ACTIVITY</b>
          </div>
          <div className="component-581">
            <b className="home9">LIST YOUR PROPERTY</b>
          </div>
          <div className="component-561">
            <a className="home10">CONTACT US</a>
          </div>
          <div className="component-57-wrapper">
            <div className="component-571">
              <a className="home11">MORE</a>
            </div>
          </div>
          <div className="line-wrapper">
            <div className="frame-child2" />
          </div>
          <img
            className="content-icon"
            loading="lazy"
            alt=""
            src="/frame.svg"
          />
          <div className="property-details-container-wrapper">
            <img
              className="property-details-container"
              alt=""
              src="/frame-1.svg"
            />
          </div>
        </div>
      </header>
      <section className="sellers-flow-property-detail-inner">
        <div className="help-content-parent">
          <img className="help-content-icon" alt="" src="/frame-21.svg" />
          <div className="property-details-wrapper">
            <div className="property-details">
              <FormHeadingContainer />
              <div className="property-details-inner">
                <div className="rectangle-container">
                  <div className="frame-child3" />
                  <div className="frame-child4" />
                </div>
              </div>
              <div className="property-details-final-wrapper">
                <div className="property-details-final">
                  <PropertyTypeContainer />
                  <div className="property-type-info-container">
                    <div className="label18">
                      <div className="property-type-info">*</div>
                      <div className="title17">Property Type :</div>
                    </div>
                    <div className="component-130">
                      <div className="component-85-parent2">
                        <input
                          className="component-857"
                          type="radio"
                          name="propertyType"
                          onChange={() =>
                            handlePropertyTypeChange("Residential")
                          }
                        />

                        <div className="allowed6">Residential</div>
                      </div>
                      <div className="component-85-parent3">
                        <input
                          className="component-858"
                          type="radio"
                          name="propertyType"
                          onChange={() =>
                            handlePropertyTypeChange("Commercial")
                          }
                        />

                        <div className="allowed7">Commercial</div>
                      </div>
                      <div className="component-85-parent4">
                        <input
                          className="component-858"
                          type="radio"
                          name="propertyType"
                          onChange={() =>
                            handlePropertyTypeChange("Land / Plot")
                          }
                        />

                        <div className="allowed7">Land / Plot</div>
                      </div>
                    </div>
                  </div>
                  {propertyType === "Residential" && (
                    <div className="residen component-85-parent6 ">
                      <div className="component-9">
                        <div className="div3">Flat / Apartment</div>
                      </div>
                      <div className="component-9">
                        <div className="div3">House / Villa</div>
                      </div>
                    </div>
                  )}

                  {propertyType === "Commercial" && (
                    <div className="residen component-85-parent6 allowed10 additional-features-checkbox-parent">
                      <div className="component-9">
                        <div className="div3">Office Space</div>
                      </div>
                      <div className="component-9">
                        <div className="div3">Co Working</div>
                      </div>
                      <div className="component-9">
                        <div className="div3">Restaurant / Cafe</div>
                      </div>
                      <div className="component-9">
                        <div className="div3">Showroom</div>
                      </div>
                      <div className="component-9">
                        <div className="div3">Industrial Bldg.</div>
                      </div>
                      <div className="component-9">
                        <div className="div3">Industrial Shed</div>
                      </div>
                      <div className="component-9">
                        <div className="div3">Warehouse</div>
                      </div>
                    </div>
                  )}

                  <div className="form-fields">
                    <PropertyDetailItems
                      title="Built up Area"
                      inputPrefix="/inputprefix2@2x.png"
                      placeholder="580 Sq. Ft."
                    />
                    <PropertyDetailItems
                      title="Carpet Area"
                      inputPrefix="/inputprefix2@2x.png"
                      placeholder="580 Sq. Ft."
                    />
                  </div>
                  <div className="form-fields1">
                    <div className="vertical-form-iteminput-parent">
                      <VerticalFormItemInput1
                        title="Property on Floor"
                        inputPrefix="/inputprefix2@2x.png"
                        placeholder="2 "
                      />
                      <VerticalFormItemInput1
                        title="Total Floors"
                        inputPrefix="/inputprefix2@2x.png"
                        placeholder="5"
                      />
                    </div>
                    <div className="vertical-form-iteminput">
                      <div className="label">
                        <div className="title">Property Facing</div>
                        <div className="div">*</div>
                      </div>
                      <div className="facing-east">
                        <div className="input">
                          <img
                            className="input-prefix-icon"
                            alt=""
                            src="/inputprefix2@2x.png"
                          />
                          <select className="placeholder">
                            <option value="North">North</option>
                            <option value="Northeast">Northeast</option>
                            <option value="East">East</option>
                            <option value="Southeast">Southeast</option>
                            <option value="South">South</option>
                            <option value="Southwest">Southwest</option>
                            <option value="West">West</option>
                            <option value="Northwest">Northwest</option>
                          </select>

                          <img
                            className="input-suffix-icon"
                            alt=""
                            src="/inputsuffix@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-fields2">
                    <div className="vertical-form-iteminput1">
                      <div className="label1">
                        <div className="title1">Property Age</div>
                        <div className="div1">*</div>
                      </div>
                      <div className="component-16">
                        <div className="component-8">
                          <div className="div2">Any</div>
                        </div>
                        <div className="component-9">
                          <div className="div3">Less than 1 Year</div>
                        </div>
                        <div className="component-10">
                          <div className="div4">1- 3 Years</div>
                        </div>
                        <div className="component-11">
                          <div className="empty-input">3- 5 Years</div>
                        </div>
                        <div className="component-12">
                          <div className="empty-value">5 - 10 Years</div>
                        </div>
                        <div className="component-13">
                          <div className="last-inputs">
                            Greater than 10 Years
                          </div>
                        </div>
                        <div className="component-14">
                          <div className="div5">5+ BHK</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-fields3">
                    <div className="vertical-form-iteminput2">
                      <div className="label2">
                        <div className="title2">BHK Type</div>
                        <div className="div6">*</div>
                      </div>
                      <div className="component-161">
                        <div className="component-81">
                          <div className="div7">Any</div>
                        </div>
                        <div className="component-91">
                          <div className="div8">1 RK</div>
                        </div>
                        <div className="component-101">
                          <div className="div9">1 BHK</div>
                        </div>
                        <div className="component-111">
                          <div className="div10">2 BHK</div>
                        </div>
                        <div className="component-121">
                          <div className="div11">3 BHK</div>
                        </div>
                        <div className="component-131">
                          <div className="div12">4 BHK</div>
                        </div>
                        <div className="component-141">
                          <div className="last-value">5+ BHK</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-fields4">
                    <div className="vertical-form-iteminput3">
                      <div className="label3">
                        <div className="title3">Bathrooms/ Toilets</div>
                        <div className="div13">*</div>
                      </div>
                      <div className="component-162">
                        <div className="component-82">
                          <div className="div14">Any</div>
                        </div>
                        <div className="component-92">
                          <div className="div15">1</div>
                        </div>
                        <div className="component-102">
                          <div className="div16">2</div>
                        </div>
                        <div className="component-112">
                          <div className="div17">3</div>
                        </div>
                        <div className="component-122">
                          <div className="div18">4</div>
                        </div>
                        <div className="component-132">
                          <div className="div19">5</div>
                        </div>
                        <div className="component-142">
                          <div className="div20">6+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-fields5">
                    <div className="vertical-form-iteminput4">
                      <div className="label4">
                        <div className="title4">Balcony</div>
                        <div className="div21">*</div>
                      </div>
                      <div className="component-163">
                        <div className="component-83">
                          <div className="div22">1</div>
                        </div>
                        <div className="component-93">
                          <div className="div23">0</div>
                        </div>
                        <div className="component-103">
                          <div className="div24">1</div>
                        </div>
                        <div className="component-113">
                          <div className="div25">2</div>
                        </div>
                        <div className="component-123">
                          <div className="div26">3</div>
                        </div>
                        <div className="component-133">
                          <div className="div27">4 +</div>
                        </div>
                        <div className="component-143">
                          <div className="div28">6+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-fields6">
                    <div className="vertical-form-iteminput5">
                      <div className="label5">
                        <div className="title5">Tenant Preference</div>
                        <div className="div29">*</div>
                      </div>
                      <div className="component-164">
                        <div className="component-84">
                          <div className="div30">Any</div>
                        </div>
                        <div className="component-94">
                          <div className="div31">Family</div>
                        </div>
                        <div className="component-104">
                          <div className="div32">Bachelor (Man)</div>
                        </div>
                        <div className="component-114">
                          <div className="div33">Bachelor (Women)</div>
                        </div>
                        <div className="component-124">
                          <div className="div34">4</div>
                        </div>
                        <div className="component-134">
                          <div className="div35">5</div>
                        </div>
                        <div className="component-144">
                          <div className="div36">6+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-fields7">
                    <div className="vertical-form-iteminput6">
                      <div className="label6">
                        <div className="title6">Availability</div>
                        <div className="div37">*</div>
                      </div>
                      <div className="component-17">
                        <div className="component-85">
                          <div className="div38">Immediate</div>
                        </div>
                        <div className="component-95">
                          <div className="div39">within 15 days</div>
                        </div>
                        <div className="component-105">
                          <div className="div40">within 1 month</div>
                        </div>
                        <div className="component-115">
                          <div className="div41">within 2 months</div>
                        </div>
                        <div className="component-125">
                          <div className="div42">{`>10`}</div>
                        </div>
                        <div className="component-135">
                          <div className="div43">5</div>
                        </div>
                        <div className="component-145">
                          <div className="div44">6+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <VerticalFormItemInput />
                  <div className="field">
                    <div className="input1">
                      <img
                        className="input-prefix-icon1"
                        alt=""
                        src="/inputprefix3@2x.png"
                      />
                      <div className="placeholder1" />
                      <img
                        className="input-suffix-icon1"
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
    </div>
  );
};

export default SellersFlowPropertyDetail1;
