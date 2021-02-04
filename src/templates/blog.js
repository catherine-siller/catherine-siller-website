import React from "react"
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

const Section = styled.section`
  font-family: work sans;
  margin: 0 auto;
  max-width: 800px;
  padding-top: 24px;
  width: 100%;

  .button {
    -webkit-background-clip: text;
    -webkit-text-fill-color: #0000;
    background-image: linear-gradient(90deg, #F79533 0%, #F37055 15%, #EF4E7B 30%, #A166AB 44%, #5073B8 58%, #1098AD 72%, #07B39B 86%, #6DBA82 100%);
    background-size: cover;
  }

  .blog-post h1 {
    background-image: linear-gradient(90deg,#F79533 0%,#F37055 15%,#EF4E7B 30%,#A166AB 44%,#5073B8 58%,#1098AD 72%,#07B39B 86%,#6DBA82 100%);
  }

  .blog-post h2 {
    -webkit-background-clip: text;
    -webkit-text-fill-color: #0000;
    background-image: linear-gradient(90deg, #F79533 0%, #F37055 15%, #EF4E7B 30%, #A166AB 44%, #5073B8 58%, #1098AD 72%, #07B39B 86%, #6DBA82 100%);
    background-size: cover;
  }

  .blog-post-content p img {
    width: 100%;
  }

  article {
    margin: 64px 0;
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Section>
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Link className="button" to='/'>
        ← Back to home
      </Link>
    </Section>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`