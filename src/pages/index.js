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
          New Berlin Troop 53 is part of Potawatomi Area Council and serves youth in the greater New Berlin area. 
        </p>
        <br/>

        <a href="about" className="link-btn link-btn-blue">More about Troop 53</a>
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
        <a href="calendar" className="link-btn link-btn-blue">View Calendar</a>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
