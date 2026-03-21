import { Box, Grid, Heading, VStack, Image, Text } from '@chakra-ui/react'
import ContactForm from '../components/ContactForm/ContactForm'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  return (
    <>
      <Box
        textAlign="center"
        py={{ base: "20", md: "28" }}
        bgImage="linear-gradient(rgba(31,41,51,.85), rgba(31,41,51,.85)), url('/images/handshake.jpg')"
        bgSize="cover"
        bgPos="center"
      >

        <Text maxW="700px" mx="auto" color="white" textTransform="uppercase" fontFamily="Playfair Display">
          {t('lawoffice')} INTERNATIONAL LEGAL ADVISOR
        </Text>
      </Box>

      <Box bg="white" py="20" px={{ base: 6, md: 20 }}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 0.9fr" }}
          gap="16"
          alignItems="center"
        >

          <Box 
            pr={{ md: 8 }}
            bgImage="linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/about.jpg')"
            bgSize="cover"
            bgPos="center"
            color="white"
            borderRadius="lg"
            boxShadow="2xl"
          >
            <Heading size="lg" fontWeight="500" mb="4" p={3} textAlign="center" fontFamily="Playfair Display">
              {t('hero_title')}
              <Box w="40px" h="2px" bg="brand.700" mt="3" />
            </Heading>

            <Text lineHeight="1.8" p={2} fontFamily="Playfair Display">
              {t('about_text')}
            </Text>
          </Box>

          <Box display="flex" justifyContent="center">
            <Image
              src="/images/about2.jpg"
              alt="about"
              borderRadius="lg"
              boxShadow="2xl"
              w="100%"
              h={{ base: "300px", md: "700px", lg: "800px"}}
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Box>

      <Box
        bg="#F2F1EF"
        bgGradient="linear(to-b, #F5F4F2, #EFEDEB)"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="2px"
        py={8}
        px={6}
        textAlign="center"
        width="100%"
      >
        <VStack spacing={4}>
          <Text
            fontSize={{ base: "28px", md: "36px" }}
            fontWeight="600"
            fontFamily="Playfair Display"
            color="#1A1A1A"
            lineHeight="1.2"
          >
            {t('license')}
          </Text>
        </VStack>
      </Box>

      <ContactForm/>
    </>
  )
}

export default About