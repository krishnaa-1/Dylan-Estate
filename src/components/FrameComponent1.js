import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "", title, placeholder }) => {
  return (
    <div className={`label-container ${className}`}>
      <div className="label29">
        <div className="title29">{title}</div>
      </div>
      <div className="apartment-name1">
        <div className="input16">
          <img
            className="input-prefix-icon15"
            alt=""
            src="/inputprefix@2x.png"
          />
          <div className="placeholder29">
             <input
                          className="placeholder8"
                          placeholder="Prominent Landmark"
                          type="text"
                        />
          </div>
          <img className="vector-icon3" alt="" src="/input-icon.svg" />
          <img
            className="input-suffix-icon15"
            alt=""
            src="/inputsuffix@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FrameComponent1;
