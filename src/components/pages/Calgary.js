import React from 'react'
import { Container, Heading, Text, Image, Center } from '@chakra-ui/react'

const CalgaryPage = () => {
  return (
    <div>
      <Center>
        <Image
              w = '500px' mx = 'auto'
              src = './calgarySil.png'
              /></Center>
        <Center><Heading margin="5" fontSize="4xl">Calgary Housing Overview</Heading></Center>
        <Center><Text fontSize="xl">Coming soon when the City of Calgary has data ;)</Text></Center>
      
    </div>
  )
}

export default CalgaryPage