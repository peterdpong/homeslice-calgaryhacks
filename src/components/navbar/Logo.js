import React from "react";
import { Box, Text, Link, Button } from '@chakra-ui/react';
import { Image } from "@chakra-ui/react";
import {Link as ReactLink} from 'react-router-dom'

export default function Logo(props) {
  return (
    <Box {...props}> 
    <Link as = {ReactLink} to="/">
      <Image
      src = './HomeSlice.png'
      />
      </Link>
    </Box> 
  )
}