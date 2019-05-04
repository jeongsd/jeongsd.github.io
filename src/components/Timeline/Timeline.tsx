import React from 'react'
import _ from 'lodash'
import { DateTime } from 'luxon'
import { oc } from 'ts-optchain'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Organization, Location, Mail, Link } from '@githubprimer/octicons-react'
import { TimelineQuery } from '../../generated/graphql'
import DateDivider from './DateDivider'
import ExperienceGroupByType from './ExperienceGroupByType'

const Root = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
`

const Timeline: React.SFC = () => {
  const data: TimelineQuery = useStaticQuery(query)
  const experiences = oc(data).experiences.edges([]).map(({ node }) => node)

  const groupByTimes = _.groupBy(experiences, node => {
    if (!node) return null
    return DateTime.fromISO(node.timelineStartedAt).toFormat('LLLL yyyy')
  });

  return (
    <Root>
      {
        _.map(groupByTimes, (groupByTime, date) => {
          return (
            <React.Fragment key={date}>
              <DateDivider date={DateTime.fromFormat(date, 'LLLL yyyy')} />
              <ExperienceGroupByType experiences={groupByTime} />
            </React.Fragment>
          )
        })
      }
    </Root>
  )
}

export default Timeline

export const query = graphql`
  query Timeline {
    experiences: allExperienceYaml(sort: { order: DESC, fields: [startedAt]  }) {
      edges {
        node {
          id
          timelineStartedAt: startedAt(formatString: "YYYY-MM-DD")
          ...TimelineContent_ExperienceYaml
        }
      }
    }
  }
`
