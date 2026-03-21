import { Box, Container, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const services = [
  { title: "criminal_title", text: "criminal_desc" },
  { title: "labor_title", text: "labor_desc" },
  { title: "civil_title", text: "civil_desc" },
  { title: "representation_title", text: "representation_desc" }
]

const Services = () => {
  const { t } = useTranslation()

  return (
    <Box bg="#f6f6f6" py={16}>
      <Container maxW="1140px">
        
        <Heading mb={8} fontFamily="Playfair Display" fontWeight="500">
          {t('services')}
        </Heading>

        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
          {services.map((service, i) => (
            <Flex 
              key={i}
              p={6}
              bg="white"
              border="1px solid #d6d6d6"
              borderRadius="md"
              justify="space-between"
              align="flex-start"
              fontFamily="Playfair Display"
              transition="all .3s"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "lg"
              }}
            >
              <Box maxW="90%">
                
                <Heading size="xs" color="#243a5a" mb={2}>
                  {t(service.title)}
                </Heading>

                <Text fontSize="xs" color="gray.600" mb={2}>
                  {t(service.text)}
                </Text>

                <Link
                  as={NavLink}
                  to="/contacts"
                  fontSize="sm"
                  color="#243a5a"
                  textDecoration="underline"
                >
                  {t('cta_consultation')}
                </Link>

              </Box>
            </Flex>
          ))}
        </Grid>

      </Container>
    </Box>
  )
}

export default Services