import React from 'react'
import { Text } from 'react-native'

import streamThumbnail from '../../images/stream_thumbnail.jpg'
import { 
  List, 
  StreamContainer, 
  StreamThumbnail,
  StreamRow,
  StreamAvatar,
  StreamHeader,
  StreamUsername,
  StreamColumn,
  TagRow,
  TagText,
  TagView,
  StreamDescription,
  StreamCategory
} from './styles'

export default function StreamList() {
  const StreamItem = () => (
  <StreamContainer>
    <StreamThumbnail source={streamThumbnail}/>
    <StreamColumn>
      <StreamRow>
        <StreamHeader>
          <StreamAvatar />
          <StreamUsername numberOfLines={1}>
            Netozera
          </StreamUsername>
        </StreamHeader>
        <StreamDescription numberOfLines={1}>
          Front-end com next.js, GraphQL
        </StreamDescription>
        <StreamCategory numberOfLines={1}>
          Science & technology
        </StreamCategory>
      </StreamRow>

      <TagRow>
        <TagView>
          <TagText>Portuguese</TagText>
        </TagView>
        <TagView>
          <TagText>Web Development</TagText>
        </TagView>
      </TagRow>
    </StreamColumn>
  </StreamContainer> 
) 
  return(
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  )
}