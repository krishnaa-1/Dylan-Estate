import Steps from "./Steps";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/sellers-flow-property-detail1");
  };

  return (
    <section className={`hero ${className}`}>
      <div className="hero-content">
        <div className="sell-or-rent-your-property-for-parent">
          <h1 className="sell-or-rent1">Sell or Rent your Property For Free</h1>
          <div className="whether-youre-ready1">
            Whether you’re ready to sell or looking for answers, we’ll guide you
            with data and expertise specific to your needs.
          </div>
        </div>
        <div className="steps-container-wrapper">
          <div className="steps-container">
            <Steps />
            <div className="landlord-details1">
              <div className="call-to-action">
                <div className="lets-get-you-started-parent">
                  <h3 className="lets-get-you1">LETS GET YOU STARTED !</h3>
                  <div className="left-button-spacer-parent">
                    <div className="left-button-spacer">
                      <div className="left-button-spacer-child" />
                    </div>
                    <div className="frame-child8" />
                  </div>
                </div>
                <div className="form">
                  <div className="seller-get-startedlog-in1">
                    <div className="login-container">
                      <div className="label15">
                        <div className="title-placeholder">
                          <div className="title16">
                            Enter OTP sent on 999-999-9999
                          </div>
                          <div className="div47">*</div>
                        </div>
                        <div className="placeholder16">Change</div>
                      </div>
                      <div className="verification-container">
                        <div className="otp-seller">
                          <div className="input10">
                            <img
                              className="input-prefix-icon10"
                              alt=""
                              src="/inputprefix2@2x.png"
                            />
                            <input
                          className="placeholder8"
                          placeholder="0 0 0 0"
                          type="number"
                        />
                            <img
                              className="input-suffix-icon10"
                              alt=""
                              src="/inputsuffix@2x.png"
                            />
                          </div>
                        </div>
                        <div className="label16">
                          <div className="placeholder18">Resend OTP</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent3">
                <div className="need-help-call-9999999999-wrapper1">
                  <div className="need-help-call-9999999999-container2">
                    <span>{`Need Help? `}</span>
                    <span className="call-99999999992">Call 9999999999</span>
                  </div>
                </div>
                <button className="buttons2" onClick={handleNextClick}> 
                  <div className="view-properties2">NEXT</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
