import React from 'react'
import { Organization, Location, Mail, Link as LinkIcon } from '@githubprimer/octicons-react'
import styled from 'styled-components'
import { Link } from "gatsby"
import { StyledOcticon } from '@primer/components'
import { useSpring, config } from 'react-spring'
import PinnedExperienceList from '../components/PinnedExperienceList'
import CommercialToolkitsList from '../components/CommercialToolkitsList'
import PreviousExperienceInList from '../components/PreviousExperienceInList'
import Timeline from '../components/Timeline'
import DabbledWithList from '../components/DabbledWithList'
import GithubHeatmap from '../components/GithubHeatmap'
import avatar from '../images/avatar.png'
import logo from '../images/logo.svg'

type PageProps = {
}

const Toolbar = styled.div`
  max-width: 1012px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`
const Logo = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 16px;
`
const Container = styled.div`
  max-width: 1012px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  flex-wrap: wrap;
`
const Left = styled.div`
  /* flex: 1 0 25%; */
  max-width: 256px;
  width: 100%;
  padding-right: 16px;
  @media screen and (max-width: 960px) {
    padding-right: 0px;
    max-width: 100%;
  }
`
const ImgWrapper = styled.div`
  max-width: 400px;
  margin: auto;
`
const NameWrapper = styled.div`
  @media screen and (max-width: 960px) {
    text-align: center;
  }
`
const Right = styled.div`
  flex: 1;
`

const Index: React.FunctionComponent<PageProps> = ({ data }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <div>
      <header className="bg-gray-dark text-white px-3 mb-2">
        <Toolbar className="px-2">
          <Logo src={logo} />
          <h1 className="h4 f5 text-white text-bold">
            Jeong Seong Dae · Web Software Enginner
          </h1>
        </Toolbar>
      </header>
      <Container className="mt-4">
        <Left>
          <ImgWrapper>
            <img className="avatar width-full border" src={avatar} alt="jeongsd github" />
          </ImgWrapper>
          <NameWrapper className="py-3">
            <h1 className="h2 d-block">
              Jeong Seong Dae
            </h1>
            <h2 className="h3 f3-light text-gray">
              Full Stack Developer ・ JavaScript
            </h2>
          </NameWrapper>

          <ul className="border-top border-gray-light pt-3 mb-3">
            <li className="d-flex flex-row flex-items-center flex-justify-start pt-1">
              <StyledOcticon size={16} ml={1} mr={2} icon={Organization} />
              <span>
                Ediket
              </span>
            </li>
            <li className="d-flex flex-row flex-items-center flex-justify-start pt-1">
              <StyledOcticon size={16} ml={1} mr={2} icon={Location} />
              <span>
                Seoul
              </span>
            </li>
            <li className="d-flex flex-row flex-items-center flex-justify-start pt-1">
              <StyledOcticon size={16} ml={1} mr={2} icon={Mail} />
              <a href="mailto:asdfg852456@gmail.com">
                asdfg852456@gmail.com
              </a>
            </li>
            <li className="d-flex flex-row flex-items-center flex-justify-start pt-1">
              <StyledOcticon size={16} ml={1} mr={2} icon={LinkIcon} />
              <a rel="nofollow me" href="https://github.com/jeongsd">https://github.com/jeongsd</a>
            </li>
          </ul>

          <div className="border-top border-gray-light py-3">
            <h2 className="mb-1 h4">
              Commercial Toolkit
            </h2>
            <CommercialToolkitsList />
          </div>
          <div className="border-top border-gray-light py-3">
            <h2 className="mb-1 h4">
              Previous Experience In
            </h2>
            <PreviousExperienceInList />
          </div>

          <div className="border-top border-gray-light py-3">
            <h2 className="mb-1 h4">
              Dabbled With
            </h2>
            <DabbledWithList />
          </div>
        </Left>
        <Right className="pl-2">
          <nav className="UnderlineNav">
            <div className="UnderlineNav-body">
              <Link to="/" role="tab" title="Overview" className="UnderlineNav-item" activeClassName="selected">
                Overview
              </Link>
              <Link to="/#experiences" role="tab" title="Experiences" className="UnderlineNav-item" activeClassName="selected">
                Experiences
              </Link>
            </div>
          </nav>
          <div className="mt-4">
            <h2 className="f4 mb-2 text-normal">
              Pinned Experiences
            </h2>
            <div>
              <PinnedExperienceList />
            </div>
          </div>

          <div className="mt-4">
            <GithubHeatmap />
          </div>

          <div className="mt-4">
            <h2 className="f4 mb-2 text-normal" id="experiences">
              Experience activity
            </h2>
            <Timeline />
            {/* <div>
              <PinnedExperienceList />
            </div> */}
          </div>
        </Right>
      </Container>
    </div>
  )
}

export default Index
