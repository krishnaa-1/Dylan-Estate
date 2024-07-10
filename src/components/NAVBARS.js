import PropTypes from "prop-types";
import "./NAVBARS.css";

const NAVBARS = ({ className = "" }) => {
  return (
    <header className={`nav-bars3 ${className}`}>
      <div className="nav-bar">
        <div className="logo6">
          <div className="logo7">
            <div className="logo-wrapper2">
              <div className="logo-spacer">
                <img
                  className="left-logo-divider"
                  alt=""
                  src="/left-logo-divider.svg"
                />
                <div className="logo-divider-wrapper">
                  <img
                    className="right-logo-divider"
                    loading="lazy"
                    alt=""
                    src="/vector-3.svg"
                  />
                  <div className="divider-container">
                    <div className="divider-spacer">
                      <div className="left-divider" />
                      <div className="right-divider" />
                    </div>
                    <div className="divider-spacer1">
                      <div className="divider-spacer-child" />
                      <div className="divider-spacer-item" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="estate-name-container">
                <a className="dylan-estate3">Dylan Estate</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="component-553">
        <b className="home18">ABOUT US</b>
      </div>
      <div className="content1">
        <div className="component-526">
          <a className="home19">PROPERTIES</a>
        </div>
        <div className="component-527">
          <b className="home20">MY DASHBOARD/ACTIVITY</b>
        </div>
        <div className="component-583">
          <b className="home21">LIST YOUR PROPERTY</b>
        </div>
        <div className="component-563">
          <a className="home22">CONTACT US</a>
        </div>
        <div className="home-title">
          <div className="component-573">
            <b className="home23">MORE</b>
          </div>
        </div>
        <div className="divider">
          <div className="divider-child" />
        </div>
        <img
          className="empty-container-icon"
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
        <div className="nested-container-wrapper">
          <img className="nested-container-icon" alt="" src="/frame-1.svg" />
        </div>
      </div>
    </header>
  );
};

NAVBARS.propTypes = {
  className: PropTypes.string,
};

export default NAVBARS;
