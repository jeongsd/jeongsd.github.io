import React from 'react'
import { DateTime } from 'luxon'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Popover from 'react-awesome-popover'
import Octicon, { Calendar } from '@githubprimer/octicons-react'
import {
  Stack_StackFragment
} from '../generated/graphql'

// type PageProps = {
//   data: IndexQuery
// }

const LinkWrapper = styled.span`
  /* max-width: 1012px; */
  width: 32px;
  height: 32px;
`
const Content = styled.div`
  max-width: 400px;
  width: 100%;
`
const Item = styled.span`
  margin-right: 10px;
  margin-top: 10px;
`
const Desc = styled.p`
  white-space: pre-line;
`
const Logo = styled.img`
  object-fit: contain;
`

export type StackProps = {
  stack: Stack_StackFragment
}
const Stack: React.SFC<StackProps> = (props) => {
  const { stack } = props
  const learnedAt = DateTime.fromISO(stack.learnedAt)

  return (
    <Item key={stack.id}>
      <Popover action="hover" placement="top">
        <LinkWrapper >
          <a href={stack.url || undefined}>
            <Logo
              className="avatar"
              alt={stack.name || ''}
              src={stack.logo && stack.logo.publicURL || ''}
              width="36"
              height="36"
            />
          </a>
        </LinkWrapper>
        <Content>
          <div>
            <div className="d-flex px-4 pt-3 pb-2">
              <div className="">
                <Logo
                  className="avatar"
                  alt={stack.name || ''}
                  src={stack.logo && stack.logo.publicURL || ''}
                  width="48"
                  height="48"
                />
              </div>
              <div className="pl-4 m-0">
                <p>
                  <b>{stack.name}</b>
                  {' - '}
                  <span className="text-gray">
                    {stack.name_detail}
                  </span>
                </p>
                <Desc className="text-gray">
                  {stack.desc}
                </Desc>
              </div>
            </div>
            <div className="border-top border-gray-light px-4 pt-3 pb-2">
              <div className="mr-3 d-flex flex-items-center">
                <Octicon icon={Calendar} ariaLabel="Add new item" />
                <small className="f6 text-gray ml-2">
                  {learnedAt.isValid ? learnedAt.toFormat('yyyy.MM') : '알수없음'}
                </small>
              </div>
            </div>
          </div>
        </Content>
      </Popover>
    </Item>
  )
}

export default Stack

export const query = graphql`
  fragment Stack_Stack on StacksYaml {
    id
    name
    name_detail
    url
    logo {
      id
      relativePath
      publicURL
    }
    learnedAt
    endedAt
    desc
  }
`
