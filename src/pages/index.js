import React from "react"
import Img from "gatsby-image"

export default function Home(props) {
  console.log("props:", props)

  return (
    <>
      <div>Hello world!</div>
      <Img fluid={props.data.contentful2GDetails.image.fluid}></Img>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    contentful2GDetails {
      title
      name
      image {
        fluid(maxWidth: 980) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
