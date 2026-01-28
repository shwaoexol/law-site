import { Box, Button, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <Box
            minH="360px"
            bgImage="linear-gradient(rgba(40,55,65,.85), rgba(40,55,65,.85)), url(../../../public/images/footerbg.jpg)"
            bgSize="cover"
            bgPos="center"
            color="white"
            display="flex"
            alignItems="center"
        >
            <HStack maxW="1140px" mx="auto" px="6" gap="20">
                <Heading size="xl">
                    Давайте работать <br /> вместе
                </Heading>
                <Button as={NavLink} to="/contacts" color="black" variant="surface" colorPalette="white">
                    Связаться
                </Button>
            </HStack>
        </Box>
    </>
  )
}

export default Footer