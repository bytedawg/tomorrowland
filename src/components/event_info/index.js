import React from "react";
import Zoom from "react-reveal/Zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";

const EventInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="tl_wrapper">
          <Zoom duration={500}>
            <div className="tl_item">
              <div className="tl_outer">
                <div className="tl_inner">
                  <div className="tl_icon_square bck_red">
                    <div className="tl_icon">
                      <FontAwesomeIcon icon={faCalendar} />
                    </div>
                  </div>
                  <div className="tl_title">Event Date & Time</div>
                  <div className="tl_desc">16 July @ 10pm</div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom duration={500} delay={500}>
            <div className="tl_item">
              <div className="tl_outer">
                <div className="tl_inner">
                  <div className="tl_icon_square bck_yellow">
                    <div className="tl_icon">
                      <FontAwesomeIcon icon={faStreetView} />
                    </div>
                  </div>
                  <div className="tl_title">Event Location</div>
                  <div className="tl_desc">2850 Boom, Belgium</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
