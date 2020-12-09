import React from "react";
import Zoom from "react-reveal/Zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";

const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red">
                    <div className="vn_icon">
                      <FontAwesomeIcon icon={faCalendar} />
                    </div>
                  </div>
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">16 July @ 10pm</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow">
                    <div className="vn_icon">
                      <FontAwesomeIcon icon={faStreetView} />
                    </div>
                  </div>
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc">2850 Boom, Belgium</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;
