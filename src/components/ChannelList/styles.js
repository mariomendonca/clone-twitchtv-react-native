import styled from 'styled-components'

import colors from '../../styles/colors'

export const List = styled.View`
  padding: 8px 0 0;
`

export const ChannelContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 14px;
  margin-bottom: 25px;
`

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Avatar = styled.View`
  background: ${colors.tag};
  width: 48;
  height: 48;
  border-radius: 24px
`

export const Column = styled.View`
  padding-left: 10px
`

export const Username = styled.Text`
  color: ${colors.black};
  font-size: 16px;
`

export const Info = styled.Text`
  margin-top: 1px;
  color: ${colors.gray}
`

export const RightSide = styled.View``

export const WhiteCircle = styled.View`
  background: ${colors.black}
  height: 9px;
  width: 9px;
  border-radius: 4.5px;
  opacity: 0.85;
`
