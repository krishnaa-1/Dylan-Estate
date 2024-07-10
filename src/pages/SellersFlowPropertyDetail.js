import DetailContent from "../components/DetailContent";
import "./SellersFlowPropertyDetail.css";

const SellersFlowPropertyDetail = () => {
  return (
    <div className="sellers-flow-property-detail">
      <header className="nav-bars">
        <div className="logo-wrapper">
          <div className="logo">
            <div className="logo1">
              <div className="logo-parent">
                <div className="logo-wrapper1">
                  <img
                    className="logo-wrapper-child"
                    alt=""
                    src="/left-logo-divider.svg"
                  />
                  <div className="vector-parent">
                    <img
                      className="frame-child"
                      loading="lazy"
                      alt=""
                      src="/vector-3.svg"
                    />
                    <div className="frame-parent">
                      <div className="rectangle-parent">
                        <div className="frame-item" />
                        <div className="frame-inner" />
                      </div>
                      <div className="rectangle-group">
                        <div className="rectangle-div" />
                        <div className="frame-child1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="estate-name">
                  <a className="dylan-estate">Dylan Estate</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="component-55">
          <b className="home">ABOUT US</b>
        </div>
        <div className="home-component-parent">
          <div className="component-52">
            <a className="home1">PROPERTIES</a>
          </div>
          <div className="component-521">
            <a className="home2">MY DASHBOARD/ACTIVITY</a>
          </div>
          <div className="component-58">
            <b className="home3">LIST YOUR PROPERTY</b>
          </div>
          <div className="component-56">
            <a className="home4">CONTACT US</a>
          </div>
          <div className="home-instance-parent">
            <div className="component-57">
              <b className="home5">MORE</b>
            </div>
          </div>
          <div className="home-component-parent-inner">
            <div className="line-div" />
          </div>
          <img className="frame-icon" loading="lazy" alt="" src="/frame.svg" />
          <div className="frame-wrapper">
            <img className="frame-icon1" alt="" src="/frame-1.svg" />
          </div>
        </div>
      </header>
      <section className="detail-content-wrapper">
        <DetailContent />
      </section>
    </div>
  );
};

export default SellersFlowPropertyDetail;
