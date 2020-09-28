import { Platform } from 'react-native'
import styled from 'styled-components/native'
import Constans from 'expo-constants'

import color from '../../styles/colors'

const statusBarHeight = Platform.OS === 'android' ? Constans.statusBarHeight : 0

export const Wrapper = styled.SafeAreaView`
  background: ${color.primary};
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};
  justify-content: center;
  align-items: center
`

export const Heading = styled.Text`
  color: ${color.purple};
  font-size: 30px;
`