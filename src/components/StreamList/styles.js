import styled from 'styled-components'

import colors from '../../styles/colors'

export const List = styled.View`
  padding: 8px 0 24px
`

export const StreamContainer = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  margin-bottom: 24px
  margin-right: 24px
`

export const StreamThumbnail = styled.Image`
  width: 119px;
  height: 66px;
`

export const StreamColumn = styled.View`
  margin-left: 11px;
  flex: 1;
`

export const StreamRow = styled.View`
  height: 66px;
  justify-content: space-between;
`

export const StreamAvatar = styled.View`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background: ${colors.tag}
`

export const StreamHeader = styled.View`
  flex-direction: row;
  align-items: center
`

export const StreamUsername = styled.Text`
  color: ${colors.black};
  margin-left: 5px;
`

export const StreamDescription = styled.Text`
  color: ${colors.black}
`
export const StreamCategory = styled.Text`
  color: ${colors.gray}

`


export const TagRow = styled.View`
  margin-top: 8px;
  flex-direction: row;
`

export const TagText = styled.Text`
  color: ${colors.black};
  font-size: 13px
`

export const TagView = styled.View`
  background: ${colors.tag}
  padding: 2px 8px;
  border-radius: 13px;
  margin-right: 5px
`