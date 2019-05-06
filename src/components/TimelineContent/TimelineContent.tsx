import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Box } from '@primer/components'
import {
  TimelineContent_ExperienceYamlFragment
} from '../../generated/graphql'
import JoinBox from './JoinBox'
import Meetup from './Meetup'
import Launch from './Launch'


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
    console.log(experience)
    if (experience.type === 'meetup') {
      return <Meetup experience={experience} />
    }
    if (experience.type === 'launch_app' || experience.type === 'launch_web') {
      return <Launch experience={experience} />
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
    ...Meetup_ExperienceYaml
    ...Launch_ExperienceYaml
  }
`

