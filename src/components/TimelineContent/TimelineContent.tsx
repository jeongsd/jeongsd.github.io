import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Box } from '@primer/components'
import {
  TimelineContent_ExperienceYamlFragment
} from '../../generated/graphql'
import JoinBox from './JoinBox'

const Root = styled(Box)`
  flex-grow: 1;
`

type TimelineContentProps = {
  experience: TimelineContent_ExperienceYamlFragment
}

const TimelineContent: React.SFC<TimelineContentProps> = (props) => {
  const { experience } = props

  function renderContent() {
    if (experience.type === 'join') {
      return <JoinBox experience={experience} />
    }
    return null
  }
  return (
    <Root pb={4}>
      {renderContent()}
    </Root>
  )
}

export default TimelineContent

export const query = graphql`
  fragment TimelineContent_ExperienceYaml on ExperienceYaml {
    id
    type
    ...JoinBox_ExperienceYaml
  }
`

