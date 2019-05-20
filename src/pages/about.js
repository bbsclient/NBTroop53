import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import campingIllustration from "../images/undraw_Camping_2g8w.svg";
import ImageGallery from 'react-image-gallery';

class AboutPage extends React.Component {
  
  render() {
    const data = this.props.data;

    const images = [
      {
        description: 'Camp Long Lake',
        original: data.summerCampImage1.childImageSharp.resize.src,
        thumbnail: data.summerCampImage1Thumb.childImageSharp.resize.src,
      },
      {
        description: 'Camp wide relay',
        original: data.summerCampImage2.childImageSharp.resize.src,
        thumbnail: data.summerCampImage2Thumb.childImageSharp.resize.src,
      },
      {
        description: 'Flag Retirement',
        original: data.summerCampImage3.childImageSharp.resize.src,
        thumbnail: data.summerCampImage3Thumb.childImageSharp.resize.src,
      },
      {
        description: 'Canoeing outing', 
        original: data.outingImage1.childImageSharp.resize.src,
        thumbnail: data.outingImage1Thumb.childImageSharp.resize.src,
      },
      {
        description: "Devil's Lake State Park", 
        original: data.outingImage2.childImageSharp.resize.src,
        thumbnail: data.outingImage2Thumb.childImageSharp.resize.src,
      },
      {
        description: 'Florida Sea Base',
        original: data.adventureImage1.childImageSharp.resize.src,
        thumbnail: data.adventureImage1Thumb.childImageSharp.resize.src,
      },
      {
        description: 'Scuba Adventure',
        original: data.adventureImage2.childImageSharp.resize.src,
        thumbnail: data.adventureImage2Thumb.childImageSharp.resize.src,
      },
      {
        description: 'Philmount',
        original: data.adventureImage3.childImageSharp.resize.src,
        thumbnail: data.adventureImage3Thumb.childImageSharp.resize.src,
      },
      {
        description: 'Back Country Adventure', 
        original: data.adventureImage4.childImageSharp.resize.src,
        thumbnail: data.adventureImage4Thumb.childImageSharp.resize.src,
      },
      {
        description: 'Assisting in Cub Scout Events',
        original: data.volunteerImage1.childImageSharp.resize.src,
        thumbnail: data.volunteerImage1Thumb.childImageSharp.resize.src,
      },
      {
        description: 'Giving back to the Charter Organization', 
        original: data.volunteerImage2.childImageSharp.resize.src,
        thumbnail: data.volunteerImage2Thumb.childImageSharp.resize.src,
      }

    ]
    return (
      <Layout>
        <SEO
          title="About"
          keywords={[`Troop-53`, `New-Berlin`, `BSA`, `scouts`]}
        />

      <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:mr-8">

        <p className="font-bold mt-4 text-l uppercase">
          About Us
        </p>

        <p className="leading-loose pl-2 text-justify">
            Troop 53 serves youth in the greater New Berlin area and is chartered by Forest Park Presbyterian Church.  
        </p>
        <p className="font-bold mt-4 text-l uppercase">
          Weekly Meeting
        </p>
        <p className="leading-loose pl-2 text-justify"> 
            Mondays from 7:00 PM until 8:30 PM.<br/>  
            Held at Forest Park Presbyterian Church, in the lower level community room, entering from the lower rear door.  
        </p>
        </div>
        <div className="w-2/3 md:w-1/3">
            <img src={campingIllustration} alt="Camping" />
          </div>
        </div>

        <p className="font-bold mt-4 text-l uppercase">
          History
        </p>

        <p className="leading-loose pl-2 text-justify">
            Founded in 1972, the troop has strived to leave a legacy within the community.  
            One of the legacies is the ever growing list of scouts that have earned their Eagle which is scouting's highest rank.   
        </p>

        <a href="/eagles" className="text-white text-center no-underline font-bold py-2 px-4 mx-1 my-1 w-48 rounded bg-bsa-blue hover:bg-blue-dark object-right">Eagle Scouts</a>

        <p className="font-bold mt-4 text-l uppercase">
          Leadership
        </p>

        <p className="leading-loose pl-2 text-justify">
            The troop is a youth led troop but supported by trained adult leaders.  The training includes all BSA required training and optional training such as NYLT, Wood Badge, Oakleaf, and Philmount Training Classes.  
        </p>

        <a href="/leaders" className="text-white text-center w-48 no-underline font-bold py-2 px-4 mx-1 my-1 rounded bg-bsa-blue hover:bg-blue-dark object-right">Adult Leadership</a>

        <p className="font-bold mt-4 text-l uppercase">
          Activities
        </p>

        <p className="leading-loose pl-2 text-justify">
            The troop attends Summer Camp each year and participates in high adventures ranging from scuba diving at Sea Base, hiking at Philmount, or canoeing in the Boundry Waters.
            During the other months, the troop has outings such as weekend tent camping, cabin camping, and volunteering in the local community.     
        </p>

        <ImageGallery items = {images}/>
      </Layout>
    );

  }
}

