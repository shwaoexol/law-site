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
        <Heading size="xl" mb="3" fontWeight="500" color="white" fontFamily="Playfair Display">
          Знакомьтесь: 
        </Heading>
        <Text size="xl" maxW="700px" mx="auto"  color="gray.300" fontFamily="Playfair Display">
          Адвокатское бюро INTERNATIONAL LEGAL ADVISOR
        </Text>
      </Box>


      <Box bg="white" py="20" px={{ base: 6, md: 20 }}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 0.9fr" }}
          gap="16"
          alignItems="center"
        >

          <Box pr={{ md: 8 }}>
            <Heading size="lg" fontWeight="500" mb="4" fontFamily="Playfair Display">
              Защищаю ваши права
              <Box w="40px" h="2px" bg="brand.700" mt="3" />
            </Heading>

            <Text color="brand.600" lineHeight="1.8" fontFamily="Playfair Display">
              Правоприменение может показаться сложным для неподготовленного человека. Чувствуете, что с вами обошлись несправедливо, но не знаете с чего начать? Предоставляя исчерпывающие юридические консультации как физическим так и юридическим лицам с марта 2021 года, Адвокатское бюро INTERNATIONAL LEGAL ADVISOR использует индивидуальный подход и понятный язык и не оставляет места недопониманию. Без сомнения, судебный процесс может быть очень утомительным и спровоцировать у пострадавшего еще больше стресса. Вот почему цель любого грамотного юриста — помочь человеку успокоиться, разъяснив ему права и указав на нюансы, которые могут повлиять на благополучный исход дела.
              Никогда не забываю, что клиенты — это, прежде всего, люди со своими эмоциями и системой ценностей. Каким бы сложным ни было дело, Адвокатское бюро INTERNATIONAL LEGAL ADVISOR держит каждого клиента в курсе событий и лично консультирует в случаях, когда необходимо принимать важные решения по делу. Спокойно и эффективно — только так. Позвоните и запишитесь на консультацию.
            </Text>
          </Box>


          <Box display="flex" justifyContent="center">
            <Image
              src="/images/about.jpg"
              alt="Юридическая практика"
              borderRadius="lg"
              boxShadow="2xl"
              w="100%"
              h={{ md: "520px"}}
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Box>
      <ContactForm/>
    </>
  )
}

export default About
