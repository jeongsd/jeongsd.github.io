import React from 'react'
import Img from 'gatsby-image'
import { Manager, Reference, Popper } from 'react-popper';
import { oc } from 'ts-optchain'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Popover from 'react-awesome-popover'
import { CommercialToolkitsListQuery } from '../generated/graphql'
import { ChildImageSharp } from '../types'
import Arrow from './Arrow'

// type PageProps = {
//   data: IndexQuery
// }

const LinkWrapper = styled.span`
  /* max-width: 1012px; */
  width: 32px;
  height: 32px;
`

const CommercialToolkitsList: React.SFC = () => {
  const data: CommercialToolkitsListQuery = useStaticQuery(query)
  const commercialToolkits = oc(data).commercialToolkits.edges([])

  return (
    <div>
      {commercialToolkits.map(({ node }) => {
        if (!node) return null
        return (
          <Popover key={node.id} action="click" placement="top">
            <LinkWrapper >
              <button href={node.url || undefined}>
                <img
                // ref={ref}
                  className="avatar"
                  alt={node.name || ''}
                  src={node.logo && node.logo.publicURL || ''}
                  width="32"
                  height="32"
                />
              </button>
            </LinkWrapper>
            <div>The content</div>
          </Popover>
        )
      })}
    </div>
  )
}

export default CommercialToolkitsList

export const query = graphql`
  query CommercialToolkitsList {
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
            publicURL
          }
          learnedAt
          endedAt
          desc
        }
      }
    }
  }
`