export default AboutPage;

export const pageQuery = graphql`
  query
  {
  allImageSharp {
    edges {
      node {
        ... on ImageSharp {
          resize(width: 640, height: 480, grayscale: true)
          {
            src
          }
        }
      }
    }
  }
  summerCampImage1Thumb: file(relativePath: { regex: "/T53-CLL-2017.jpg/" }) { childImageSharp { resize(width: 64, height: 48) { src } } }
  summerCampImage1: file(relativePath: { regex: "/T53-CLL-2017.jpg/" }) { childImageSharp { resize(width: 640, height: 480) { src } } }
  summerCampImage2Thumb: file(relativePath: { regex: "/cll-ribbons-2014.jpg/" }) { childImageSharp { resize(width: 64, height: 48) { src } } }
  summerCampImage2: file(relativePath: { regex: "/cll-ribbons-2014.jpg/" }) { childImageSharp { resize(width: 640, height: 480) { src } } }
  summerCampImage3Thumb: file(relativePath: { regex: "/flag-ret-2.jpg/" }) { childImageSharp { resize(width: 64, height: 48) { src } } }
  summerCampImage3: file(relativePath: { regex: "/flag-ret-2.jpg/" }) { childImageSharp { resize(width: 640, height: 480) { src } } }
  outingImage1Thumb: file(relativePath: { regex: "/canoe1.jpg/" }) { childImageSharp { resize(width: 64, height: 48) { src } } }
  outingImage1: file(relativePath: { regex: "/canoe1.jpg/" }) { childImageSharp { resize(width: 640, height: 480) { src } } }
  outingImage2Thumb: file(relativePath: { regex: "/devilslake2.jpg/" }) { childImageSharp { resize(width: 64, height: 48) { src } } }
  outingImage2: file(relativePath: { regex: "/devilslake2.jpg/" }) { childImageSharp { resize(width: 640, height: 480) { src } } }
  adventureImage1Thumb: file(relativePath: { regex: "/t053-sb-a-welcome-to-sea-base-s.jpg/" }) { childImageSharp { resize(width: 64, height: 48) { src } } }
  adventureImage1: file(relativePath: { regex: "/t053-sb-a-welcome-to-sea-base-s.jpg/" }) { childImageSharp { resize(width: 640, height: 480) { src } } }
  adventureImage2Thumb: file(relativePath: { regex: "/t053-sb-d-training-s.jpg/" }) { childImageSharp { resize(width: 64, height: 48) { src } } }
  adventureImage2: file(relativePath: { regex: "/t053-sb-d-training-s.jpg/" }) { childImageSharp { resize(width: 640, height: 480) { src } } }
  adventureImage3Thumb: file(relativePath: { regex: "/T053P-IMG_20130629_131427_081s.jpg/" }) { childImageSharp { resize(width: 64, height: 48) { src } } }
  adventureImage3: file(relativePath: { regex: "/T053P-IMG_20130629_131427_081s.jpg/" }) { childImageSharp { resize(width: 640, height: 480) { src } } }
  adventureImage4Thumb: file(relativePath: { regex: "/T053P-IMG_0642s.jpg/" }) { childImageSharp { resize(width: 64, height: 48) { src } } }
  adventureImage4: file(relativePath: { regex: "/T053P-IMG_0642s.jpg/" }) { childImageSharp { resize(width: 640, height: 480) { src } } }
  volunteerImage1Thumb: file(relativePath: { regex: "/bearchair.jpg/" }) { childImageSharp { resize(width: 64, height: 48) { src } } }
  volunteerImage1: file(relativePath: { regex: "/bearchair.jpg/" }) { childImageSharp { resize(width: 640, height: 480) { src } } }
  volunteerImage2Thumb: file(relativePath: { regex: "/church.jpg/" }) { childImageSharp { resize(width: 64, height: 48) { src } } }
  volunteerImage2: file(relativePath: { regex: "/church.jpg/" }) { childImageSharp { resize(width: 640, height: 480) { src } } }
 }
 `

