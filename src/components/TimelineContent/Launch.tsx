import React from 'react'
import { graphql } from 'gatsby'
import _ from 'lodash'
import styled from 'styled-components'
import {
  Launch_ExperienceYamlFragment
} from '../../generated/graphql'

const Root = styled.div`
  display: flex;
  align-items: center;
`
const FlexGrow = styled.div`
  flex-grow: 1;
`
const Ball = styled.span`
  border-radius: 50%;
  display: inline-block;
  height: 12px;
  position: relative;
  top: 1px;
  width: 12px;
`

type LaunchProps = {
  experience: Launch_ExperienceYamlFragment
}

const Launch: React.SFC<LaunchProps> = (props) => {
  const { experience } = props
  console.log(experience)
  if (experience.type === 'launch_web') {
    return (
      <Root className="mt-1 py-1">
        <a href={experience.url} className="mr-2">
          {experience.title}
        </a>
        <span className="f6 text-gray-light">
          <Ball style={{ backgroundColor: '#f1e05a' }} />
          {' '}
          Web
        </span>
        <FlexGrow />
        <time className="float-right f6 text-gray-light pt-1">
          {experience.launchAt}
        </time>
      </Root>
    )
  }
  if (experience.type === 'launch_app') {
    return (
      <>
        <Root className="mt-1 py-1">
          <a href={experience.appStore} className="mr-2">
            {experience.title}/ios
          </a>
          <span className="f6 text-gray-light">
            <Ball style={{ backgroundColor: '#0366d6' }} />
            {' '}
            App Store
          </span>
          <FlexGrow />
          <time className="float-right f6 text-gray-light pt-1">
            {experience.launchAt}
          </time>
        </Root>
        <Root className="mt-1 py-1">
          <a href={experience.playStore} className="mr-2">
            {experience.title}/android
          </a>
          <span className="f6 text-gray-light">
            <Ball style={{ backgroundColor: '#ea4a5a' }} />
            {' '}
            Google Play
          </span>
          <FlexGrow />
          <time className="float-right f6 text-gray-light pt-1">
            {experience.launchAt}
          </time>
        </Root>
      </>

    )
  }

  return (
    <Root className="mt-1 py-1">
      <a href={experience.url} className="mr-2">
        {_.kebabCase(experience.title)}
      </a>
      {/* <span className="f6 text-gray-light">
        {experience.location}
      </span> */}
      <FlexGrow />
      <time className="float-right f6 text-gray-light pt-1">
        {experience.launchAt}
      </time>
    </Root>
  )
}

export default Launch

export const query = graphql`
  fragment Launch_ExperienceYaml on ExperienceYaml {
    id
    title
    location
    type
    appStore
    playStore
    launchAt: startedAt(formatString: "MMM D")
    url
  }
`

