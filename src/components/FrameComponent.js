import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "", viewProperties }) => {
  return (
    <div className={`frame-parent6 ${className}`}>
      <div className="need-help-call-9999999999-wrapper3">
        <div className="need-help-call-9999999999-container4">
          <span>{`Need Help? `}</span>
          <span className="call-99999999994">Call 9999999999</span>
        </div>
      </div>
      <button className="buttons4">
        <b className="view-properties4">{viewProperties}</b>
      </button>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  viewProperties: PropTypes.string,
};

export default FrameComponent;
