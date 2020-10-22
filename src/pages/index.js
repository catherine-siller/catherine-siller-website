import React from 'react'
import styled from 'styled-components'
import {Helmet} from "react-helmet";
import SVG from 'react-inlinesvg'
import BlogRoll from '../components/BlogRoll'
import GithubIcon from '../assets/svg/github.svg'
import favicon from '../assets/images/favicon.ico'

const TopLine = styled.div`
  background: linear-gradient(to bottom, #fcecfc 0%,#fba6e1 50%,#fd89d7 83%,#ff7cd8 100%);
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`

const Section = styled.section`
  font-family: work sans;
  margin: 0 auto;
  max-width: 700px;
  padding-top: 24px;
  width: 100%;

  > div.top {
    display: block;
    margin: 24px auto 0;
    text-align: center;

    > img {
      border-radius: 50%;
      display: block;
      height: 150px;
      margin: auto auto 24px;
      width: 150px;
    }

    a:-webkit-any-link {
      -webkit-background-clip: text;
      -webkit-text-fill-color: #0000;
      background-image: linear-gradient(90deg, #F79533 0%, #F37055 15%, #EF4E7B 30%, #A166AB 44%, #5073B8 58%, #1098AD 72%, #07B39B 86%, #6DBA82 100%);
      background-size: cover;
    }

    > a:hover {
      animation: omg 3s infinite;
    }

    @-webkit-keyframes omg {
      0%, 100% { color: #7ccdea; fill: #7ccdea; }
      16%      { color: #0074D9; fill: #0074D9; }
      32%      { color: #2ECC40; fill: #2ECC40;}
      48%      { color: #FFDC00; fill: #FFDC00;}
      64%      { color: #B10DC9; fill: #B10DC9;}
      80%      { color: #FF4136; fill: #FF4136;}
    }

    @-moz-keyframes omg {
      0%, 100% { color: #7ccdea; fill: #7ccdea; }
      16%      { color: #0074D9; fill: #0074D9; }
      32%      { color: #2ECC40; fill: #2ECC40;}
      48%      { color: #FFDC00; fill: #FFDC00;}
      64%      { color: #B10DC9; fill: #B10DC9;}
      80%      { color: #FF4136; fill: #FF4136;}
    }

    @keyframes omg {
      0%, 100% { color: #7ccdea; fill: #7ccdea; }
      16%      { color: #0074D9; fill: #0074D9; }
      32%      { color: #2ECC40; fill: #2ECC40;}
      48%      { color: #FFDC00; fill: #FFDC00;}
      64%      { color: #B10DC9; fill: #B10DC9;}
      80%      { color: #FF4136; fill: #FF4136;}
    }

    h1 {
      -webkit-background-clip: text;
      -webkit-text-fill-color: #0000;
      background-image: linear-gradient(90deg, #F79533 0%, #F37055 15%, #EF4E7B 30%, #A166AB 44%, #5073B8 58%, #1098AD 72%, #07B39B 86%, #6DBA82 100%);
      background-size: cover;
      font-size: 28px;
      font-weight: 500;
    }

    h2 {
      font-size: 20px;
      font-weight: 400;
    }
  }
`

export default () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Catherine Siller's Blog</title>
        <link rel="canonical" href="http://www.catherine-siller.com/" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <TopLine />
      <Section>
        <div className="top">
          <img
            alt="Catherine Siller"
            src={require('../assets/images/avatar.png')}
          />
          <a href="https://github.com/cathysiller" target="_blank" rel="noreferrer" title="My GitHub" aria-label="My GitHub">
            <SVG src={GithubIcon} />
          </a>
          <h1>Hi! I'm Catherine</h1>
          <h2>Front end web developer <a href="https://twitter.com/Mail_Gun" target="_blank" rel="noreferrer">@mailgun</a>, previously @rackspace. I love all things web that are modern, fast, and pretty. Just tryna keep it cute on the web and irl.</h2>
        </div>
      </Section>

      <Section>
        <h1>Latest Posts</h1>
        <div className="content">
          <BlogRoll />
        </div>
      </Section>
    </React.Fragment>
  )
}