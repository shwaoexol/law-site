import { Box, Container, Grid, Heading, Text, VStack, Icon, Link as ChakraLink } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaGavel, FaUsers, FaBalanceScale, FaBriefcase, FaShieldAlt, FaGlobe } from 'react-icons/fa'

const MotionBox = motion(Box)

const services = [
  {
    title: "criminal_title",
    text: "criminal_desc",
    icon: FaGavel
  },
  {
    title: "corporate_conflicts_title",
    text: "corporate_conflicts_desc",
    icon: FaUsers
  },
  {
    title: "appeal_title",
    text: "appeal_desc",
    icon: FaBalanceScale
  },
  {
    title: "business_title",
    text: "business_desc",
    icon: FaBriefcase
  },
  {
    title: "abuse_rights_title",
    text: "abuse_rights_desc",
    icon: FaShieldAlt
  },
  {
    title: "migration_title",
    text: "migration_desc",
    icon: FaGlobe
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

const Services = () => {
  const { t } = useTranslation()

  return (
    <Box bg="#F8F7F5" py={{ base: 12, md: 24 }}>
      <Container maxW="1200px">

        {/* TITLE */}
        <Heading
          mb={14}
          textAlign="center"
          fontFamily="Playfair Display"
          fontWeight="500"
          letterSpacing="1px"
        >
          {t('services')}
        </Heading>

        {/* GRID */}
        <Grid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={10}
        >
          {services.map((service, i) => (
            <MotionBox
              key={i}
              variants={itemVariants}
              p={{ base: 6, md: 10 }}
              bg="white"
              borderRadius="2xl"
              border="1px solid #e6e6e6"
              position="relative"
              overflow="hidden"
              transition="all .4s ease"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.08)"
              }}
            >

              {/* ICON */}
              <Icon
                as={service.icon}
                boxSize={6}
                color="#1f2f46"
                mb={4}
              />

              <VStack align="flex-start" spacing={4}>

                {/* TITLE */}
                <Heading
                  size="sm"
                  fontFamily="Playfair Display"
                  color="#1f2f46"
                  lineHeight="1.4"
                >
                  {t(service.title)}
                </Heading>

                {/* TEXT */}
                <Text
                  fontSize="sm"
                  color="gray.600"
                  lineHeight="1.7"
                >
                  {t(service.text)}
                </Text>

                {/* LINK */}
                <ChakraLink
                  as={NavLink}
                  to="/contacts"
                  fontSize="sm"
                  fontWeight="500"
                  color="#1f2f46"
                  position="relative"
                  pt={2}
                  _after={{
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: "0px",
                    width: "100%",
                    height: "1px",
                    bg: "#1f2f46",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform .3s"
                  }}
                  _hover={{
                    textDecoration: "none",
                    _after: {
                      transform: "scaleX(1)"
                    }
                  }}
                >
                  {t('cta_consultation')}
                </ChakraLink>

              </VStack>

            </MotionBox>
          ))}
        </Grid>

      </Container>
    </Box>
  )
}

export default Services