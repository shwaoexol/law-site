import { Box, Grid, Heading, VStack, Image, Text } from '@chakra-ui/react'
import ContactForm from '../components/ContactForm/ContactForm'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  return (
    <>
      {/* HERO */}
      <Box
        textAlign="center"
        py={{ base: "24", md: "32" }}
        bgImage="linear-gradient(rgba(20,25,30,.85), rgba(20,25,30,.85)), url('/images/handshake.jpg')"
        bgSize="cover"
        bgPos="center"
      >
        <Text
          color="gray.300"
          letterSpacing="3px"
          textTransform="uppercase"
          fontSize="12px"
          mb="4"
        >
          {t('lawoffice')}
        </Text>

        <Heading
          color="white"
          fontFamily="Playfair Display"
          fontWeight="500"
          fontSize={{ base: "28px", md: "42px" }}
          letterSpacing="1px"
        >
          INTERNATIONAL LEGAL ADVISOR
        </Heading>
      </Box>

      {/* ABOUT SECTION */}
      <Box bg="white" py={{ base: 16, md: 24 }} px={{ base: 6, md: 20 }}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 10, md: 16 }}
          alignItems="stretch"
        >

          {/* LEFT */}
          <Box
            h="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            p={{ base: 6, md: 12 }}
            bg="linear-gradient(rgba(15,20,25,.75), rgba(15,20,25,.75)), url('/images/about.jpg')"
            bgSize="cover"
            bgPos="center"
            color="white"
            borderRadius="2xl"
            boxShadow="0 20px 50px rgba(0,0,0,0.15)"
          >
            <Text
              fontSize="12px"
              letterSpacing="2px"
              textTransform="uppercase"
              color="gray.400"
              mb="4"
            >
              About
            </Text>

            <Heading
              fontSize={{ base: "22px", md: "30px" }}
              fontWeight="500"
              mb="6"
              fontFamily="Playfair Display"
              lineHeight="1.4"
            >
              {t('hero_title')}
            </Heading>

            <Box w="50px" h="1px" bg="gray.400" mb="6" />

            <Text
              lineHeight="1.9"
              fontSize={{ base: "14px", md: "15px" }}
              color="gray.200"
            >
              {t('about_text')}
            </Text>
          </Box>

          {/* RIGHT */}
          <Box
            h="100%"
            overflow="hidden"
            borderRadius="2xl"
            boxShadow="0 20px 50px rgba(0,0,0,0.12)"
          >
            <Image
              src="/images/about2.jpg"
              alt="about"
              w="100%"
              h="100%"
              objectFit="cover"
              transition="transform .6s ease"
              _hover={{
                transform: "scale(1.05)"
              }}
            />
          </Box>

        </Grid>
      </Box>

      {/* LICENSE */}
      <Box
        bg="#F7F6F4"
        borderTop="1px solid #e5e5e5"
        borderBottom="1px solid #e5e5e5"
        py={12}
        px={6}
        textAlign="center"
      >
        <VStack spacing={4}>
          <Text
            fontSize={{ base: "22px", md: "32px" }}
            fontWeight="500"
            fontFamily="Playfair Display"
            color="#1a1a1a"
            letterSpacing="1px"
          >
            {t('license')}
          </Text>

          <Box w="40px" h="1px" bg="#999" />
        </VStack>
      </Box>

      <ContactForm />
    </>
  )
}

export default About