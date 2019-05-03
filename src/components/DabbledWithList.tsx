import React from 'react'
import { oc } from 'ts-optchain'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { DabbledWithListQuery } from '../generated/graphql'
import Stack from './Stack'

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const DabbledWithList: React.SFC = () => {
  const data: DabbledWithListQuery = useStaticQuery(query)
  const dabbledWiths = oc(data).dabbledWiths.edges([])

  return (
    <Root>
      {dabbledWiths.map(({ node }) => {
        if (!node) return null
        return <Stack key={node.id} stack={node} />
      })}
    </Root>
  )
}

export default DabbledWithList

export const query = graphql`
  query DabbledWithList {
    dabbledWiths: allStacksYaml(filter: {type: {eq: "dabbledWith"}}) {
      edges {
        node {
          id
          ...Stack_Stack
        }
      }
    }
  }
`
