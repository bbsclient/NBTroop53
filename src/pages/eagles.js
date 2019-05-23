import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ealgeIllustration from "../images/eagle_badge.svg"

function EaglesPage( {data}) {
  const eagles = data.eaglesYaml.scouts.map((eagle) => 
  <tr key={eagle.num} className="hover:bg-gray-200">            
  <td>
    {eagle.num}
  </td>
  <td>
    {eagle.name}
  </td>
  <td>
    {eagle.bor}
  </td>
  <td>
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
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>BOR</th>
                    <th>Year</th>
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