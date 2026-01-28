import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react'
import ContactForm from '../components/ContactForm/ContactForm'

const About = () => {
  return (
    <>
      <Box
        textAlign="center"
        py={{ base: "20", md: "28" }}
        bgImage="linear-gradient(rgba(31,41,51,.85), rgba(31,41,51,.85)), url('/images/handshake.jpg')"
        bgSize="cover"
        bgPos="center"
      >
        <Heading size="2xl" mb="3" fontWeight="500" color="white">
          О нас
        </Heading>
        <Text maxW="600px" mx="auto" color="gray.300">
          Защита интересов, обеспечение правовой помощи, сопровождение бизнеса и судебная практика в различных направлениях юридической деятельности.
        </Text>
      </Box>


      <Box bg="white" py="20" px={{ base: 6, md: 20 }}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap="16"
          alignItems="center"
        >

          <Box maxW="420px">
            <Heading size="lg" fontWeight="500" mb="4">
              Защищаем закон с 2022 года
              <Box w="40px" h="2px" bg="brand.700" mt="3" />
            </Heading>

            <Text color="brand.600" lineHeight="1.8">
              Таким образом постоянное информационно-пропагандистское обеспечение
              нашей деятельности представляет собой интересный эксперимент
              проверки позиций, занимаемых участниками в отношении поставленных задач.
            </Text>
          </Box>


          <Box display="flex" justifyContent="center">
            <Image
              src="/images/about.jpg"
              alt="Юридическая практика"
              borderRadius="md"
              boxShadow="lg"
              maxW="360px"
            />
          </Box>
        </Grid>
      </Box>
      <ContactForm/>
    </>
  )
}

export default About
