import React from 'react'

import { 
  List, 
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle
} from './styles'

export default function ChannelList() {
  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>Mario Mendonça</Username>
          <Info>30 new videos</Info>
        </Column>
      </LeftSide>
      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  )

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  )
}