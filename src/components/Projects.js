import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  .title {
    -webkit-background-clip: text;
    -webkit-text-fill-color: #0000;
    background-image: linear-gradient(90deg, #F79533 0%, #F37055 15%, #EF4E7B 30%, #A166AB 44%, #5073B8 58%, #1098AD 72%, #07B39B 86%, #6DBA82 100%);
    background-size: cover;
  }

  .subtitle {
    display: block;
  }
`

const Body = styled.p`
  .button {
    -webkit-background-clip: text;
    -webkit-text-fill-color: #0000;
    background-image: linear-gradient(90deg, #F79533 0%, #F37055 15%, #EF4E7B 30%, #A166AB 44%, #5073B8 58%, #1098AD 72%, #07B39B 86%, #6DBA82 100%);
    background-size: cover;
  }
`

class Projects extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div class="projects__grid">
        <div class="project">
        <h3>Project 1</h3>
        <p class="project-description"></p>
        </div>
    </div>
    )
  }
}