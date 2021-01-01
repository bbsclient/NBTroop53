import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
//      <div className="CalendarPage flex flex-1 mx-auto w-full h-full min-h-600 min-w-800">

function CalendarPage() {
  return (
    <Layout>
      <SEO
        title="Calendar"
        keywords={["gatsby", "tailwind", "react", "tailwindcss"]}
      />
      <iframe
        title="Troop Calendar"
        className="CalendarPage flex-1 mx-auto w-full h-full"
        src="https://calendar.google.com/calendar/embed?src=pd7rj9mum9coj3ari3e2qpon8o8pla8r%40import.calendar.google.com&ctz=America%2FChicago"
        border="0"
        frameBorder="0"
        scrolling="no"
      />
    </Layout>
  );
}

export default CalendarPage;
