import Steps from "./Steps";
import PropTypes from "prop-types";
import "./PropertyContainer.css";
import { useNavigate } from "react-router-dom";

const PropertyContainer = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/buyersrenters-dashboard");
  };

  return (
    <div className={`property-container ${className}`}>
      <div className="slogan-container">
        <h1 className="sell-or-rent">Sell or Rent your Property For Free</h1>
        <div className="whether-youre-ready">
          Whether you’re ready to sell or looking for answers, we’ll guide you
          with data and expertise specific to your needs.
        </div>
      </div>
      <div className="upload-steps-container-wrapper">
        <div className="upload-steps-container">
          <Steps />
          <div className="landlord-details">
            <div className="lets-get-you-started-wrapper">
              <h3 className="lets-get-you">LETS GET YOU STARTED !</h3>
            </div>
            <form className="seller-login">
              <div className="seller-get-startedlog-in">
                <div className="login-input-container">
                  <div className="label10">
                    <div className="empty-title1">*</div>
                    <div className="title10">I am :</div>
                  </div>
                  <div className="component-1041">
                    <div className="input-field-component-containe">
                      <div className="component-851">
                        <div className="component-85-parent3">
                          <input className="component-858" type="radio"  name="userRole" />
                        </div>
                      </div>
                      <div className="allowed">Owner</div>
                    </div>
                    <div className="input-field-component-containe">
                      <div className="component-851">
                        <div className="component-85-parent3">
                          <input className="component-858" type="radio" name="userRole"/>
                        </div>
                      </div>
                      <div className="allowed">Builder</div>
                    </div>
                  </div>
                </div>
                <div className="name-country-container">
                  <div className="name-country-elements-containe">
                    <div className="label11">
                      <div className="title11">Your Name</div>
                      <div className="country-label">*</div>
                    </div>
                    <div className="name">
                      <div className="input5">
                        <img
                          className="input-prefix-icon5"
                          alt=""
                          src="/inputprefix@2x.png"
                        />
                        <input
                          className="placeholder8"
                          placeholder="Name"
                          type="text"
                        />
                        <img
                          className="input-suffix-icon5"
                          alt=""
                          src="/inputsuffix@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="name-country-elements-containe1">
                    <div className="label12">
                      <div className="title12">Country</div>
                      <div className="div45">*</div>
                    </div>
                    <div className="country">
                      <div className="input6">
                        <img
                          className="input-prefix-icon6"
                          alt=""
                          src="/inputprefix@2x.png"
                        />
                        <div className="placeholder9">
                          <div className="placeholder10">India</div>
                        </div>
                        <img
                          className="input-icon"
                          alt=""
                          src="/input-icon.svg"
                        />
                        <img
                          className="input-suffix-icon6"
                          alt=""
                          src="/inputsuffix@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="email-phone-container">
                  <div className="email-phone-elements">
                    <div className="label13">
                      <div className="title13">Phone</div>
                      <div className="phone-label">*</div>
                    </div>
                    <div className="email-phone-input-container">
                      <div className="inputs">
                        <div className="text-field">
                          <div className="state-layer">
                            <div className="content">
                              <div className="label-text">
                                <div className="label-text1">+91</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="phone-input-container"
                            alt=""
                            src="/frame-2.svg"
                          />
                        </div>
                      </div>
                      <div className="phone">
                        <div className="input7">
                          <img
                            className="input-prefix-icon7"
                            alt=""
                            src="/inputprefix@2x.png"
                          />
                          <div className="placeholder11">
                            <div className="placeholder12">000-000-0000</div>
                          </div>
                          <img
                            className="input-suffix-icon7"
                            alt=""
                            src="/inputsuffix@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="title14">OR</div>
                  <div className="email-phone-elements1">
                    <div className="label14">
                      <div className="title15">Email</div>
                      <div className="div46">*</div>
                    </div>
                    <div className="email">
                      <div className="input8">
                        <img
                          className="input-prefix-icon8"
                          alt=""
                          src="/inputprefix@2x.png"
                        />
                        <div className="placeholder13">
                        <input
                          className="placeholder8"
                          placeholder="Email"
                          type="text"
                        />
                        </div>
                        <img
                          className="input-suffix-icon8"
                          alt=""
                          src="/inputsuffix@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field1">
                  <div className="input9">
                    <img
                      className="input-prefix-icon9"
                      alt=""
                      src="/inputprefix1@2x.png"
                    />
                    <div className="placeholder15" />
                    <img
                      className="input-suffix-icon9"
                      alt=""
                      src="/inputsuffix1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="help-buttons-container">
                <div className="need-help-call-9999999999-frame">
                  <div className="need-help-call-9999999999-container1">
                    <span className="need-help">{`Need Help? `}</span>
                    <span className="call-99999999991">Call 9999999999</span>
                  </div>
                </div>
                <button className="buttons1" onClick={handleNextClick}>
                  <div className="view-properties1">NEXT</div>
                </button>
              </div>
              <div className="property-shape-container-parent">
                <div className="property-shape-container">
                  <div className="outer-shape" />
                </div>
                <div className="inner-shape" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyContainer.propTypes = {
  className: PropTypes.string,
};

export default PropertyContainer;
