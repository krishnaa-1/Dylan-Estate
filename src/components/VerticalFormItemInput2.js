import PropTypes from "prop-types";
import "./VerticalFormItemInput2.css";

const VerticalFormItemInput = ({ className = "", title }) => {
  return (
    <div className={`vertical-form-iteminput16 ${className}`}>
      <div className="label30">
        <div className="title30">{title}</div>
        <div className="separator">*</div>
      </div>
      <div className="price">
        <div className="input18">
          <img
            className="input-prefix-icon17"
            alt=""
            src="/inputprefix@2x.png"
          />
          <div className="placeholder32">
            <div className="placeholder33">₹</div>
          </div>
          <div className="placeholder34">
            <div className="placeholder35">/ Month</div>
          </div>
          <img
            className="input-suffix-icon17"
            alt=""
            src="/inputsuffix@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

VerticalFormItemInput.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default VerticalFormItemInput;
