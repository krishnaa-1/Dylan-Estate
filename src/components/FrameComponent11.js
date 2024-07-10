import PropTypes from "prop-types";
import "./FrameComponent11.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`neighborhood-wrapper ${className}`}>
      <div className="neighborhood1">
        <div className="ratings-reviews">{`Ratings & Reviews`}</div>
        <div className="reviews">
          <div className="review-card">
            <div className="review-content">
              <div className="reviewer-details">
                <div className="reviewer-info">
                  <img
                    className="reviewer-image-icon"
                    alt=""
                    src="/reviewer-image.svg"
                  />
                </div>
                <div className="reviewer-name-time">
                  <b className="aishwarya-malik">Aishwarya Malik</b>
                  <div className="tenant-8">Tenant ( 8 months )</div>
                </div>
              </div>
              <div className="review-spacing">
                <div className="empty-review-space">4.5</div>
                <img
                  className="review-image-icon"
                  alt=""
                  src="/review-image.svg"
                />
              </div>
            </div>
            <div className="good-society-parent">
              <div className="good-society">Good Society</div>
              <div className="the-garden-view-container">
                <p className="the-garden-view">
                  The garden view is mesmerizing, the exposure of natural light
                  is good.
                </p>
                <p className="easy-access-to">
                  Easy access to stores, markets and schools.
                </p>
              </div>
            </div>
          </div>
          <div className="review-card-copy">
            <div className="review-content-copy">
              <div className="reviewer-details-copy">
                <div className="reviewer-info-copy">
                  <img
                    className="reviewer-image-copy"
                    alt=""
                    src="/reviewer-image.svg"
                  />
                </div>
                <div className="reviewer-name-time-copy">
                  <b className="rajendra-prasad">Rajendra Prasad</b>
                  <div className="owner-10-years">Owner (10+ years)</div>
                </div>
              </div>
              <div className="review-spacing-copy">
                <div className="empty-review-space1">4.5</div>
                <img
                  className="review-image-copy"
                  alt=""
                  src="/review-image.svg"
                />
              </div>
            </div>
            <div className="good-society-apartment-parent">
              <div className="good-society1">{`Good Society & Apartment`}</div>
              <div className="with-its-thoughtfully-container">
                <p className="with-its-thoughtfully">
                  With its thoughtfully designed apartments, power backup, and
                  24x7 security, it offers a secure and worry-free living
                  experience.
                </p>
                <p className="easy-access-to1">
                  Easy access to stores, markets and schools....
                </p>
              </div>
            </div>
            <b className="show-more1">Show more</b>
          </div>
        </div>
        <div className="buttons10">
          <div className="view-properties10">Write a Review</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
