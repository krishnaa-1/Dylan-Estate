import NAVBARS from "../components/NAVBARS";
import Breadcrumb from "../components/Breadcrumb";
import Neighborhood from "../components/Neighborhood";
import FrameComponent1 from "../components/FrameComponent1";
import SimilarPropertiesHeader from "../components/SimilarPropertiesHeader";
import Locality from "../components/Locality";
import Footer from "../components/Footer";
import "./Preview.css";

const Preview = () => {
  return (
    <div className="preview">
      <NAVBARS />
      <div className="property-details4">
        <div className="property-info">
          <Breadcrumb />
          <Neighborhood />
          <FrameComponent1 />
        </div>
      </div>
      <div className="similar-properties-wrapper">
        <div className="similar-properties">
          <SimilarPropertiesHeader />
          <Locality />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Preview;
