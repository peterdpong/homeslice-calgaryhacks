import React from 'react'
import { Container, Heading, Text, Image } from '@chakra-ui/react'

const CalgaryPage = () => {
  return (
    <div>
      <Container marginBottom="10" centerContent>
        <Image
              w = '500px' mx = 'auto'
              src = './calgarySil.png'
              />
        <Heading margin="5" fontSize="4xl">Calgary Housing Overview</Heading>
        <Text fontSize="xl">Coming soon when City of Calgary has data ;)</Text>
      </Container>
      
    </div>
  )
}

export default CalgaryPage