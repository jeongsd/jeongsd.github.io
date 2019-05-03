import React from 'react'
import { oc } from 'ts-optchain'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { PreviousExperienceInListQuery } from '../generated/graphql'
import Stack from './Stack'

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const PreviousExperienceInList: React.SFC = () => {
  const data: PreviousExperienceInListQuery = useStaticQuery(query)
  const preExperiences = oc(data).preExperiences.edges([])

  return (
    <Root>
      {preExperiences.map(({ node }) => {
        if (!node) return null
        return <Stack key={node.id} stack={node} />
      })}
    </Root>
  )
}

export default PreviousExperienceInList

export const query = graphql`
  query PreviousExperienceInList {
    preExperiences: allStacksYaml(filter: {type: {eq: "previousExperienceIn"}}) {
      edges {
        node {
          id
          ...Stack_Stack
        }
      }
    }
  }
`
