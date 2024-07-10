import FormHeadingContainer from "./FormHeadingContainer";
import PropertyTypeContainer from "./PropertyTypeContainer";
import PropertyType from "./PropertyType";
import PropertyDetailItems from "./PropertyDetailItems";
import VerticalFormItemInput1 from "./VerticalFormItemInput1";
import VerticalFormItemInput from "./VerticalFormItemInput";
import PropTypes from "prop-types";
import "./DetailContent.css";

const DetailContent = ({ className = "" }) => {
  return (
    <div className={`detail-content ${className}`}>
      <img className="frame-icon6" alt="" src="/frame-21.svg" />
      <div className="property-details-wrapper1">
        <div className="property-details6">
          <FormHeadingContainer />
          <div className="rectangle-parent1">
            <div className="frame-child9" />
            <div className="frame-child10" />
          </div>
          <div className="property-details-form">
            <div className="form-fields8">
              <div className="property-details-final1">
                <PropertyTypeContainer />
                <PropertyType />
                <div className="property-details-input-fields">
                  <PropertyDetailItems
                    title="Built up Area"
                    inputPrefix="/inputprefix@2x.png"
                    placeholder="0"
                  />
                  <PropertyDetailItems
                    title="Carpet Area"
                    inputPrefix="/inputprefix@2x.png"
                    placeholder="0"
                  />
                </div>
                <div className="property-details-input-fields1">
                  <div className="vertical-form-iteminput-group">
                    <VerticalFormItemInput1
                      title="Property on Floor"
                      inputPrefix="/inputprefix@2x.png"
                      placeholder="Floor"
                    />
                    <VerticalFormItemInput1
                      title="Total Floors"
                      inputPrefix="/inputprefix@2x.png"
                      placeholder="Total Floor"
                    />
                  </div>
                  <div className="vertical-form-iteminput9">
                    <div className="label22">
                      <div className="title22">Property Facing</div>
                      <div className="div49">*</div>
                    </div>
                    <div className="facing-east1">
                      <div className="input14">
                        <img
                          className="input-prefix-icon13"
                          alt=""
                          src="/inputprefix@2x.png"
                        />
                        <div className="placeholder26">
                          <div className="placeholder27">Select</div>
                        </div>
                        <img
                          className="vector-icon2"
                          alt=""
                          src="/input-icon.svg"
                        />
                        <img
                          className="input-suffix-icon13"
                          alt=""
                          src="/inputsuffix@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-details-input-fields2">
                  <div className="vertical-form-iteminput10">
                    <div className="label23">
                      <div className="title23">Property Age</div>
                      <div className="div50">*</div>
                    </div>
                    <div className="component-165">
                      <div className="component-86">
                        <div className="div51">Any</div>
                      </div>
                      <div className="component-96">
                        <div className="div52">Less than 1 Year</div>
                      </div>
                      <div className="component-106">
                        <div className="div53">1- 3 Years</div>
                      </div>
                      <div className="component-116">
                        <div className="empty-component-placeholder">
                          3- 5 Years
                        </div>
                      </div>
                      <div className="component-129">
                        <div className="empty-component-placeholder1">
                          5 - 10 Years
                        </div>
                      </div>
                      <div className="component-136">
                        <div className="empty-component-placeholder2">
                          Greater than 10 Years
                        </div>
                      </div>
                      <div className="component-146">
                        <div className="div54">5+ BHK</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-details-input-fields3">
                  <div className="vertical-form-iteminput11">
                    <div className="label24">
                      <div className="title24">BHK Type</div>
                      <div className="div55">*</div>
                    </div>
                    <div className="component-166">
                      <div className="component-87">
                        <div className="div56">Any</div>
                      </div>
                      <div className="component-97">
                        <div className="div57">1 RK</div>
                      </div>
                      <div className="component-107">
                        <div className="div58">1 BHK</div>
                      </div>
                      <div className="component-117">
                        <div className="div59">2 BHK</div>
                      </div>
                      <div className="component-1210">
                        <div className="div60">3 BHK</div>
                      </div>
                      <div className="component-137">
                        <div className="div61">4 BHK</div>
                      </div>
                      <div className="component-147">
                        <div className="empty-component-placeholder3">
                          5+ BHK
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-details-input-fields4">
                  <div className="vertical-form-iteminput12">
                    <div className="label25">
                      <div className="title25">Bathrooms/ Toilets</div>
                      <div className="div62">*</div>
                    </div>
                    <div className="component-167">
                      <div className="component-88">
                        <div className="div63">Any</div>
                      </div>
                      <div className="component-98">
                        <div className="div64">1</div>
                      </div>
                      <div className="component-108">
                        <div className="div65">2</div>
                      </div>
                      <div className="component-118">
                        <div className="div66">3</div>
                      </div>
                      <div className="component-1211">
                        <div className="div67">4</div>
                      </div>
                      <div className="component-138">
                        <div className="div68">5</div>
                      </div>
                      <div className="component-148">
                        <div className="div69">6+</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-details-input-fields5">
                  <div className="vertical-form-iteminput13">
                    <div className="label26">
                      <div className="title26">Balcony</div>
                      <div className="div70">*</div>
                    </div>
                    <div className="component-168">
                      <div className="component-89">
                        <div className="div71">1</div>
                      </div>
                      <div className="component-99">
                        <div className="div72">0</div>
                      </div>
                      <div className="component-109">
                        <div className="div73">1</div>
                      </div>
                      <div className="component-119">
                        <div className="div74">2</div>
                      </div>
                      <div className="component-1212">
                        <div className="div75">3</div>
                      </div>
                      <div className="component-139">
                        <div className="div76">4 +</div>
                      </div>
                      <div className="component-149">
                        <div className="div77">6+</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-details-input-fields6">
                  <div className="vertical-form-iteminput14">
                    <div className="label27">
                      <div className="title27">Tenant Preference</div>
                      <div className="div78">*</div>
                    </div>
                    <div className="component-169">
                      <div className="component-810">
                        <div className="div79">Any</div>
                      </div>
                      <div className="component-910">
                        <div className="div80">Family</div>
                      </div>
                      <div className="component-1010">
                        <div className="div81">Bachelor (Man)</div>
                      </div>
                      <div className="component-1110">
                        <div className="div82">Bachelor (Women)</div>
                      </div>
                      <div className="component-1213">
                        <div className="div83">4</div>
                      </div>
                      <div className="component-1310">
                        <div className="div84">5</div>
                      </div>
                      <div className="component-1410">
                        <div className="div85">6+</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-details-input-fields7">
                  <div className="vertical-form-iteminput15">
                    <div className="label28">
                      <div className="title28">Availability</div>
                      <div className="div86">*</div>
                    </div>
                    <div className="component-171">
                      <div className="component-811">
                        <div className="div87">Immediate</div>
                      </div>
                      <div className="component-911">
                        <div className="div88">within 15 days</div>
                      </div>
                      <div className="component-1011">
                        <div className="div89">within 1 month</div>
                      </div>
                      <div className="component-1111">
                        <div className="div90">within 2 months</div>
                      </div>
                      <div className="component-1214">
                        <div className="div91">{`>10`}</div>
                      </div>
                      <div className="component-1311">
                        <div className="div92">5</div>
                      </div>
                      <div className="component-1411">
                        <div className="div93">6+</div>
                      </div>
                    </div>
                  </div>
                </div>
                <VerticalFormItemInput />
                <div className="field3">
                  <div className="input15">
                    <img
                      className="input-prefix-icon14"
                      alt=""
                      src="/inputprefix1@2x.png"
                    />
                    <div className="placeholder28" />
                    <img
                      className="input-suffix-icon14"
                      alt=""
                      src="/inputsuffix1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="property-separator">
              <div className="rectangle-parent2">
                <div className="frame-child11" />
                <div className="frame-child12" />
              </div>
            </div>
          </div>
          <div className="help-button">
            <div className="need-help-call-9999999999-wrapper2">
              <div className="need-help-call-9999999999-container3">
                <span>{`Need Help? `}</span>
                <span className="call-99999999993">Call 9999999999</span>
              </div>
            </div>
            <button className="buttons3">
              <div className="view-properties3">NEXT</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DetailContent.propTypes = {
  className: PropTypes.string,
};

export default DetailContent;
