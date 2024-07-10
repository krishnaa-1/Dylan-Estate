import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({
  className = "",
  shoppingCenterContainer,
  cCTVCamera,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`instance-parent ${className}`} style={frameDivStyle}>
      <div className="shopping-center-container-parent">
        <img
          className="shopping-center-container"
          alt=""
          src={shoppingCenterContainer}
        />
        <div className="cctv-camera-wrapper">
          <div className="cctv-camera">{cCTVCamera}</div>
        </div>
      </div>
      <input className="component-8511" type="radio" />
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  shoppingCenterContainer: PropTypes.string,
  cCTVCamera: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default FrameComponent3;
