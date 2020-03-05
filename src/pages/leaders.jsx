import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LeadersList from "../components/leadersList";

function LeadersPage({ data }) {
  return (
    <Layout>
      <SEO
        title="Leaders"
        keywords={["troop 53", "scoutmaster", "committee"]}
      />
      <LeadersList
        title="Troop Committee Members"
        leaders={data.leadersYaml.leaders.committee}
      />
      <LeadersList
        title="Troop Scoutmasters"
        leaders={data.leadersYaml.leaders.scoutmasters}
      />
    </Layout>
  );
}

LeadersPage.propTypes = {
  data: PropTypes.shape({
    leadersYaml: PropTypes.shape({
      leaders: PropTypes.shape({
        committee: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired
          })
        ).isRequired,
        scoutmasters: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired
          })
        ).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

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
`;
