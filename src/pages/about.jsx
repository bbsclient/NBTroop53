import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import ImageGallery from "react-image-gallery";
import Layout from "../components/layout";
import SEO from "../components/seo";
import campingIllustration from "../images/undraw_Camping_2g8w.svg";

const AboutPage = ({ data }) => {
  // Build the set of images for the gallery component
  const images = data.galleryYaml.images.map(image => ({
    description: image.description,
    thumbnail: image.imageFile.thumbnail.resize.src,
    original: image.imageFile.original.resize.src
  }));

  return (
    <Layout>
      <SEO
        title="About"
        keywords={["Troop-53", "New-Berlin", "BSA", "scouts"]}
      />

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
          <p className="font-bold mt-4 text-l uppercase">About Us</p>

          <p className="leading-loose pl-2 text-justify">
            Troop 53 serves youth in the greater New Berlin area and is
            chartered by Forest Park Presbyterian Church.
          </p>
          <p className="font-bold mt-4 text-l uppercase">Weekly Meeting</p>
          <p className="leading-loose pl-2 text-justify">
            Mondays from 7:00 PM until 8:30 PM.
            <br />
            Held at Forest Park Presbyterian Church, in the lower level
            community room, entering from the lower rear door.
          </p>
        </div>
        <div className="w-2/3 md:w-1/3">
          <img src={campingIllustration} alt="Camping" />
        </div>
      </div>

      <p className="font-bold mt-4 text-l uppercase">History</p>

      <p className="leading-loose pl-2 text-justify">
        Founded in 1972, the troop has strived to leave a legacy within the
        community. One of the legacies is the ever growing list of scouts that
        have earned their Eagle which is scouting`&apos;`s highest rank.
      </p>

      <Link to="/eagles/" className="link-btn link-btn-blue w-48">
        Eagle Scouts
      </Link>

      <p className="font-bold mt-4 text-l uppercase">Leadership</p>

      <p className="leading-loose pl-2 text-justify">
        The troop is a youth led troop but supported by trained adult leaders.
        The training includes all BSA required training and optional training
        such as NYLT, Wood Badge, Oakleaf, and other BSA training.
      </p>

      <Link to="/leaders/" className="link-btn link-btn-blue w-48">
        Adult Leadership
      </Link>

      <p className="font-bold mt-4 text-l uppercase">Activities</p>

      <p className="leading-loose pl-2 text-justify">
        The troop attends Summer Camp each year and participates in high
        adventures ranging from scuba diving at Sea Base, hiking at Philmont, or
        canoeing in the Boundary Waters. During the other months, the troop has
        outings such as weekend tent camping, cabin camping, and volunteering in
        the local community.
      </p>

      <ImageGallery className="w-full h-2/3" items={images} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    galleryYaml: PropTypes.shape({
      images: PropTypes.arrayOf(PropTypes.node).isRequired
    })
  }).isRequired
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    galleryYaml {
      images {
        description
        imageFile {
          ...ThumbImage
          ...FullImage
        }
      }
    }
  }
  fragment ThumbImage on File {
    thumbnail: childImageSharp {
      resize(width: 64, height: 48) {
        src
      }
    }
  }
  fragment FullImage on File {
    original: childImageSharp {
      resize(width: 1024, height: 768) {
        src
      }
    }
  }
`;
