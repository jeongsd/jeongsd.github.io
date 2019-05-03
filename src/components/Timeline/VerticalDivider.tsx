import React from 'react'
import _ from 'lodash'
import styled from 'styled-components'
import { StyledOcticon } from '@primer/components'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Circle = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: #e6ebf1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Divider = styled.div`
  background-color: #eaecef;
  width: 2px;
`
const TopDivider = styled(Divider)`
  height: 13px;
`
const BottomDivider = styled(Divider)`
  flex: 1;
`


type VerticalDivider = {
  icon: any;
}

const VerticalDivider: React.SFC<VerticalDivider> = (props) => {
  const { icon } = props
  return (
    <Root>
      <TopDivider />
      <Circle>
        <StyledOcticon size={16} icon={icon} color="#586069" />
      </Circle>
      <BottomDivider />
    </Root>
  )
}

export default VerticalDivider
