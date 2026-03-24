import React from 'react'
import { Box, Grid, Heading, Icon, Text, Link } from '@chakra-ui/react'
import { FaPhoneAlt, FaEnvelope, FaTelegramPlane, FaWhatsapp,  FaMapMarkerAlt } from "react-icons/fa"
import { useTranslation } from 'react-i18next'

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
    <Heading size="md" mb="2" fontWeight="500" fontFamily="Playfair Display">
      {title}
    </Heading>
    <Text color="black">{text}</Text>
  </Box>
)



const Contacts = () => {
  const { t } = useTranslation()

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
        <Heading size="2xl" mb="3" fontWeight="500" fontFamily="Playfair Display">
          {t('contact_title')}
        </Heading>

        <Text maxW="600px" mx="auto" color="gray.300">
          {t('footer_description')}
        </Text>
      </Box>

      <Box bg="gray.50" color="brand.900" py="20" px={{ base: 6, md: 20 }}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="8">

          <ContactCard
            icon={FaPhoneAlt}
            title={t('contact_call')}
            text={
              <Link href="tel:+998977771368" color="inherit">
                +998 97 777 13 68
              </Link>
            }
          />

          <ContactCard
            icon={FaTelegramPlane}
            title="Telegram"
            text="@internationallegaladvisor"
            link="https://t.me/internationallegaladvisor"
          />

          <ContactCard
            icon={FaWhatsapp}
            title="Whatsapp"
            text="+998 33 339 33 99"
            link="https://wa.me/998333393399"
          />

          <ContactCard
            icon={FaEnvelope}
            title={t('contact_write')}
            text={
              <>
                <Link href="mailto:s998931811368@gmail.com" color="inherit">
                  s998931811368@gmail.com
                </Link>
                <br />
                <Link href="mailto:tiger_s2020@mail.ru" color="inherit">
                  tiger_s2020@mail.ru
                </Link>
              </>
            }
          />

          <ContactCard
            icon={FaMapMarkerAlt}
            title={t('contact_address_label')}
            text={t('contact_address')}
          />

        </Grid>
      </Box>
    </>
  )
}

export default Contacts
