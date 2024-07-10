import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent31.css";

const FrameComponent3 = ({
  className = "",
  frame,
  cCTVCamera,
  propOverflow,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className={`frame-parent12 ${className}`} style={frameDiv1Style}>
      <div className="frame-wrapper4">
        <img className="frame-icon10" alt="" src={frame} />
      </div>
      <div className="cctv-camera-container">
        <div className="cctv-camera1">{cCTVCamera}</div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  frame: PropTypes.string,
  cCTVCamera: PropTypes.string,

  /** Style props */
  propOverflow: PropTypes.any,
};

export default FrameComponent3;
