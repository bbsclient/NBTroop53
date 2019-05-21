import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ealgeIllustration from "../images/eagle_badge.svg"

function EaglesPage( {data}) {
  const eagles = data.eaglesYaml.scouts.map((eagle) => 
  <tr className="calendarEvent hover:bg-gray-200">            
  <td className="py-4 px-6 border-b border-gray-400">
    {eagle.num}
  </td>
  <td className="py-4 px-6 border-b border-gray-400">
    {eagle.name}
  </td>
  <td className="py-4 px-6 border-b border-gray-400">
    {eagle.bor}
  </td>
  <td className="py-4 px-6 border-b border-gray-400">
    {eagle.year}
  </td>
</tr>   
        );

  return (
    <Layout>
      <SEO
        title="Eagles"
        keywords={[`eagle`, `scouts`, `troop 53`]}
      />

        <div className="text-center">
        <img
          src={ealgeIllustration}
          className="block mx-auto w-1/4"
          alt="Eagle Badge"
        />
        </div>

          <div className="w-7/8 mx-auto">
            <div className="bg-white shadow-md rounded my-6">
              <table className="text-left w-full border-collapse">
                <thead>
                  <tr>
                    <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-400">#</th>
                    <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-400">Name</th>
                    <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-400">BOR</th>
                    <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-400">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {eagles}
                </tbody>
              </table>
            </div>
          </div>                 

   </Layout>
  );
}

export default EaglesPage;

export const query = graphql`
  query {
    eaglesYaml {
      scouts {
        name 
        year 
        bor
        num
      } 
    } 
  } 
`