import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { BorderBox, Text } from '@primer/components'
import {
  JoinBox_ExperienceYamlFragment
} from '../../generated/graphql'

const Root = styled(BorderBox)`
  flex-grow: 1;
`
const DateText = styled(Text)`
  color: #586069;
`
const ImageWrapper = styled.div`
  /* color: #586069; */
  max-height: 275px;
  max-width: 451px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`

type JoinBoxProps = {
  experience: JoinBox_ExperienceYamlFragment
}

const JoinBox: React.SFC<JoinBoxProps> = (props) => {
  const { experience } = props
  if(!experience.photo) return null

  return (
    <Root p={2} mt={3}>
      <ImageWrapper>
        <img
          width={experience.photoWidth || undefined}
          height={experience.photoHeight || undefined}
          src={experience.photo.publicURL || undefined}
        />
      </ImageWrapper>

      <div>

      </div>
      <a href={experience.url}>
        <Text as='h4' className="text-green" textAlign="center">
          Joined {experience.title}
        </Text>
      </a>

      <DateText as='p' textAlign="center">
        on {experience.joinedAt}
      </DateText>
    </Root>
  )
}

export default JoinBox

export const query = graphql`
  fragment JoinBox_ExperienceYaml on ExperienceYaml {
    id
    title
    joinedAt: startedAt(formatString: "LL")
    photoWidth
    photoHeight
    url
    photo {
      publicURL
    }
  }
`

