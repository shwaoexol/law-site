import { Box, Grid, Heading, VStack, Image, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  return (
    <>
      <Box>
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
            bg="linear-gradient(rgba(15,20,25,.75), rgba(15,20,25,.75)), url('/images/about.webp')"
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
              {t('about')}
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
              src="/images/about2.webp"
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

   
      <Box bg="white" py={{ base: 16, md: 24 }} px={{ base: 6, md: 20 }}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={8}
        >
        <Image
          src="/images/guvohnoma.jpg"
          alt="lawyer"
          w="100%"
          h="300px"
          objectFit="contain"
          borderRadius="xl"
          boxShadow="0 10px 30px rgba(0,0,0,0.1)"
          transition="0.4s"
          _hover={{ transform: "scale(1.05)" }}
        />

        <Image
          src="/images/license.jpg"
          alt="office"
          w="100%"
          h="300px"
          objectFit="contain"
          borderRadius="xl"
          boxShadow="0 10px 30px rgba(0,0,0,0.1)"
          transition="0.4s"
          _hover={{ transform: "scale(1.05)" }}
        />

        <Image
          src="/images/licanse2.jpg"
          alt="meeting"
          w="100%"
          h="300px"
          objectFit="contain"
          borderRadius="xl"
          boxShadow="0 10px 30px rgba(0,0,0,0.1)"
          transition="0.4s"
          _hover={{ transform: "scale(1.05)" }}
        />
        </Grid>
      </Box>
    </>
  )
}

export default About