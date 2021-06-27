import React from "react";

export const useDate = () => {
  const locale = 'en';
  const [today, setDate] = React.useState(new Date()); 

  React.useEffect(() => {
      const timer = setInterval(() => { 
      setDate(new Date());
    }, 1);
    return () => {
      clearInterval(timer); 
    }
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long', year:'numeric' })}\n\n`;
  const hour = today.getHours();
  const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });

  return {
    date,
    time,
    wish,
  };
};
