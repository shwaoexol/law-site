import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'

const ServicesCard = ({ title, text }) => (
  <Box py="14" borderBottom="1px solid" borderColor="brand.200">
    <Heading size="lg" fontWeight="400" mb="4">
      {title}
    </Heading>

    <Text color="brand.400" mb="6">
      {text}
    </Text>
  </Box>
)

const Services = () => {
  return (
    <>
        <Box 
            bg="brand.800"
            color="white"
            textAlign="center"
            py={{ base: "20", md: "28" }}
            bgImage="linear-gradient(rgba(31, 41, 51, .85), rgba(31, 41, 51, .85)), url(../../../public/images/lawyer.jpg)"
            bgSize="cover"
            bgPos="center"
          >
            <Heading size="2xl" mb="4" fontWeight="500">
              Наша практика
            </Heading>
            <Text maxWidth="600px" mx="auto" color="gray.300">
              Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения дальнейших направлений развития.
            </Text>
          </Box>

          <Box bg="white" px={{ base: 6, md: 20 }} py="16">
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="16">
              <ServicesCard 
                title="Недоверие к закону"
                text="Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения дальнейших направлений развития."
              />
              <ServicesCard
                title="Судебная тяжба"
                text="Повседневная практика показывает, что рамки и место обучения кадров позволяет выполнять важные задания по разработке дальнейших направлений развития."
              />
              <ServicesCard
                title="Судебная практика по недвижимости"
                text="Повседневная практика показывает, что рамки и место обучения кадров позволяет выполнять важные задания по разработке дальнейших направлений развития."
              />
              <ServicesCard
                title="Травма и здравоохранение"
                text="Повседневная практика показывает, что рамки и место обучения кадров позволяет выполнять важные задания по разработке дальнейших направлений развития."
              />
            </Grid>
          </Box>
          <ContactForm/>
    </>
  )
}

export default Services