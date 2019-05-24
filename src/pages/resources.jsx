import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ResourceList from '../components/resourceList';

function ResourcesPage({ data }) {
  return (
    <Layout>
      <SEO
        title="Resources"
        keywords={['troop 53', 'links', 'resources', 'handbook']}
      />
      <div className="container mx-auto">
        <ResourceList title="Troop 53" resources={data.resourcesYaml.resources.troop_resources} />
        <ResourceList title="Potawatomi Area Council" resources={data.resourcesYaml.resources.council_resources} />
        <ResourceList title="Scouts BSA" resources={data.resourcesYaml.resources.bsa_resources} />
      </div>
    </Layout>
  );
}

export default ResourcesPage;

ResourcesPage.propTypes = {
  data: PropTypes.shape({
    resourcesYaml: PropTypes.shape({
      resources: PropTypes.shape({
        troop_resources: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        })).isRequired,
        council_resources: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          position: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        })).isRequired,
        bsa_resources: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        })).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

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
`;
