import React from 'react'

import { Container, HeadingText } from './styles'

export default function Heading({children}) {
  return (
    <Container>
      <HeadingText>{children}</HeadingText>
    </Container>
  )
} 