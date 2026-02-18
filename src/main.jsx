import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './scss/main.scss'
import './scss/tailwind.css'
import { ChakraProvider, } from '@chakra-ui/react'
import { system } from '@chakra-ui/react/preset'
// import './i18n/index.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider value={system} >
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)
