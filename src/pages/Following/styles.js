import {Platform} from 'react-native'
import styled from 'styled-components'
import Constans from 'expo-constants'

import color from '../../styles/colors'

const statusBarHeight = Platform.OS === 'android' ? Constans.statusBarHeight : 0

export const Wrapper = styled.SafeAreaView`
  background: ${color.primary};
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};

`

export const Container = styled.View`
  padding-left: 14px;
`

export const Main = styled.View``