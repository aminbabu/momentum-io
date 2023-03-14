import React, { useEffect, useState } from "react";

const RegionalClock = ({ location, timezone, locale = "en-US" }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString(locale, {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="timezone__item">
      {location} <span className="time">{formattedTime}</span>
    </div>
  );
};

export default RegionalClock;
