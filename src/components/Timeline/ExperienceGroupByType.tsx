import React from 'react'
import _ from 'lodash'
import { DateTime } from 'luxon'
import { oc } from 'ts-optchain'
import { Text, Box } from '@primer/components'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Organization, Rocket, Location, Mail, Link } from '@githubprimer/octicons-react'
import { ExperienceGroupByType_ExperienceFragment } from '../../generated/graphql'
import VerticalDivider from './VerticalDivider'
import TimelineContent from '../TimelineContent'

const Root = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
`
const ExperienceListItem = styled.div`
  display: flex;
`
const ContentAndText = styled(Box)`
  flex: 1;
`

type ExperienceGroupByType = {
  experiences: ExperienceGroupByType_ExperienceFragment[]
}


const ExperienceGroupByType: React.SFC<ExperienceGroupByType> = (props) => {
  const { experiences } = props

  function getTypeLabel(experiencesByType: ExperienceGroupByType_ExperienceFragment[], type: string) {
    if (type === 'join') {
      return `Joined ${experiencesByType[0].title}`
    }
    return type
  }

  const groupByType = _.groupBy(experiences, node => node.type);

  return (
    <Root>
      {_.map(groupByType, (experiencesByType, type) => {
        if (!experiencesByType) return null

        return (
          <React.Fragment key={type}>
            {
              experiencesByType.map(experience => (
                <ExperienceListItem key={experience.id}>
                  <VerticalDivider
                    icon={{
                      join: Organization,
                      meetup: Location,
                      launch: Rocket,
                    }[type]}
                  />
                  <ContentAndText my={3} ml={3}>
                    <h4 className="text-normal text-gray pr-3 my-0 mb-3">
                      {getTypeLabel(experiencesByType, type)}
                    </h4>
                    <TimelineContent experience={experience} />
                  </ContentAndText>
                </ExperienceListItem>
              ))
            }
          </React.Fragment>
        )
      })}
    </Root>
  )
}

export default ExperienceGroupByType

export const query = graphql`
  fragment ExperienceGroupByType_Experience on ExperienceYaml {
    id
    type
    ...TimelineContent_ExperienceYaml
  }
`
