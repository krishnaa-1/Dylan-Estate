import PropTypes from "prop-types";
import "./NAVBARS1.css";

const NAVBARS = ({ className = "" }) => {
  return (
    <header className={`nav-bars4 ${className}`}>
      <div className="logo-wrapper3">
        <div className="logo8">
          <div className="logo9">
            <div className="frame-parent4">
              <div className="vector-group">
                <img
                  className="frame-child13"
                  alt=""
                  src="/left-logo-divider.svg"
                />
                <div className="vector-container">
                  <img
                    className="frame-child14"
                    loading="lazy"
                    alt=""
                    src="/vector-3.svg"
                  />
                  <div className="frame-parent5">
                    <div className="rectangle-parent3">
                      <div className="frame-child15" />
                      <div className="frame-child16" />
                    </div>
                    <div className="rectangle-parent4">
                      <div className="frame-child17" />
                      <div className="frame-child18" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="dylan-estate-container">
                <a className="dylan-estate4">Dylan Estate</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="component-554">
        <b className="home24">ABOUT US</b>
      </div>
      <div className="component-52-container">
        <div className="component-528">
          <a className="home25">PROPERTIES</a>
        </div>
        <div className="component-529">
          <b className="home26">MY DASHBOARD/ACTIVITY</b>
        </div>
        <div className="component-584">
          <b className="home27">LIST YOUR PROPERTY</b>
        </div>
        <div className="component-564">
          <a className="home28">CONTACT US</a>
        </div>
        <div className="component-57-frame">
          <div className="component-574">
            <a className="home29">MORE</a>
          </div>
        </div>
        <div className="line-frame">
          <div className="frame-child19" />
        </div>
        <img className="frame-icon7" loading="lazy" alt="" src="/frame.svg" />
        <div className="frame-wrapper1">
          <img className="frame-icon8" alt="" src="/frame-1.svg" />
        </div>
      </div>
    </header>
  );
};

NAVBARS.propTypes = {
  className: PropTypes.string,
};

export default NAVBARS;
