import React from 'react'
import styled from 'styled-components'
import { DateTime } from 'luxon'
import { Flex } from '@primer/components'

const HorizontalDivider = styled.div`
  height: 1px;
  background-color: #eaecef;
`

type DateDividerProps = {
  date: DateTime
}

const DateDivider: React.SFC<DateDividerProps> = (props) => {
  const { date } = props
  console.log(date)
  return (
    <Flex flexWrap="nowrap" alignItems="center">
      <Flex.Item>
        <h3 className="h6 pr-2 py-1">
          {date.toFormat('LLLL')} <span className="text-gray">{date.year}</span>
        </h3>
      </Flex.Item>
      <Flex.Item flex={1}>
        <HorizontalDivider />
      </Flex.Item>
    </Flex>
  )
}

export default DateDivider
