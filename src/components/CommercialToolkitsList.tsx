import React from 'react'
import { oc } from 'ts-optchain'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { CommercialToolkitsListQuery } from '../generated/graphql'
import Stack from './Stack'

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const CommercialToolkitsList: React.SFC = () => {
  const data: CommercialToolkitsListQuery = useStaticQuery(query)
  const commercialToolkits = oc(data).commercialToolkits.edges([])

  return (
    <Root>
      {commercialToolkits.map(({ node }) => {
        if (!node) return null
        return <Stack key={node.id} stack={node} />
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
          ...Stack_Stack
        }
      }
    }
  }
`
