import React from 'react'
import { Box, Grid, Heading, Icon, Text } from '@chakra-ui/react'
import { FaPhoneAlt, FaEnvelope, FaTelegramPlane, FaMapMarkerAlt } from "react-icons/fa"

const ContactCard = ({ icon, title, text, link }) => (
  <Box
    as={link ? "a" : "div"}
    href={link}
    target={link ? "_blank" : undefined}
    bg="white"
    p="8"
    boxShadow="md"
    borderRadius="md"
    textAlign="center"
    color="black"                
    textDecoration="none"         
    _hover={{
      transform: "translateY(-4px)",
      boxShadow: "xl",
      color: "black",             
      textDecoration: "none"
    }}
    transition="0.3s"
  >
    <Icon as={icon} boxSize="8" color="black" mb="4" />
    <Heading size="md" mb="2" fontWeight="500">
      {title}
    </Heading>
    <Text color="black">{text}</Text>
  </Box>
)



const Contacts = () => {
  return (
    <>
      <Box
        textAlign="center"
        py={{ base: "20", md: "28" }}
        bgImage="linear-gradient(rgba(70, 88, 105, 0.88), rgba(48, 60, 73, 0.88)), url('/images/contact.jpg')"
        bgSize="cover"
        bgPos="center"
        color="white"
      >
        <Heading size="2xl" mb="3" fontWeight="500">
          Связаться с нами
        </Heading>
        <Text maxW="600px" mx="auto" color="gray.300">
          Защита интересов, обеспечение правовой помощи, сопровождение бизнеса и судебная практика.
        </Text>
      </Box>

      <Box bg="gray.50" color="brand.900" py="20" px={{ base: 6, md: 20 }}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="8" textAlign="center">
          <ContactCard icon={FaPhoneAlt} title="Позвоните нам" text="+998 97 777 13 68" />
          <ContactCard icon={FaTelegramPlane} title="Telegram" text="@internationallegaladvisor" link="https://t.me/internationallegaladvisor" />
          <ContactCard icon={FaEnvelope} title="Напишите нам" text="s998931811368@gmail.com  tiger_s2020@mail.ru" />
          <ContactCard icon={FaMapMarkerAlt} title="Адрес" text="г. Ташкент, ул. Яншиланиш 48" />
        </Grid>
      </Box>

      <Box h="350px">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d199.7259504583813!2d69.36824453814394!3d41.23350511528604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sru!2s!4v1769583071964!5m2!1sru!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        />
      </Box>
    </>
  )
}

export default Contacts
