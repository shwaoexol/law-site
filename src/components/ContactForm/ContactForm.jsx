import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Box, Button, Input, Textarea, Heading, Text, VStack, HStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const ContactForm = () => {
  const form = useRef()
  const { t } = useTranslation()
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('loading')

    emailjs
      .sendForm(
        'service_jo4swbv',
        'template_qtf4jsq',
        form.current,
        { publicKey: '--57B5cXdCcZGtBwn' }
      )
      .then(
        () => {
          setStatus('success')
          form.current.reset()
        },
        () => {
          setStatus('error')
        }
      )
  }

  return (
    <Box bg="#0f1419" py={{ base: 16, md: 24 }} px={6} color="white">
      <Box maxW="700px" mx="auto">

        {/* TITLE */}
        <VStack spacing={4} mb={10} textAlign="center">
          <Text
            fontSize="12px"
            letterSpacing="2px"
            textTransform="uppercase"
            color="gray.400"
          >
            Contact
          </Text>

          <Heading
            fontFamily="Playfair Display"
            fontWeight="500"
            fontSize={{ base: "26px", md: "36px" }}
          >
            {t('form_title')}
          </Heading>

          <Box w="40px" h="1px" bg="gray.600" />
        </VStack>

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail}>
          <VStack spacing={6}>

            <HStack spacing={4} w="100%" flexDirection={{ base: "column", md: "row" }}>
              
              <Input
                name="name"
                placeholder={t('form_name')}
                variant="unstyled"
                borderBottom="1px solid #444"
                borderRadius="0"
                _focus={{ borderColor: "white" }}
                py={3}
              />

              <Input
                name="email"
                type="email"
                placeholder="Email"
                variant="unstyled"
                borderBottom="1px solid #444"
                borderRadius="0"
                _focus={{ borderColor: "white" }}
                py={3}
              />

            </HStack>

            <Textarea
              name="message"
              placeholder={t('form_message')}
              variant="unstyled"
              borderBottom="1px solid #444"
              borderRadius="0"
              _focus={{ borderColor: "white" }}
              py={3}
              resize="none"
              minH="120px"
            />

            <Button
              type="submit"
              bg="white"
              color="black"
              px={8}
              py={6}
              fontWeight="500"
              borderRadius="0"
              _hover={{
                bg: "gray.200"
              }}
              isLoading={status === 'loading'}
            >
              {t('form_submit')}
            </Button>

            {/* STATUS */}
            {status === 'success' && (
              <Text color="green.400" fontSize="sm">
                {t('success_message') || 'Message sent successfully'}
              </Text>
            )}

            {status === 'error' && (
              <Text color="red.400" fontSize="sm">
                {t('error_message') || 'An error occurred'}
              </Text>
            )}

          </VStack>
        </form>

      </Box>
    </Box>
  )
}

export default ContactForm