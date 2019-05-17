import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import contactImage from "../images/undraw_contact_us_15o2.svg"

function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact"
        keywords={[`troop 53`, `contact`, `email`, `webmaster`]}
      />
      < div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
        <p className="font-bold mt-4 text-l uppercase">
        Contact Us
        </p>

      <p className="leading-loose pl-2 text-justify my-1">
          Send us an email, stop by a meeting, contact our Charter Organization, we would love to hear from you.  
      </p>
 <br/>
 

        <a href="mailto:Troop53@pacunits.org" class="text-white text-center no-underline font-bold py-2 px-4 mx-1 my-1 w-64 rounded bg-bsa-blue hover:bg-blue-dark">Contact Troop 53</a>
        <a href="https://www.forestparkpcusa.org/" class="text-white text-center no-underline font-bold py-2 px-4 mx-1 my-1 w-64 rounded bg-bsa-blue hover:bg-blue-dark">Charter Organization</a>

        </div>

        <div className="w-2/3 md:w-1/3">
          <img src={contactImage} alt="Contact" />
        </div>
      </div>

    </Layout>
  );
}

export default ContactPage;
