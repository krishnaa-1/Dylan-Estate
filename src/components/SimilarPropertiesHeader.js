import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./SimilarPropertiesHeader.css";

const SimilarPropertiesHeader = ({ className = "" }) => {
  return (
    <div className={`similar-properties-header ${className}`}>
      <div className="similar-properties-in">
        Similar Properties In Mira road
      </div>
      <div className="property-cards">
        <FrameComponent />
        <FrameComponent />
        <FrameComponent />
        <FrameComponent />
      </div>
    </div>
  );
};

SimilarPropertiesHeader.propTypes = {
  className: PropTypes.string,
};

export default SimilarPropertiesHeader;
