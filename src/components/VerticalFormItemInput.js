import PropTypes from "prop-types";
import "./VerticalFormItemInput.css";

const VerticalFormItemInput = ({ className = "" }) => {
  return (
    <div className={`vertical-form-iteminput8 ${className}`}>
      <div className="label21">
        <div className="title21">Property Description</div>
        <div className="div48">*</div>
      </div>
      
      <div className="field2">
        <div className="input13">
          <div className="placeholder24">
            <input
              className="placeholder8"
              placeholder="Add a description for your property to attract the best tenant"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

VerticalFormItemInput.propTypes = {
  className: PropTypes.string,
};

export default VerticalFormItemInput;
