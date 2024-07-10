import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent21.css";

const FrameComponent2 = ({ className = "", group33405, lift, propWidth }) => {
  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`frame-parent13 ${className}`} style={frameDiv2Style}>
      <img className="instance-item" alt="" src={group33405} />
      <div className="frame-wrapper5">
        <div className="lift-container">
          <div className="lift1">{lift}</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  group33405: PropTypes.string,
  lift: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default FrameComponent2;
