import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="logo12" />
      <div className="footer-wrapper">
        <div className="content2">
          <div className="footer-top">
            <div className="details">
              <div className="brand">
                <img className="brand-icon" alt="" src="/brand-icon.svg" />
                <div className="brand-name">
                  <img className="logo-icon1" alt="" src="/logo.svg" />
                  <div className="name1">
                    <div className="rectangle-parent10">
                      <div className="frame-child30" />
                      <div className="frame-child31" />
                    </div>
                    <div className="rectangle-parent11">
                      <div className="frame-child32" />
                      <div className="frame-child33" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="estate-name1">
                <b className="dylan-estate6">Dylan Estate</b>
              </div>
            </div>
            <div className="footer-navigation">
              <div className="links">
                <div className="component-587">
                  <div className="component-531">
                    <div className="home36">HOME</div>
                  </div>
                  <div className="component-541">
                    <div className="home37">PROPERTIES</div>
                  </div>
                  <div className="component-556">
                    <div className="home38">LIST YOUR PROPERTY</div>
                  </div>
                  <div className="component-566">
                    <div className="home39">SAVED SEARCHES</div>
                  </div>
                </div>
                <div className="component-59">
                  <div className="component-532">
                    <div className="home40">ABOUT MIRA ROAD</div>
                  </div>
                  <div className="component-542">
                    <div className="home41">EMI CALCULATOR</div>
                  </div>
                  <div className="component-567">
                    <div className="home42">TESTAMONIALS</div>
                  </div>
                  <div className="component-576">
                    <div className="home43">EXPLORE NEIGHBORHOOD</div>
                  </div>
                </div>
                <div className="component-60">
                  <div className="component-557">
                    <div className="home44">ABOUT US</div>
                  </div>
                  <div className="component-568">
                    <div className="home45">CONTACT US</div>
                  </div>
                  <div className="component-577">
                    <div className="home46">FAQ’S</div>
                  </div>
                  <div className="component-578">
                    <div className="home47" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="info">
            <div className="contact-us">CONTACT US</div>
            <div className="b28-shop-no">{`B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti `}</div>
          </div>
          <div className="info1">
            <div className="office-hours">OFFICE HOURS</div>
            <div className="b28-shop-no1">{`B/28, Shop No 1, Madhukar Co Op Housing Society, Sector 5, Shanti `}</div>
          </div>
        </div>
      </div>
      <div className="legal">
        <div className="separator1" />
        <div className="copyright">
          <div className="dylan-estates-all-container">
            <p className="dylan-estates-all">
              © 2024 Dylan Estates. All rights reserved. Dylan Estates- Your
              Neighborhood Experts
            </p>
            <p className="privacy-policy-terms-condi">
              <span className="privacy-policy">Privacy Policy</span> | 
              <span className="terms-conditions">{`Terms & Conditions`}</span> 
            </p>
          </div>
          <div className="language">
            <div className="options">
              <img className="dropdown-icon" alt="" src="/dropdown.svg" />
              <div className="language-selector">
                <b className="english-in">English (IN)</b>
              </div>
            </div>
            <b className="inr">
              <span className="span2">₹</span>
              <span>
                {`  `}
                <span className="inr1">INR</span>
              </span>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
