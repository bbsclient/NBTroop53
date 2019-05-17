import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LeadersList from "../components/leadersList";

function LeadersPage( {data} ) {
  return (
    <Layout>
      <SEO
        title="Leaders"
        keywords={[`troop 53`, `scoutmaster`, `committee`]}
      />
      <LeadersList title="Troop Committee Members" leaders={data.leadersYaml.leaders.committee}/>
      <LeadersList title="Troop Scoutmasters" leaders={data.leadersYaml.leaders.scoutmasters}/>
   </Layout>
  );
}

export default LeadersPage;

export const query = graphql`
  query {
    leadersYaml {
      leaders { 
        committee {
          name 
          position
        }
        scoutmasters {
          name 
          position
        }        
      } 
    } 
  } 
`