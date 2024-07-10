import PropTypes from "prop-types";
import "./Locality.css";

const Locality = ({ className = "" }) => {
  return (
    <div className={`locality1 ${className}`}>
      <div className="neighborhood2">
        <div className="about-miraroad">About Miraroad</div>
        <div className="description1">
          <div className="spread-over-510-container1">
            <p className="spread-over-5101">{`Spread over 510 sqft. this home is an ideal place to live in.  Access to bus station & medical stores is very easy & convenient from this house.  `}</p>
            <p className="blank-line2">&nbsp;</p>
            <p className="if-you-are1">{`If you are a frequent traveller, then you'll be happy to note that train station is less than 10 minutes from this house.  With PVR Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch your favourite movies running & never worry about missing a show because of traffic. `}</p>
            <p className="blank-line3">&nbsp;</p>
            <p className="never-miss-out1">
              Never miss out on lifestyle as Rassaz Mall......
            </p>
          </div>
          <b className="show-more2">Show more</b>
        </div>
        <div className="buttons11">
          <div className="view-properties11">Write a Review</div>
        </div>
      </div>
    </div>
  );
};

Locality.propTypes = {
  className: PropTypes.string,
};

export default Locality;
