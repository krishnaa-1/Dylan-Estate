import PropTypes from "prop-types";
import "./Neighborhood.css";

const Neighborhood = ({ className = "" }) => {
  return (
    <div className={`neighborhood ${className}`}>
      <div className="explore-neighborhood">Explore Neighborhood</div>
      <div className="neighborhood-content">
        <div className="neighborhood-list">
          <div className="location-info">
            <div className="neighborhood-details">
              <div className="neighborhood-card">
                <div className="neighborhood-content1">
                  <img
                    className="neighborhood-content-child"
                    alt=""
                    src="/group-33409.svg"
                  />
                  <div className="neighborhood-name-container">
                    <div className="gokul-village-chs1">
                      Gokul Village chs 2
                    </div>
                  </div>
                </div>
              </div>
              <div className="secondary-neighborhood">
                <div className="secondary-neighborhood-details">
                  <div className="to">To :</div>
                </div>
                <div className="empty-secondary-details">
                  <div className="label39">Label</div>
                  <div className="text-field16">
                    <div className="text-frame10">
                      <div className="text-value10">First Text Value</div>
                      <div className="cursor10">
                        <div className="cursor-child8" />
                      </div>
                    </div>
                    <img className="email-icon10" alt="" src="/email.svg" />
                  </div>
                </div>
                <div className="buttons9">
                  <div className="view-properties9">Search</div>
                </div>
              </div>
            </div>
          </div>
          <div className="empty-secondary-neighborhood-parent">
            <img
              className="empty-secondary-neighborhood"
              alt=""
              src="/empty-secondary-neighborhood@2x.png"
            />
            <div className="secondary-neighborhood-content">
              <img
                className="secondary-neighborhood-content-child"
                alt=""
                src="/group-33410.svg"
              />
            </div>
            <div className="gokul-village-chs2">Gokul Village CHS 2</div>
          </div>
        </div>
        <div className="component-31">
          <div className="transport-content">
            <div className="component-28">
              <div className="transport-label">
                <b className="transport">Transport</b>
              </div>
              <div className="component-28-inner">
                <img className="line-icon" alt="" src="/line-8.svg" />
              </div>
            </div>
            <div className="transport-type">
              <div className="component-29">
                <div className="transport1">Essentials</div>
              </div>
              <div className="component-30">
                <div className="transport2">Utility</div>
              </div>
            </div>
          </div>
          <div className="location-details5">
            <div className="bus-details-parent">
              <div className="bus-details">
                <div className="bus-location">
                  <div className="bus-stop">
                    <img className="bus-icon" alt="" src="/bus-icon.svg" />
                    <div className="bus-station">Bus Station</div>
                  </div>
                  <img
                    className="bus-distance-icon"
                    alt=""
                    src="/bus-distance.svg"
                  />
                </div>
                <div className="station-details">
                  <div className="mira-road-station-e-parent">
                    <div className="mira-road-station">
                      Mira Road Station (E)
                    </div>
                    <div className="mira-road-station1">
                      Mira Road Station (E)
                    </div>
                    <div className="mira-road-station2">
                      Mira Road Station (E)
                    </div>
                    <div className="mira-road-police">
                      Mira Road Police Station
                    </div>
                  </div>
                  <div className="km-3-mins-parent">
                    <div className="km-3-mins">0.7 km | 3 mins</div>
                    <div className="km-2-mins">0.8 km | 2 mins</div>
                    <div className="km-4-mins">0.9 km | 4 mins</div>
                    <div className="km-6-mins">1.8 km | 6 mins</div>
                  </div>
                </div>
              </div>
              <div className="frame-wrapper9">
                <div className="frame-parent26">
                  <div className="location-icon-parent">
                    <img
                      className="location-icon1"
                      alt=""
                      src="/location-icon.svg"
                    />
                    <div className="railway-station">Railway Station</div>
                  </div>
                  <img className="frame-icon26" alt="" src="/frame15.svg" />
                </div>
              </div>
              <div className="frame-wrapper10">
                <div className="frame-parent27">
                  <div className="frame-parent28">
                    <img className="frame-icon27" alt="" src="/frame16.svg" />
                    <div className="metro-stations">Metro stations</div>
                  </div>
                  <img className="frame-icon28" alt="" src="/frame15.svg" />
                </div>
              </div>
              <div className="frame-wrapper11">
                <div className="frame-parent29">
                  <div className="frame-parent30">
                    <img className="frame-icon29" alt="" src="/frame17.svg" />
                    <div className="airport">Airport</div>
                  </div>
                  <img className="frame-icon30" alt="" src="/frame15.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Neighborhood.propTypes = {
  className: PropTypes.string,
};

export default Neighborhood;
