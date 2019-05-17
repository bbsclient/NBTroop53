import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ResourceList from "../components/resourceList";

function ResourcesPage({data}) {
  return (
    <Layout>
      <SEO
        title="Resources"
        keywords={[`troop 53`, `links`, `resources`, `handbook`]}
      />
      <ResourceList title="Troop 53" resources={data.resourcesYaml.resources.troop_resources}/>
      <ResourceList title="Potawatomi Area Council" resources={data.resourcesYaml.resources.council_resources}/>
      <ResourceList title="Scouts BSA" resources={data.resourcesYaml.resources.bsa_resources}/>      
   </Layout>
  );
}

export default ResourcesPage;

export const query = graphql`
  query {
    resourcesYaml {
      resources {
        troop_resources { 
          title
          description
          url      
        } 
        council_resources {
          title
          description
          url      
        }
        bsa_resources {
          title
          description
          url      
        }
      }
    } 
  } 
`