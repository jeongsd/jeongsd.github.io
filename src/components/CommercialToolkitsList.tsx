import React from 'react'
import { DateTime } from 'luxon'
import { oc } from 'ts-optchain'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Popover from 'react-awesome-popover'
import Octicon, { Calendar } from '@githubprimer/octicons-react'
import { CommercialToolkitsListQuery } from '../generated/graphql'

// type PageProps = {
//   data: IndexQuery
// }

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const LinkWrapper = styled.span`
  /* max-width: 1012px; */
  width: 32px;
  height: 32px;
`
const Content = styled.div`
  max-width: 400px;
  width: 100%;
`
const Item = styled.span`
  margin-right: 10px;
  margin-top: 10px;
`
const Desc = styled.p`
  white-space: pre-line;
`

const CommercialToolkitsList: React.SFC = () => {
  const data: CommercialToolkitsListQuery = useStaticQuery(query)
  const commercialToolkits = oc(data).commercialToolkits.edges([])

  return (
    <Root>
      {commercialToolkits.map(({ node }) => {
        if (!node) return null

        const learnedAt = DateTime.fromISO(node.learnedAt)

        return (
          <Item key={node.id}>
            <Popover action="hover" placement="top">
              <LinkWrapper >
                <a href={node.url || undefined}>
                  <img
                    className="avatar"
                    alt={node.name || ''}
                    src={node.logo && node.logo.publicURL || ''}
                    width="36"
                    height="36"
                  />
                </a>
              </LinkWrapper>
              <Content>
                <div>
                  <div className="d-flex px-4 pt-3 pb-2">
                    <div className="">
                      <img
                        className="avatar"
                        alt={node.name || ''}
                        src={node.logo && node.logo.publicURL || ''}
                        width="48"
                        height="48"
                      />
                    </div>
                    <div className="pl-4 m-0">
                      <p>
                        <b>{node.name}</b>
                        {' - '}
                        <span className="text-gray">
                          {node.name_detail}
                        </span>
                      </p>
                      <Desc className="text-gray">
                        {node.desc}
                      </Desc>
                    </div>
                  </div>
                  <div className="border-top border-gray-light px-4 pt-3 pb-2">
                    {/* <p className="text-gray">
                      {node.desc}
                    </p> */}
                    <div className="mr-3 d-flex flex-items-center">
                      <Octicon icon={Calendar} ariaLabel="Add new item" />
                      <small className="f6 text-gray ml-2">
                        {learnedAt.isValid ? learnedAt.toFormat('yyyy.MM') : '알수없음'}
                      </small>
                    </div>

                  </div>
                </div>
              </Content>
            </Popover>
          </Item>
        )
      })}
    </Root>
  )
}

export default CommercialToolkitsList

export const query = graphql`
  query CommercialToolkitsList {
    commercialToolkits: allStacksYaml(filter: {type: {eq: "commercialToolkit"}}) {
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
