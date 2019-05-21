import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CalendarEventList from "../components/calendarEventList";
import campingIllustration from "../images/undraw_into_the_night_vumi.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`Troop 53`, `New Berlin`, `Boy Scouts`, `Scouts`]}
      />

      <div className="text-center">
        <img
          src={campingIllustration}
          className="block mx-auto w-1/2"
          alt="Sitting by campfire"
        />

        <h2 className="text-2xl font-bold inline-block my-8 p-3">
          Welcome to New Berlin Scouts BSA Troop 53.
        </h2>

        <p className="leading-loose">
          Troop 53 is part of Potawatomi Area Council's South East Unit Service Area 
          serving the youth in the school districts of New Berlin, Muskego, and 
          part of West Allis.
        </p>
        <br/>

        <a href="about" className="text-white no-underline font-bold py-2 px-4 rounded bg-bsa-blue hover:bg-blue-dark">More about Troop 53</a>
        <br/>
        <br/>

        <div>


        <h3 className="text-xl font-bold inline-block">
          Upcoming Special Events
        </h3>

          <CalendarEventList/>
        </div>
        <br/>
        <div>
        <a href="calendar" className="text-white no-underline font-bold py-2 px-4 rounded bg-bsa-blue hover:bg-blue-dark">View Calendar</a>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
