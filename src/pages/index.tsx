import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import PinnedExperienceList from '../components/PinnedExperienceList'
import CommercialToolkitsList from '../components/CommercialToolkitsList'
import { IndexQuery } from '../generated/graphql'
import { ChildImageSharp } from '../types'

type PageProps = {
  data: IndexQuery
}

const Main = styled.div`
  max-width: 1012px;
  width: 100%;
  margin: auto;
  display: flex;
`

const Index: React.FunctionComponent<PageProps> = ({ data }) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <div>
      <header className="bg-gray-dark text-white p-3 mb-2">
        <Main className="px-3">
          <h1 className="h4 f5 text-white text-bold">
            Jeong Seong Dae · Web Software Enginner
          </h1>
        </Main>
      </header>
      <div className="container-lg clearfix mt-4">
        <div className="h-card col-3 float-left pr-3">
          <div className="py-3">
            <h1 className="h2 d-block overflow-hidden">
              Jeong Seong Dae
            </h1>
            <h2 className="h3 f3-light text-gray">
              Full Stack Developer・JavaScript
            </h2>
          </div>

          <div className="border-top border-gray-light py-3">
            <h2 className="mb-1 h4">
              Commercial Toolkit
            </h2>
            <CommercialToolkitsList />
          </div>
        </div>
        <div className="col-9 float-left pl-2">
          <nav className="UnderlineNav">
            <div className="UnderlineNav-body">
              <a href="#" role="tab" title="Item 1" className="UnderlineNav-item selected">Overview</a>
              <a href="#experiences" role="tab" title="Item 2" className="UnderlineNav-item">Experiences</a>
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
        </div>
      </div>
    </div>
  )
}

export default Index

export const query = graphql`
  query Index {
    commercialToolkits: allCommercialToolkitsYaml {
      edges {
        node {
          id
          name
          name_detail
          url
          logo {
            id
            relativePath
          }
          learnedAt
          endedAt
          desc
        }
      }
    }
  }
`
