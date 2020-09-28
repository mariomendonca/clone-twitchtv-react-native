import React, { useMemo } from 'react'
import { FlatList, View } from 'react-native'
import { Container, Wrapper, Main } from './styles'

import Header from '../../components/Header'
import Heading from '../../components/Heading'
import Title from '../../components/Title'
import CategoryList from '../../components/CategoryList'
import StreamList from '../../components/StreamList'
import ChannelList from '../../components/ChannelList'

export default function CommingSoon() {
  const {data, indexes} = useMemo(() => {
    const items = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>
      },
      {
        key: "FOLLOWED_CHANNELS",
        render: () => <Title>Followed categories</Title>,
        isTitle: true
      },
      {
        key: 'C1', render: () => <CategoryList/>
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live channels</Title>,
        isTitle: true
      },
      {
        key: 'C2', render: () => <StreamList/>
      },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue watching</Title>,
        isTitle: true
      },
      {
        key: 'C3', render: () => <StreamList/>
      },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline channels</Title>,
        isTitle: true
      },
      {
        key: 'C4', render: () => <ChannelList/> 
      },
    ]

    const indexes = []

    items.forEach((item, index) => item.isTitle && indexes.push(index))

    return {
      data: items,
      indexes
    }
  }, [])

  return (
    <Wrapper>
      <Container>
        <Header/>
        <Main>
          <FlatList 
            data={data}
            renderItem={({item}) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indexes}
            //refresh effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  )
}