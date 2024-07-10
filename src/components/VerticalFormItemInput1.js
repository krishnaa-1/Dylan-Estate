import PropTypes from "prop-types";
import "./VerticalFormItemInput1.css";

const VerticalFormItemInput1 = ({
  className = "",
  title,
  inputPrefix,
  placeholder,
}) => {
  return (
    <div className={`vertical-form-iteminput7 ${className}`}>
      <div className="label20">
        <div className="title20">{title}</div>
        <div className="property-on-floor1">*</div>
      </div>
      <div className="property-on-floor2">
        <div className="input12">
          <img className="input-prefix-icon12" alt="" src={inputPrefix} />
          <input
                          className="placeholder8"
                          placeholder="5"
                          type="number"
                        />
          <img
            className="input-suffix-icon12"
            alt=""
            src="/inputsuffix@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

VerticalFormItemInput1.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  inputPrefix: PropTypes.string,
  placeholder: PropTypes.string,
};

export default VerticalFormItemInput1;
