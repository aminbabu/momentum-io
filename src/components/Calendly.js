import React from "react";
import { PopupModal, useCalendlyEventListener } from "react-calendly";

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
        rootElement={document.getElementById("___gatsby")}
      />
    </div>
  );
};

export default Calendly;
