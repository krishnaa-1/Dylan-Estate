import PropTypes from "prop-types";
import "./NAVBARS2.css";

const NAVBARS = ({ className = "" }) => {
  return (
    <div className={`nav-bars5 ${className}`}>
      <div className="logo-wrapper4">
        <div className="logo10">
          <div className="logo11">
            <div className="left-logo-border-parent">
              <div className="left-logo-border">
                <img
                  className="left-logo-border-child"
                  alt=""
                  src="/left-logo-divider.svg"
                />
                <div className="center-logo">
                  <img
                    className="center-logo-child"
                    alt=""
                    src="/vector-3.svg"
                  />
                  <div className="right-logo">
                    <div className="rectangle-parent8">
                      <div className="frame-child25" />
                      <div className="frame-child26" />
                    </div>
                    <div className="rectangle-parent9">
                      <div className="frame-child27" />
                      <div className="frame-child28" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="site-name">
                <b className="dylan-estate5">Dylan Estate</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="component-58-parent">
        <div className="component-585">
          <div className="component-53">
            <div className="home30">ALL PROPERTIES</div>
          </div>
          <div className="component-54">
            <div className="home31">WISHLIST</div>
          </div>
          <div className="component-555">
            <div className="home32">SAVED SEARCH</div>
          </div>
          <div className="component-565">
            <div className="home33">LIST YOUR PROPERTY</div>
          </div>
          <div className="component-575">
            <div className="home34">MORE</div>
          </div>
          <div className="component-586">
            <div className="home35">LIST YOUR PROPERTY</div>
          </div>
        </div>
        <div className="frame-child29" />
        <div className="search-filter">
          <img className="search-icon1" alt="" src="/search.svg" />
          <img className="filter-icon" alt="" src="/filter.svg" />
        </div>
      </div>
    </div>
  );
};

NAVBARS.propTypes = {
  className: PropTypes.string,
};

export default NAVBARS;
