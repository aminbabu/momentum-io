import React from "react";
import { PopupModal, useCalendlyEventListener } from "react-calendly";

// check wheather endpoint is a browser or not
const isBrowser = typeof window !== "undefined";

const Calendly = ({ isOpen, handleCalendly }) => {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  return (
    <div>
      <PopupModal
        url="https://calendly.com/gcjcaat464/30min"
        onModalClose={() => handleCalendly(false)}
        open={isOpen}
        rootElement={isBrowser ? document.getElementById("___gatsby") : null}
      />
    </div>
  );
};

export default Calendly;
