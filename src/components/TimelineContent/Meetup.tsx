import React from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'
import styled from 'styled-components'
import {
  Meetup_ExperienceYamlFragment
} from '../../generated/graphql'

const Root = styled.div`
  display: flex;
  align-items: center;
`
const FlexGrow = styled.div`
  flex-grow: 1;
`

type MeetupProps = {
  experience: Meetup_ExperienceYamlFragment
}

const Meetup: React.SFC<MeetupProps> = (props) => {
  const { experience } = props

  return (
    <Root className="mt-1 py-1">
      <a href={experience.url} className="mr-2">
        {_.kebabCase(experience.title)}
      </a>
      <span className="f6 text-gray-light">
        {experience.location}
      </span>
      <FlexGrow />
      <time className="float-right f6 text-gray-light pt-1">
        {experience.meetupAt}
      </time>
    </Root>
  )
}

export default Meetup

export const query = graphql`
  fragment Meetup_ExperienceYaml on ExperienceYaml {
    id
    title
    location
    meetupAt: startedAt(formatString: "MMM DD")
    url
  }
`

