import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Site } from './Components/Site/Site'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
      <Site />
  </ChakraProvider>
)
