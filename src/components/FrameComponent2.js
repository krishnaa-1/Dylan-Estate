import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "", group33405, lift }) => {
  return (
    <div className={`instance-group ${className}`}>
      <div className="frame-parent7">
        <img className="instance-child" alt="" src={group33405} />
        <div className="frame-wrapper2">
          <div className="lift-wrapper">
            <div className="lift">{lift}</div>
          </div>
        </div>
      </div>
      <input className="component-8511" type="radio" />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  group33405: PropTypes.string,
  lift: PropTypes.string,
};

export default FrameComponent2;
