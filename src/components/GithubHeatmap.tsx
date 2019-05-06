import React from 'react'
import _ from 'lodash'
import ReactTooltip from 'react-tooltip'
import { oc } from 'ts-optchain'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import CalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'
import { DateTime } from 'luxon'
import { GithubHeatmapQuery } from '../generated/graphql'

const Root = styled.div`
  /* https://github.com/okize/react-calendar-heatmap/blob/master/src/index.js#L159 */
  .react-calendar-heatmap-weekday-labels {
    transform: translate(5px, 14px);
  }
  .Heatmap-date {
    color: gray;
  }
`
const Footer = styled.div`
  margin-top: -28px;
  display: flex;
  justify-content: space-between;
  font-size: 11px;
`
const FooterRight = styled.div`
  display: flex;
  align-items: center;
`
const BoxWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 5px;
  position: relative;
`
const Box = styled.li`
  /* display: inline-block; */
  height: 10px;
  width: 10px;
  margin: 0 1px;
`

const GithubHeatmap: React.SFC = () => {
  const data: GithubHeatmapQuery = useStaticQuery(query)
  console.log(data)
  // const commercialToolkits = oc(data).commercialToolkits.edges([])
  // console.log(process.env.GATSBY_GITHUB_PERSONAL_ACCESS_TOKEN)
  const totalContributions = oc(data).github.user.contributionsCollection.contributionCalendar.totalContributions(0)
  const startedAt = oc(data).github.user.contributionsCollection.startedAt(new Date())
  const weeks = oc(data).github.user.contributionsCollection.contributionCalendar.weeks([])
  const values = _.flatten(
    weeks.map(week => week.contributionDays.map(contributionDay => contributionDay))
  )
  console.log()

  // plus()
  return (
    <Root>
      <h2 className="f4 text-normal mb-2">
        {totalContributions} contributions in the last year
      </h2>
      <div className="border border-gray-dark px-3 pt-3 pb-2 graph-before-activity-overview">
        <CalendarHeatmap
          // monthLabels={[0, 1, 2, 3, 4, 5, 6,7, 8, 9 ,10, ]}
          startDate={DateTime.fromISO(startedAt).minus({ days: 1 }).toJSDate()}
          endDate={new Date()}
          values={values}
          showWeekdayLabels
          classForValue={() => ''}
          gutterSize={2}
          tooltipDataAttrs={value => {
            const date = DateTime.fromISO(value.date).toFormat('LLL dd, yyyy')
            return {
              'data-tip': `${value.count || 'No'} contributions <span class="Heatmap-date">on ${date}</span>`,
              fill: value.color,
              // width: 6,
              // height: 6,
            };
          }}
        />
        <Footer className="mx-3 px-2 pb-1">
          <div className="text-gray">
            <a href="https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile">
              Learn how we count contributions
            </a>.
          </div>
          <FooterRight className="text-gray" title="A summary of pull requests, issues opened, and commits to the default and gh-pages branches.">
            Less
            <BoxWrapper className="legend">
              <Box style={{ backgroundColor: '#ebedf0' }} />
              <Box style={{ backgroundColor: '#c6e48b' }} />
              <Box style={{ backgroundColor: '#7bc96f' }} />
              <Box style={{ backgroundColor: '#239a3b' }} />
              <Box style={{ backgroundColor: '#196127' }} />
            </BoxWrapper>
            More
          </FooterRight>
        </Footer>
      </div>
      <ReactTooltip html />
    </Root>
  )
}

export default GithubHeatmap

export const query = graphql`
  query GithubHeatmap {
    github {
      user(login:"jeongsd") {
        id
        contributionsCollection {
          startedAt
          contributionCalendar {
            totalContributions
            colors
            weeks {
              contributionDays {
                date
                color
                count: contributionCount
              }
            }
          }
        }
      }
    }
  }
`
