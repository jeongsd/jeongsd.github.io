import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { oc } from 'ts-optchain'
import styled from 'styled-components'
import Octicon, { Location, Calendar } from '@githubprimer/octicons-react'
import { PinnedExperienceListQuery } from '../generated/graphql'

const Item = styled.div`
  flex: 48%;
  display: flex;
  flex-direction: column;
`
const Desc = styled.div`
  flex-grow: 1;
`

const PinnedExperienceList: React.SFC = () => {
  const data: PinnedExperienceListQuery = useStaticQuery(query)
  const experiences = oc(data).experiences.edges([])

  return (
    <div className="d-flex flex-wrap ">
      {experiences.map(({ node }) => {
        if (!node) return null
        return (
          <Item key={node.id} className="p-3 mb-3 mr-2 border border-gray-dark rounded-1">
            <a href={node.url} className="text-bold">
              <span className="repo js-pinnable-item" title="react-timezone-map-gl">
                {node.title}
              </span>
            </a>
            <Desc className="text-gray text-small d-block mt-2 mb-3">
              {node.desc}
            </Desc>
            <div className="d-flex flex-row flex-justify-start">
              <div className="mr-3">
                <Octicon className="ml-1 mr-2" icon={Location}/>
                <small className="f6 text-gray">
                  {node.location}
                </small>
              </div>
              <div className="mr-3 d-flex flex-items-center">
                <Octicon icon={Calendar} ariaLabel="Add new item" />
                <small className="f6 text-gray ml-2">
                  {node.startedAt}
                </small>
              </div>
            </div>
          </Item>
        )
      })}
    </div>
  )
}

export default PinnedExperienceList

export const query = graphql`
  query PinnedExperienceList {
    experiences: allExperienceYaml(filter: { pinned: { eq: true } }) {
      edges {
        node {
          id
          title
          title_detail
          category
          desc
          location
          startedAt(formatString: "YYYY.MM")
          url
          pinned
        }
      }
    }
  }
`
